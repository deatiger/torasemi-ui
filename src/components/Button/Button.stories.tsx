import React from 'react';
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

import {PrimaryButton} from "./index";

const components = storiesOf("Components", module);
components
    .addDecorator(withKnobs)
    .addDecorator(withInfo({ inline: true }))
    .add("Button", () => (
        <PrimaryButton
            label={"登録する"}
        />
    ));