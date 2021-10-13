import * as React from 'react'
import { useEffect, useState } from 'react'
import Page from './components/Page'
import './App.css'
import TextField from './components/TextField'
import { clapback, sarcastic, ssssnake, airquotes } from './utils/textTransform'
import l10n from './constants/translations.en'

function App() {
  const [mainInput, setMainInput] = useState('')

  useEffect(() => {
    // console.log('mainInput:', mainInput)
  }, [mainInput])

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMainInput(event.currentTarget.value)
  }

  const noop = () => {
    return null
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

          <TextField
            label={l10n.textFields.sarcastic}
            name={l10n.textFields.sarcastic}
            handleChange={noop}
            value={sarcastic(mainInput)}
          />

          <TextField
            label={l10n.textFields.clapback}
            name={l10n.textFields.clapback}
            handleChange={noop}
            value={clapback(mainInput)}
          />

          <TextField
            label={l10n.textFields.ssssnake}
            name={l10n.textFields.ssssnake}
            handleChange={noop}
            value={ssssnake(mainInput)}
          />

          <TextField
            label={l10n.textFields.airquotes}
            name={l10n.textFields.airquotes}
            handleChange={noop}
            value={airquotes(mainInput)}
          />
        </div>
      </div>
    </Page>
  )
}

export default App
