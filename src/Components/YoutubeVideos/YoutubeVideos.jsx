import YoutubeVideo from "./YoutubeVideo/YoutubeVideo";

const videosData = [
	{ id: "976LGx9NP0A", title: "Allsa" },
	{ id: "r-VXB9LRMoo", title: "Ne zalishaj" },
	{ id: "tgL4BUJAgEo", title: "Kintseva zupynka" },
	{ id: "5MkNL1S75fU", title: "Ot sebyz" },
	{ id: "SQkI6b4tBYU", title: "Z toboyu" },
]


const YoutubeVideos = () => {
	return videosData.map((v) => { return <YoutubeVideo id={v.id} /> });
}


export default YoutubeVideos;