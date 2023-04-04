import { Student } from "@/models";
import NextAuth from "next-auth";

declare module "next-auth" {
	export interface User extends Student {}

	export interface Session {
		user: User;
	}
}
