"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./services/SanityService.js
var SanityService = __webpack_require__(2875);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./components/Header.jsx
var Header = __webpack_require__(6375);
;// CONCATENATED MODULE: ./components/BlogHeadline.jsx


function BlogHeadline() {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Row, {
        align: "middle",
        style: {
            height: 400,
            textAlign: "center"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
            span: 24,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    style: {
                        fontSize: 70,
                        fontWeight: "bold"
                    },
                    children: "Hewon Blog"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: {
                        fontSize: 24
                    },
                    children: "TypeScript\uC640 Electron\uC744 \uC774\uC6A9\uD558\uC5EC, \uB514\uC790\uC774\uB108\uB97C \uC704\uD55C \uC778\uD130\uB809\uC158 \uD504\uB85C\uD1A0\uD0C0\uC774\uD551 \uD234\uC778 \uD504\uB85C\uD1A0\uD30C\uC774\uB97C \uB9CC\uB4E4\uACE0\uC788\uC2B5\uB2C8\uB2E4. \uB300\uADDC\uBAA8 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC5D0 \uB300\uD55C \uB354 \uB098\uC740 \uBC29\uD5A5\uC744 \uACE0\uBBFC\uD558\uACE0, \uC801\uC6A9\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. Microsoft MVP(TypeScript)\uB85C \uD65C\uB3D9\uC744 \uD558\uBA70, \uCD5C\uC2E0 \uC6F9\uAE30\uC220\uC5D0 \uB300\uD574 \uC0AC\uB78C\uB4E4\uACFC \uC774\uC57C\uAE30 \uD558\uB294\uAC83\uC744 \uC990\uAE41\uB2C8\uB2E4."
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/BlogMainPost.jsx
var BlogMainPost = __webpack_require__(6091);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./components/BlogList.jsx




function BlogList({ posts , index  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Row, {
                align: "middle",
                style: {
                    height: 100
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                    span: 24,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        style: {
                            fontSize: 30,
                            fontWeight: "bold"
                        },
                        children: "Latest Posts"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Row, {
                gutter: 16,
                align: "top",
                style: {
                    height: "auto"
                },
                children: posts.map((post)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                        span: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/post/${post.slug}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Card, {
                                    style: {
                                        width: "100%",
                                        border: "none",
                                        marginBottom: 30
                                    },
                                    cover: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: post.thumbnail.alt,
                                        src: post.thumbnail.imageUrl
                                    }),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: post.title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                            children: [
                                                post.author.name,
                                                " \u2219",
                                                " ",
                                                external_dayjs_default()(post.createdAt).format("MMMM D")
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }, index);
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(7127);
;// CONCATENATED MODULE: ./pages/index.js











function Home({ home , posts  }) {
    const mainPost = posts.find((p)=>p.slug === home.mainPostUrl
    );
    const otherPosts = posts.filter((p)=>p.slug !== home.mainPostUrl
    );
    console.log(mainPost);
    console.log(otherPosts);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BlogHeadline, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BlogMainPost/* default */.Z, {
                ...mainPost
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlogList, {
                posts: otherPosts
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
async function getStaticProps() {
    const sanityService = new SanityService/* default */.Z();
    const home = await sanityService.getHome();
    const posts = await sanityService.getPosts();
    return {
        props: {
            home,
            posts
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,183], () => (__webpack_exec__(2284)));
module.exports = __webpack_exports__;

})();