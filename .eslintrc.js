module.exports = {
  root: true,
  // 默认情况eslint内置的解析器是对于标准JavaScript运行时的版本兼容，而代码中有一些ts，需要将ts解析成eslint能识别的AST
  // parser: "@typescript-eslint/parser",
  // 小众规则（eslint内置推荐的）
  parser: "vue-eslint-parser",

  parserOptions: { parser: "@typescript-eslint/parser" },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",

    // 放到最后保证prettier规则覆盖eslint规则
    "prettier",
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    uni: true,
    window: true,
    $ref: true,
    $: true,
  },
  plugins: ["@typescript-eslint", "prettier", "vue"],

  /*
      "off"或者0    //关闭规则关闭
      "warn"或者1    //在打开的规则作为警告（不影响退出代码）
      "error"或者2    //把规则作为一个错误（退出代码触发时为1）
    */
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-namespace": "off",

    "no-debugger": "error",
    "no-var": "error",
    "no-unused-vars": [
      "error",
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: ".*", args: "none" },
    ],
    "no-func-assign": 2, //禁止重复的函数声明
    "no-implicit-coercion": 1, //禁止隐式转换
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2, //函数参数不能重复
    "prefer-const": 0, // 首选const
    semi: ["error", "always"],
    camelcase: [
      "error",
      {
        properties: "always",
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true,
      },
    ],

    // vue
    "vue/multi-word-component-names": 0,
    "vue/html-self-closing": "off",
    "vue/attribute-hyphenation": 0,

    // 关闭一些规则防止eslint和prettier发生冲突
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prettier-arrow-callback": "off",
  },
};
