"use client";

import Hero from "@/components/sections/hero";
import Work from "@/components/sections/work";
import InstagramFeed from "@/components/sections/instagram-feed";
import ContactForm from "@/components/layout/contact-form";
import sendEmail from "@/services/send-email";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleOnSubmit = (values, { resetForm }) => {
    try {
      sendEmail(values);
      toast({
        title: "Message envoyé !",
        description: "Merci de m'avoir contactée. Je vous répondrai bientôt.",
      });
      resetForm();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Work />
      <InstagramFeed />
      <section id="contact" className="mx-auto max-w-2xl py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider">Contactez-moi</h2>
          <p className="mt-2 text-muted-foreground">Créons quelque chose de beau ensemble.</p>
        </div>
        <div className="rounded-xl border bg-card p-8 shadow-sm">
            <ContactForm handleOnSubmit={handleOnSubmit} />
        </div>
      </section>
    </div>
  );
}
