import { configureStore } from "@reduxjs/toolkit";

import yotubevideosReducer from "../Components/YoutubeVideos/YoutubeVideosSlice";

export default configureStore({
    reducer: {
        yotubevideos: yotubevideosReducer,
    },
});