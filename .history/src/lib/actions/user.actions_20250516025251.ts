"use server"

import User, { IUser } from "@/database/user.model";
import { TCreateUserParams } from "@/types";
import { connectToDatabase } from "../mongoose";

export default async function createUser(params: TCreateUserParams): Promise<IUser | undefined> {
    try {
        connectToDatabase();
        const newUser = await User.create(params)
        return newUser;
    } catch (error) {
        
    }
}