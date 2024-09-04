import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type ChildrenProp = {
	children: ReactNode;
};

const AuthProvider = ({ children }: ChildrenProp) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
