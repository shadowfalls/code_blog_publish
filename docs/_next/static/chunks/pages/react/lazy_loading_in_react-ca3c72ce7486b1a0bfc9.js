(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296],{2605:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(5893);n(7294);function a(e){var t=e.className,n=void 0===t?"":t,a=e.href,i=void 0===a?"":a,r=e.children,s=e.target,c=void 0===s?"_blank":s,l=e.rel,h=void 0===l?"noopener noreferrer":l;return(0,o.jsx)("a",{className:n,href:i,target:c,rel:h,children:r})}},5618:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var o=n(5893),a=n(7294),i=n(9008),r=n(8443),s=n(5675),c=n(7366),l=n(6767),h=n(6573),d=n(2443),A=n(6707),m=n.n(A),u=n(7073),p=n(541),g=n(1590),f=n(3971),x=n(7331),b=n(2322),w=n.n(b),j=n(2605),k={src:"/_next/static/image/public/blog/lazy_loading_in_react/lazy-cat-min.060fe7651fa99904a968fdccf81b8864.jpeg",height:854,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAHn/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAH//xAAbEAABBAMAAAAAAAAAAAAAAAACAQMRIQAE0f/aAAgBAQABPwB3WaElMlMrmK5n/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQASMf/aAAgBAgEBPwCoYT//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8A1b//2Q=="},y={src:"/_next/static/image/public/blog/lazy_loading_in_react/React-lazy-2.efdf181c98118f1130ebfd73d8360ab5.png",height:397,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAVUlEQVR4nF2MUQrAMAhDYwf1q7v/RVfaD3VxhbH1gaBJjATp/cIYE6UcMDN4OM7WoKrIgHOEYDIUAVStDCP3ECc0BRt8QspvA7UfaVLH07DuJSTf/QbNhjnojq/2AgAAAABJRU5ErkJggg=="},_=n(4562),R=n(6538),N=b.articleIds.lazyLoadingInReact;function v(){var e=(0,g.qr)().state,t=(0,a.useRef)(null),n=(0,a.useRef)("https://www.linkedin.com/sharing/share-offsite/?url=https://www.".concat(x.domain).concat(w().lazyLoadingInReact)),A=(0,a.useRef)("https://www.facebook.com/sharer/sharer.php?u=https://www.".concat(x.domain).concat(w().lazyLoadingInReact)),b=(0,a.useRef)();(0,a.useEffect)((function(){if(t.current&&N&&x.domain)for(var e=t.current.querySelectorAll("a"),o=0;o<e.length;o+=1)e[o].href&&(e[o].href.includes("twitter")?b.current=e[o].href:e[o].href.includes("facebook")?A.current=e[o].href:e[o].href.includes("linkedin")&&(n.current=e[o].href))}),[t]);var v=function(e){e&&(window.open(e,"","width=500,height=500"),(0,_.ZP)())},C=(0,R.X$)(),z="https://www.".concat(x.domain).concat(w().lazyLoadingInReact),E="Lazy loading in React",L=["ReactJS","Lazy Loading"],I=(0,a.useRef)('import React from \'react\';\nimport { Routes, Route, Link } from "react-router-dom";\n\nimport Home from \'./components/Home\';\nimport About from \'./components/About\';\nimport Contact from \'./components/Contact\';\n\nimport "./App.css";\n\nfunction App() {\n  return (\n    <div className="App">\n      <h1>Welcome to my Website!</h1>\n      <ul>\n        <li>\n          <Link to="/">Home</Link>&nbsp;\n          <Link to="/about">About</Link>&nbsp;\n          <Link to="/contact">Contact</Link>&nbsp;\n        </li>\n      </ul>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="about" element={<About />} />\n        <Route path="contact" element={<Contact />} />\n      </Routes>\n    </div>\n  );\n}\n\nexport default App;\n'),B=(0,a.useRef)("import Home from './components/Home';\nimport About from './components/About';\nimport Contact from './components/Contact';"),Q=(0,a.useRef)("const Home = React.lazy(() => import('./components/Home'));\nconst About = React.lazy(() => import('./components/About'));\nconst Contact = React.lazy(() => import('./components/Contact'));"),T=(0,a.useRef)('import React, { Suspense } from \'react\';\nimport { Routes, Route, Link } from "react-router-dom";\n\nimport "./App.css";\n\nconst Home = React.lazy(() => import(\'./components/Home\'));\nconst About = React.lazy(() => import(\'./components/About\'));\nconst Contact = React.lazy(() => import(\'./components/Contact\'));\n\nfunction App() {\n  return (\n    <div className="App">\n      <h1>Welcome to my Website!</h1>\n      <div>\n        <Link className="link" to="/">Home</Link>\n        <Link className="link" to="/about">About</Link>\n        <Link className="link" to="/contact">Contact</Link>\n      </div>\n      <div className="content">\n        <Suspense fallback={<div>Loading...</div>}>\n          <Routes>\n            <Route path="/" element={<Home />} />\n            <Route path="about" element={<About />} />\n            <Route path="contact" element={<Contact />} />\n          </Routes>\n        </Suspense>\n      </div>\n    </div>\n  );\n}\n\nexport default App;\n');return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:E}),(0,o.jsx)(p.Z,{blogTitle:E,blogDescription:"In this tutorial we will learn the benefits of lazy loading",coverImage:"/blog/lazy_loading_in_react/lazy-cat-min.jpeg",currentBlogUrl:z,datePublished:"Fri, 11 Feb 2022 10:07:00 -0500",dateModified:C,estimatedReadingTimeInMinutes:8,keywords:L.join(", ")})]}),(0,o.jsx)(d.Z,{}),(0,o.jsxs)("div",{ref:t,className:"d-none",children:[(0,o.jsx)(r.Twitter,{link:z}),(0,o.jsx)(r.Facebook,{link:z}),(0,o.jsx)(r.Linkedin,{link:z})]}),(0,o.jsxs)("article",{className:"container ".concat(m().blog_container),itemScope:!0,itemType:"http://schema.org/Article",children:[(0,o.jsxs)("div",{className:m().blog_header_container,children:[(0,o.jsx)("header",{children:(0,o.jsx)("h1",{itemProp:"name",className:m().blog_title,children:E})}),(0,o.jsx)("figure",{children:(0,o.jsx)(s.default,{alt:"Photo by Elijah O'Donnell from Pexels",className:m().blog_image,src:k,width:"1748",height:"1249"})}),(0,o.jsxs)("div",{className:m().blog_large_screens,children:[(0,o.jsxs)("div",{className:m().sub_header,children:[(0,o.jsx)("div",{className:"d-flex justify-content-left ".concat(m().blog_tags),children:L.map((function(e){return(0,o.jsx)("div",{className:m().tag,children:e},e)}))}),(0,o.jsxs)("div",{className:m().read_time,children:[8," Minute Read"]})]}),(0,o.jsxs)("div",{className:"d-flex justify-content-right mt-30",children:[(0,o.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(A.current)},children:(0,o.jsx)(c.Z,{})}),(0,o.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(b.current)},children:(0,o.jsx)(l.Z,{})}),(0,o.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(n.current)},children:(0,o.jsx)(h.Z,{})})]})]}),(0,o.jsxs)("div",{className:m().blog_small_screens,children:[(0,o.jsxs)("div",{className:m().sub_header,children:[(0,o.jsx)("div",{className:"d-flex justify-content-left ".concat(m().blog_tags),children:L.map((function(e){return(0,o.jsx)("div",{className:m().tag,children:e},e)}))}),(0,o.jsxs)("div",{className:m().read_time,children:[8," Minute Read"]})]}),(0,o.jsxs)("div",{className:"d-flex justify-content-right mt-10",children:[(0,o.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(A.current)},children:(0,o.jsx)(c.Z,{})}),(0,o.jsx)("a",{"aria-label":"twitter",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(b.current)},children:(0,o.jsx)(l.Z,{})}),(0,o.jsx)("a",{"aria-label":"linkedin",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(n.current)},children:(0,o.jsx)(h.Z,{})})]})]})]}),(0,o.jsx)("div",{className:"d-flex ".concat(m().blog_content),children:(0,o.jsxs)("div",{className:m().article,children:[(0,o.jsxs)("p",{children:["One of the main problems with client side rendering is the time it takes for the initial content to be painted on the screen. We need to watch for many things like the"," ",(0,o.jsx)("b",{children:"size of the npm packages"})," that we use, way how we are using those packages and other things. As your frontend application gets bigger the amount of javascript and css that the browser needs to download also increases and the longer it takes for your application to make the initial load. Then you will reach a point where your application will become simply too big to load all the build files at initial load."]}),(0,o.jsxs)("p",{children:["What if there was a way to add more pages to your application but also reduce the time it takes for the initial load. What if there was a way to download a page only when we need it. This is where Lazy Loading comes to focus. Lazy Loading or\xa0",(0,o.jsx)(j.Z,{className:m().highlight_link,href:"https://reactjs.org/docs/code-splitting.html",children:"code-splitting"})," ","is a way through which we can break our application into many files and downlaod them on demand. For example we won't need to download the files for the dashboard page when a user is still at the login page. The files related to the dashboard page will be downloaded when they reach the dashboard page. Lets see how we can implement lazy loading in React."]}),(0,o.jsxs)("p",{children:["To make things easier I have create this\xa0",(0,o.jsx)(j.Z,{className:m().highlight_link,href:"https://github.com/dinesh24murali/lazy_loading_react_example/tree/initial_setup",children:"repo"})," ","which you can use as the initial code for following this tutorial. There is nothing complicated in the repo. It has a simple routing setup with"," ",(0,o.jsx)(j.Z,{className:m().highlight_link,href:"https://reactrouter.com/docs/en/v6",children:"react-router"})," ","and a few empty components to test routing."]}),(0,o.jsxs)("p",{children:["React doesn't ship with a router of its own, so we have to add a additional package to handle routing. There will be a directory called"," ",(0,o.jsx)("span",{className:m().highlight_text,children:"src/components"}),"which has 3 files (Home.js, About.js, & Contact.js) which just renders the component name. ",(0,o.jsx)("span",{className:m().highlight_text,children:"App.js"}),"is where the entire routing is setup."]}),(0,o.jsx)(u.Z,{code:I.current}),(0,o.jsx)("p",{children:"If you run the project it should render the following result. Clicking on the links will take you to the respective pages."}),(0,o.jsx)(s.default,{alt:"",className:m().result_preview,src:y,width:"578",height:"482"}),(0,o.jsxs)("p",{children:["If you are not familier with"," ",(0,o.jsx)(j.Z,{className:m().highlight_link,href:"https://reactrouter.com/docs/en/v6",children:"React-router"})," ","we recommend going through their doc to learn more. Now Lets add lazy loading here."]}),(0,o.jsxs)("p",{children:["We can use ",(0,o.jsx)("span",{className:m().highlight_text,children:"import()"})," to dynamiclly import scripts into a file. You don't need to configure anything, ",(0,o.jsx)("b",{children:"Create React App"})," has support for it out of the box. You can read more about dynamic imports"," ",(0,o.jsx)(j.Z,{className:m().highlight_link,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports",children:"here"}),"."]}),(0,o.jsxs)("p",{children:["We also need React's\xa0",(0,o.jsx)(j.Z,{className:m().highlight_link,href:"https://reactjs.org/docs/code-splitting.html#reactlazy",children:"lazy"}),"\xa0 and ",(0,o.jsx)("span",{className:m().highlight_text,children:"Suspense"})," APIs. We will be calling"," ",(0,o.jsx)("b",{children:"import()"})," function from within",(0,o.jsx)("b",{children:"React.lazy"})," function. ",(0,o.jsx)("b",{children:"React.lazy"})," takes a function that must call a dynamic"," ",(0,o.jsx)("b",{children:"import()"}),". This must return a ",(0,o.jsx)("b",{children:"Promise"})," which resolves to a module with a default export containing a React component. The lazy component should then be rendered inside a ",(0,o.jsx)("b",{children:"Suspense"})," component, which allows us to show some fallback content (such as a loading indicator) while we're waiting for the lazy component to load. Now lets use them in our app. Re-write the import statements so that they look like below."]}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"before:"})}),(0,o.jsx)(u.Z,{code:B.current}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"after:"})}),(0,o.jsx)(u.Z,{code:Q.current}),(0,o.jsxs)("p",{children:["We will cover the ",(0,o.jsx)("b",{children:"Routes"})," with a ",(0,o.jsx)("b",{children:"Suspense"})," tag. The code looks like this finally."]}),(0,o.jsx)(u.Z,{code:T.current}),(0,o.jsxs)("p",{children:["The ",(0,o.jsx)("span",{className:m().highlight_text,children:"fallback"})," props in the ",(0,o.jsx)("b",{children:"Suspense"})," ","component accepts a React component that will render while the actual the component is loading. Now if you hard-refresh the page once and if you switch to a different route, for a split second the ",(0,o.jsx)("span",{className:m().highlight_text,children:"Loading..."})," component will be visible."]}),(0,o.jsxs)("p",{children:["The source code for this entire tutorial can be found in this\xa0",(0,o.jsx)(j.Z,{className:m().highlight_link,href:"https://github.com/dinesh24murali/lazy_loading_react_example/tree/master",children:"repo"}),"."]})]})})]}),(0,o.jsx)(f.Z,{className:"".concat(m().footer," ").concat(0===e.theme?m().dark:m().light),footerTextColor:m().footer_text_color})]})}},2569:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react/lazy_loading_in_react",function(){return n(5618)}])}},function(e){e.O(0,[774,710,472,888,179],(function(){return t=2569,e(e.s=t);var t}));var t=e.O();_N_E=t}]);