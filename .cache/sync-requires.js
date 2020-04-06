const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/404.js"))),
  "component---src-pages-alima-program-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/alima-program.js"))),
  "component---src-pages-contact-us-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/contact-us.js"))),
  "component---src-pages-halaqas-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/halaqas.js"))),
  "component---src-pages-ilm-101-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/ILM101.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/index.js"))),
  "component---src-pages-quranprogram-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/quranprogram.js"))),
  "component---src-pages-seminar-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/seminar.js"))),
  "component---src-pages-staff-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/staff.js"))),
  "component---src-pages-summerprogram-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/summerprogram.js"))),
  "component---src-pages-sundayschool-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/sundayschool.js"))),
  "component---src-pages-workshop-js": hot(preferDefault(require("/Users/zakariyasattar/salihahcentral-site/src/pages/workshop.js")))
}

