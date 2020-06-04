module.exports = (componentName) => ({
  content: `
export type foo = 'bar1' | 'bar2' | 'bar3' | 'bar4'
`,
  extension: `.types.ts`
});