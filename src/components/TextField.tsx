import React from 'react'
import { noop } from 'lodash'

type Props = {
  label: string
  name: string
  handleChange?: Function
  value: string
}

// TODO: Add optional copy button to the field?

const TextField = (props: Props) => {
  const { label, name, handleChange = noop, value } = props
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className="border w-full rounded-sm"
        type="text"
        id={name}
        name={name}
        onChange={(event) => handleChange(event)}
        value={value}
      />
    </div>
  )
}

export default TextField
