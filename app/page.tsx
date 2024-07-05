"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Bounce, toast } from "react-toastify";

export default function Home() {
  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "General Inquiry",
      message: "",
      consent: true,
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    toast.success("Form submitted successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    console.log(data);

    loginForm.reset();
  };

  return (
    <main
      className={` bg-light-green flex h-[100vh] items-center justify-center p-24`}
    >
      <Card className="w-full max-w-screen-sm space-y-5">
        <CardHeader>
          <h1 className="text-dark-gray text-2xl">Contact Us</h1>
        </CardHeader>
        <CardContent>
          <Form {...loginForm}>
            <form
              className="space-y-5"
              onSubmit={loginForm.handleSubmit(onSubmit)}
            >
              <div className="space-y-6">
                <div className="md:flex justify-around gap-4">
                  <div className="md:w-1/2">
                    <FormField
                      control={loginForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            First Name{" "}
                            <span className="text-custom-red">*</span>
                          </FormLabel>
                          <FormControl className="outline-slate-400 outline-1 outline">
                            <Input
                              type="text"
                              placeholder="First Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="md:w-1/2">
                    <FormField
                      control={loginForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Last Name <span className="text-custom-red">*</span>
                          </FormLabel>
                          <FormControl className="outline-slate-400 outline-1 outline">
                            <Input
                              type="text"
                              placeholder="Last Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email <span className="text-custom-red">*</span>
                      </FormLabel>
                      <FormControl className="outline-slate-400 outline-1 outline">
                        <Input
                          autoComplete="false"
                          type="email"
                          placeholder="johndoe@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={loginForm.control}
                name="queryType"
                render={({ field }) => (
                  <FormControl>
                    <RadioGroup
                      className="md:flex items-center justify-around"
                      name="queryTypeRadioGroup"
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className="h-9 sm:w-full flex items-center space-x-2 outline-slate-400 outline-1 outline px-5 py-2 rounded-sm">
                        <FormControl>
                          <RadioGroupItem
                            value="General Enquiry"
                            id="general-enquiry"
                            aria-label="General Enquiry"
                          />
                        </FormControl>
                        <Label
                          aria-labelledby="general-enquiry"
                          htmlFor="general-enquiry"
                        >
                          General Enquiry
                        </Label>
                      </div>

                      <div className="h-9 sm:w-full  flex items-center space-x-2 outline-slate-400 outline-1 outline px-5 py-2 rounded-sm">
                        <FormControl>
                          <RadioGroupItem
                            value="Support Request"
                            id="support-request"
                            aria-label="Support Request"
                          />
                        </FormControl>
                        <Label
                          aria-labelledby="support-request"
                          htmlFor="support-request"
                        >
                          Support Request
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                )}
              />

              <FormField
                control={loginForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Message <span className="text-custom-red">*</span>
                    </FormLabel>
                    <FormControl className="outline-slate-400 outline-1 outline">
                      <Textarea placeholder="Send us a message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2">
                <FormField
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          aria-label="I agree to be contacted by the team"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to be contacted by the team{" "}
                          <span className="text-custom-red">*</span>{" "}
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <FormDescription className="text-dark-gray">
                Red asterisk indicates a required field{" "}
                <span className="text-custom-red">*</span>
              </FormDescription>
              <Button
                className="w-full bg-medium-green hover:bg-dark-green font-bold text-white"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
