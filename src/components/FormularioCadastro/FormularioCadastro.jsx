import React, { Component } from "react";
import "./FormularioCadastro.css";

export default class FormularioCadastro extends Component {
  constructor(props) {
    /*é utilizado para salvar as variáveis criadas nos metodos dos iputs como handlerMudancaTitulo, daí ele salvao titulo. 
    Props: Valores para a configuração de um componente, essas props são passadas pelo elemento acima (que utiliza o componente que irá receber
      ) e são imutáveis, utilizado para a comunicação de componentes.*/
    super(props);
    this.titulo = "";
    this.texto = "";
    this.state = {categorias:[]};
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);

  }
  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    //handler padrao de nome apra avisar que é algo que esta acontecendo no momento. Passa por paramentro o evento a acao
    console.log(evento.target.value); //e o target value é o valor mostrado a cada acao
    evento.stopPropagation();

    this.titulo =
      evento.target.value; /*Apesar de estar dentro de um método de uma classe, na hora que chamo no on change e passei para esse evento o método 
    que quero chamar, quem está chamando esse método é esse evento de on change, não a própria instância. 
    Quando é um evento externo chamando um método de uma instância, o this não é passado para esse método, então não consegue achar. #undefined
    
    O BIND surge associando a instancia do this = do proprio titulo*/
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault(); //A ação padrao do submit é recarregar a pagina e nao queremos isso
    evento.stopPropagation(); //Evitar a propagação desse evento na árvore do html, no dom = parar a propagação
    this.props.criarNota(this.titulo, this.texto, this.categoria); //A propriedade criarNota vai receber esse titulo e esse texto
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select
          className="form-cadastro_input"
          onChange={this._handleMudancaCategoria.bind(this)}
        >
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}
