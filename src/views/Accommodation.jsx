import { useParams } from "react-router-dom"
import { useState, useEffect, Fragment } from "react"
import Gallery from "../components/Gallery"
import Collapse from "../components/Collapse"
import Rate from "../components/Rate"
import Title from "../components/Title"
import Error404 from "../components/Error404"

const Accommodation = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const foundAccommodation = data.find((item) => item.id === id)

  const accommodation = () => {
    if (foundAccommodation) {
      return (
        <div className="accommodation">
          <div className="accommodation--gallery">
            <Gallery pictures={foundAccommodation.pictures} />
          </div>
          <div className="accommodation--info">
            <div className="accommodation--info__title">
              <h1>{foundAccommodation.title}</h1>
              <h3>{foundAccommodation.location}</h3>
              <ul>
                {foundAccommodation.tags.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="accommodation--info__author">
              <div className="author">
                <h3>{foundAccommodation.host.name}</h3>
                <img
                  src={foundAccommodation.host.picture}
                  alt={foundAccommodation.host.name}
                />
              </div>
              <Rate rate={foundAccommodation.rating} />
            </div>
          </div>
          <div className="accommodation--collapse">
            <Collapse
              title={"Description"}
              description={foundAccommodation.description}
            />
            <Collapse
              title={"Equipements"}
              equipments={foundAccommodation.equipments}
            />
          </div>
        </div>
      )
    }
  }

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

  if (!foundAccommodation) return <Error404 />

  return (
    <Fragment>
      <Title title={foundAccommodation?.title} />
      <main>{accommodation()}</main>
    </Fragment>
  )
}

export default Accommodation
