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

    // Because we need a ref to the user who created a product we have to reference said user first (get mongoose their id) and inset that in each product after the fact
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers.at(0)._id;
    const author = createdUsers.at(2)._id;

    const samplePosts = posts.map((posts) => {
      return { ...posts, user: author, approver: adminUser };
    });
    await Post.insertMany(samplePosts);

    console.log('Data imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Couldn\'t import data! ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // Wipe everything before seeding

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
