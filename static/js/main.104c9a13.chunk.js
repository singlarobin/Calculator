(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{21:function(e,n,t){"use strict";t.r(n);var a,_,r,c,i,o,l,d=t(0),u=t.n(d),s=t(8),p=t.n(s),m=t(2),b=t(13),j=t(3),O=t(9),h=["C","%","DEL","/","7","8","9","*","4","5","6","-","1","2","3","+","00","0",".","="],g=t(1),x=j.a.div(a||(a=Object(m.a)(["\n  margin: 0rem auto;\n  padding: 1rem 0rem;\n  background: #dca3a4;\n  height: 66vh;\n"]))),f=j.a.div(_||(_=Object(m.a)(["\n  background: #867162;\n  padding: 0.5rem;\n  margin: 3rem auto;\n  width: 300px;\n  border-radius: 1rem;\n\n  @media (max-width: 500px) {\n    width: 250px;\n  }\n"]))),k=j.a.h1(r||(r=Object(m.a)(["\n  margin: 0.5rem 0.5rem 0rem 0.5rem;\n  padding: 1rem;\n  text-align: right;\n  font-size: 1.5em;\n  color: #1b2021;\n  background: #ffcead;\n  border-radius: 1rem;\n"]))),E=j.a.div(c||(c=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 60px);\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  color: #1b2021;\n  margin: 0rem auto;\n  padding: 1rem;\n\n  @media (max-width: 500px) {\n    grid-template-columns: repeat(4, 50px);\n  }\n"]))),C=function(){var e=Object(d.useState)("0"),n=Object(b.a)(e,2),t=n[0],a=n[1];return Object(d.useEffect)((function(){})),Object(g.jsx)(x,{children:Object(g.jsxs)(f,{children:[Object(g.jsx)(k,{children:t}),Object(g.jsx)(E,{children:h.map((function(e,n){return Object(g.jsx)(O.a,{value:e,output:t,handleClick:a},e)}))})]})})},v=j.a.div(i||(i=Object(m.a)(["\n  margin: -1rem;\n  height: 100vh;\n"]))),D=j.a.div(o||(o=Object(m.a)(["\n  background: #926e6f;\n  margin: 0px auto;\n  height: 30vh;\n"]))),P=j.a.h1(l||(l=Object(m.a)(["\n  font-size: 5rem;\n  text-align: center;\n  color: #fdfaf6;\n  padding: 80px 0px;\n  margin: 0px auto;\n\n  @media (max-width: 550px) {\n    font-size: 4rem;\n  }\n"]))),M=function(){return Object(g.jsxs)(v,{children:[Object(g.jsx)(D,{children:Object(g.jsx)(P,{children:"Calculator"})}),Object(g.jsx)(C,{})]})};p.a.render(Object(g.jsx)(u.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root"))},9:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Robin_Desktop_Projects_React_Calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__),_templateObject,Button=styled_components__WEBPACK_IMPORTED_MODULE_1__.a.button(_templateObject||(_templateObject=Object(C_Users_Robin_Desktop_Projects_React_Calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  padding 0.5rem;\n  font-size:1rem;\n  background: #ffcead;\n  text-align: center;\n  border:1px solid #ffcead;\n  border-radius: 2rem;\n\n  @media(max-width:500px){\n    font-size:1rem;\n  }\n"]))),Item=function Item(props){var output=props.output,value=props.value,handleClick=props.handleClick,onHandleClick=function onHandleClick(){switch(value){case"C":handleClick("0");break;case"DEL":var str=output.slice(0,output.length-1);str||(str="0"),handleClick(str);break;case"=":handleClick(eval(output).toString());break;default:handleClick("0"===output?value:output+value),console.log("output",typeof output),console.log("value",typeof value)}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button,{onClick:function(){return onHandleClick()},children:value})};__webpack_exports__.a=Item}},[[21,1,2]]]);
//# sourceMappingURL=main.104c9a13.chunk.js.map