module.exports = {
  root: true,
  // 默认情况eslint内置的解析器是对于标准JavaScript运行时的版本兼容，而代码中有一些ts，需要将ts解析成eslint能识别的AST
  parser: '@typescript-eslint/parser',
  // 小众规则（eslint内置推荐的）
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:@typescript-eslint/eslint-recommended',
    // 放到最后保证prettier规则覆盖eslint规则
    'prettier',
  ],

  plugins: ['@typescript-eslint', 'prettier', 'vue'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-namespace': 'off',
    'no-debugger': 'error',
    'no-var': 'error',
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' },
    ],
    // 变量命名小驼峰，文件名小驼峰
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true,
      },
    ],
    // most of the codebase are expected to be env agnostic

    // 关闭一些规则防止eslint和prettier发生冲突
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prettier-arrow-callback': 'off',
  },
};
