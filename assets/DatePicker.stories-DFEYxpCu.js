import{D as m}from"./DatePicker-BNVNjw-X.js";import"./jsx-runtime-BjG_zV1W.js";import"./moment-C5S46NFB.js";import"./bundle-mjs-3VKOpVsw.js";import"./index-BQ1ygiz2.js";import"./iconBase-zb0yOOdI.js";import"./iframe-gIK4bdEr.js";import"./preload-helper-C1FmrZbK.js";import"./floating-ui.react-dom-DpUDME4m.js";import"./index-BPuoX7PR.js";import"./Label-Dm8sPyOg.js";import"./index-C66RjoFl.js";const w={title:"Components/DatePicker",component:m,tags:["autodocs"],argTypes:{name:{control:{type:"text"},description:"input 的 name 屬性，表單識別用"},value:{control:{type:"text"},description:"目前的日期值（Unix timestamp 字串，單位秒）"},showTime:{control:{type:"boolean"},description:"是否顯示時間選擇"},readOnly:{control:{type:"boolean"},description:"是否唯讀"},onChange:{action:"changed",description:"日期變更時的 callback (value: string) => void",table:{category:"Events"}}}},e={args:{name:"birthday",value:Math.round(new Date("2022-01-01").getTime()/1e3).toString(),showTime:!1,readOnly:!1,labelProps:{label:"生日",isError:!1,type:"border",variant:"md"}}},t={args:{name:"meetingTime",value:Math.round(new Date("2022-01-01T15:30:00").getTime()/1e3).toString(),showTime:!0,readOnly:!1}};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    name: "birthday",
    value: Math.round(new Date("2022-01-01").getTime() / 1000).toString(),
    showTime: false,
    readOnly: false,
    labelProps: {
      label: "生日",
      isError: false,
      type: "border",
      variant: "md"
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,i,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: "meetingTime",
    value: Math.round(new Date("2022-01-01T15:30:00").getTime() / 1000).toString(),
    showTime: true,
    readOnly: false
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const D=["Basic","WithTime"];export{e as Basic,t as WithTime,D as __namedExportsOrder,w as default};
