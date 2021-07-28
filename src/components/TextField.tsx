import React from 'react'

type Props = { label: string; name: string }

const TextField = (props: Props) => {
  const { label, name } = props
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="border w-full rounded-sm"
        type="text"
        id={name}
        name={name}
      />
    </>
  )
}

export default TextField
