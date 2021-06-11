import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import { Games } from "../model/gamedata";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
    try {
      const client = await getClient();
      const results = await client.db().collection<Games>('gameData').find().toArray();
      console.log(results);
      console.log(client.db().databaseName)
      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });