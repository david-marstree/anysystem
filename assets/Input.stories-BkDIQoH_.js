import{I as d}from"./Input-Bvrqlsjh.js";import"./jsx-runtime-BjG_zV1W.js";import"./iframe-gIK4bdEr.js";import"./preload-helper-C1FmrZbK.js";import"./InputBase-BbcBql3L.js";import"./bundle-mjs-3VKOpVsw.js";import"./Label-Dm8sPyOg.js";import"./index-C66RjoFl.js";import"./iconBase-zb0yOOdI.js";const P={title:"Components/Input",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{labelProps:{control:{type:"object"},description:"傳遞給外層 LabelBase 的 props，包含 label、isError、errorMessage、type、variant 等。若設定，會自動包裹 Input。",table:{type:{summary:"LabelBaseProps"}}},name:{control:{type:"text"},description:"Name of the input"},type:{control:{type:"radio"},description:"Type of the input",options:["text","number","email"],table:{defaultValue:{summary:"text"}}},value:{control:{type:"text"},description:"Value of the input"},placeholder:{control:{type:"text"},description:"Placeholder of the input"}}},e={args:{type:"text",name:"username",value:"",labelProps:{label:"使用者名稱",isError:!1,type:"border",variant:"md"},placeholder:"請輸入帳號"}},r={args:{name:"email",type:"email",value:"test@gmail.com",labelProps:{label:"使用者名稱",isError:!1,type:"border",variant:"md"}}},t={args:{name:"text",type:"text",value:"test",labelProps:{label:"使用者名稱",isError:!1,type:"border",variant:"md"}}};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,i,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const I=["WithLabel","Email","Default"];export{t as Default,r as Email,e as WithLabel,I as __namedExportsOrder,P as default};
