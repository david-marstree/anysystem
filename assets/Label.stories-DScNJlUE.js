import{L as x}from"./Label-Dm8sPyOg.js";import"./jsx-runtime-BjG_zV1W.js";import"./bundle-mjs-3VKOpVsw.js";import"./index-C66RjoFl.js";import"./iconBase-zb0yOOdI.js";import"./iframe-gIK4bdEr.js";import"./preload-helper-C1FmrZbK.js";const C={title:"Components/Label",component:x,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:{type:"text"},description:"標籤文字"},htmlFor:{control:{type:"text"},description:"對應的 input id"},isError:{control:{type:"boolean"},description:"是否顯示錯誤狀態"},errorMessage:{control:{type:"text"},description:"錯誤訊息"},type:{control:{type:"radio"},options:["border","normal","horizontal"],description:"標籤樣式類型",table:{defaultValue:{summary:"border"}}},variant:{control:{type:"radio"},options:["sm","md"],description:"標籤尺寸",table:{defaultValue:{summary:"md"}}},className:{control:{type:"text"},description:"自定義 CSS 類名"},children:{control:{type:"text"},description:"標籤包裹的內容"}}},r={args:{label:"使用者名稱",type:"border",variant:"md",children:"表單欄位內容"}},e={args:{label:"電子郵件",type:"normal",variant:"md",children:"表單欄位內容"}},a={args:{label:"密碼",type:"horizontal",variant:"md",children:"表單欄位內容"}},o={args:{label:"必填欄位",type:"border",variant:"md",isError:!0,errorMessage:"此欄位為必填",children:"表單欄位內容"}},t={args:{label:"小尺寸標籤",type:"border",variant:"sm",children:"表單欄位內容"}};var n,s,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "使用者名稱",
    type: "border",
    variant: "md",
    children: "表單欄位內容"
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "電子郵件",
    type: "normal",
    variant: "md",
    children: "表單欄位內容"
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "密碼",
    type: "horizontal",
    variant: "md",
    children: "表單欄位內容"
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,y,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "必填欄位",
    type: "border",
    variant: "md",
    isError: true,
    errorMessage: "此欄位為必填",
    children: "表單欄位內容"
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,v,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "小尺寸標籤",
    type: "border",
    variant: "sm",
    children: "表單欄位內容"
  }
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const H=["Border","Normal","Horizontal","WithError","Small"];export{r as Border,a as Horizontal,e as Normal,t as Small,o as WithError,H as __namedExportsOrder,C as default};
