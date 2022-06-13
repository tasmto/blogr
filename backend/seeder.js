import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import posts from './data/posts.js';
import User from './models/userModel.js';
import Post from './models/postModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Wipe everything before seeding
    await Post.deleteMany();
    await User.deleteMany();

    // Because we need a ref to the users to attach the demo comments and posts we have to create a reference to the created users first.
    const createdUsers = await User.insertMany(users);
    const [admin, sage, guru, apprentice, normee] = [...createdUsers];

    const samplePosts = posts.map((post) => {
      const usersArr = [admin.id, sage.id, guru.id, apprentice.id];

      // This is to have a random user as the author
      const randomAuthor = usersArr.at(
        Math.floor(Math.random() * usersArr.length)
      );

      const comments = post.comments.map((cnt) => {
        // To have a random user as the commenter
        const commentWriter = usersArr.at(
          Math.floor(Math.random() * usersArr.length)
        );
        return { ...cnt, user: commentWriter };
      });

      return {
        ...post,
        user: randomAuthor,
        approvers: [
          { user: admin.id },
          { user: sage.id },
          { user: guru.id },
          { user: apprentice.id },
        ],
        numApprovers: 4,
        comments,
      };
    });
    await Post.insertMany(samplePosts);
    console.log('Data imported!'.green.inverse);

    process.exit();
  } catch (error) {
    console.log(`Couldn't import data ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // Wipe everything
    await Post.deleteMany();
    await User.deleteMany();

    console.log('Data deleted!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Couldn\'t destroy data! ${error.message}`.red.inverse);
    process.exit(1);
  }
};

// Will allow us to run node backend/seeder (runs import)
// Will allow us to run node backend/seeder -d (destroys data)
if (process.argv[2] === '-d') destroyData();
else importData();
