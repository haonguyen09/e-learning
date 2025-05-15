import { EUserRole, EUserStatus } from "@/types/enums";
import mongoose, { Document, Schema } from "mongoose";


interface User extends Document {
    clerkId: string;
    name: string;
    username: string;
    email_address: string;
    avatar: string;
    courses: Schema.Types.ObjectId[];
    status: EUserStatus;
    role: EUserRole;
    createdAt: Date;
}

const userSchema = new Schema<User>({
    clerkId: {type: String,},
    name: {type: String,},
    username: {type: String,},
    email_address: {type: String,},
    avatar: {type: String,},
    courses: [{type : Schema.Types.ObjectId, ref: "Course"}],
    status: EUserStatus,
    role: EUserRole,
    createdAt: {type: Date},
});

const userModel = mongoose.model( "User", userSchema)