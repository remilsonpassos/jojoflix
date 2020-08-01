import styled from 'styled-components';

const Button = styled.button`
    
    color:red;
    border: 1px solid var(--white);
    box-sizing: border-box;
    background-color:var(--black);
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

`;

export default Button;











/* import React from 'react';

function ButtonLink(props){
    console.log(props)
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink; */