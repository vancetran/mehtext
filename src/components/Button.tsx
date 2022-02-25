import React, { MouseEventHandler } from 'react'

type ButtonProps = {
  /** The text contents of the button */
  children: string
  /** The id of the button */
  id: string
  /** the onClick handler of this button */
  onClick: MouseEventHandler<HTMLButtonElement>
  /** fixed width of button */
  fixedWidth?: number
}

const Button = (props: ButtonProps) => {
  const { children = 'Button', fixedWidth = null, ...rest } = props

  const optionalWidth = fixedWidth ? `w-${fixedWidth}` : ''
  return (
    <button
      {...rest}
      type="button"
      className={`inline-block px-3 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${optionalWidth}`}
    >
      {children}
    </button>
  )
}

export default Button
