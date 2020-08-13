import React, {FC} from 'react';
import styled from 'styled-components';
import {BaseButton, ButtonProps} from "./BaseButton";
import {palette} from "../../themes/createPalette";

const PrimaryStyleButton = styled(BaseButton)({
  backgroundColor: palette.primary.main,
  transition: 'all ease .35s',
  '&:hover': {
    backgroundColor: palette.primary.dark
  }
})

export const PrimaryButton: FC<ButtonProps> = (props) => {
  return <PrimaryStyleButton {...props} />
}