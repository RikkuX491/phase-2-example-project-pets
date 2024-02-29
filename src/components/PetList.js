import {useOutletContext} from "react-router-dom";
import Pet from "./Pet"

function PetList(){

    const {pets} = useOutletContext()

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} />
    })

    return (
        <ul>{petComponents}</ul>
    )
}

export default PetList;