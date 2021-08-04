import { useDispatch, useSelector } from "react-redux";
import YoutubeVideo from "./YoutubeVideo/YoutubeVideo";

const YoutubeVideos = () => {
	

	let dispatch = useDispatch();
	let videos = useSelector(state => state.videos);

	const changeStatus = (idStatus) => {
		
			
		videosNew = [...videos, videos[action.idStatus].status = "video"];
		
		dispatch({ type: "VIDEO", videosNew: videosNew });
		console.log("ok");


	}

	return videos.map((v) => { return <YoutubeVideo idStatus={v.idStatus} id={v.id} title={v.title} status={v.status} changeStatus={changeStatus} /> });
}


export default YoutubeVideos;