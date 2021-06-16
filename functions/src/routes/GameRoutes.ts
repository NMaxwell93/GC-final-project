import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { getClient } from "../db";
// import { ObjectId } from "mongodb";
import { Game } from "../model/gamedata";

const app = express();

app.use(cors());

app.use(express.json());

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