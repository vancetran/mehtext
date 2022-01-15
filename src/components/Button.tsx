import React from 'react'

type ButtonProps = {
  /** The text contents of the button */
  children: string
  /** The id of the button */
  id: string
}

const Button = (props: ButtonProps) => {
  const { children = 'Button', ...rest } = props
  return (
    <button {...rest} type="button">
      {children}
    </button>
  )
}

export default Button
