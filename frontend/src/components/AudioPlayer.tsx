import { Playlist } from "../model/Playlist";
import "./AudioPlayer.css";

interface Props {
    trackNumber: number;
    gamePlaylist: Playlist;
}

function AudioPlayer({ trackNumber, gamePlaylist }: Props) {

    return(
        <div className="AudioPlayer">
            <h2 className="title">{gamePlaylist?.data.tracks.items[trackNumber].track.name}</h2>
            <h3 className="artist">{gamePlaylist?.data.tracks.items[trackNumber].track.artists[0].name}</h3>
            <audio src={gamePlaylist?.data.tracks.items[trackNumber].track.preview_url} controls ></audio>
        </div>
    )
}

export default AudioPlayer;