import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <div className="error404">
      <h1 className="error404__title">404</h1>
      <h4 className="error404__message">
        Oups! La page que vous demandez n'existe pas.
      </h4>
      <Link className="error404__redirectLink" to={"/"}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error404
