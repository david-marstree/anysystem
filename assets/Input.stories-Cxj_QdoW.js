import{I as d}from"./Input-DBMKcCYB.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./InputBase-DU1TGHl3.js";import"./bundle-mjs-3VKOpVsw.js";import"./Label-B74eOFRC.js";import"./iconBase-yPxZrzXe.js";const h={title:"Components/Input",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{labelProps:{control:{type:"object"},description:"傳遞給外層 LabelBase 的 props，包含 label、isError、errorMessage、type、variant 等。若設定，會自動包裹 Input。",table:{type:{summary:"LabelBaseProps"}}},name:{control:{type:"text"},description:"Name of the input"},type:{control:{type:"radio"},description:"Type of the input",options:["text","number","email"],table:{defaultValue:{summary:"text"}}},value:{control:{type:"text"},description:"Value of the input"},placeholder:{control:{type:"text"},description:"Placeholder of the input"}}},e={args:{type:"text",name:"username",value:"",labelProps:{label:"使用者名稱",isError:!1,type:"border",variant:"md"},placeholder:"請輸入帳號"}},r={args:{name:"email",type:"email",value:"test@gmail.com",labelProps:{label:"使用者名稱",isError:!1,type:"border",variant:"md"}}},a={args:{name:"text",type:"text",value:"test",labelProps:{label:"使用者名稱",isError:!1,type:"border",variant:"md"}}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    type: "text",
    name: "username",
    value: "",
    labelProps: {
      label: "使用者名稱",
      isError: false,
      type: "border",
      variant: "md"
    },
    placeholder: "請輸入帳號"
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,l,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: "email",
    type: "email",
    value: "test@gmail.com",
    labelProps: {
      label: "使用者名稱",
      isError: false,
      type: "border",
      variant: "md"
    }
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,i,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: "text",
    type: "text",
    value: "test",
    labelProps: {
      label: "使用者名稱",
      isError: false,
      type: "border",
      variant: "md"
    }
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const E=["WithLabel","Email","Default"];export{a as Default,r as Email,e as WithLabel,E as __namedExportsOrder,h as default};
