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
        <h1 className="block mt-1 mb-8 text-6xl leading-tight font-medium text-black">
          {l10n.main.appTitle}
        </h1>
        <div className="space-y-6">
          <TextField
            label={l10n.textFields.input}
            name={l10n.textFields.input}
            handleChange={(event: React.FormEvent<HTMLInputElement>): void =>
              // console.log('hey', event)
              handleChange(event)
            }
            value={mainInput}
            copyButton={false}
          />

          {textTransformFields.map(({ label, name, value }) => (
            <TextField
              label={label}
              name={name}
              value={value(mainInput)}
              key={name}
            />
          ))}
        </div>
      </div>
    </Page>
  )
}

export default App
