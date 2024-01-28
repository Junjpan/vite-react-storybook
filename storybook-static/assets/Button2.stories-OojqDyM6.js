import{j as m}from"./jsx-runtime-AgcCsxC8.js";import{P as o}from"./index-hnMjDxAq.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";function t({label:n,backgroundColor:f="red",size:a="md",handleClick:g}){let r=1;a==="sm"&&(r=.75),a==="lg"&&(r=1.5);const b={backgroundColor:f,padding:`${r*.5}rem ${r*1}rem`,border:"none"};return m.jsx("button",{onClick:g,style:b,children:n})}t.propTypes={label:o.string,backgroundColor:o.string,size:o.oneOf(["sm","md","lg"]),handleClick:o.func};t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:'"red"',computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1},label:{description:"",type:{name:"string"},required:!1},handleClick:{description:"",type:{name:"func"},required:!1}}};const _={title:"Components/Button",component:t,argTypes:{size:{control:"select"},handleClick:{action:"click on button"}}},s={args:{label:"press me",backgroundColor:"red",size:"sm"}},e=({...n})=>m.jsx(t,{...n});e.args={label:"about me",backgroundColor:"yellow",size:"lg"};e.__docgenInfo={description:"",methods:[],displayName:"Blue"};var l,d,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "press me",
    backgroundColor: "red",
    size: "sm"
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,i,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`({
  ...props
}) => {
  return <Button {...props} />;
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const h=["Red","Blue"];export{e as Blue,s as Red,h as __namedExportsOrder,_ as default};
