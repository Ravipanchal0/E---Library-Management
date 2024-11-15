import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
      index: true,
    },
    author: {
      type: String,
      requires: [true, "Book author is required"],
      trim: true,
      index: true,
    },
    ISBN: {
      type: Number,
      required: [true, "ISBN is required"],
      unique: true,
      index: true,
    },
    publishedYear: {
      type: Number,
      required: true,
      min: [1000, "Invalid year"],
      max: [
        new Date().getFullYear(),
        "Published yeat can not be in the future",
      ],
    },
    copiesAvailable: {
      type: Number,
      default: 1,
      min: [0, "Can not be negative"],
    },
    totalCopies: {
      type: Number,
      required: [true, "Total copies are required"],
      min: [1, "Atleast one copy is required"],
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    borrowe: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

bookSchema.pre("save", function (next) {
  this.isAvailable = this.copiesAvailable > 0;
  next();
});

bookSchema.plugin(mongooseAggregatePaginate);

const Book = mongoose.model("Book", bookSchema);
export default Book;
