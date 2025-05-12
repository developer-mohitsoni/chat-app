import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../config/db.config.js";

interface LoginPayloadType {
	name: string;
	email: string;
	provider: string;
	oauth_id: string;
	image?: string;
}

class AuthController {
	static async login(req: Request, res: Response) {
		try {
			const body: LoginPayloadType = req.body;

			const findUser = await prisma.user.findUnique({
				where: {
					email: body.email
				}
			});

			if (!findUser) {
				const newUser = await prisma.user.create({
					data: {
						name: body.name,
						email: body.email,
						provider: body.provider,
						oauth_id: body.oauth_id,
						image: body.image
					}
				});

				const JWTPayload = {
					id: newUser.id,
					name: newUser.name,
					email: newUser.email
				};

				const token = jwt.sign(JWTPayload, process.env.JWT_SECRET as string, {
					expiresIn: "1d"
				});

				return res.status(201).json({
					status: "success",
					message: "User created successfully",
					user: {
						...newUser,
						token: `Bearer ${token}`
					}
				});
			}
		} catch (err) {
			if (err instanceof Error) {
				return res.status(500).json({
					status: "error",
					message: "Something went wrong. Please try again later."
				});
			}
		}
	}
}

export default AuthController;
