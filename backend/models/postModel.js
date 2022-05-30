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

const voteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    rating: { type: Number, required: true },
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
    type: { type: String, required: true, default: 'text' },
    categories: [{ type: String, required: true }],
    thumbnail: { type: String, required: true },
    excerpt: { type: String },
    sections: [
      {
        template: { type: String, required: true },
        content: { type: String, required: true },

        heading: { type: String },
        caption: { type: String },
        media: { type: String },
      },
    ],

    comments: [commentSchema],
    numComments: { type: Number, required: true, default: 0 },

    votes: [voteSchema],
    numVotes: { type: Number, required: true, default: 0 },
    averageRating: { type: Number, required: true, default: 0 },

    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    isSubmitted: {
      type: Boolean,
      required: true,
      default: false,
    },
    protected: { type: Boolean, required: true, default: false },
    submittedAt: {
      type: Date,
    },
    approver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    approveDate: { type: Date },
    isApproved: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // create createdAt etc. auto-magically
  }
);

// * When ever the post gets saved/ updated
postSchema.pre('save', async function (next) {
  // ? When a vote is submitted
  // ? When it's published or unpublished
  // ? When it's submitted
  // ? When it's reviewed
  next();
});

const Post = mongoose.model('Post', postSchema);
export default Post;
