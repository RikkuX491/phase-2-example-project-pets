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
    fetch('http://localhost:7000/pets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPet)
    })
    .then(response => response.json())
    .then(newPetData => setPets(pets => [...pets, newPetData]))
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
