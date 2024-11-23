import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import { Loader2 } from "lucide-react";

import { Link } from "react-router";

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
// import { FormError } from "./form-error";

export default function SignInForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    console.log(values);
  };

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <>
      <div className="box-border py-12 pt-10 px-2">
        <Card className="mx-auto max-w-sm lg:max-w-md ">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-md flex flex-col gap-4"
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
                    className="w-full capitalize flex items-center space-x-2"
                    disabled={isSubmitting}
                  >
                    <span>Login</span>
                  </Button>
                </div>
              </CardContent>
            </form>
          </Form>
          <CardFooter className="flex-col">
            <div className="mt-2 text-center text-sm">
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
