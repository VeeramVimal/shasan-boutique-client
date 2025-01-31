import { ICON_SVG } from "@/constants/image_string";

export const loginDataFields = [
  {
    id: 1,
    name: "email",
    type: "text",
    maxLength: 256,
    label: "Email",
    placeholder: " Email",
    errorMessage: "Enter a valid email id!",
    icons: { mailIcon: ICON_SVG.MAIL_ICON }
  },
  {
    id: 2,
    name: "password",
    type: "password",
    maxLength: 256,
    label: "Password",
    placeholder: "Password",
    errorMessage: "Enter a valid password",
    icons: {
      openPassIcon: ICON_SVG.EYE_OPEN,
    }
  },
];

export const registerFields = [
  {
    id: 1,
    name: "name",
    type: "text",
    maxLength: 256,
    label: "Name",
    placeholder: " Name",
    errorMessage: "Enter Name",
  },
  {
    id: 2,
    name: "Country",
    type: "select",
    maxLength: 256,
    label: "Country",
    option: "Choose your country",
    placeholder: "",
    errorMessage: "Select your country",
  },
  {
    id: 1,
    name: "email",
    type: "text",
    maxLength: 256,
    label: "Email",
    placeholder: " Email",
    errorMessage: "Enter a valid email id!",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    maxLength: 256,
    label: "Password",
    placeholder: "Password",
    errorMessage: "Enter a valid password",
  },
]
export const forgotPassworFields = [
  {
    id: 1,
    type: "text",
    maxLength: 256,
    label: "Email",
    placeholder: "someone@example.com",
    errorMessage: "Enter a valid email id!",
  },
];
