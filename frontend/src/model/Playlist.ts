export  interface Playlist {
    name: string;
    images: []
}

export  interface Tracks {
    items: Items[] 
}

export  interface Items {
    track: Track
}

export  interface Track {
    name: string;
    preview_url: string;
    album: Album;
    artists: Artist[]
}

export  interface Album {
    name: string;
    images:string
}

export  interface Artist {
    name:string
}