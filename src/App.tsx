import * as React from 'react'
import { useEffect, useState } from 'react'
import Page from './components/Page'
import './App.css'
import TextField from './components/TextField'
import { capitalize, clapback, sarcastic } from './utils/textTransform'

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
          MehText
        </p>

        <TextField
          label={'Input'}
          name={'Input'}
          handleChange={(event: React.FormEvent<HTMLInputElement>): void =>
            // console.log('hey', event)
            handleChange(event)
          }
          value={mainInput}
        />

        <TextField
          label={'Capitalize'}
          name={'Capitalize'}
          handleChange={noop}
          value={capitalize(mainInput)}
        />

        <TextField
          label={'Sarcastic'}
          name={'Sarcastic'}
          handleChange={noop}
          value={sarcastic(mainInput)}
        />

        <TextField
          label={'Clapback'}
          name={'Clapback'}
          handleChange={noop}
          value={clapback(mainInput)}
        />
      </div>
    </Page>
  )
}

export default App
