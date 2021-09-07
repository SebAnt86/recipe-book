(this["webpackJsonprecipe-book"]=this["webpackJsonprecipe-book"]||[]).push([[0],{35:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(12),n=a.n(c),i=a(19),r=a(3),l=a(8),j=(a(34),a(35),a(1));var d=function(){return Object(j.jsxs)("header",{className:"p-3 mb-5",children:[Object(j.jsx)("h1",{children:"My Recipe Book"}),Object(j.jsx)("blockquote",{children:"Store all your recipes in a web page"})]})},b=a(7),m=a(14),x=a(13),O=a(9),o=a(24);var h=function(e){var t=e.deleteIngredient,a=e.addIngredient,c=e.ingrList,n=e.clearIgredients,i=e.setClearIngredients,r=e.servingPpl,d=Object(s.useState)(""),h=Object(l.a)(d,2),u=h[0],p=h[1],g=Object(s.useState)(""),N=Object(l.a)(g,2),v=N[0],f=N[1],y=Object(s.useState)(""),C=Object(l.a)(y,2),S=C[0],I=C[1],k=Object(s.useState)(!1),F=Object(l.a)(k,2),R=F[0],P=F[1],q=Object(s.useState)(!1),L=Object(l.a)(q,2),T=L[0],w=L[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(x.a,{className:"g-3 mb-1",children:[Object(j.jsx)(b.a.Label,{className:"mb-0",children:"Ingredients:"}),Object(j.jsxs)(O.a,{sm:!0,className:"mt-1 mb-3",children:[Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"ing-name",type:"text",className:"pb-1",value:S,onChange:function(e){return I(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"ing-name",className:"pt-2",children:"Ing. Name *"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(b.a.Label,{className:"m-0 text-secondary validation-text ps-2",children:"Required*"})}),T&&Object(j.jsx)(b.a.Label,{className:"m-0 text-danger validation-text ps-2",children:"Please add the ingredient name."})]}),Object(j.jsxs)(O.a,{sm:!0,className:"mt-1 mb-3",children:[Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"qty",type:"number",className:"pb-1",value:u,onChange:function(e){return p(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"qty",className:"pt-2",children:"Ing. Quantity *"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(b.a.Label,{className:"m-0 text-secondary validation-text ps-2",children:"Required*"})}),R&&Object(j.jsx)(b.a.Label,{className:"m-0 text-danger validation-text ps-2",children:"Please add the ingredient quantity."})]}),Object(j.jsx)(O.a,{sm:!0,className:"mt-1 mb-3",children:Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"unit",type:"text",className:"pb-1",value:v,onChange:function(e){return f(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"ing-name",className:"pt-2",children:"Ing. Unit"})]})})]}),Object(j.jsx)(m.a,{variant:"primary",size:"sm",className:"mb-3",onClick:function(e){(e.preventDefault(),u&&S)?(a(u,v,S,u/r),i(!0),p(""),f(""),I(""),P(!1),w(!1)):(P(!0),w(!0))},children:"Add Ingredient"}),n?Object(j.jsx)("ul",{className:"d-flex  flex-wrap ps-0",children:c.map((function(e){return Object(j.jsxs)("li",{className:"ing-item mb-3 d-flex justify-content-between align-items-center px-2 me-2",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:e.qty})," ",Object(j.jsx)("span",{children:e.unit})," ",Object(j.jsx)("span",{children:e.ingName})]}),Object(j.jsx)(o.a,{className:"btn-close ms-2 align-self-start align-self-md-center mt-1",onClick:function(){return t(e.ingId)}})]})}))}):Object(j.jsx)("p",{className:"mb-5",children:"No ingredients added."})]})},u=a(18),p=a(25),g=a(26);var N=function(e){var t=e.addRecipe,a=Object(s.useState)(!1),c=Object(l.a)(a,2),n=c[0],r=c[1],d=Object(s.useState)(!1),o=Object(l.a)(d,2),N=o[0],v=o[1],f=Object(s.useState)(!1),y=Object(l.a)(f,2),C=y[0],S=y[1],I=Object(s.useState)(!1),k=Object(l.a)(I,2),F=k[0],R=k[1],P=Object(s.useState)(""),q=Object(l.a)(P,2),L=q[0],T=q[1],w=Object(s.useState)(""),M=Object(l.a)(w,2),A=M[0],B=M[1],D=Object(s.useState)(""),z=Object(l.a)(D,2),J=z[0],U=z[1],E=Object(s.useState)(""),H=Object(l.a)(E,2),K=H[0],Q=H[1],V=Object(s.useState)(""),G=Object(l.a)(V,2),W=G[0],X=G[1],Y=Object(s.useState)(""),Z=Object(l.a)(Y,2),$=Z[0],_=Z[1],ee=Object(s.useState)([]),te=Object(l.a)(ee,2),ae=te[0],se=te[1];return Object(j.jsxs)(b.a,{className:"mx-5 mb-5",noValidate:!0,onSubmit:function(e){e.preventDefault(),!L||!K||ae.length<=0?(v(!0),r(!0),S(!0)):(_(K),t({recipeName:L,prepTime:A,cookingTime:J,serves:K,ingredients:ae,method:W,servesOrigin:$}),T(""),B(""),U(""),Q(""),X(""),v(!1),r(!1),S(!1),R(!1))},children:[Object(j.jsxs)(x.a,{className:"g-3 mb-3",children:[Object(j.jsxs)(O.a,{xl:6,className:"mb-3",children:[Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"recipeName",type:"text",className:"pb-1",required:!0,value:L,onChange:function(e){return T(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"recipeName",className:"pt-2",children:"Recipe Name *"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(b.a.Label,{className:"m-0 text-secondary validation-text ps-2",children:"Required*"})}),n&&Object(j.jsx)(b.a.Label,{className:"m-0 text-danger validation-text ps-2",children:"Please add a recipe name."})]}),Object(j.jsx)(O.a,{md:!0,className:"mb-3",children:Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"prepTime",type:"text",className:"pb-1",value:A,onChange:function(e){return B(e.target.value)}}),Object(j.jsxs)("label",{htmlFor:"prepTime",className:"pt-2",children:[Object(j.jsx)(u.b,{className:"pe-1 pb-1"}),"Preparation Time"]})]})}),Object(j.jsx)(O.a,{md:!0,className:"mb-3",children:Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"cookingTime",type:"text",className:"pb-1",value:J,onChange:function(e){return U(e.target.value)}}),Object(j.jsxs)("label",{htmlFor:"cookingTime",className:"pt-2",children:[Object(j.jsx)(u.a,{className:"pe-1 pb-1"}),"Cooking Time"]})]})}),Object(j.jsxs)(O.a,{md:!0,className:"mb-3",children:[Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"servingPpl",type:"number",className:"pb-1",required:!0,value:K,onChange:function(e){return Q(e.target.value)}}),Object(j.jsxs)("label",{htmlFor:"servingPpl",className:"pt-2",children:[Object(j.jsx)(p.a,{className:"pe-1 pb-1"}),"Serves *"]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(b.a.Label,{className:"m-0 text-secondary validation-text ps-2",children:"Required*"})}),N&&Object(j.jsx)(b.a.Label,{className:"m-0 text-danger validation-text ps-2",children:"Please add the serving number."})]})]}),C&&Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)(b.a.Label,{className:"m-0 text-danger",children:"Please add a ingredients."})}),Object(j.jsx)(h,{deleteIngredient:function(e){se(ae.filter((function(t){return t.ingId!==e})))},addIngredient:function(e,t,a,s){var c={ingId:Math.floor(1e3*Math.random())+1,qty:e,unit:t,ingName:a,ingPerServe:s};se([].concat(Object(i.a)(ae),[c]))},ingrList:ae,clearIgredients:F,setClearIngredients:R,servingPpl:K},ae.ingId),Object(j.jsx)(x.a,{className:"g-3 mb-3",children:Object(j.jsx)(O.a,{children:Object(j.jsxs)(b.a.Floating,{className:"mb-3",children:[Object(j.jsx)(b.a.Control,{id:"method",as:"textarea",className:"pb-1 textarea",value:W,onChange:function(e){return X(e.target.value)}}),Object(j.jsxs)("label",{htmlFor:"method",className:"pt-2",children:[Object(j.jsx)(g.a,{className:"pe-1 pb-1"}),"Method"]})]})})}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)(m.a,{variant:"primary",type:"submit",size:"lg",children:"Save Recipe"})})]})};var v=function(e){var t=e.onAdd;return Object(j.jsx)("div",{className:"d-flex justify-content-center mb-5",children:Object(j.jsx)(m.a,{onClick:t,children:"Add Recipe"})})},f=a(16),y=a(20),C=a(29),S=a(28),I=a(27);var k=function(e){var t=e.recipes,a=e.setRecipes,s=e.deleteRecipe;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(y.a,{className:"mb-3",children:t.map((function(e){return Object(j.jsx)(f.a,{className:"mx-1 mb-5",children:Object(j.jsxs)(f.a.Item,{eventKey:e.id,children:[Object(j.jsx)(f.a.Header,{children:e.recipeName.toUpperCase()}),Object(j.jsxs)(f.a.Body,{children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between mb-3 ",children:[Object(j.jsxs)(O.a,{className:"text-center",children:[Object(j.jsx)(O.a,{children:"Prep"}),Object(j.jsx)(O.a,{children:e.prepTime})]}),Object(j.jsxs)(O.a,{className:"text-center",children:[Object(j.jsx)(O.a,{children:"Cooking"}),Object(j.jsx)(O.a,{children:e.cookingTime})]}),Object(j.jsxs)(O.a,{className:"text-center",children:[Object(j.jsx)(O.a,{children:"Serves"}),Object(j.jsx)(O.a,{children:e.servesOrigin})]})]}),Object(j.jsxs)(x.a,{className:"mt-4 g-3",children:[Object(j.jsxs)(O.a,{md:6,className:"px-4 mb-3",children:[Object(j.jsx)("h4",{children:"Ingredients"}),Object(j.jsxs)(y.a,{className:"ps-0 mt-4 d-flex justify-content-between",children:[Object(j.jsx)("h6",{children:"Number of servings"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(I.a,{className:"btn-operators",onClick:function(){return function(e){var s=t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{serves:parseInt(t.serves)>1?parseInt(t.serves)-1:1}):t}));a(s)}(e.id)}}),Object(j.jsx)("span",{className:"mx-1",children:e.serves}),Object(j.jsx)(S.a,{className:"btn-operators",onClick:function(){return function(e){var s=t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{serves:parseInt(t.serves)+1}):t}));a(s)}(e.id)}})]})]}),e.ingredients.length>0?e.ingredients.map((function(t){return Object(j.jsx)(x.a,{children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)("span",{children:t.ingPerServe*e.serves}),Object(j.jsx)("span",{className:"me-2",children:t.unit}),Object(j.jsx)("span",{className:"mx-2",children:t.ingName})]})})})):Object(j.jsx)("p",{className:"mb-5 disabled",children:"No ingredients added."})]}),Object(j.jsxs)(O.a,{md:6,className:"px-4 mb-3",children:[Object(j.jsx)("h4",{children:"Method"}),Object(j.jsx)(y.a,{className:"ps-0 mt-4",children:e.method})]})]}),Object(j.jsx)("div",{className:"text-end mt-3",children:Object(j.jsx)(C.a,{className:"btn-delete px-2 py-1",title:"Delete recipe",onClick:function(){return s(e.id)}})})]})]})})}))})})};var F=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)([]),b=Object(l.a)(n,2),m=b[0],x=b[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)(v,{onAdd:function(){return c(!a)}}),a&&Object(j.jsx)(N,{addRecipe:function(e){var t=Math.floor(1e3*Math.random())+1,a=Object(r.a)({id:t},e);x([].concat(Object(i.a)(m),[a]))}},m.id),Object(j.jsx)(k,{recipes:m,setRecipes:x,deleteRecipe:function(e){x(m.filter((function(t){return t.id!==e})))}},m.id)]})};n.a.render(Object(j.jsx)(F,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.122c7d64.chunk.js.map