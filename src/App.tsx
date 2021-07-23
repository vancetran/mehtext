import React from 'react'
import Page from './components/Page'
import './App.css'

function App() {
  return (
    <Page>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Case study
        </div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
          Howdy
        </p>
        <p className="mt-2 text-gray-500">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>
      </div>
    </Page>
  )
}

export default App
