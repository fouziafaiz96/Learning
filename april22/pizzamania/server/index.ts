/* eslint-disable @typescript-eslint/no-var-requires */
// import express from "express";
// import multer from "multer";
//@ts-nocheck
const express = require("express");
const multer = require("multer");

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
console.log(__dirname);

app.use(express.static(__dirname + "/public"));
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
