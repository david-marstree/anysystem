import{S as g}from"./Selectbox-D7xaimcH.js";import"./jsx-runtime-BjG_zV1W.js";import"./iframe-gIK4bdEr.js";import"./preload-helper-C1FmrZbK.js";import"./helper-B7MF-0G3.js";import"./iconBase-zb0yOOdI.js";import"./index-C66RjoFl.js";import"./lodash-CKelhqjC.js";import"./keyboard-ea4pcW4v.js";import"./floating-ui.react-dom-DpUDME4m.js";import"./index-BPuoX7PR.js";import"./bundle-mjs-3VKOpVsw.js";import"./listbox-czf6WRC6.js";import"./bugs-DbHXcW6g.js";import"./use-resolve-button-type-CGEIKNbq.js";import"./use-by-comparator-CZU-NL2p.js";import"./label-CKvBRiA1.js";import"./description-Bx7Nq89P.js";import"./portal-DJ8oPe_c.js";import"./focus-management-Ddlno2iB.js";import"./transition-BSBR0-FO.js";import"./open-closed-D6AVR6gh.js";const F={title:"Components/Selectbox",component:g,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{name:{control:{type:"text"},description:"select 的 name 屬性"},options:{control:{type:"object"},description:"選項列表",table:{type:{summary:"SelectOption[]"}}},value:{control:{type:"text"},description:"當前選中的值"},placeholder:{control:{type:"text"},description:"佔位符文字"},multiple:{control:{type:"boolean"},description:"是否支援多選",table:{defaultValue:{summary:!1}}},valueField:{control:{type:"text"},description:"用作值的欄位名稱",table:{defaultValue:{summary:"value"}}},labelProps:{control:{type:"object"},description:"傳遞給外層 Label 的 props",table:{type:{summary:"LabelBaseProps"}}},onChange:{action:"changed",description:"值改變時的回調函數",table:{category:"Events"}}}},e={args:{name:"city",options:[{id:"1",value:"taipei",label:"台北",enable:!0},{id:"2",value:"taichung",label:"台中",enable:!0},{id:"3",value:"tainan",label:"台南",enable:!0},{id:"4",value:"kaohsiung",label:"高雄",enable:!0}],value:"taipei",placeholder:"請選擇城市",multiple:!1}},a={args:{name:"skills",options:[{id:"1",value:"js",label:"JavaScript",enable:!0},{id:"2",value:"ts",label:"TypeScript",enable:!0},{id:"3",value:"react",label:"React",enable:!0},{id:"4",value:"vue",label:"Vue",enable:!0},{id:"5",value:"angular",label:"Angular",enable:!0}],value:["js","react"],placeholder:"請選擇技能",multiple:!0}},l={args:{name:"department",options:[{id:"1",value:"hr",label:"人力資源",enable:!0},{id:"2",value:"it",label:"資訊科技",enable:!0},{id:"3",value:"sales",label:"業務",enable:!0},{id:"4",value:"finance",label:"財務",enable:!0}],value:"",placeholder:"請選擇部門",multiple:!1}},n={args:{name:"status",options:[{id:"1",value:"active",label:"啟用",enable:!0},{id:"2",value:"inactive",label:"停用",enable:!1},{id:"3",value:"pending",label:"待處理",enable:!0}],value:"active",placeholder:"請選擇狀態",multiple:!1}};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: "city",
    options: [{
      id: "1",
      value: "taipei",
      label: "台北",
      enable: true
    }, {
      id: "2",
      value: "taichung",
      label: "台中",
      enable: true
    }, {
      id: "3",
      value: "tainan",
      label: "台南",
      enable: true
    }, {
      id: "4",
      value: "kaohsiung",
      label: "高雄",
      enable: true
    }],
    value: "taipei",
    placeholder: "請選擇城市",
    multiple: false
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var o,u,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: "skills",
    options: [{
      id: "1",
      value: "js",
      label: "JavaScript",
      enable: true
    }, {
      id: "2",
      value: "ts",
      label: "TypeScript",
      enable: true
    }, {
      id: "3",
      value: "react",
      label: "React",
      enable: true
    }, {
      id: "4",
      value: "vue",
      label: "Vue",
      enable: true
    }, {
      id: "5",
      value: "angular",
      label: "Angular",
      enable: true
    }],
    value: ["js", "react"] as any,
    placeholder: "請選擇技能",
    multiple: true
  }
}`,...(s=(u=a.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var p,c,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: "department",
    options: [{
      id: "1",
      value: "hr",
      label: "人力資源",
      enable: true
    }, {
      id: "2",
      value: "it",
      label: "資訊科技",
      enable: true
    }, {
      id: "3",
      value: "sales",
      label: "業務",
      enable: true
    }, {
      id: "4",
      value: "finance",
      label: "財務",
      enable: true
    }],
    value: "",
    placeholder: "請選擇部門",
    multiple: false
  }
}`,...(b=(c=l.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var d,m,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: "status",
    options: [{
      id: "1",
      value: "active",
      label: "啟用",
      enable: true
    }, {
      id: "2",
      value: "inactive",
      label: "停用",
      enable: false
    }, {
      id: "3",
      value: "pending",
      label: "待處理",
      enable: true
    }],
    value: "active",
    placeholder: "請選擇狀態",
    multiple: false
  }
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const q=["Single","Multiple","WithError","Disabled"];export{n as Disabled,a as Multiple,e as Single,l as WithError,q as __namedExportsOrder,F as default};
