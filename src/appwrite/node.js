// backend/getUserById.js
import { Client, Users } from "node-appwrite";
import app from "../variabals_exp/export";
import Authservice from "./auth";
import { logout } from "../fetures/authslice";
import { useDispatch } from "react-redux";
const dispatch = useDispatch
const client = new Client()
  .setEndpoint(app.url) // your Appwrite URL
  .setProject(app.product)                           // your Project ID
  .setKey(app.KEY);                          // your secret API key

const users = new Users(client);

// Example function to get user by ID
async function getUserById(userId) {
  try {
    const user = await users.get(userId);
    console.log("User:", user);
    return user;
  } catch (error) {
    Authservice.logout()
    
    console.error("Error fetching user:", error.message);
    return null;
  }
}

// Run this only for testing
export default getUserById
