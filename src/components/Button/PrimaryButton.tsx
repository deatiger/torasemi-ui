import React from 'react';
import styled from 'styled-components';

interface PrimaryButtonProps {
    label: string
}

const Button = styled.button({
    backgroundColor: '#42a5f5',
    border: 'none',
    display: 'block',
    padding: '4px 16px',
    '&:hover': {
        backgroundColor: '#80d6ff'
    }
})

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <Button>
            {props.label}
        </Button>
    );
};

export default PrimaryButton;