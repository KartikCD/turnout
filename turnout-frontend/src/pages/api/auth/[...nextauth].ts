import httpCommon from "@/util/http-common";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	providers: [
		Credentials({
			type: "credentials",
			credentials: {},
			async authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
				const response = await httpCommon.post("/student_login", {
					email: email,
					password: password,
				});

				if (response.status === 401 || response.status === 500) {
					throw new Error(response.data.message);
				}

				return {
					id: response.data.student._id,
					email: response.data.student.email,
					token: response.data.student.token,
				};
			},
		}),
	],
	pages: {
		signIn: "/auth/signin",
	},
};

export default NextAuth(authOptions);
