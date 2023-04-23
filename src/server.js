import express from "express";
import path from "path";

import { PORT } from "./constants.js";
import {
  getRecommendedSongsFromSpotify,
  getSpotifyAccessToken,
  searchSong,
} from "./spotify.utils.js";

const rootDirectory = path.resolve();

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(400).sendFile(rootDirectory + "/public/index.html");
});

app.get("/recommendations", async (req, res) => {
  const {
    songTitle1,
    artistName1,
    songTitle2,
    artistName2,
    songTitle3,
    artistName3,
  } = req.query || null;

  // check at least one song is provided not empty
  if (songTitle1 || songTitle2 || songTitle3) {
    try {
      const accessToken = await getSpotifyAccessToken();

      // get track id for each song via spotify API
      const songIds = [];
      const songTitles = [songTitle1, songTitle2, songTitle3];
      const artistNames = [artistName1, artistName2, artistName3];

      for (let i = 0; i < 3; i++) {
        if (!songTitles[i] || !artistNames[i]) {
          continue;
        }
        const searchedSong = await searchSong(
          accessToken,
          songTitles[i],
          artistNames[i]
        );
        if (!searchedSong) {
          res.status(404).json({
            message: "Sorry, song not found!",
          });
          return;
        }
        songIds.push(searchedSong.id);
      }

      // get recommended songs for each ID from spotify API
      const recommendedSongs = await getRecommendedSongsFromSpotify(
        accessToken,
        songIds
      );
      res.json(recommendedSongs);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Something went wrong!" });
    }
  } else {
    res.json({
      message: "Please provide at least one song!",
    });
    return;
  }
});

app.listen(PORT, () => {
  console.log(`The application started on http://localhost:${PORT}`);
});
