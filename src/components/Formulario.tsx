import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? <Entrada somenteLeitura texto="Codigo" valor={id} /> : false}
      <Entrada
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-5"
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
        className="mb-5"
      />
      <div className="flex justify-end mt-7">
        <Botao cor="blue" className="mr-2">
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao cor="blue">Cancelar</Botao>
      </div>
    </div>
  );
}