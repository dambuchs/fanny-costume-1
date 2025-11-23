"use client";

import Hero from "@/components/sections/hero";
import Work from "@/components/sections/work";
import ContactForm from "@/components/layout/contact-form";
import sendEmail from "@/services/send-email";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleOnSubmit = (values, { resetForm }) => {
    try {
      sendEmail(values);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      resetForm();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Work />
      <section id="contact" className="mx-auto max-w-2xl py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider">Get in Touch</h2>
          <p className="mt-2 text-muted-foreground">Let's create something beautiful together.</p>
        </div>
        <div className="rounded-xl border bg-card p-8 shadow-sm">
            <ContactForm handleOnSubmit={handleOnSubmit} />
        </div>
      </section>
    </div>
  );
}
