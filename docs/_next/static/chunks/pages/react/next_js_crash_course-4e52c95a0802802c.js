(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{177:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react/next_js_crash_course",function(){return s(8274)}])},2139:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(5893);function a(e){let{className:t="",href:s="",children:a,target:i="_blank",rel:r="noopener noreferrer"}=e;return(0,n.jsx)("a",{className:t,href:s,target:i,rel:r,children:a})}s(7294)},8274:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return C}});var n=s(5893),a=s(7294),i=s(9008),r=s.n(i),l=s(8443),o=s(5675),c=s.n(o),h=s(2137),d=s(5992),p=s(6332),u=s(239),x=s(9313),g=s.n(x),m=s(4601),j=s(5479),A=s(1894),f=s(8505),w=s(3138),b=s(6847),N=s.n(b),y=s(2139),_={src:"/_next/static/media/next_js_crash_course.5cfb541e.jpg",height:1240,width:1748,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAmgQv/8QAHRAAAQIHAAAAAAAAAAAAAAAAEQMSAAETFSMxcf/aAAgBAQABPwC4FCSQyu3TTDBwmP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:6},v={src:"/_next/static/media/cropped-file-structure.35b8fbfa.png",height:367,width:403,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAlElEQVR42j2MSwqDMBRF30akmL+8WGktJi1YsBlUiNFKozP3v41GBz0c7uTCga57Lcu6bVvfv7PsJKUSQiYBtQ4hWGsRNSGEUkYP4HF/xrjWdaP1parqv2Cvbv58vfeIpZRFUaBSmBYao8YxjNNkjKGEsoMUhLY9xzjHuDjnBBeMCc53obwZP4TBD4g6zwnfP86Y+AH2fSIWbmbGWwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},k=s(5244);let S=b.articleIds.nextJsCrashCourse;function C(){let{state:e}=(0,A.qr)(),t=(0,a.useRef)(null),s=(0,a.useRef)("https://www.linkedin.com/sharing/share-offsite/?url=https://www.".concat(w.domain).concat(N().nextJsCrashCourse)),i=(0,a.useRef)("https://www.facebook.com/sharer/sharer.php?u=https://www.".concat(w.domain).concat(N().nextJsCrashCourse)),o=(0,a.useRef)();(0,a.useEffect)(()=>{if(t.current&&S&&w.domain){let e=t.current.querySelectorAll("a");for(let n=0;n<e.length;n+=1)e[n].href&&(e[n].href.includes("twitter")?o.current=e[n].href:e[n].href.includes("facebook")?i.current=e[n].href:e[n].href.includes("linkedin")&&(s.current=e[n].href))}},[t]);let x=e=>{e&&window.open(e,"","width=500,height=500")},b=(0,k.X$)(),C="https://www.".concat(w.domain).concat(N().nextJsCrashCourse),I="Next.js crash course",R=["ReactJS","NextJS"],T=(0,a.useRef)("npx create-next-app@latest"),E=(0,a.useRef)("import React from 'react';\n\nimport styles from '../styles/sample.module.css';\n\nexport default function index() {\n\n    return <h1 className={styles.heading}>Sample</h1>;\n}\n"),B=(0,a.useRef)(".heading {\n    font-size: 24px;\n    color: red;\n}\n"),Q=(0,a.useRef)("import React from 'react';\n\nimport styles from '../styles/sample.module.css'\n\nexport default function index({\n    title\n}) {\n\n    return <h1 className={styles.heading}>{title}</h1>;\n}\n\nexport async function getStaticProps(context) {\n\n    let data = await fetch('http://localhost:3000/data.json');\n    data = await data.json();\n\n    return {\n        props: {\n            title: data.data.title\n        }, // will be passed to the page component as props\n    }\n}\n"),Z=(0,a.useRef)('{\n    "data": {\n        "title": "Simple"\n    }\n}'),P=(0,a.useRef)("module.exports = {\n    reactStrictMode: true,\n    images: {\n      loader: 'akamai',\n      path: '/',\n    },\n}\n"),M=(0,a.useRef)("import React from 'react';\n\nimport styles from '../styles/sample.module.css'\n\nexport default function index({\n    title\n}) {\n\n    return <h1 className={styles.heading}>{title}</h1>;\n}\n\nexport async function getStaticProps(context) {\n\n    let data = await fetch('http://localhost:3000/data.json');\n    data = await data.json();\n\n    return {\n        props: {\n            title: data.data.title\n        }, // will be passed to the page component as props\n        revalidate: 10, // In seconds\n    }\n}\n");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:I}),(0,n.jsx)(j.Z,{blogTitle:I,blogDescription:"In this tutorial we will learn what next.js is and ",coverImage:"/blog/next_js_crash_course/next_js_crash_course.jpg",currentBlogUrl:C,datePublished:"Sat, 12 Feb 2022 10:07:00 -0500",dateModified:b,estimatedReadingTimeInMinutes:8,keywords:R.join(", ")})]}),(0,n.jsx)(u.Z,{}),(0,n.jsxs)("div",{ref:t,className:"d-none",children:[(0,n.jsx)(l.Twitter,{link:C}),(0,n.jsx)(l.Facebook,{link:C}),(0,n.jsx)(l.Linkedin,{link:C})]}),(0,n.jsxs)("article",{className:"container ".concat(g().blog_container),itemScope:!0,itemType:"http://schema.org/Article",children:[(0,n.jsxs)("div",{className:g().blog_header_container,children:[(0,n.jsx)("header",{children:(0,n.jsx)("h1",{itemProp:"name",className:g().blog_title,children:I})}),(0,n.jsx)("figure",{children:(0,n.jsx)(c(),{alt:"Photo by Elijah O'Donnell from Pexels",className:g().blog_image,src:_,width:"1748",unoptimized:!0,height:"1249"})}),(0,n.jsxs)("div",{className:g().blog_large_screens,children:[(0,n.jsxs)("div",{className:g().sub_header,children:[(0,n.jsx)("div",{className:"d-flex justify-content-left ".concat(g().blog_tags),children:R.map(e=>(0,n.jsx)("div",{className:g().tag,children:e},e))}),(0,n.jsxs)("div",{className:g().read_time,children:[8," Minute Read"]})]}),(0,n.jsxs)("div",{className:"d-flex justify-content-right mt-30",children:[(0,n.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>x(i.current),children:(0,n.jsx)(h.Z,{})}),(0,n.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>x(o.current),children:(0,n.jsx)(d.Z,{})}),(0,n.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>x(s.current),children:(0,n.jsx)(p.Z,{})})]})]}),(0,n.jsxs)("div",{className:g().blog_small_screens,children:[(0,n.jsxs)("div",{className:g().sub_header,children:[(0,n.jsx)("div",{className:"d-flex justify-content-left ".concat(g().blog_tags),children:R.map(e=>(0,n.jsx)("div",{className:g().tag,children:e},e))}),(0,n.jsxs)("div",{className:g().read_time,children:[8," Minute Read"]})]}),(0,n.jsxs)("div",{className:"d-flex justify-content-right mt-10",children:[(0,n.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>x(i.current),children:(0,n.jsx)(h.Z,{})}),(0,n.jsx)("a",{"aria-label":"twitter",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>x(o.current),children:(0,n.jsx)(d.Z,{})}),(0,n.jsx)("a",{"aria-label":"linkedin",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>x(s.current),children:(0,n.jsx)(p.Z,{})})]})]})]}),(0,n.jsx)("div",{className:"d-flex ".concat(g().blog_content),children:(0,n.jsxs)("div",{className:g().article,children:[(0,n.jsxs)("p",{children:["In this tutorial we will learn what\xa0",(0,n.jsx)(y.Z,{className:g().highlight_link,href:"https://nextjs.org/",children:"Next.js"})," ","is, and how we can use it with React. A traditional React app is rendered in the client side. When we open a React application in the browser it will download a shell of the HTML page lacking any rendered content. Then it will fetch the javascript that contains our React code to make the page usable. There are 2 drawbacks to this"]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"The content is not reliably indexed by all search engines or read by social media link bots"}),(0,n.jsx)("li",{children:"It can take longer for the first content to paint when a user first lands on the webpage"})]}),(0,n.jsx)("p",{children:"Next.js is React framework that allows us to write web apps that support SEO (Search Engine Optimization). Instead of rendering the page on the client side, the page will be rendered in the server and the user or bot that visits our webpage will get the fully rendered HTML. After rendering the initial page client side rendering takes over and it works like a traditional React app. It is the best of both worlds."}),(0,n.jsx)("p",{children:"Next.js is flexible and can be used in different ways:"}),(0,n.jsx)("h2",{children:"Static generation:"}),(0,n.jsx)("p",{children:"This is suitable for websites with content that doesn't change often, like a blog. Static generation allows you to render your pages at build time and use those build files in a server or a CDN."}),(0,n.jsx)("p",{children:"This is fine if your application has less than 100 pages, as your application gets bigger it will become hard to maintain."}),(0,n.jsx)("h2",{children:"Server side rendering:"}),(0,n.jsx)("p",{children:"This type of rendering it suitable for applications that change often and has a lot of dynamic content. In this approach the page will be rendered every time there is a request to the server, unlike static generation where the files are rendered at build time."}),(0,n.jsx)("h2",{children:"Incremental Static Generation:"}),(0,n.jsx)("p",{children:"Incremental Static Generation is something in between the above two approaches. In this approach the server will send static files to the client but we can set a time interval, and Next will rerender the pages again and those newly generated files will be sent to the browser."}),(0,n.jsx)("h2",{children:"Setup a Next.js project:"}),(0,n.jsxs)("p",{children:["Lets learn how to setup a simple Next.js project. Next.js requires\xa0",(0,n.jsx)(y.Z,{className:g().highlight_link,href:"https://nodejs.org/",children:"Node.js 12.22.0"})," ","or later. Start by running the following command in your terminal. This will setup a simple next.js project"]}),(0,n.jsx)(m.Z,{code:T.current}),(0,n.jsx)("p",{children:"The above command will generate a project structure similar to the following. Open the project in your favorite editor, and let's explore what the project structure looks like."}),(0,n.jsx)(c(),{alt:"",unoptimized:!0,className:g().result_preview,src:v,width:"403",height:"367"}),(0,n.jsxs)("p",{children:["Next.js has its own router out of the box. Each file in the",(0,n.jsx)("span",{className:g().highlight_text,children:"pages"}),"directory exports a React component that represents a route. The folder structure will mirror the actual URLs that user will navigate to. We will see more about this shortly."]}),(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("span",{className:g().highlight_text,children:"styles"})," directory contains all the styles that are used in the application. In the",(0,n.jsx)("span",{className:g().highlight_text,children:"globals.css"})," file you can put styles that apply to the entire application. Next.js supports\xa0",(0,n.jsx)(y.Z,{className:g().highlight_link,href:"https://css-tricks.com/css-modules-part-1-need/",children:"css modules"}),", any css file that ends with",(0,n.jsx)("span",{className:g().highlight_text,children:".module.css"})," is a css module. You can write css for a specific file using css modules. Using css modules you don't have to think of unique class names, next.js will handle the class names."]}),(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("span",{className:g().highlight_text,children:"public"})," folder is where static assets like images and other files are present."]}),(0,n.jsxs)("p",{children:["You can change some configurations for your Next.js app in",(0,n.jsx)("span",{className:g().highlight_text,children:"next.config.js"})," file"]}),(0,n.jsxs)("p",{children:["Now let's add a new route to our application, in the ",(0,n.jsx)("b",{children:"pages"})," folder create a new file called ",(0,n.jsx)("span",{className:g().highlight_text,children:"sample.js"}),"and paste the following code into it."]}),(0,n.jsx)(m.Z,{code:E.current}),(0,n.jsxs)("p",{children:["Create a new file under ",(0,n.jsx)("b",{children:"styles"})," folder called"," ",(0,n.jsx)("span",{className:g().highlight_text,children:"sample.module.css"}),"and paste the following content inside it."]}),(0,n.jsx)(m.Z,{code:B.current}),(0,n.jsxs)("p",{children:["You will notice that in the ",(0,n.jsx)("b",{children:"sample.js"})," we have imported ",(0,n.jsx)("b",{children:"sample.module.css"}),"\xa0 as a css module and used the class"," ",(0,n.jsx)("span",{className:g().highlight_text,children:"heading"}),"as a JavaScript object."]}),(0,n.jsxs)("p",{children:["start the server by running ",(0,n.jsx)("span",{className:g().highlight_text,children:"npm run dev"})," or",(0,n.jsx)("span",{className:g().highlight_text,children:"yarn dev"})," in the terminal. If you go to\xa0",(0,n.jsx)(y.Z,{className:g().highlight_link,href:"http://localhost:3000/sample/",children:"localhost:3000/sample/"})," ","in you browser you will notice that the new page that we added in the next.js app is rendered"]}),(0,n.jsxs)("p",{children:["If you use the browser's ",(0,n.jsx)("b",{children:"devTools"})," and check the class name that is used in the"," ",(0,n.jsx)("b",{children:"<h1>"})," tag you will notice that it is different and probably has a random string appended at the end of the class name. This is how the class names are kept unique throughout the application."]}),(0,n.jsx)("h2",{children:"Setup static generation:"}),(0,n.jsxs)("p",{children:["Now let's setup static generation in our app. In our ",(0,n.jsx)("b",{children:"sample.js"})," file let's add a method called ",(0,n.jsx)("span",{className:g().highlight_text,children:"getStaticProps"}),"\xa0 and update the code to the following"]}),(0,n.jsx)(m.Z,{code:Q.current}),(0,n.jsxs)("p",{children:["Create a file called ",(0,n.jsx)("span",{className:g().highlight_text,children:"data.json"})," under the\xa0",(0,n.jsx)("b",{children:"public"})," directory and paste the following content into it"]}),(0,n.jsx)(m.Z,{code:Z.current}),(0,n.jsxs)("p",{children:["At build time when Next is building the app, it will call the ",(0,n.jsx)("b",{children:"getStaticProps"}),"\xa0 method to get the data needed for rendering the page. We can fetch the data we need by calling an API or making a database connection since this function runs asynchronously. In this case we are calling an api to get data from a json file."]}),(0,n.jsxs)("p",{children:["Now, before we can build we need to put the export script in the package so that next will generate the build files. Open your"," ",(0,n.jsx)("span",{className:g().highlight_text,children:"package.json"}),"\xa0 and put"," ",(0,n.jsx)("span",{className:g().highlight_text,children:'"postbuild": "next export"'})," ","under the scripts section along side"," ",(0,n.jsx)("span",{className:g().highlight_text,children:'"build":"next build"'})]}),(0,n.jsxs)("p",{children:["Keep the development server running (run ",(0,n.jsx)("b",{children:"yarn dev"}),"), and open another terminal and run",(0,n.jsx)("span",{className:g().highlight_text,children:"yarn build"}),". This will build our app and will automatically run the ",(0,n.jsx)("b",{children:"postbuild"})," script that we just added. We needed to keep the development server running because it will serve the ",(0,n.jsx)("b",{children:"data.json"})," file that next will use at build time."]}),(0,n.jsxs)("p",{children:["If you are getting an error during build please update your ",(0,n.jsx)("b",{children:"next.config.js"}),"\xa0 file to the following. This will fix the image export problem which might occur"]}),(0,n.jsx)(m.Z,{code:P.current}),(0,n.jsxs)("p",{children:["If the build worked you should see a folder called"," ",(0,n.jsx)("span",{className:g().highlight_text,children:"out"}),"\xa0 Which contains all the static html."]}),(0,n.jsx)("h2",{children:"Setup server side rendering:"}),(0,n.jsxs)("p",{children:["To setup server size rendering rename ",(0,n.jsx)("b",{children:"getStaticProps"})," to"," ",(0,n.jsx)("span",{className:g().highlight_text,children:"getServerSideProps"}),".\xa0 It work exactly like before, except instead of generating the html at build time, it will generate for each request."]}),(0,n.jsx)("h2",{children:"Setup incremental static generation:"}),(0,n.jsxs)("p",{children:["To setup ",(0,n.jsx)("span",{className:g().highlight_text,children:"Incremental Static Generation"})," you need to add\xa0",(0,n.jsx)("span",{className:g().highlight_text,children:"revalidate: 10, // In seconds"})," to the"," ",(0,n.jsx)("b",{children:"getStaticProps"}),"\xa0 method as shown below"]}),(0,n.jsx)(m.Z,{code:M.current}),(0,n.jsxs)("p",{children:["The interval we have given here is 10 seconds, Next will generate the html every 10 seconds instead of generating at each request. However you need a service provider like\xa0",(0,n.jsx)(y.Z,{className:g().highlight_link,href:"https://vercel.com/",children:"vercel"})," ","who provide the servers that support incremental static generation. Because the generated files need to be cached to global CDN based on the given interval"]}),(0,n.jsxs)("p",{children:["The source code for this entire tutorial can be found in this\xa0",(0,n.jsx)(y.Z,{className:g().highlight_link,href:"https://github.com/dinesh24murali/nextjs_example",children:"repo"}),"."]})]})})]}),(0,n.jsx)(f.Z,{className:"".concat(g().footer," ").concat(0===e.theme?g().dark:g().light),footerTextColor:g().footer_text_color})]})}}},function(e){e.O(0,[664,675,745,267,774,888,179],function(){return e(e.s=177)}),_N_E=e.O()}]);