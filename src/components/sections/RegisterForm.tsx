"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerSchema = z.object({
	registerFirstName: z
		.string()
		.min(4, { message: "FirstName must have atleast 4 characters." })
		.max(24, { message: "FirstName can only have 20 characters." }),
	registerLastName: z
		.string()
		.min(4, { message: "LastName must have atleast 4 characters." })
		.max(24, { message: "LastName can only have 20 characters." }),

	registerEmail: z
		.string()
		.email({ message: "Invalid Email Format!" })
		.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),

	registerPassword: z
		.string()
		.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, {
			message:
				"Password must contain eight characters, at least one letter, one number, and one special character",
		}),
});

type RegisterSchemaProps = z.infer<typeof registerSchema>;

const RegisterForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterSchemaProps>({ resolver: zodResolver(registerSchema) });

	const submitHandler = (data: RegisterSchemaProps) => {
		console.log(data);
		reset();
	};

	return (
		<section className="register">
			<div className="container mx-auto">
				<div className="form">
					<h2 className="mb-16 text-center">Register</h2>

					<form onSubmit={handleSubmit(submitHandler)}>
						<div className="flex gap-4 items-center">
							<label htmlFor="registerFirstName">
								First Name <span>*</span>
							</label>
							<p className="form-error">{errors.registerFirstName?.message}</p>
						</div>
						<input
							type="text"
							id="registerFirstName"
							placeholder="First Name"
							{...register("registerFirstName")}
						/>

						<div className="flex gap-4 items-center">
							<label htmlFor="registerLastName">
								Last Name <span>*</span>
							</label>
							<p className="form-error">{errors.registerLastName?.message}</p>
						</div>
						<input
							type="text"
							id="registerLastName"
							placeholder="Last Name"
							{...register("registerLastName")}
						/>

						<div className="flex gap-4 items-center">
							<label htmlFor="registerEmail">
								Email <span>*</span>
							</label>
							<p className="form-error">{errors.registerEmail?.message}</p>
						</div>
						<input
							type="email"
							id="registerEmail"
							placeholder="Your email*"
							{...register("registerEmail")}
						/>

						<div className="flex gap-4 items-center">
							<label htmlFor="registerPassword">
								Password <span>*</span>
							</label>
							<p className="form-error">{errors.registerPassword?.message}</p>
						</div>
						<input
							type="password"
							id="registerPassword"
							placeholder="Password*"
							{...register("registerPassword", {
								required: {
									value: true,
									message: "Password is Required!",
								},
								pattern: {
									value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
									message:
										"Password must contain eight characters, at least one letter, one number, and one special character",
								},
							})}
						/>

						<p>
							Your personal data will be used to support your experience throughout this website, to
							manage access to your account and for other purposes described in our privacy policy.
						</p>

						<input type="submit" className="btn btn-dark" value={"CREATE ACCOUNT"} />
						<Link href="/login" className="btn btn-light">
							LOG IN
						</Link>
					</form>
				</div>
			</div>
		</section>
	);
};

export default RegisterForm;
