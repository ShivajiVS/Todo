import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import { Loader2 } from "lucide-react";

import { Link, useNavigate } from "react-router";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "./password-input";
import { SignInSchema } from "@/lib/validations";
import { getUser } from "@/lib/localstorage";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
// import { FormError } from "./form-error";

export default function SignInForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    console.log(values);
    const user = getUser();
    if (user?.email !== values.email) {
      setErrorMessage("InValid Email Address");
    }
    if (user?.password !== values.password) {
      setErrorMessage("InValid Password");
    }
    toast({
      title: "Sign-in Successful..",
    });
    navigate("/todos");
  };

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <>
      <div className="box-border px-2 py-12 pt-10">
        <Card className="max-w-sm mx-auto lg:max-w-md ">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col w-full max-w-md gap-4"
            >
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="vy@gmail.com" {...field} />
                          </FormControl>
                          <div className="h-1">
                            <FormMessage className="text-xs" />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center">
                            <FormLabel>Password</FormLabel>
                            <Link
                              to="#"
                              className="ml-auto inline-block text-sm underline text-[#0069c2]"
                            >
                              Forgot your password?
                            </Link>
                          </div>
                          <FormControl>
                            <div className="flex w-full">
                              <PasswordInput
                                placeholder="*************"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <div className="h-1">
                            <FormMessage className="text-xs" />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="flex items-center w-full space-x-2 capitalize"
                    disabled={isSubmitting}
                  >
                    <span>Login</span>
                  </Button>
                </div>
              </CardContent>
            </form>
          </Form>
          <CardFooter className="flex-col">
            <div className="mt-2 text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link to="/sign-up" className="underline">
                SignUp
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
