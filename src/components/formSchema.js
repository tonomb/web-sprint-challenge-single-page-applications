
import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .min(6, "name must be at least 2 characters long")
      .required("Your name is Required")
  });

  export default formSchema;