"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "radix-ui";
import { Controller, useForm } from "react-hook-form";
import { sendMessage } from "@/actions/contact";

const emailRegex =
  /^(?=.{1,254}$)(?=.{1,64}@)(?!.*\.\.)[A-Za-z0-9._%+-]+@(?!-)(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  // Provide defaultValues so controlled components start with a value
  const form = useForm<ContactFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });
  // Correctly destructure form helpers. errors lives under formState
  const { register, handleSubmit, control, formState } = form;

  const { errors } = formState;

  const onSubmit = (data: ContactFormValues) => {
    const formatedService = data.service
      ? data.service
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "No service selected";

    const formatedData = {
      ...data,
      service: formatedService,
    };

    sendMessage(formatedData);
  };

  return (
    <div className={"md:w-[54%] order-2 md:order-1"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate={true}
        className={"flex flex-col gap-6 p-10 bg-primary rounded-2xl"}
      >
        <h3 className={"text-3xl font-semibold text-white"}>
          How can we help?
        </h3>

        {/* INPUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              id={"firstname"}
              type={"text"}
              placeholder="First Name"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First name is required",
                },
              })}
              className={"bg-white"}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>

          <div>
            <Input
              id={"lastname"}
              type={"text"}
              placeholder="Last Name"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
              })}
              className={"bg-white"}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>
          <div>
            <Input
              id={"email"}
              type={"email"}
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: emailRegex,
                  message: "Invalid email address",
                },
              })}
              className={"bg-white"}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <Input
            id={"phone"}
            type={"text"}
            placeholder="Phone number"
            {...register("phone")}
            className={"bg-white"}
          />
        </div>

        {/* SELECT SERVICE - wired to react-hook-form using Controller */}
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <Select
              onValueChange={(value) => field.onChange(value)}
              value={field.value}
              defaultValue={field.value}
            >
              <SelectTrigger id={"service"} className={"w-full bg-white"}>
                <SelectValue placeholder={"Select a service"} />
              </SelectTrigger>
              <SelectContent position={"popper"}>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value={"peritoneal_dialysis_(CADP)"}>
                    Peritoneal Dialysis (CAPD)
                  </SelectItem>
                  <SelectItem value={"basic_care"}>Basic care</SelectItem>
                  <SelectItem value={"treatment_care"}>
                    Treatment care
                  </SelectItem>
                  <SelectItem value={"domestic_help"}>Domestic help</SelectItem>
                  <SelectItem value={"respite_care"}>Respite care</SelectItem>
                  <SelectItem value={"other_services"}>Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />

        {/* TEXTAREA */}
        <div>
          <Textarea
            {...register("message", {
              required: {
                value: true,
                message: "Message is required",
              },
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            className={`h-50 bg-white  placeholder:text-md  ${
              errors.message
                ? "placeholder:border-destructive placeholder:text-destructive placeholder:font-bold placeholder:text-md"
                : "placeholder:text-grey-primary"
            }`}
            placeholder={
              errors.message
                ? errors.message.message
                : "Type your message here..."
            }
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          className={
            "bg-white text-grey-primary hover:bg-white/60 w-full md:max-w-40 cursor-pointer self-end transition-colors duration-300"
          }
        >
          Send message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
