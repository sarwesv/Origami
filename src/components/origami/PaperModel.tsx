import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { NINJA_STAR, SWAN } from "../../data/models";
import type { FaceData } from '../../data/models';
import { useFoldAnimation } from '../../hooks/useFoldAnimation';

interface PaperModelProps {
  model: 'swan' | 'ninjaStar';
  step: number;
}

const Face: React.FC<{ data: FaceData; faceRefs: any }> = ({ data, faceRefs }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(data.points[0][0], data.points[0][1]);
    for (let i = 1; i < data.points.length; i++) {
      shape.lineTo(data.points[i][0], data.points[i][1]);
    }
    shape.closePath();
    return new THREE.ShapeGeometry(shape);
  }, [data]);

  return (
    <group ref={(el) => (faceRefs.current[data.id] = el)}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial 
          color="#ffffff" 
          side={THREE.DoubleSide} 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};

const PaperModel: React.FC<PaperModelProps> = ({ model, step }) => {
  const modelData = model === 'ninjaStar' ? NINJA_STAR : SWAN;
  const faceRefs = useRef<{ [key: string]: THREE.Group | null }>({});

  useFoldAnimation(modelData, step, faceRefs);

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {modelData.faces.map((face) => (
        <Face key={face.id} data={face} faceRefs={faceRefs} />
      ))}
    </group>
  );
};

export default PaperModel;
