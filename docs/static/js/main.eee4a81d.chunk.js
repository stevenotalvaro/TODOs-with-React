(this["webpackJsonppractice-todos-react"]=this["webpackJsonppractice-todos-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(8),d=n.n(o),a=n(2),c=n(6),l=n(3),i=n(0),s=function(e){var t=e.handleAddTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(a.a)(t,2),o=n[0],d=n[1];return[o,function(e){var t=e.target;d(Object(l.a)(Object(l.a)({},o),{},Object(c.a)({},t.name,t.value)))},function(){d(e)}]}({description:""}),o=Object(a.a)(n,3),d=o[0].description,s=o[1],u=o[2];return Object(i.jsxs)("form",{className:"border-2 border-gray-500 p-5",onSubmit:function(e){if(e.preventDefault(),!(d.trim().length<=1)){var n={id:(new Date).getTime(),desc:d,done:!1};t(n),u()}},children:[Object(i.jsx)("h1",{className:"pb-2 border-b-2 border-gray-300 text-4xl mb-3",children:"Add TODO"}),Object(i.jsx)("input",{type:"text",placeholder:"Add New TODO",name:"description",autoComplete:"off",className:"mt-5 w-full h-10 border-2 border-gray-700 rounded text-center ",onChange:s,value:d}),Object(i.jsx)("button",{type:"submit",className:"w-full mt-5 px-6 py-3 rounded font-medium bg-blue-500 text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition duration-250\t",children:"Add"})]})},u=function(e){var t=e.todo,n=e.index,r=e.handleDelete,o=e.handleToggle;return Object(i.jsxs)("li",{className:"py-1 my-2 flex justify-between border-t-2 border-b-2 border-b-gray-300 ",children:[Object(i.jsxs)("p",{onClick:function(){return o(t.id)},className:"".concat(t.done&&"complete bg-green-500 rounded p-1"," my-auto "),children:[n+1,": ",t.desc]}),Object(i.jsx)("button",{onClick:function(){return r(t.id)},className:"px-5 py-4 rounded font-medium bg-red-500 text-white hover:bg-red-900 transition duration-250",children:"Delete"})]},t.id)},b=function(e){var t=e.todos,n=e.handleDelete,r=e.handleToggle;return Object(i.jsx)("ul",{children:t.map((function(e,t){return Object(i.jsx)(u,{todo:e,index:t,handleDelete:n,handleToggle:r},e.id)}))})},j=n(9),h=function(e,t){switch(t.type){case"add":return[].concat(Object(j.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{done:!e.done}):e}));default:return e}},p=function(){return JSON.parse(localStorage.getItem("todos"))},f=function(){var e=Object(r.useReducer)(h,[],p),t=Object(a.a)(e,2),n=t[0],o=t[1];Object(r.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(i.jsxs)("div",{className:"border-2 border-gray-400 p-4 height ",children:[Object(i.jsx)("h1",{className:"text-5xl pb-4 border-b-2 border-gray-300",children:"TODO Aplication"}),Object(i.jsxs)("h2",{className:"text-3xl mt-2",children:["Number of TODOs ",n.length]}),Object(i.jsxs)("div",{className:"flex justify-between",children:[Object(i.jsx)("div",{className:"w-1/2",children:Object(i.jsx)(b,{todos:n,handleDelete:function(e){o({type:"delete",payload:e})},handleToggle:function(e){o({type:"toggle",payload:e})}})}),Object(i.jsx)("div",{className:"w-1/2 ml-5",children:Object(i.jsx)(s,{handleAddTodo:function(e){o({type:"add",payload:e})}})})]})]})};n(15);d.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.eee4a81d.chunk.js.map