import React, { Fragment, useState } from "react"
import arrowBack from "../assets/icons/arrow_back.png"
import arrowFront from "../assets/icons/arrow_front.png"

const Collapse = ({ title, description, equipments, isAbout }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Fragment>
      {isAbout ? (
        <Fragment>
          <div
            className={`about--collapse__action ${isActive ? "active" : ""}`}
            onClick={() => setIsActive(!isActive)}
          >
            <h3>{title}</h3>
            {isActive ? (
              <img src={arrowBack} alt="arrow_back" />
            ) : (
              <img src={arrowFront} alt="arrow_front" />
            )}
          </div>
          <div className="about--collapse__content">
            {description && isActive ? <p>{description}</p> : null}
            {equipments && isActive ? (
              <ul>
                {equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </Fragment>
      ) : (
        <div style={{width: '45%'}}>
          <div
            className={`accommodation--collapse__action ${
              isActive ? "active" : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            <h3>{title}</h3>
            {isActive ? (
              <img src={arrowBack} alt="arrow_back" />
            ) : (
              <img src={arrowFront} alt="arrow_front" />
            )}
          </div>
          <div className="accommodation--collapse__content">
            {description && isActive ? <p>{description}</p> : null}
            {equipments && isActive ? (
              <ul>
                {equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Collapse
