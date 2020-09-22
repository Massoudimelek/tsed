(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{593:function(t,s,n){"use strict";n.r(s);var a=n(43),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"res"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#res"}},[t._v("#")]),t._v(" Res "),n("Badge",{attrs:{text:"Decorator",type:"decorator"}}),t._v(" "),n("Badge",{attrs:{text:"alias",title:"Response",type:"alias"}}),t._v(" "),n("Badge",{attrs:{text:"operation",title:"operation",type:"operation"}}),t._v(" "),n("Badge",{attrs:{text:"input",title:"input",type:"input"}}),t._v(" "),n("Badge",{attrs:{text:"response",title:"response",type:"response"}})],1),t._v(" "),n("section",{staticClass:"symbol-info"},[n("table",{staticClass:"is-full-width"},[n("tbody",[n("tr",[n("th",[t._v("Module")]),n("td",[n("div",{staticClass:"lang-typescript"},[n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Res } "),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),n("tr",[n("th",[t._v("Source")]),n("td",[n("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.3/packages/common/src/mvc/decorators/params/response.ts#L0-L0"}},[t._v("/packages/common/src/mvc/decorators/params/response.ts")])])])])])]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("div",{staticClass:"language-typescript"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("function "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ParameterDecorator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nglobal "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    namespace TsED "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            headersSent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            writableEnded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            writableFinished"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            statusCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            /**\n             * Set header `field` to `val`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or pass\n             * an object of header fields.\n             *\n             * Examples"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             *\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'Foo'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'bar'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'baz'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'Accept'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'application/json'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Accept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 'text/plain'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'X-API-Key'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 'tobi' "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *\n             * Aliased "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" `res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("`.\n             */\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            /**\n             * Set status `code`.\n             */\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pipe"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            /**\n             * Send JSON response.\n             *\n             * Examples"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             *\n             *     res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *     res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 'tj' "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *     res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("500"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'oh noes!'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *     res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("404"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'I dont have that'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             */\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            /**\n             * Set _Content-Type_ response header with `type` through `mime."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v('`\n             * when it does not contain "/"'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or set the Content-"),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v(" to `type` otherwise.\n             *\n             * Examples"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             *\n             *     res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'.html'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *     res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'html'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *     res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'json'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *     res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'application/json'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *     res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'png'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             */\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("contentType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" this"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            /**\n             * Set the location header to `url`.\n             *\n             * The given `url` can also be the name of a mapped url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' for\n             * example by default express supports "back" which redirects\n             * to the _Referrer_ or _Referer_ headers or "/".\n             *\n             * Examples'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             *\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'/foo/bar'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//example.com'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'../login'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // /blog/post/1 -> /blog/login\n             *\n             * Mounting"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             *\n             *   When an application is mounted and `res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v('`\n             *   is given a path that does _not_ lead with "/" it becomes\n             *   relative to the mount-point. For example if the application\n             *   is mounted at "/blog"'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' the following would become "/blog/login".\n             *\n             *      res.'),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'login'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('\n             *\n             *   While the leading slash would result in a location of "/login"'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             *\n             *      res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'/login'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             */\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" this"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            /**\n             * "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/method/Redirect.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Redirect")])]),t._v(" to the given `url` with optional response `status`\n             * defaulting to 302.\n             *\n             * The resulting `url` is determined by `res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" so\n             * it will play nicely with mounted apps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative paths"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v('\n             * `"back"` etc.\n             *\n             * Examples'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             *\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'/foo/bar'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//example.com'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("301"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//example.com'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//example.com'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 301"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             *    res."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'../login'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // /blog/post/1 -> /blog/login\n             */\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n/**\n * "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),t._v(" service.\n *\n * @decorator\n * @operation\n * @input\n * @response\n */\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" TsED."),n("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n/**\n * "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),t._v(" service.\n *\n * @alias "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),t._v("\n * @decorator\n * @operation\n * @input\n * @response\n */\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" Res "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" TsED."),n("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Response")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),n("p",[t._v("Request service.")])])}),[],!1,null,null,null);s.default=e.exports}}]);