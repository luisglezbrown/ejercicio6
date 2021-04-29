export default function Card(props) {
    return (
        <div className="card w-25 mx-auto my-5">
            <img src={props.imgSrc} className="card-img-top" alt="Aquí deberías ver una imagen" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.buttonLink} className="btn btn-primary">{props.buttonText}</a>
            </div>
        </div>
    )
}
