import React from 'react';
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

import {PrimaryButton, SecondaryButton} from "./index";
import {GridRow} from '../Grid'

const components = storiesOf("Components", module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add("Button", () => (
    <section>
      <GridRow wrapStyle={"nowrap"}>
        <PrimaryButton
          label={"Primary Default"}
          size={"default"}
        />
        <SecondaryButton
          label={"Secondary Default"}
          size={"default"}
        />
      </GridRow>
      <GridRow wrapStyle={"nowrap"}>
        <PrimaryButton
          label={"Primary Small"}
          onClick={() => console.log("Primary!")}
          size={"small"}
        />
        <SecondaryButton
          label={"Secondary Small"}
          size={"small"}
        />
      </GridRow>
    </section>
  ))
