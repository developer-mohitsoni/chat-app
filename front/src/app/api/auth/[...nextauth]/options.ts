import { LOGIN_URL } from "@/lib/apiAuthRoutes";
import axios, { AxiosError } from "axios";
import type { Account, AuthOptions, ISODateString, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export interface CustomSession {
	user?: CustomUser;
	expires: ISODateString;
}
export interface CustomUser {
	id?: string | null;
	name?: string | null;
	email?: string | null;
	image?: string | null;
	provider?: string | null;
	token?: string | null;
}
export const authOptions: AuthOptions = {
	pages: {
		signIn: "/"
	},
	callbacks: {
		async signIn({
			user,
			account
		}: {
			user: CustomUser;
			account: Account | null;
		}) {
			try {
				const payload = {
					email: user.email as string,
					name: user.name as string,
					oauth_id: account?.providerAccountId as string,
					provider: account?.provider as string,
					image: user?.image
				};
				const { data } = await axios.post(LOGIN_URL, payload);

				user.id = data?.user?.id?.toString();
				user.token = data?.user?.token;
				return true;
			} catch (error) {
				if (error instanceof AxiosError) {
					return redirect(`/auth/error?message=${error.message}`);
				}
				return redirect(
					"/auth/error?message=Something went wrong.please try again!"
				);
			}
		},

		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			}
			return token;
		},

		async session({
			session,
			token,
			user
		}: {
			session: CustomSession;
			token: JWT;
			user: User;
		}) {
			session.user = token.user as CustomUser;
			return session;
		}
	},

	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code"
				}
			}
		})
	]
};
