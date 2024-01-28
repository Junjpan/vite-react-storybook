import{j as s}from"./jsx-runtime-AgcCsxC8.js";import{P as r}from"./index-hnMjDxAq.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";function i({children:n,spacing:a=2,direction:t="row",wrap:o=!1}){const c={display:"flex",gap:`${a*.25}rem`,flexWrap:o?"wrap":"nowrap",flexDirection:t};return s.jsx("div",{style:c,children:n})}i.propTypes={children:r.arrayOf(r.element),spacing:r.number,wrap:r.bool,direction:r.oneOf(["row","column"])};i.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{spacing:{defaultValue:{value:"2",computed:!1},description:"",type:{name:"number"},required:!1},direction:{defaultValue:{value:'"row"',computed:!1},description:"",type:{name:"enum",value:[{value:'"row"',computed:!1},{value:'"column"',computed:!1}]},required:!1},wrap:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"arrayOf",value:{name:"element"}},required:!1}}};const g={title:"Components/Stack",component:"Stack",argTypes:{direction:{control:"select",options:["row","column"]},numberOfChildren:{type:"number",defaultValue:4}}},e=({numberOfChildren:n,...a})=>s.jsx(i,{...a,children:[...Array(n).keys()].map((t,o)=>s.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"red",display:"flex",justifyContent:"center",alignContent:"center"},children:t+1},o))});e.args={spacing:2,wrap:!1,direction:"row",numberOfChildren:10};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
  numberOfChildren,
  ...args
}) => <Stack {...args}>\r
    {[...Array(numberOfChildren).keys()].map((n, i) => {
    return <div key={i} style={{
      width: "50px",
      height: "50px",
      backgroundColor: "red",
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    }}>\r
          {n + 1}\r
        </div>;
  })}\r
  </Stack>`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const h=["Playground"];export{e as Playground,h as __namedExportsOrder,g as default};
