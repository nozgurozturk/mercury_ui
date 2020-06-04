module.exports = (componentName) => ({
  content: `
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { ${componentName} } from '../components/${componentName}'

const stories = storiesOf('${componentName}', module)

stories.add('Default', () =>
  <>
    <${componentName}> Default </${componentName}>
  </>
)
`,
  extension: `.stories.tsx`
});