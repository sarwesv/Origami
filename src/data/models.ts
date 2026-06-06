import * as THREE from 'three';

export interface FaceData {
  id: string;
  points: [number, number, number][]; // 2D points on the paper sheet (x, y, 0)
  parentId?: string;
}

export interface AnimationData {
  faceIds: string[];
  axis: [number, number, number];
  pivot: [number, number, number];
  angle: number; // relative rotation from flat
}

export interface FoldStep {
  description: string;
  animations: AnimationData[];
}

export interface OrigamiModel {
  name: string;
  faces: FaceData[];
  steps: FoldStep[];
}

/**
 * NINJA STAR DATA
 */
export const NINJA_STAR: OrigamiModel = {
  name: 'Ninja Star',
  faces: [
    { id: 'f1', points: [[0, 0, 0], [1, 0, 0], [1, 1, 0]] }, 
    { id: 'f2', points: [[0, 0, 0], [1, 1, 0], [0, 1, 0]] }, 
    { id: 'f3', points: [[0, 0, 0], [0, 1, 0], [-1, 1, 0]] }, 
    { id: 'f4', points: [[0, 0, 0], [-1, 1, 0], [-1, 0, 0]] },
    { id: 'f5', points: [[0, 0, 0], [-1, 0, 0], [-1, -1, 0]] },
    { id: 'f6', points: [[0, 0, 0], [-1, -1, 0], [0, -1, 0]] },
    { id: 'f7', points: [[0, 0, 0], [0, -1, 0], [1, -1, 0]] },
    { id: 'f8', points: [[0, 0, 0], [1, -1, 0], [1, 0, 0]] },
  ],
  steps: [
    {
      description: 'Start with a square sheet of paper.',
      animations: []
    },
    {
      description: 'Fold the top-right corner to the center.',
      animations: [
        { faceIds: ['f1'], axis: [-1, 1, 0], pivot: [0.5, 0.5, 0], angle: Math.PI * 0.9 }
      ]
    },
    {
      description: 'Fold the top-left corner to the center.',
      animations: [
        { faceIds: ['f1'], axis: [-1, 1, 0], pivot: [0.5, 0.5, 0], angle: Math.PI * 0.9 },
        { faceIds: ['f3'], axis: [1, 1, 0], pivot: [-0.5, 0.5, 0], angle: Math.PI * 0.9 }
      ]
    },
    {
      description: 'Fold all corners to the center to form a smaller square.',
      animations: [
        { faceIds: ['f1'], axis: [-1, 1, 0], pivot: [0.5, 0.5, 0], angle: Math.PI * 0.9 },
        { faceIds: ['f3'], axis: [1, 1, 0], pivot: [-0.5, 0.5, 0], angle: Math.PI * 0.9 },
        { faceIds: ['f5'], axis: [1, -1, 0], pivot: [-0.5, -0.5, 0], angle: Math.PI * 0.9 },
        { faceIds: ['f7'], axis: [-1, -1, 0], pivot: [0.5, -0.5, 0], angle: Math.PI * 0.9 },
      ]
    }
  ]
};

export const SWAN: OrigamiModel = {
  name: 'Swan',
  faces: [
    { id: 's1', points: [[0, 0, 0], [1, 1, 0], [-1, 1, 0]] }, // Head/Neck
    { id: 's2', points: [[0, 0, 0], [-1, 1, 0], [-1, -1, 0]] }, // Body Left
    { id: 's3', points: [[0, 0, 0], [-1, -1, 0], [1, -1, 0]] }, // Tail
    { id: 's4', points: [[0, 0, 0], [1, -1, 0], [1, 1, 0]] }, // Body Right
  ],
  steps: [
    {
      description: 'Start with a square sheet of paper rotated 45 degrees.',
      animations: []
    },
    {
      description: 'Fold the paper in half along the diagonal.',
      animations: [
        { faceIds: ['s1', 's2'], axis: [1, 1, 0], pivot: [0, 0, 0], angle: Math.PI * 0.5 }
      ]
    },
    {
      description: 'Lift the neck section upwards.',
      animations: [
        { faceIds: ['s1', 's2'], axis: [1, 1, 0], pivot: [0, 0, 0], angle: Math.PI * 0.5 },
        { faceIds: ['s1'], axis: [0, 0, 1], pivot: [0, 0, 0], angle: -Math.PI * 0.3 }
      ]
    }
  ]
};
