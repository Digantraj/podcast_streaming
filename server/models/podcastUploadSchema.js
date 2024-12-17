import mongoose from "mongoose";

const podcastUploadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type",
    },
    like: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const PodcastUpload = mongoose.model("PodcastUpload", podcastUploadSchema);

export default PodcastUpload;
