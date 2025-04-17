import{f as J}from"./entry.client-Cc_DEcms.js";function K(n,t){for(var e=0;e<t.length;e++){const s=t[e];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const u=Object.getOwnPropertyDescriptor(s,o);u&&Object.defineProperty(n,o,u.get?u:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var N={},D;function Q(){return D||(D=1,function(n){function t(r,d){return r.replace(/<<(\d+)>>/g,function(m,I){return"(?:"+d[+I]+")"})}function e(r,d,m){return RegExp(t(r,d),"")}function s(r,d){for(var m=0;m<d;m++)r=r.replace(/<<self>>/g,function(){return"(?:"+r+")"});return r.replace(/<<self>>/g,"[^\\s\\S]")}var o="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",u="class enum interface record struct",v="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",y="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function p(r){return"\\b(?:"+r.trim().replace(/ /g,"|")+")\\b"}var x=p(u),g=RegExp(p(o+" "+u+" "+v+" "+y)),M=p(u+" "+v+" "+y),T=p(o+" "+u+" "+y),b=s("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),f=s("\\((?:[^()]|<<self>>)*\\)",2),i="@?\\b[A-Za-z_]\\w*\\b",h=t("<<0>>(?:\\s*<<1>>)?",[i,b]),l=t("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[M,h]),k="\\[\\s*(?:,\\s*)*\\]",U=t("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[l,k]),Z=t("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[b,f,k]),q=t("\\(<<0>>+(?:,<<0>>+)+\\)",[Z]),c=t("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[q,l,k]),a={keyword:g,punctuation:/[<>()?,.:[\]]/},_=`'(?:[^\r
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,$=`"(?:\\\\.|[^\\\\"\r
])*"`;n.languages.csharp=n.languages.extend("clike",{string:[{pattern:e("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:e("(^|[^@$\\\\])<<0>>",[$]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[l]),lookbehind:!0,inside:a},{pattern:e("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[i,c]),lookbehind:!0,inside:a},{pattern:e("(\\busing\\s+)<<0>>(?=\\s*=)",[i]),lookbehind:!0},{pattern:e("(\\b<<0>>\\s+)<<1>>",[x,h]),lookbehind:!0,inside:a},{pattern:e("(\\bcatch\\s*\\(\\s*)<<0>>",[l]),lookbehind:!0,inside:a},{pattern:e("(\\bwhere\\s+)<<0>>",[i]),lookbehind:!0},{pattern:e("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[U]),lookbehind:!0,inside:a},{pattern:e("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[c,T,i]),inside:a}],keyword:g,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),n.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),n.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e("([(,]\\s*)<<0>>(?=\\s*:)",[i]),lookbehind:!0,alias:"punctuation"}}),n.languages.insertBefore("csharp","class-name",{namespace:{pattern:e("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[i]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[f]),lookbehind:!0,alias:"class-name",inside:a},"return-type":{pattern:e("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[c,l]),inside:a,alias:"class-name"},"constructor-invocation":{pattern:e("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[c]),lookbehind:!0,inside:a,alias:"class-name"},"generic-method":{pattern:e("<<0>>\\s*<<1>>(?=\\s*\\()",[i,b]),inside:{function:e("^<<0>>",[i]),generic:{pattern:RegExp(b),alias:"class-name",inside:a}}},"type-list":{pattern:e("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[x,h,i,c,g.source,f,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:e("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[h,f]),lookbehind:!0,greedy:!0,inside:n.languages.csharp},keyword:g,"class-name":{pattern:RegExp(c),greedy:!0,inside:a},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var j=$+"|"+_,B=t(`/(?![*/])|//[^\r
]*[\r
]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>`,[j]),E=s(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[B]),2),R="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",C=t("<<0>>(?:\\s*\\(<<1>>*\\))?",[l,E]);n.languages.insertBefore("csharp","class-name",{attribute:{pattern:e("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[R,C]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e("^<<0>>(?=\\s*:)",[R]),alias:"keyword"},"attribute-arguments":{pattern:e("\\(<<0>>*\\)",[E]),inside:n.languages.csharp},"class-name":{pattern:RegExp(l),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var w=`:[^}\r
]+`,O=s(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[B]),2),S=t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[O,w]),z=s(t(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`,[j]),2),A=t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[z,w]);function P(r,d){return{interpolation:{pattern:e("((?:^|[^{])(?:\\{\\{)*)<<0>>",[r]),lookbehind:!0,inside:{"format-string":{pattern:e("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[d,w]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:n.languages.csharp}}},string:/[\s\S]+/}}n.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[S]),lookbehind:!0,greedy:!0,inside:P(S,O)},{pattern:e('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[A]),lookbehind:!0,greedy:!0,inside:P(A,z)}],char:{pattern:RegExp(_),greedy:!0}}),n.languages.dotnet=n.languages.cs=n.languages.csharp}(Prism)),N}var F=Q();const G=J(F),L=K({__proto__:null,default:G},[F]);export{L as p};
//# sourceMappingURL=prism-csharp.min-bQAo2pmx-D_xU-t5n.js.map
