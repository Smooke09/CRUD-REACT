import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from './useTabelaOuForm';

export default function useClientes(){

    //firebase
  const repo: ClienteRepositorio = new ColecaoCliente();

 //Importando hooks de outra pasta
const { tabelaVisivel, exibirFormulario, exibirTabela, } = useTabelaOuForm()

  //Estados
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
 

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela()
    });
  }
  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario()
  }
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio());
    exibirFormulario()
  }

  return { 
    tabelaVisivel,
    exibirTabela,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    cliente,
    clientes
  }

}