import { Fragment, useState } from "react"
import arrowLeft from "../assets/icons/arrow_left.png"
import arrowRight from "../assets/icons/arrow_right.png"

const Gallery = ({ pictures }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    } else {
      setCurrentPage(pictures.length)
    }
  }

  const handleNext = () => {
    if (currentPage < pictures.length) {
      setCurrentPage(currentPage + 1)
    } else {
      setCurrentPage(1)
    }
  }

  const gallery = () => {
    if (pictures.length > 1) {
      return (
        <Fragment>
          <img
            onClick={() => handlePrevious()}
            className="accommodation--gallery__arrowLeft"
            src={arrowLeft}
            alt="arrow_left"
          />
          <img
            className="hostPicture"
            src={pictures[currentPage - 1]}
            alt="pic"
          />
          <img
            onClick={() => handleNext()}
            className="accommodation--gallery__arrowRight"
            src={arrowRight}
            alt="arrow_right"
          />
          <p className="accommodation--gallery__pagination">
            {currentPage + "/" + pictures.length}
          </p>
        </Fragment>
      )
    } else {
      return <img className="hostPicture" src={pictures[currentPage - 1]} alt="pic" />
    }
  }

  return gallery()
}

export default Gallery
