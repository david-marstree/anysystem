import{j as C}from"./jsx-runtime-BjG_zV1W.js";import{R as l}from"./iframe-gIK4bdEr.js";import{t as y}from"./bundle-mjs-3VKOpVsw.js";import"./preload-helper-C1FmrZbK.js";const f=(e,r)=>{if(!e&&!r)return"";e||(e={sm:l.Children.count(r),md:l.Children.count(r),lg:l.Children.count(r)});const s=[];switch(e==null?void 0:e.sm){case 1:s.push("sm:grid-cols-1");break;case 2:s.push("sm:grid-cols-2");break;case 3:s.push("sm:grid-cols-3");break;case 4:s.push("sm:grid-cols-4");break;case 5:s.push("sm:grid-cols-5");break;case 6:s.push("sm:grid-cols-6");break;case 7:s.push("sm:grid-cols-7");break;case 8:s.push("sm:grid-cols-8");break;case 9:s.push("sm:grid-cols-9");break;case 10:s.push("sm:grid-cols-10");break;case 11:s.push("sm:grid-cols-11");break;case 12:s.push("sm:grid-cols-12");break}switch(e==null?void 0:e.md){case 1:s.push("md:grid-cols-1");break;case 2:s.push("md:grid-cols-2");break;case 3:s.push("md:grid-cols-3");break;case 4:s.push("md:grid-cols-4");break;case 5:s.push("md:grid-cols-5");break;case 6:s.push("md:grid-cols-6");break;case 7:s.push("md:grid-cols-7");break;case 8:s.push("md:grid-cols-8");break;case 9:s.push("md:grid-cols-9");break;case 10:s.push("md:grid-cols-10");break;case 11:s.push("md:grid-cols-11");break;case 12:s.push("md:grid-cols-12");break}switch(e==null?void 0:e.lg){case 1:s.push("lg:grid-cols-1");break;case 2:s.push("lg:grid-cols-2");break;case 3:s.push("lg:grid-cols-3");break;case 4:s.push("lg:grid-cols-4");break;case 5:s.push("lg:grid-cols-5");break;case 6:s.push("lg:grid-cols-6");break;case 7:s.push("lg:grid-cols-7");break;case 8:s.push("lg:grid-cols-8");break;case 9:s.push("lg:grid-cols-9");break;case 10:s.push("lg:grid-cols-10");break;case 11:s.push("lg:grid-cols-11");break;case 12:s.push("lg:grid-cols-12");break}return s.join(" ")},d=({column:e,className:r,children:s})=>{const k=f(e,s);return C.jsx("div",{className:y("my-row grid md:gap-2",k,r),children:s})};try{d.displayName="Row",d.__docgenInfo={description:"",displayName:"Row",props:{column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:"ResponsiveColumn"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const x={title:"Components/Layout/Row",component:d,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{column:{control:{type:"object"},description:"響應式列數設定 { sm?, md?, lg? }",table:{type:{summary:"ResponsiveColumn"}}},className:{control:{type:"text"},description:"自定義 CSS 類名"},children:{control:{type:"text"},description:"行內容（通常包含 Column 組件）"}}},a={args:{column:{sm:1,md:2,lg:2},children:"兩列布局（在小螢幕上為一列）"}},c={args:{column:{sm:1,md:2,lg:3},children:"三列布局（小螢幕一列，中螢幕兩列，大螢幕三列）"}},o={args:{column:{sm:2,md:3,lg:4},children:"四列布局"}};var m,n,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    column: {
      sm: 1,
      md: 2,
      lg: 2
    },
    children: "兩列布局（在小螢幕上為一列）"
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,t,g;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    column: {
      sm: 1,
      md: 2,
      lg: 3
    },
    children: "三列布局（小螢幕一列，中螢幕兩列，大螢幕三列）"
  }
}`,...(g=(t=c.parameters)==null?void 0:t.docs)==null?void 0:g.source}}};var u,h,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    column: {
      sm: 2,
      md: 3,
      lg: 4
    },
    children: "四列布局"
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const j=["TwoColumns","ThreeColumns","FourColumns"];export{o as FourColumns,c as ThreeColumns,a as TwoColumns,j as __namedExportsOrder,x as default};
