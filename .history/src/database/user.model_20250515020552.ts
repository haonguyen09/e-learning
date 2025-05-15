import { EUserRole, EUserStatus } from "@/types/enums";
import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

interface User extends Document {
    clerkId: string;
    name: string;
    username: string;
    email_address: string;
    avatar: string;
    courses: string[];
    status: EUserStatus;
    role: EUserRole;
    createdAt: Date;
}

const userSchema = new Schema(Tuser);

const userModel = mongoose.model( "User", userSchema)