const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    code: 200,
    "le minh tool dz": "@sibdi",
    data: [
      {
        "phiên": 2561901,
        d1: 6,
        d2: 5,
        d3: 1,
        "tổng": 12,
        "kết quả": "Tài",
        updatedAt: "2026-08-09T08:00:26.750Z"
      },
      {
        "phiên": 2561902,
        d1: 4,
        d2: 5,
        d3: 1,
        "tổng": 10,
        "kết quả": "xiu",
        updatedAt: "2026-08-09T07:59:16.766Z"
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
