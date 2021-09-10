(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),l=a(15),s=a.n(l),r=(a(22),a(4)),i=(a(23),a(0));var o=function(e){var t=e.onChange,a=e.onKeyPress,c=e.name,n=e.id,l=e.type,s=e.style,r=e.placeholder,o=e.value,b=e.disabled;return Object(i.jsx)("input",{onChange:t,onKeyPress:a,name:c,id:n,type:l,style:s,placeholder:r,value:o,disabled:b})};var b=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),s=Object(r.a)(l,2),b=s[0],j=s[1],d=Object(c.useState)(!1),m=Object(r.a)(d,2),h=m[0],x=m[1],u=Object(c.useState)(""),O=Object(r.a)(u,2),p=O[0],f=O[1],v=Object(c.useState)(!1),N=Object(r.a)(v,2),k=N[0],g=N[1],y=Object(c.useState)(""),C=Object(r.a)(y,2),w=C[0],S=C[1],D=Object(c.useState)(!1),T=Object(r.a)(D,2),E=T[0],L=T[1],R=Object(c.useState)(""),P=Object(r.a)(R,2),J=P[0],A=P[1],I=Object(c.useState)(!1),U=Object(r.a)(I,2),F=U[0],H=U[1],K=Object(c.useState)(""),B=Object(r.a)(K,2),X=B[0],Y=B[1],G=Object(c.useState)(""),M=Object(r.a)(G,2),W=M[0],q=M[1],z=Object(c.useState)(!1),Q=Object(r.a)(z,2),V=Q[0],Z=Q[1];function $(e){var t=e.target,a=t.value;switch(t.name){case"companyName":n(a);break;case"jobURL":j(a);break;case"new":h?(x(!1),Z(!1)):(x(!0),q(a),Z(!0));break;case"applied":k?(g(!1),Z(!1)):(g(!0),q(a),Z(!0));break;case"phoneCalled":E?(L(!1),Z(!1)):(L(!0),q(a),Z(!0));break;case"interviewed":F?(H(!1),Z(!1)):(H(!0),q(a),Z(!0));break;case"applyDate":f(a);break;case"appliedDate":S(a);break;case"phoneCallDate":A(a);break;case"interviewDate":Y(a);break;default:console.log("Unidentified input field found in the insertPage form")}}return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(e){return console.log(e.message)}))},children:[Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsx)("label",{className:"col-sm-2 col-form-label",children:"Company Name"}),Object(i.jsx)("div",{className:"col-sm-2",children:Object(i.jsx)(o,{name:"companyName",type:"text",onChange:$,placeholder:"Enter Company Name",value:a})})]}),Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsx)("label",{className:"col-sm-2 col-form-label",children:"Job Post URL"}),Object(i.jsx)("div",{className:"col-sm-2",children:Object(i.jsx)(o,{name:"jobURL",type:"url",onChange:$,placeholder:"Enter URL",value:b})})]}),Object(i.jsxs)("div",{className:"column mt-4 mb-4 d-flex justify-content-center",children:[Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)(o,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",name:"new",value:"new",onChange:$,disabled:"new"===W?null:V}),Object(i.jsx)("label",{className:"form-check-label",for:"inlineCheckbox1",children:"New"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)(o,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",name:"applied",value:"applied",onChange:$,disabled:"applied"===W?null:V}),Object(i.jsx)("label",{className:"form-check-label",for:"inlineCheckbox2",children:"Applied"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)(o,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",name:"phoneCalled",value:"phoneCalled",onChange:$,disabled:"phoneCalled"===W?null:V}),Object(i.jsx)("label",{className:"form-check-label",for:"inlineCheckbox3",children:"Phone-Called"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)(o,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox4",name:"interviewed",value:"interviewed",onChange:$,disabled:"interviewed"===W?null:V}),Object(i.jsx)("label",{className:"form-check-label",for:"inlineCheckbox4",children:"Interviewed"})]})]}),Object(i.jsxs)("div",{className:"d-flex justify-content-center mt-3 mb-5",children:[h?Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsx)("label",{className:"col-sm-5 col-form-label",children:"Date to Apply:"}),Object(i.jsx)("div",{className:"col-sm-5",children:Object(i.jsx)(o,{name:"applyDate",type:"date",onChange:$,placeholder:"Enter Date",value:p})})]}):null,k?Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsx)("label",{className:"col-sm-5 col-form-label",children:"Applied Date:"}),Object(i.jsx)("div",{className:"col-sm-5",children:Object(i.jsx)(o,{name:"appliedDate",type:"date",onChange:$,placeholder:"Enter Date",value:w})})]}):null,E?Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsx)("label",{className:"col-sm-6 col-form-label",children:"Phone Call(ed) Date:"}),Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsx)(o,{name:"phoneCallDate",type:"date",onChange:$,placeholder:"Enter Date",value:J})})]}):null,F?Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsx)("label",{className:"col-sm-6 col-form-label",children:"Interview(ed) Date:"}),Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsx)(o,{name:"interviewDate",type:"date",onChange:$,placeholder:"Enter Date",value:X})})]}):null]}),Object(i.jsx)("div",{className:"d-flex justify-content-center mt-3 mb-5",children:Object(i.jsx)(o,{type:"submit",value:"Add Job"})})]})})};var j=function(){return Object(i.jsx)("div",{className:"text-center",children:"YAY! THIS IS THE TRACK PAGE!!!"})};var d=function(e){var t=e.RouterLinkHome,a=e.RouterLinkEnter,c=e.RouterLinkTrack;return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",children:Object(i.jsxs)("div",{className:"container-fluid p-0",children:[Object(i.jsx)("span",{className:"navbar-brand p-2 mx-2",children:t}),Object(i.jsx)("button",{className:"navbar-toggler mx-5",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse mx-4 text-light",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("span",{className:"nav-link active text-light mx-2","aria-current":"page",name:"enter-jobs",id:"enter-jobs",children:a})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("span",{className:"nav-link text-light mx-2",name:"enter-jobs",id:"enter-jobs",children:c})})]}),Object(i.jsx)("form",{className:"d-flex",children:Object(i.jsx)("button",{className:"btn btn-outline-success mx-4",type:"submit",children:"Sign On"})})]})]})})},m=a(10),h=a(2);var x=function(){var e=n.a.useState(null),t=Object(r.a)(e,2),a=t[0],c=t[1];n.a.useEffect((function(){fetch("/api").then((function(e){return e.json()})).then((function(e){return c(e.message)}))}));var l={margin:"0rem",textDecoration:"none",color:"white"};return Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("header",{className:"row m-5",children:Object(i.jsx)(m.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{RouterLinkHome:Object(i.jsx)(m.b,{to:"/",style:l,children:"JXT Job Tracker"}),RouterLinkEnter:Object(i.jsx)(m.b,{to:"/enter-page",style:l,children:"Enter"}),RouterLinkTrack:Object(i.jsx)(m.b,{to:"/track-page",style:l,children:"Track"})}),Object(i.jsx)(h.c,{children:Object(i.jsxs)("body",{className:"row d-flex justify-content-center align-items-center mt-5",children:[Object(i.jsx)(h.a,{exact:!0,path:"/",children:Object(i.jsx)("h1",{className:"text-center",children:"Welcome to JXT Job Track App!"})}),Object(i.jsx)(h.a,{path:"/enter-page",children:Object(i.jsx)(b,{})}),Object(i.jsx)(h.a,{path:"/track-page",children:Object(i.jsx)(j,{})})]})})]})})}),Object(i.jsx)("footer",{className:"fixed-bottom",children:Object(i.jsx)("p",{className:"cpText text-center mt-5",children:a||"Loading..."})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),l(e),s(e)}))};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),u()}},[[30,1,2]]]);
//# sourceMappingURL=main.c6c31edb.chunk.js.map