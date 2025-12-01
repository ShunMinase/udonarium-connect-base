declare module "*.jpg";
declare module "*.png";
declare module "*.webp";
declare module "*.svg";
declare module "*.gif";
declare module "*.mp4";
declare module "*.mp3";

// YouTube IFrame API の型定義
declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }

  namespace YT {
    enum PlayerState {
      UNSTARTED = -1,
      ENDED = 0,
      PLAYING = 1,
      PAUSED = 2,
      BUFFERING = 3,
      CUED = 5,
    }

    interface PlayerOptions {
      videoId: string;
      playerVars?: PlayerVars;
      events?: Events;
    }

    interface PlayerVars {
      autoplay?: 0 | 1;
      mute?: 0 | 1;
      playsinline?: 0 | 1;
      loop?: 0 | 1;
      controls?: 0 | 1;
      disablekb?: 0 | 1;
      enablejsapi?: 0 | 1;
      modestbranding?: 0 | 1;
      rel?: 0 | 1;
      showinfo?: 0 | 1;
      fs?: 0 | 1;
      iv_load_policy?: 1 | 3;
      cc_load_policy?: 0 | 1;
      frameborder?: 0 | 1;
    }

    interface Events {
      onReady?: (event: PlayerEvent) => void;
      onStateChange?: (event: OnStateChangeEvent) => void;
    }

    interface PlayerEvent {
      target: Player;
    }

    interface OnStateChangeEvent {
      target: Player;
      data: PlayerState;
    }

    class Player {
      constructor(elementId: string, options: PlayerOptions);
      playVideo(): void;
      pauseVideo(): void;
      stopVideo(): void;
      mute(): void;
      unMute(): void;
      setPlaybackQuality(quality: string): void;
      getPlayerState(): PlayerState;
      destroy(): void;
    }
  }
}

export {};
