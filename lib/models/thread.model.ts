import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: String,
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  likes: {
    type: [String], // Change to array of strings
    default: [],
  },
}, {
  // This ensures proper serialization when converting to JSON
  toJSON: { 
    transform: function(doc, ret) {
      ret.likes = Array.isArray(ret.likes) ? ret.likes : [];
      return ret;
    }
  }
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;