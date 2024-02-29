import { Outlet } from "react-router-dom";
import {useState, useEffect} from "react";
import NavBar from "./NavBar";

function App() {

  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch('http://localhost:7000/pets')
    .then(response => response.json())
    .then(petsData => setPets(petsData))
  }, [])

  function addPet(newPet){
    const newPetWithID = {id: pets[pets.length - 1].id + 1, ...newPet}
    setPets([...pets, newPetWithID])
  }

  return (
    <div className="App">
      <NavBar/>
      <h1>Welcome to the Pets website!</h1>
      <Outlet context={{pets: pets, addPet: addPet}} />
    </div>
  );
}

export default App;
