module.exports = (componentName) => ({
  content: `
@import "../variables/color";
@import "../variables/spacing";
@import "../variables/font";
.foo-bar {
  font-famaliy:$font-family;
  color: $text-primary;
}
`,
  extension: `.scss`
});