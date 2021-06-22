import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Game from '../components/Game';
import Header from '../components/Header';
import Home from '../components/Home';
import PostGame from '../components/PostGame';



describe("Home Component ", () => {

  test("1. test to see if text is on 50's playlist button", () => {
    render(
      <MemoryRouter >
        <Home />
      </MemoryRouter>
      );
    const button = screen.getByText( "50s Playlist" );
    expect(button).toBeInTheDocument();
  });

  test("2. test if input text displays", () => {
    render(
      <MemoryRouter >
        <Home />
      </MemoryRouter>
      );
    const text = screen.getByText( "Try your own Spotify Playlist!:" );
    expect(text).toBeInTheDocument();
  });

  test("3. test if submit button displays", () => {
    render(
      <MemoryRouter >
        <Home />
      </MemoryRouter>
      );
    const submitButton = screen.getByRole( "button", {name: "Submit"} );
    expect(submitButton).toBeInTheDocument();
  });

  test("4. test if input displays", () => {
    render(
      <MemoryRouter >
        <Home />
      </MemoryRouter>
      );
    const inputField = screen.getByRole( "textbox");
    expect(inputField).toBeInTheDocument();
  });

});

describe("PostGame Component", () => {

  test("5. Test if it displays score", () => {
    render(
      <MemoryRouter >
        <PostGame score={2} playlist={"Spirit Season"} playlistId={"6FpgkKViNmxTTGf8ykDYrk"} />
      </MemoryRouter>
      );
    const scoreTest = screen.getByText("You got 2 out of 10!")
    expect(scoreTest).toBeInTheDocument();
  });

  test("6. Test if it displays playlistname", () => {
    render(
      <MemoryRouter >
        <PostGame score={2} playlist={"Spirit Season"} playlistId={"6FpgkKViNmxTTGf8ykDYrk"} />
      </MemoryRouter>
      );
    const scoreTest = screen.getByText("Spirit Season")
    expect(scoreTest).toBeInTheDocument();
  });
  
  test("7. Test if it displays button", () => {
    render(
      <MemoryRouter >
        <PostGame score={2} playlist={"Spirit Season"} playlistId={"6FpgkKViNmxTTGf8ykDYrk"} />
      </MemoryRouter>
      );
      const playAgainButton = screen.getByRole( "button", {name: "Play Again!"} );
      expect(playAgainButton).toBeInTheDocument();
  });

});




