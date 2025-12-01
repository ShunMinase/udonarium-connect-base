import { useEffect, useState } from "react";
import { qsAll, removeClass, addClass, qs } from '@/app/_modules/qs'
import { getParamFromUrlString } from '@/app/_modules/url'
import useYTApi from '@/app/_hooks/useYTApi'

type Props = {
  videoUrl: string | undefined,
  stop?: boolean
}
export default function YoutubeAutoPlayer(props: Props) {



  const [youtubeInitialized, setYoutubeInitialized] = useState(false);
  const [YTPlayer, setYTPlayer] = useState<YT.Player | null>(null);



  const ytApi = useYTApi();

  // 初回はYouTubeのscriptを読み込み、プレイヤーを初期化
  useEffect(() => {

    // videoUrlがundefinedの場合は初期化しない
    if (!props.videoUrl) return;

    // 既にapiがブラウザに読み込まれていたらapiのscriptタグは作らずプレイヤーの初期化のみ行う
    if (ytApi.isLoaded) {
      initYoutubeIframe()
      return
    }

    // apiの読み込み
    const scripttag = document.createElement('script');
    scripttag.setAttribute('class', 'youtube_api');
    scripttag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];

    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(scripttag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      initYoutubeIframe();
      ytApi.loaded();
    };
  }, [props.videoUrl]);

  // 別の動画が選択されたらプレイヤーを削除し、再度プレイヤーを初期化
  useEffect(() => {
    if (youtubeInitialized) {
      qsAll("#player_inner").forEach((element: any) => {
        element.remove();
      });
      initYoutubeIframe();
    }
  }, [props.videoUrl]);

  // モーダルの開閉が切り替わったら非活性活性を切り替える
  useEffect(() => {
    if (youtubeInitialized && YTPlayer) {
      const playerWrapper = qs("#player_wrapper");
      const player = qs("#player_wrapper iframe");
      if (props.stop) {
        YTPlayer.pauseVideo();
        addClass(playerWrapper, "disabled");
      } else {
        YTPlayer.playVideo();
        removeClass(playerWrapper, "disabled");
      }
    }
  }, [props.stop, youtubeInitialized, YTPlayer]);

  // 画面の外に行ったら一時停止
  useEffect(() => {
    const target = qs("#player_wrapper");
    const observer = new IntersectionObserver(callback);
    observer.observe(target);
    return () => {
      observer.disconnect();
    };
    function callback(entries: any) {

      for (const elm of entries) {
        if (elm.isIntersecting) {
          if (youtubeInitialized && YTPlayer) {
            YTPlayer.playVideo();
          }
        } else {
          if (youtubeInitialized && YTPlayer) {
            YTPlayer.pauseVideo();
          }
        }
      }
    }
  }, [youtubeInitialized, YTPlayer]);

  // 他のタブに切り替えたら一時停止
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (youtubeInitialized && YTPlayer) {
        if (document.hidden) {
          YTPlayer.pauseVideo();
        } else {
          YTPlayer.playVideo();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [youtubeInitialized, YTPlayer]);



  // 動画IDの取得
  function getId() {
    return getParamFromUrlString(props.videoUrl ?? "", "v")
  }



  // プレイヤーを初期化する関数
  function initYoutubeIframe() {

    setYoutubeInitialized(false);

    // ラッパーの初期化
    const playerWrapper = qs("#player_wrapper");
    const divtag = document.createElement('div');
    divtag.setAttribute('id', 'player_inner');
    playerWrapper.appendChild(divtag);

    // Playerの初期化
    const player = new YT.Player('player_inner', {
      videoId: getId(),
      playerVars: {
        autoplay: 1, // 自動再生
        mute: 1, // 音声をミュート
        playsinline: 1, // インライン再生
        loop: 1, // 動画を繰り返し再生
        controls: 0, // コントロール非表示
        disablekb: 1, // キーボードでの操作無効
        enablejsapi: 1, // JS API使用
        modestbranding: 1, // ロゴ非表示
        rel: 0, // 関連動画非表示
        showinfo: 0, // タイトルなど非表示
        fs: 0, // フルスクリーンボタン非表示
        iv_load_policy: 3, // アノテーション非表示
        cc_load_policy: 0, // 字幕非表示
        frameborder: 0, // 枠線非表示
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });

    function onPlayerReady(event: any) {
      setYTPlayer(player)
      setYoutubeInitialized(true);
      event.target.setPlaybackQuality("hd1080")
      event.target.mute()
      event.target.playVideo()
      addClass(playerWrapper, "active");
    }
    function onPlayerStateChange(event: any) {
      if (event.data === YT.PlayerState.ENDED) {
        event.target.playVideo()
      }
    }
  }

  const [hideOverlay, setHideOverlay] = useState(false);

  // YouTubeの読み込み完了から3秒後にオーバーレイをフェードアウト
  useEffect(() => {
    if (!youtubeInitialized) return;

    const timer = setTimeout(() => {
      setHideOverlay(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [youtubeInitialized]);

  return (
    <>
      <div id="player_wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)',
            pointerEvents: 'none',
            zIndex: 2,
            mixBlendMode: 'multiply',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.2,
            backgroundImage: 'url("/img/background_noise.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: '150px',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
        {/* タイトル・ロゴを隠すオーバーレイ（3秒後にフェードアウト） */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100px',
            background: 'black',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: hideOverlay ? 0 : 1,
            transition: 'opacity 1s ease-out',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100px',
            background: 'black',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: hideOverlay ? 0 : 1,
            transition: 'opacity 1s ease-out',
          }}
        />
      </div>
    </>
  );
}