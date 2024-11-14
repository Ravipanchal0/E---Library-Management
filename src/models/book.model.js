import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const bookSchema = new Schema(
  {
    bookNumber: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      index: true,
    },
    author: {
      type: String,
      required: true,
      index: true,
    },
    noOfQuantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

bookSchema.plugin(mongooseAggregatePaginate);

const Book = mongoose.model("Book", bookSchema);
export default Book;
