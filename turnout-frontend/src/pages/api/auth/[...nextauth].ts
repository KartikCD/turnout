import httpCommon from "@/util/http-common";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Student } from "@/models/_student/Student";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	providers: [
		Credentials({
			type: "credentials",
			credentials: {},
			async authorize(credentials) {
				try {
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

					if (response.status === 200) {
						return response.data.student;
					}

					return null;
				} catch (err) {
					throw new Error("Incorrect email or password.");
				}
			},
		}),
	],
	pages: {
		signIn: "/",
	},
	callbacks: {
		async jwt({ token, user, account }) {
			if (account && user) {
				return {
					...token,
					token: user.token as string,
				};
			}
			return token;
		},
		async session({ token, session }) {
			const newSession: Session = {
				...session,
				user: {
					...session.user,
					id: token.token as unknown as string,
				},
			};

			return newSession;
		},
	},
};

export default NextAuth(authOptions);
