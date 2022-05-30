import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'viewer',
    },

    avatar: {
      type: String,
      required: true,
      default: '/uploads/profiles/avatar-08.svg',
    },
    protected: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true, // create createdAt etc. auto-magically
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// This is how you get a function to auto run when an action or operation occurs
userSchema.pre('save', async function (next) {
  // If the password hasn't been changed
  if (!this.isModified('password')) next();
  // If it has, has new password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
export default User;
