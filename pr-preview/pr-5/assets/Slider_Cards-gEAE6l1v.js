import{j as a,N as x,r as u}from"./index-TBj0cGP9.js";const b="_card_1w2kx_1",h="_card_img_1w2kx_13",f="_card_content_1w2kx_19",v="_card_date_1w2kx_26",N="_card_routeDay_1w2kx_38",j="_dayNumber_1w2kx_50",k="_card_info_1w2kx_56",p="_card_title_1w2kx_60",w="_expanded_card_1w2kx_67",y="_stars_1w2kx_75",g="_no_stars_1w2kx_80",B="_card_description_1w2kx_85",r={card:b,card_img:h,card_content:f,card_date:v,card_routeDay:N,dayNumber:j,card_info:k,card_title:p,expanded_card:w,stars:y,no_stars:g,card_description:B};let S=["jan","fev","mar","abr","maio","jun","jul","ago","set","out","nov","dez"];function A({title:s,to:n,stars:c,imageUrl:t,date:o,routeDay:d,description:l,isExpanded:m}){let i="",e=1;return o&&(i=o.getDate().toString(),e=o.getMonth(),(e<1||e>12)&&(console.error("Invalid month number: "+e),e=1)),a.jsxs("div",{className:m?r.expanded_card:r.card,children:[!!t&&a.jsx("img",{className:r.card_img,src:t,alt:s}),a.jsxs("div",{className:r.card_content,children:[!!o&&a.jsxs("div",{className:r.card_date,children:[a.jsx("span",{children:S[e-1]}),a.jsx("span",{className:r.dayNumber,children:i})]}),!!d&&a.jsxs("div",{className:r.card_routeDay,children:[a.jsx("span",{className:r.dayNumber,children:Math.floor(Number(d))}),a.jsx("span",{children:d==1?"dia":"dias"})]}),a.jsxs("div",{className:r.card_info,children:[a.jsx(x,{to:n,className:r.card_title,children:s}),!!c&&C(c),!!l&&a.jsx("div",{className:r.card_description,children:l})]})]})]})}function C(s=-1){let c="";if(s<0||s>5)return a.jsx("div",{className:r.no_stars,children:"Sem avaliações"});s=Math.round(s);for(let t=1;t<=5;t++)c+=t<=s?"⭐":"☆";return a.jsx("div",{className:r.stars,children:c})}const R="_slider_container_119rv_2",D="_scrollable_cards_119rv_10",M="_nav_button_119rv_24",E="_left_btn_119rv_43",L="_right_btn_119rv_47",_={slider_container:R,scrollable_cards:D,nav_button:M,left_btn:E,right_btn:L};function H({cards:s}){const n=u.useRef(null);function c(){n.current&&n.current.scrollBy({left:-250,behavior:"smooth"})}function t(){n.current&&n.current.scrollBy({left:250,behavior:"smooth"})}return a.jsxs("div",{className:_.slider_container,children:[a.jsx("button",{className:_.nav_button+" "+_.left_btn,onClick:c,children:"❮"}),a.jsx("div",{className:_.scrollable_cards,ref:n,children:s}),a.jsx("button",{className:_.nav_button+" "+_.right_btn,onClick:t,children:"❯"})]})}export{H as C,A as a};
