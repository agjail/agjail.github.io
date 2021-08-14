(this["webpackJsonpInformaTV-DeepFake-Experiment"]=this["webpackJsonpInformaTV-DeepFake-Experiment"]||[]).push([[0],{13:function(e,t,s){},20:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(14),c=s.n(i),o=(s(20),s(5)),l=s(6),r=s(2),h=s(9),d=s(8),b=(s(13),s(0)),j=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(r.a)(a)),a}return Object(l.a)(s,[{key:"handleChange",value:function(e){this.props.handleChange(e.target.value,this.props.name)}},{key:"render",value:function(){var e=this.props.name,t=this.props.bestOption,s=this.props.worstOption;return Object(b.jsxs)("div",{className:"slider row",children:[Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("span",{children:e})}),Object(b.jsx)("div",{className:"text-center col",children:Object(b.jsx)("span",{className:"align-middle",children:Object(b.jsx)("input",{className:"form-control-range align-middle",type:"range",value:this.props.value,min:1,max:20,step:1,disabled:t===e||s===e,onChange:this.handleChange,list:"tickmarks-"+e})})})]})}}]),s}(n.a.Component),u=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(r.a)(a)),a}return Object(l.a)(s,[{key:"handleChange",value:function(e,t,s){this.props.onChange(this.props.type,this.props.name)}},{key:"render",value:function(){var e=this.props.name,t=this.props.bestOption,s=this.props.worstOption,a="best"===this.props.type?s:t,n="best"===this.props.type?t:s;return Object(b.jsx)("div",{className:"radio",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",value:e,checked:n===e,onChange:this.handleChange,disabled:a===e}),Object(b.jsxs)("span",{className:a===e?"italic-disabled":"",children:[" ",e]})]})})}}]),s}(n.a.Component),O=s(4),p=s(15);var m=function(e){var t=function(t){e.handleChange(e.type,t.target.id)};return Object(b.jsxs)("div",{className:"likert-scale",children:[Object(b.jsx)("h5",{children:e.question}),Object(b.jsxs)(p.a,{className:"d-flex mb-3",children:[Object(b.jsx)(O.a,{className:"w-100 likert-group-text",variant:0===e.selected?"success":"secondary",size:"lg",id:"0",onClick:t,children:"Strongly disagree"}),Object(b.jsx)(O.a,{className:"w-100 likert-group-text",variant:1===e.selected?"success":"secondary",size:"lg",id:"1",onClick:t,children:"Disagree"}),Object(b.jsx)(O.a,{className:"w-100 likert-group-text",variant:2===e.selected?"success":"secondary",size:"lg",id:"2",onClick:t,children:"Somewhat disagree"}),Object(b.jsx)(O.a,{className:"w-100 likert-group-text",variant:3===e.selected?"success":"secondary",size:"lg",id:"3",onClick:t,children:"Somewhat agree"}),Object(b.jsx)(O.a,{className:"w-100 likert-group-text",variant:4===e.selected?"success":"secondary",size:"lg",id:"4",onClick:t,children:"Agree"}),Object(b.jsx)(O.a,{className:"w-100 likert-group-text",variant:5===e.selected?"success":"secondary",size:"lg",id:"5",onClick:t,children:"Strongly agree"})]})]})},x=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var a;Object(o.a)(this,s),a=t.call(this,e);var n=new Date;return a.state={name:"",dateBirth:n,bestOption:"",worstOption:"",trust:-1,utility:-1,aValue:10,bValue:10,cValue:10,dValue:10,eValue:10,message:"",showOptions:!1,authenticated:!1},a.handleSliderChange=a.handleSliderChange.bind(Object(r.a)(a)),a.selectionChange=a.selectionChange.bind(Object(r.a)(a)),a.handleButtonClick=a.handleButtonClick.bind(Object(r.a)(a)),a.handleNameChange=a.handleNameChange.bind(Object(r.a)(a)),a.handleDateChange=a.handleDateChange.bind(Object(r.a)(a)),a.checkAuth=a.checkAuth.bind(Object(r.a)(a)),a.handleFormSubmit=a.handleFormSubmit.bind(Object(r.a)(a)),a.handleLikertChange=a.handleLikertChange.bind(Object(r.a)(a)),a}return Object(l.a)(s,[{key:"resetState",value:function(){var e=!this.state.showOptions;this.setState({bestOption:"",worstOption:"",aValue:10,bValue:10,cValue:10,dValue:10,eValue:10,trust:1e3,utility:1e3,message:"",showOptions:e})}},{key:"setSliderValue",value:function(e,t){switch(e){case"A":this.setState({aValue:t});break;case"B":this.setState({bValue:t});break;case"C":this.setState({cValue:t});break;case"D":this.setState({dValue:t});break;case"E":this.setState({eValue:t})}}},{key:"getSliderValue",value:function(e){switch(e){case"A":return this.state.aValue;case"B":return this.state.bValue;case"C":return this.state.cValue;case"D":return this.state.dValue;case"E":return this.state.eValue}}},{key:"setBestOrWorst",value:function(e,t){var s=this,a=["A","B","C","D","E"];"best"===e?(a.forEach((function(e){20===s.getSliderValue(e)&&s.setSliderValue(e,19)})),this.setSliderValue(t,20)):(a.forEach((function(e){1===s.getSliderValue(e)&&s.setSliderValue(e,2)})),this.setSliderValue(t,1))}},{key:"selectionChange",value:function(e,t){this.setBestOrWorst(e,t),"best"===e?this.setState({bestOption:t}):"worst"===e&&this.setState({worstOption:t})}},{key:"handleSliderChange",value:function(e,t){e<20&&e>1&&this.setSliderValue(t,e)}},{key:"handleButtonClick",value:function(){this.resetState()}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleDateChange",value:function(e,t){this.setState({dateBirth:e.target.value})}},{key:"checkAuth",value:function(){var e=this;["Paul","Conor","Lucy","Agathe1","Agathe"].includes(this.state.name)&&fetch(this.state.name+".txt").then((function(e){return e.text()})).then((function(t){e.setState({message:t,authenticated:!0})}))}},{key:"handleLikertChange",value:function(e,t){"trust"===e?this.setState({trust:parseInt(t)}):"utility"===e&&this.setState({utility:parseInt(t)}),console.log(this.state)}},{key:"handleFormSubmit",value:function(){var e={"entry.366340186":this.state.aValue,"entry.913386205":this.state.bValue,"entry.1565951474":this.state.cValue,"entry.904094073":this.state.dValue,"entry.1954231844":this.state.eValue,"entry.1650545957":this.state.name,"entry.646847081":this.state.trust,"entry.779562745":this.state.utility},t=new URL("https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-kQ68XPt_3RsDvl4OwSlXONoIs5GPZYw6YQQIHhKQTXgPqQ/formResponse");t.search=new URLSearchParams(e).toString();var s=fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},mode:"no-cors"}).then((function(e){console.log({Success:e}),alert("Submission succesful! Thank you!")})).catch((function(e){console.error({Error:e})}));console.log(s),this.resetState()}},{key:"render",value:function(){return this.state.authenticated?Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row title",children:Object(b.jsx)("div",{className:"col control-group",children:Object(b.jsx)("h1",{children:"InformaTV DeepFake Voice Experiment"})})}),Object(b.jsxs)("div",{id:"auth",hidden:!this.state.authenticated,children:[Object(b.jsx)("div",{className:"row audio-container",children:Object(b.jsxs)("div",{className:"col control-group",children:[Object(b.jsxs)("div",{className:"row audio-row",children:[Object(b.jsx)("div",{className:"col audio-col",children:Object(b.jsx)("span",{className:"align-middle",children:"Recording A, high end computer generated voice:"})}),Object(b.jsx)("div",{className:"col audio-col",children:Object(b.jsxs)("audio",{controls:!0,children:[Object(b.jsx)("source",{src:this.state.name+"Real.m4a"}),"Your browser does not support the audio element."]})})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row audio-row",children:[Object(b.jsx)("div",{className:"col audio-col",children:Object(b.jsx)("span",{className:"align-middle",children:"Recording B, low end computer generated voice:"})}),Object(b.jsx)("div",{className:"col audio-col",children:Object(b.jsxs)("audio",{controls:!0,children:[Object(b.jsx)("source",{src:this.state.name+"CompGen.flac"}),"Your browser does not support the audio element."]})})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row audio-row",children:[Object(b.jsx)("div",{className:"col audio-col",children:Object(b.jsx)("span",{className:"align-middle",children:"Recording C, InformaTV newscaster, high end computer generated voice:"})}),Object(b.jsx)("div",{className:"col audio-col",children:Object(b.jsxs)("audio",{controls:!0,children:[Object(b.jsx)("source",{src:this.state.name+"ITVReal.flac"}),"Your browser does not support the audio element."]})})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row audio-row",children:[Object(b.jsx)("div",{className:"col audio-col",children:Object(b.jsx)("span",{className:"align-middle",children:"Recording D, InformaTV newscaster, low end computer generated voice:"})}),Object(b.jsx)("div",{className:"col audio-col",children:Object(b.jsxs)("audio",{controls:!0,children:[Object(b.jsx)("source",{src:this.state.name+"ITVCompGen.flac"}),"Your browser does not support the audio element."]})})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row audio-row",children:[Object(b.jsx)("div",{className:"col audio-col",children:Object(b.jsx)("span",{className:"align-middle",children:"Text message:"})}),Object(b.jsx)("div",{className:"col audio-col",children:Object(b.jsx)("h3",{children:this.state.message})})]})]})}),Object(b.jsxs)("div",{className:"slider-form",hidden:!this.state.showOptions,children:[Object(b.jsxs)("div",{className:"options row",children:[Object(b.jsxs)("div",{className:"best-option col control-group",children:[Object(b.jsx)("h3",{children:"Best Option"}),Object(b.jsxs)("div",{className:"radio-buttons",children:[Object(b.jsx)(u,{name:"A",type:"best",bestOption:this.state.bestOption,worstOption:this.state.worstOption,onChange:this.selectionChange}),Object(b.jsx)(u,{name:"B",type:"best",bestOption:this.state.bestOption,worstOption:this.state.worstOption,onChange:this.selectionChange}),Object(b.jsx)(u,{name:"C",type:"best",bestOption:this.state.bestOption,worstOption:this.state.worstOption,onChange:this.selectionChange}),Object(b.jsx)(u,{name:"D",type:"best",bestOption:this.state.bestOption,worstOption:this.state.worstOption,onChange:this.selectionChange}),Object(b.jsx)(u,{name:"E",type:"best",bestOption:this.state.bestOption,worstOption:this.state.worstOption,onChange:this.selectionChange})]})]}),Object(b.jsxs)("div",{className:"worst-option col control-group",children:[Object(b.jsx)("h3",{children:"Worst Option"}),Object(b.jsxs)("div",{className:"radio-buttons ",children:[Object(b.jsx)(u,{name:"A",type:"worst",bestOption:this.state.bestOption,worstOption:this.state.worstOption,onChange:this.selectionChange}),Object(b.jsx)(u,{name:"B",type:"worst",bestOption:this.state.bestOption,worstOption:this.state.worstOption,onChange:this.selectionChange}),Object(b.jsx)(u,{name:"C",type:"worst",bestOption:this.state.bestOption,worstOption:this.state.worstOption,onChange:this.selectionChange}),Object(b.jsx)(u,{name:"D",type:"worst",bestOption:this.state.bestOption,worstOption:this.state.worstOption,onChange:this.selectionChange}),Object(b.jsx)(u,{name:"E",type:"worst",bestOption:this.state.bestOption,worstOption:this.state.worstOption,onChange:this.selectionChange})]})]})]}),Object(b.jsx)("div",{className:"row sliders-row",children:Object(b.jsxs)("div",{className:"col control-group",children:[Object(b.jsx)(j,{value:this.state.aValue,bestOption:this.state.bestOption,worstOption:this.state.worstOption,handleChange:this.handleSliderChange,name:"A"}),Object(b.jsx)(j,{value:this.state.bValue,bestOption:this.state.bestOption,worstOption:this.state.worstOption,handleChange:this.handleSliderChange,name:"B"}),Object(b.jsx)(j,{value:this.state.cValue,bestOption:this.state.bestOption,worstOption:this.state.worstOption,handleChange:this.handleSliderChange,name:"C"}),Object(b.jsx)(j,{value:this.state.dValue,bestOption:this.state.bestOption,worstOption:this.state.worstOption,handleChange:this.handleSliderChange,name:"D"}),Object(b.jsx)(j,{value:this.state.eValue,bestOption:this.state.bestOption,worstOption:this.state.worstOption,handleChange:this.handleSliderChange,name:"E"})]})})]}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col control-group",children:[Object(b.jsx)(m,{className:"mb-4",type:"trust",selected:this.state.trust,question:"Would you trust such a system? (its ability to recreate the voice of someone you know)",handleChange:this.handleLikertChange}),Object(b.jsx)(m,{type:"utility",selected:this.state.utility,question:"Do you believe it would be useful to have a synthetic message reader in a system such as InformaTV?",handleChange:this.handleLikertChange})]})}),Object(b.jsx)("div",{className:"row decision-row",children:Object(b.jsxs)("div",{className:"col control-group",children:[Object(b.jsxs)("div",{className:"row button-row text-center",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("button",{type:"button",className:"btn btn-block btn-secondary",hidden:this.state.showOptions,onClick:this.handleFormSubmit,children:"These 5 options are equally suitable"})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("button",{type:"button",className:"btn btn-block btn-primary",hidden:this.state.showOptions,onClick:this.handleButtonClick,children:"Some versions are more suitable than others"})})]}),Object(b.jsxs)("div",{className:"button-row row text-center",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("button",{type:"button",className:"btn btn-block btn-secondary",hidden:!this.state.showOptions,onClick:this.handleButtonClick,children:"Back"})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("button",{type:"button",className:"btn btn-block btn-primary",hidden:!this.state.showOptions,onClick:this.handleFormSubmit,children:"Submit"})})]})]})})]})]}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row title",children:Object(b.jsx)("div",{className:"col control-group",children:Object(b.jsx)("h1",{children:"InformaTV DeepFake Voice Experiment"})})}),Object(b.jsx)("div",{className:"row name-check",children:Object(b.jsx)("div",{className:"col control-group",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("p",{children:"Please enter the name of the person sending the message (ie. 'Conor')"}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{htmlFor:"username",children:"Name"}),Object(b.jsx)("input",{id:"username",type:"text",className:"form-control",value:this.state.name,onChange:this.handleNameChange})]}),Object(b.jsx)("div",{className:"col"})]}),Object(b.jsx)("div",{className:"row pt-3",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("button",{type:"button",className:"btn btn-block btn-primary",onClick:this.checkAuth,children:"Continue"})})})]})})})]})}}]),s}(n.a.Component);var g=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(x,{})})};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f5c70893.chunk.js.map