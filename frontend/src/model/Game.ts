
export  interface Game {
    _id?: string;
    user_uid: string | undefined;
    user_displayName: string | undefined;
    playlist: string;
    score: number;
}

export  interface TopFiveUsers {
    _id?: string;
    total: number;
    displayName: string;
}

export interface TopFiveByPlaylist {
    _id?: string;
    total: number;
    playlist: string;
    displayName: string;
}