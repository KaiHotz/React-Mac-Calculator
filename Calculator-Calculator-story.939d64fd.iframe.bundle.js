"use strict";(self.webpackChunkreact_mac_calculator=self.webpackChunkreact_mac_calculator||[]).push([[782],{"./src/Calculator/Calculator.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Calculator_story});var react=__webpack_require__("./node_modules/react/index.js"),lodash_map=__webpack_require__("./node_modules/lodash.map/index.js"),lodash_map_default=__webpack_require__.n(lodash_map);const digitKeys=["7","8","9","4","5","6","1","2","3","0"],calculatorOperations={"/":{name:"divide",symbol:"÷",show:!0,func:(prevValue,nextValue)=>prevValue/nextValue},"*":{name:"multiply",symbol:"x",show:!0,func:(prevValue,nextValue)=>prevValue*nextValue},"-":{name:"subtract",symbol:"-",show:!0,func:(prevValue,nextValue)=>prevValue-nextValue},"+":{name:"add",symbol:"+",show:!0,func:(prevValue,nextValue)=>prevValue+nextValue},"=":{name:"equals",symbol:"=",show:!0,func:(_prevValue,nextValue)=>nextValue},Enter:{name:"enter",symbol:"=",show:!1,func:(_prevValue,nextValue)=>nextValue}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CalculatorDisplay=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/CalculatorDisplay/CalculatorDisplay.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CalculatorDisplay.Z,options);CalculatorDisplay.Z&&CalculatorDisplay.Z.locals&&CalculatorDisplay.Z.locals;const CalculatorDisplay_CalculatorDisplay_CalculatorDisplay=({value="0"})=>{const[scale,setScale]=(0,react.useState)(1),parentRef=(0,react.useRef)(null),innerRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{const availableWidth=parentRef?.current?.offsetWidth,actualWidth=innerRef?.current?.offsetWidth,actualScale=availableWidth&&actualWidth?availableWidth/actualWidth:1;actualScale<1?setScale(actualScale):scale<1&&setScale(1)})),react.createElement("div",{className:"calculator-display",ref:parentRef,"data-testid":"calculator-display"},react.createElement("div",{className:"calculator-display__auto-scaling",style:{transform:`scale(${scale},${scale})`},ref:innerRef,"data-testid":"calculator-display-inner"},(value=>{const language=navigator.language||"en-US";let formattedValue=parseFloat(value).toLocaleString(language,{useGrouping:!0,maximumFractionDigits:6});const match=/\.\d*?(0*)$/.exec(value);return match&&(formattedValue+=/[1-9]/.test(match[0])?match[1]:match[0]),formattedValue.length>=14?parseFloat(value).toExponential().toString():formattedValue})(value)))};try{CalculatorDisplay_CalculatorDisplay_CalculatorDisplay.displayName="CalculatorDisplay",CalculatorDisplay_CalculatorDisplay_CalculatorDisplay.__docgenInfo={description:"",displayName:"CalculatorDisplay",props:{value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CalculatorDisplay/CalculatorDisplay.tsx#CalculatorDisplay"]={docgenInfo:CalculatorDisplay_CalculatorDisplay_CalculatorDisplay.__docgenInfo,name:"CalculatorDisplay",path:"src/components/CalculatorDisplay/CalculatorDisplay.tsx#CalculatorDisplay"})}catch(__react_docgen_typescript_loader_error){}var CalculatorKey=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/CalculatorKey/CalculatorKey.scss"),CalculatorKey_options={};CalculatorKey_options.styleTagTransform=styleTagTransform_default(),CalculatorKey_options.setAttributes=setAttributesWithoutAttributes_default(),CalculatorKey_options.insert=insertBySelector_default().bind(null,"head"),CalculatorKey_options.domAPI=styleDomAPI_default(),CalculatorKey_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CalculatorKey.Z,CalculatorKey_options);CalculatorKey.Z&&CalculatorKey.Z.locals&&CalculatorKey.Z.locals;const CalculatorKey_CalculatorKey_CalculatorKey=({onClick,className,keyValue,disabled})=>react.createElement("button",{className:`calculator-key ${className}`,type:"button",onClick,disabled,"data-testid":"calculator-key"},keyValue);try{CalculatorKey_CalculatorKey_CalculatorKey.displayName="CalculatorKey",CalculatorKey_CalculatorKey_CalculatorKey.__docgenInfo={description:"",displayName:"CalculatorKey",props:{keyValue:{defaultValue:null,description:"",name:"keyValue",required:!0,type:{name:"string | number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CalculatorKey/CalculatorKey.tsx#CalculatorKey"]={docgenInfo:CalculatorKey_CalculatorKey_CalculatorKey.__docgenInfo,name:"CalculatorKey",path:"src/components/CalculatorKey/CalculatorKey.tsx#CalculatorKey"})}catch(__react_docgen_typescript_loader_error){}let EInputTypes;!function(EInputTypes){EInputTypes.inputDigit="inputDigit",EInputTypes.inputDot="inputDot",EInputTypes.inputPercent="inputPercent",EInputTypes.toggleSign="toggleSign",EInputTypes.clearLastChar="clearLastChar",EInputTypes.clearDisplay="clearDisplay",EInputTypes.performOperation="performOperation",EInputTypes.clearAll="clearAll"}(EInputTypes||(EInputTypes={}));const initialState={value:null,displayValue:"0",operator:null,waitingForOperand:!1},calculatorReducer=(state,action)=>{switch(action.type){case EInputTypes.inputDigit:return state.waitingForOperand?{...state,displayValue:`${action.payload}`,waitingForOperand:!1}:{...state,displayValue:"0"===state.displayValue?`${action.payload}`:`${state.displayValue}${action.payload}`};case EInputTypes.inputDot:return state.waitingForOperand?{...state,displayValue:"0.",waitingForOperand:!1}:{...state,displayValue:`${state.displayValue}.`,waitingForOperand:!1};case EInputTypes.inputPercent:if("0"!==state.displayValue){const fixedDigits=state.displayValue.replace(/^-?\d*\.?/,""),newValue=parseFloat(state.displayValue)/100;return{...state,displayValue:`${newValue.toFixed(fixedDigits.length+2)}`}}return state;case EInputTypes.toggleSign:{const newValue=-1*parseFloat(state.displayValue);return{...state,displayValue:`${newValue}`}}case EInputTypes.clearLastChar:return{...state,displayValue:state.displayValue.substring(0,state.displayValue.length-1)||"0"};case EInputTypes.clearDisplay:return{...state,displayValue:"0"};case EInputTypes.performOperation:{const inputValue=parseFloat(state.displayValue);if(null===state.value)return{...state,value:inputValue,operator:action.payload,waitingForOperand:!0};if(state.operator){const currentValue=state.value||0,newValue=calculatorOperations[state.operator].func(currentValue,inputValue);return{value:newValue,displayValue:`${newValue}`,operator:action.payload,waitingForOperand:!0}}return{...state,operator:action.payload,waitingForOperand:!1}}case EInputTypes.clearAll:default:return initialState}};var Calculator=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/Calculator/Calculator.scss"),Calculator_options={};Calculator_options.styleTagTransform=styleTagTransform_default(),Calculator_options.setAttributes=setAttributesWithoutAttributes_default(),Calculator_options.insert=insertBySelector_default().bind(null,"head"),Calculator_options.domAPI=styleDomAPI_default(),Calculator_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Calculator.Z,Calculator_options);Calculator.Z&&Calculator.Z.locals&&Calculator.Z.locals;const Calculator_story={title:"Calculator",component:()=>{const{state,handleClick}=(()=>{const[state,dispatch]=(0,react.useReducer)(calculatorReducer,initialState),handleKeyDown=e=>{/\d/.test(e.key)?(e.preventDefault(),dispatch({type:EInputTypes.inputDigit,payload:e.key})):e.key in calculatorOperations?(e.preventDefault(),dispatch({type:EInputTypes.performOperation,payload:e.key})):","===e.key||"."===e.key?(e.preventDefault(),dispatch({type:EInputTypes.inputDot})):"%"===e.key?(e.preventDefault(),dispatch({type:EInputTypes.inputPercent})):"Backspace"===e.key?(e.preventDefault(),dispatch({type:EInputTypes.clearLastChar})):"Clear"===e.key&&(e.preventDefault(),"0"!==state.displayValue?dispatch({type:EInputTypes.clearDisplay}):dispatch({type:EInputTypes.clearAll}))};return(0,react.useEffect)((()=>(document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)}))),{state,handleClick:(type,payload)=>{dispatch(payload?{type,payload}:{type,payload:null})}}})();return react.createElement("div",{className:"calculator","data-testid":"react-mac-calculator"},react.createElement(CalculatorDisplay_CalculatorDisplay_CalculatorDisplay,{value:state.displayValue}),react.createElement("div",{className:"calculator-keypad"},react.createElement("div",{className:"input-keys"},react.createElement("div",{className:"function-keys"},react.createElement(CalculatorKey_CalculatorKey_CalculatorKey,{className:"key-clear",onClick:()=>handleClick("0"!==state.displayValue?EInputTypes.clearDisplay:EInputTypes.clearAll),keyValue:"0"!==state.displayValue?"C":"AC"}),react.createElement(CalculatorKey_CalculatorKey_CalculatorKey,{className:"key-sign",onClick:()=>handleClick(EInputTypes.toggleSign),keyValue:"±"}),react.createElement(CalculatorKey_CalculatorKey_CalculatorKey,{className:"key-percent",onClick:()=>handleClick(EInputTypes.inputPercent),keyValue:"%"})),react.createElement("div",{className:"digit-keys"},digitKeys.map((digit=>react.createElement(CalculatorKey_CalculatorKey_CalculatorKey,{key:`key-${digit}`,className:`key-${digit}`,onClick:()=>handleClick(EInputTypes.inputDigit,digit),keyValue:digit}))),react.createElement(CalculatorKey_CalculatorKey_CalculatorKey,{className:"key-dot",onClick:()=>handleClick(EInputTypes.inputDot),keyValue:"●",disabled:state.displayValue.includes(".")}))),react.createElement("div",{className:"operator-keys"},lodash_map_default()(calculatorOperations,((value,key)=>value.show?react.createElement(CalculatorKey_CalculatorKey_CalculatorKey,{key:`key-${value.name}`,className:`key-${value.name}`,onClick:()=>handleClick(EInputTypes.performOperation,key),keyValue:value.symbol}):null)))))}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/Calculator/Calculator.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.calculator{width:320px;height:470px;display:flex;flex-direction:column;box-shadow:0 0 20px 0 #aaa;font-family:"Helvetica",sans-serif}.calculator .calculator-keypad{height:350px;display:flex}.calculator .input-keys{width:240px}.calculator .function-keys{display:flex;background:linear-gradient(to bottom, rgb(202, 202, 204) 0%, rgb(196, 194, 204) 100%)}.calculator .function-keys .calculator-key{font-size:2em}.calculator .function-keys .key-multiply{line-height:50px}.calculator .digit-keys{background:#e0e0e7;display:flex;flex-direction:row;flex-wrap:wrap}.calculator .digit-keys .calculator-key{font-size:2.25em}.calculator .digit-keys .key-0{width:160px;text-align:left;padding-left:32px}.calculator .digit-keys .key-dot{padding-top:1em;font-size:.75em}.calculator .operator-keys{background:linear-gradient(to bottom, rgb(252, 156, 23) 0%, rgb(247, 126, 27) 100%)}.calculator .operator-keys .calculator-key{color:#fff;border-right:0;font-size:3em}',"",{version:3,sources:["webpack://./src/Calculator/Calculator.scss"],names:[],mappings:"AAAA,YACE,WAAA,CACA,YAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,kCAAA,CACA,+BACE,YAAA,CACA,YAAA,CAEF,wBACE,WAAA,CAEF,2BACE,YAAA,CACA,qFAAA,CACA,2CACE,aAAA,CAEF,yCACE,gBAAA,CAGJ,wBACE,kBAAA,CACA,YAAA,CACA,kBAAA,CACA,cAAA,CACA,wCACE,gBAAA,CAEF,+BACE,WAAA,CACA,eAAA,CACA,iBAAA,CAEF,iCACE,eAAA,CACA,eAAA,CAGJ,2BACE,mFAAA,CACA,2CACE,UAAA,CACA,cAAA,CACA,aAAA",sourcesContent:[".calculator {\n  width: 320px;\n  height: 470px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 0 20px 0 #aaa;\n  font-family: 'Helvetica', sans-serif;\n  .calculator-keypad {\n    height: 350px;\n    display: flex;\n  }\n  .input-keys {\n    width: 240px;\n  }\n  .function-keys {\n    display: flex;\n    background: linear-gradient(to bottom, rgba(202, 202, 204, 1) 0%, rgba(196, 194, 204, 1) 100%);\n    .calculator-key {\n      font-size: 2em;\n    }\n    .key-multiply {\n      line-height: 50px;\n    }\n  }\n  .digit-keys {\n    background: #e0e0e7;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    .calculator-key {\n      font-size: 2.25em;\n    }\n    .key-0 {\n      width: 160px;\n      text-align: left;\n      padding-left: 32px;\n    }\n    .key-dot {\n      padding-top: 1em;\n      font-size: 0.75em;\n    }\n  }\n  .operator-keys {\n    background: linear-gradient(to bottom, rgba(252, 156, 23, 1) 0%, rgba(247, 126, 27, 1) 100%);\n    .calculator-key {\n      color: white;\n      border-right: 0;\n      font-size: 3em;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/CalculatorDisplay/CalculatorDisplay.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".calculator-display{color:#fff;background:#1c191c;line-height:130px;font-size:6em;position:relative;flex:1}.calculator-display__auto-scaling{display:inline-block;padding:0 30px;position:absolute;right:0;transform-origin:right;font-family:inherit}","",{version:3,sources:["webpack://./src/components/CalculatorDisplay/CalculatorDisplay.scss"],names:[],mappings:"AAAA,oBACE,UAAA,CACA,kBAAA,CACA,iBAAA,CACA,aAAA,CACA,iBAAA,CACA,MAAA,CAEA,kCACE,oBAAA,CACA,cAAA,CACA,iBAAA,CACA,OAAA,CACA,sBAAA,CACA,mBAAA",sourcesContent:[".calculator-display {\n  color: white;\n  background: #1c191c;\n  line-height: 130px;\n  font-size: 6em;\n  position: relative;\n  flex: 1;\n\n  &__auto-scaling {\n    display: inline-block;\n    padding: 0 30px;\n    position: absolute;\n    right: 0;\n    transform-origin: right;\n    font-family: inherit;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/CalculatorKey/CalculatorKey.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".calculator-key{display:block;width:80px;height:70px;border:none;border-top:1px solid #777;border-right:1px solid #666;background:none;text-align:center;line-height:70px;padding:0;font-family:inherit;user-select:none;cursor:pointer;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.calculator-key:active{box-shadow:inset 0 0 80px 0 rgba(0,0,0,.25)}","",{version:3,sources:["webpack://./src/components/CalculatorKey/CalculatorKey.scss"],names:[],mappings:"AAAA,gBACE,aAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,yBAAA,CACA,2BAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CACA,SAAA,CACA,mBAAA,CACA,gBAAA,CACA,cAAA,CACA,YAAA,CACA,yCAAA,CACA,uBACE,2CAAA",sourcesContent:[".calculator-key {\n  display: block;\n  width: 80px;\n  height: 70px;\n  border: none;\n  border-top: 1px solid #777;\n  border-right: 1px solid #666;\n  background: none;\n  text-align: center;\n  line-height: 70px;\n  padding: 0;\n  font-family: inherit;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &:active {\n    box-shadow: inset 0 0 80px 0 rgba(0, 0, 0, 0.25);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);