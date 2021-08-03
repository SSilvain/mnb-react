import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


	function findVideos() {
        let videos = document.querySelectorAll(".video");

        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector(".video__link");
        let media = video.querySelector(".video__media");
        let button = video.querySelector(".video__button");
        let id = parseMediaURL(media);

        video.addEventListener("click", () => {
            let iframe = createIframe(id);

            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute("href");
        video.classList.add("video--enabled");
    }

    function parseMediaURL(media) {
        let regexp =
            /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {
        let iframe = document.createElement("iframe");

        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("allow", "autoplay");
        iframe.setAttribute("src", generateURL(id));
        iframe.classList.add("video__media");

        return iframe;
    }

    function generateURL(id) {
        let query = "?rel=0&showinfo=0&autoplay=1";

        return "https://www.youtube.com/embed/" + id + query;
    }

    // findVideos();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
