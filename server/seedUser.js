require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const connectDB = require('./config/db');

const seedUser = async () => {
  await connectDB();

  const userExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
  if (userExists) {
    console.log('User already exists');
    process.exit();
  }

  const user = new User({
    name: 'Admin',
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  console.log('User created successfully');
  process.exit();
};

seedUser();
