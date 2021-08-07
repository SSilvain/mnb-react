import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "yotubevideosActions",
    initialState: {
        videos: [
            {
                id: "976LGx9NP0A",
                title: "Allsa",
                status: "img",
                resolution: "max",
                idStatus: 0
            },
            {
                id: "r-VXB9LRMoo",
                title: "Ne zalishaj",
                status: "img",
                resolution: "max",
                idStatus: 1,
            },
            {
                id: "tgL4BUJAgEo",
                title: "Kintseva zupynka",
                status: "img",
                resolution: "max",
                idStatus: 2,
            },
            {
                id: "5MkNL1S75fU",
                title: "Ot sebyz",
                status: "img",
                resolution: "max",
                idStatus: 3,
            },
            {
                id: "SQkI6b4tBYU",
                title: "Z toboyu",
                status: "img",
                resolution: "mid",
                idStatus: 4,
            },
        ],
    },
    reducers: {
        statusvideo: (state, action) => {
            state.videos[action.payload].status = "video";
            return state;
        },
        consolevideo: (state, action) => {
            console.log(action);
            return state;
        }
    },
});

export const { statusvideo, consolevideo } = slice.actions;
// export const selectVideos = (state) => state.yotubevideos.videos;
export default slice.reducer;
