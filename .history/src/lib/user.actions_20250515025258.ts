"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "./mongoose";

export default async function createUser(params: any) {
    try {
        connectToDatabase();
        const newUser = await User.create(params: IUser)
        return newUser;
    } catch (error) {
        
    }
}