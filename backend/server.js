import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-FilipFotoFilm";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.status(200).json({
    Message: "Hello Filip!",
    data: listEndpoints(app)
  })
});

const Photo = mongoose.model('Photo', {
  title: String,
  text: String,
  link: String,
  image: String,
  tag: String
})
app.get('/photos', async (req, res) => {
  const photos = await Photo.find()
  res.status(200).json({
    success: true,
    body: photos
  });
})

app.get('/photos/tag/:tag', async (req, res) => {
  try{
  const photosByTag = await Photo.find({ tag: req.params.tag });
    if (photosByTag) {
      res.status(200).json({
        success: true,
        body: photosByTag
      });
    } else {
      res.status(404).json({
        success: false,
        body: {
          message: "Could not find this photo"
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      body: {
        message: "Invalid id"
      }
    });
  }
})

const Video = mongoose.model('Video', {
  title: String,
  text: String,
  link: String,
  poster: String,
  video: String,
  videoLowRes: String,
  tag: String
})
app.get('/videos', async (req, res) => {
  const videos = await Video.find()
  res.status(200).json({
    success: true,
    body: videos
  });
})
app.get('/videos/tag/:tag', async (req, res) => {
  try{
    const videosByTag = await Video.find({ tag: req.params.tag });
      if (videosByTag) {
        res.status(200).json({
          success: true,
          body: videosByTag
        });
      } else {
        res.status(404).json({
          success: false,
          body: {
            message: "Could not find this photo"
          }
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        body: {
          message: "Invalid id"
        }
      });
    }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
