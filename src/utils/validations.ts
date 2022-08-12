import * as Yup from "yup";

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
  password: Yup.string().min(8, "Password must be atleast 8 characters long")
});

export const SignupFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
  password: Yup.string().min(8, "Password must be atleast 8 characters long"),
  fullname: Yup.string().matches(/^[a-zA-Z ]*$/, "Name can contain only alphabets")
});