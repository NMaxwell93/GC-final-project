import { useState } from "react";
import { useEffect } from "react";
import { Data, Playlist } from "../model/Playlist";
import { findPlaylist } from "../service/SpotifyApiService";

interface Props {
  playlistId: string;
}

function PlaylistDisplayTest({ playlistId }: Props) {
  const [gamePlaylist, setGamePlaylist] = useState<Data>();

  useEffect(() => {
    loadPlaylist();
  }, [gamePlaylist]);

  function loadPlaylist() {
    findPlaylist(playlistId).then((results) => {
      setGamePlaylist(results);
      console.log(gamePlaylist)
    });
  }

  return (
    <div>
      <p> {gamePlaylist?.name} hello</p>
    </div>
  );
}

export default PlaylistDisplayTest;
