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
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-left space-y-4">
      <label htmlFor={`${name}-textField`}>{label}</label>
      <div className="flex flex-row space-x-4">
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
    </div>
  )
}

export default TextField
