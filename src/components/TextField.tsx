import React, { useEffect } from 'react'
import { noop } from 'lodash'
import l10n from '../constants/translations.en'
import initializeCopyButton from '../utils/clipboard'

type Props = {
  copyButton?: boolean
  handleChange?: Function
  label: string
  name: string
  value: string
}

const TextField = ({
  copyButton = true,
  handleChange = noop,
  label,
  name,
  value,
}: Props) => {
  // const { label, name, handleChange = noop, value,  } = props

  useEffect(() => {
    if (copyButton) {
      initializeCopyButton(`#${label}-button`, `#${label}-textField`)
    }
  }, [copyButton, label])

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
      {copyButton && (
        <button id={`${label}-button`} type="button">
          {l10n.main.copy}
        </button>
      )}
    </div>
  )
}

export default TextField
