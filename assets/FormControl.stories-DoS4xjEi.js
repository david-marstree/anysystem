const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DtLtBE-e.js","./Label-Dm8sPyOg.js","./jsx-runtime-BjG_zV1W.js","./bundle-mjs-3VKOpVsw.js","./index-C66RjoFl.js","./iconBase-zb0yOOdI.js","./iframe-gIK4bdEr.js","./preload-helper-C1FmrZbK.js","./iframe-vOA_c-9Z.css","./formik.esm-DeFPguz4.js","./index-DBzl5T3q.js","./Input-Bvrqlsjh.js","./InputBase-BbcBql3L.js","./index-OzP789RO.js","./PasswordInput-CSri8v8f.js","./index-CUWmsy9t.js","./TelephoneInput-COfOWEcu.js","./AutoComplete-DAfCkQDi.js","./helper-B7MF-0G3.js","./bugs-DbHXcW6g.js","./index-BPuoX7PR.js","./use-resolve-button-type-CGEIKNbq.js","./keyboard-ea4pcW4v.js","./use-by-comparator-CZU-NL2p.js","./label-CKvBRiA1.js","./description-Bx7Nq89P.js","./lodash-CKelhqjC.js","./floating-ui.react-dom-DpUDME4m.js","./portal-DJ8oPe_c.js","./focus-management-Ddlno2iB.js","./transition-BSBR0-FO.js","./open-closed-D6AVR6gh.js","./active-element-history-VI-XlWim.js","./index-BQ1ygiz2.js","./index-BBBKT4Si.js","./DatePicker-BNVNjw-X.js","./moment-C5S46NFB.js","./index-8Qua6u_L.js","./Switch-BAZRUGUw.js","./index-D2FPBd_Q.js","./CheckboxBase-Cdt_LvxH.js","./Checkbox-BxICyU7Y.js"])))=>i.map(i=>d[i]);
import{h as D}from"./moment-C5S46NFB.js";import{_ as l}from"./preload-helper-C1FmrZbK.js";import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{R as n,r as w}from"./iframe-gIK4bdEr.js";import{R as k}from"./RadioGroup-z-uHNzMj.js";import{S as z}from"./Selectbox-D7xaimcH.js";import{A as B}from"./AutoComplete-DAfCkQDi.js";import"./bundle-mjs-3VKOpVsw.js";import"./helper-B7MF-0G3.js";import"./iconBase-zb0yOOdI.js";import"./bugs-DbHXcW6g.js";import"./use-by-comparator-CZU-NL2p.js";import"./label-CKvBRiA1.js";import"./keyboard-ea4pcW4v.js";import"./index-BPuoX7PR.js";import"./description-Bx7Nq89P.js";import"./focus-management-Ddlno2iB.js";import"./index-C66RjoFl.js";import"./lodash-CKelhqjC.js";import"./floating-ui.react-dom-DpUDME4m.js";import"./listbox-czf6WRC6.js";import"./use-resolve-button-type-CGEIKNbq.js";import"./portal-DJ8oPe_c.js";import"./transition-BSBR0-FO.js";import"./open-closed-D6AVR6gh.js";import"./active-element-history-VI-XlWim.js";import"./Label-Dm8sPyOg.js";import"./index-BQ1ygiz2.js";const F=n.lazy(()=>l(()=>import("./index-DtLtBE-e.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),N=n.lazy(()=>l(()=>import("./index-DBzl5T3q.js"),__vite__mapDeps([10,11,2,6,7,8,12,3,1,4,5,9]),import.meta.url)),X=n.lazy(()=>l(()=>import("./index-OzP789RO.js"),__vite__mapDeps([13,14,2,6,7,8,3,4,5,9]),import.meta.url)),C=n.lazy(()=>l(()=>import("./index-CUWmsy9t.js"),__vite__mapDeps([15,16,2,6,7,8,12,3,1,4,5,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]),import.meta.url)),M=n.lazy(()=>l(()=>import("./index-BBBKT4Si.js"),__vite__mapDeps([34,35,2,36,3,33,5,6,7,8,27,20,1,4]),import.meta.url)),H=n.lazy(()=>l(()=>import("./index-8Qua6u_L.js"),__vite__mapDeps([37,38,2,3,19,6,7,8,21,22,24,20,25]),import.meta.url)),G=n.lazy(()=>l(()=>import("./index-D2FPBd_Q.js"),__vite__mapDeps([39,40,2,6,7,8,33,5,3,41,9]),import.meta.url)),b=({type:e,onChange:a,variant:f="md",labelProps:c,...o})=>r.jsx(w.Suspense,{fallback:null,children:e!=="confirm"?r.jsx(F,{variant:f,type:e==="radio"?"normal":e==="switch"?"horizontal":void 0,...c||{label:""},children:e==="password"?r.jsx(X,{...o,onChange:t=>a&&a(t.target.value)}):e==="date"||e==="datetime"?r.jsx(M,{...o,onChange:t=>a&&a(t+""),showTime:e==="datetime"}):e==="radio"?r.jsx(k,{...o,variant:f,onChange:a}):e==="switch"?r.jsx(H,{...o,onChange:a,checked:!!o.value}):e==="tel"?r.jsx(C,{...o,onChange:a}):e==="select"?r.jsx(z,{...o,onChange:t=>a&&a(t)}):e==="autocomplete"?r.jsx(B,{...o,onChange:a}):r.jsx(N,{type:e,onChange:t=>a&&a(typeof t=="string"?t:t.target.value),...o})}):r.jsx(G,{...o,onChange:t=>a&&a(String(t.target.checked)),label:c.label})});try{b.displayName="FormControl",b.__docgenInfo={description:"",displayName:"FormControl",props:{inputBefore:{defaultValue:null,description:"",name:"inputBefore",required:!1,type:{name:"ReactNode"}},inputAfter:{defaultValue:null,description:"",name:"inputAfter",required:!1,type:{name:"ReactNode"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelBaseProps"}},variant:{defaultValue:{value:"md"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},showTime:{defaultValue:null,description:"",name:"showTime",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},phonePrefixOptions:{defaultValue:null,description:"",name:"phonePrefixOptions",required:!0,type:{name:"SelectOption[]"}},phonePrefix:{defaultValue:null,description:"",name:"phonePrefix",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ListOption[]"}},valueField:{defaultValue:null,description:"",name:"valueField",required:!1,type:{name:"ValueField<ListOption>"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((query: string) => void) | ((query: string) => void)"}}}}}catch{}const Pe={title:"Components/FormControl",component:b,tags:["autodocs"],argTypes:{type:{control:{type:"radio"},options:["text","email","number","password","tel","date","select","autocomplete","radio","checkbox","switch","confirm"],description:"控制表單元件類型",table:{defaultValue:{summary:"text"}}},labelProps:{control:{type:"object"},description:"傳遞給外層 LabelBase 的 props，包含 label、isError、errorMessage、type、variant 等。若設定，會自動包裹 FormControl。",table:{type:{summary:"LabelBaseProps"}}},value:{control:{type:"text"},description:"元件的值（根據 type 變化）"},options:{control:{type:"object"},description:"選項資料（select、radio、autocomplete 等適用）"},placeholder:{control:{type:"text"},description:"placeholder 文字（部分元件適用）"},onChange:{action:"changed",description:"值變更時的 callback",table:{category:"Events"}},phonePrefixOptions:[{id:"1",value:"+86",label:"+86",enable:!0},{id:"2",value:"+886",label:"+886",enable:!0}],phonePrefix:{control:{type:"text"},description:"電話前綴（tel 総機號碼輸入適用）"}}},i={args:{type:"text",value:"測試文字",labelProps:{label:"文字輸入"},placeholder:"請輸入內容..."}},s={args:{type:"select",value:"2",labelProps:{label:"下拉選單"},options:[{id:"1",value:"1",label:"選項一"},{id:"2",value:"2",label:"選項二"},{id:"3",value:"3",label:"選項三"}]}},p={args:{type:"radio",value:"2",labelProps:{label:"單選選單"},options:[{id:"1",value:"1",label:"選項一"},{id:"2",value:"2",label:"選項二"},{id:"3",value:"3",label:"選項三"}]}},u={args:{type:"confirm",value:"1",labelProps:{label:"我同意條款"}}},m={args:{type:"date",value:D().format("X"),labelProps:{label:"日期"}}},d={args:{type:"datetime",value:D().format("X"),labelProps:{label:"日期時間"}}};var v,_,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: "text",
    value: "測試文字",
    labelProps: {
      label: "文字輸入"
    },
    placeholder: "請輸入內容..."
  }
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var x,P,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: "select",
    value: "2",
    labelProps: {
      label: "下拉選單"
    },
    options: [{
      id: "1",
      value: "1",
      label: "選項一"
    }, {
      id: "2",
      value: "2",
      label: "選項二"
    }, {
      id: "3",
      value: "3",
      label: "選項三"
    }] as SelectOption[]
  }
}`,...(g=(P=s.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};var h,V,E;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "radio",
    value: "2",
    labelProps: {
      label: "單選選單"
    },
    options: [{
      id: "1",
      value: "1",
      label: "選項一"
    }, {
      id: "2",
      value: "2",
      label: "選項二"
    }, {
      id: "3",
      value: "3",
      label: "選項三"
    }] as SelectOption[]
  }
}`,...(E=(V=p.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var S,T,q;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "confirm",
    value: "1",
    labelProps: {
      label: "我同意條款"
    }
  }
}`,...(q=(T=u.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var R,O,j;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "date",
    value: moment().format("X"),
    labelProps: {
      label: "日期"
    }
  }
}`,...(j=(O=m.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var L,I,A;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: "datetime",
    value: moment().format("X"),
    labelProps: {
      label: "日期時間"
    }
  }
}`,...(A=(I=d.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const ge=["Text","Select","Radio","Confirm","Date","DateTime"];export{u as Confirm,m as Date,d as DateTime,p as Radio,s as Select,i as Text,ge as __namedExportsOrder,Pe as default};
