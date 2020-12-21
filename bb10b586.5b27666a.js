(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(6),c=(t(0),t(144)),o={id:"doc2",title:"Find All Anagrams in a String"},i={id:"doc2",title:"Find All Anagrams in a String",description:"[Leetcode 438](https://leetcode.com/problems/find-all-anagrams-in-a-string/)",source:"@site/docs/leetcode438.md",permalink:"/docs/doc2",editUrl:"http://localhost:3000/docs/leetcode438.md",sidebar:"someSidebar",previous:{title:"Style Guide",permalink:"/docs/doc1"},next:{title:"This is Document Number 3",permalink:"/docs/doc3"}},p=[],l={rightToc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode.com/problems/find-all-anagrams-in-a-string/"}),"Leetcode 438")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class Solution {\n    public List<Integer> findAnagrams(String s, String t) {\n        List<Integer> result = new LinkedList<>();\n        if(t.length()> s.length()) return result;\n        Map<Character, Integer> map = new HashMap<>();\n        for(char c : t.toCharArray()){\n            map.put(c, map.getOrDefault(c, 0) + 1);\n        }\n        int counter = map.size();\n        \n        int begin = 0, end = 0;\n        int head = 0;\n        int len = Integer.MAX_VALUE;\n        \n        \n        while(end < s.length()){\n            char c = s.charAt(end);\n            if( map.containsKey(c) ){\n                map.put(c, map.get(c)-1);\n                if(map.get(c) == 0) counter--;\n            }\n            end++;\n            \n            while(counter == 0){\n                char tempc = s.charAt(begin);\n                if(map.containsKey(tempc)){\n                    map.put(tempc, map.get(tempc) + 1);\n                    if(map.get(tempc) > 0){\n                        counter++;\n                    }\n                }\n                if(end-begin == t.length()){\n                    result.add(begin);\n                }\n                begin++;\n            }\n            \n        }\n        return result;\n    }\n}\n")))}u.isMDXComponent=!0},144:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},s=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,f=s["".concat(o,".").concat(d)]||s[d]||m[d]||c;return t?a.a.createElement(f,i({ref:n},l,{components:t})):a.a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);