import { Fragment } from "react"

let nome="eduardo louis"

export default function Componente(){
    return(
        <Fragment>
            <div>
                <h2> Oi {nome}
                </h2>
                <br />
                multiplicação {5*5}
                <br />
                <p>flamego</p>
            </div>
        </Fragment>
    )
}