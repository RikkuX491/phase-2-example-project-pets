import {useState} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";

function NewPetForm(){

    const [formData, setFormData] = useState({
        name: "",
        image: ""
    })

    const navigate = useNavigate()
    const {addPet} = useOutletContext()

    function handleSubmit(event){
        event.preventDefault()

        addPet(formData)

        setFormData({name: "", image: ""})
        
        navigate('/')
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input onChange={updateFormData} type="text" name="name" placeholder="Pet Name goes here..." value={formData.name}/>
            <br/>
            <label>Image: </label>
            <input onChange={updateFormData} type="text" name="image" placeholder="Pet Image goes here..." value={formData.image}/>
            <br/>
            <button type="submit">Add Pet</button>
        </form>
    )
}

export default NewPetForm;