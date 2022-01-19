import React, { useEffect, useState } from 'react'
import { noop } from 'lodash'
import Button from './Button'
import l10n from '../constants/translations.en'
import initializeCopyButton from '../utils/clipboard'

type TextFieldProps = {
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
}: TextFieldProps) => {
  const [copyButtonText, setCopyButtonText] = useState(l10n.main.copy)

  useEffect(() => {
    if (copyButton) {
      initializeCopyButton(`#${name}-button`, `#${name}-textField`)
    }
  }, [copyButton, name])

  const handleButtonText = () => {
    console.log('handleButtonText')
    setCopyButtonText(l10n.main.copied)
    setTimeout(() => setCopyButtonText(l10n.main.copy), 1000)
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-left space-y-4">
      <label
        htmlFor={`${name}-textField`}
        className="font-semibold text-purple-600"
      >
        {label}
      </label>
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
          <Button id={`${name}-button`} onClick={handleButtonText}>
            {copyButtonText}
          </Button>
        )}
      </div>
    </div>
  )
}

export default TextField
