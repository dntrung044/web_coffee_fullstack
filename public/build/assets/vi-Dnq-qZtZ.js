function l(t){const n=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&n==="[object Date]"?new t.constructor(+t):typeof t=="number"||n==="[object Number]"||typeof t=="string"||n==="[object String]"?new Date(t):new Date(NaN)}function M(t,n){return t instanceof Date?new t.constructor(n):new Date(n)}const _=6048e5,L=864e5;let j={};function D(){return j}function O(t,n){var u,c,h,m;const e=D(),a=(n==null?void 0:n.weekStartsOn)??((c=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??e.weekStartsOn??((m=(h=e.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??0,r=l(t),i=r.getDay(),s=(i<a?7:0)+i-a;return r.setDate(r.getDate()-s),r.setHours(0,0,0,0),r}function x(t){return O(t,{weekStartsOn:1})}function X(t){const n=l(t),e=n.getFullYear(),a=M(t,0);a.setFullYear(e+1,0,4),a.setHours(0,0,0,0);const r=x(a),i=M(t,0);i.setFullYear(e,0,4),i.setHours(0,0,0,0);const s=x(i);return n.getTime()>=r.getTime()?e+1:n.getTime()>=s.getTime()?e:e-1}function E(t){const n=l(t);return n.setHours(0,0,0,0),n}function F(t){const n=l(t),e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),+t-+e}function A(t,n){const e=E(t),a=E(n),r=+e-F(e),i=+a-F(a);return Math.round((r-i)/L)}function R(t){const n=X(t),e=M(t,0);return e.setFullYear(n,0,4),e.setHours(0,0,0,0),x(e)}function G(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function J(t){if(!G(t)&&typeof t!="number")return!1;const n=l(t);return!isNaN(Number(n))}function z(t){const n=l(t),e=M(t,0);return e.setFullYear(n.getFullYear(),0,1),e.setHours(0,0,0,0),e}const U={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},K=(t,n,e)=>{let a;const r=U[t];return typeof r=="string"?a=r:n===1?a=r.one:a=r.other.replace("{{count}}",n.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+a:a+" ago":a};function v(t){return(n={})=>{const e=n.width?String(n.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}const Z={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},tt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},et={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},nt={date:v({formats:Z,defaultWidth:"full"}),time:v({formats:tt,defaultWidth:"full"}),dateTime:v({formats:et,defaultWidth:"full"})},at={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},rt=(t,n,e,a)=>at[t];function g(t){return(n,e)=>{const a=e!=null&&e.context?String(e.context):"standalone";let r;if(a==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,u=e!=null&&e.width?String(e.width):s;r=t.formattingValues[u]||t.formattingValues[s]}else{const s=t.defaultWidth,u=e!=null&&e.width?String(e.width):t.defaultWidth;r=t.values[u]||t.values[s]}const i=t.argumentCallback?t.argumentCallback(n):n;return r[i]}}const it={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ot={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},st={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ut={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ct={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ht={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},dt=(t,n)=>{const e=Number(t),a=e%100;if(a>20||a<10)switch(a%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},mt={ordinalNumber:dt,era:g({values:it,defaultWidth:"wide"}),quarter:g({values:ot,defaultWidth:"wide",argumentCallback:t=>t-1}),month:g({values:st,defaultWidth:"wide"}),day:g({values:ut,defaultWidth:"wide"}),dayPeriod:g({values:ct,defaultWidth:"wide",formattingValues:ht,defaultFormattingWidth:"wide"})};function w(t){return(n,e={})=>{const a=e.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=n.match(r);if(!i)return null;const s=i[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?lt(u,y=>y.test(s)):ft(u,y=>y.test(s));let h;h=t.valueCallback?t.valueCallback(c):c,h=e.valueCallback?e.valueCallback(h):h;const m=n.slice(s.length);return{value:h,rest:m}}}function ft(t,n){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&n(t[e]))return e}function lt(t,n){for(let e=0;e<t.length;e++)if(n(t[e]))return e}function B(t){return(n,e={})=>{const a=n.match(t.matchPattern);if(!a)return null;const r=a[0],i=n.match(t.parsePattern);if(!i)return null;let s=t.valueCallback?t.valueCallback(i[0]):i[0];s=e.valueCallback?e.valueCallback(s):s;const u=n.slice(r.length);return{value:s,rest:u}}}const gt=/^(\d+)(th|st|nd|rd)?/i,wt=/\d+/i,yt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bt={any:[/^b/i,/^(a|c)/i]},Tt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Mt={any:[/1/i,/2/i,/3/i,/4/i]},Pt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},vt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Wt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ot={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Dt={ordinalNumber:B({matchPattern:gt,parsePattern:wt,valueCallback:t=>parseInt(t,10)}),era:w({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),quarter:w({matchPatterns:Tt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:w({matchPatterns:Pt,defaultMatchWidth:"wide",parsePatterns:vt,defaultParseWidth:"any"}),day:w({matchPatterns:kt,defaultMatchWidth:"wide",parsePatterns:Wt,defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:Ot,defaultMatchWidth:"any",parsePatterns:xt,defaultParseWidth:"any"})},St={code:"en-US",formatDistance:K,formatLong:nt,formatRelative:rt,localize:mt,match:Dt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ct(t){const n=l(t);return A(n,z(n))+1}function Nt(t){const n=l(t),e=+x(n)-+R(n);return Math.round(e/_)+1}function V(t,n){var m,y,k,W;const e=l(t),a=e.getFullYear(),r=D(),i=(n==null?void 0:n.firstWeekContainsDate)??((y=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??r.firstWeekContainsDate??((W=(k=r.locale)==null?void 0:k.options)==null?void 0:W.firstWeekContainsDate)??1,s=M(t,0);s.setFullYear(a+1,0,i),s.setHours(0,0,0,0);const u=O(s,n),c=M(t,0);c.setFullYear(a,0,i),c.setHours(0,0,0,0);const h=O(c,n);return e.getTime()>=u.getTime()?a+1:e.getTime()>=h.getTime()?a:a-1}function pt(t,n){var u,c,h,m;const e=D(),a=(n==null?void 0:n.firstWeekContainsDate)??((c=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:c.firstWeekContainsDate)??e.firstWeekContainsDate??((m=(h=e.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,r=V(t,n),i=M(t,0);return i.setFullYear(r,0,a),i.setHours(0,0,0,0),O(i,n)}function Yt(t,n){const e=l(t),a=+O(e,n)-+pt(e,n);return Math.round(a/_)+1}function o(t,n){const e=t<0?"-":"",a=Math.abs(t).toString().padStart(n,"0");return e+a}const b={y(t,n){const e=t.getFullYear(),a=e>0?e:1-e;return o(n==="yy"?a%100:a,n.length)},M(t,n){const e=t.getMonth();return n==="M"?String(e+1):o(e+1,2)},d(t,n){return o(t.getDate(),n.length)},a(t,n){const e=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(t,n){return o(t.getHours()%12||12,n.length)},H(t,n){return o(t.getHours(),n.length)},m(t,n){return o(t.getMinutes(),n.length)},s(t,n){return o(t.getSeconds(),n.length)},S(t,n){const e=n.length,a=t.getMilliseconds(),r=Math.trunc(a*Math.pow(10,e-3));return o(r,n.length)}},P={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},q={G:function(t,n,e){const a=t.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return e.era(a,{width:"abbreviated"});case"GGGGG":return e.era(a,{width:"narrow"});case"GGGG":default:return e.era(a,{width:"wide"})}},y:function(t,n,e){if(n==="yo"){const a=t.getFullYear(),r=a>0?a:1-a;return e.ordinalNumber(r,{unit:"year"})}return b.y(t,n)},Y:function(t,n,e,a){const r=V(t,a),i=r>0?r:1-r;if(n==="YY"){const s=i%100;return o(s,2)}return n==="Yo"?e.ordinalNumber(i,{unit:"year"}):o(i,n.length)},R:function(t,n){const e=X(t);return o(e,n.length)},u:function(t,n){const e=t.getFullYear();return o(e,n.length)},Q:function(t,n,e){const a=Math.ceil((t.getMonth()+1)/3);switch(n){case"Q":return String(a);case"QQ":return o(a,2);case"Qo":return e.ordinalNumber(a,{unit:"quarter"});case"QQQ":return e.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,n,e){const a=Math.ceil((t.getMonth()+1)/3);switch(n){case"q":return String(a);case"qq":return o(a,2);case"qo":return e.ordinalNumber(a,{unit:"quarter"});case"qqq":return e.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,n,e){const a=t.getMonth();switch(n){case"M":case"MM":return b.M(t,n);case"Mo":return e.ordinalNumber(a+1,{unit:"month"});case"MMM":return e.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(a,{width:"wide",context:"formatting"})}},L:function(t,n,e){const a=t.getMonth();switch(n){case"L":return String(a+1);case"LL":return o(a+1,2);case"Lo":return e.ordinalNumber(a+1,{unit:"month"});case"LLL":return e.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(a,{width:"wide",context:"standalone"})}},w:function(t,n,e,a){const r=Yt(t,a);return n==="wo"?e.ordinalNumber(r,{unit:"week"}):o(r,n.length)},I:function(t,n,e){const a=Nt(t);return n==="Io"?e.ordinalNumber(a,{unit:"week"}):o(a,n.length)},d:function(t,n,e){return n==="do"?e.ordinalNumber(t.getDate(),{unit:"date"}):b.d(t,n)},D:function(t,n,e){const a=Ct(t);return n==="Do"?e.ordinalNumber(a,{unit:"dayOfYear"}):o(a,n.length)},E:function(t,n,e){const a=t.getDay();switch(n){case"E":case"EE":case"EEE":return e.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(a,{width:"short",context:"formatting"});case"EEEE":default:return e.day(a,{width:"wide",context:"formatting"})}},e:function(t,n,e,a){const r=t.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(n){case"e":return String(i);case"ee":return o(i,2);case"eo":return e.ordinalNumber(i,{unit:"day"});case"eee":return e.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(r,{width:"short",context:"formatting"});case"eeee":default:return e.day(r,{width:"wide",context:"formatting"})}},c:function(t,n,e,a){const r=t.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(n){case"c":return String(i);case"cc":return o(i,n.length);case"co":return e.ordinalNumber(i,{unit:"day"});case"ccc":return e.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(r,{width:"narrow",context:"standalone"});case"cccccc":return e.day(r,{width:"short",context:"standalone"});case"cccc":default:return e.day(r,{width:"wide",context:"standalone"})}},i:function(t,n,e){const a=t.getDay(),r=a===0?7:a;switch(n){case"i":return String(r);case"ii":return o(r,n.length);case"io":return e.ordinalNumber(r,{unit:"day"});case"iii":return e.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(a,{width:"short",context:"formatting"});case"iiii":default:return e.day(a,{width:"wide",context:"formatting"})}},a:function(t,n,e){const r=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,n,e){const a=t.getHours();let r;switch(a===12?r=P.noon:a===0?r=P.midnight:r=a/12>=1?"pm":"am",n){case"b":case"bb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,n,e){const a=t.getHours();let r;switch(a>=17?r=P.evening:a>=12?r=P.afternoon:a>=4?r=P.morning:r=P.night,n){case"B":case"BB":case"BBB":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,n,e){if(n==="ho"){let a=t.getHours()%12;return a===0&&(a=12),e.ordinalNumber(a,{unit:"hour"})}return b.h(t,n)},H:function(t,n,e){return n==="Ho"?e.ordinalNumber(t.getHours(),{unit:"hour"}):b.H(t,n)},K:function(t,n,e){const a=t.getHours()%12;return n==="Ko"?e.ordinalNumber(a,{unit:"hour"}):o(a,n.length)},k:function(t,n,e){let a=t.getHours();return a===0&&(a=24),n==="ko"?e.ordinalNumber(a,{unit:"hour"}):o(a,n.length)},m:function(t,n,e){return n==="mo"?e.ordinalNumber(t.getMinutes(),{unit:"minute"}):b.m(t,n)},s:function(t,n,e){return n==="so"?e.ordinalNumber(t.getSeconds(),{unit:"second"}):b.s(t,n)},S:function(t,n){return b.S(t,n)},X:function(t,n,e){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(n){case"X":return $(a);case"XXXX":case"XX":return T(a);case"XXXXX":case"XXX":default:return T(a,":")}},x:function(t,n,e){const a=t.getTimezoneOffset();switch(n){case"x":return $(a);case"xxxx":case"xx":return T(a);case"xxxxx":case"xxx":default:return T(a,":")}},O:function(t,n,e){const a=t.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+H(a,":");case"OOOO":default:return"GMT"+T(a,":")}},z:function(t,n,e){const a=t.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+H(a,":");case"zzzz":default:return"GMT"+T(a,":")}},t:function(t,n,e){const a=Math.trunc(t.getTime()/1e3);return o(a,n.length)},T:function(t,n,e){const a=t.getTime();return o(a,n.length)}};function H(t,n=""){const e=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),i=a%60;return i===0?e+String(r):e+String(r)+n+o(i,2)}function $(t,n){return t%60===0?(t>0?"-":"+")+o(Math.abs(t)/60,2):T(t,n)}function T(t,n=""){const e=t>0?"-":"+",a=Math.abs(t),r=o(Math.trunc(a/60),2),i=o(a%60,2);return e+r+n+i}const Q=(t,n)=>{switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},I=(t,n)=>{switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Et=(t,n)=>{const e=t.match(/(P+)(p+)?/)||[],a=e[1],r=e[2];if(!r)return Q(t,n);let i;switch(a){case"P":i=n.dateTime({width:"short"});break;case"PP":i=n.dateTime({width:"medium"});break;case"PPP":i=n.dateTime({width:"long"});break;case"PPPP":default:i=n.dateTime({width:"full"});break}return i.replace("{{date}}",Q(a,n)).replace("{{time}}",I(r,n))},Ft={p:I,P:Et},qt=/^D+$/,Ht=/^Y+$/,$t=["D","DD","YY","YYYY"];function Qt(t){return qt.test(t)}function _t(t){return Ht.test(t)}function Xt(t,n,e){const a=Bt(t,n,e);if(console.warn(a),$t.includes(t))throw new RangeError(a)}function Bt(t,n,e){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${a} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Vt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,It=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Lt=/^'([^]*?)'?$/,jt=/''/g,At=/[a-zA-Z]/;function Oe(t,n,e){var m,y,k,W,C,N,p,Y;const a=D(),r=(e==null?void 0:e.locale)??a.locale??St,i=(e==null?void 0:e.firstWeekContainsDate)??((y=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??a.firstWeekContainsDate??((W=(k=a.locale)==null?void 0:k.options)==null?void 0:W.firstWeekContainsDate)??1,s=(e==null?void 0:e.weekStartsOn)??((N=(C=e==null?void 0:e.locale)==null?void 0:C.options)==null?void 0:N.weekStartsOn)??a.weekStartsOn??((Y=(p=a.locale)==null?void 0:p.options)==null?void 0:Y.weekStartsOn)??0,u=l(t);if(!J(u))throw new RangeError("Invalid time value");let c=n.match(It).map(f=>{const d=f[0];if(d==="p"||d==="P"){const S=Ft[d];return S(f,r.formatLong)}return f}).join("").match(Vt).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const d=f[0];if(d==="'")return{isToken:!1,value:Rt(f)};if(q[d])return{isToken:!0,value:f};if(d.match(At))throw new RangeError("Format string contains an unescaped latin alphabet character `"+d+"`");return{isToken:!1,value:f}});r.localize.preprocessor&&(c=r.localize.preprocessor(u,c));const h={firstWeekContainsDate:i,weekStartsOn:s,locale:r};return c.map(f=>{if(!f.isToken)return f.value;const d=f.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&_t(d)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&Qt(d))&&Xt(d,n,String(t));const S=q[d[0]];return S(u,d,r.localize,h)}).join("")}function Rt(t){const n=t.match(Lt);return n?n[1].replace(jt,"'"):t}const Gt={lessThanXSeconds:{one:"dưới 1 giây",other:"dưới {{count}} giây"},xSeconds:{one:"1 giây",other:"{{count}} giây"},halfAMinute:"nửa phút",lessThanXMinutes:{one:"dưới 1 phút",other:"dưới {{count}} phút"},xMinutes:{one:"1 phút",other:"{{count}} phút"},aboutXHours:{one:"khoảng 1 giờ",other:"khoảng {{count}} giờ"},xHours:{one:"1 giờ",other:"{{count}} giờ"},xDays:{one:"1 ngày",other:"{{count}} ngày"},aboutXWeeks:{one:"khoảng 1 tuần",other:"khoảng {{count}} tuần"},xWeeks:{one:"1 tuần",other:"{{count}} tuần"},aboutXMonths:{one:"khoảng 1 tháng",other:"khoảng {{count}} tháng"},xMonths:{one:"1 tháng",other:"{{count}} tháng"},aboutXYears:{one:"khoảng 1 năm",other:"khoảng {{count}} năm"},xYears:{one:"1 năm",other:"{{count}} năm"},overXYears:{one:"hơn 1 năm",other:"hơn {{count}} năm"},almostXYears:{one:"gần 1 năm",other:"gần {{count}} năm"}},Jt=(t,n,e)=>{let a;const r=Gt[t];return typeof r=="string"?a=r:n===1?a=r.one:a=r.other.replace("{{count}}",String(n)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?a+" nữa":a+" trước":a},zt={full:"EEEE, 'ngày' d MMMM 'năm' y",long:"'ngày' d MMMM 'năm' y",medium:"d MMM 'năm' y",short:"dd/MM/y"},Ut={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Kt={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Zt={date:v({formats:zt,defaultWidth:"full"}),time:v({formats:Ut,defaultWidth:"full"}),dateTime:v({formats:Kt,defaultWidth:"full"})},te={lastWeek:"eeee 'tuần trước vào lúc' p",yesterday:"'hôm qua vào lúc' p",today:"'hôm nay vào lúc' p",tomorrow:"'ngày mai vào lúc' p",nextWeek:"eeee 'tới vào lúc' p",other:"P"},ee=(t,n,e,a)=>te[t],ne={narrow:["TCN","SCN"],abbreviated:["trước CN","sau CN"],wide:["trước Công Nguyên","sau Công Nguyên"]},ae={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["Quý 1","Quý 2","Quý 3","Quý 4"]},re={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["quý I","quý II","quý III","quý IV"]},ie={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],wide:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},oe={narrow:["01","02","03","04","05","06","07","08","09","10","11","12"],abbreviated:["thg 1","thg 2","thg 3","thg 4","thg 5","thg 6","thg 7","thg 8","thg 9","thg 10","thg 11","thg 12"],wide:["tháng 01","tháng 02","tháng 03","tháng 04","tháng 05","tháng 06","tháng 07","tháng 08","tháng 09","tháng 10","tháng 11","tháng 12"]},se={narrow:["CN","T2","T3","T4","T5","T6","T7"],short:["CN","Th 2","Th 3","Th 4","Th 5","Th 6","Th 7"],abbreviated:["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],wide:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"]},ue={narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"}},ce={narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"giữa trưa",morning:"vào buổi sáng",afternoon:"vào buổi chiều",evening:"vào buổi tối",night:"vào ban đêm"}},he=(t,n)=>{const e=Number(t),a=n==null?void 0:n.unit;if(a==="quarter")switch(e){case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV"}else if(a==="day")switch(e){case 1:return"thứ 2";case 2:return"thứ 3";case 3:return"thứ 4";case 4:return"thứ 5";case 5:return"thứ 6";case 6:return"thứ 7";case 7:return"chủ nhật"}else{if(a==="week")return e===1?"thứ nhất":"thứ "+e;if(a==="dayOfYear")return e===1?"đầu tiên":"thứ "+e}return String(e)},de={ordinalNumber:he,era:g({values:ne,defaultWidth:"wide"}),quarter:g({values:ae,defaultWidth:"wide",formattingValues:re,defaultFormattingWidth:"wide",argumentCallback:t=>t-1}),month:g({values:ie,defaultWidth:"wide",formattingValues:oe,defaultFormattingWidth:"wide"}),day:g({values:se,defaultWidth:"wide"}),dayPeriod:g({values:ue,defaultWidth:"wide",formattingValues:ce,defaultFormattingWidth:"wide"})},me=/^(\d+)/i,fe=/\d+/i,le={narrow:/^(tcn|scn)/i,abbreviated:/^(trước CN|sau CN)/i,wide:/^(trước Công Nguyên|sau Công Nguyên)/i},ge={any:[/^t/i,/^s/i]},we={narrow:/^([1234]|i{1,3}v?)/i,abbreviated:/^q([1234]|i{1,3}v?)/i,wide:/^quý ([1234]|i{1,3}v?)/i},ye={any:[/(1|i)$/i,/(2|ii)$/i,/(3|iii)$/i,/(4|iv)$/i]},be={narrow:/^(0?[2-9]|10|11|12|0?1)/i,abbreviated:/^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,wide:/^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i},Te={narrow:[/0?1$/i,/0?2/i,/3/,/4/,/5/,/6/,/7/,/8/,/9/,/10/,/11/,/12/],abbreviated:[/^thg[ _]?0?1(?!\d)/i,/^thg[ _]?0?2/i,/^thg[ _]?0?3/i,/^thg[ _]?0?4/i,/^thg[ _]?0?5/i,/^thg[ _]?0?6/i,/^thg[ _]?0?7/i,/^thg[ _]?0?8/i,/^thg[ _]?0?9/i,/^thg[ _]?10/i,/^thg[ _]?11/i,/^thg[ _]?12/i],wide:[/^tháng ?(Một|0?1(?!\d))/i,/^tháng ?(Hai|0?2)/i,/^tháng ?(Ba|0?3)/i,/^tháng ?(Tư|0?4)/i,/^tháng ?(Năm|0?5)/i,/^tháng ?(Sáu|0?6)/i,/^tháng ?(Bảy|0?7)/i,/^tháng ?(Tám|0?8)/i,/^tháng ?(Chín|0?9)/i,/^tháng ?(Mười|10)/i,/^tháng ?(Mười ?Một|11)/i,/^tháng ?(Mười ?Hai|12)/i]},Me={narrow:/^(CN|T2|T3|T4|T5|T6|T7)/i,short:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,abbreviated:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,wide:/^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i},Pe={narrow:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],short:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],abbreviated:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],wide:[/(Chủ|Chúa) ?Nhật/i,/Hai/i,/Ba/i,/Tư/i,/Năm/i,/Sáu/i,/Bảy/i]},ve={narrow:/^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,abbreviated:/^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,wide:/^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i},ke={any:{am:/^(a|sa)/i,pm:/^(p|ch[^i]*)/i,midnight:/nửa đêm/i,noon:/trưa/i,morning:/sáng/i,afternoon:/chiều/i,evening:/tối/i,night:/^đêm/i}},We={ordinalNumber:B({matchPattern:me,parsePattern:fe,valueCallback:t=>parseInt(t,10)}),era:w({matchPatterns:le,defaultMatchWidth:"wide",parsePatterns:ge,defaultParseWidth:"any"}),quarter:w({matchPatterns:we,defaultMatchWidth:"wide",parsePatterns:ye,defaultParseWidth:"any",valueCallback:t=>t+1}),month:w({matchPatterns:be,defaultMatchWidth:"wide",parsePatterns:Te,defaultParseWidth:"wide"}),day:w({matchPatterns:Me,defaultMatchWidth:"wide",parsePatterns:Pe,defaultParseWidth:"wide"}),dayPeriod:w({matchPatterns:ve,defaultMatchWidth:"wide",parsePatterns:ke,defaultParseWidth:"any"})},xe={code:"vi",formatDistance:Jt,formatLong:Zt,formatRelative:ee,localize:de,match:We,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{Oe as f,xe as v};