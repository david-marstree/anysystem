import{P as i}from"./PasswordInput-CSri8v8f.js";import"./jsx-runtime-BjG_zV1W.js";import"./iframe-gIK4bdEr.js";import"./preload-helper-C1FmrZbK.js";import"./bundle-mjs-3VKOpVsw.js";import"./index-C66RjoFl.js";import"./iconBase-zb0yOOdI.js";const w={title:"Components/PasswordInput",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{name:{control:{type:"text"},description:"input 的 name 屬性"},value:{control:{type:"text"},description:"密碼值"},placeholder:{control:{type:"text"},description:"佔位符文字"},labelProps:{control:{type:"object"},description:"傳遞給外層 Label 的 props",table:{type:{summary:"LabelBaseProps"}}},onChange:{action:"changed",description:"值改變時的回調函數",table:{category:"Events"}}}},e={args:{name:"password",value:"",placeholder:"請輸入密碼",labelProps:{label:"密碼",type:"border",variant:"md"}}},r={args:{name:"password",value:"mySecretPassword123",placeholder:"請輸入密碼",labelProps:{label:"密碼",type:"border",variant:"md"}}},a={args:{name:"password",value:"123",placeholder:"請輸入密碼",labelProps:{label:"密碼",type:"border",variant:"md",isError:!0,errorMessage:"密碼長度至少需要 8 個字元"}}};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: "password",
    value: "",
    placeholder: "請輸入密碼",
    labelProps: {
      label: "密碼",
      type: "border",
      variant: "md"
    }
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,p,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: "password",
    value: "mySecretPassword123",
    placeholder: "請輸入密碼",
    labelProps: {
      label: "密碼",
      type: "border",
      variant: "md"
    }
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: "password",
    value: "123",
    placeholder: "請輸入密碼",
    labelProps: {
      label: "密碼",
      type: "border",
      variant: "md",
      isError: true,
      errorMessage: "密碼長度至少需要 8 個字元"
    }
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const E=["Basic","WithValue","WithError"];export{e as Basic,a as WithError,r as WithValue,E as __namedExportsOrder,w as default};
