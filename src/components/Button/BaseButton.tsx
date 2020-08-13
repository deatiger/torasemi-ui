import React, {FC} from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  className?: string
  label?: string
  onClick?: () => void
  size?: 'default' | 'small'
}

const Button = styled.button({
  border: 'none',
  borderRadius: 4,
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  display: 'block',
  fontSize: 16,
  fontWeight: 600,
  minWidth: 32,
  textAlign: 'center',
  '&.default': {
    height: 48,
    lineHeight: '48px',
    padding: '0 16px',
  },
  '&.small': {
    fontSize: 14,
    height: 32,
    lineHeight: '32px',
    padding: '0 8px'
  }
})

export const BaseButton: FC<ButtonProps> = ({
  size = 'default',
  className = '',
  label = '',
  onClick = () => null,
  ...props
}) => {
  const classNames = `${size} ${className}`

  return (
    <Button className={classNames} {...props}>
      {label}
    </Button>
  )
}


