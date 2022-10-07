"use strict";
(() => {
var exports = {};
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 2980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ BASE_URL)
/* harmony export */ });
const BASE_URL = "https://j7c203.p.ssafy.io/";


/***/ }),

/***/ 5985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ trend),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/DescribeText.tsx
var DescribeText = __webpack_require__(5462);
// EXTERNAL MODULE: ./src/components/NavBar.tsx + 3 modules
var NavBar = __webpack_require__(2426);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-wordcloud"
const external_react_wordcloud_namespaceObject = require("react-wordcloud");
var external_react_wordcloud_default = /*#__PURE__*/__webpack_require__.n(external_react_wordcloud_namespaceObject);
;// CONCATENATED MODULE: ./src/components/TrendList.tsx




function SimpleWordCloud(props) {
    const { 0: hasMounted , 1: setHasMounted  } = (0,external_react_.useState)(false);
    const words = props.props;
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: words ? hasMounted && /*#__PURE__*/ jsx_runtime_.jsx((external_react_wordcloud_default()), {
            words: words,
            options: {
                fontSizes: [
                    20,
                    50
                ]
            }
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
    });
};

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "css-in-js-media"
var external_css_in_js_media_ = __webpack_require__(8135);
var external_css_in_js_media_default = /*#__PURE__*/__webpack_require__.n(external_css_in_js_media_);
;// CONCATENATED MODULE: ./styles/trend/SectionStyle.tsx


(0,external_css_in_js_media_.getBreakPoints)();
const TrendSectionStyle = (styled_default()).section`
 margin-top : 256px;
`;

;// CONCATENATED MODULE: ./styles/trend/WordcloudStyle.tsx


(0,external_css_in_js_media_.getBreakPoints)();
const WordCloudContainer = (styled_default()).div`
  background-color: #31313C;
  border-radius: 10px;
  padding: 32px 112px 32px 112px;
  margin: 0px 64px 32px 64px;

  ${external_css_in_js_media_default()(">desktop")} {
    padding: 32px 112px 32px 112px;
    margin: 0px 64px 16px 64px;
  }
  ${external_css_in_js_media_default()("<=desktop", ">tablet")} {
    padding: 24px 64px 24px 64px;
    margin-left: 32px;
    margin-right: 32px;
  }
  ${external_css_in_js_media_default()("<=tablet", ">phone")} {
    padding: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

// EXTERNAL MODULE: ./src/pages/api/fetch.tsx
var api_fetch = __webpack_require__(2980);
;// CONCATENATED MODULE: ./src/pages/api/apitrendList.ts

async function apitrendList() {
    const response = await fetch(`${api_fetch/* BASE_URL */._}api/v1/Yousim/trend`, {
        method: "POST"
    });
    const data = await response.json().catch(()=>{});
    return data;
};

;// CONCATENATED MODULE: ./src/pages/trend/index.tsx









const TrendPage = (trendList)=>{
    const router = (0,router_.useRouter)();
    console.log(trendList);
    // const {
    //   data: trendList,
    //   error,
    //   status,
    // } = useQuery<Iprops>(
    //   ["trendList"],
    //   () => {
    //     return apitrendList();
    //   },
    // );
    // if (status === "loading") {
    //   return <span>Loading...</span>;
    // }
    // if (status === "error") {
    //   return <span>Error </span>;
    // }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Trend"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavBar/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(TrendSectionStyle, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DescribeText/* default */.Z, {
                            mainText: "Trend Tag",
                            subText1: "인기동영상의 태그입니다.",
                            subText2: "현재 인기동영상들의 모든 태그를 나타내고 있습니다."
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(WordCloudContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SimpleWordCloud, {
                            props: trendList?.tags
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TrendSectionStyle, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DescribeText/* default */.Z, {
                            mainText: "Trend Keyword",
                            subText1: "인기동영상의 키워드입니다.",
                            subText2: "현재 인기동영상 제목의 키워드를 나타내고 있습니다."
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(WordCloudContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SimpleWordCloud, {
                            props: trendList?.keywords
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const trend = (TrendPage);
// export async function getStaticProps() {
//   const data = await apitrendList()
//   console.log(data)
//   return {
//     props: {
//       trendList: data,
//     }
//   }
// }
const getServerSideProps = async ()=>{
    const data = await apitrendList();
    return {
        props: {
            trendList: data
        }
    };
};


/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 8135:
/***/ ((module) => {

module.exports = require("css-in-js-media");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 8472:
/***/ ((module) => {

module.exports = require("gsap/dist/gsap");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,426,462], () => (__webpack_exec__(5985)));
module.exports = __webpack_exports__;

})();