import React, { Component } from "react"; //Comando IMRC
import "./CardNota.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

export class CardNota extends Component {
  //comando cc

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  
  render() {
    return (
      <section className = "card-nota">
        <header className= "card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
          <h4 className="card-nota_categoria">{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}


//          <DeleteSVG onClick={this.props.apagarNota}/> funcao que recebe algo como propriedade
