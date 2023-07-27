
import User from "./user.schema.js";

// Create a new user with additional information
const createUser = async (userData) => {
  try {
    const user = new User(userData);
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

// Get all users
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error getting users:", error);
  }
};

// Get a user by email
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    console.error("Error getting user:", error);
  }
};

// Update a user by email
const updateUser = async (email, userData) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      userData,
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

// Delete a user by email
const deleteUser = async (email) => {
  try {
    const deletedUser = await User.findOneAndRemove({ email: email });
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

// Update a user's subscription
const updateUserSubscription = async (email, subscriptionData) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { subscription: subscriptionData },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    console.error("Error updating user's subscription:", error);
  }
};

// Get a user's subscription
const getUserSubscription = async (email) => {
  try {
    const user = await User.findOne({ email: email }, 'subscription');
    return user.subscription;
  } catch (error) {
    console.error("Error getting user's subscription:", error);
  }
};

export { 
  createUser, 
  getAllUsers, 
  getUserByEmail, 
  deleteUser, 
  updateUser, 
  updateUserSubscription, 
  getUserSubscription 
};
