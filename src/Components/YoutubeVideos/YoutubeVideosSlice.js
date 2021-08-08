import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "yotubevideosActions",
    initialState: {
        videos: [
            {
                id: "976LGx9NP0A",
                title: "Allsa",
                status: "img",
                resolution: "maxresdefault",
                idStatus: 0,
            },
            {
                id: "r-VXB9LRMoo",
                title: "Ne zalishaj",
                status: "img",
                resolution: "maxresdefault",
                idStatus: 1,
            },
            {
                id: "tgL4BUJAgEo",
                title: "Kintseva zupynka",
                status: "img",
                resolution: "maxresdefault",
                idStatus: 2,
            },
            {
                id: "5MkNL1S75fU",
                title: "Ot sebyz",
                status: "img",
                resolution: "maxresdefault",
                idStatus: 3,
            },
            {
                id: "SQkI6b4tBYU",
                title: "Z toboyu",
                status: "img",
                resolution: "hqdefault",
                idStatus: 4,
            },
        ],
    },
    reducers: {
        statusvideo: (state, action) => {
            state.videos[action.payload].status = "video";
            

            return state; 
        },
    },
});

export const { statusvideo } = slice.actions;
// export const selectVideos = (state) => state.yotubevideos.videos;
export default slice.reducer;
