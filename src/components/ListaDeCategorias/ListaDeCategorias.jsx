import React, { Component } from "react";
import "./ListaDeCategorias.css";

export default class ListaDeCategorias extends Component {

  constructor(){ 
    super();
    this.state = {categorias:[]};
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount() {
    //Nao usa o construtor pq nao aceita funcoes com efeito colateral. Construtor pede state as outras tudo setState
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);

  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleEventoInputTeclado(evento) {
    //A tag onKeyUp é utilizada para fazer uma acao, a dessa funcao, quando pressionar enter no teclado
    if (evento.key === "Enter") {
      console.log(evento.key);
      let valorCategoria = evento.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          onKeyUp={this._handleEventoInputTeclado.bind(this)}
        />
      </section>
    );
  }
}

/*Regra react; cada elemento só pode retornar um elemento filho, por isso criamos a section, mas podia ser uma tag vazia <> </>, 
como isso vai ser estilizado se criou a sectioon*/
