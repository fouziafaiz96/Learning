import express from "express";
import multer from "multer";
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.use("/uploads", express.static("uploads"));

app.post(
  "/profile-upload-single",
  upload.single("profile-file"),
  function (req, res, next) {
    // req.file is the `profile-file` file
    // req.body will hold the text fields, if there were any
    console.log(JSON.stringify(req.file));
    let response = '<a href="/">Home</a><br>';
    response += "Files uploaded successfully.<br>";
    response += `<img src="${req?.file?.path}" /><br>`;
    return res.send(response);
  }
);
