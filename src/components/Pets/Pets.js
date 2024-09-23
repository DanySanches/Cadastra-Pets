import "./Pets.css";
import Pet from "../Pet/Pet";
import { useState, useEffect } from "react";
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';



const Pets = () => {
//vou  transformar meu array pets em um state
  const [pets, setPets] = useState([])
// o  useEffect funciona quando minha aplicação é construida e ela é atulizada é o antigo didMount e didUpdate
  useEffect(
    () => {
     getPets();
    }, [pets]
  ) 
  const [petsForm, setPetsForm] = useState({
    nome: "",
    foto: "",
    historia: ""
  })

  const handleClick = async ()=> {
    //setPets([...pets, petsForm])
    const response = await fetch('http://localhost:3005/pets', {
      method: 'POST',
      headers: new Headers({
        "Content-type": "application/json"
      }),
      body: JSON.stringify(petsForm)
    })

    const data = await response.json();
    alert(`Pet ${data.nome} Cadastrado com sucesso`)

     getPets();

    setPetsForm({
      nome: "",
      foto: "",
      historia: ""
    })

  }

  const handleFieldChange =(event) => {
    setPetsForm({
      ...petsForm,
      [event.target.name]: event.target.value
  })
  console.log(petsForm)
  }

  const  getPets = async () => {
    //Get = buscar as  infos
    //response = chamada  do servidor "carta fechada"
    //data - é o  dado  que  recebo apos o conteudo do rsponse(conteudo da carta)
    const response = await fetch('http://localhost:3005/pets')
    const data = await response.json();
    setPets(data);
  }

  return (
    <section className="pets">
      <h1> Meus Pets</h1>
      <form className="form">
        <FormInput  inputName='Nome' id='nome' name="nome" type="text" value={petsForm.nome} onChange = {event => handleFieldChange(event)}/>
        <FormInput  inputName='Foto' id='foto' name="foto" type="text" value={petsForm.foto} onChange={event => handleFieldChange(event)}/>
        <FormInput  inputName='Historia' id='historia' name="historia" type="text" value={petsForm.historia} onChange={event => handleFieldChange(event)}/>
        <Button text="Cadastrar" type="submit" onClick={handleClick} />
      </form>
      <ul className="pets-lista">
        {pets.map((pet, index) => (
          <Pet pet={pet} key="index"/>
        ))}
      </ul>
    </section>
  );
};

export default Pets;
