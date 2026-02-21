import{j as x}from"./jsx-runtime-BjG_zV1W.js";import{t as N}from"./bundle-mjs-3VKOpVsw.js";const S=a=>{if(!a)return"";const s=[];switch(a.sm){case 1:s.push("sm:col-span-1");break;case 2:s.push("sm:col-span-2");break;case 3:s.push("sm:col-span-3");break;case 4:s.push("sm:col-span-4");break;case 5:s.push("sm:col-span-5");break;case 6:s.push("sm:col-span-6");break;case 7:s.push("sm:col-span-7");break;case 8:s.push("sm:col-span-8");break;case 9:s.push("sm:col-span-9");break;case 10:s.push("sm:col-span-10");break;case 11:s.push("sm:col-span-11");break;case 12:s.push("sm:col-span-12");break}switch(a.md){case 1:s.push("md:col-span-1");break;case 2:s.push("md:col-span-2");break;case 3:s.push("md:col-span-3");break;case 4:s.push("md:col-span-4");break;case 5:s.push("md:col-span-5");break;case 6:s.push("md:col-span-6");break;case 7:s.push("md:col-span-7");break;case 8:s.push("md:col-span-8");break;case 9:s.push("md:col-span-9");break;case 10:s.push("md:col-span-10");break;case 11:s.push("md:col-span-11");break;case 12:s.push("md:col-span-12");break}switch(a.lg){case 1:s.push("lg:col-span-1");break;case 2:s.push("lg:col-span-2");break;case 3:s.push("lg:col-span-3");break;case 4:s.push("lg:col-span-4");break;case 5:s.push("lg:col-span-5");break;case 6:s.push("lg:col-span-6");break;case 7:s.push("lg:col-span-7");break;case 8:s.push("lg:col-span-8");break;case 9:s.push("lg:col-span-9");break;case 10:s.push("lg:col-span-10");break;case 11:s.push("lg:col-span-11");break;case 12:s.push("lg:col-span-12");break}return s.join(" ")},p=({id:a,span:s={sm:1,md:1},className:C,children:_,...f})=>{const W=S(s);return x.jsx("div",{className:N("my-col",W,C),id:a,...f,children:_})};try{p.displayName="Column",p.__docgenInfo={description:"",displayName:"Column",props:{span:{defaultValue:{value:"{ sm: 1, md: 1 }"},description:"",name:"span",required:!1,type:{name:"ResponsiveColumn"}}}}}catch{}const w={title:"Components/Layout/Column",component:p,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{span:{control:{type:"object"},description:"響應式欄位寬度 { sm?, md?, lg? }，基於 12 欄格系統",table:{type:{summary:"ResponsiveColumn"}}},className:{control:{type:"text"},description:"自定義 CSS 類名"},children:{control:{type:"text"},description:"列內容"}}},e={args:{span:{sm:12,md:12,lg:12},children:"全寬列（12/12）"}},r={args:{span:{sm:12,md:6,lg:6},children:"半寬列（6/12）- 在小螢幕上為全寬"}},c={args:{span:{sm:12,md:4,lg:4},children:"三分之一寬列（4/12）"}},n={args:{span:{sm:12,md:6,lg:3},children:"四分之一寬列（3/12）"}};var o,l,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    span: {
      sm: 12,
      md: 12,
      lg: 12
    },
    children: "全寬列（12/12）"
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var t,d,u;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    span: {
      sm: 12,
      md: 6,
      lg: 6
    },
    children: "半寬列（6/12）- 在小螢幕上為全寬"
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,i,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    span: {
      sm: 12,
      md: 4,
      lg: 4
    },
    children: "三分之一寬列（4/12）"
  }
}`,...(g=(i=c.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var b,k,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    span: {
      sm: 12,
      md: 6,
      lg: 3
    },
    children: "四分之一寬列（3/12）"
  }
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const R=["FullWidth","HalfWidth","ThirdWidth","QuarterWidth"];export{e as FullWidth,r as HalfWidth,n as QuarterWidth,c as ThirdWidth,R as __namedExportsOrder,w as default};
