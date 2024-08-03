"use client";

// import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

import { SectionHeading } from "../utils/helper";

const contactSchema = z.object({
	fullName: string()
		.min(4, { message: "Must be 4 or more characters long" })
		.max(24, { message: "Must be 24 characters or less" }),
	email: z
		.string()
		.email({ message: "Invalid email address" })
		.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
	subject: z.string().min(6, { message: "Must be 4 or more characters long." }),
	comment: z.string().min(6, { message: "Must be 6 or more characters long." }),
});

export type ContactProps = z.infer<typeof contactSchema>;

const ContactForm = () => {
	const {
		register,
		// control,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactProps>({ resolver: zodResolver(contactSchema) });

	const formSubmitHandler = (data: ContactProps) => {
		console.log(data);
		reset();
	};

	return (
		<section aria-labelledby="Contact Form">
			<div className="container mx-auto px-8">
				<SectionHeading
					heading="Have an question? Contact us!"
					subHeading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsum facilis quibusdam modi dignissimos."
				/>

				<form
					onSubmit={handleSubmit(formSubmitHandler)}
					className="mx-auto flex w-full lg:w-2/3 flex-col items-start"
				>
					<div className="flex w-full items-center gap-4">
						<div className="form-control">
							<input type="text" id="fullName" placeholder="Name*" {...register("fullName")} />
							<p className="form-error">{errors.fullName?.message}</p>
						</div>
						<div className="form-control">
							<input id="email" type="email" placeholder="Email*" {...register("email")} />
							<p className="form-error">{errors.email?.message}</p>
						</div>
					</div>
					<div className="form-control">
						<input type="text" id="subject" placeholder="Subject*" {...register("subject")} />
						<p className="form-error">{errors.subject?.message}</p>
					</div>
					<div className="form-control">
						<textarea
							rows={6}
							id="comment"
							placeholder="Write your comment..."
							{...register("comment")}
						></textarea>
						<p className="form-error">{errors.comment?.message}</p>
					</div>

					{/* <DevTool control={control} /> */}

					<button type="submit" className="btn btn-black w-full">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
