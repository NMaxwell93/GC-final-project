import { Data } from '../model/Playlist';
import sampleJson from './playlist-api-sample.json';

const allOut60sPlaylist = sampleJson;

describe("60's playlist API model", () => {

  test("Playlist Name & id is correct as well as playlist length", () => {
    expect(allOut60sPlaylist.name).toBe("All Out 60s");
    expect(allOut60sPlaylist.id).toBe("37i9dQZF1DXaKIA8E7WcJj")
    expect(allOut60sPlaylist.tracks.items.length).toBe(100);
  });


});