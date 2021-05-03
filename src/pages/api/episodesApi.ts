import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../server.json";

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json(db.episodes);
}
