import React from 'react'

type Props = {
  label: string
  name: string
  handleChange: Function
  value: string
}

const TextField = (props: Props) => {
  const { label, name, handleChange, value } = props
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
