
/*
    store, a object containse data/state for UI components
*/

const store = {
    getState() {
        return {
            playlists: [
                "playlist-1",
                "playlist-2",
                "playlist-3",
                "playlist-4",
                "playlist-5",
                "playlist-6",
            ],
            tracks: {
                'playlist-1': [
                    "track-1",
                    "track-2",
                    "track-3"
                ],
                'playlist-2': [
                    "track-11",
                    "track-22",
                    "track-33"
                ]
            }
        }
    }
}

export default store;