"use client";

import { AnimatePresence, motion } from "framer-motion";
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
import { Controller, useForm } from "react-hook-form";
import { sendMessage } from "@/actions/contact";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle"); // 'idle' | 'sending' | 'success' | 'error'

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
  const { register, handleSubmit, control, formState, reset } = form;

  const { errors } = formState;
  console.log(errors.service);

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
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

    try {
      const response = await sendMessage(formatedData);

      if (!response.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={"md:w-[54%] order-2 md:order-1 bg-primary rounded-2xl p-10"}
    >
      <h3 className={"text-3xl font-semibold text-white mb-6"}>
        Wie können wir helfen?
      </h3>

      <AnimatePresence mode={"wait"}>
        {status !== "success" && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate={true}
            className={"flex flex-col gap-6"}
          >
            {/* INPUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  id={"firstname"}
                  type={"text"}
                  placeholder={`Vorname ${
                    errors.firstName ? "erforderlich" : ""
                  }`}
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "Vorname erforderlich",
                    },
                  })}
                  className={`bg-white ${
                    errors.firstName
                      ? "placeholder:border-destructive placeholder:text-destructive placeholder:font-bold placeholder:text-md"
                      : "placeholder:text-grey-primary"
                  }`}
                />
                {/*{errors.firstName && (*/}
                {/*  <p className={"text-secondary"}>{errors.firstName.message}</p>*/}
                {/*)}*/}
              </div>

              <div>
                <Input
                  id={"lastname"}
                  type={"text"}
                  placeholder={`Nachname ${
                    errors.lastName ? "erforderlich" : ""
                  }`}
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Nachname erforderlich",
                    },
                  })}
                  className={`bg-white ${
                    errors.lastName
                      ? "placeholder:border-destructive placeholder:text-destructive placeholder:font-bold placeholder:text-md"
                      : "placeholder:text-grey-primary"
                  }`}
                />
                {/*{errors.lastName && <p>{errors.lastName.message}</p>}*/}
              </div>
              <div>
                <Input
                  id={"email"}
                  type={"email"}
                  placeholder={`E-mail ${errors.email ? "erforderlich" : ""}`}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "E-Mail-Adresse erforderlich",
                    },
                    pattern: {
                      value: emailRegex,
                      message: "Invalid email address",
                    },
                  })}
                  className={`bg-white ${
                    errors.email
                      ? "placeholder:border-destructive placeholder:text-destructive placeholder:font-bold placeholder:text-md"
                      : "placeholder:text-grey-primary"
                  }`}
                />
                {/*{errors.email && <p>{errors.email.message}</p>}*/}
              </div>
              <Input
                id={"phone"}
                type={"text"}
                placeholder="Telefonnummer (optional)"
                {...register("phone")}
                className={"bg-white"}
              />
            </div>

            {/* SELECT SERVICE - wired to react-hook-form using Controller */}
            <Controller
              control={control}
              name="service"
              rules={{ required: "Bitte wählen Sie einen Service aus." }}
              render={({ field }) => (
                <>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      id="service"
                      className={`w-full bg-white ${
                        errors.service
                          ? "data-[placeholder]:text-destructive data-[placeholder]:font-bold aria-invalid:border-none"
                          : ""
                      }`}
                      aria-invalid={!!errors.service}
                      aria-describedby={
                        errors.service ? "service-error" : undefined
                      }
                    >
                      <SelectValue
                        placeholder={
                          errors.service
                            ? "Service erforderlich"
                            : "Wählen Sie einen Dienst aus"
                        }
                        // className={
                        //   errors.service
                        //     ? "data-placeholder:text-destructive"
                        //     : "text-orange-400"
                        // }
                      />
                    </SelectTrigger>
                    <SelectContent position={"popper"}>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem
                          value={"peritoneal_dialysis_(CADP)"}
                          className={
                            "focus:bg-secondary/20 focus:text-accent-foreground"
                          }
                        >
                          Peritonealdialyse (CAPD)
                        </SelectItem>
                        <SelectItem
                          value={"basic_care"}
                          className={
                            "focus:bg-secondary/20 focus:text-accent-foreground"
                          }
                        >
                          Grundpflege
                        </SelectItem>
                        <SelectItem
                          value={"treatment_care"}
                          className={
                            "focus:bg-secondary/20 focus:text-accent-foreground"
                          }
                        >
                          Behandlungspflege
                        </SelectItem>
                        <SelectItem
                          value={"domestic_help"}
                          className={
                            "focus:bg-secondary/20 focus:text-accent-foreground"
                          }
                        >
                          Hauswirtschaftliche Leistungen
                        </SelectItem>
                        <SelectItem
                          value={"respite_care"}
                          className={
                            "focus:bg-secondary/20 focus:text-accent-foreground"
                          }
                        >
                          Verhinderungspflege
                        </SelectItem>
                        <SelectItem
                          value={"other_services"}
                          className={
                            "focus:bg-secondary/20 focus:text-accent-foreground"
                          }
                        >
                          Weitere Leistungen
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  {/*{errors.service && (*/}
                  {/*  <p className="text-sm text-destructive">*/}
                  {/*    {errors.service.message}*/}
                  {/*  </p>*/}
                  {/*)}*/}
                </>
              )}
            />

            {/* TEXTAREA */}
            <div>
              <Textarea
                {...register("message", {
                  required: {
                    value: true,
                    message: "Eine Nachricht ist erforderlich.",
                  },
                  minLength: {
                    value: 10,
                    message:
                      "Die Nachricht muss mindestens 10 Zeichen lang sein.",
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
                    : "Geben Sie hier Ihre Nachricht ein..."
                }
              />
              {/*{errors.message && <p>{errors.message.message}</p>}*/}
            </div>

            {/* SUBMIT BUTTON */}
            <Button
              type={"submit"}
              disabled={status === "loading"}
              className={
                "bg-white text-grey-primary hover:bg-white/60 w-full md:max-w-40 cursor-pointer self-end transition-colors duration-300"
              }
            >
              {status === "loading" ? "Senden..." : "Nachricht senden"}
            </Button>

            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={
                    "text-red-500 text-center flex items-center justify-center gap-3"
                  }
                >
                  <span className={"text-3xl"}>❌</span>
                  <span>
                    Nachricht konnte nicht gesendet werden. Bitte versuchen Sie
                    es erneut.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        )}
        {status === "success" && (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center p-8 shadow-lg border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  🎉 Danke schön!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary mb-4">
                  <span>Ihre Nachricht wurde erfolgreich gesendet.</span>
                  <br />
                  <span>Wir melden uns so schnell wie möglich bei Ihnen!</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactForm;
