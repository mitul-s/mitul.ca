// use-sound ships typings via the top-level "typings" field, but its
// package.json "exports" map lacks a "types" condition, so they can't be
// resolved with moduleResolution: "bundler". Shim the public API here.
declare module "use-sound" {
  export interface UseSoundOptions {
    volume?: number;
    playbackRate?: number;
    interrupt?: boolean;
    soundEnabled?: boolean;
  }

  export interface PlayOptions {
    id?: string;
    forceSoundEnabled?: boolean;
  }

  export type PlayFunction = (options?: PlayOptions) => void;

  export interface ExposedData {
    stop: (id?: string) => void;
    pause: (id?: string) => void;
    isPlaying: boolean;
  }

  export default function useSound(
    src: string | string[],
    options?: UseSoundOptions,
  ): [PlayFunction, ExposedData];
}
