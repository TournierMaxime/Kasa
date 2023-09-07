import React, { useState, useEffect } from "react"

const Card = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../data.json")
        if (!response.ok) {
          throw new Error("Erreur réseau lors de la requête.")
        }
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="card">
      {data.map((item, index) => {
        return (
            <div className="card--thumb" key={index}>
            {/* <img className="card--thumb__cover" src={item.cover} alt={item.title} /> */}
            <h3 className="card--thumb__title">{item.title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Card
