(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{9912:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nodejs/introduction_to_prisma",function(){return n(5190)}])},2139:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var t=n(5893);function i(e){let{className:s="",href:n="",children:i,target:a="_blank",rel:r="noopener noreferrer"}=e;return(0,t.jsx)("a",{className:s,href:n,target:a,rel:r,children:i})}n(7294)},5190:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return E}});var t=n(5893),i=n(7294),a=n(9008),r=n.n(a),o=n(8443),l=n(5675),h=n.n(l),c=n(2137),d=n(5992),m=n(6332),u=n(239),p=n(9313),A=n.n(p),g=n(4601),x=n(5479),j=n(1894),f=n(8505),b=n(3138),w=n(6847),y=n.n(w),v=n(2139),P=n(5244),_={src:"/_next/static/media/prisma.6082d105.jpg",height:1240,width:1748,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABQb/2gAMAwEAAhADEAAAAKIS4f8A/8QAGRAAAwADAAAAAAAAAAAAAAAAAQISABEi/9oACAEBAAE/AJay1c6AnP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:6},k={src:"/_next/static/media/prisma-studio.8a0c0f4d.png",height:707,width:720,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEX////+///+/v/+/v7+/f37/P37+/v6+/36+/z6+vr5+vz4+Pn3+Pn29/r19/ny9fjz9Pby9Pjy9Pbu8fTu8PSSyvXsAAAAOElEQVR42iXHuQGAIBAAwYVV7sT/6b9WAyYbhNZAOM73u3co1xPRU9x6ZsxSlwlAXC2qCFaUEf0BOA8BQ+xM52sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};let S=(0,P.X$)(),N="https://www.".concat(b.domain).concat(y().introductionToPrisma),R="Introduction to prisma",T=["NodeJS","Prisma","ORM"],I=w.articleIds.introductionToPrisma,C=e=>{let{children:s}=e;return(0,t.jsx)("span",{className:A().highlight_text,children:s})};function E(){let{state:e}=(0,j.qr)(),s=(0,i.useRef)(null),n=(0,i.useRef)("https://www.linkedin.com/sharing/share-offsite/?url=https://www.".concat(b.domain).concat(y().introductionToPrisma)),a=(0,i.useRef)("https://www.facebook.com/sharer/sharer.php?u=https://www.".concat(b.domain).concat(y().introductionToPrisma)),l=(0,i.useRef)();(0,i.useEffect)(()=>{if(s.current&&I&&b.domain){let e=s.current.querySelectorAll("a");for(let t=0;t<e.length;t+=1)e[t].href&&(e[t].href.includes("twitter")?l.current=e[t].href:e[t].href.includes("facebook")?a.current=e[t].href:e[t].href.includes("linkedin")&&(n.current=e[t].href))}},[s]);let p=e=>{e&&window.open(e,"","width=500,height=500")},w=(0,i.useRef)("npm init -y\nnpm install prisma --save-dev"),P=(0,i.useRef)("npx prisma init"),E=(0,i.useRef)("✔ Your Prisma schema was created at prisma/schema.prisma\nYou can now open it in your favorite editor.\n\nNext steps:\n1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started\n2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb (Preview).\n3. Run prisma db pull to turn your database schema into a Prisma schema.\n4. Run prisma generate to generate the Prisma Client. You can then start querying your database.\n\nMore information in our documentation:\nhttps://pris.ly/d/getting-started\n"),Z=(0,i.useRef)('// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n'),U=(0,i.useRef)('generator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n  shadowDatabaseUrl = env("SHADOW_DATABASE_URL")\n}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  createdAt DateTime @default(now())\n  title     String   @db.VarChar(255)\n  content   String?\n  published Boolean  @default(false)\n  author    User     @relation(fields: [authorId], references: [id])\n  authorId  Int\n}\n\nmodel User {\n  id      Int      @id @default(autoincrement())\n  email   String   @unique\n  name    String?\n  posts   Post[]\n}\n'),B=(0,i.useRef)("npx prisma migrate dev --name init"),D=(0,i.useRef)("npm install @prisma/client"),M=(0,i.useRef)("npx prisma generate"),Q=(0,i.useRef)("const { PrismaClient } = require('@prisma/client')\n\nconst prisma = new PrismaClient()\n\nasync function main() {\n    // insert a record into user table and post table\n    await prisma.user.create({\n        data: {\n            name: 'John',\n            email: 'john@example.com',\n            posts: {\n                create: { title: 'Hello World' },\n            }\n        },\n    })\n    // fetch all the records\n    const allUsers = await prisma.user.findMany({\n        include: {\n            posts: true,\n        },\n    })\n    console.dir(allUsers, { depth: null })\n}\n\nmain()\n    .catch((e) => {\n        throw e\n    })\n    .finally(async () => {\n        await prisma.$disconnect()\n    })"),O=(0,i.useRef)("node ./index.js"),L=(0,i.useRef)("[\n    {\n        id: 1,\n        email: 'john@example.com',\n        name: 'John',\n        posts: [\n            {\n                id: 1,\n                createdAt: 2022-05-26T00:53:45.909Z,\n                title: 'Hello World',\n                content: null,\n                published: false,\n                authorId: 1\n            }\n        ]\n    }\n]"),q=(0,i.useRef)("const allPosts = await prisma.post.findMany({\n    include: {\n        author: true,\n    },\n})"),W=(0,i.useRef)("[\n    {\n        id: 1,\n        createdAt: 2022-05-26T00:53:45.909Z,\n        title: 'Hello World',\n        content: null,\n        published: false,\n        authorId: 1,\n        author: { id: 1, email: 'john@example.com', name: 'John' }\n    }\n]"),Y=(0,i.useRef)('DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"\nSHADOW_DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"'),H=(0,i.useRef)("npx prisma studio");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:R}),(0,t.jsx)(x.Z,{blogTitle:R,blogDescription:"Prisma is a Node.js and TypeScript ORM that can be used to build GraphQL servers, REST APIs, microservices &amp; more.",coverImage:"/blog/introduction_to_prisma/prisma.jpg",currentBlogUrl:N,datePublished:"Sat, 26 May 2022 10:07:00 -0500",dateModified:S,estimatedReadingTimeInMinutes:8,keywords:T.join(", ")})]}),(0,t.jsx)(u.Z,{}),(0,t.jsxs)("div",{ref:s,className:"d-none",children:[(0,t.jsx)(o.Twitter,{link:N}),(0,t.jsx)(o.Facebook,{link:N}),(0,t.jsx)(o.Linkedin,{link:N})]}),(0,t.jsxs)("article",{className:"container ".concat(A().blog_container),itemScope:!0,itemType:"http://schema.org/Article",children:[(0,t.jsxs)("div",{className:A().blog_header_container,children:[(0,t.jsx)("header",{children:(0,t.jsx)("h1",{itemProp:"name",className:A().blog_title,children:R})}),(0,t.jsx)("figure",{children:(0,t.jsx)(h(),{unoptimized:!0,alt:"",className:A().blog_image,src:_,width:"1748",height:"1249"})}),(0,t.jsxs)("div",{className:A().blog_large_screens,children:[(0,t.jsxs)("div",{className:A().sub_header,children:[(0,t.jsx)("div",{className:"d-flex justify-content-left ".concat(A().blog_tags),children:T.map(e=>(0,t.jsx)("div",{className:A().tag,children:e},e))}),(0,t.jsxs)("div",{className:A().read_time,children:[8," Minute Read"]})]}),(0,t.jsxs)("div",{className:"d-flex justify-content-right mt-30",children:[(0,t.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>p(a.current),children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>p(l.current),children:(0,t.jsx)(d.Z,{})}),(0,t.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>p(n.current),children:(0,t.jsx)(m.Z,{})})]})]}),(0,t.jsxs)("div",{className:A().blog_small_screens,children:[(0,t.jsxs)("div",{className:A().sub_header,children:[(0,t.jsx)("div",{className:"d-flex justify-content-left ".concat(A().blog_tags),children:T.map(e=>(0,t.jsx)("div",{className:A().tag,children:e},e))}),(0,t.jsxs)("div",{className:A().read_time,children:[8," Minute Read"]})]}),(0,t.jsxs)("div",{className:"d-flex justify-content-right mt-10",children:[(0,t.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>p(a.current),children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("a",{"aria-label":"twitter",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>p(l.current),children:(0,t.jsx)(d.Z,{})}),(0,t.jsx)("a",{"aria-label":"linkedin",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:()=>p(n.current),children:(0,t.jsx)(m.Z,{})})]})]})]}),(0,t.jsx)("div",{className:"d-flex ".concat(A().blog_content),children:(0,t.jsxs)("div",{className:A().article,children:[(0,t.jsxs)("p",{children:["Writing SQL queries is a hassle. It becomes harder to maintain and easy to mess up."," ",(0,t.jsx)(v.Z,{className:A().highlight_link,href:"https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping",children:"ORMs"})," ","were introduced to solve this problem."]}),(0,t.jsx)("h2",{children:"What is an ORM?"}),(0,t.jsxs)("p",{children:["ORM stands for ",(0,t.jsx)("span",{className:A().highlight_text,children:"Object relational mapper"}),". Object relational mapper is a technique that let's you query and manipulate data from a database using an object-oriented paradigm."," ",(0,t.jsx)(v.Z,{className:A().highlight_link,href:"https://www.djangoproject.com/",children:"Django"})," ","is one of the most popular ORMs. Regardless of what database you use the code for manipulating the database remains the same. This makes it much easier to switch to a different database if the need arises."]}),(0,t.jsx)("h2",{children:"What is Prisma?"}),(0,t.jsx)("p",{children:"Prisma is an ORM for NodeJS. Prisma supports MySQL, SQLite, PostgreSQL, SQL Server, and MongoDB. But support for MongoDB is still not stable yet. Prisma has 3 tools:"}),(0,t.jsxs)("p",{children:[(0,t.jsx)(v.Z,{className:A().highlight_link,href:"https://github.com/prisma/prisma-client-js",children:"Prisma Client JS"})," ","is a database client which allows us to access the database through plain JavaScript methods and objects without having to write the query in the database language itself."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(v.Z,{className:A().highlight_link,href:"https://github.com/prisma/migrate",children:"Prisma Migrate"})," ","is a database schema migration tool. It helps us to track our migration history and easily let's us revert and replay migrations."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(v.Z,{className:A().highlight_link,href:"https://github.com/prisma/studio",children:"Prisma Studio"})," ","is an admin interface that allows us to see, add, and change the data in the database."]}),(0,t.jsx)("h2",{children:"Prerequisites"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["In this tutorial we will be using Prisma in a NodeJS application, so it is recommended that you have some basic knowledge about"," ",(0,t.jsx)(v.Z,{className:A().highlight_link,href:"https://nodejs.org/en/",children:"NodeJS"})," ","and"," ",(0,t.jsx)(v.Z,{className:A().highlight_link,href:"https://www.npmjs.com/",children:"npm"}),"."]}),(0,t.jsxs)("li",{children:["We will be using"," ",(0,t.jsx)(v.Z,{className:A().highlight_link,href:"https://www.postgresql.org/",children:"PostgreSQL"})," ","in this tutorial, so a little knowledge in PostgreSQL helps."]})]}),(0,t.jsx)("h2",{children:"Setting up Prisma:"}),(0,t.jsx)("p",{children:"Lets first setup up an empty nodejs application. Open the terminal in the project directory and run the following commands."}),(0,t.jsx)(g.Z,{code:w.current}),(0,t.jsx)("p",{children:"The above commands will create an empty node js project and will add prisma as a dev dependency to the project."}),(0,t.jsxs)("p",{children:["The next step is the setup Prisma by creating a"," ",(0,t.jsx)(v.Z,{className:A().highlight_link,href:"https://www.prisma.io/docs/concepts/components/prisma-schema",children:"schema"})," ","file using the following command"]}),(0,t.jsx)(g.Z,{code:P.current}),(0,t.jsx)("p",{children:"You should see a response like the following"}),(0,t.jsx)(g.Z,{code:E.current,hideCopyBtn:!0}),(0,t.jsxs)("p",{children:["This creates a schema file called ",(0,t.jsx)("b",{children:"schema.prisma"})," under ",(0,t.jsx)("b",{children:"prisma"})," directory, and a .env file for your environment variables."]}),(0,t.jsx)("h2",{children:"Prisma schema file:"}),(0,t.jsx)("p",{children:"Lets examine the contents in the schema file, The schema file should have some code like below"}),(0,t.jsx)(g.Z,{code:Z.current,hideCopyBtn:!0}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("span",{className:A().highlight_text,children:"generator"})," section is where we specify that we want to generate Prisma's client. The client is generated by running the"," ",(0,t.jsx)("b",{children:"prisma generate"})," command. We need to run this command whenever make a change to our database schema."]}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("span",{className:A().highlight_text,children:"datasource"})," section is where we provide the database provider that we are going to use. By default ",(0,t.jsx)("b",{children:"postgresql"})," has been selected. We can give the database connect URL using the environment variable"," ",(0,t.jsx)("b",{children:"DATABASE_URL"}),". Now add a new line under ",(0,t.jsx)("b",{children:"url"})," and add."]}),(0,t.jsx)("p",{children:(0,t.jsx)("b",{children:'shadowDatabaseUrl = env("SHADOW_DATABASE_URL")'})}),(0,t.jsxs)("p",{children:["The"," ",(0,t.jsx)(v.Z,{className:A().highlight_link,href:"https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database",children:"shadow databaselcoation"})," ","is created and deleted automatically each time you run a development-focused command and is primarily used to detect problems such as schema drift. This is not required if the database user you supplied to prisma has the privilege to create a new database. You won't need this when setting up prisma, but you will need this as you start making changes to the database"]}),(0,t.jsxs)("p",{children:["Open the ",(0,t.jsx)(C,{children:".env"})," file and update the connection URL to point to your own database."]}),(0,t.jsx)("p",{children:"The format of the connection URL depends on the database you use. The .env file should have 2 variables, with the updated connection urls"}),(0,t.jsx)(g.Z,{code:Y.current}),(0,t.jsxs)("p",{children:["Next open the ",(0,t.jsx)("b",{children:"schema.prisma"})," file and let's add the"," ",(0,t.jsx)("span",{className:A().highlight_text,children:"User"})," and"," ",(0,t.jsx)("span",{className:A().highlight_text,children:"Post"})," modals in the ",(0,t.jsx)("b",{children:"model"})," block. After all the changes the ",(0,t.jsx)("b",{children:"schema.prisma"})," file should look like the following."]}),(0,t.jsx)(g.Z,{code:U.current}),(0,t.jsxs)("p",{children:["Modals are the entities that you use in your application. The ",(0,t.jsx)("b",{children:"User"})," modal has the following attributes"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{className:A().highlight_text,children:"id"})," is the primary key of ",(0,t.jsx)("b",{children:"Int"})," ","datatype, and it is auto-incremented. We can use ",(0,t.jsx)("b",{children:"@id"})," attribute to make a field as the primary key"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{className:A().highlight_text,children:"email"})," and"," ",(0,t.jsx)("span",{className:A().highlight_text,children:"name"})," are of type ",(0,t.jsx)("b",{children:"String"})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{className:A().highlight_text,children:"posts"})," is of type ",(0,t.jsx)("b",{children:"Post"})," with the type modifier ",(0,t.jsx)("b",{children:"[]"}),", which means we can keep a list of posts under a user"]}),(0,t.jsxs)("p",{children:["Similarly we have the ",(0,t.jsx)(C,{children:"Post"})," modal has the following attributes"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(C,{children:"id"})," is the primary key of ",(0,t.jsx)("b",{children:"Int"})," type."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(C,{children:"createdAt"})," is of type ",(0,t.jsx)("b",{children:"DateTime"}),"."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(C,{children:"title"})," and ",(0,t.jsx)(C,{children:"content"})," are of type ",(0,t.jsx)("b",{children:"String"})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(C,{children:"published"})," is of type ",(0,t.jsx)("b",{children:"Boolean"})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(C,{children:"author"})," is of type ",(0,t.jsx)("b",{children:"User"}),". This is required, as we need to tell Prisma that the Post modal has a foreign key ","(in this case a many to many relation)"," ","relation with ",(0,t.jsx)("b",{children:"User"})," modal. We can specify which field in the Post modal we can use to store the user id of the post, in this tutorial we have mentiond that with"," ",(0,t.jsx)("b",{children:"@relation(fields: [authorId]"})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(C,{children:"authorId"})," is of ",(0,t.jsx)("b",{children:"Int"})," type, and it is used to establish the many to many relationship with the user modal."]}),(0,t.jsx)("h2",{children:"Using Prisma Migrate"}),(0,t.jsx)("p",{children:"Run the following command to generate the tables in your database."}),(0,t.jsx)(g.Z,{code:B.current}),(0,t.jsxs)("p",{children:["This command will also generate a migration file under"," ",(0,t.jsx)(C,{children:"prisma/migrations"})," directory. It is a simple SQL file making it user friendly to see what Prisma does under the hood."]}),(0,t.jsx)("h2",{children:"Installing Prisma Client"}),(0,t.jsx)("p",{children:"Install Prisma database client using the following command"}),(0,t.jsx)(g.Z,{code:D.current}),(0,t.jsx)("p",{children:"You can use the following command to generate Prisma client"}),(0,t.jsx)(g.Z,{code:M.current}),(0,t.jsxs)("p",{children:["Whenever you make changes to your Prisma schema in the future, you manually need to invoke"," ",(0,t.jsx)("b",{children:"prisma generate"})," to accommodate the changes in your Prisma Client API."]}),(0,t.jsx)("h2",{children:"Querying the database"}),(0,t.jsxs)("p",{children:["Create a new file called ",(0,t.jsx)("b",{children:"index.js"})," and add the following code into it"]}),(0,t.jsx)(g.Z,{code:Q.current}),(0,t.jsxs)("p",{children:["In the above code first we have imported the prisma client and create a new instance using"," ",(0,t.jsx)("b",{children:"const prisma = new PrismaClient()"}),"."]}),(0,t.jsxs)("p",{children:["Then we declared the ",(0,t.jsx)("b",{children:"main()"})," function and we have inserted a new record into User modal, we can also insert the Post associated with the user in the same command. Prisma will add a record to the user table and the post table."]}),(0,t.jsx)("p",{children:"Then we have fetched all the records in the User table along with the Posts associated with the user"}),(0,t.jsx)("p",{children:"We have invoked the main function to run the queries. Now run the index.js file using"}),(0,t.jsx)(g.Z,{code:O.current}),(0,t.jsx)("p",{children:"The user record along with the posts will be printed in the terminal"}),(0,t.jsx)(g.Z,{code:L.current,hideCopyBtn:!0}),(0,t.jsx)("p",{children:"Similarly if you want to fetch all the posts and fetch the users associated with them. You can use the following code"}),(0,t.jsx)(g.Z,{code:q.current}),(0,t.jsx)("p",{children:"This will print the following"}),(0,t.jsx)(g.Z,{code:W.current}),(0,t.jsx)("p",{children:"Congratulations \uD83C\uDF89 you have successfully setup Prisma."}),(0,t.jsx)("h2",{children:"Exploring Prisma Studio Admin"}),(0,t.jsx)("p",{children:"Prisma comes with an admin UI for performing CRUD operations on our data. Run the following command to open Prisma studio."}),(0,t.jsx)(g.Z,{code:H.current}),(0,t.jsxs)("p",{children:["If you open"," ",(0,t.jsx)(v.Z,{className:A().highlight_link,href:"http://localhost:5555/",children:"http://localhost:5555/"})," ","in your browser you can access the admin interface."]}),(0,t.jsx)(h(),{unoptimized:!0,alt:"",className:A().result_preview,src:k,width:"578",height:"482"}),(0,t.jsx)("p",{children:"You can click and open the tables"}),(0,t.jsxs)("p",{children:["You can refer the entire source code for the above in this\xa0",(0,t.jsx)(v.Z,{className:A().highlight_link,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/dinesh24murali/prisma_example/tree/javascript-setup",children:"github repo"}),"."]})]})})]}),(0,t.jsx)(f.Z,{className:"".concat(A().footer," ").concat(0===e.theme?A().dark:A().light),footerTextColor:A().footer_text_color})]})}}},function(e){e.O(0,[664,675,745,267,774,888,179],function(){return e(e.s=9912)}),_N_E=e.O()}]);