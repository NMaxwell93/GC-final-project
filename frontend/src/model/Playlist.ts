export  interface Playlist {
    data: Data;
}

export  interface Data {
    name: string;
    id: string;
    images: []
    tracks: Tracks;
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

export interface TokenPromise {
    PromiseResult: PromiseResult;
}

export interface PromiseResult {
    data: Data;
}

export interface Data {
    access_token: string;
    token_type: string;
    expires_in: number;
}