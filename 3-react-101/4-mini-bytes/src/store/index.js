
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
                    { id: 11, title: 'track-11', duration: 4 },
                    { id: 22, title: 'track-22', duration: 5 },
                ],
                'playlist-2': [
                    { id: 1, title: 'track-1', duration: 4 },
                    { id: 2, title: 'track-2', duration: 5 },
                    { id: 3, title: 'track-3', duration: 3 }
                ]
            }
        }
    }
}

export default store;