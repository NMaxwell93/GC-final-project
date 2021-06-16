import { ObjectId } from "mongodb";

export interface Game {
    _id?: ObjectId;
    user_uid: string | undefined;
    user_displayName: string | undefined;
    playlist: string;
    score: number;
}

export interface UserInfo{
    _id?: ObjectId;
    username: string;
    GameInfo: [{
        playlist: string;
        score: number;
    }]
}

export  interface TopFiveUsers {
    _id?: ObjectId;
    total: number;
    displayName: string;
}

export interface TopFiveEighties {
    _id?: ObjectId;
    total: number;
    playlist: string;
    displayName: string;
}

export interface TopFiveByPlaylist {
    _id?: ObjectId;
    total: number;
    playlist: string;
    displayName: string;
}