import{d as f,o as r,c as i,e,g as d,t as y,b as s,F as h,r as b,i as k,p as x,j as C,v,k as w,l as T,m as S,n as D,a as c,w as p,_ as F}from"./entry.DDJE2Rwl.js";const $=e("li",null,[e("a",{href:"https://discord.com/users/205297053448929280",target:"_blank"}," sebimoe"),d(" on Discord - for quickest response. "),e("a",{href:"https://discord.gg/fFDE67BG8A",target:"_blank"}," Join this server"),d(" if you can't message me directly. ")],-1),V=e("li",null," Contact form below - second quickest option. ",-1),q=e("p",null," ※ I will try my best, but I may not respond to emails quickly. Consider using discord or the form below instead. ",-1),B=f({__name:"ContactDetails",setup(u){let t="sebi@";t+="sebi.moe";const o="mailto:"+t+"?subject=%5Bfrom%20sebi.moe%2Fcontact%5D%20type%20your%20subject%20here&body=Hey%2C%0A%0A";return(a,n)=>(r(),i(h,null,[e("ul",null,[$,V,e("li",null,[d(" Email me at "),e("a",{href:o},y(s(t)),1)])]),q],64))}}),E=Symbol.for("nuxt:client-only"),N=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(u,{slots:t,attrs:o}){const a=b(!1);return k(()=>{a.value=!0}),x(E,!0),n=>{var _;if(a.value)return(_=t.default)==null?void 0:_.call(t);const l=t.fallback||t.placeholder;if(l)return l();const m=n.fallback||n.placeholder||"",g=n.fallbackTag||n.placeholderTag||"span";return i(g,o,m)}}}),j=["action"],A=["value"],I=e("p",null,[e("label",{for:"contact-name-field"},[e("b",null,"Your name or nickname."),d(" (optional) ")]),e("input",{id:"contact-name-field",name:"name",type:"text",placeholder:"Name or nickname (optional)",maxlength:"500"})],-1),M=e("p",null,[e("label",{for:"contact-info-field"},[e("b",null,"Your contact information."),d(" Email, discord, or phone are best. ")]),e("input",{id:"contact-info-field",name:"contactInfo",type:"text",placeholder:"Contact information",required:"",maxlength:"500"})],-1),O=e("label",{for:"contact-message-field"},[e("b",null,"Your message.")],-1),U={key:0},L=e("input",{type:"submit",value:"Send"},null,-1),R={key:1},Y=f({__name:"ContactForm",setup(u){const t=b(""),{public:{contactEndpointUrl:o}}=S(),a=[window.location.protocol,"//",window.location.host,"/contact-result"].join("");return(n,l)=>typeof s(o)=="string"?(r(),i("form",{key:0,action:s(o),method:"POST",class:"contact-form"},[e("input",{type:"hidden",name:"redirectUrl",value:s(a)},null,8,A),I,M,e("p",null,[O,C(e("textarea",{"onUpdate:modelValue":l[0]||(l[0]=m=>w(t)?t.value=m:null),id:"contact-message-field",name:"message",placeholder:"Message...",required:"",maxlength:"1500"},null,512),[[v,s(t)]]),s(t).length>1500?(r(),i("div",U,"Sorry, the length limit for this field is 1500 characters.")):T("",!0)]),L],8,j)):(r(),i("p",R," Couldn't load contact form :( Please try another contact method (and let me know!). "))}}),H={},P=e("p",null,"If you would like to contact me, feel free to use one of the following:",-1);function G(u,t){const o=F,a=B,n=N,l=Y;return r(),i(h,null,[c(o,{text:"Contact me",noMarginTop:""}),P,c(n,{fallbackTag:"p",fallback:"Loading contact details..."},{default:p(()=>[c(a)]),_:1}),c(o,{text:"Send a message",level:2}),c(n,{fallbackTag:"p",fallback:"Loading contact form..."},{default:p(()=>[c(l)]),_:1})],64)}const z=D(H,[["render",G]]);export{z as default};
