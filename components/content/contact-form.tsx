"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Copy, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message sent! I'll get back to you soon.");
    reset();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass rounded-2xl p-6 md:p-10">
      <button
        type="button"
        onClick={copyEmail}
        className="mb-8 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {personalInfo.email}
      </button>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <Input id="name" placeholder="Your name" {...register("name")} />
          {errors.name && <p className="mt-1 text-sm text-error">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && <p className="mt-1 text-sm text-error">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell me about your project..."
            {...register("message")}
          />
          {errors.message && <p className="mt-1 text-sm text-error">{errors.message.message}</p>}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full gap-2">
          {isSubmitting ? "Sending..." : "Send message"}
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  );
}
