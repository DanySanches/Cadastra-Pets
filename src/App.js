import "./App.css";
import Msg from "./components/Msg/Msg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Pets from "./components/Pets/Pets";
import React, { useState } from "react";
import InputNomeSobrenome from "./components/Header/InputNomeSobrenome";


function App() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dadosSubmetidos, setDadosSubmetidos] = useState(false);

  // Função que será passada para o componente InputNomeSobrenome
  const handleSubmit = (nomeInput, sobrenomeInput) => {
    setNome(nomeInput);
    setSobrenome(sobrenomeInput);
    setDadosSubmetidos(true); // Atualiza para exibir o header
  };

  return (
    <>
      <div>
        {/* Renderiza os inputs se os dados ainda não foram submetidos */}
        {!dadosSubmetidos && <InputNomeSobrenome onSubmit={handleSubmit} />}

        {/* Renderiza o header com nome e sobrenome após a submissão */}
        {dadosSubmetidos && <Header nome={nome} sobrenome={sobrenome} />}
      </div>

      <div className="container">
        <Msg cor="purple">Criado com React</Msg>
        <Pets />
      </div>

      <Footer />
    </>
  );
}

export default App;