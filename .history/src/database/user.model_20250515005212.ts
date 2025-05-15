import mongoose from "mongoose";

const { Schema } = mongoose;

type Tuser = {
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number
    }
}

const userSchema = new Schema({
  
});

const userModel = mongoose.model( "User", userSchema)