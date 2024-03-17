import React from 'react'

interface Props {
    children: string
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

//const [clicked]

const Button = ({children, onClick, color}: Props) => {
  return (
    <button className={'btn btn-' + color}  onClick={onClick} >{children}</button>
  )
}

export default Button