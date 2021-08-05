import { useDispatch, useSelector } from "react-redux";
import YoutubeVideo from "./YoutubeVideo/YoutubeVideo";
import { statusvideo, consolevideo } from "./YoutubeVideosSlice";

const YoutubeVideos = () => {
	

	let dispatch = useDispatch();

	
	let videos = useSelector((state) => state.yotubevideos.videos);

	const changeStatus = (idStatus) => {
		dispatch(statusvideo(idStatus));
		dispatch(consolevideo("hello"));
	}

	return videos.map((v) => { return <YoutubeVideo idStatus={v.idStatus} id={v.id} title={v.title} status={v.status} changeStatus={changeStatus} /> });
}


export default YoutubeVideos;