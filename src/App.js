import './App.css'
import React, { useState } from 'react'
import { data } from './data'
import ListOfBirthdays from './ListOfBirthdays'

function App() {
  const [birthdays, setBirthdays] = useState(data)

  return (
    <React.Fragment>
      <ListOfBirthdays data={birthdays} setData={setBirthdays} />
    </React.Fragment>
  )
}

export default App
