const express = require("express");
const fetch = require("node-fetch"); // now works with require()
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

app.post("/gemini", async (req, res) => {
  const promptText = req.body.prompt;
  if (!promptText) return res.status(400).json({ error: "No prompt provided" });

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: promptText }] }],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).send(text);
    }

    const data = await response.json();
    const result = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    res.json({ text: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Gemini proxy running on port ${PORT}`));
