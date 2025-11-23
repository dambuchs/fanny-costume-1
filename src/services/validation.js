import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  fullname: yup.string().required("Ce champ est requis"),
  email: yup
    .string()
    .required("Ce champ est requis")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Format d'email invalide"),
  subject: yup.string().required("Ce champ est requis"),
  body: yup.string().required("Ce champ est requis"),
});
