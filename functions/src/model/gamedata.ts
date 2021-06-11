import { ObjectId } from "mongodb";

export interface Games {
    _id?: ObjectId;
    username: string;
    category: string;
    score: number;
}

export interface UserInfo{
    _id?: ObjectId;
    username: string;
    GameInfo: [{
        category:string;
        score: number;
    }]
}