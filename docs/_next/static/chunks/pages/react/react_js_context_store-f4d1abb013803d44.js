(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{478:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react/react_js_context_store",function(){return n(5708)}])},5708:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(5893),a=n(7294),s=n(9008),i=n.n(s),o=n(8443),c=n(5675),l=n.n(c),h=n(2137),d=n(5992),p=n(6332),u=n(239),m=n(9313),x=n.n(m),g=n(4601),f=n(5479),j=n(1894),b=n(8505),w=n(3138),N=n(6847),_=n.n(N),k={src:"/_next/static/media/react-context-store-hero-min.5194e0eb.png",height:486,width:730,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAZklEQVR42h3KsQ0CQRBD0T0ECULUQEHUSSF0QA8EJNwGCLiZW//BQracPE/ny0spgvGFpJyUgm3MSaLQ7rhpE597skIausF3HU77ovVbGLQanmHQosc1GCzzqAFh6H9w33hblUIkP45marYpN7Y+AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},v={src:"/_next/static/media/ezgif.com-gif-maker.9e788af5.gif",height:482,width:578},C=n(5244);let R=N.articleIds.reactContextStore;function A(){let{state:e}=(0,j.qr)(),t=(0,a.useRef)(null),n=(0,a.useRef)("https://www.linkedin.com/sharing/share-offsite/?url=https://www.".concat(w.domain).concat(_().reactContextStore)),s=(0,a.useRef)("https://www.facebook.com/sharer/sharer.php?u=https://www.".concat(w.domain).concat(_().reactContextStore)),c=(0,a.useRef)();(0,a.useEffect)(()=>{if(t.current&&R&&w.domain){let e=t.current.querySelectorAll("a");for(let r=0;r<e.length;r+=1)e[r].href&&(e[r].href.includes("twitter")?c.current=e[r].href:e[r].href.includes("facebook")?s.current=e[r].href:e[r].href.includes("linkedin")&&(n.current=e[r].href))}},[t]);let m=e=>{e&&window.open(e,"","width=500,height=500")},N=(0,a.useRef)("\n  import React, { useContext, createContext, useReducer } from 'react';\n\n  import { initialState, appReducer } from './appReducer';\n\n  export const AppStore = createContext();\n\n  export const useAppStore = () => useContext(AppStore);\n\n  export default function AppProvider({ children }) {\n\n    const [state, dispatch] = useReducer(appReducer, initialState);\n\n    const value = { state, dispatch };\n\n    return (\n      <AppStore.Provider value={value}>{children}</AppStore.Provider>\n    );\n  }\n\n"),A=(0,a.useRef)("export const actionTypes = {\n  INCREMENT_COUNT: 'INCREMENT_COUNT',\n  DECREMENT_COUNT: 'DECREMENT_COUNT',\n};\n\nexport const initialState = {\n  count: 1,\n};\n\nexport function appReducer(state = initialState, action) {\n  switch (action.type) {\n      case actionTypes.INCREMENT_COUNT:\n          return { ...state, count: state.count+1 };\n      case actionTypes.DECREMENT_COUNT:\n          return { ...state, count: state.count-1 };\n      default:\n          return state;\n  }\n}\n\n\nexport function increment() {\n  return { type: actionTypes.INCREMENT_COUNT };\n}\n\nexport function decrement() {\n  return { type: actionTypes.DECREMENT_COUNT };\n}\n"),y=(0,a.useRef)("import React from 'react';\n\nimport { useAppStore } from '../store/AppProvider';\nimport { increment, decrement } from '../store/appReducer';\n\nexport default function RootComponent() {\n\n    const { state, dispatch } = useAppStore();\n\n    const increaseCount = () => {\n        dispatch(increment())\n    }\n\n    const decrementCount = () => {\n        dispatch(decrement())\n    }\n\n    return <div style={{ textAlign: 'center' }}>\n        <h1>{state.count}</h1>\n        <button style={{ fontSize: '36px', marginRight: '10px' }} onClick={increaseCount}>\n            &#8657;\n        </button>\n        <button style={{ fontSize: '36px' }} onClick={decrementCount}>\n            &#8659;\n        </button>\n    </div>;\n}\n"),S=(0,a.useRef)("import './App.css';\n\nimport RootComponent from './components/RootComponent';\nimport AppProvider from './store/AppProvider';\n\nfunction App() {\n  return (\n    <AppProvider>\n      <RootComponent />\n    </AppProvider>\n  );\n}\n\nexport default App;\n"),T=(0,C.X$)(),E="https://www.".concat(w.domain).concat(_().reactContextStore),I="How To Build a Redux-Like Store With React Context and Hooks",P=["ReactJS","State Management"];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:I}),(0,r.jsx)(f.Z,{blogTitle:I,blogDescription:"Lets see how we can build a redux-like store with react context and hooks",coverImage:"/images/react-context-store-hero-min.png",currentBlogUrl:E,datePublished:"Sun, 13 Feb 2022 10:07:00 -0500",dateModified:T,estimatedReadingTimeInMinutes:8,keywords:P.join(", ")})]}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{ref:t,className:"d-none",children:[(0,r.jsx)(o.Twitter,{link:E}),(0,r.jsx)(o.Facebook,{link:E}),(0,r.jsx)(o.Linkedin,{link:E})]}),(0,r.jsxs)("article",{className:"container ".concat(x().blog_container),itemScope:!0,itemType:"http://schema.org/Article",children:[(0,r.jsxs)("div",{className:x().blog_header_container,children:[(0,r.jsx)("header",{children:(0,r.jsx)("h1",{itemProp:"name",className:x().blog_title,children:"How To Build a Redux-Like Store With React Context and Hooks"})}),(0,r.jsx)("figure",{children:(0,r.jsx)(l(),{alt:"",unoptimized:!0,className:x().blog_image,src:k})}),(0,r.jsxs)("div",{className:x().blog_large_screens,children:[(0,r.jsxs)("div",{className:x().sub_header,children:[(0,r.jsx)("div",{className:"d-flex justify-content-left ".concat(x().blog_tags),children:P.map(e=>(0,r.jsx)("div",{className:x().tag,children:e},e))}),(0,r.jsxs)("div",{className:x().read_time,children:[8," Minute Read"]})]}),(0,r.jsxs)("div",{className:"d-flex justify-content-right mt-30",children:[(0,r.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>m(s.current),children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>m(c.current),children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>m(n.current),children:(0,r.jsx)(p.Z,{})})]})]}),(0,r.jsxs)("div",{className:x().blog_small_screens,children:[(0,r.jsxs)("div",{className:x().sub_header,children:[(0,r.jsx)("div",{className:"d-flex justify-content-left ".concat(x().blog_tags),children:P.map(e=>(0,r.jsx)("div",{className:x().tag,children:e},e))}),(0,r.jsxs)("div",{className:x().read_time,children:[8," Minute Read"]})]}),(0,r.jsxs)("div",{className:"d-flex justify-content-right mt-10",children:[(0,r.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>m(s.current),children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)("a",{"aria-label":"twitter",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>m(c.current),children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("a",{"aria-label":"linkedin",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>m(n.current),children:(0,r.jsx)(p.Z,{})})]})]})]}),(0,r.jsxs)("div",{className:"d-flex ".concat(x().blog_content),children:[(0,r.jsxs)("div",{className:x().article,children:[(0,r.jsxs)("p",{children:["If you need a very simple state management setup in React App, but you also need it to be light weight with minimal configuration, a combination of"," ",(0,r.jsx)("a",{className:x().highlight_link,href:"https://reactjs.org/docs/context.html",target:"_blank",rel:"noopener noreferrer",children:"React context"})," ","and"," ",(0,r.jsx)("a",{className:x().highlight_link,href:"https://reactjs.org/docs/hooks-reference.html#usereducer",target:"_blank",rel:"noopener noreferrer",children:"useReducer"})," ","Hook is perfect."]}),(0,r.jsxs)("p",{children:["Since both of these APIs are part of the code ReactJS library, we don‘t need to install any 3rd party dependencies. Though we miss out on some of the features that libraries like"," ",(0,r.jsx)("a",{className:x().highlight_link,href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux"}),"and"," ",(0,r.jsx)("a",{className:x().highlight_link,href:"https://recoiljs.org/",target:"_blank",rel:"noopener noreferrer",children:"Recoil"})," ","give us, but if the app isn‘t complex enough or big enough or if the primary requirement is performance, going with React context store is a better bet. The only pre-requirement for using this setup is ReactJS version 16.10 or higher. If you are already familiar with ",(0,r.jsx)("b",{children:"Redux"}),", you will find this very similar to it."]}),(0,r.jsxs)("p",{children:["This article assumes that you have a fair knowledge of React. If you are new to React, we recommend reading their official"," ",(0,r.jsx)("a",{className:x().highlight_link,href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"documentation"})]}),(0,r.jsx)("h2",{children:"Create a boiler plate:"}),(0,r.jsx)("p",{children:"To get started create a simple boiler plate using the following command"}),(0,r.jsx)(g.Z,{code:"  npx create-react-app my-app"}),(0,r.jsx)("h2",{children:"Setting up the store:"}),(0,r.jsxs)("p",{children:["Open the React application in your favorite code editor. In the root directory under"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"/src"})," folder create two folders called",(0,r.jsx)("span",{className:x().highlight_text,children:"store"}),", and"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"components"}),"."]}),(0,r.jsxs)("p",{children:["Create a file called ",(0,r.jsx)("span",{className:x().highlight_text,children:"AppProvider.js"})," and past the following code inside it."]}),(0,r.jsx)(g.Z,{code:N.current}),(0,r.jsxs)("p",{children:["First we have imported ",(0,r.jsx)("span",{className:x().highlight_text,children:"useContext"}),","," ",(0,r.jsx)("span",{className:x().highlight_text,children:"createContext"}),", and"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"useReducer"})," from ",(0,r.jsx)("b",{children:"react"}),". Then we have imported ",(0,r.jsx)("span",{className:x().highlight_text,children:"initialState"}),","," ",(0,r.jsx)("span",{className:x().highlight_text,children:"appReducer"})," from ",(0,r.jsx)("b",{children:"appReducer"})," which I will explain in a bit. Then have created a context with ",(0,r.jsx)("b",{children:"createContext();"}),", you can read more about create context"," ",(0,r.jsx)("a",{className:x().highlight_link,href:"https://reactjs.org/docs/context.html#api",rel:"noopener noreferrer",children:"here"}),"."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"useAppStore"})," is a custom hook, that gives a quick way to use the context inside any component"]}),(0,r.jsxs)("p",{children:["We have used a ",(0,r.jsx)("b",{children:"useReducer"})," hook to create reducer with the function that we have imported, and the initial state of the application application."]}),(0,r.jsxs)("p",{children:["Then we pass the ",(0,r.jsx)("b",{children:"state"})," and ",(0,r.jsx)("b",{children:"dispatch"})," method that we get from the"," ",(0,r.jsx)("b",{children:"useReducer"})," hood as the value for the context."]}),(0,r.jsx)("p",{className:"".concat(x().quote," ").concat(0===e.theme?x().dark_quote:""),children:"Since we are passing both the data (state) and the function that can be called to make changes to the data (dispatch) as the value to the context, we can access them both in any component in the application."}),(0,r.jsxs)("p",{children:["Create a new file called ",(0,r.jsx)("span",{className:x().highlight_text,children:"appReducer.js"})," alongside",(0,r.jsx)("b",{children:"AppProvider.js"})," file and past the following code in it."]}),(0,r.jsx)(g.Z,{code:A.current,language:"JavaScript"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"actionTypes"})," has a list of actions that can be taken on the store."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"initialState"})," is the initial state of the entire app."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"appReducer"})," is the reducer function that creates the state during every event. It will be used in the reducer that we made in ",(0,r.jsx)("b",{children:"AppProvider.js"}),"."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"increment"})," & ",(0,r.jsx)("b",{children:"decrement"})," are the actions that can be used to trigger the event that will update the store."]}),(0,r.jsxs)("p",{children:["Now let's use this store in a component. Create a new file called ",(0,r.jsx)("b",{children:"RootComponent.js"})," ","inside ",(0,r.jsx)("b",{children:"/components"})," folder, and past the follwong code in it."]}),(0,r.jsx)(g.Z,{code:y.current,language:"JavaScript"}),(0,r.jsxs)("p",{children:["Here we can use ",(0,r.jsx)("b",{children:"useAppStore"})," to use the state, and dispatch. We have also imported"," ",(0,r.jsx)("b",{children:"increment"}),", ",(0,r.jsx)("b",{children:"decrement"}),"actions so that we can use them to trigger a dispatch an action. We are displaying the current count, and we have 2 buttons to tigger the increment and decrement actions. If you are wondering what ",(0,r.jsx)("b",{children:"&#8657;"})," and ",(0,r.jsx)("b",{children:"&#8659;"})," are, they are html unique code elements, you can learn more about it"," ",(0,r.jsx)("a",{className:x().highlight_link,href:"https://www.toptal.com/designers/htmlarrows/symbols/",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),(0,r.jsxs)("p",{children:["Import and add this Component to ",(0,r.jsx)("b",{children:"App.js"}),", so it looks like below. Notice that we have imported the ",(0,r.jsx)("b",{children:"AppProvider"})," and used that on top of the ",(0,r.jsx)("b",{children:"RootComponent"}),"."]}),(0,r.jsx)(g.Z,{code:S.current,language:"JavaScript"}),(0,r.jsx)("p",{children:"If everything goes well, your app should generate the following result"}),(0,r.jsx)(l(),{alt:"",unoptimized:!0,className:x().result_preview,src:v,width:"578",height:"482"})]}),(0,r.jsx)("div",{className:x().blog_aside,children:(0,r.jsx)("aside",{className:x().you_might_be_interested})})]})]}),(0,r.jsx)(b.Z,{className:"".concat(x().footer," ").concat(0===e.theme?x().dark:x().light),footerTextColor:x().footer_text_color})]})}}},function(e){e.O(0,[664,675,745,267,774,888,179],function(){return e(e.s=478)}),_N_E=e.O()}]);