import React from 'react'
import Page from './components/Page'
import './App.css'
import TextField from './components/TextField'

function App() {
  return (
    <Page>
      <div className="p-8">
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
          Howdy
        </p>

        <TextField label={'Input'} name={'Inputz'} />
      </div>
    </Page>
  )
}

export default App
