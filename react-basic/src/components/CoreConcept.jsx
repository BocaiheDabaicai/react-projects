// eslint-disable-next-line react/prop-types
function CoreConcept({image,title,description}){
    // eslint-disable-next-line react/prop-types
    // const {image,title,description} = props
    return(
        <li className="data">
            <img src={image} alt="cgUA" width={64} height={64}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

export default CoreConcept