(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{843:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react/how_to_add_redux_to_a_react_app",function(){return n(5173)}])},2139:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){let{className:t="",href:n="",children:a,target:s="_blank",rel:i="noopener noreferrer"}=e;return(0,r.jsx)("a",{className:t,href:n,target:s,rel:i,children:a})}n(7294)},5173:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(5893),a=n(7294),s=n(9008),i=n.n(s),o=n(8443),c=n(5675),l=n.n(c),h=n(2137),d=n(5992),p=n(6332),u=n(239),m=n(9313),x=n.n(m),g=n(4601),f=n(5479),A=n(1894),j=n(8505),b=n(3138),w=n(6847),k=n.n(w),N=n(2139),_={src:"/_next/static/media/redux-logo-min.d56adf90.jpeg",height:768,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAmwP/xAAbEAABBAMAAAAAAAAAAAAAAAARABITIgNRcf/aAAgBAQABPwA4IBaZ+qt6v//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:6},R={src:"/_next/static/media/react-redux.3bb91b45.gif",height:150,width:150},v=n(5244);let y=(0,v.X$)(),C="https://www.".concat(b.domain).concat(k().howToAddReduxToReactApp),I="How to add redux to a react app",S=["ReactJS","Redux"],T=w.articleIds.howToAddReduxToReactApp;function Z(){let{state:e}=(0,A.qr)(),t=(0,a.useRef)(null),n=(0,a.useRef)("https://www.linkedin.com/sharing/share-offsite/?url=https://www.".concat(b.domain).concat(k().howToAddReduxToReactApp)),s=(0,a.useRef)("https://www.facebook.com/sharer/sharer.php?u=https://www.".concat(b.domain).concat(k().howToAddReduxToReactApp)),c=(0,a.useRef)(),m=e=>{let{src:t}=e;return t};(0,a.useEffect)(()=>{if(t.current&&T&&b.domain){let e=t.current.querySelectorAll("a");for(let r=0;r<e.length;r+=1)e[r].href&&(e[r].href.includes("twitter")?c.current=e[r].href:e[r].href.includes("facebook")?s.current=e[r].href:e[r].href.includes("linkedin")&&(n.current=e[r].href))}},[t]);let w=e=>{e&&window.open(e,"","width=500,height=500")},v=(0,a.useRef)("npm install @reduxjs/toolkit react-redux --save"),Z=(0,a.useRef)("import React from 'react';\nimport { Provider } from 'react-redux';\nimport { configureStore } from '@reduxjs/toolkit';\n\nimport appReducer from '../slices/appSlice';\n\nexport const store = configureStore({\n    reducer: {\n    app: appReducer,\n    }\n});\n\nexport default function AppProvider({ children }) {\n    return <Provider store={store}>{children}</Provider>;\n}\n"),P=(0,a.useRef)("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\nimport AppProvider from './store/store';\n\nReactDOM.render(\n  <React.StrictMode>\n    <AppProvider>\n      <App />\n    </AppProvider>\n  </React.StrictMode>,\n  document.getElementById('root')\n);"),B=(0,a.useRef)("import { createSlice } from '@reduxjs/toolkit';\n\nexport const appSlice = createSlice({\n    name: 'app',\n    initialState: {\n        number: 0,\n    },\n    reducers: {\n        setNumber: (state, action) => {\n            state.number = action.payload;\n        },\n        increment: (state, action) => {\n            state.number = state.number + 1;\n        },\n        decrement: (state, action) => {\n            state.number = state.number - 1;\n        }\n    }\n});\n\nexport const { setNumber, increment, decrement } = appSlice.actions;\n\nexport const makeApiCall = () => {\n    return async (dispatch) => {\n        try {\n            const response = await fetch('http://localhost:3000/data.json');\n            const data = await response.json();\n            dispatch(setNumber(data.data.number));\n            return data.data.number;\n        } catch (e) {\n            dispatch(setNumber(0));\n            return '';\n        }\n    };\n};\n\n\nexport default appSlice.reducer;\n"),D=(0,a.useRef)('{\n    "data": {\n        "number": 99\n    }\n}\n'),E=(0,a.useRef)("import React from 'react';\nimport { useDispatch, useSelector } from 'react-redux';\n\nimport { increment, decrement, makeApiCall } from './slices/appSlice';\n\nexport default function Incrementer() {\n\n   const dispatch = useDispatch();\n   const number = useSelector(state => state.app.number)\n\n   const increaseCount = () => {\n      dispatch(increment());\n   }\n\n   const decrementCount = () => {\n      dispatch(decrement());\n   }\n\n   const makeCall = () => {\n      dispatch(makeApiCall());\n   };\n\n   return <div style={{ textAlign: 'center' }}>\n      <h1>{number}</h1>\n      <button style={{ fontSize: '36px', marginRight: '10px' }} onClick={increaseCount}>\n         &#8657;\n      </button>\n      <button style={{ fontSize: '36px' }} onClick={decrementCount}>\n         &#8659;\n      </button><br></br>\n      <button style={{ fontSize: '16px', marginRight: '10px', marginTop: '10px' }} onClick={makeCall}>\n         Make Api Call\n      </button>\n   </div>;\n}\n"),M=(0,a.useRef)("import React from 'react';\nimport Incrementer from './Incrementer';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <Incrementer />\n    </div>\n  );\n}\n\nexport default App;"),Q=(0,a.useRef)("import { connect } from 'react-redux';\nimport { bindActionCreators } from 'redux';\n\nimport { increment, decrement, makeApiCall } from './slices/appSlice';\nimport Incrementer from './Incrementer';\n\nconst mapStateToProps = (state) => {\n    return {\n        number: state.app.number\n    };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n    return bindActionCreators(\n        {\n            increment,\n            decrement,\n            makeApiCall\n        },\n        dispatch\n    );\n};\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Incrementer);\n"),W=(0,a.useRef)("import React from 'react';\n\nexport default function Incrementer({\n   number,\n   increment,\n   decrement,\n   makeApiCall,\n}) {\n\n   const increaseCount = () => {\n      increment();\n   }\n\n   const decrementCount = () => {\n      decrement();\n   }\n\n   const makeCall = () => {\n      makeApiCall();\n   };\n\n   return <div style={{ textAlign: 'center' }}>\n      <h1>{number}</h1>\n      <button style={{ fontSize: '36px', marginRight: '10px' }} onClick={increaseCount}>\n         &#8657;\n      </button>\n      <button style={{ fontSize: '36px' }} onClick={decrementCount}>\n         &#8659;\n      </button><br></br>\n      <button style={{ fontSize: '16px', marginRight: '10px', marginTop: '10px' }} onClick={makeCall}>\n         Make Api Call\n      </button>\n   </div>;\n}\n"),z=(0,a.useRef)("import IncrementerContainer from './containers/IncrementerContainer';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <IncrementerContainer />\n    </div>\n  );\n}\n\nexport default App;");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:I}),(0,r.jsx)(f.Z,{blogTitle:I,blogDescription:"Lets learn how to integrate Redux into a React app",coverImage:"/blog/how_to_add_redux_to_a_react_app/redux-logo-min.jpeg",currentBlogUrl:C,datePublished:"Thu, 10 Feb 2022 10:07:00 -0500",dateModified:y,estimatedReadingTimeInMinutes:8,keywords:S.join(", ")})]}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{ref:t,className:"d-none",children:[(0,r.jsx)(o.Twitter,{link:C}),(0,r.jsx)(o.Facebook,{link:C}),(0,r.jsx)(o.Linkedin,{link:C})]}),(0,r.jsxs)("article",{className:"container ".concat(x().blog_container),itemScope:!0,itemType:"http://schema.org/Article",children:[(0,r.jsxs)("div",{className:x().blog_header_container,children:[(0,r.jsx)("header",{children:(0,r.jsx)("h1",{itemProp:"name",className:x().blog_title,children:I})}),(0,r.jsx)("figure",{children:(0,r.jsx)(l(),{alt:"",loader:m,className:x().blog_image,src:_})}),(0,r.jsxs)("div",{className:x().blog_large_screens,children:[(0,r.jsxs)("div",{className:x().sub_header,children:[(0,r.jsx)("div",{className:"d-flex justify-content-left ".concat(x().blog_tags),children:S.map(e=>(0,r.jsx)("div",{className:x().tag,children:e},e))}),(0,r.jsxs)("div",{className:x().read_time,children:[8," Minute Read"]})]}),(0,r.jsxs)("div",{className:"d-flex justify-content-right mt-30",children:[(0,r.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>w(s.current),children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>w(c.current),children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>w(n.current),children:(0,r.jsx)(p.Z,{})})]})]}),(0,r.jsxs)("div",{className:x().blog_small_screens,children:[(0,r.jsxs)("div",{className:x().sub_header,children:[(0,r.jsx)("div",{className:"d-flex justify-content-left ".concat(x().blog_tags),children:S.map(e=>(0,r.jsx)("div",{className:x().tag,children:e},e))}),(0,r.jsxs)("div",{className:x().read_time,children:[8," Minute Read"]})]}),(0,r.jsxs)("div",{className:"d-flex justify-content-right mt-10",children:[(0,r.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>w(s.current),children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)("a",{"aria-label":"twitter",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>w(c.current),children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("a",{"aria-label":"linkedin",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>w(n.current),children:(0,r.jsx)(p.Z,{})})]})]})]}),(0,r.jsx)("div",{className:"d-flex ".concat(x().blog_content),children:(0,r.jsxs)("div",{className:x().article,children:[(0,r.jsx)("p",{children:"Back in the old days, when html was rendered by the server using languages like PHP, there was very little if not any control over the state or session of the application happening in the frontend. When we have to go to a different page we had make a request the server, and the server will send back the HTML and the entire page refreshs."}),(0,r.jsxs)("p",{children:["Then came the time when frontend frameworks like\xa0",(0,r.jsx)(N.Z,{className:x().highlight_link,href:"https://reactjs.org/",children:"React"})," ","became popular and then suddenly the frontend has more control over the application's state. We didn't have to reload the entire page just to go to a different page in your application. When we type something in a form React keeps it in its"," ",(0,r.jsx)(N.Z,{className:x().highlight_link,href:"https://reactjs.org/docs/hooks-state.html",children:"state"}),"."]}),(0,r.jsxs)("p",{children:["But when your application starts to get bigger you will find a need to share some data between two different pages or components. This is where tools like\xa0",(0,r.jsx)(N.Z,{className:x().highlight_link,href:"https://redux.js.org/",children:"Redux"})," ","are being used. Redux is an amazing tool that allows you to keep all your application's state in one centralized store. Each component's state is handled by the Redux store."]}),(0,r.jsx)("h2",{children:"Basics of state management with Redux:"}),(0,r.jsxs)("p",{children:["In this tutorial we will be adding Redux to a simple React application. You can create a simple React app using the command",(0,r.jsxs)("span",{className:x().highlight_text,children:["npx create-react-app ","<application name>"]}),". You can read more about it in React's official\xa0",(0,r.jsx)(N.Z,{className:x().highlight_link,href:"https://redux.js.org/",children:"documentation"}),"."]}),(0,r.jsx)("p",{children:"A simple Redux integration has the following parts:"}),(0,r.jsxs)("p",{children:[(0,r.jsx)(N.Z,{className:x().highlight_link,href:"https://redux.js.org/api/store",children:"Store:"}),"\xa0It holds the state of the application"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(N.Z,{className:x().highlight_link,href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#introduction",children:"Actions:"}),"\xa0These are functions that can be called from within a component that will do some operation on the store."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(N.Z,{className:x().highlight_link,href:"https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice",children:"Slice:"}),"\xa0This is where we set the initial state of the application. It also has a"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"reducers"})," section that has actions which can be used to manipulate the data in the store."]}),(0,r.jsx)("p",{children:"Now let's get to work!"}),(0,r.jsx)("h2",{children:"Setup Redux:"}),(0,r.jsx)("p",{children:"Inorder to use Redux in our React app, we need to install the Redux packages. Run the following command in you terminal after switching to your project's directory. This will install Redux and the tools"}),(0,r.jsx)(g.Z,{code:v.current}),(0,r.jsx)("p",{children:"Since you are working on an already functional React app, you will only need to add and change a few things on your components to connect them to the new store that will handle the state."}),(0,r.jsxs)("p",{children:["Now lets start integrating Redux into our React app. Start by creating a new folder called"," ",(0,r.jsx)("b",{children:"store"})," under the ",(0,r.jsx)("b",{children:"src"})," directory. Create a file called"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"store.js"})," inside it and past the following code inside it."]}),(0,r.jsx)(g.Z,{code:Z.current}),(0,r.jsxs)("p",{children:["Let go through what we have just added. We have create a store here using the"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"configureStore"})," function and we are passing an object called ",(0,r.jsx)("b",{children:"reducer"}),". We have imported the ",(0,r.jsx)("b",{children:"appReducer"})," and passed that to the reducer object. Next we have create a simple"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"AppProvider"})," component that will wrap the children component that it gets with the the store provider. The store provider needs to be on top of the entire application, this is because all the components in our application will need data from the store. So open your ",(0,r.jsx)("b",{children:"index.js"})," file and warp the"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"<App />"}),"component inside it with the provider as shown below."]}),(0,r.jsx)(g.Z,{code:P.current}),(0,r.jsxs)("p",{children:["Next we need to create a Redux store slice that will handle the data inside the store. Create a directory called ",(0,r.jsx)("b",{children:"slices"})," under ",(0,r.jsx)("b",{children:"src"})," directory and create a new file called ",(0,r.jsx)("span",{className:x().highlight_text,children:"appSlice.js"})," inside it. Paste the following content inside the file:"]}),(0,r.jsx)(g.Z,{code:B.current}),(0,r.jsxs)("p",{children:["We have used the ",(0,r.jsx)("span",{className:x().highlight_text,children:"createSlice"})," method to create a slice. We can add multiple slices to our store as our app gets bigger. A Redux slice will handle part of the whole state of the app. You can learn more about it in their\xa0",(0,r.jsx)(N.Z,{className:x().highlight_link,href:"https://redux.js.org/usage/code-splitting",children:"documentation"}),". The createSlice accepts the ",(0,r.jsx)("b",{children:"name"})," of the slice, the initialState of the app. In this case we are creating a simple store that handles the state of an integrate value called ",(0,r.jsx)("b",{children:"number"})," whoes initial value is ",(0,r.jsx)("b",{children:"0"}),". The"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"reducers"})," section is where the interesting part happens, here we are changing the data in the store. In this case we have 3 methods"," ",(0,r.jsx)("b",{children:"setNumber, increment, and decrement"}),". They perform the respective functions what their names suggests. ",(0,r.jsx)("b",{children:"setNumber"})," will set the value to the number variable."," ",(0,r.jsx)("b",{children:"increment, and decrement"})," will increment and decrement the number respectively."]}),(0,r.jsxs)("p",{children:["Notice that we have exported those functions as actions in this line",(0,r.jsx)("span",{className:x().highlight_text,children:"export const { setNumber, increment, decrement } = appSlice.actions;"})]}),(0,r.jsxs)("p",{children:["We have added a function called ",(0,r.jsx)("span",{className:x().highlight_text,children:"makeApiCall"}),". This function is an example of showing how you can make asynchronous API calls to get the data and update the store. We call these functions"," ",(0,r.jsx)(N.Z,{className:x().highlight_link,href:"https://redux.js.org/usage/writing-logic-thunks",children:"Thunks"}),", which programming means:"]}),(0,r.jsx)("p",{className:"d-flex ".concat(x().quote," ").concat(0===e.theme?x().dark_quote:""),children:"A piece of code that does some delayed work."}),(0,r.jsxs)("p",{children:["In the ",(0,r.jsx)("b",{children:"makeApiCall"})," function we are making a API call to get a json file. We update the store with the data that we get from the json object. It returns an anonymous function that will have two arguments ",(0,r.jsx)("b",{children:"dis"})]}),(0,r.jsxs)("p",{children:["create a file called ",(0,r.jsx)("span",{className:x().highlight_text,children:"data.json"})," under the"," ",(0,r.jsx)("b",{children:"public"})," directory and paste the following contents inside it"]}),(0,r.jsx)(g.Z,{code:D.current}),(0,r.jsxs)("p",{children:["If you are new to React, note that any file present under the ",(0,r.jsx)("b",{children:"/public"})," directory will be taken as static files and the development server will serve them as static files. In this case the development server will serve the ",(0,r.jsx)("b",{children:"data.json"})," file that we call in"," ",(0,r.jsx)("b",{children:"makeApiCall"})," function."]}),(0,r.jsxs)("p",{children:["With the store in place and the actions ready, we can now use them in a React component. Create a file called ",(0,r.jsx)("span",{className:x().highlight_text,children:"Incrementer.js"})," under the ",(0,r.jsx)("b",{children:"src"})," directory and paste the following content inside it:"]}),(0,r.jsx)(g.Z,{code:E.current}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"React-redux"})," gives use two hooks"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"useDispatch"}),", and"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"useSelector"}),". ",(0,r.jsx)("b",{children:"useDispatch"})," will give use the dispatch method that we can use to tigger actions on the store.\xa0",(0,r.jsx)("b",{children:"useSelector"})," accepts an anonymous function which is used to to get a particular data from the store. In this case we have used it as"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"useSelector(state => state.app.number)"}),"\xa0 get the value in the present in number varible from the ",(0,r.jsx)("b",{children:"appSlice"}),"."]}),(0,r.jsxs)("p",{children:["This component has 3 buttons. One button triggers the increment action, the second button triggers the decrement action and the third button triggers the thunk to make an API call. Now lets use this in the application. Modify your ",(0,r.jsx)("b",{children:"app.js"})," so that it looks like below."]}),(0,r.jsx)(g.Z,{code:M.current}),(0,r.jsx)("p",{children:"Thats it you have successfully added Redux to your React app. If all goes well you should see the following result in your browser."}),(0,r.jsx)(l(),{alt:"",loader:m,className:x().result_preview,src:R,width:"578",height:"482"}),(0,r.jsx)("h2",{children:"Bonus:"}),(0,r.jsxs)("p",{children:["If you stuck around this far. Thanks a lot! Here is some bonus content. Using"," ",(0,r.jsx)("b",{children:"useDispatch"})," and ",(0,r.jsx)("b",{children:"useSelector"})," at the component level will make the code pretty messy and harder to maintain. It will also make it harder to write unit tests for this component. There is a better way to pass the actions and the store state to the\xa0",(0,r.jsx)("b",{children:"Incrementer"})," component. We can use the"," ",(0,r.jsx)(N.Z,{className:x().highlight_link,href:"https://react-redux.js.org/api/connect",children:"connect()"})," ","method to connect a React component with the store."]}),(0,r.jsxs)("p",{children:["Add another file called"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"IncrementerContainer.js"})," in the ",(0,r.jsx)("b",{children:"/src"})," ","directory and paste the following contents inside it:"]}),(0,r.jsx)(g.Z,{code:Q.current}),(0,r.jsxs)("p",{children:["The ",(0,r.jsx)("b",{children:"connect()"})," accepts two functions as parameters, which are"," ",(0,r.jsx)("span",{className:x().highlight_text,children:"mapStateToProps"})," and\xa0",(0,r.jsx)("span",{className:x().highlight_text,children:"mapDispatchToProps"}),". ",(0,r.jsx)("b",{children:"mapStateToProps"})," ","as the name suggests can be used to pick the state variables that component needs and pass them as props to the component. ",(0,r.jsx)("b",{children:"mapDispatchToProps"})," will pass the selected actions encapsulated by the dispatch method as props to the component. This is a container component. It is a good practice to send data and actions to all the components through only the container component."]}),(0,r.jsxs)("p",{children:["Now update the ",(0,r.jsx)("b",{children:"Incrementer.js"})," component so that it looks like below:"]}),(0,r.jsx)(g.Z,{code:W.current}),(0,r.jsxs)("p",{children:["In ",(0,r.jsx)("b",{children:"App.js"})," remember to replace ",(0,r.jsx)("b",{children:"Incrementer"})," component with the"," ",(0,r.jsx)("b",{children:"IncrementerContainer"})," component."]}),(0,r.jsx)(g.Z,{code:z.current}),(0,r.jsxs)("p",{children:["Now the code will work exactly like before except the code in ",(0,r.jsx)("b",{children:"Incrementer.js"})," looks much cleaner and easier to maintain."]}),(0,r.jsxs)("p",{children:["You can refer the entire source code for the above in this\xa0",(0,r.jsx)(N.Z,{className:x().highlight_link,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/dinesh24murali/redux_example",children:"github repo"}),"."]})]})})]}),(0,r.jsx)(j.Z,{className:"".concat(x().footer," ").concat(0===e.theme?x().dark:x().light),footerTextColor:x().footer_text_color})]})}}},function(e){e.O(0,[664,675,745,267,774,888,179],function(){return e(e.s=843)}),_N_E=e.O()}]);