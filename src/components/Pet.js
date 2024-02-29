function Pet({pet}){
    return (
        <li>
            <img src={pet.image}/>
            <h4>{pet.name}</h4>
        </li>
    )
}

export default Pet;