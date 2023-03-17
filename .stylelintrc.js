module.exports = {
  customSyntax: 'postcss-less',
  ignoreFiles: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/docs/**',
    '**/.docusaurus/**',
    '**/coverage/**', '**/*.js',
    '**/*.ts',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.json'
  ],
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
    'stylelint-prettier'
  ],
  rules: {
    'prettier/prettier': [
      true,
      {
        singleQuote: true,
      },
    ],
    'no-empty-source': null,
    'declaration-empty-line-before': null,
    'no-duplicate-selectors': null,
    'no-descending-specificity': null,
    'declaration-no-important': [true, { severity: 'warning' }],
    'keyframe-declaration-no-important': [true, { severity: 'warning' }],
    'selector-max-id': 2,
    'import-notation': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'color-function-notation': null,
    'alpha-value-notation': ['number'],
    'plugin/declaration-block-no-ignored-properties': true,
    'order/order': ['at-variables', 'declarations', 'rules'],
    'order/properties-order': [
      {
        emptyLineBefore: 'always',
        properties: ['display'],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'float',
          'position',
          'left',
          'right',
          'top',
          'bottom',
          'order',
          'align-self',
          'z-index',
          'clear',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'box-sizing',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'margin-collapse',
          'margin-top-collapse',
          'margin-right-collapse',
          'margin-bottom-collapse',
          'margin-left-collapse',
          'border',
          'border-collapse',
          'border-color',
          'border-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-top-left-radius',
          'border-spacing',
          'border-style',
          'border-width',
          'border-top',
          'border-top-color',
          'border-top-style',
          'border-top-width',
          'border-right',
          'border-right-color',
          'border-right-style',
          'border-right-width',
          'border-bottom',
          'border-bottom-color',
          'border-bottom-style',
          'border-bottom-width',
          'border-left',
          'border-left-color',
          'border-left-style',
          'border-left-width',
          'border-image',
          'border-image-outset',
          'border-image-repeat',
          'border-image-slice',
          'border-image-source',
          'border-image-width',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'flex',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'overflow',
          'overflow-x',
          'overflow-y',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'flex-flow',
          'flex-direction',
          'flex-wrap',
          'justify-content',
          'align-content',
          'align-items',
          'column-count',
          'column-width',
          'column-gap',
          'column-rule',
          'column-fill',
          'column-span',
          'object-position',
          'object-fit',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'content',
          'quotes',
          'text-indent',
          'font',
          'font-family',
          'font-size',
          'font-style',
          'font-weight',
          'src',
          'hyphens',
          'line-height',
          'letter-spacing',
          'word-spacing',
          'text-align',
          'vertical-align',
          'color',
          'word-break',
          'word-wrap',
          'white-space',
          'text-overflow',
          'text-transform',
          'text-decoration',
          'text-shadow',
          'direction',
          'unicode-bidi',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'background',
          'background-color',
          'background-image',
          'background-position',
          'background-repeat',
          'background-size',
          'background-attachment',
          'background-clip',
          'background-origin',
          'background-blend-mode',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'list-style',
          'list-style-type',
          'list-style-position',
          'list-style-image',
          'box-shadow',
          'filter',
          'transform',
          'transform-box',
          'transform-origin',
          'transform-style',
          'animation',
          'animation-name',
          'animation-delay',
          'animation-duration',
          'animation-iteration-count',
          'animation-timing-function',
          'animation-direction',
          'animation-play-state',
          'animation-fill-mode',
          'transition',
          'transition-delay',
          'transition-duration',
          'transition-property',
          'transition-timing-function',
          'appearance',
          'resize',
          'user-select',
          'cursor',
          'pointer-events',
          'visibility',
          'opacity',
          'outline',
          'outline-color',
          'outline-offset',
          'outline-style',
          'outline-width',
          'zoom',
        ],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
  },
};
