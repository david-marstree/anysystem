import{D as m}from"./DatePicker-DZAI-T-V.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./moment-C5S46NFB.js";import"./bundle-mjs-3VKOpVsw.js";import"./index-BhDvn_Ny.js";import"./iconBase-yPxZrzXe.js";import"./floating-ui.react-dom-C2h4aSh8.js";import"./index-CmHj60O0.js";import"./Label-B74eOFRC.js";const f={title:"Components/DatePicker",component:m,tags:["autodocs"],argTypes:{name:{control:{type:"text"},description:"input 的 name 屬性，表單識別用"},value:{control:{type:"text"},description:"目前的日期值（Unix timestamp 字串，單位秒）"},showTime:{control:{type:"boolean"},description:"是否顯示時間選擇"},readOnly:{control:{type:"boolean"},description:"是否唯讀"},onChange:{action:"changed",description:"日期變更時的 callback (value: string) => void",table:{category:"Events"}}}},e={args:{name:"birthday",value:Math.round(new Date("2022-01-01").getTime()/1e3).toString(),showTime:!1,readOnly:!1,labelProps:{label:"生日",isError:!1,type:"border",variant:"md"}}},t={args:{name:"meetingTime",value:Math.round(new Date("2022-01-01T15:30:00").getTime()/1e3).toString(),showTime:!0,readOnly:!1}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: "meetingTime",
    value: Math.round(new Date("2022-01-01T15:30:00").getTime() / 1000).toString(),
    showTime: true,
    readOnly: false
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const v=["Basic","WithTime"];export{e as Basic,t as WithTime,v as __namedExportsOrder,f as default};
