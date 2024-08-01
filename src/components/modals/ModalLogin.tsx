import { zodResolver } from "@hookform/resolvers/zod";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const loginFormSchema = z.object({
  loginEmail: string()
    .email()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  loginPassword: string().min(6, {
    message: "Must be 6 or more characters long.",
  }),
});

export type LoginFormProps = z.infer<typeof loginFormSchema>;

const ModalLogin = () => {
  const {
    register,
    // control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({ resolver: zodResolver(loginFormSchema) });

  const formSubmitHandler = (data: LoginFormProps) => {
    console.log(data);
    reset();
  };

  return createPortal(
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <DialogHeader>
            <TabsContent value="login">
              <h2>Login</h2>

              <form onSubmit={handleSubmit(formSubmitHandler)}>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Your Email*"
                    id="loginEmail"
                    {...register("loginEmail")}
                  />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    placeholder="Password*"
                    id="loginPassword"
                    {...register("loginPassword")}
                  />
                </div>
              </form>
            </TabsContent>
            <TabsContent value="register">
              Change your password here.
            </TabsContent>
          </DialogHeader>
        </Tabs>
      </DialogContent>
    </Dialog>,
    document.getElementById("modal")!,
  );
};

export default ModalLogin;
