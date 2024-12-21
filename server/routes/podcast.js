const router = require("express").Router();

const authMiddleware = require("../middleware/auth");
const upload = require("../middleware/multer");
const Category = require("../models/category");
const Podcast = require("../models/podcast");
const User = require("../models/user");

// Create a podcast
router.post("/add-podcast", authMiddleware, upload, async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const frontImage = req.files.frontImage[0].path;
    const audioFile = req.files.audioFile[0].path;

    if (!title || !description || !category || !frontImage || !audioFile) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const { user } = req;
    const cat = await Category.findOne({ categoryName: category });
    if (!cat) {
      return res.status(400).json({ error: "Category does not exist" });
    }
    
    const catId = cat._id;
    const userId = user._id;
    const newPodcast = new Podcast({
      title,
      description,
      frontImage,
      audioFile,
      user: userId,
      category: catId,
    });
    await newPodcast.save();
    await Category.findByIdAndUpdate(catId, {
      $push: { podcasts: newPodcast._id },
    });
    await User.findByIdAndUpdate(userId, {
      $push: { podcasts: newPodcast._id },
    });
    return res.status(200).json({ message: "Podcast created successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Faild to Creating Podcast" });
  }
});

// Get all podcasts
router.get("/get-podcasts", async (req, res) => {
  try {
    const podcasts = await Podcast.find()
      .populate("category")
      .sort({ createdAt: -1 });
    return res.status(200).json({ data: podcasts });
  } catch (err) {
    return res.status(500).json({ message: "Failed to get podcasts" });
  }
});

// Get User's podcasts
router.get("/my-podcasts", authMiddleware, async (req, res) => {
  try {
    const { user } = req;
    const userId = user._id;
    const data = await Podcast.findById(userId)
      .populate({
        path: "podcasts",
        populate: { path: "category" },
      })
      .select("-password");
    if (data && data.podcasts) {
      data.podcasts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    return res.status(200).json({ data: data.podcasts });
  } catch (err) {
    return res.status(500).json({ message: "Failed to get podcasts" });
  }
});

// Get podcasts by id
router.get("/get-podcasts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const podcast = await Podcast.findById(id).populate("category");
    return res.status(200).json({ data: podcast });
  } catch (err) {
    return res.status(500).json({ message: "Failed to get podcast" });
  }
});

// Podcast by category
router.get("/podcast-by-category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const categories = await Category.find({ categoryName: category }).populate(
      {
        path: "podcasts",
        populate: { path: "category" },
      }
    );
    let podcasts = [];
    categories.forEach((cat) => {
      podcasts = [...podcasts, ...cat.podcasts];
    });

    return res.status(200).json({ data: podcasts });
  } catch (err) {
    return res.status(500).json({ message: "Failed to get podcasts" });
  }
});

module.exports = router;
