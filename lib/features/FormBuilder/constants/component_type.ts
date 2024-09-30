import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFontSize,
  AiOutlineSwitcher,
  AiOutlineLock,
  AiOutlineNumber,
  AiOutlineLink,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineCheckSquare,
  AiOutlineDown,
} from "react-icons/ai";

export const FORMBUILDER_COMPONENTS = [
  {
    id: "input",
    name: "Input",
    icon: AiOutlineFontSize,
    data: {
      name: "input",
      dataType: "string",
      value: "Text",
      componentProps: {
        type: "text",
        labelProps: { label: "Text" },
        placeholder: "Text",
      },
    },
  },
  {
    id: "email",
    name: "Email",
    icon: AiOutlineMail,
    data: {
      name: "email",
      dataType: "string",
      value: "",
      componentProps: {
        type: "email",
        labelProps: { label: "Email" },
        placeholder: "Email",
      },
    },
  },
  {
    id: "tel",
    name: "Phone",
    icon: AiOutlinePhone,
    data: {
      name: "tel",
      dataType: "string",
      value: "",
      componentProps: {
        type: "tel",
        labelProps: { label: "Phone" },
        placeholder: "Phone",
        phonePrefix: "853",
        phonePrefixOptions: [
          {
            id: "1",
            label: "Macau +853",
            value: "853",
            enable: true,
          },
          {
            id: "2",
            label: "Hong Kong +852",
            value: "852",
            enable: true,
          },
          {
            id: "3",
            label: "China +86",
            value: "86",
            enable: true,
          },
        ],
      },
    },
  },
  {
    id: "password",
    name: "Password",
    icon: AiOutlineLock,
    data: {
      name: "password",
      dataType: "string",
      value: "",
      componentProps: {
        type: "password",
        labelProps: { label: "Password" },
        placeholder: "Password",
      },
    },
  },
  {
    id: "number",
    name: "Number",
    icon: AiOutlineNumber,
    data: {
      name: "number",
      dataType: "number",
      value: 0,
      componentProps: {
        type: "number",
        labelProps: { label: "Number" },
        placeholder: "Number",
      },
    },
  },
  {
    id: "url",
    name: "Url",
    icon: AiOutlineLink,
    data: {
      name: "url",
      dataType: "string",
      value: "",
      componentProps: {
        type: "url",
        labelProps: { label: "Url" },
        placeholder: "Url",
      },
    },
  },
  {
    id: "date",
    name: "Date",
    icon: AiOutlineCalendar,
    data: {
      name: "date",
      dataType: "string",
      value: "",
      componentProps: {
        type: "date",
        labelProps: { label: "Date" },
        placeholder: "Date",
      },
    },
  },
  {
    id: "datetime",
    name: "Datetime",
    icon: AiOutlineClockCircle,
    data: {
      name: "datetime",
      dataType: "string",
      value: "",
      componentProps: {
        type: "datetime",
        labelProps: { label: "Datetime" },
        placeholder: "Datetime",
      },
    },
  },
  {
    id: "radio",
    name: "Radio",
    icon: AiOutlineCheckSquare,
    data: {
      name: "radio",
      dataType: "string",
      value: "",
      componentProps: {
        type: "radio",
        labelProps: { label: "Radio" },
        placeholder: "Radio",
        options: [
          {
            id: "1",
            label: "Male",
            value: "male",
            enable: true,
          },
          {
            id: "2",
            label: "Female",
            value: "female",
            enable: true,
          },
        ],
      },
    },
  },
  {
    id: "select",
    name: "Select",
    icon: AiOutlineDown,
    data: {
      name: "select",
      dataType: "string",
      value: "",
      componentProps: {
        type: "select",
        labelProps: { label: "Select" },
        placeholder: "Select",
        options: [
          {
            id: "1",
            label: "Macau",
            value: "macau",
            enable: true,
          },
          {
            id: "2",
            label: "Hong Kong",
            value: "hongkong",
            enable: true,
          },
          {
            id: "3",
            label: "China",
            value: "china",
            enable: true,
          },
        ],
      },
    },
  },
  {
    id: "switch",
    name: "Switch",
    icon: AiOutlineSwitcher,
    data: {
      name: "switch",
      dataType: "boolean",
      value: false,
      componentProps: {
        type: "switch",
        labelProps: {
          label: "Switch",
        },
        placeholder: "Switch",
      },
    },
  },
];
