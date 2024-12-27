import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";
import { Link, redirect, useNavigate } from "react-router";

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
import { SignUpSchema } from "@/lib/validations";
import { createUser } from "@/lib/localstorage";
import { toast } from "@/hooks/use-toast";

interface FormStep1Props {
  form: UseFormReturn<z.infer<typeof SignUpSchema>>;
  onNextStep: () => void;
}

interface FormStep2Props {
  form: UseFormReturn<z.infer<typeof SignUpSchema>>;
  isSubmitting: boolean;
}

function FormStep1({ form, onNextStep }: FormStep1Props) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onNextStep();
    }
  };
  return (
    <motion.div
      className="space-y-5"
      animate={{ translateX: "0%" }}
      transition={{ ease: "easeInOut" }}
      onKeyDown={handleKeyDown}
    >
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="Kondeti Shivaji" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="vy@gmail.com" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
      <Button className="w-full " onClick={onNextStep}>
        Next
      </Button>
    </motion.div>
  );
}

function FormStep2({ form, isSubmitting }: FormStep2Props) {
  return (
    <motion.div
      className="space-y-4"
      animate={{ translateX: "0%" }}
      transition={{ ease: "easeInOut" }}
    >
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <PasswordInput placeholder="*************" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <PasswordInput placeholder="*************" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Creating" : "Create Account"}
      </Button>
    </motion.div>
  );
}

export default function SignUpForm() {
  const [formStep, setFormStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const nextFormStep = async () => {
    const isValid = await form.trigger(["fullName", "email"]);
    if (isValid) {
      form.clearErrors();
      setFormStep(1);
    }
  };

  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    const { fullName, email, password } = values;
    const res = createUser({ fullName, email, password });
    if (!res?.status) setErrorMessage(res?.message!);
    toast({
      title: "user created Successful..",
    });
    navigate("/sign-in");
  };

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <div className="box-border px-2 py-12 lg:pt-16">
      <Card className="max-w-sm mx-auto lg:max-w-md">
        <CardHeader>
          <CardTitle className="text-xl text-center">
            Create an Account
          </CardTitle>
          {formStep === 1 && (
            <CardDescription className="flex space-x-0.5">
              <ArrowLeft
                aria-label="Go back to the previous step"
                className="cursor-pointer"
                onClick={() => setFormStep(0)}
              />
            </CardDescription>
          )}
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full max-w-md gap-4 lg:max-w-lg"
          >
            <CardContent>
              {formStep === 0 && (
                <FormStep1 form={form} onNextStep={nextFormStep} />
              )}
              {formStep === 1 && (
                <FormStep2 form={form} isSubmitting={isSubmitting} />
              )}
            </CardContent>
          </form>
          <CardFooter className="flex-col">
            <div className="mt-2 text-sm text-center">
              Already have an account?
              <Link to="/sign-in" className="ml-1 underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Form>
      </Card>
    </div>
  );
}
