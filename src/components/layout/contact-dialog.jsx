import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ContactForm from "./contact-form";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

import { FaArrowRight } from "react-icons/fa6";
import sendEmail from "@/services/send-email";

const ContactDialog = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleOnSubmit = (values) => {
    sendEmail(values);
    toast({
      title: "Le message a été envoyé avec succès",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={IsOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg">
          Contactez-moi <FaArrowRight className="ml-2" size="14px" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contactez-moi</DialogTitle>
          <DialogDescription>
            Écrivez-moi un message pour que nous puissions échanger.
          </DialogDescription>
        </DialogHeader>
        <ContactForm handleOnSubmit={handleOnSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
