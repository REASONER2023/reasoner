"use strict";(self.webpackChunkreasoner=self.webpackChunkreasoner||[]).push([[598],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(a),f=r,g=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return a?n.createElement(g,l(l({ref:e},p),{},{components:a})):n.createElement(g,l({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4528:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={title:"Dataset"},l=void 0,o={unversionedId:"dataset",id:"dataset",title:"Dataset",description:"Introduction",source:"@site/docs/dataset.md",sourceDirName:".",slug:"/dataset",permalink:"/docs/dataset",draft:!1,editUrl:"https://github.com/REASONER2023/reasoner2023.github.io/tree/main/docs/dataset.md",tags:[],version:"current",frontMatter:{title:"Dataset"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How to Obtain the Dataset",id:"how-to-obtain-the-dataset",level:2},{value:"Data description",id:"data-description",level:2},{value:"1. Descriptions of the fields in\xa0<code>interaction.csv</code>",id:"1-descriptions-of-the-fields-ininteractioncsv",level:3},{value:"2. Descriptions of the fields in\xa0<code>user.csv</code>",id:"2-descriptions-of-the-fields-inusercsv",level:3},{value:"3. Descriptions of the fields in\xa0<code>video.csv.</code>",id:"3-descriptions-of-the-fields-invideocsv",level:3},{value:"Statistics",id:"statistics",level:2},{value:"1. The basic statistics of <em>REASONER.</em>",id:"1-the-basic-statistics-of-reasoner",level:3},{value:"2. Statistics on the users",id:"2-statistics-on-the-users",level:3},{value:"3. Statistics on the videos",id:"3-statistics-on-the-videos",level:3},{value:"4. Distribution of user-video and video-user interactions",id:"4-distribution-of-user-video-and-video-user-interactions",level:3},{value:"4. Distribution of the user-tag interactions",id:"4-distribution-of-the-user-tag-interactions",level:3},{value:"4. Distribution of the video-tag interactions",id:"4-distribution-of-the-video-tag-interactions",level:3},{value:"5. The averaged Jaccard similarity for different explanation aspects",id:"5-the-averaged-jaccard-similarity-for-different-explanation-aspects",level:3},{value:"7. The ratios between the numbers of users who select multi-modal explanations and the other ones",id:"7-the-ratios-between-the-numbers-of-users-who-select-multi-modal-explanations-and-the-other-ones",level:3},{value:"7. Statistics on the user reviews",id:"7-statistics-on-the-user-reviews",level:3}],p={toc:d},m="wrapper";function c(t){let{components:e,...i}=t;return(0,r.kt)(m,(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Explainable recommendation has attracted much attention from the academic and industry communities. It has shown great potential for improving the recommendation persuasiveness, informativeness and user satisfaction. While, in the past few years, a lot of promising explainable recommender models have been proposed, the evaluation strategies of these models suffer from several limitations, for example, the explanation ground truths are not labeled by the real users, the explanations are mostly evaluated based on only one aspect, the evaluation strategies can be hard to unify and among others. To alleviate the above problems, we propose to build an explainable recommendation dataset with multi-aspect real user labeled ground truths. In specific, we firstly develop a video recommendation platform, where a series of questions around the explanations are carefully designed. Then, we recruit about 3000 users with different backgrounds to use the system, and collect their behaviors and feedback to our questions. The complete labeling process for each user is shown in following figure. ",(0,r.kt)("img",{alt:"generation",src:a(5728).Z,width:"2054",height:"600"})),(0,r.kt)("h2",{id:"how-to-obtain-the-dataset"},"How to Obtain the Dataset"),(0,r.kt)("p",null,"Please provide us with your basic information including your name, institution, and purpose of use to request the dataset. You can email us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:reasonerdataset@gmail.com"},"reasonerdataset@gmail.com"),"."),(0,r.kt)("h2",{id:"data-description"},"Data description"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"REASONER"),"\xa0contains fifty thousand of user-item interactions as well as the side information including the video categories and user profile. Three files are included in the download data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"}," REASONER\n  \u251c\u2500\u2500 data\n  \u2502\xa0\xa0 \u251c\u2500\u2500 interaction.csv\n  \u2502\xa0\xa0 \u251c\u2500\u2500 user.csv\n  \u2502\xa0\xa0 \u251c\u2500\u2500 video.csv\n")),(0,r.kt)("h3",{id:"1-descriptions-of-the-fields-ininteractioncsv"},"1. Descriptions of the fields in\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"interaction.csv")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field Name:"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"user_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the user."),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"video_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the viewed video."),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"like"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether user like the video. 0 means no, 1 means yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reason_tag"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tags representing why the user likes/dislikes the video."),(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[4728,2216,2523]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rating"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User rating for the video."),(0,r.kt)("td",{parentName:"tr",align:"left"},"float64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"review"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User review for the video."),(0,r.kt)("td",{parentName:"tr",align:"left"},"str"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This animation is very interesting, my friends and I like it very much.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"video_tag"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tags that reflect the content of the video.",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[2738,1216,2223]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interest_tag"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tags that reflect user interests."),(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[738,3226,1323]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"watch_again"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show only the interest tags, will the video be viewed. 0 means no, 1 means yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")))),(0,r.kt)("p",null,"Note that if the user chooses to like the video, the ",(0,r.kt)("inlineCode",{parentName:"p"},"watch_again")," item has no meaning and is set to 0."),(0,r.kt)("h3",{id:"2-descriptions-of-the-fields-inusercsv"},"2. Descriptions of the fields in\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"user.csv")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field Name:"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"user_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the user."),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1005")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"age"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User age.The mapping between id and content is shown below."),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gender"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User gender. 0 means female, 1 menas male."),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"education"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User education level. The mapping between id and content is shown below."),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"career"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User occupation. The mapping between id and content is shown below."),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"income"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User income. The mapping between id and content is shown below.",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User income. The mapping between id and content is shown below."),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hobby"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User hobby."),(0,r.kt)("td",{parentName:"tr",align:"left"},"str"),(0,r.kt)("td",{parentName:"tr",align:"left"},"drawing and soccer.")))),(0,r.kt)("p",null,"The mappings between id and content are as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'age={\n0: "Under 15",\n1: "15-20",\n2: "20-25",\n3: "25-30",\n4: "30-35",\n5: "35-40",\n6: "40-45",\n7: "45-50",\n8: "Over 50"\n},\neducation={\n0: "Elementary School",\n1: "Junior Middle School",\n2: "Senior High School",\n3: "Associate Degree",\n4: "Bachelor\'s Degree",\n5: "Master\'s Degree",\n6: "Doctorate",\n7: "Other"\n},\ncareer={\n0: "Technology",\n1: "Product",\n2: "Design",\n3: "Operations",\n4: "Marketing",\n5: "Human Resources/Finance/Administration",\n6: "Senior Management",\n7: "Sales",\n8: "Media",\n9: "Finance",\n10: "Education and Training",\n11: "Healthcare",\n12: "Procurement/Trade",\n13: "Supply Chain/Logistics",\n14: "Real Estate/Construction",\n15: "Agriculture/Forestry/Animal Husbandry/Fishing",\n16: "Consulting/Translation/Law",\n17: "Tourism",\n18: "Service Industry",\n19: "Manufacturing",\n20: "Other"\n},\nincome={\n0: "0-5000",\n1: "5000-10000",\n2: "10000-15000",\n3: "15000-20000",\n4: "20000 and above"\n}\n\n')),(0,r.kt)("h3",{id:"3-descriptions-of-the-fields-invideocsv"},"3. Descriptions of the fields in\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"video.csv.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field Name:"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"video_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the video."),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The title of the video."),(0,r.kt)("td",{parentName:"tr",align:"left"},"str"),(0,r.kt)("td",{parentName:"tr",align:"left"},"18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"info"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The introduction of the video."),(0,r.kt)("td",{parentName:"tr",align:"left"},"str"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tags"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the video tags."),(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[112,33,1233]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The duration of the video in seconds."),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"120")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The category of the video. The mapping between id and content is shown below.",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")))),(0,r.kt)("p",null,"The mapping between categories and id is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"category={\n0: 'Music',\n1: 'Gaming',\n2: 'Comedy',\n3: 'Lifestyle',\n4: 'Movie & Montage',\n5: 'Science & Technology',\n6: 'Animation',\n7: 'Other'\n}\n")),(0,r.kt)("h2",{id:"statistics"},"Statistics"),(0,r.kt)("h3",{id:"1-the-basic-statistics-of-reasoner"},"1. The basic statistics of ",(0,r.kt)("em",{parentName:"h3"},"REASONER.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"#Users"),(0,r.kt)("th",{parentName:"tr",align:"left"},"#Items"),(0,r.kt)("th",{parentName:"tr",align:"left"},"#Tag"),(0,r.kt)("th",{parentName:"tr",align:"left"},"#Interaction"),(0,r.kt)("th",{parentName:"tr",align:"left"},"#Tag-Interaction"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Sparsity"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"REASONER")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2,997"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4,672"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6,115"),(0,r.kt)("td",{parentName:"tr",align:"left"},"58,497"),(0,r.kt)("td",{parentName:"tr",align:"left"},"68,359"),(0,r.kt)("td",{parentName:"tr",align:"left"},"99.6%")))),(0,r.kt)("h3",{id:"2-statistics-on-the-users"},"2. Statistics on the users"),(0,r.kt)("img",{src:a(7396).Z,style:{width:"80%"}}),(0,r.kt)("h3",{id:"3-statistics-on-the-videos"},"3. Statistics on the videos"),(0,r.kt)("img",{src:a(6323).Z,style:{width:"80%"}}),(0,r.kt)("h3",{id:"4-distribution-of-user-video-and-video-user-interactions"},"4. Distribution of user-video and video-user interactions"),(0,r.kt)("img",{src:a(4057).Z,style:{width:"80%"}}),(0,r.kt)("h3",{id:"4-distribution-of-the-user-tag-interactions"},"4. Distribution of the user-tag interactions"),(0,r.kt)("img",{src:a(3634).Z,style:{width:"80%"}}),(0,r.kt)("h3",{id:"4-distribution-of-the-video-tag-interactions"},"4. Distribution of the video-tag interactions"),(0,r.kt)("img",{src:a(5029).Z,style:{width:"80%"}}),(0,r.kt)("h3",{id:"5-the-averaged-jaccard-similarity-for-different-explanation-aspects"},"5. The averaged Jaccard similarity for different explanation aspects"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Explanation aspects"),(0,r.kt)("th",{parentName:"tr",align:null},"Q1-Q2"),(0,r.kt)("th",{parentName:"tr",align:null},"Q1-Q3"),(0,r.kt)("th",{parentName:"tr",align:null},"Q2-Q3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jaccard similarity"),(0,r.kt)("td",{parentName:"tr",align:null},"0.423"),(0,r.kt)("td",{parentName:"tr",align:null},"0.364"),(0,r.kt)("td",{parentName:"tr",align:null},"0.410")))),(0,r.kt)("h3",{id:"7-the-ratios-between-the-numbers-of-users-who-select-multi-modal-explanations-and-the-other-ones"},"7. The ratios between the numbers of users who select multi-modal explanations and the other ones"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"multi/single"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Reason tag"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Video tag"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Interest tag"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"User"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.635"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.638"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.559")))),(0,r.kt)("h3",{id:"7-statistics-on-the-user-reviews"},"7. Statistics on the user reviews"),(0,r.kt)("img",{src:a(9011).Z,style:{width:"80%"}}))}c.isMDXComponent=!0},9011:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/length-efdaa0a207e71ea9b760ff167e3ff6ad.png"},4057:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/u_v-05b742eb2ecafd5304c563ff58e8dc97.png"},7396:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/user-538b0c412bc2a346702c95da622071f9.png"},3634:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/user_tag-68ae6c9a7253305f519949cda4070b31.png"},6323:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/video-2f8af3eae9d74e72578f52a8ff80ed59.png"},5029:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/video_tag-e0ae0acd66b1dd732640e81643de8641.png"},5728:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/steps-9b478fee8d10060d482e73ff94c97a6b.png"}}]);