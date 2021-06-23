
export  interface Game {
    _id?: string;
    user_uid: string | undefined;
    user_displayName: string | undefined;
    playlist: string;
    playlistId: string;
    score: number;
}

export  interface TopFiveUsers {
    _id?: string;
    total: number;
    displayName: string;
}

export interface UserInfo{
    _id?: string;
    user_uid: string | undefined;
    user_displayName: string | undefined;
    total: number;
}

export interface TopFiveByPlaylist {
    _id?: {
        playlist: string,
        userName: string
    };
    total: number;
}