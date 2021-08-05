import { useDispatch, useSelector } from "react-redux";
import YoutubeVideo from "./YoutubeVideo/YoutubeVideo";

const YoutubeVideos = () => {
	

	let dispatch = useDispatch();
	let state = useSelector(state => state);
	
	let videos = state.videos;

	const changeStatus = (idStatus) => {
		
		videos[idStatus].status = "video";
		let videosTmp = videos;
		
		dispatch({ type: "VIDEO", videosNew: videosTmp });
		console.log("ok");


	}

	return videos.map((v) => { return <YoutubeVideo idStatus={v.idStatus} id={v.id} title={v.title} status={v.status} changeStatus={changeStatus} /> });
}


export default YoutubeVideos;