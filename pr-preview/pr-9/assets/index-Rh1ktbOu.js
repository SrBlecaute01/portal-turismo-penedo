import{C as et,_ as tt,a as nt,b as rt}from"./Carousel-qMvpn0w3.js";import{j as h,N as ot,r as s,R as st}from"./index-CzmCM1MS.js";import{N as it}from"./Navbar-CVZNic-e.js";import{r as Le}from"./index-BRQcpVh3.js";const at="_rootContainer_108u9_1",ut="_carouselContainer_108u9_5",ct="_carouselText_108u9_11",lt="_numberContainer_108u9_26",dt="_routesContainer_108u9_37",ft="_routesItems_108u9_51",ce={rootContainer:at,carouselContainer:ut,carouselText:ct,numberContainer:lt,routesContainer:dt,routesItems:ft},mt="_cardContainer_zk6xq_1",pt="_cardImage_zk6xq_12",ht="_cardContent_zk6xq_20",yt="_cardDays_zk6xq_37",gt="_cardDaysNumber_zk6xq_42",bt="_cardDaysLabel_zk6xq_48",xt="_cardText_zk6xq_57",vt="_cardTitle_zk6xq_63",Rt="_cardDescription_zk6xq_68",X={cardContainer:mt,cardImage:pt,cardContent:ht,cardDays:yt,cardDaysNumber:gt,cardDaysLabel:bt,cardText:xt,cardTitle:vt,cardDescription:Rt};function Et(e){return h.jsxs("div",{className:X.cardContainer,children:[h.jsx("img",{className:X.cardImage,src:e.image,alt:e.title}),h.jsxs("div",{className:X.cardContent,children:[h.jsxs("div",{className:X.cardDays,children:[h.jsx("span",{className:X.cardDaysNumber,children:e.days}),h.jsx("span",{className:X.cardDaysLabel,children:e.days>1?"dias":"dia"})]}),h.jsxs("div",{className:X.cardText,children:[h.jsx(ot,{to:e.to,className:X.cardTitle,children:e.title}),h.jsx("div",{className:X.cardDescription,children:e.description})]})]})]})}const Be=s.createContext(void 0);function Ne(){const e=s.useContext(Be);if(e===void 0)throw new Error("Base UI: NumberFieldRootContext is missing. NumberField parts must be placed within <NumberField.Root>.");return e}const Ct=60,wt=400,_t=50,St=3,Tt=8,ge=1;function Se(e){return e&&e.ownerDocument||document}function De(e){return Se(e).defaultView||window}function It(e,t){const n=De(t),o=t.getBoundingClientRect();if(o&&e!=null)return{x:o.left-e/2,y:o.top-e/2,width:o.right+e/2,height:o.bottom+e/2};const r=n.visualViewport;return r?{x:r.offsetLeft,y:r.offsetTop,width:r.offsetLeft+r.width,height:r.offsetTop+r.height}:{x:0,y:0,width:n.document.documentElement.clientWidth,height:n.document.documentElement.clientHeight}}function Vt(e,t){const n=De(e).visualViewport;if(!n)return()=>{};function o(){n&&(t.current=n.scale)}return o(),n.addEventListener("resize",o),()=>{n.removeEventListener("resize",o)}}const Q=typeof window<"u"?s.useLayoutEffect:s.useEffect;function Te(e){const t=s.useRef(e);return Q(()=>{t.current=e}),t}function Nt(){if(typeof navigator>"u")return{platform:"",maxTouchPoints:-1};const e=navigator.userAgentData;return e!=null&&e.platform?{platform:e.platform,maxTouchPoints:navigator.maxTouchPoints}:{platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints}}function Dt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter:none")}function kt(){const e=Nt();return e.platform==="MacIntel"&&e.maxTouchPoints>1?!0:/iP(hone|ad|od)|iOS/.test(e.platform)}function re(...e){if(e.length===0)return{};if(e.length===1)return Fe(e[0],{});let t=Fe(e[0],{});for(let n=1;n<e.length;n+=1){const o=e[n];o&&(qe(o)?t=o(t):t=Pt(t,o))}return t??{}}function Fe(e,t){return qe(e)?e(t):e??{}}function Pt(e,t){return t?e?Object.entries(t).reduce((n,[o,r])=>(Lt(o,r)?n[o]=Mt(e[o],r):o==="style"?n[o]=At(e.style,r):o==="className"?n[o]=Ft(e.className,r):n[o]=r,n),{...e}):t:e||{}}function Lt(e,t){const n=e.charCodeAt(2);return e[0]==="o"&&e[1]==="n"&&n>=65&&n<=90&&typeof t=="function"}function qe(e){return typeof e=="function"}function Mt(e,t){return n=>{if(Ot(n)){const r=n;jt(r);const a=t(r);return r.baseUIHandlerPrevented||e==null||e(r),a}const o=t(n);return e==null||e(n),o}}function jt(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function At(e,t){if(t||e)return{...e,...t}}function Ft(e,t){return t?e?t+" "+e:t:e}function Ot(e){return e!=null&&typeof e=="object"&&"nativeEvent"in e}let Ut=function(e){return e.scrubbing="data-scrubbing",e.disabled="data-disabled",e.readonly="data-readonly",e.required="data-required",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e}({});function J(e){const t=s.useRef(e);return Q(()=>{t.current=e}),s.useCallback((...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}function Gt(e){const{disabled:t,readOnly:n,value:o,inputRef:r,incrementValue:a,getStepAmount:c}=e,x=Te(o),l=s.useRef(null),m=s.useRef(null),v=s.useRef(!1),d=s.useRef(null),y=s.useRef({x:0,y:0}),R=s.useRef(1),[E,I]=s.useState(!1),[L,S]=s.useState(!1),[D,k]=s.useState(!1);s.useEffect(()=>{if(!(!E||!d.current))return Vt(d.current,R)},[E]);const _=J((w,u)=>{d.current&&(d.current.style.transform=`translate3d(${w}px,${u}px,0) scale(${1/R.current})`)}),M=s.useCallback(({movementX:w,movementY:u})=>{const b=d.current,g=m.current,f=l.current;if(!b||!g||!f)return;const C=It(f.teleportDistance,g),A=y.current,i={x:Math.round(A.x+w),y:Math.round(A.y+u)},P=b.offsetWidth,N=b.offsetHeight;i.x+P/2<C.x?i.x=C.width-P/2:i.x+P/2>C.width&&(i.x=C.x-P/2),i.y+N/2<C.y?i.y=C.height-N/2:i.y+N/2>C.height&&(i.y=C.y-N/2),y.current=i,_(i.x,i.y)},[_]),V=s.useCallback((w,{clientX:u,clientY:b})=>{Le.flushSync(()=>{I(w)});const g=d.current;if(!g||!w)return;const f={x:u-g.offsetWidth/2,y:b-g.offsetHeight/2};y.current=f,_(f.x,f.y)},[_]),T=s.useCallback((w={})=>re({role:"presentation",[Ut.scrubbing]:E||void 0,style:{touchAction:"none",WebkitUserSelect:"none",userSelect:"none"},async onPointerDown(u){var f;const b=!u.button||u.button===0;if(u.defaultPrevented||n||!b||t)return;const g=u.pointerType==="touch";if(S(g),u.pointerType==="mouse"&&(u.preventDefault(),(f=r.current)==null||f.focus()),v.current=!0,V(!0,u.nativeEvent),!g&&!Dt())try{await Se(m.current).body.requestPointerLock(),k(!1)}catch{k(!0)}finally{Le.flushSync(()=>{V(!0,u.nativeEvent)})}}},w),[n,t,V,r,E]);return s.useEffect(function(){if(!r.current||t||n)return;let u=0;function b(C){try{Se(m.current).exitPointerLock()}catch{}finally{v.current=!1,V(!1,C)}}function g(C){if(!v.current||!l.current)return;C.preventDefault(),M(C);const{direction:A,pixelSensitivity:i}=l.current,{movementX:P,movementY:N}=C;if(u+=A==="vertical"?N:P,Math.abs(u)>=i){u=0;const B=A==="vertical"?-N:P;a(B*(c(C)??ge),1)}}const f=De(r.current);return f.addEventListener("pointerup",b,!0),f.addEventListener("pointermove",g,!0),()=>{f.removeEventListener("pointerup",b,!0),f.removeEventListener("pointermove",g,!0)}},[t,n,a,x,c,r,V,M]),s.useEffect(function(){const u=m.current;if(!u||t||n)return;function b(g){g.touches.length===1&&g.preventDefault()}return u.addEventListener("touchstart",b),()=>{u.removeEventListener("touchstart",b)}},[t,n]),s.useMemo(()=>({isScrubbing:E,isTouchInput:L,isPointerLockDenied:D,getScrubAreaProps:T,scrubAreaCursorRef:d,scrubAreaRef:m,scrubHandleRef:l}),[E,L,D,T])}const Oe=new Map;function Ie(e,t){const n=JSON.stringify({locale:e,options:t}),o=Oe.get(n);if(o)return o;const r=new Intl.NumberFormat(e,t);return Oe.set(n,r),r}function Ue(e,t,n){return e==null?"":Ie(t,n).format(e)}function Wt(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}function Ht(e,t={}){return parseFloat(Ie("en-US",{maximumFractionDigits:t.maximumFractionDigits,minimumFractionDigits:t.minimumFractionDigits,useGrouping:!1}).format(e))}function Bt(e,{step:t,minWithDefault:n,maxWithDefault:o,minWithZeroDefault:r,format:a}){if(e===null)return e;const c=Wt(e,n,o);if(t!=null){const x=(c-r)/t,l=Math.round(x),m=r+l*t;return Ht(m,a)}return c}const $e=["零","一","二","三","四","五","六","七","八","九"],Ke=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],ze=["%","٪"],Me=new RegExp(`[${Ke.join("")}]`,"g"),je=new RegExp(`[${$e.join("")}]`,"g"),qt=new RegExp(`[${ze.join("")}]`);function Ae(e,t){const n=Ie(e,t).formatToParts(11111.1),o={};return n.forEach(r=>{o[r.type]=r.value}),Ie(e).formatToParts(.1).forEach(r=>{r.type==="decimal"&&(o[r.type]=r.value)}),o}function ye(e,t,n){let o=t;o===void 0&&(Me.test(e)?o="ar":je.test(e)&&(o="zh"));const{group:r,decimal:a,currency:c,unit:x}=Ae(o,n);let l=null;r&&(l=new RegExp("\\p{Zs}","u").test(r)?new RegExp("\\p{Zs}","gu"):new RegExp(`\\${r}`,"g"));const v=[{regex:r?l:null,replacement:""},{regex:a?new RegExp(`\\${a}`,"g"):null,replacement:"."},{regex:c?new RegExp(`\\${c}`,"g"):null,replacement:""},{regex:x?new RegExp(`\\${x}`,"g"):null,replacement:""},{regex:Me,replacement:y=>Ke.indexOf(y).toString()},{regex:je,replacement:y=>$e.indexOf(y).toString()}].reduce((y,{regex:R,replacement:E})=>R?y.replace(R,E):y,e);let d=parseFloat(v);return qt.test(e)&&(d/=100),Number.isNaN(d)?null:d}function $t({controlled:e,default:t,name:n,state:o="value"}){const{current:r}=s.useRef(e!==void 0),[a,c]=s.useState(t),x=r?e:a,l=s.useCallback(m=>{r||c(m)},[]);return[x,l]}function Kt(){const[,e]=s.useState({});return s.useCallback(()=>{e({})},[])}let Ge=0;function zt(e,t="mui"){const[n,o]=s.useState(e),r=e||n;return s.useEffect(()=>{n==null&&(Ge+=1,o(`${t}-${Ge}`))},[n,t]),r}const Yt={...st},We=Yt.useId;function Xt(e,t){if(We!==void 0){const n=We();return e??`${t}-${n}`}return zt(e,t)}function Zt(e){return Xt(e,"base-ui")}let He=function(e){return e.disabled="data-disabled",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e}({});const Ye={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},Jt={valid(e){return e===null?null:e?{[He.valid]:""}:{[He.invalid]:""}}},Z=()=>{},Qt=s.createContext({invalid:void 0,controlId:void 0,setControlId:Z,labelId:void 0,setLabelId:Z,messageIds:[],setMessageIds:Z,name:void 0,validityData:{state:Ye,errors:[],error:"",value:"",initialValue:null},setValidityData:Z,disabled:void 0,touched:!1,setTouched:Z,dirty:!1,setDirty:Z,filled:!1,setFilled:Z,focused:!1,setFocused:Z,validate:()=>null,validationMode:"onBlur",validationDebounceTime:0,state:{disabled:!1,valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},markedDirtyRef:{current:!1}});function be(e=!0){const t=s.useContext(Qt);if(t.setControlId===Z&&!e)throw new Error("Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.");return t}const en=s.createContext({formRef:{current:{fields:new Map}},errors:{},onClearErrors:()=>{}});function Xe(){return s.useContext(en)}function Ze(e,t){return{...e,state:{...e.state,valid:!t&&e.state.valid}}}const tn=Object.keys(Ye);function Je(){const{setValidityData:e,validate:t,messageIds:n,validityData:o,validationMode:r,validationDebounceTime:a,invalid:c,markedDirtyRef:x,controlId:l,state:m}=be(),{formRef:v}=Xe(),d=s.useRef(-1),y=s.useRef(null);s.useEffect(()=>()=>{window.clearTimeout(d.current)},[]);const R=J(async L=>{const S=y.current;if(!S)return;function D(u){return tn.reduce((b,g)=>(b[g]=u.validity[g],!u.validity.customError&&!x.current&&(b[g]=g==="valid"),b),{})}window.clearTimeout(d.current);const k=t(L);let _=null;typeof k=="object"&&k!==null&&"then"in k?_=await k:_=k;let M="";_!==null&&(M=Array.isArray(_)?_.join(`
`):_),S.setCustomValidity(M);const V=D(S);let T=[];Array.isArray(_)?T=_:_?T=[_]:S.validationMessage&&(T=[S.validationMessage]);const w={value:L,state:V,error:Array.isArray(_)?_[0]:_??S.validationMessage,errors:T,initialValue:o.initialValue};if(l){const u=v.current.fields.get(l);u&&v.current.fields.set(l,{...u,...Ze(w,c)})}e(w)}),E=s.useCallback((L={})=>re({...n.length&&{"aria-describedby":n.join(" ")},...m.valid===!1&&{"aria-invalid":!0}},L),[n,m.valid]),I=s.useCallback((L={})=>re({onChange(S){if(S.nativeEvent.defaultPrevented||c||r!=="onChange")return;const D=S.currentTarget;if(D.value===""){R(D.value);return}window.clearTimeout(d.current),a?d.current=window.setTimeout(()=>{R(D.value)},a):R(D.value)}},E(L)),[E,c,r,a,R]);return s.useMemo(()=>({getValidationProps:E,getInputValidationProps:I,inputRef:y,commitValidation:R}),[E,I,R])}function Ve(...e){const t=s.useRef(void 0),n=s.useCallback(o=>{const r=e.map(a=>{if(a==null)return null;if(typeof a=="function"){const c=a,x=c(o);return typeof x=="function"?x:()=>{c(null)}}return a.current=o,()=>{a.current=null}});return()=>{r.forEach(a=>a==null?void 0:a())}},e);return s.useMemo(()=>e.every(o=>o==null)?null:o=>{t.current&&(t.current(),t.current=void 0),o!=null&&(t.current=n(o))},e)}function nn(e){const{formRef:t}=Xe(),{invalid:n,markedDirtyRef:o,validityData:r,setValidityData:a}=be(),{value:c,id:x,controlRef:l,commitValidation:m}=e,v=Te(e.getValue);Q(()=>{var y;let d=c;d===void 0&&(d=(y=v.current)==null?void 0:y.call(v)),r.initialValue===null&&d!==r.initialValue&&a(R=>({...R,initialValue:d}))},[a,c,r.initialValue,v]),Q(()=>{x&&t.current.fields.set(x,{controlRef:l,validityData:Ze(r,n),validate(){var y;let d=c;d===void 0&&(d=(y=v.current)==null?void 0:y.call(v)),o.current=!0,Le.flushSync(()=>m(d))}})},[m,l,t,v,x,n,o,r,c])}function rn(e){const{id:t,name:n,min:o,max:r,smallStep:a=.1,step:c,largeStep:x=10,required:l=!1,disabled:m=!1,invalid:v=!1,readOnly:d=!1,autoFocus:y=!1,allowWheelScrub:R=!1,format:E,value:I,onValueChange:L,defaultValue:S,locale:D}=e,{setControlId:k,validationMode:_,setDirty:M,validityData:V,setValidityData:T,disabled:w,setFilled:u}=be(),{inputRef:b,commitValidation:g}=Je(),f=w||m,C=o??Number.MIN_SAFE_INTEGER,A=r??Number.MAX_SAFE_INTEGER,i=o??0,P=E==null?void 0:E.style,N=s.useRef(null),B=Ve(N,b),q=Zt(t);Q(()=>(k(q),()=>{k(void 0)}),[q,k]);const[oe,ve]=$t({controlled:I,default:S,name:"NumberField",state:"value"}),W=oe??null,le=Te(W);Q(()=>{u(W!==null)},[u,W]),nn({id:q,commitValidation:g,value:W,controlRef:N});const ke=Kt(),se=Te(E),p=J(L),F=s.useRef(-1),H=s.useRef(-1),K=s.useRef(-1),de=s.useRef(!1),fe=s.useRef(0),me=s.useRef(!0),ie=s.useRef(()=>{});Q(()=>{V.initialValue===null&&W!==V.initialValue&&T(O=>({...O,initialValue:W}))},[T,V.initialValue,W]);const[ee,ae]=s.useState(()=>Ue(W,D,E)),[Re,Pe]=s.useState("numeric"),Ee=J(()=>{const{decimal:O,group:j,currency:U}=Ae(D,E),G=Array.from(new Set([".",",",O,j]));return P==="percent"&&G.push(...ze),P==="currency"&&U&&G.push(U),C<0&&G.push("-"),G}),z=J(O=>O!=null&&O.altKey?a:O!=null&&O.shiftKey?x:c),ue=J((O,j)=>{const U=Bt(O,{step:z(j),format:se.current,minWithDefault:C,maxWithDefault:A,minWithZeroDefault:i});p==null||p(U,j&&"nativeEvent"in j?j.nativeEvent:j),ve(U),M(U!==V.initialValue),_==="onChange"&&g(U),ke()}),Y=J((O,j,U,G)=>{const te=U??le.current,he=typeof te=="number"?te+O*j:Math.max(0,o??0);ue(he,G)}),$=J(()=>{window.clearTimeout(K.current),window.clearTimeout(F.current),window.clearInterval(H.current),ie.current(),fe.current=0}),pe=J((O,j)=>{if($(),!N.current)return;const U=De(N.current);function G(he){he.preventDefault()}U.addEventListener("contextmenu",G),ie.current=()=>{U.removeEventListener("contextmenu",G)},U.addEventListener("pointerup",()=>{de.current=!1,$()},{once:!0});function te(){const he=z(j)??ge;Y(he,O?1:-1,void 0,j)}te(),F.current=window.setTimeout(()=>{H.current=window.setInterval(te,Ct)},wt)});Q(function(){if(!me.current)return;const j=Ue(W,D,se.current);j!==ee&&ae(j)}),Q(function(){if(!kt())return;let j="text";C>=0&&(j="decimal"),Pe(j)},[C,P]),s.useEffect(()=>()=>$(),[$]),s.useEffect(function(){const j=N.current;if(f||d||!R||!j)return;function U(G){if(G.ctrlKey||Se(N.current).activeElement!==N.current)return;G.preventDefault();const te=z(G)??ge;Y(te,G.deltaY>0?-1:1,void 0,G)}return j.addEventListener("wheel",U),()=>{j.removeEventListener("wheel",U)}},[R,Y,f,d,x,c,z]);const Ce=Gt({disabled:f,readOnly:d,value:W,inputRef:N,incrementValue:Y,getStepAmount:z});return s.useMemo(()=>({inputRef:N,mergedRef:B,inputValue:ee,value:W,startAutoChange:pe,stopAutoChange:$,minWithDefault:C,maxWithDefault:A,disabled:f,readOnly:d,id:q,setValue:ue,incrementValue:Y,getStepAmount:z,allowInputSyncRef:me,formatOptionsRef:se,valueRef:le,isPressedRef:de,intentionalTouchCheckTimeoutRef:K,movesAfterTouchRef:fe,name:n,required:l,invalid:v,autoFocus:y,inputMode:Re,getAllowedNonNumericKeys:Ee,min:o,max:r,setInputValue:ae,locale:D,...Ce}),[N,B,ee,W,Ce,pe,$,C,A,f,d,q,ue,Y,z,me,se,le,de,K,fe,n,l,v,y,Re,Ee,o,r,ae,D])}function on(e,t){let n={};return Object.entries(e).forEach(([o,r])=>{if(t!=null&&t.hasOwnProperty(o)){const a=t[o](r);a!=null&&(n={...n,...a});return}r===!0?n[`data-${o.toLowerCase()}`]="":r&&(n[`data-${o.toLowerCase()}`]=r.toString())}),n}function sn(e,t){return typeof e=="function"?e(t):e}function an(e,t,n){return typeof e=="function"?e(t,n):s.cloneElement(e,{...re(t,e.props),ref:t.ref})}const un=parseInt(s.version,10);function cn(e){return un>=e}function ln(e,...t){let n;return typeof e!="function"?n=cn(19)?e.props.ref:e.ref:n=null,Ve(n,...t)}const dn={button:e=>h.jsx("button",{type:"button",...e}),div:e=>h.jsx("div",{...e}),h2:e=>h.jsx("h2",{...e}),h3:e=>h.jsx("h3",{...e}),output:e=>h.jsx("output",{...e}),p:e=>h.jsx("p",{...e}),span:e=>h.jsx("span",{...e}),a:e=>h.jsx("a",{...e}),label:e=>h.jsx("label",{...e}),input:e=>h.jsx("input",{...e}),fieldset:e=>h.jsx("fieldset",{...e}),form:e=>h.jsx("form",{...e}),img:e=>h.jsx("img",{alt:"",...e})},fn={};function xe(e){const{render:t,className:n,state:o,ref:r,propGetter:a=S=>S,extraProps:c,customStyleHookMapping:x,styleHooks:l=!0}=e,m=sn(n,o),d={...s.useMemo(()=>l?on(o,x):fn,[o,x,l]),...c};let y;typeof t=="string"?y=dn[t]:y=t;let R=[];r!==void 0&&(R=Array.isArray(r)?r:[r]);const E=a(d),I={...E,ref:ln(y,E.ref,...R)};return m!==void 0&&(I.className=m),{renderElement:()=>an(y,I,o)}}const mn=s.forwardRef(function(t,n){const{id:o,min:r,max:a,smallStep:c,step:x,largeStep:l,autoFocus:m,required:v=!1,disabled:d=!1,invalid:y=!1,readOnly:R=!1,name:E,defaultValue:I,value:L,onValueChange:S,allowWheelScrub:D,format:k,locale:_,render:M,className:V,...T}=t,w=rn(t),{state:u,disabled:b}=be(),g=b||d,f=s.useMemo(()=>({...u,disabled:g,invalid:y,readOnly:R,required:v,value:w.value,inputValue:w.inputValue,scrubbing:w.isScrubbing}),[u,g,y,R,v,w.value,w.inputValue,w.isScrubbing]),C=s.useMemo(()=>({...w,state:f}),[w,f]),{renderElement:A}=xe({ref:n,render:M??"div",state:f,className:V,extraProps:T});return h.jsx(Be.Provider,{value:C,children:A()})}),pn=s.forwardRef(function(t,n){const{render:o,className:r,...a}=t,{state:c}=Ne(),x=s.useCallback((m={})=>re({role:"group"},m),[]),{renderElement:l}=xe({propGetter:x,ref:n,render:o??"div",state:c,className:r,extraProps:a});return l()});function Qe(e){const{inputRef:t,startAutoChange:n,stopAutoChange:o,minWithDefault:r,maxWithDefault:a,value:c,inputValue:x,disabled:l,readOnly:m,id:v,setValue:d,getStepAmount:y,incrementValue:R,allowInputSyncRef:E,formatOptionsRef:I,valueRef:L,movesAfterTouchRef:S,intentionalTouchCheckTimeoutRef:D,isPressedRef:k,locale:_}=e,M=s.useRef({x:0,y:0}),V=s.useRef(!1),T=s.useRef(!1),w=s.useRef(""),u=c!=null&&c<=r,b=c!=null&&c>=a,g=s.useCallback((f,C={})=>{function A(i){E.current=!0;const P=ye(x,_,I.current);P!==null&&(L.current=P,d(P,i))}return re({disabled:l||(f?b:u),type:"button","aria-readonly":m||void 0,"aria-label":f?"Increase":"Decrease","aria-controls":v,tabIndex:-1,style:{WebkitUserSelect:"none",userSelect:"none"},onTouchStart(){V.current=!0},onTouchEnd(){V.current=!1},onClick(i){const P=l||m||(f?b:u);if(i.defaultPrevented||P||(w.current==="touch"?T.current:i.detail!==0))return;A(i.nativeEvent);const N=y(i)??ge;R(N,f?1:-1,void 0,i.nativeEvent)},onPointerDown(i){var B;const P=!i.button||i.button===0,N=l||(f?b:u);i.defaultPrevented||m||!P||N||(w.current=i.pointerType,T.current=!1,k.current=!0,M.current={x:i.clientX,y:i.clientY},A(i.nativeEvent),i.pointerType!=="touch"?(i.preventDefault(),(B=t.current)==null||B.focus(),n(f,i)):D.current=window.setTimeout(()=>{const q=S.current;S.current=0,q!=null&&q<St?(T.current=!0,n(f,i)):o()},_t))},onPointerMove(i){if(l||m||(f?b:u)||i.pointerType!=="touch"||!k.current)return;S.current!=null&&(S.current+=1);const{x:N,y:B}=M.current,q=N-i.clientX,oe=B-i.clientY;q**2+oe**2>Tt**2&&o()},onMouseEnter(i){const P=l||m||(f?b:u);i.defaultPrevented||P||!k.current||V.current||n(f,i)},onMouseLeave(){V.current||o()},onMouseUp(){V.current||o()}},C)},[E,l,I,y,v,R,t,x,D,b,u,k,_,S,m,d,n,o,L]);return s.useMemo(()=>({getCommonButtonProps:g}),[g])}const hn=s.forwardRef(function(t,n){const{render:o,className:r,disabled:a=!1,...c}=t,{state:x,inputRef:l,startAutoChange:m,stopAutoChange:v,minWithDefault:d,maxWithDefault:y,value:R,inputValue:E,disabled:I,readOnly:L,id:S,setValue:D,getStepAmount:k,incrementValue:_,allowInputSyncRef:M,formatOptionsRef:V,valueRef:T,isPressedRef:w,intentionalTouchCheckTimeoutRef:u,movesAfterTouchRef:b,locale:g}=Ne(),{getCommonButtonProps:f}=Qe({inputRef:l,startAutoChange:m,stopAutoChange:v,minWithDefault:d,maxWithDefault:y,value:R,inputValue:E,disabled:a||I,readOnly:L,id:S,setValue:D,getStepAmount:k,incrementValue:_,allowInputSyncRef:M,formatOptionsRef:V,valueRef:T,isPressedRef:w,intentionalTouchCheckTimeoutRef:u,movesAfterTouchRef:b,locale:g}),C=s.useCallback(i=>f(!0,i),[f]),{renderElement:A}=xe({propGetter:C,ref:n,render:o??"button",state:x,className:r,extraProps:c});return A()}),yn=s.forwardRef(function(t,n){const{render:o,className:r,disabled:a=!1,...c}=t,{allowInputSyncRef:x,disabled:l,formatOptionsRef:m,getStepAmount:v,id:d,incrementValue:y,inputRef:R,inputValue:E,intentionalTouchCheckTimeoutRef:I,isPressedRef:L,maxWithDefault:S,minWithDefault:D,movesAfterTouchRef:k,readOnly:_,setValue:M,startAutoChange:V,state:T,stopAutoChange:w,value:u,valueRef:b,locale:g}=Ne(),{getCommonButtonProps:f}=Qe({inputRef:R,startAutoChange:V,stopAutoChange:w,minWithDefault:D,maxWithDefault:S,value:u,inputValue:E,disabled:a||l,readOnly:_,id:d,setValue:M,getStepAmount:v,incrementValue:y,allowInputSyncRef:x,formatOptionsRef:m,valueRef:b,isPressedRef:L,intentionalTouchCheckTimeoutRef:I,movesAfterTouchRef:k,locale:g}),C=s.useCallback(i=>f(!1,i),[f]),{renderElement:A}=xe({propGetter:C,ref:n,render:o??"button",state:T,className:r,extraProps:c});return A()}),gn=s.forwardRef(function(t,n){const{render:o,className:r,...a}=t,{allowInputSyncRef:c,autoFocus:x,disabled:l,formatOptionsRef:m,getAllowedNonNumericKeys:v,getStepAmount:d,id:y,incrementValue:R,inputMode:E,inputValue:I,invalid:L,max:S,mergedRef:D,min:k,name:_,readOnly:M,required:V,setValue:T,state:w,valueRef:u,setInputValue:b,locale:g}=Ne(),{labelId:f,validationMode:C,setTouched:A,setFocused:i}=be(),{getInputValidationProps:P,getValidationProps:N,commitValidation:B,inputRef:q}=Je(),oe=s.useRef(!1),ve=Ve(n,q,D),W=s.useCallback((se={})=>re({id:y,required:V,autoFocus:x,name:_,disabled:l,readOnly:M,inputMode:E,value:I,ref:ve,type:"text",autoComplete:"off",autoCorrect:"off",spellCheck:"false","aria-roledescription":"Number field","aria-invalid":L||void 0,"aria-labelledby":f,suppressHydrationWarning:!0,onFocus(p){if(p.defaultPrevented||M||l||oe.current)return;oe.current=!0,i(!0);const F=p.currentTarget,H=F.value.length;F.setSelectionRange(H,H)},onBlur(p){if(p.defaultPrevented||M||l)return;if(A(!0),i(!1),C==="onBlur"&&B(u.current),c.current=!0,I.trim()===""){T(null);return}const F=ye(I,g,m.current);F!==null&&T(F,p.nativeEvent)},onChange(p){if(p.nativeEvent.defaultPrevented)return;c.current=!1;const F=p.target.value;if(F.trim()===""){b(F),T(null,p.nativeEvent);return}if(p.isTrusted){b(F);return}const H=ye(F,g,m.current);H!==null&&(b(F),T(H,p.nativeEvent))},onKeyDown(p){if(p.defaultPrevented||M||l)return;const F=p.nativeEvent;c.current=!0;const H=v();let K=H.includes(p.key);const{decimal:de,currency:fe,percentSign:me}=Ae([],m.current),ie=p.currentTarget.selectionStart,ee=p.currentTarget.selectionEnd,ae=ie===0&&ee===I.length;if(p.key==="-"&&H.includes("-")){const $=ie===0&&ee===1&&I[0]==="-";K=!I.includes("-")||ae||$}[de,fe,me].forEach($=>{if(p.key===$){const pe=I.indexOf($),Ce=ie===pe&&ee===pe+1;K=!I.includes($)||ae||Ce}});const Re=/^[0-9]$/.test(p.key),Pe=Me.test(p.key),Ee=je.test(p.key),z=["Backspace","Delete","ArrowLeft","ArrowRight","Tab","Enter"].includes(p.key);if(p.which===229||p.altKey||p.ctrlKey||p.metaKey||K||Re||Pe||Ee||z)return;const ue=ye(I,g,m.current),Y=d(p)??ge;p.preventDefault(),p.key==="ArrowUp"?R(Y,1,ue,F):p.key==="ArrowDown"?R(Y,-1,ue,F):p.key==="Home"&&k!=null?T(k,F):p.key==="End"&&S!=null&&T(S,F)},onPaste(p){if(p.defaultPrevented||M||l)return;p.preventDefault();const H=(p.clipboardData||window.Clipboard).getData("text/plain"),K=ye(H,g,m.current);K!==null&&(c.current=!1,T(K,p.nativeEvent),b(H))}},P(N(se))),[P,N,y,V,x,_,l,M,E,I,L,f,i,A,C,m,B,u,T,v,d,k,S,R,b,c,g,ve]),le=Ve(n,D),{renderElement:ke}=xe({propGetter:W,ref:le,render:o??"input",className:r,state:w,extraProps:a,customStyleHookMapping:Jt});return ke()}),bn="_Group_yu5rq_14",xn="_Input_yu5rq_18",vn="_Decrement_yu5rq_38",Rn="_Increment_yu5rq_39",we={Group:bn,Input:xn,Decrement:vn,Increment:Rn},En=e=>s.createElement("svg",{width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("rect",{x:2.57846,y:2.5,width:20,height:20,rx:5,fill:"#32ADE6"}),s.createElement("path",{d:"M9.57846 12.5H15.5785",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M12.5785 9.5L12.5785 15.5",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Cn=e=>s.createElement("svg",{width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("rect",{x:2.42154,y:2.5,width:20,height:20,rx:5,fill:"#32ADE6"}),s.createElement("path",{d:"M9.42154 12.5H15.4215",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}));function wn(e){return h.jsx(mn,{...e,children:h.jsxs(pn,{className:we.Group,children:[h.jsx(yn,{className:we.Decrement,children:h.jsx(Cn,{})}),h.jsx(gn,{className:we.Input}),h.jsx(hn,{className:we.Increment,children:h.jsx(En,{})})]})})}const ne=Object.values([tt,nt,rt]),_e=[{title:"Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",to:"#",days:1,description:"Lorem ipsum dolar sit amet, rilen out seed cityfron.",image:ne[0].default},{title:"Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",to:"#",days:3,description:"Lorem ipsum dolar sit amet, rilen out seed cityfron.",image:ne[1].default},{title:"Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",to:"#",days:5,description:"Lorem ipsum dolar sit amet, rilen out seed cityfron.",image:ne[2].default},{title:"Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",to:"#",days:7,description:"Lorem ipsum dolar sit amet, rilen out seed cityfron.",image:ne[0].default},{title:"Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",to:"#",days:15,description:"Lorem ipsum dolar sit amet, rilen out seed cityfron.",image:ne[1].default},{title:"Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",to:"#",days:30,description:"Lorem ipsum dolar sit amet, rilen out seed cityfron.",image:ne[2].default}];function Vn(){const e=Math.max(..._e.map(r=>r.days)),[t,n]=s.useState(_e),o=r=>{const a=r!==null?_e.filter(c=>c.days>=r):_e;n(a)};return h.jsxs("div",{className:ce.rootContainer,children:[h.jsx(it,{}),h.jsxs("div",{className:ce.carouselContainer,children:[h.jsx(et,{images:ne.map(r=>r.default)}),h.jsx("div",{className:ce.carouselText,children:"Nossas rotas"})]}),h.jsxs("div",{className:ce.numberContainer,children:[h.jsx("p",{children:"Quantos dias você espera passar ?"}),h.jsx(wn,{min:1,max:e,defaultValue:1,onValueChange:o})]}),h.jsx("div",{className:ce.routesContainer,children:t.map(r=>h.jsx("div",{className:ce.routesItems,children:h.jsx(Et,{to:r.to,title:r.title,description:r.description,days:r.days,image:r.image})}))})]})}export{Vn as default};
