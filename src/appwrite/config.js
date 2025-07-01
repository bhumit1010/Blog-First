import { Client, Databases, ID, Storage, Query } from "appwrite";
import app from "../variabals_exp/export";

export class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client.setEndpoint(app.url).setProject(app.product);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, description, featured_image, status, user_id }) {
    try {
      return await this.database.createDocument(
        app.db,
        app.collection,
        ID.unique(),
        {
          title,
          content,
          description,
          featured_image,
          status,
          user_id,
        }
      );
    } catch (error) {
      console.error("Create Post Error:", error);
      return false;
    }
  }

  async deletePost(docId) {
    try {
      return await this.database.deleteDocument(app.db, app.collection, docId);
    } catch (error) {
      console.error("Delete Post Error:", error);
      return false;
    }
  }

  async getPost(docId) {
    try {
      return await this.database.getDocument(app.db, app.collection, docId);
    } catch (error) {
      console.error("Get Post Error:", error);
      return false;
    }
  }

  async listPosts(queries = [Query.equal("status", "active"), Query.orderDesc("$createdAt")]) {
    try {
      return await this.database.listDocuments(app.db, app.collection, queries);
    } catch (error) {
      console.error("List Post Error:", error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(app.bucket, ID.unique(), file);
    } catch (error) {
      console.error("Upload File Error:", error);
      return false;
    }
  }
   updatePost = async (postId, updatedData) => {
  try {
    const response = await this.database.updateDocument(
      app.db,
      app.collection,
      postId,
      updatedData
    );
    return response;
  } catch (error) {
    console.error("Failed to update post:", error);
    return null;
  }
};

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(app.bucket, fileId);
    } catch (error) {
      console.error("Delete File Error:", error);
      return false;
    }
  }

  getPreview(fileId) {
    try {
      return this.bucket.getFileView(app.bucket, fileId);
    } catch (error) {
      console.error("Preview Error:", error);
      return null;
    }
  }
}

const serviceInstance = new Service();
export default serviceInstance;
