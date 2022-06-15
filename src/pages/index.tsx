import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Jose", 22, "3"),
    new Cliente("Joao", 44, "4"),
    new Cliente("Pedro", 12, "5"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
  }

  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">
            Novo Cliente
          </Botao>
        </div>
          <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
        <Formulario cliente={clientes[3]}></Formulario>
      </Layout>
    </div>
  );
}
