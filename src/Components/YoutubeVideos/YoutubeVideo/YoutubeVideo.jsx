import s from "./YoutubeVideo.module.css"

const YoutubeVideo = (props) => {
	// return (
	// 	<div className={s.youtubeVideo}>
	// 		<iframe
	// 			src={"https://www.youtube.com/embed/" + props.id}
	// 			frameborder="0"
	// 			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	// 			allowfullscreen="allowfullscreen"
	// 		></iframe>
	// 	</div>
	// )


	return (
		<div className={s.video}>
			<a className={s.video__link} href={"https://youtu.be/" + props.id}>
				<picture>
					<source srcset={"https://i.ytimg.com/vi_webp/" + props.id + "/maxresdefault.webp"} type="image/webp" />
					<img className={s.video__media} src={"https://i.ytimg.com/vi/" + props.id + "/maxresdefault.jpg"} alt="1. Пилот, разборы, ответы и лайвы" />
				</picture>
			</a>
			<button className={s.video__button} aria-label="Запустить видео">
				<svg width="68" height="48" viewBox="0 0 68 48"><path className={s.video__buttonShape} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path className={s.video__buttonIcon} d="M 45,24 27,14 27,34"></path></svg>
			</button>
		</div>
	)
}

export default YoutubeVideo;