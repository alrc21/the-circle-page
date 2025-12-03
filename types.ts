export interface MousePosition {
  x: number;
  y: number;
}

export type AppStatus = 'idle' | 'destroying' | 'success';

export interface WebGLProps {
  chaosLevel: number;
}