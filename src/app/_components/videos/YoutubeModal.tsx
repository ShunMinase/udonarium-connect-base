import YoutubePlayer from './YoutubePlayer'
type Props = {
  modal: any
  handleModalClose: any
  videoUrl: string
}
export default function YoutubeModal(props: Props) {

  return (
    <>
      <props.modal>
        <div onClick={props.handleModalClose} className="youtube_modal_wrapper">
          <YoutubePlayer videoUrl={props.videoUrl} />
          <button onClick={props.handleModalClose}>✕ CLOSE</button>
        </div>
      </props.modal>
    </>
  );
}