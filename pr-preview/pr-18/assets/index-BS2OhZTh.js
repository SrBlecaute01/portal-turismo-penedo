import{_ as F,a as x,b as u}from"./slider-3-BXydcuXf.js";import{j as a,N as h}from"./index-B92uzYiD.js";import{N as j}from"./Navbar-XcsIoOGp.js";import{C as v}from"./SliderCards-CrhYMwZT.js";import{C}from"./Carousel-CRQLtGtt.js";import"./navigation-CIopVSK0.js";const E="_card_1w2kx_1",N="_card_img_1w2kx_13",g="_card_content_1w2kx_19",f="_card_date_1w2kx_26",b="_card_routeDay_1w2kx_38",R="_dayNumber_1w2kx_50",z="_card_info_1w2kx_56",U="_card_title_1w2kx_60",k="_expanded_card_1w2kx_67",w="_stars_1w2kx_75",y="_no_stars_1w2kx_80",q="_card_description_1w2kx_85",t={card:E,card_img:N,card_content:g,card_date:f,card_routeDay:b,dayNumber:R,card_info:z,card_title:U,expanded_card:k,stars:w,no_stars:y,card_description:q};let S=["jan","fev","mar","abr","maio","jun","jul","ago","set","out","nov","dez"];function s({title:e,to:i,stars:r,imageUrl:l,date:d,routeDay:n,description:_,isExpanded:p}){let m="",c=1;return d&&(m=d.getDate().toString(),c=d.getMonth(),(c<1||c>12)&&(console.error("Invalid month number: "+c),c=1)),a.jsxs("div",{className:p?t.expanded_card:t.card,children:[!!l&&a.jsx("img",{className:t.card_img,src:l,alt:e}),a.jsxs("div",{className:t.card_content,children:[!!d&&a.jsxs("div",{className:t.card_date,children:[a.jsx("span",{children:S[c-1]}),a.jsx("span",{className:t.dayNumber,children:m})]}),!!n&&a.jsxs("div",{className:t.card_routeDay,children:[a.jsx("span",{className:t.dayNumber,children:Math.floor(Number(n))}),a.jsx("span",{children:n==1?"dia":"dias"})]}),a.jsxs("div",{className:t.card_info,children:[a.jsx(h,{to:i,className:t.card_title,children:e}),!!r&&B(r),!!_&&a.jsx("div",{className:t.card_description,children:_})]})]})]})}function B(e=-1){let r="";if(e<0||e>5)return a.jsx("div",{className:t.no_stars,children:"Sem avaliações"});e=Math.round(e);for(let l=1;l<=5;l++)r+=l<=e?"⭐":"☆";return a.jsx("div",{className:t.stars,children:r})}const T="_rootContainer_qco2z_1",D="_slider_cards_qco2z_5",M="_card_list_qco2z_9",L="_horizontal_cards_qco2z_19",A="_carouselContainer_qco2z_28",H="_carouselText_qco2z_34",o={rootContainer:T,slider_cards:D,card_list:M,horizontal_cards:L,carouselContainer:A,carouselText:H},I=Object.values([F,x,u]);function Q(){let e="Lorem ipsum calypso voutom arumtac acadan çarcurt irfi cardeb oa poisqu andoche gonopa rámesin tobemo tempov oache gouom êsdef ériasv ouvo andop ropar ávoudi retal verop êsoapu rarmeu paladarfi carbemàvo tadee fazer oquequi zer ema tarmin hasau dade da pupun hacomca féeu vou naesta çãoda sdocas vouve rorexp anoes tádio vousa iránoi tecom osami goseu voume jogare uvou lano mangal dasgar çasvou nofor tedop resépio ede poisdo pointd oaçaí euque romediv ertir",i=[a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:5,imageUrl:"https://placehold.co/150x100/3388EE/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:5,imageUrl:"https://placehold.co/150x100/EE3388/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:5,imageUrl:"https://placehold.co/150x100/88EE33/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:5,imageUrl:"https://placehold.co/150x100/5533FF/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:5,imageUrl:"https://placehold.co/150x100/FF5533/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:5,imageUrl:"https://placehold.co/150x100/33FF55/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:4,imageUrl:"https://placehold.co/150x100/CC00FF/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:4,imageUrl:"https://placehold.co/150x100/FFCC00/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:4,imageUrl:"https://placehold.co/150x100/00FFCC/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:3,imageUrl:"https://placehold.co/150x100/0066FF/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:3,imageUrl:"https://placehold.co/150x100/FF0066/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:3,imageUrl:"https://placehold.co/150x100/66FF00/FFFFFF/"})];return a.jsxs("div",{className:o.rootContainer,children:[a.jsx(j,{}),a.jsxs("div",{className:o.carouselContainer,children:[a.jsx(C,{images:I.map(r=>r.default)}),a.jsx("div",{className:o.carouselText,children:"Principais Restaurantes"})]}),a.jsx("div",{className:o.slider_cards,children:a.jsx(v,{cards:i})}),a.jsxs("div",{className:o.card_list,children:[a.jsxs("div",{className:o.horizontal_cards,children:[a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:4.5,imageUrl:"https://placehold.co/150x100/3388EE/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",description:e,isExpanded:!0})]}),a.jsxs("div",{className:o.horizontal_cards,children:[a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:1,imageUrl:"https://placehold.co/150x100/EE3388/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",description:e,isExpanded:!0})]}),a.jsxs("div",{className:o.horizontal_cards,children:[a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",stars:3,imageUrl:"https://placehold.co/150x100/88EE33/FFFFFF/"}),a.jsx(s,{title:"Restaurant Exemplo Calipso",to:"#",description:e,isExpanded:!0})]})]})]})}export{Q as default};
