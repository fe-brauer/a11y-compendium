import "@fontsource-variable/merriweather"
import "@fontsource-variable/fira-code"
import "@fontsource-variable/rubik"
import '@fontsource-variable/material-symbols-sharp';

import './modules/code-tabs';

import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';

import '../css/prism-overrides.css'

document.addEventListener('DOMContentLoaded', () => {
    Prism.highlightAll();
});
