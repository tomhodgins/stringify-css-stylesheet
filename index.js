import stringifyRule from 'https://unpkg.com/stringify-css-rule/index.js'

export default function(stylesheet) {
  return stylesheet.cssRules
  ? Array.from(stylesheet.cssRules)
      .map(rule => stringifyRule(rule))
      .join('\n')
  : ''
}