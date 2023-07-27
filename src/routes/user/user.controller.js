import {
  createUser,
  getAllUsers,
  getUserByEmail,
  updateUser,
  deleteUser,
  updateUserSubscription,
  getUserSubscription
} from "../models/user.model.js";

// Create a new user
export const httpCreateUser = async (req, res) => {
  const userData = req.body;
  try {
    const user = await createUser(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

// Get all users
export const httpGetAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error getting users" });
  }
};

// Get a user by email
export const httpGetUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await getUserByEmail(email);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error getting user" });
  }
};

// Update a user by email
export const httpUpdateUser = async (req, res) => {
  const { email } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await updateUser(email, userData);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
};

// Delete a user by email
export const httpDeleteUser = async (req, res) => {
  const { email } = req.params;
  try {
    const deletedUser = await deleteUser(email);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
};

// Update a user's subscription
export const httpUpdateUserSubscription = async (req, res) => {
  const { email } = req.params;
  const subscriptionData = req.body;
  try {
    const updatedUser = await updateUserSubscription(email, subscriptionData);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating user's subscription" });
  }
};

// Get a user's subscription
export const httpGetUserSubscription = async (req, res) => {
  const { email } = req.params;
  try {
    const subscription = await getUserSubscription(email);
    res.json(subscription);
  } catch (error) {
    res.status(500).json({ error: "Error getting user's subscription" });
  }
};
