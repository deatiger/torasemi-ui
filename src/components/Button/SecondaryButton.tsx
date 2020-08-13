import React, {FC} from 'react';
import styled from 'styled-components';
import {BaseButton, ButtonProps} from "./BaseButton";
import {palette} from "../../themes/createPalette";

const SecondaryStyleButton = styled(BaseButton)({
  backgroundColor: palette.secondary.main,
  transition: 'all ease .35s',
  '&:hover': {
    backgroundColor: palette.secondary.dark
  }
})

export const SecondaryButton: FC<ButtonProps> = (props) => {
  return <SecondaryStyleButton {...props} />
}