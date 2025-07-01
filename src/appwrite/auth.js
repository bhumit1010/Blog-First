// src/appwrite/auth.js

import { Client, Account, ID } from "appwrite";
import app from "../variabals_exp/export"; // This should export: { url, product }

export class Auth {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(app.url) // Appwrite Endpoint
      .setProject(app.product); // Appwrite Project ID

    this.account = new Account(this.client);
  }

  // Register user and auto login
  async createacc(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) return this.login(email, password);
      return null;
    } catch (error) {
      console.error("Create Account Error:", error);
      throw error;
    }
  }

  // Login with email & password
  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  }

  // Get current authenticated user's info
  async getAccount() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Get Account Error:", error);
      return null;
    }
  }

  // Logout all sessions
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error("Logout Error:", error);
      throw error;
    }
  }
}

const Authservice = new Auth();
export default Authservice;
