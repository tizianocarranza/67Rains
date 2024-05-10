import React, { startTransition } from 'react'
import { Navbar, Divider } from "./components/index"
import { Header, Feature, Collection, Footer, Sections } from "./containers/index"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Collection />

        <Divider text="Never lose your essence." />

      <Feature text="Keep doing what makes you different."/>

        <Divider text="Always sign." />
        
      <Sections />
      <Footer />
    </div>
  )
}

export default App;
