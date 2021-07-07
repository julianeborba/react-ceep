export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(funcao) {
    //Para atualizar os dados cria os metodos inscrever e notificar
    this._inscritos.push(funcao);
  }

  notificar() {
    this._inscritos.forEach((funcao) => {
      funcao(this.categorias);
    });
  }
  desinscrever(funcao){
    this._inscritos = this._inscritos.filter(f => f !== funcao);
  }
  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar();
  }
}
