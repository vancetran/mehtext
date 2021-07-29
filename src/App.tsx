import React, { ChangeEvent, useState } from 'react'
import Page from './components/Page'
import './App.css'
import TextField from './components/TextField'

function App() {
  const [mainInput, setMainInput] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMainInput(event.target.value)
  }

  const noop = () => {
    return null
  }
  return (
    <Page>
      <div className="p-8">
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
          Howdy
        </p>

        <TextField
          label={'Input'}
          name={'Input'}
          handleChange={handleChange}
          value={mainInput}
        />

        <TextField
          label={'Output'}
          name={'Output'}
          handleChange={noop}
          value=""
        />
      </div>
    </Page>
  )
}

export default App
