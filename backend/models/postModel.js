import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
      // Adds a relationship between user and product
    },
  },
  {
    timestamps: true, // create createdAt etc. auto-magically
  }
);

const approveSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: { type: String, required: true },
    topics: [{ type: String, required: true, default: 'Other' }],
    thumbnail: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: [
      {
        type: { type: String, required: true },
        content: { type: String },
        link: { type: String },
        caption: { type: String },
      },
    ],
    readingTime: { type: Number, default: 0 },
    views: { type: Number, default: 1 },
    comments: [commentSchema],
    numComments: { type: Number, default: 0 },
    approvers: [approveSchema],
    numApprovers: { type: Number, required: true, default: 0 },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    approveDate: { type: Date },
    isApproved: {
      type: Boolean,
      required: true,
      default: false,
    },
    approvalScore: {
      type: Number,
      required: true,
      default: 0,
    } /* 
    Total needed is 5 
    Normees get 1 (on their own posts), 
    Apprentices get 2, 
    Gurus get 3, 
    Sages get 5, 
    Admins get 5 
    */,
    protected: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true, // create createdAt etc. auto-magically
  }
);

// * When ever the post gets saved/ updated
postSchema.pre('save', async function (next) {
  // ? When a approval is submitted
  // ? When it's published or unpublished
  // ? When it's submitted
  // ? When it's reviewed
  next();
});

const Post = mongoose.model('Post', postSchema);
export default Post;
