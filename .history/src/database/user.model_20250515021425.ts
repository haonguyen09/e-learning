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

const userSchema = new Schema(Tuser);

const userModel = mongoose.model( "User", userSchema)