import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import type { OrigamiModel } from '../data/models';

export const useFoldAnimation = (
  model: OrigamiModel,
  step: number,
  faceRefs: React.MutableRefObject<{ [key: string]: THREE.Group | null }>
) => {
  useEffect(() => {
    const timeline = gsap.timeline();
    
    // Reset all rotations first for simplicity in this step-by-step logic
    // In a more complex app, we would animate FROM the previous state
    Object.values(faceRefs.current).forEach((ref) => {
      if (ref) {
        timeline.to(ref.rotation, { x: 0, y: 0, z: 0, duration: 0.5 }, 0);
      }
    });

    // Apply animations for current step
    const stepData = model.steps[step];
    if (stepData) {
      stepData.animations.forEach((anim) => {
        anim.faceIds.forEach((id) => {
          const ref = faceRefs.current[id];
          if (ref) {
            // We rotate around the axis at the pivot
            // For this simple version, we'll just animate rotation directly
            // Proper pivot rotation requires offsetting the mesh within the group
            const axis = new THREE.Vector3(...anim.axis).normalize();
            const targetRotation = new THREE.Euler().setFromQuaternion(
              new THREE.Quaternion().setFromAxisAngle(axis, anim.angle)
            );
            
            timeline.to(ref.rotation, {
              x: targetRotation.x,
              y: targetRotation.y,
              z: targetRotation.z,
              duration: 1,
              ease: 'power2.inOut'
            }, 0.5);
          }
        });
      });
    }

    return () => {
      timeline.kill();
    };
  }, [model, step, faceRefs]);
};
