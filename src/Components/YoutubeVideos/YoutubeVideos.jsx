import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import YoutubeVideo from "./YoutubeVideo/YoutubeVideo";
import { statusvideo, consolevideo } from "./YoutubeVideosSlice";

const YoutubeVideos = () => {
	
	let { stateTmp, setStateTmp } = useState();

	let dispatch = useDispatch();

	
	let videos = useSelector((state) => state.yotubevideos.videos);
	
	let stateTest = useSelector((state) => state.yotubevideos);
	
	

	const changeStatus = (idStatus) => {
		dispatch(statusvideo(idStatus));
		dispatch(consolevideo("hello"));
		console.log();
		setStateTmp(stateTest);
		
	}

	return videos.map((v) => { return <YoutubeVideo idStatus={v.idStatus} key={v.idStatus} id={v.id} title={v.title} status={v.status} changeStatus={changeStatus} /> });
}


export default YoutubeVideos;