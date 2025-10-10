"use client";
import HeaderBreadCrumb from "@/components/layout/header-breadcrumb";
import { Button } from "@ecommerce/ui/components/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ecommerce/ui/components/form";
import { Input } from "@ecommerce/ui/components/input";
import { z } from "zod";
import { Text } from "@ecommerce/ui/components/text";

const formSchema = z.object({
  oldpassword: z.string().min(7, {
    message: "password must be at least 2 characters.",
  }),
  newpassword: z.string().min(3, {
    message: "password must match",
  }),
});

function Login() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldpassword: "",
      newpassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <HeaderBreadCrumb
        previous={{
          Home: "/",
        }}
        current="Login"
        route="Login"
      />
      <div className="container flex flex-col gap-10 justify-center items-center py-40 w-1/4">
        <div className="w-full">
          <Button variant="outline" className="w-full flex gap-2">
            <img src="../../Google.svg" alt="" /> Continue with Google
          </Button>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="oldpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-10 w-full">
              Change password
            </Button>
          </form>
        </Form>
        <Text variant="body-1" asChild>
          Don't have an account
        </Text>
      </div>
    </div>
  );
}

export default Login;
