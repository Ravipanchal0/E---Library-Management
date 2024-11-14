import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

export default Book;
