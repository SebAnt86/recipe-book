(this["webpackJsonprecipe-book"]=this["webpackJsonprecipe-book"]||[]).push([[0],{47:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(13),n=a.n(s),i=a(28),r=a(3),l=a(7),j=(a(46),a(47),a(1));var d=function(){return Object(j.jsxs)("header",{className:"p-3 mb-5",children:[Object(j.jsx)("h1",{children:"My Recipe Book"}),Object(j.jsx)("blockquote",{children:"Store all your recipes in a web page"})]})},b=a(8),m=a(16),x=a(14),o=a(9),O=a(23);var h=function(e){var t=e.deleteIngredient,a=e.addIngredient,s=e.ingrList,n=e.servingPpl,i=Object(c.useState)(""),r=Object(l.a)(i,2),d=r[0],h=r[1],u=Object(c.useState)(""),p=Object(l.a)(u,2),g=p[0],N=p[1],v=Object(c.useState)(""),f=Object(l.a)(v,2),y=f[0],S=f[1],C=Object(c.useState)(!1),I=Object(l.a)(C,2),k=I[0],F=I[1],R=Object(c.useState)(!1),w=Object(l.a)(R,2),P=w[0],q=w[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(x.a,{className:"g-3 mb-1",children:[Object(j.jsx)(b.a.Label,{className:"mb-0",children:"Ingredients:"}),Object(j.jsxs)(o.a,{sm:!0,className:"mt-1 mb-3",children:[Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"ing-name",type:"text",className:"pb-1",value:y,onChange:function(e){return S(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"ing-name",className:"pt-2",children:"Ing. Name *"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(b.a.Label,{className:"m-0 text-secondary validation-text ps-2",children:"Required*"})}),P&&Object(j.jsx)(b.a.Label,{className:"m-0 text-danger validation-text ps-2",children:"Please add the ingredient name."})]}),Object(j.jsxs)(o.a,{sm:!0,className:"mt-1 mb-3",children:[Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"qty",type:"number",className:"pb-1",value:d,onChange:function(e){return h(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"qty",className:"pt-2",children:"Ing. Quantity *"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(b.a.Label,{className:"m-0 text-secondary validation-text ps-2",children:"Required*"})}),k&&Object(j.jsx)(b.a.Label,{className:"m-0 text-danger validation-text ps-2",children:"Please add the ingredient quantity."})]}),Object(j.jsx)(o.a,{sm:!0,className:"mt-1 mb-3",children:Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"unit",type:"text",className:"pb-1",value:g,onChange:function(e){return N(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"ing-name",className:"pt-2",children:"Ing. Unit"})]})})]}),Object(j.jsx)(m.a,{variant:"primary",size:"sm",className:"mb-3",onClick:function(e){(e.preventDefault(),d&&y)?(a(d,g,y,d/n),h(""),N(""),S(""),F(!1),q(!1)):(F(!0),q(!0))},children:"Add Ingredient"}),s.length>0?Object(j.jsx)("ul",{className:"d-flex  flex-wrap ps-0",children:s.map((function(e){return Object(j.jsxs)("li",{className:"ing-item mb-3 d-flex justify-content-between align-items-center px-2 me-2",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:e.qty})," ",Object(j.jsx)("span",{children:e.unit})," ",Object(j.jsx)("span",{children:e.ingName})]}),Object(j.jsx)(O.a,{className:"btn-close ms-2 align-self-start align-self-md-center mt-1",onClick:function(){return t(e.ingId)}})]})}))}):Object(j.jsx)("p",{className:"mb-5",children:"No Ingredients to Show."})]})},u=a(41),p=a(24),g=a(35),N=a(36);var v=function(e){var t=e.addRecipe,a=e.setShowAddRecipe,s=Object(c.useState)(!1),n=Object(l.a)(s,2),r=n[0],d=n[1],O=Object(c.useState)(!1),v=Object(l.a)(O,2),f=v[0],y=v[1],S=Object(c.useState)(!1),C=Object(l.a)(S,2),I=C[0],k=C[1],F=Object(c.useState)(""),R=Object(l.a)(F,2),w=R[0],P=R[1],q=Object(c.useState)(""),L=Object(l.a)(q,2),T=L[0],A=L[1],M=Object(c.useState)(""),B=Object(l.a)(M,2),D=B[0],z=B[1],J=Object(c.useState)(""),U=Object(l.a)(J,2),E=U[0],H=U[1],K=Object(c.useState)(""),Q=Object(l.a)(K,2),V=Q[0],G=Q[1],W=Object(c.useState)(""),X=Object(l.a)(W,2),Y=X[0],Z=X[1],$=Object(c.useState)(!1),_=Object(l.a)($,2),ee=_[0],te=_[1],ae=Object(c.useState)([]),ce=Object(l.a)(ae,2),se=ce[0],ne=ce[1];return Object(j.jsxs)(b.a,{className:"mx-5 mb-5",noValidate:!0,onSubmit:function(e){e.preventDefault(),!w||!E||se.length<=0?(y(!0),d(!0),k(!0),te(!0)):(Z(E),t({recipeName:w,prepTime:T,cookingTime:D,serves:E,ingredients:se,method:V,servesOrigin:Y}),P(""),A(""),z(""),H(""),G(""),ne([]),y(!1),d(!1),k(!1),a(!1),te(!1))},children:[Object(j.jsxs)(x.a,{className:"g-3 mb-3",children:[Object(j.jsxs)(o.a,{xl:6,className:"mb-3",children:[Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"recipeName",type:"text",className:"pb-1",required:!0,value:w,onChange:function(e){return P(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"recipeName",className:"pt-2",children:"Recipe Name *"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(b.a.Label,{className:"m-0 text-secondary validation-text ps-2",children:"Required*"})}),r&&Object(j.jsx)(b.a.Label,{className:"m-0 text-danger validation-text ps-2",children:"Please add the recipe name."})]}),Object(j.jsx)(o.a,{md:!0,className:"mb-3",children:Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"prepTime",type:"text",className:"pb-1",value:T,onChange:function(e){return A(e.target.value)}}),Object(j.jsxs)("label",{htmlFor:"prepTime",className:"pt-2",children:[Object(j.jsx)(p.b,{className:"pe-1 pb-1"}),"Preparation Time"]})]})}),Object(j.jsx)(o.a,{md:!0,className:"mb-3",children:Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"cookingTime",type:"text",className:"pb-1",value:D,onChange:function(e){return z(e.target.value)}}),Object(j.jsxs)("label",{htmlFor:"cookingTime",className:"pt-2",children:[Object(j.jsx)(p.a,{className:"pe-1 pb-1"}),"Cooking Time"]})]})}),Object(j.jsxs)(o.a,{md:!0,className:"mb-3",children:[Object(j.jsxs)(b.a.Floating,{children:[Object(j.jsx)(b.a.Control,{id:"servingPpl",type:"number",className:"pb-1",required:!0,value:E,onChange:function(e){H(e.target.value),Z(e.target.value)}}),Object(j.jsxs)("label",{htmlFor:"servingPpl",className:"pt-2",children:[Object(j.jsx)(g.a,{className:"pe-1 pb-1"}),"Serves *"]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(b.a.Label,{className:"m-0 text-secondary validation-text ps-2",children:"Required*"})}),f&&Object(j.jsx)(b.a.Label,{className:"m-0 text-danger validation-text ps-2",children:"Please add the serving number."})]})]}),I&&Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)(b.a.Label,{className:"m-0 text-danger",children:"Please add ingredients."})}),Object(j.jsx)(h,{deleteIngredient:function(e){ne(se.filter((function(t){return t.ingId!==e})))},addIngredient:function(e,t,a,c){var s={ingId:Math.floor(1e3*Math.random())+1,qty:e,unit:t,ingName:a,ingPerServe:c};ne([].concat(Object(i.a)(se),[s]))},ingrList:se,servingPpl:E},se.ingId),Object(j.jsx)(x.a,{className:"g-3 mb-3",children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(b.a.Floating,{className:"mb-3",children:[Object(j.jsx)(b.a.Control,{id:"method",as:"textarea",className:"pb-1 textarea",value:V,onChange:function(e){return G(e.target.value)}}),Object(j.jsxs)("label",{htmlFor:"method",className:"pt-2",children:[Object(j.jsx)(N.a,{className:"pe-1 pb-1"}),"Method"]})]})})}),Object(j.jsx)(u.a,{variant:"danger",show:ee,children:"Please check the required fields!"}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)(m.a,{variant:"primary",type:"submit",size:"lg",children:"Save Recipe"})})]})};var f=function(e){var t=e.onAdd,a=e.showAddRecipe;return Object(j.jsx)("div",{className:"d-flex justify-content-center mb-5",children:Object(j.jsx)(m.a,{onClick:t,variant:a?"danger":"primary",children:a?"Close Form":"Add Recipe"})})},y=a(20),S=a(31),C=a(40),I=a(39),k=a(38);var F=function(e){var t=e.recipes,a=e.setRecipes,c=e.deleteRecipe;return Object(j.jsx)(j.Fragment,{children:t.length>0?Object(j.jsx)(S.a,{className:"mb-3",children:t.map((function(e){return Object(j.jsx)(y.a,{className:"mx-1 mb-5",children:Object(j.jsxs)(y.a.Item,{eventKey:e.id,children:[Object(j.jsx)(y.a.Header,{children:e.recipeName.toUpperCase()}),Object(j.jsxs)(y.a.Body,{className:"px-3",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[Object(j.jsxs)(o.a,{className:"text-center",children:[Object(j.jsx)(o.a,{children:"Prep"}),Object(j.jsx)(o.a,{children:e.prepTime})]}),Object(j.jsxs)(o.a,{className:"text-center",children:[Object(j.jsx)(o.a,{children:"Cooking"}),Object(j.jsx)(o.a,{children:e.cookingTime})]}),Object(j.jsxs)(o.a,{className:"text-center",children:[Object(j.jsx)(o.a,{children:"Serves"}),Object(j.jsx)(o.a,{children:e.servesOrigin})]})]}),Object(j.jsxs)(x.a,{className:"mt-4 g-3",children:[Object(j.jsxs)(o.a,{md:6,className:"px-1 mb-3",children:[Object(j.jsx)("h4",{children:"Ingredients"}),Object(j.jsxs)(S.a,{className:"px-0 my-4 d-flex justify-content-between",children:[Object(j.jsx)("h6",{children:"Number of servings"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(k.a,{className:"btn-operators",onClick:function(){return function(e){var c=t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{serves:parseInt(t.serves)>1?parseInt(t.serves)-1:1}):t}));a(c)}(e.id)}}),Object(j.jsx)("span",{className:"mx-1",children:e.serves}),Object(j.jsx)(I.a,{className:"btn-operators",onClick:function(){return function(e){var c=t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{serves:parseInt(t.serves)+1}):t}));a(c)}(e.id)}})]})]}),e.ingredients.map((function(t){return Object(j.jsx)(x.a,{children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)("span",{children:t.ingPerServe*e.serves}),Object(j.jsx)("span",{className:"me-2",children:t.unit}),Object(j.jsx)("span",{className:"mx-2",children:t.ingName})]})})}))]}),Object(j.jsxs)(o.a,{md:6,className:"px-1 mb-3",children:[Object(j.jsx)("h4",{children:"Method"}),Object(j.jsx)(S.a,{className:"px-0 mt-4",children:e.method})]})]}),Object(j.jsx)("div",{className:"text-end mt-3",children:Object(j.jsx)(C.a,{className:"btn-delete px-2 py-1",title:"Delete recipe",onClick:function(){return c(e.id)}})})]})]})})}))}):Object(j.jsx)("div",{className:"text-center pt-5",children:Object(j.jsx)("p",{className:"mx-5",children:"No Recipes to Show."})})})};var R=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),b=Object(l.a)(n,2),m=b[0],x=b[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)(f,{onAdd:function(){return s(!a)},showAddRecipe:a}),a&&Object(j.jsx)(v,{addRecipe:function(e){var t=Math.floor(1e3*Math.random())+1,a=Object(r.a)({id:t},e);x([].concat(Object(i.a)(m),[a]))},setShowAddRecipe:s},m.id),Object(j.jsx)(F,{recipes:m,setRecipes:x,deleteRecipe:function(e){x(m.filter((function(t){return t.id!==e})))}},m.id)]})};n.a.render(Object(j.jsx)(R,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.b95135a9.chunk.js.map