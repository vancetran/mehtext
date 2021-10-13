import * as React from 'react'
import { useEffect, useState } from 'react'
import Page from './components/Page'
import './App.css'
import TextField from './components/TextField'
import textTransformFields from './config/textTransformFields'
import l10n from './constants/translations.en'

function App() {
  const [mainInput, setMainInput] = useState('')

  useEffect(() => {}, [mainInput])

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMainInput(event.currentTarget.value)
  }

  return (
    <Page>
      <div className="p-8">
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
          {l10n.main.appTitle}
        </p>
        <div className="space-y-6">
          <TextField
            label={l10n.textFields.input}
            name={l10n.textFields.input}
            handleChange={(event: React.FormEvent<HTMLInputElement>): void =>
              // console.log('hey', event)
              handleChange(event)
            }
            value={mainInput}
          />

          {textTransformFields.map((field) => (
            <TextField
              label={field.label}
              name={field.name}
              value={field.value(mainInput)}
            />
          ))}
        </div>
      </div>
    </Page>
  )
}

export default App
