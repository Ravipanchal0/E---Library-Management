import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const fileUploader = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File has been uploaded successfully.", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
  }
};
