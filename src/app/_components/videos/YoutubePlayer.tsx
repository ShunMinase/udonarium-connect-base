import { getParamFromUrlString } from '@/app/_modules/url'

type Props = {
  videoUrl: string
}
export default function YoutubePlayer(props: Props) {

  // 動画IDの取得
  function getId() {
    return getParamFromUrlString(props.videoUrl, "v")
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/${getId()}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    >
    </iframe>
  );
}