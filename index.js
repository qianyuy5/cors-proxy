import express from "express";
import fetch from "node-fetch"; // Node 18+なら不要

const app = express();

app.use((req, res, next) => {
  // CORS許可（全部許す雑仕様）
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use("/proxy", async (req, res) => {
  try {
    const target = req.query.url;

    if (!target) {
      return res.status(400).json({ error: "url is required" });
    }

    const response = await fetch(target, {
      method: req.method,
      headers: {
        ...req.headers,
        host: undefined,
      },
      body: req.method === "GET" ? undefined : req.body,
    });

    const contentType = response.headers.get("content-type");
    if (contentType) res.setHeader("Content-Type", contentType);

    const data = await response.arrayBuffer();
    res.send(Buffer.from(data));
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

app.listen(3000, () => {
  console.log("CORS proxy running on http://localhost:3000");
});
