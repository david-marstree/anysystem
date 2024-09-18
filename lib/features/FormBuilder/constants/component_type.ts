export const FORMBUILDER_COMPONENTS = [
  {
    id: "input",
    name: "Input",
    icon: "AiOutlineFontSize",
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
    icon: "AiOutlineMail",
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
    icon: "AiOutlinePhone",
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
  ,
];
