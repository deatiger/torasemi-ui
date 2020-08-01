import { configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
    panelExclude: []
});

const loadStories = () => {
    const req = require.context("../src/components", true, /.stories.tsx$/)
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);