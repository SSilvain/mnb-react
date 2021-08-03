import YoutubeVideo from "./YoutubeVideo/YoutubeVideo";

const videosData = [
	{ id: "976LGx9NP0A", title: "Allsa", status: "video", idStatus: 0 },
	{ id: "r-VXB9LRMoo", title: "Ne zalishaj", status: "img", idStatus: 1 },
	{ id: "tgL4BUJAgEo", title: "Kintseva zupynka", status: "img", idStatus: 2 },
	{ id: "5MkNL1S75fU", title: "Ot sebyz", status: "img", idStatus: 3 },
	{ id: "SQkI6b4tBYU", title: "Z toboyu", status: "img", idStatus: 4 },
]

const changeStatus = (idStatus) => {
	videosData[idStatus].status = "video";
	
}


const YoutubeVideos = () => {

	return videosData.map((v) => { return <YoutubeVideo idStatus={v.idStatus} id={v.id} title={v.title} status={v.status} changeStatus={changeStatus} /> });
}


export default YoutubeVideos;