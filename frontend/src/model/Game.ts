
export default interface Game {
    _id?: string;
    user_uid: string | undefined;
    user_displayName: string | undefined;
    playlist: string;
    score: number;
}