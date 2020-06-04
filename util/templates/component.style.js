module.exports = (componentName) => ({
  content: `
@import "../variables.scss";
@import "../typography.scss";
.foo-bar {
  @include font-defaults;
  color: $harvey-green;
}
`,
  extension: `.scss`
});