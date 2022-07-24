import * as Yup from "yup";

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
  password: Yup.string().min(8, "Password must be atleast 8 characters long")
});