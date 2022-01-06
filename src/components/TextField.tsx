import React, { useEffect } from 'react'
import { noop } from 'lodash'
import l10n from '../constants/translations.en'
import initializeCopyButton from '../utils/clipboard'

type Props = {
  label: string
  name: string
  handleChange?: Function
  value: string
}

// TODO: Add optional copy button to the field?

const TextField = (props: Props) => {
  const { label, name, handleChange = noop, value } = props

  useEffect(() => {
    initializeCopyButton(`#${label}-button`, `#${label}-textField`)
  })

  return (
    <div>
      <label htmlFor={`${name}-textField`}>{label}</label>
      <input
        className="border w-full rounded-sm"
        type="text"
        id={`${name}-textField`}
        name={name}
        onChange={(event) => handleChange(event)}
        value={value}
      />
      <button id={`${label}-button`} type="button">
        {l10n.main.copy}
      </button>
    </div>
  )
}

export default TextField
