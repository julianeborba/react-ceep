//arquivo criado com finalizacao .jsx pois é informado que é um componente do react
import React, { Component } from "react";
import { CardNota } from "../CardNota/CardNota";
import "./ListaDeNotas.css";

export default class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = {notas:[]};
    this._novasNotas = this._novasNotas.bind(this);
  } 

  /*Por padrão o JS já cria o construtor só com o super, nao precisa coloca se só tiver uma propriedade se passa o props no construtor */

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas);

  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }


  render() {
    // Quando ta trabalhando com class componentes o react vai tentar renderizar a classe, aí precisa do render pra ele interpretar o codigo abaixo e colocar dentro de app
    return (
      //retorno de multiplas linhas coloca dentro de parenteses
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          //Chamando a propriedade notas. para exibir o que tiver e nao definir 3 como no exemplo abaixo
          /*        {Array.of("", "", "").map((cataegoria, index) => { 
          Array off cria a lista com os componentes. Map percorre a lista e faz alguma acao devolvendo uma lista
          O foreach tb itera sobre um array, mas n devolve uma lista
          Categoria é a variavel passada na funcao */
          return (
            <li className="lista-notas_item" key={index}>
              {console.log(index)}
              <CardNota
              indice = {index}
              apagarNota={this.props.apagarNota} 
              titulo={nota.titulo} 
              texto={nota.texto}
              categoria={nota.categoria}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

/*Para inserir js dentro de react só inserir {} dentro do render, contudo há algumas limitacoes, nao da pra colocar um codigo dentro, tipo for
          mas pode colocar um array com as funcoes de array e uma funcao

          O react quer que cada atributo que ele renderiza seja unico por isso ele pede uma key para ele saber quais elementos tiveram modificacao
          e quais ele precisa redesenhar
          Index é só o nome da variavel, mas o key cria internamente 0,1,2

          
          */
