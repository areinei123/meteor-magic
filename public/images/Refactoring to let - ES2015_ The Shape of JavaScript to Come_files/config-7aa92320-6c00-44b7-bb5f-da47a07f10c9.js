System.config({
  baseURL: "es2015_the_shape_of_javascript_to_come/assets/javascripts",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "bundles/common-bundle.js": [
      "analyze.js",
      "npm:chai@3.4.0",
      "npm:babel-core@5.8.33",
      "github:nwronski/esquery@0.4.1",
      "npm:extend@3.0.0",
      "rules.js",
      "npm:babel-runtime@5.8.29/helpers/get",
      "npm:babel-runtime@5.8.29/helpers/inherits",
      "npm:babel-runtime@5.8.29/helpers/create-class",
      "npm:babel-runtime@5.8.29/helpers/class-call-check",
      "npm:babel-runtime@5.8.29/helpers/sliced-to-array",
      "npm:babel-runtime@5.8.29/core-js/get-iterator",
      "npm:babel-runtime@5.8.29/core-js/map",
      "github:codeschool/eslint@1.9.0-browserify",
      "npm:chai@3.4.0/index",
      "npm:babel-core@5.8.33/browser",
      "github:nwronski/esquery@0.4.1/esquery",
      "npm:extend@3.0.0/index",
      "npm:babel-runtime@5.8.29/core-js/object/get-own-property-descriptor",
      "npm:babel-runtime@5.8.29/core-js/object/create",
      "npm:babel-runtime@5.8.29/core-js/object/set-prototype-of",
      "npm:babel-runtime@5.8.29/core-js/object/define-property",
      "npm:babel-runtime@5.8.29/core-js/is-iterable",
      "npm:core-js@1.2.6/library/fn/get-iterator",
      "npm:core-js@1.2.6/library/fn/map",
      "github:codeschool/eslint@1.9.0-browserify/build/eslint",
      "npm:chai@3.4.0/lib/chai",
      "npm:estraverse@4.1.1",
      "github:nwronski/esquery@0.4.1/parser",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor",
      "npm:core-js@1.2.6/library/fn/object/create",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of",
      "npm:core-js@1.2.6/library/fn/object/define-property",
      "npm:core-js@1.2.6/library/fn/is-iterable",
      "npm:core-js@1.2.6/library/modules/web.dom.iterable",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/core.get-iterator",
      "npm:core-js@1.2.6/library/modules/es6.object.to-string",
      "npm:core-js@1.2.6/library/modules/es6.map",
      "npm:core-js@1.2.6/library/modules/es7.map.to-json",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:assertion-error@1.0.1",
      "npm:chai@3.4.0/lib/chai/utils/index",
      "npm:chai@3.4.0/lib/chai/config",
      "npm:chai@3.4.0/lib/chai/assertion",
      "npm:chai@3.4.0/lib/chai/core/assertions",
      "npm:chai@3.4.0/lib/chai/interface/expect",
      "npm:chai@3.4.0/lib/chai/interface/should",
      "npm:chai@3.4.0/lib/chai/interface/assert",
      "npm:estraverse@4.1.1/estraverse",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.6/library/modules/core.is-iterable",
      "npm:core-js@1.2.6/library/modules/es6.array.iterator",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.string-at",
      "npm:core-js@1.2.6/library/modules/$.iter-define",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/library/modules/$.collection-strong",
      "npm:core-js@1.2.6/library/modules/$.collection",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.collection-to-json",
      "npm:assertion-error@1.0.1/index",
      "npm:chai@3.4.0/lib/chai/utils/test",
      "npm:type-detect@1.0.0",
      "npm:chai@3.4.0/lib/chai/utils/expectTypes",
      "npm:chai@3.4.0/lib/chai/utils/getMessage",
      "npm:chai@3.4.0/lib/chai/utils/getActual",
      "npm:chai@3.4.0/lib/chai/utils/inspect",
      "npm:chai@3.4.0/lib/chai/utils/objDisplay",
      "npm:chai@3.4.0/lib/chai/utils/flag",
      "npm:chai@3.4.0/lib/chai/utils/transferFlags",
      "npm:deep-eql@0.1.3",
      "npm:chai@3.4.0/lib/chai/utils/getPathValue",
      "npm:chai@3.4.0/lib/chai/utils/getPathInfo",
      "npm:chai@3.4.0/lib/chai/utils/hasProperty",
      "npm:chai@3.4.0/lib/chai/utils/getName",
      "npm:chai@3.4.0/lib/chai/utils/addProperty",
      "npm:chai@3.4.0/lib/chai/utils/addMethod",
      "npm:chai@3.4.0/lib/chai/utils/overwriteProperty",
      "npm:chai@3.4.0/lib/chai/utils/overwriteMethod",
      "npm:chai@3.4.0/lib/chai/utils/addChainableMethod",
      "npm:chai@3.4.0/lib/chai/utils/overwriteChainableMethod",
      "npm:estraverse@4.1.1/package.json!github:systemjs/plugin-json@0.1.0",
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:core-js@1.2.6/library/modules/$.object-sap",
      "npm:core-js@1.2.6/library/modules/$.set-proto",
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/library/modules/$.iter-step",
      "npm:core-js@1.2.6/library/modules/$.to-integer",
      "npm:core-js@1.2.6/library/modules/$.defined",
      "npm:core-js@1.2.6/library/modules/$.library",
      "npm:core-js@1.2.6/library/modules/$.redefine",
      "npm:core-js@1.2.6/library/modules/$.hide",
      "npm:core-js@1.2.6/library/modules/$.has",
      "npm:core-js@1.2.6/library/modules/$.iter-create",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:core-js@1.2.6/library/modules/$.redefine-all",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.strict-new",
      "npm:core-js@1.2.6/library/modules/$.for-of",
      "npm:core-js@1.2.6/library/modules/$.uid",
      "npm:core-js@1.2.6/library/modules/$.set-species",
      "npm:core-js@1.2.6/library/modules/$.descriptors",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.fails",
      "npm:type-detect@1.0.0/index",
      "npm:chai@3.4.0/lib/chai/utils/getProperties",
      "npm:chai@3.4.0/lib/chai/utils/getEnumerableProperties",
      "npm:deep-eql@0.1.3/index",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:core-js@1.2.6/library/modules/$.shared",
      "npm:core-js@1.2.6/library/modules/$.property-desc",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:core-js@1.2.6/library/modules/$.iter-call",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter",
      "npm:core-js@1.2.6/library/modules/$.to-length",
      "npm:type-detect@1.0.0/lib/type",
      "npm:deep-eql@0.1.3/lib/eql",
      "npm:type-detect@0.1.1",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:type-detect@0.1.1/index",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "npm:type-detect@0.1.1/lib/type",
      "npm:buffer@3.5.1",
      "npm:buffer@3.5.1/index",
      "npm:base64-js@0.0.8",
      "npm:ieee754@1.1.6",
      "npm:is-array@1.0.1",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:ieee754@1.1.6/index",
      "npm:is-array@1.0.1/index"
    ],
    "bundles/sandbox-bundle.js": [
      "npm:sinon@1.17.2",
      "npm:sinon@1.17.2/lib/sinon",
      "npm:sinon@1.17.2/lib/sinon/extend",
      "npm:sinon@1.17.2/lib/sinon/util/core",
      "npm:sinon@1.17.2/lib/sinon/walk",
      "npm:sinon@1.17.2/lib/sinon/typeOf",
      "npm:sinon@1.17.2/lib/sinon/times_in_words",
      "npm:sinon@1.17.2/lib/sinon/call",
      "npm:sinon@1.17.2/lib/sinon/spy",
      "npm:sinon@1.17.2/lib/sinon/behavior",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "npm:sinon@1.17.2/lib/sinon/stub",
      "npm:sinon@1.17.2/lib/sinon/collection",
      "npm:sinon@1.17.2/lib/sinon/mock",
      "npm:sinon@1.17.2/lib/sinon/sandbox",
      "npm:sinon@1.17.2/lib/sinon/assert",
      "npm:sinon@1.17.2/lib/sinon/test_case",
      "npm:sinon@1.17.2/lib/sinon/test",
      "npm:sinon@1.17.2/lib/sinon/format",
      "npm:sinon@1.17.2/lib/sinon/match",
      "npm:sinon@1.17.2/lib/sinon/log_error",
      "npm:sinon@1.17.2/lib/sinon/util/fake_timers",
      "npm:formatio@1.1.1",
      "npm:util@0.10.3",
      "npm:sinon@1.17.2/lib/sinon/util/fake_server_with_clock",
      "npm:formatio@1.1.1/lib/formatio",
      "npm:lolex@1.3.2",
      "npm:util@0.10.3/util",
      "npm:sinon@1.17.2/lib/sinon/util/fake_server",
      "npm:samsam@1.1.2",
      "npm:lolex@1.3.2/src/lolex",
      "npm:inherits@2.0.1",
      "npm:util@0.10.3/support/isBufferBrowser",
      "npm:sinon@1.17.2/lib/sinon/util/fake_xdomain_request",
      "npm:sinon@1.17.2/lib/sinon/util/fake_xml_http_request",
      "npm:samsam@1.1.2/lib/samsam",
      "npm:sinon@1.17.2/lib/sinon/util/event",
      "npm:inherits@2.0.1/inherits_browser",
      "sandbox.js",
      "github:codeschool/javascript-sandbox@1.0.1",
      "npm:babel-runtime@5.8.29/core-js/promise",
      "npm:babel-runtime@5.8.29/core-js/object/assign",
      "github:codeschool/javascript-sandbox@1.0.1/lib/index",
      "npm:core-js@1.2.6/library/fn/promise",
      "npm:core-js@1.2.6/library/fn/object/assign",
      "npm:core-js@1.2.6/library/modules/es6.object.assign",
      "npm:core-js@1.2.6/library/modules/es6.promise",
      "npm:core-js@1.2.6/library/modules/$.object-assign",
      "npm:core-js@1.2.6/library/modules/$.same-value",
      "npm:core-js@1.2.6/library/modules/$.species-constructor",
      "npm:core-js@1.2.6/library/modules/$.microtask",
      "npm:core-js@1.2.6/library/modules/$.iter-detect",
      "npm:core-js@1.2.6/library/modules/$.to-object",
      "npm:core-js@1.2.6/library/modules/$.task",
      "npm:core-js@1.2.6/library/modules/$.invoke",
      "npm:core-js@1.2.6/library/modules/$.html",
      "npm:core-js@1.2.6/library/modules/$.dom-create",
      "npm:escodegen@1.7.0",
      "npm:escodegen@1.7.0/escodegen",
      "npm:esutils@2.0.2",
      "npm:source-map@0.2.0",
      "npm:estraverse@1.9.3",
      "npm:source-map@0.2.0/lib/source-map",
      "npm:esutils@2.0.2/lib/utils",
      "npm:estraverse@1.9.3/estraverse",
      "npm:source-map@0.2.0/lib/source-map/source-map-generator",
      "npm:source-map@0.2.0/lib/source-map/source-map-consumer",
      "npm:source-map@0.2.0/lib/source-map/source-node",
      "npm:esutils@2.0.2/lib/ast",
      "npm:esutils@2.0.2/lib/code",
      "npm:esutils@2.0.2/lib/keyword",
      "npm:escodegen@1.7.0/package.json!github:systemjs/plugin-json@0.1.0",
      "npm:amdefine@1.0.0",
      "npm:source-map@0.2.0/lib/source-map/base64-vlq",
      "npm:source-map@0.2.0/lib/source-map/array-set",
      "npm:source-map@0.2.0/lib/source-map/indexed-source-map-consumer",
      "npm:source-map@0.2.0/lib/source-map/util",
      "npm:source-map@0.2.0/lib/source-map/basic-source-map-consumer",
      "npm:source-map@0.2.0/lib/source-map/mapping-list",
      "npm:source-map@0.2.0/lib/source-map/binary-search",
      "npm:source-map@0.2.0/lib/source-map/base64",
      "npm:amdefine@1.0.0/amdefine",
      "github:jspm/nodelibs-path@0.1.0",
      "github:jspm/nodelibs-path@0.1.0/index",
      "npm:path-browserify@0.0.0",
      "npm:path-browserify@0.0.0/index"
    ],
    "bundles/test-suite-bundle.js": [
      "github:codeschool/abecedary@1.0.3/dist/mocha-runner",
      "npm:mocha@2.2.5",
      "npm:mocha@2.2.5/mocha",
      "files.js",
      "npm:babel-core@5.8.33/polyfill",
      "npm:babel-core@5.8.33/lib/polyfill",
      "npm:core-js@1.2.6/shim",
      "npm:babel-runtime@5.8.29/regenerator/runtime",
      "npm:core-js@1.2.6/modules/es6.symbol",
      "npm:core-js@1.2.6/modules/es5",
      "npm:core-js@1.2.6/modules/es6.object.is",
      "npm:core-js@1.2.6/modules/es6.object.assign",
      "npm:core-js@1.2.6/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.6/modules/es6.object.to-string",
      "npm:core-js@1.2.6/modules/es6.object.seal",
      "npm:core-js@1.2.6/modules/es6.object.freeze",
      "npm:core-js@1.2.6/modules/es6.object.prevent-extensions",
      "npm:core-js@1.2.6/modules/es6.object.is-frozen",
      "npm:core-js@1.2.6/modules/es6.object.is-sealed",
      "npm:core-js@1.2.6/modules/es6.object.is-extensible",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.6/modules/es6.object.get-prototype-of",
      "npm:core-js@1.2.6/modules/es6.object.keys",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-names",
      "npm:core-js@1.2.6/modules/es6.function.name",
      "npm:core-js@1.2.6/modules/es6.function.has-instance",
      "npm:core-js@1.2.6/modules/es6.number.constructor",
      "npm:core-js@1.2.6/modules/es6.number.epsilon",
      "npm:core-js@1.2.6/modules/es6.number.is-finite",
      "npm:core-js@1.2.6/modules/es6.number.is-integer",
      "npm:core-js@1.2.6/modules/es6.number.is-nan",
      "npm:core-js@1.2.6/modules/es6.number.is-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.max-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.min-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.parse-float",
      "npm:core-js@1.2.6/modules/es6.number.parse-int",
      "npm:core-js@1.2.6/modules/es6.math.acosh",
      "npm:core-js@1.2.6/modules/es6.math.asinh",
      "npm:core-js@1.2.6/modules/es6.math.atanh",
      "npm:core-js@1.2.6/modules/es6.math.cbrt",
      "npm:core-js@1.2.6/modules/es6.math.clz32",
      "npm:core-js@1.2.6/modules/es6.math.cosh",
      "npm:core-js@1.2.6/modules/es6.math.expm1",
      "npm:core-js@1.2.6/modules/es6.math.hypot",
      "npm:core-js@1.2.6/modules/es6.math.fround",
      "npm:core-js@1.2.6/modules/es6.math.imul",
      "npm:core-js@1.2.6/modules/es6.math.log10",
      "npm:core-js@1.2.6/modules/es6.math.log1p",
      "npm:core-js@1.2.6/modules/es6.math.log2",
      "npm:core-js@1.2.6/modules/es6.math.sign",
      "npm:core-js@1.2.6/modules/es6.math.tanh",
      "npm:core-js@1.2.6/modules/es6.math.sinh",
      "npm:core-js@1.2.6/modules/es6.math.trunc",
      "npm:core-js@1.2.6/modules/es6.string.from-code-point",
      "npm:core-js@1.2.6/modules/es6.string.raw",
      "npm:core-js@1.2.6/modules/es6.string.iterator",
      "npm:core-js@1.2.6/modules/es6.string.trim",
      "npm:core-js@1.2.6/modules/es6.string.code-point-at",
      "npm:core-js@1.2.6/modules/es6.string.ends-with",
      "npm:core-js@1.2.6/modules/es6.string.includes",
      "npm:core-js@1.2.6/modules/es6.string.repeat",
      "npm:core-js@1.2.6/modules/es6.string.starts-with",
      "npm:core-js@1.2.6/modules/es6.array.from",
      "npm:core-js@1.2.6/modules/es6.array.of",
      "npm:core-js@1.2.6/modules/es6.array.iterator",
      "npm:core-js@1.2.6/modules/es6.array.species",
      "npm:core-js@1.2.6/modules/es6.array.copy-within",
      "npm:core-js@1.2.6/modules/es6.array.fill",
      "npm:core-js@1.2.6/modules/es6.array.find",
      "npm:core-js@1.2.6/modules/es6.array.find-index",
      "npm:core-js@1.2.6/modules/es6.regexp.constructor",
      "npm:core-js@1.2.6/modules/es6.regexp.flags",
      "npm:core-js@1.2.6/modules/es6.regexp.replace",
      "npm:core-js@1.2.6/modules/es6.regexp.match",
      "npm:core-js@1.2.6/modules/es6.regexp.search",
      "npm:core-js@1.2.6/modules/es6.regexp.split",
      "npm:core-js@1.2.6/modules/es6.promise",
      "npm:core-js@1.2.6/modules/es6.map",
      "npm:core-js@1.2.6/modules/es6.weak-map",
      "npm:core-js@1.2.6/modules/es6.set",
      "npm:core-js@1.2.6/modules/es6.weak-set",
      "npm:core-js@1.2.6/modules/es6.reflect.apply",
      "npm:core-js@1.2.6/modules/es6.reflect.define-property",
      "npm:core-js@1.2.6/modules/es6.reflect.construct",
      "npm:core-js@1.2.6/modules/es6.reflect.delete-property",
      "npm:core-js@1.2.6/modules/es6.reflect.enumerate",
      "npm:core-js@1.2.6/modules/es6.reflect.get",
      "npm:core-js@1.2.6/modules/es6.reflect.get-own-property-descriptor",
      "npm:core-js@1.2.6/modules/es6.reflect.get-prototype-of",
      "npm:core-js@1.2.6/modules/es6.reflect.has",
      "npm:core-js@1.2.6/modules/es6.reflect.is-extensible",
      "npm:core-js@1.2.6/modules/es6.reflect.own-keys",
      "npm:core-js@1.2.6/modules/es6.reflect.prevent-extensions",
      "npm:core-js@1.2.6/modules/es6.reflect.set",
      "npm:core-js@1.2.6/modules/es6.reflect.set-prototype-of",
      "npm:core-js@1.2.6/modules/es7.array.includes",
      "npm:core-js@1.2.6/modules/es7.string.pad-left",
      "npm:core-js@1.2.6/modules/es7.string.at",
      "npm:core-js@1.2.6/modules/es7.string.pad-right",
      "npm:core-js@1.2.6/modules/es7.string.trim-left",
      "npm:core-js@1.2.6/modules/es7.string.trim-right",
      "npm:core-js@1.2.6/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@1.2.6/modules/es7.regexp.escape",
      "npm:core-js@1.2.6/modules/es7.object.values",
      "npm:core-js@1.2.6/modules/es7.object.entries",
      "npm:core-js@1.2.6/modules/es7.map.to-json",
      "npm:core-js@1.2.6/modules/es7.set.to-json",
      "npm:core-js@1.2.6/modules/js.array.statics",
      "npm:core-js@1.2.6/modules/web.timers",
      "npm:core-js@1.2.6/modules/web.dom.iterable",
      "npm:core-js@1.2.6/modules/web.immediate",
      "npm:core-js@1.2.6/modules/$.core",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:babel-runtime@5.8.29/core-js/promise",
      "npm:babel-runtime@5.8.29/core-js/symbol/iterator",
      "npm:babel-runtime@5.8.29/core-js/symbol",
      "npm:core-js@1.2.6/modules/$.global",
      "npm:core-js@1.2.6/modules/$",
      "npm:core-js@1.2.6/modules/$.has",
      "npm:core-js@1.2.6/modules/$.descriptors",
      "npm:core-js@1.2.6/modules/$.redefine",
      "npm:core-js@1.2.6/modules/$.export",
      "npm:core-js@1.2.6/modules/$.shared",
      "npm:core-js@1.2.6/modules/$.fails",
      "npm:core-js@1.2.6/modules/$.uid",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/modules/$.wks",
      "npm:core-js@1.2.6/modules/$.keyof",
      "npm:core-js@1.2.6/modules/$.get-names",
      "npm:core-js@1.2.6/modules/$.an-object",
      "npm:core-js@1.2.6/modules/$.is-array",
      "npm:core-js@1.2.6/modules/$.enum-keys",
      "npm:core-js@1.2.6/modules/$.property-desc",
      "npm:core-js@1.2.6/modules/$.html",
      "npm:core-js@1.2.6/modules/$.library",
      "npm:core-js@1.2.6/modules/$.to-iobject",
      "npm:core-js@1.2.6/modules/$.invoke",
      "npm:core-js@1.2.6/modules/$.cof",
      "npm:core-js@1.2.6/modules/$.a-function",
      "npm:core-js@1.2.6/modules/$.dom-create",
      "npm:core-js@1.2.6/modules/$.to-integer",
      "npm:core-js@1.2.6/modules/$.to-object",
      "npm:core-js@1.2.6/modules/$.to-index",
      "npm:core-js@1.2.6/modules/$.is-object",
      "npm:core-js@1.2.6/modules/$.iobject",
      "npm:core-js@1.2.6/modules/$.array-methods",
      "npm:core-js@1.2.6/modules/$.to-length",
      "npm:core-js@1.2.6/modules/$.array-includes",
      "npm:core-js@1.2.6/modules/$.classof",
      "npm:core-js@1.2.6/modules/$.object-assign",
      "npm:core-js@1.2.6/modules/$.same-value",
      "npm:core-js@1.2.6/modules/$.set-proto",
      "npm:core-js@1.2.6/modules/$.object-sap",
      "npm:core-js@1.2.6/modules/$.to-primitive",
      "npm:core-js@1.2.6/modules/$.string-trim",
      "npm:core-js@1.2.6/modules/$.is-integer",
      "npm:core-js@1.2.6/modules/$.math-log1p",
      "npm:core-js@1.2.6/modules/$.math-expm1",
      "npm:core-js@1.2.6/modules/$.math-sign",
      "npm:core-js@1.2.6/modules/$.string-at",
      "npm:core-js@1.2.6/modules/$.iter-define",
      "npm:core-js@1.2.6/modules/$.fails-is-regexp",
      "npm:core-js@1.2.6/modules/$.string-repeat",
      "npm:core-js@1.2.6/modules/$.string-context",
      "npm:core-js@1.2.6/modules/$.ctx",
      "npm:core-js@1.2.6/modules/$.iter-call",
      "npm:core-js@1.2.6/modules/$.is-array-iter",
      "npm:core-js@1.2.6/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/modules/$.iter-detect",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/modules/$.iter-step",
      "npm:core-js@1.2.6/modules/$.set-species",
      "npm:core-js@1.2.6/modules/$.iterators",
      "npm:core-js@1.2.6/modules/$.array-copy-within",
      "npm:core-js@1.2.6/modules/$.array-fill",
      "npm:core-js@1.2.6/modules/$.is-regexp",
      "npm:core-js@1.2.6/modules/$.flags",
      "npm:core-js@1.2.6/modules/$.fix-re-wks",
      "npm:core-js@1.2.6/modules/$.strict-new",
      "npm:core-js@1.2.6/modules/$.for-of",
      "npm:core-js@1.2.6/modules/$.species-constructor",
      "npm:core-js@1.2.6/modules/$.microtask",
      "npm:core-js@1.2.6/modules/$.redefine-all",
      "npm:core-js@1.2.6/modules/$.collection-strong",
      "npm:core-js@1.2.6/modules/$.collection",
      "npm:core-js@1.2.6/modules/$.collection-weak",
      "npm:core-js@1.2.6/modules/$.iter-create",
      "npm:core-js@1.2.6/modules/$.own-keys",
      "npm:core-js@1.2.6/modules/$.string-pad",
      "npm:core-js@1.2.6/modules/$.replacer",
      "npm:core-js@1.2.6/modules/$.object-to-array",
      "npm:core-js@1.2.6/modules/$.collection-to-json",
      "npm:core-js@1.2.6/modules/$.partial",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:core-js@1.2.6/library/fn/promise",
      "npm:core-js@1.2.6/modules/$.hide",
      "npm:core-js@1.2.6/modules/$.task",
      "npm:core-js@1.2.6/library/fn/symbol",
      "npm:core-js@1.2.6/library/fn/symbol/iterator",
      "npm:process@0.11.2",
      "npm:core-js@1.2.6/library/modules/es6.promise",
      "npm:core-js@1.2.6/modules/$.defined",
      "npm:core-js@1.2.6/modules/$.array-species-create",
      "npm:core-js@1.2.6/modules/$.path",
      "npm:core-js@1.2.6/library/fn/symbol/index",
      "npm:process@0.11.2/browser",
      "npm:core-js@1.2.6/library/modules/$.same-value",
      "npm:core-js@1.2.6/library/modules/$.species-constructor",
      "npm:core-js@1.2.6/library/modules/$.microtask",
      "npm:core-js@1.2.6/library/modules/$.iter-detect",
      "npm:core-js@1.2.6/library/modules/es6.symbol",
      "npm:core-js@1.2.6/library/modules/$.task",
      "npm:core-js@1.2.6/library/modules/$.keyof",
      "npm:core-js@1.2.6/library/modules/$.get-names",
      "npm:core-js@1.2.6/library/modules/$.enum-keys",
      "npm:core-js@1.2.6/library/modules/$.is-array",
      "npm:core-js@1.2.6/library/modules/$.invoke",
      "npm:core-js@1.2.6/library/modules/$.html",
      "npm:core-js@1.2.6/library/modules/$.dom-create"
    ]
  },

  meta: {
    "code": {
      "build": false
    }
  },

  map: {
    "abecedary": "github:codeschool/abecedary@1.0.3",
    "babel": "npm:babel-core@5.8.33",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "chai": "npm:chai@3.4.0",
    "core-js": "npm:core-js@1.2.6",
    "escodegen": "npm:escodegen@1.7.0",
    "eslint": "github:codeschool/eslint@1.9.0-browserify",
    "espree": "npm:espree@2.2.5",
    "esquery": "github:nwronski/esquery@0.4.1",
    "estraverse": "npm:estraverse@4.1.1",
    "extend": "npm:extend@3.0.0",
    "javascript-sandbox": "github:codeschool/javascript-sandbox@1.0.1",
    "json": "github:systemjs/plugin-json@0.1.0",
    "mocha": "npm:mocha@2.2.5",
    "runner": "github:codeschool/abecedary@1.0.3/dist/mocha-runner.js",
    "sinon": "npm:sinon@1.17.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:chai@3.4.0": {
      "assertion-error": "npm:assertion-error@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "type-detect": "npm:type-detect@1.0.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:escodegen@1.7.0": {
      "esprima": "npm:esprima@1.2.5",
      "estraverse": "npm:estraverse@1.9.3",
      "esutils": "npm:esutils@2.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optionator": "npm:optionator@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.2.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:espree@2.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima@1.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:estraverse@4.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:formatio@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "samsam": "npm:samsam@1.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:levn@0.2.5": {
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "type-check": "npm:type-check@0.3.1"
    },
    "npm:mocha@2.2.5": {
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:optionator@0.5.0": {
      "deep-is": "npm:deep-is@0.1.3",
      "fast-levenshtein": "npm:fast-levenshtein@1.0.7",
      "levn": "npm:levn@0.2.5",
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "type-check": "npm:type-check@0.3.1",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:sinon@1.17.2": {
      "formatio": "npm:formatio@1.1.1",
      "lolex": "npm:lolex@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "samsam": "npm:samsam@1.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:source-map@0.2.0": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:type-check@0.3.1": {
      "prelude-ls": "npm:prelude-ls@1.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});