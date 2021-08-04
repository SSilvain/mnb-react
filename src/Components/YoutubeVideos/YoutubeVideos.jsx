import { useDispatch, useSelector } from "react-redux";
import YoutubeVideo from "./YoutubeVideo/YoutubeVideo";


let videosData = [
	{ id: "976LGx9NP0A", title: "Allsa", status: "img", idStatus: 0 },
	{ id: "r-VXB9LRMoo", title: "Ne zalishaj", status: "video", idStatus: 1 },
	{
		id: "tgL4BUJAgEo",
		title: "Kintseva zupynka",
		status: "img",
		idStatus: 2,
	},
	{ id: "5MkNL1S75fU", title: "Ot sebyz", status: "img", idStatus: 3 },
	{ id: "SQkI6b4tBYU", title: "Z toboyu", status: "img", idStatus: 4 },
]

const YoutubeVideos = () => {
	

	let dispatch = useDispatch();
	let videos = useSelector(state => state.videos);

	const changeStatus = (idStatus) => {
		
		videosData[idStatus].status = "video";
		
		dispatch({ type: "VIDEO", videosNew: videosData });
		console.log("ok");


	}

	return videos.map((v) => { return <YoutubeVideo idStatus={v.idStatus} id={v.id} title={v.title} status={v.status} changeStatus={changeStatus} /> });
}


export default YoutubeVideos;