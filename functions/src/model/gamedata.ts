import { ObjectId } from "mongodb";

export interface Game {
    _id?: ObjectId;
    username: string;
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