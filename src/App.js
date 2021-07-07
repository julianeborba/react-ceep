import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeCategorias from "./components/ListaDeCategorias";
import ArrayDeNotas from "./assets/dados/Notas";
import Categorias from "./assets/dados/Categorias";

// Essas {} em lista de notas é pq é export class se fosse export default class ListaDeNotas nao precisava
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias(); //Instanciando depois que criou as classes dentro da pasta dados
    this.notas = new ArrayDeNotas();
  } 
  /* ANTES DE CRIAR CLASSE
    this.state = {
      notas:[],
      categorias:[]
    } Propriedade especial do react que chama o render e atualizar a lista, porém por ser especial nao da pra chamar diretamente, aí coloca o setState abaixo
    State: Serve para guardar valores/estado que podem vir a mudar com a interação do usuário com o componente, tendo efeito na renderização do mesmo, 
    o state pode ser passado como props!
    
  }
    
    adicionarCategoria(nomeCategoria){
        const novaCategoria = nomeCategoria;
        const novoArrayCategorias = [...this.state.categorias, novaCategoria];
        const novaExibicao = {
          categorias: novoArrayCategorias
        }
        this.setState(novaExibicao);
    
      }
      adicionarCategoria(nomeCategoria){
        const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
        const novoEstado = {...this.state, categorias:novoArrayCategorias};
        this.setState(novoEstado);
      }
  criarNota(titulo, texto, categoria) {
    const novaNota = {titulo,texto,categoria}; //constante nova variavel Nota = ao objeto 
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }

    this.notas.push(novaNota); coloca no Array a nova nota, mas nao precisa mais pela criacao do novoArrayNotas e novoEstado 
    this.setState(novoEstado) /*No setState passa um objeto por padrão pois conseguimos adicionar coisas facilmente assim temos (um novo estado) que são as notas.
       Aí o this.notas é o array do push
  }

  deletarNota(index){
    let arrayNotas = this.state.notas; //Só renomeou uma variavel
    arrayNotas.splice(index,1); //Funçao que deleta e pede posicao e quantidade
    this.setState({notas: arrayNotas}); //Exibiu como ficou, mesma coisa do novoEstado a cima
  }
*/
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />  
        <main className="counteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

/*Tudo que referenciava esse estado foi mudado pra atributos da classe
adicionarCategoria={this.adicionarCategoria.bind(this)}
categorias={this.state.categorias}*/

/* <FormularioCadastro criarNota={this.criarNota}/> Isso se tornou uma propriedade do formulario cadastro e temos que colocá-lo no construtor */

export default App; /*Pode deixar assim ou igual as paginas dos outros componentes export class App e sem essa linha, 
isso afeta o import com as {}. O ideal é deixar pradonizado, deixei os dois modelos para estudo. */
