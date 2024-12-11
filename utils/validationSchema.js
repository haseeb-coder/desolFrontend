import * as Yup from "yup";
export const validationSchema = Yup.object({
  carModel: Yup.string()
    .min(3, "Car model must be at least 3 characters")
    .required("Car model is required"),
  price: Yup.number()
    .min(1, "Price must be greater than 0")
    .required("Price is required"),
  phone: Yup.string()
    .matches(
      /^0[1-3][0-9]{9}$/,
      "Phone number must be valid (e.g., 01123456789)"
    )
    .required("Phone number is required"),
  numberOfCopies: Yup.number()
    .required()
    .min(1, "Number of copies must be at least 1")
    .max(10, "Number of copies cannot exceed 10")
    .required("Number of copies is required"),
  pictures: Yup.array()
    .of(Yup.mixed().required("Image is required"))
    .test(
      "image-count",
      "Number of uploaded images must match the number of copies",
      function (value) {
        return value && value.length === this.parent.numberOfCopies;
      }
    ),
  city: Yup.string()
    .oneOf(["Lahore", "Karachi"], "Please select a valid city")
    .required("City is required"),
});
