"use server"

import User from "@/database/user.model";
import { TCreateUserParams } from "@/types";
import { connectToDatabase } from "../mongoose";

export default async function createUser(params: TCreateUserParams): Promise<TCreateUserParams | undefined> {
    try {
        connectToDatabase();
        const newUser: TCreateUserParams = await User.create(params)
        return newUser;
    } catch (error) {
        
    }
}