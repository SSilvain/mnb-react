import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import YoutubeVideo from "./YoutubeVideo/YoutubeVideo";
import { statusvideo } from "./YoutubeVideosSlice";

const YoutubeVideos = () => {
	
	let  [stateTmp, setStateTmp ] = useState(0);

	let dispatch = useDispatch();

	
	let videos = useSelector((state) => state.yotubevideos.videos);
	
	const changeStatus = (idStatus) => {
		dispatch(statusvideo(idStatus));
		
	}

	return videos.map((v) => { return <YoutubeVideo resolution={v.resolution} idStatus={v.idStatus} key={v.idStatus} id={v.id} title={v.title} status={v.status} changeStatus={changeStatus} /> });
}


export default YoutubeVideos;