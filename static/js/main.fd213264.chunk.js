(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{118:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),s=t.n(l),c=(t(83),t(75)),i=t(6),o=!0,m={gradientColors:"#8CA4C0, #8CA4C0, #747F8D, #869F96, #B1C7BD, #B1C7BD",firstName:"Sassan",middleName:"",lastName:"Shokoohi",message:" Passionate about changing the world with technology. ",icons:[{image:"fa-github",url:"https://github.com/sassansh"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/sassanshokoohi/"}]},u={show:!0,heading:"About Me",imageLink:t(49),imageSize:250,message:"Hello! My name is Sassan and I\u2019m currently a 4th year student at the University of British Columbia pursuing a Bachelor of Computer Science degree. I also have a prior Bachelor of Science from UBC in Chemistry, Biology & Environmental Sciences. My love for technology started when I first touched a computer at my dad\u2019s office when I was 7. Fast-forward to today, and I\u2019ve worked on several personal projects, developed a healthcare analytics platform for a start-up, and contributed to a student-led mental health web app.",resume:t(84)},d={show:!0,heading:"Recent Projects",gitHubUsername:"sassansh",reposLength:30,specificRepos:[]},f={show:!1,heading:"Leadership",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",images:[{img:t(49),label:"First slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{img:t(49),label:"Second slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."}],imageSize:{width:"615",height:"450"}},g={show:!0,heading:"Skills",hardSkills:[{name:"Python",value:90},{name:"SQL",value:75},{name:"Data Structures",value:85},{name:"C / C# / C++",value:55},{name:"HTML/CSS",value:80},{name:"JavaScript",value:90},{name:"React",value:80},{name:"VueJS",value:75}],softSkills:[{name:"Visual Studio",value:80},{name:"PyCharm",value:80},{name:"Node",value:80},{name:"Linux",value:75},{name:"Mac",value:85},{name:"Windows",value:70}]},p=!0,h="Get In Touch",b="I'm currently working full-time and studying part time! If you know of any positions available for the future, if you have any questions, or if you just want to say hi, please feel free to email me at",E="sassansh@student.ubc.ca",v={show:!0,heading:"Experiences",data:[{role:"Healthcare Software Engineer",companylogo:t(85),date:"September 2020 \u2013 Present"},{role:"Computer Science TA (CPSC 110)",companylogo:t(86),date:"September 2019 \u2013 Present"},{role:"Lead Software Engineer",companylogo:t(87),date:"February 2019 \u2013 Present"},{role:"Technical TA (COMM 395)",companylogo:t(88),date:"August 2017 \u2013 April 2020"},{role:"Database & IT Assistant",companylogo:t(89),date:"February 2016 \u2013 August 2017"}]},w=t(67),k=t.n(w),y=t(23),N=t(37),S=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,s=e.icons;return r.a.createElement(N.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(y.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(k.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},s.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),x=t(8),j=t(20),C=t.n(j),_=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),O=function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,s=e.resume,c=r.a.useState(""),i=Object(x.a)(c,2),o=i[0],m=i[1],u=r.a.useState(Boolean(n)),d=Object(x.a)(u,2),f=d[0],g=d[1];return r.a.useEffect((function(){if(n&&!_.test(n)){try{var e=C.a.get("https://www.instagram.com/"+n+"/?__a=1");m(e.data.graphql.user.profile_pic_url_hd)}catch(a){g(!1),console.error(a.message)}}else m(n)}),[n]),r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},f&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:o,alt:"profilepicture",width:l,height:l})),r.a.createElement("div",{className:"col-lg-".concat(f?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),s&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:s,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},L=t(28),R=t.n(L),P=t(68),z=t(77),I=t(38),T=t(32),A=t(31),B=t(36),M=t(29),F=t.n(M),D=function(e){var a=e.svn_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"".concat(a,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"))},W=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),s=Object(x.a)(l,2),c=s[0],i=s[1],o=Object(n.useCallback)(Object(I.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(a);case 3:return t=e.sent,e.abrupt("return",i(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){o()}),[o]);var m=[],u=0;for(var d in c)m.push(d),u+=c[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.length?m.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(c[e]/u*1e3)/10," %")})):"code yet to be deployed.")},H=function(e){var a=e.star_count,t=e.repo_url,l=e.pushed_at,s=Object(n.useState)("0 mints"),c=Object(x.a)(s,2),i=c[0],o=c[1],m=Object(n.useCallback)((function(){var e=new Date(l),a=(new Date).getTime()-e.getTime(),t=Math.trunc(a/1e3/60/60);if(t<24){if(t<1)return o("just now");var n=1===t?"hour":"hours";return o("".concat(t.toString()," ").concat(n," ago"))}var r=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return o("on ".concat(r))}),[l]);return Object(n.useEffect)((function(){m()}),[m]),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:t+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},a))),r.a.createElement("small",{className:"text-muted"},"Updated ",i))},U=function(e){var a=e.value,t=a.name,n=a.description,l=a.svn_url,s=a.stargazers_count,c=a.languages_url,i=a.pushed_at;return r.a.createElement(A.a,{md:6},r.a.createElement(B.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,{as:"h5"},t||r.a.createElement(F.a,null)," "),r.a.createElement(B.a.Text,null,n?n||r.a.createElement(F.a,{count:3}):""," "),l?r.a.createElement(D,{svn_url:l}):r.a.createElement(F.a,{count:2}),r.a.createElement("hr",null),c?r.a.createElement(W,{languages_url:c,repo_url:l}):r.a.createElement(F.a,{count:3}),a?r.a.createElement(H,{star_count:s,repo_url:l,pushed_at:i}):r.a.createElement(F.a,null))))},q={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},J="https://api.github.com",V=function(e){var a=e.heading,t=e.username,l=e.length,s=e.specfic,c="".concat(J,"/users/").concat(t,"/repos?sort=updated&direction=desc"),i="".concat(J,"/repos/").concat(t),o=new Array(l+s.length).fill(q),m=Object(n.useState)([]),u=Object(x.a)(m,2),d=u[0],f=u[1],g=Object(n.useCallback)(Object(I.a)(R.a.mark((function e(){var a,t,n,r,o,m;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,C.a.get(c);case 4:t=e.sent,a=Object(z.a)(t.data.slice(0,l)),e.prev=6,n=Object(P.a)(s),e.prev=8,n.s();case 10:if((r=n.n()).done){e.next=18;break}return o=r.value,e.next=14,C.a.get("".concat(i,"/").concat(o));case 14:m=e.sent,a.push(m.data);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(6),console.error(e.t1.message);case 31:f(a),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2.message);case 37:case"end":return e.stop()}}),e,null,[[1,34],[6,28],[8,20,23,26]])}))),[c,l,s,i]);return Object(n.useEffect)((function(){g()}),[g]),r.a.createElement(N.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(y.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(T.a,null,d.length?d.map((function(e,a){return r.a.createElement(U,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):o.map((function(e,a){return r.a.createElement(U,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},K=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(y.a,null,e.children,r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/sassansh","aria-label":"My GitHub"},"Sassan Shokoohi")," ","using ",r.a.createElement("i",{className:"fab fa-react"})))},G="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,Z="undefined"!==typeof window;function Q(e){var a=e.element,t=e.useWindow;if(!Z)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function X(e,a,t,r,l){var s=Object(n.useRef)(Q({useWindow:r})),c=null,i=function(){var a=Q({element:t,useWindow:r});e({prevPos:s.current,currPos:a}),s.current=a,c=null};G((function(){if(Z){var e=function(){l?null===c&&(c=setTimeout(i,l)):i()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),c&&clearTimeout(c)}}}),a)}X.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var Y=function(e){var a=r.a.useState(null),t=Object(x.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},$=t(35),ee=t(19),ae=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(x.a)(t,2),s=l[0],c=l[1],i=Object(n.useState)(0),o=Object(x.a)(i,2),f=o[0],p=o[1],h=r.a.useRef(),b=Y(h),E=b?b.bottom:0;return X((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?c(!0):c(!1),p(t.y))}),[E]),r.a.useEffect((function(){b&&(E-f>=a.current.offsetTop?c(!1):c(!0))}),[E,b,a,f]),r.a.createElement($.a,{ref:h,className:" fixed-top  ".concat(s?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement($.a.Brand,{className:"brand",href:"/#home"},"<".concat(m.firstName," />")),r.a.createElement($.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement($.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ee.a,{className:"mr-auto"},d.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/#projects"},"Projects"),r.a.createElement(ee.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"),u.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/#aboutme"},"About"),g.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/#skills"},"Skills"))))})),te=t(51),ne=t(73),re=t(72);var le=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return r.a.createElement("div",{style:{width:"95%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a),r.a.createElement(re.a,{className:n?" progress-bar-animation":"progress",now:t}))};function se(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(le,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var ce=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{xs:12,md:6},r.a.createElement(se,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(A.a,{xs:12,md:6},r.a.createElement(se,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var ie=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=r.a.useRef(),s=r.a.useState(!1),c=Object(x.a)(s,2),i=c[0],o=c[1];return X((function(e){e.prevPos;var a=e.currPos;!i&&a.y-400<0&&o(!0)}),[],l),r.a.createElement(N.a,{ref:l,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(y.a,{className:"p-5 "},r.a.createElement("h2",{ref:l,className:"display-4 pb-5 text-center"},a),r.a.createElement(ne.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(te.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Languages"},r.a.createElement(T.a,{className:"pt-3 px-1"},r.a.createElement(ce,{skills:t,isScrolled:i}))),r.a.createElement(te.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"IDEs & Frameworks"},r.a.createElement(T.a,{className:"pt-3 px-1"},r.a.createElement(ce,{skills:n,isScrolled:i}))))))},oe=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n)},n),"."))},me=t(47),ue=function(e){var a=e.heading,t=e.message,n=e.img,l=e.imageSize;return r.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("p",{className:"lead"},t)),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(me.a,null,n.map((function(e,a){return r.a.createElement(me.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide",width:l.width,height:l.height}),r.a.createElement(me.a.Caption,null,r.a.createElement("h3",null,e.label),r.a.createElement("p",null,e.paragraph)))})))))))},de=function(e){var a=e.data;return r.a.createElement(A.a,{lg:"6"},r.a.createElement("div",{className:"pb-5 text-center"},r.a.createElement("img",{className:" bg-white mb-3",src:a.companylogo,alt:""}),r.a.createElement("p",{className:"lead"},a.role,r.a.createElement("br",null),a.date)))},fe=function(e){var a=e.experiences;return r.a.createElement("section",{className:"section"},r.a.createElement(y.a,null,r.a.createElement(N.a,{fluid:!0,className:"bg-white"},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a.heading),r.a.createElement(T.a,null,a.data.map((function(e){return r.a.createElement(de,{key:e.company,data:e})}))))))},ge=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(O,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),v.show&&r.a.createElement(fe,{experiences:v}),d.show&&r.a.createElement(V,{heading:d.heading,username:d.gitHubUsername,length:d.reposLength,specfic:d.specificRepos}),f.show&&r.a.createElement(ue,{heading:f.heading,message:f.message,img:f.images,imageSize:f.imageSize}),g.show&&r.a.createElement(ie,{heading:g.heading,hardSkills:g.hardSkills,softSkills:g.softSkills}))})),pe=function(){var e=r.a.useRef();return r.a.createElement(c.a,{basename:"/"},o&&r.a.createElement(ae,{ref:e}),r.a.createElement(i.a,{path:"/",exact:!0,component:function(){return r.a.createElement(ge,{ref:e})}}),r.a.createElement(K,null,p&&r.a.createElement(oe,{heading:h,message:b,email:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,a,t){e.exports=t.p+"static/media/sassansh.cc763176.png"},78:function(e,a,t){e.exports=t(118)},83:function(e,a,t){},84:function(e,a,t){e.exports=t.p+"static/media/resume.3a027187.pdf"},85:function(e,a,t){e.exports=t.p+"static/media/xerusmedical.235cbe9f.png"},86:function(e,a,t){e.exports=t.p+"static/media/ubc.619da0d6.png"},87:function(e,a,t){e.exports=t.p+"static/media/clb.2a998ae4.png"},88:function(e,a,t){e.exports=t.p+"static/media/sauder.e10bf963.png"},89:function(e,a,t){e.exports=t.p+"static/media/ubcpsych.b65605a5.png"}},[[78,1,2]]]);
//# sourceMappingURL=main.fd213264.chunk.js.map