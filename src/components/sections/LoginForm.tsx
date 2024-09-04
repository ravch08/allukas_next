"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
	loginEmail: z
		.string()
		.email({ message: "Invalid Email Format!" })
		.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),

	loginPassword: z
		.string()
		.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, {
			message:
				"Password must contain eight characters, at least one letter, one number, and one special character",
		}),
});

type LoginSchemaProps = z.infer<typeof loginSchema>;

const LoginForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchemaProps>({
		resolver: zodResolver(loginSchema),
	});

	const loginHandler = (data: LoginSchemaProps) => {
		console.log("User Logged in!", data);
		reset();
	};

	return (
		<section className="login-form" aria-labelledby="Login Form">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row content-between gap-16">
					<div className="form">
						<h2 className="mb-4">Login</h2>

						<form onSubmit={handleSubmit(loginHandler)}>
							<div className="flex items-center gap-8">
								<label htmlFor="loginEmail">
									Email <span>*</span>
								</label>
								<p className="form-error">{errors.loginEmail?.message}</p>
							</div>
							<input
								type="email"
								id="loginEmail"
								placeholder="Your email*"
								{...register("loginEmail")}
							/>

							<div className="flex items-center gap-8">
								<label htmlFor="loginPassword">
									Password <span>*</span>
								</label>
								<p className="form-error">{errors.loginPassword?.message}</p>
							</div>
							<input
								type="password"
								id="loginPassword"
								placeholder="Password*"
								{...register("loginPassword")}
							/>

							<Link href="#!" className="forgotPassword">
								Forgot your password?
							</Link>
							<input type="submit" className="btn btn-dark" value={"SUBMIT"} />
						</form>
					</div>

					<div className="new-customer">
						<h2 className="mb-8">New Customer</h2>
						<p>
							Sign up for early Sale access plus tailored new arrivals, trends and promotions. To
							opt out, click unsubscribe in our emails.
						</p>
						<Link href="/register" className="btn btn-dark">
							CREATE ACCOUNT
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginForm;
