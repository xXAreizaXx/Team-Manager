/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Headlines from '../../assets/icons/Headlines';
import Substitutes from '../../assets/icons/Substitutes';
import styled from 'styled-components';
import Styles from './Button.styles'

const ButtonWrapper = styled.button`${Styles.btnWrapper}`

const Button = ({ isHeadlines }) => (
    isHeadlines
    ? 
    <ButtonWrapper isHeadlines>
        <Headlines width={42} height={42}/>
    </ButtonWrapper>
    :
    <ButtonWrapper>
        <Substitutes width={42} height={42}/>
    </ButtonWrapper>
)

Button.prototype = {
    isHeadlines: PropTypes.bool,
}

export default Button;
