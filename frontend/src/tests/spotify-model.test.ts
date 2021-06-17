import { Data } from '../model/Playlist';
import sampleJson from './spotify-api-sample.json';

const allOut60sPlaylist = sampleJson;

describe("60's playlist API model", () => {

  test("Playlist Name & id is correct", () => {
    expect(allOut60sPlaylist.name).toBe("All Out 60s");
    expect(allOut60sPlaylist.id).toBe("37i9dQZF1DXaKIA8E7WcJj")
  });

  test("tests for amount of songs on playlist", () => {
    expect(allOut60sPlaylist.tracks.items.length).toBe(100);
  });


  // test("Article", () => {
  //   const sampleArticle = sampleResponse;
  //   expect(sampleArticle.title).toBe("Kickstart a career in coding with this JavaScript certification bundle");
  //   expect(sampleArticle.url).toBe("https://mashable.com/uk/shopping/may-20-2021-learn-to-code-javascript-certification-bundle/");
  //   expect(sampleArticle.description).toBe("TL;DR: As of May 20, you can pay what you want for the 2021 Learn to Code JavaScript Certification Bundle.\n\nWith this JavaScript Certification Bundle, you can jumpstart your career in coding and programming with 50 hours of easy-to-follow lessons and lectures…");
  // });
});