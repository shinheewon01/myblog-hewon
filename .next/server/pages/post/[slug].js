"use strict";
(() => {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 6403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostAll),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./services/SanityService.js
var SanityService = __webpack_require__(2875);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./components/Header.jsx
var Header = __webpack_require__(6375);
// EXTERNAL MODULE: ./components/BlogMainPost.jsx
var BlogMainPost = __webpack_require__(6091);
// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(7127);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: external "@sanity/block-content-to-react"
const block_content_to_react_namespaceObject = require("@sanity/block-content-to-react");
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_namespaceObject);
;// CONCATENATED MODULE: external "react-syntax-highlighter"
const external_react_syntax_highlighter_namespaceObject = require("react-syntax-highlighter");
var external_react_syntax_highlighter_default = /*#__PURE__*/__webpack_require__.n(external_react_syntax_highlighter_namespaceObject);
;// CONCATENATED MODULE: ./components/BlogPostDetail.jsx




const serializers = {
    types: {
        code: ({ node  })=>{
            const { code  } = node;
            return /*#__PURE__*/ jsx_runtime_.jsx((external_react_syntax_highlighter_default()), {
                language: "javascript",
                style: {
                    hljs: {
                        display: "block",
                        overflowX: "auto",
                        padding: "0.5em",
                        color: "#adadad",
                        background: "#101010"
                    },
                    "hljs-comment": {
                        color: "#636363",
                        fontStyle: "italic"
                    },
                    "hljs-quote": {
                        color: "#636363",
                        fontStyle: "italic"
                    },
                    "hljs-doctag": {
                        color: "#b29dfc"
                    },
                    "hljs-keyword": {
                        color: "#b29dfc"
                    },
                    "hljs-formula": {
                        color: "#b29dfc"
                    },
                    "hljs-section": {
                        color: "#f17a8d"
                    },
                    "hljs-name": {
                        color: "#f17a8d"
                    },
                    "hljs-selector-tag": {
                        color: "#f17a8d"
                    },
                    "hljs-deletion": {
                        color: "#f17a8d"
                    },
                    "hljs-subst": {
                        color: "#f17a8d"
                    },
                    "hljs-literal": {
                        color: "#5abdc8"
                    },
                    "hljs-string": {
                        color: "#fdc97d"
                    },
                    "hljs-regexp": {
                        color: "#fdc97d"
                    },
                    "hljs-addition": {
                        color: "#fdc97d"
                    },
                    "hljs-attribute": {
                        color: "#fdc97d"
                    },
                    "hljs-meta-string": {
                        color: "#fdc97d"
                    },
                    "hljs-built_in": {
                        color: "#d9a200"
                    },
                    "hljs-class .hljs-title": {
                        color: "#d9a200"
                    },
                    "hljs-attr": {
                        color: "#f58957"
                    },
                    "hljs-variable": {
                        color: "#f58957"
                    },
                    "hljs-template-variable": {
                        color: "#f58957"
                    },
                    "hljs-type": {
                        color: "#f58957"
                    },
                    "hljs-selector-class": {
                        color: "#f58957"
                    },
                    "hljs-selector-attr": {
                        color: "#f58957"
                    },
                    "hljs-selector-pseudo": {
                        color: "#f58957"
                    },
                    "hljs-number": {
                        color: "#f58957"
                    },
                    "hljs-symbol": {
                        color: "#9cbafe"
                    },
                    "hljs-bullet": {
                        color: "#9cbafe"
                    },
                    "hljs-link": {
                        color: "#9cbafe",
                        textDecoration: "underline"
                    },
                    "hljs-meta": {
                        color: "#9cbafe"
                    },
                    "hljs-selector-id": {
                        color: "#9cbafe"
                    },
                    "hljs-title": {
                        color: "#9cbafe"
                    },
                    "hljs-emphasis": {
                        fontStyle: "italic"
                    },
                    "hljs-strong": {
                        fontWeight: "bold"
                    }
                },
                children: code
            });
        },
        video: ({ node  })=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "video"
            });
        },
        link: ({ node  })=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "link"
            });
        },
        imageGallery: ({ node  })=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "imageGallery"
            });
        }
    }
};
function BlogPostDetail({ blocks  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Row, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
            span: 24,
            children: /*#__PURE__*/ jsx_runtime_.jsx((block_content_to_react_default()), {
                blocks: blocks,
                projectId: "vpm5lpfo",
                dataset: "production",
                serializers: serializers
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages/post/[slug].js







function PostAll({ slug , post  }) {
    console.log(post);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BlogMainPost/* default */.Z, {
                ...post
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlogPostDetail, {
                blocks: post.content
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
async function getStaticPaths() {
    const posts = await new SanityService/* default */.Z().getPosts();
    const paths = posts.map((post)=>({
            params: {
                slug: post.slug
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const { slug  } = params;
    const posts = await new SanityService/* default */.Z().getPosts();
    const post = posts.find((p)=>p.slug === slug
    );
    return {
        props: {
            slug,
            post
        }
    };
}


/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,183], () => (__webpack_exec__(6403)));
module.exports = __webpack_exports__;

})();