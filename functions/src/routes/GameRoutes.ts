import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { getClient } from "../db";
// import { ObjectId } from "mongodb";
import { Game, TopFiveByPlaylist, TopFiveUsers } from "../model/gamedata";

const app = express();

app.use(cors());

app.use(express.json());

//all the data
app.get("/", async (req, res) => {
    try {
      const client = await getClient();
      const results = await client.db().collection<Game>('gameData').find().toArray();
      console.log(results);
      console.log(client.db().databaseName)
      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

//Best overall scores, top 5
  app.get("/leaderboard", async (req, res) => {
    try {
      const client = await getClient();
      const game = await client.db().collection<TopFiveUsers>('gameData').aggregate([
        {$group: {
          _id: "$user_uid",
          total: {$sum: "$score"},
          displayName: {$first: "$user_displayName"}
        }},
        {$sort: {total: -1}},
          {$limit: 15},
        {$project: {
          _id: true,
          displayName: true,
          total: true
        }}
      ]).toArray();
      if (game) {
        res.json(game);
      } else {
        res.status(404).json({message: "Not Found"});
      }
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

// top score by user and playlist
app.get("/leaderboard/:playlistId", async (req, res) => {
  const playlistId = req.params.playlistId
  try {
    const client = await getClient();
    const game = await client.db().collection<TopFiveByPlaylist>('gameData').aggregate([
      {$group: {
        _id: {
          playlistId: `${playlistId}`,
          userName: "$user_displayName",
          score: "$score"
        },
        total: {$sum: "$score"}
      }},
      {$sort: {total: -1}},
        {$limit: 15},
      {$project: {
        _id: true,
        displayName: true,
        total: true
      }}
    ]).toArray();
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({message: "Not Found"});
    }
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

// Adding new instance of game
  app.post("/", async (req, res) => {
    const game = req.body as Game;
    try {
      const client = await getClient();
      const result = await client.db().collection<Game>('gameData').insertOne(game);
      game._id = result.insertedId;
      res.status(201).json(game);
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });


  export default functions.https.onRequest(app);