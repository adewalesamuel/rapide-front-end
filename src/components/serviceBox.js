import { Link } from "react-router-dom"
import imgRightArrow from '../img/right-arrow.png'

export function ServiceBox(props) {
    return (
        <div className="service-container">
            {props.categories.map((categorie, index) => {
                return(
                    <div className="service-box" key={index}>
                        {props.renderImgFromName(categorie.nom)}
                        <p className="card-title">
                            <Link to={'/commandes/' + categorie.id }>
                                {categorie.nom}
                            </Link>
                        </p>
                        <p className="card-detail">
                            <Link to={'/commandes/' + categorie.id }>
                                Detail
                            </Link>
                        </p>
                        <img className="card-next" src={imgRightArrow} alt=""/>
                    </div>
                )
            })}
        </div>
    )
}