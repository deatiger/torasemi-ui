import React, {FC} from 'react'
import styled from "styled-components";

export interface RowProps {
  className?: string
  wrapStyle?: 'wrap' | 'nowrap'
}

const Row = styled.div({
  display: 'flex',
  flexDirection: 'row',
  height: 'auto',
  justifyContent: 'flex-start',
  margin: '16px 0',
  width: '100%',
  '&.wrap': {
    flexWrap: 'wrap'
  },
  '&.nowrap': {
    flexWrap: 'nowrap'
  },
  '& > *': {
    marginLeft: 8
  }
})

export const GridRow: FC<RowProps> = ({
  className = '',
  wrapStyle = 'wrap',
  children
}) => {
  const classNames = `${className} ${wrapStyle}`
  return (
    <Row className={classNames}>
      {children}
    </Row>
  )
}