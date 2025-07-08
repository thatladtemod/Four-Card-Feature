export default function Card(props) {

    return(
        <div className="card">
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            <div className="icon-container">
                <img src={props.src} alt={props.alt} />
            </div>
        </div>
    )
}