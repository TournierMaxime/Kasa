import React, { Fragment } from "react"
import Card from "../components/Card"
import Title from "../components/Title"

const Home = () => {
  return (
    <Fragment>
      <Title title="Accueil" />
      <main>
        <div className="backgroundImage">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <Card />
      </main>
    </Fragment>
  )
}

export default Home
