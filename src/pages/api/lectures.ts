import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "pg";

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "StudySchedules",
  password: "1234",
  port: 5432,
});

client.connect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { group_name } = req.body;
    try {
      const result = await client.query(
        "SELECT * FROM Lectures WHERE group_id = (SELECT group_id FROM Groups WHERE group_name = $1)",
        [group_name]
      );

      const lectures = result.rows.map((lecture) => ({
        ...lecture,
        lecture_date: new Date(lecture.lecture_date).toLocaleDateString(
          "ru-RU",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ),
      }));

      res.status(200).json(lectures);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error retrieving lectures" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
