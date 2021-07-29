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
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="border w-full rounded-sm"
        type="text"
        id={name}
        name={name}
        onChange={() => handleChange()}
        value={value}
      />
    </>
  )
}

export default TextField
