import { configure } from '@storybook/react';
const req = require.context("../src/stories", true, /.stories.tsx$/)
import '../src/styles/all.scss'
function loadStories() {
	req.keys().forEach(req)
}

configure(loadStories, module)