(this["webpackJsonpmint-portfolio-template"]=this["webpackJsonpmint-portfolio-template"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),i=a.n(r),s=a(4),o=a(6),c=a(8),m=a(7),d=(a(45),a(26)),u=a.n(d),A=a(2),p=(a(23),a.p+"static/media/logo.3af1c116.svg"),v=a.p+"static/media/mobile-menu.61f79789.svg",g=function(e){return l.a.createElement("nav",{className:"Navbar ".concat(e.userIsScrolled?"":"extraLargeNavbar")},l.a.createElement("div",{className:"wrapper flex-s-between"},l.a.createElement("div",null,l.a.createElement(A.Link,{to:"hero",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement("img",{src:p,alt:"logo",className:"pointer"}))),l.a.createElement("div",{className:"mobile__menu",onClick:e.mobileMenuOpen},l.a.createElement("img",{src:v,alt:"menu"})),l.a.createElement("div",{className:"desktop__menu"},l.a.createElement("ul",{className:"flex-s-between"},l.a.createElement("li",null,l.a.createElement(A.Link,{activeClass:"active-link",to:"portfolio",spy:!0,smooth:!0,offset:-70,duration:500},"SHOWCASE")),l.a.createElement("li",null,l.a.createElement(A.Link,{activeClass:"active-link",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"ABOUT ME")),l.a.createElement("li",null,l.a.createElement(A.Link,{activeClass:"active-link",to:"blog",spy:!0,smooth:!0,offset:-70,duration:500},"BLOG")),l.a.createElement("li",null,l.a.createElement(A.Link,{activeClass:"active-link",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"CONTACT"))))))},E=a.p+"static/media/mobile-close.1ad1aa67.svg",f=a.p+"static/media/logo-yellow.249beb6b.svg",b=function(e){return l.a.createElement("div",{className:"mobile__navbar ".concat(e.isOpen?"mobile__open":"")},l.a.createElement("div",{className:"mobile__navbar-close",onClick:e.closeMobileMenu},l.a.createElement("img",{src:E,alt:"close"})),l.a.createElement("div",{className:"mobile__navbar-logo flex-center"},l.a.createElement(A.Link,{to:"hero",spy:!0,smooth:!0,offset:0,duration:500,onClick:e.closeMobileMenu},l.a.createElement("img",{src:f,alt:"logo"}))),l.a.createElement("div",{className:"mobile__navbar-menu"},l.a.createElement("ul",null,l.a.createElement("li",{className:"flex-center"},l.a.createElement(A.Link,{activeClass:"active-link",to:"portfolio",spy:!0,smooth:!0,offset:-70,duration:500,onClick:e.closeMobileMenu},"SHOWCASE")),l.a.createElement("li",{className:"flex-center"},l.a.createElement(A.Link,{activeClass:"active-link",to:"about",spy:!0,smooth:!0,offset:-70,duration:500,onClick:e.closeMobileMenu},"ABOUT ME")),l.a.createElement("li",{className:"flex-center"},l.a.createElement(A.Link,{activeClass:"active-link",to:"blog",spy:!0,smooth:!0,offset:-70,duration:500,onClick:e.closeMobileMenu},"BLOG")),l.a.createElement("li",{className:"flex-center"},l.a.createElement(A.Link,{activeClass:"active-link",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,onClick:e.closeMobileMenu},"CONTACT")))))},h=function(e){return l.a.createElement("div",{onClick:e.closeMobileMenu,className:"backdrop ".concat(e.isOpen?"backdrop__open":"")})},C=a(1),K=(a(77),a.p+"static/media/hero-image.dd5586d3.png"),x=(a(78),function(e){return l.a.createElement("div",{className:"button"},l.a.createElement(A.Link,{className:"button-link",to:e.target,spy:!0,smooth:!0,offset:-70,duration:500},e.label))}),N=function(){return l.a.createElement("div",{className:"hero",id:"hero"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(C.Row,null,l.a.createElement(C.Col,{md:12,lg:6},l.a.createElement("div",{className:"hero-info"},l.a.createElement("h1",{className:"weight800 font60"},"Welcome agents! \u6b22\u8fce\uff01\uc5b4\uc11c \uc624\uc2ed\uc2dc\uc624! "),l.a.createElement("h1",{className:"weight800 font60"},"Conas ata tu! ",l.a.createElement("br",null)," \u3088\u3046\u3053\u305d!"),l.a.createElement("p",{className:"font12"},"Location-based, Fantasy, Massively multiplayers online real-time strategy game!"),l.a.createElement(x,{label:"SEND MESSAGE",target:"contact"}))),l.a.createElement(C.Col,{md:12,lg:6},l.a.createElement("div",{className:"hero-image"},l.a.createElement("img",{src:K,alt:"hero"}))))))},B=a(28),w=a(39),V=a.n(w),F=(a(79),a.p+"static/media/arrow.69aeab45.svg"),L=a.p+"static/media/preview.67177ed8.png",y=a.p+"static/media/preview.dcc1b45a.png",I=a.p+"static/media/preview.559d11f2.png",k=a.p+"static/media/preview.e03e4779.png",W=a.p+"static/media/preview.780c4b89.png",Y=a.p+"static/media/preview.daf3339f.png",Q=(a(80),function(e){return l.a.createElement(C.Row,null,l.a.createElement(C.Col,{className:"big__title"},l.a.createElement("h2",{className:"weight800 font60 padding40"},e.title)))}),T=(a(81),function(e){return l.a.createElement("div",{className:"portfolio__box"},l.a.createElement("img",{src:e.preview,alt:"project"}),l.a.createElement("div",{className:"portfolio__hover-info flex-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("p",{className:"font30 weight800"},e.title),l.a.createElement("p",{className:"font12 weight500"},e.tag))))}),M=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).filterGallery=function(e){var t,a=Object(B.a)(n.state.projects);t="all"!==e?a.filter((function(t){return t.tag===e})):a,n.setState({filterResult:t,pickedFilter:e,pickedFilterDropdown:"NEWEST"})},n.filterMenuHover=function(e){e?n.setState({filterMenuActive:!0}):n.setState({filterMenuActive:!1})},n.filterDropDownHandler=function(e){n.setState({pickedFilterDropdown:e,filterMenuActive:!1});var t,a=Object(B.a)(n.state.filterResult);"NEWEST"===e?t=a.sort((function(e,t){return e.id>t.id?1:-1})):"OLDEST"===e&&(t=a.sort((function(e,t){return e.id>t.id?1:-1})).reverse()),n.setState({filterResult:t})},n.state={projects:[{id:"1",preview:L,title:"Engineer Medal",tag:"awarded for installing mods on portals"},{id:"2",preview:y,title:"Choose a Side",tag:"Fight for the side you believe in"},{id:"3",preview:I,title:"Vanguard medal",tag:"The medal is no longer available"},{id:"4",preview:k,title:"Enlightened",tag:"Green Team"},{id:"5",preview:W,title:"Innovator medal",tag:"The medal is no longer available"},{id:"6",preview:Y,title:"Resistance",tag:"Blue Team"}],filterResult:null,pickedFilter:"all",filterMenuActive:!1,pickedFilterDropdown:"NEWEST"},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.filterGallery("all")}},{key:"render",value:function(){var e=this,t=null;this.state.filterResult&&(t=this.state.filterResult.map((function(e){return l.a.createElement(T,{preview:e.preview,key:e.id,title:e.title,tag:e.tag})})));var a=null;return this.state.filterMenuActive&&(a=l.a.createElement("div",{className:"portfolio__filter-menu shadow"},l.a.createElement("p",{className:"font12",onClick:function(){return e.filterDropDownHandler("NEWEST")}},"NEWEST"),l.a.createElement("p",{className:"font12",onClick:function(){return e.filterDropDownHandler("OLDEST")}},"OLDEST"))),l.a.createElement("div",{id:"portfolio"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(Q,{title:"SHOWCASE."}),l.a.createElement(C.Row,null,l.a.createElement(C.Col,{xs:12,sm:12,md:8,lg:9},l.a.createElement("div",{className:"portfolio__nav"},l.a.createElement("ul",null,l.a.createElement("li",{className:"all"===this.state.pickedFilter?"portfolio__nav-active font12":"font12",onClick:function(){return e.filterGallery("all")}},"ALL"),l.a.createElement("li",{className:"branding"===this.state.pickedFilter?"portfolio__nav-active font12":"font12",onClick:function(){return e.filterGallery("branding")}},"BRANDING"),l.a.createElement("li",{className:"illustrations"===this.state.pickedFilter?"portfolio__nav-active font12":"font12",onClick:function(){return e.filterGallery("illustrations")}},"ILLUSTRATIONS"),l.a.createElement("li",{className:"web"===this.state.pickedFilter?"portfolio__nav-active font12":"font12",onClick:function(){return e.filterGallery("web")}},"WEB")))),l.a.createElement(C.Col,{xs:12,sm:12,md:4,lg:3},l.a.createElement("div",{className:"portfolio__filter",onMouseEnter:function(){return e.filterMenuHover(!0)},onMouseLeave:function(){return e.filterMenuHover(!1)}},l.a.createElement("p",{className:"font12"},this.state.pickedFilterDropdown," FIRST"),l.a.createElement("img",{src:F,alt:"arrow"}),a))),l.a.createElement(V.a,{breakpointCols:{default:3,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"mint__gallery"},t),l.a.createElement(C.Row,{className:"flex-center padding40"},l.a.createElement(x,{label:"Contact Me",target:"contact"}))))}}]),a}(l.a.Component),U=a(17),O=a.n(U),S=(a(37),a(84),function(e){return l.a.createElement("div",{className:"partner__box flex-center"},l.a.createElement("img",{src:e.partner,alt:"partner"}))}),j=a.p+"static/media/partner01.7d2b415e.svg",P=a.p+"static/media/partner02.21d3407f.svg",G=a.p+"static/media/partner03.f1d2b401.svg",H=a.p+"static/media/partner04.ae8b0929.svg",X=a.p+"static/media/partner05.942eb9b2.svg",z=a.p+"static/media/partner06.b5ae4178.svg",R=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={partners:[{preview:j,id:"1"},{preview:P,id:"2"},{preview:G,id:"3"},{preview:H,id:"4"},{preview:X,id:"5"},{preview:z,id:"6"}]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=null;this.state.partners&&(e=this.state.partners.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(S,{partner:e.preview}))})));var t={grabCursor:!0,slidesPerView:1,spaceBetween:10,loop:!0,breakpoints:{1200:{slidesPerView:6,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:40},768:{slidesPerView:4,spaceBetween:30},640:{slidesPerView:3,spaceBetween:20},320:{slidesPerView:2,spaceBetween:10}}};return l.a.createElement(O.a,t,e)}}]),a}(l.a.Component),Z=(a(85),function(){return l.a.createElement("div",{id:"partners"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(R,null)))}),q=(a(86),a(87),function(e){return l.a.createElement("div",{className:"team__box flex-center"},l.a.createElement("img",{src:e.avatar,alt:"person"}),l.a.createElement("div",{className:"team__box-info"},l.a.createElement("p",{className:"font15 weight800"},e.name),l.a.createElement("p",{className:"font12 weight500"},e.job)))}),J=(a(88),function(){return l.a.createElement("div",{className:"team__info flex-center"},l.a.createElement("div",null,l.a.createElement("h4",{className:"font20 weight800"},"Why do we play and why should you join?"),l.a.createElement("p",{className:"font12 weight500"},"Choose your side, capture, deploy, link and create fields."),l.a.createElement("p",{className:"font12 weight500"},l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Ingress_(video_game)"},"Read More"))))}),D=a.p+"static/media/person01.d82db8ad.png",_=a.p+"static/media/person02.59fe327d.png",$=function(){return l.a.createElement("div",{id:"about"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(Q,{title:"ABOUT ME."}),l.a.createElement("p",{className:"font12"},"Ingress Augmented Reality (AR) mobile game player, ops planner, ops commander. ",l.a.createElement("br",null),"an adventurer, original creator, visual artist, thinker and doer.",l.a.createElement("br",null),'Ingress uses the mobile device GPS to locate and interact with "portals" which are in proximity to the player\'s real-world location. The portals are physical points of interest where "human creativity and ingenuity is expressed" often manifesting as public art such as statues and monuments, unique architecture, outdoor murals, historic buildings, local community hubs and other displays of human achievement.[5] The game uses the portals as elements of a science fiction backstory along with a continuous open narrative provided through various forms of media.',l.a.createElement("br",null),"Don\u2019t limit your challenges, challenge your limits!"),l.a.createElement(C.Row,null,l.a.createElement(C.Col,{md:12,lg:4},l.a.createElement(q,{avatar:D,name:"Luke Skywalker",job:"Across Russica linking art"})),l.a.createElement(C.Col,{md:12,lg:4},l.a.createElement(q,{avatar:_,name:"Han Solo",job:"Multi-layers fielding art"})),l.a.createElement(C.Col,{md:12,lg:4},l.a.createElement(J,null)))))},ee=(a(89),a.p+"static/media/preview.1580a541.png"),te=a.p+"static/media/preview.01beb2ab.png",ae=a.p+"static/media/preview.e39a0802.png",ne="data:image/png;base64,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",le="data:image/png;base64,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",re="data:image/png;base64,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",ie=(a(90),function(e){return l.a.createElement("div",{className:"blog__box"},l.a.createElement("div",{className:"blog__image"},l.a.createElement("img",{src:e.article.image,alt:"blog story"}),l.a.createElement("div",{className:"blog__hover flex-center"},l.a.createElement("h4",{className:"font30 weight800"},"READ MORE"))),l.a.createElement("div",{className:"blog__info"},l.a.createElement("h4",{className:"font15 weight800"},e.article.title),l.a.createElement("p",{className:"font12 weight500 padding10"},e.article.description),l.a.createElement("p",{className:"font12 weight500"},e.article.date)))}),se=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={stories:[{image:ee,id:"1",title:"APJ ops!",description:"In addition to the ongoing competition between the factions, there are several kinds of special events held on specific dates.",date:"Stay tuned"},{image:te,id:"2",title:"North and South America ops!",description:"Ingress is supported by advertising. Companies would be able to pay for their locations to be used as portals in the game, thus making their stores a pilgrimage site for Ingress players, which may translate into real-world sales",date:"Stay tuned"},{image:ae,id:"3",title:"European ops!",description:"In December 2017, Niantic announced a thoroughly revamped version of the game, branded as Ingress Prime, would be released in 2018 using a completely rewritten new client and the lessons learned from the massive popularity of Pok\xe9mon Go.",date:"Stay tuned"},{image:ne,id:"4",title:"BLOG TITLE!",description:"Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",date:"2021"},{image:le,id:"5",title:"BLOG TITLE!",description:"Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",date:"2021"},{image:re,id:"6",title:"BLOG TITLE!",description:"Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",date:"2021"}]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=null;this.state.stories&&(e=this.state.stories.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(ie,{article:e}))})));var t={grabCursor:!0,slidesPerView:1,spaceBetween:10,loop:!0,breakpoints:{1200:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:1,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}};return l.a.createElement("div",{className:"blog",id:"blog"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(Q,{title:"BLOG."}),l.a.createElement("p",{className:"font12"},l.a.createElement("a",{href:"https://ingress.com/events/event-details"},"Global Events"),l.a.createElement("br",null),"Each and every day, the Ingress community is mobilizing. From Anomaly Events to Cross Faction Meetups to monthly First Saturday events, Ingress is happening all around you. Learn about the different event types hosted below.",l.a.createElement("br",null),"An Anomaly is a series of events in which two factions compete for control of the local XM network. The winning faction will gain special rewards.",l.a.createElement("br",null),"Special Events are unique Ingress events that may be creative endeavors, exceptional challenges, or personal adventures.",l.a.createElement("br",null),"Mission Days, explore and interact with highlighted landmarks during simple but fun in-game missions within a specified city. Host your own? ",l.a.createElement("br",null),"Join player-hosted local events on the first Saturday of each month to welcome new Agents into Ingress and socialize with members of both factions."),l.a.createElement("div",{className:"padding30"},l.a.createElement(O.a,t,e))))}}]),a}(l.a.Component),oe=a(10),ce=a(11),me=(a(91),a(40)),de=(a(94),a(95),function(e){return l.a.createElement("div",{className:"contact__info-box"},l.a.createElement("div",null,l.a.createElement("img",{src:e.icon,alt:"address"})),l.a.createElement("div",null,l.a.createElement("p",null,e.textLine1),l.a.createElement("p",null,e.textLine2)))}),ue=a.p+"static/media/contact-info-icon1.5054d10e.svg",Ae=a.p+"static/media/contact-info-icon2.26922bd6.svg",pe=a.p+"static/media/contact-info-icon3.6dba31f5.svg",ve=function(){return l.a.createElement(C.Row,null,l.a.createElement(C.Col,{xs:12},l.a.createElement(C.Row,{center:"xs"},l.a.createElement(C.Col,{xs:12,lg:3,className:"contact__info"},l.a.createElement(de,{icon:ue,textLine1:"1211 Awesome Avenue,",textLine2:"NY USD"})),l.a.createElement(C.Col,{xs:12,lg:3,className:"contact__info"},l.a.createElement(de,{icon:Ae,textLine1:"+00 123 - 456 -78",textLine2:"+00 987 - 654 -32"})),l.a.createElement(C.Col,{xs:12,lg:3,className:"contact__info"},l.a.createElement(de,{icon:pe,textLine1:"mint@mintmail.com",textLine2:""})))))},ge=(a(96),a.p+"static/media/facebook.0d1ed68e.svg"),Ee=a.p+"static/media/twitter.9d138e5c.svg",fe=a.p+"static/media/dribble.2cfda77c.svg",be=function(){return l.a.createElement(C.Row,null,l.a.createElement(C.Col,{xs:12},l.a.createElement(C.Row,{center:"xs"},l.a.createElement(C.Col,{xs:12,lg:1,className:"contact__social"},l.a.createElement("img",{src:ge,alt:"facebook"})),l.a.createElement(C.Col,{xs:12,lg:1,className:"contact__social"},l.a.createElement("img",{src:Ee,alt:"Twitter"})),l.a.createElement(C.Col,{xs:12,lg:1,className:"contact__social"},l.a.createElement("img",{src:fe,alt:"Dribble"})))))},he=a(27),Ce=a.n(he),Ke=(a(15),function(e){return l.a.createElement("div",{role:"button","aria-label":"Close",tabIndex:0,className:"backdrop",onClick:e.closeModal,onKeyDown:e.closeModal})}),xe=function(e){return l.a.createElement("div",{className:"sucess__modal"},l.a.createElement("p",null,"Success!"),l.a.createElement("p",null,"Thank you for your email.",l.a.createElement("br",null),"We will respond as soon as possible."),l.a.createElement("div",{role:"button",tabIndex:0,className:"modal__btn flex-center",onClick:e.closeModal,onKeyDown:e.closeModal},l.a.createElement("p",null,"Ok")))},Ne=function(e){return l.a.createElement("div",{className:"error__modal"},l.a.createElement("p",null,"Oooops!!!"),l.a.createElement("p",null,"Something went wrong :","("),l.a.createElement("div",{role:"button",tabIndex:0,className:"modal__btn flex-center",onClick:e.closeModal,onKeyDown:e.closeModal},l.a.createElement("p",null,"Ok")))},Be=function(e){var t=null;return"success"===e.status?t=l.a.createElement(Ce.a,{bottom:!0,duration:500},l.a.createElement(xe,{closeModal:e.closeModal})):"error"===e.status&&(t=l.a.createElement(Ce.a,{bottom:!0,duration:500},l.a.createElement(Ne,{closeModal:e.closeModal}))),l.a.createElement("div",{className:"modal"},l.a.createElement(Ke,{closeModal:e.closeModal}),t)},we=a.p+"static/media/bg.15f9a200.png",Ve=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).inputHandler=function(e){n.setState(Object(oe.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){var t=Object(ce.a)(n);n.setState({sending:!0}),e.preventDefault();var a={name:n.state.name,email:n.state.email,message:n.state.message};me.send("default_service","",a,"").then((function(e){200===e.status?t.showSuccessModal():t.showErrorModal()}),(function(e){t.showErrorModal()}))},n.showSuccessModal=function(){n.setState({successModal:!0,sending:!1}),n.resetForm()},n.showErrorModal=function(){n.setState({errorModal:!0,sending:!1}),n.resetForm()},n.closeModal=function(){n.setState({successModal:!1,errorModal:!1})},n.resetForm=function(){n.setState({name:"",email:"",message:""})},n.state={name:"",email:"",message:"",sending:!1,successModal:!1,errorModal:!1},n}return Object(o.a)(a,[{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){var e=l.a.createElement("div",{className:"small__button"},l.a.createElement("button",{"aria-label":"send message",type:"submit",value:"Send Message"},"Send Message"));this.state.sending&&(e=l.a.createElement("div",{className:"small__button sending-btn"},l.a.createElement("div",{className:"flex-center"},l.a.createElement("div",{className:"sbl-circ"}))));var t=null;return this.state.successModal?t=l.a.createElement(Be,{closeModal:this.closeModal,status:"success"}):this.state.errorModal&&(t=l.a.createElement(Be,{closeModal:this.closeModal,status:"error"})),l.a.createElement("div",{id:"contact"},t,l.a.createElement("div",{className:"wrapper"},l.a.createElement(Q,{title:"CONTACT."}),l.a.createElement("p",{className:"font12"},"Interested? want to collaborate?",l.a.createElement("br",null),"get in touch."),l.a.createElement(C.Row,{className:"padding40"},l.a.createElement(C.Col,{md:12,lg:6},l.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit},l.a.createElement("h4",{className:"font30 weight800 padding30"},"Send a Message."),l.a.createElement("input",{type:"text",placeholder:"Name",required:!0,name:"name",value:this.state.name,onChange:this.inputHandler}),l.a.createElement("input",{type:"email",placeholder:"Email",required:!0,name:"email",value:this.state.email,onChange:this.inputHandler}),l.a.createElement("textarea",{rows:"6",cols:"50",placeholder:"Message...",required:!0,name:"message",value:this.state.message,onChange:this.inputHandler}),e)),l.a.createElement(C.Col,{md:12,lg:6},l.a.createElement("div",{className:"flex-center"},l.a.createElement("img",{src:we,alt:"contact background"})))),l.a.createElement(ve,null),l.a.createElement(be,null)))}}]),a}(l.a.Component),Fe=(a(99),a.p+"static/media/logo.c73645d6.svg"),Le=a.p+"static/media/arrow.381aec5b.svg",ye=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(C.Row,null,l.a.createElement(C.Col,{xs:12,sm:6,md:6},l.a.createElement("div",{className:"footer-box"},l.a.createElement("img",{src:Fe,alt:"logo"}),l.a.createElement("p",null,"\xa9 2021 - subdomain of janetxiushi.me, reactJS single page portfolio. ",l.a.createElement("br",null),"All Right Reserved."))),l.a.createElement(C.Col,{xs:12,sm:6,md:6},l.a.createElement(A.Link,{to:"hero",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement("div",{className:"footer-box back-to-top"},l.a.createElement("p",null,"BACK TO TOP"),l.a.createElement("img",{src:Le,alt:"arrow"})))))))},Ie=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={userIsScrolled:!1,mobileNavbarOpen:!1},e.userIsScrolled=function(){window.pageYOffset>80?e.setState({userIsScrolled:!0}):e.setState({userIsScrolled:!1})},e.closeMobileMenu=function(){e.setState({mobileNavbarOpen:!1})},e.mobileMenuOpen=function(){e.setState({mobileNavbarOpen:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.userIsScrolled)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.userIsScrolled)}},{key:"render",value:function(){var e=l.a.createElement(h,{closeMobileMenu:this.closeMobileMenu});this.state.mobileNavbarOpen&&(e=l.a.createElement(h,{closeMobileMenu:this.closeMobileMenu,isOpen:!0}));var t=l.a.createElement(b,null);return this.state.mobileNavbarOpen&&(t=l.a.createElement(b,{isOpen:!0,closeMobileMenu:this.closeMobileMenu})),l.a.createElement("div",{className:"App"},t,e,l.a.createElement(g,{userIsScrolled:this.state.userIsScrolled,mobileMenuOpen:this.mobileMenuOpen}),l.a.createElement(N,null),l.a.createElement(M,null),l.a.createElement(Z,null),l.a.createElement(u.a,{controls:!0,className:"ingressVideo1",url:"https://youtu.be/RJ52YyG4BJQ"}),l.a.createElement(u.a,{controls:!0,className:"ingressVideo2",url:"https://youtu.be/gvkgbMCSc8A"}),l.a.createElement($,null),l.a.createElement(se,null),l.a.createElement(Ve,null),l.a.createElement(ye,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,t,a){},23:function(e,t,a){},45:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},99:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.b2edf93e.chunk.js.map