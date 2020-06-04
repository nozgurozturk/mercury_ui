import { configure } from '@storybook/react';
const req = require.context('../src/stories', true, /\.tsx?$/)
import '../src/styles/normalize.scss'
import '../src/styles/icon_url.scss'

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);