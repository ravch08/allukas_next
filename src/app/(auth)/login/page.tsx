import { Metadata } from "next";
import { LoginForm, PagesBanner } from "../../../components/utils/helper";

export const metadata: Metadata = {
	title: "Login | Umino - A Modern Store",
};

const Login = () => {
	return (
		<main>
			<PagesBanner pageTitle="Login" subTitle="WELCOME TO UMINO" />
			<LoginForm />
		</main>
	);
};

export default Login;
