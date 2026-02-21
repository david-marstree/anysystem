import{R as m}from"./RadioGroup-z-uHNzMj.js";import"./jsx-runtime-BjG_zV1W.js";import"./iframe-gIK4bdEr.js";import"./preload-helper-C1FmrZbK.js";import"./bundle-mjs-3VKOpVsw.js";import"./helper-B7MF-0G3.js";import"./iconBase-zb0yOOdI.js";import"./bugs-DbHXcW6g.js";import"./use-by-comparator-CZU-NL2p.js";import"./label-CKvBRiA1.js";import"./keyboard-ea4pcW4v.js";import"./index-BPuoX7PR.js";import"./description-Bx7Nq89P.js";import"./focus-management-Ddlno2iB.js";const R={title:"Components/RadioGroup",component:m,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{name:{control:{type:"text"},description:"radio group 的 name 屬性"},options:{control:{type:"object"},description:"選項列表",table:{type:{summary:"SelectOption[]"}}},value:{control:{type:"text"},description:"當前選中的值"},valueField:{control:{type:"text"},description:"用作值的欄位名稱",table:{defaultValue:{summary:"value"}}},labelProps:{control:{type:"object"},description:"傳遞給外層 Label 的 props",table:{type:{summary:"LabelBaseProps"}}},onChange:{action:"changed",description:"值改變時的回調函數",table:{category:"Events"}}}},e={args:{name:"gender",options:[{id:"1",value:"male",label:"男性",enable:!0},{id:"2",value:"female",label:"女性",enable:!0},{id:"3",value:"other",label:"其他",enable:!0}],value:"male"}},a={args:{name:"plan",options:[{id:"1",value:"basic",label:"基本方案",enable:!0},{id:"2",value:"pro",label:"專業方案",enable:!0},{id:"3",value:"enterprise",label:"企業方案",enable:!0}],value:""}},n={args:{name:"country",options:[{id:"1",value:"tw",label:"台灣",enable:!0},{id:"2",value:"cn",label:"中國",enable:!0},{id:"3",value:"jp",label:"日本",enable:!0},{id:"4",value:"kr",label:"韓國",enable:!0},{id:"5",value:"us",label:"美國",enable:!0}],value:"tw"}};var r,l,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    name: "gender",
    options: [{
      id: "1",
      value: "male",
      label: "男性",
      enable: true
    }, {
      id: "2",
      value: "female",
      label: "女性",
      enable: true
    }, {
      id: "3",
      value: "other",
      label: "其他",
      enable: true
    }],
    value: "male"
  }
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var o,i,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: "plan",
    options: [{
      id: "1",
      value: "basic",
      label: "基本方案",
      enable: true
    }, {
      id: "2",
      value: "pro",
      label: "專業方案",
      enable: true
    }, {
      id: "3",
      value: "enterprise",
      label: "企業方案",
      enable: true
    }],
    value: ""
  }
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var u,p,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: "country",
    options: [{
      id: "1",
      value: "tw",
      label: "台灣",
      enable: true
    }, {
      id: "2",
      value: "cn",
      label: "中國",
      enable: true
    }, {
      id: "3",
      value: "jp",
      label: "日本",
      enable: true
    }, {
      id: "4",
      value: "kr",
      label: "韓國",
      enable: true
    }, {
      id: "5",
      value: "us",
      label: "美國",
      enable: true
    }],
    value: "tw"
  }
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const k=["Basic","WithError","ManyOptions"];export{e as Basic,n as ManyOptions,a as WithError,k as __namedExportsOrder,R as default};
