export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    this.notificar();
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }

inscrever(funcao) {
    //Para atualizar os dados cria os metodos inscrever e notificar
    this._inscritos.push(funcao);
  }

  notificar() {
    this._inscritos.forEach(funcao => {
      funcao(this.notas);
    });
  }

  desinscrever(funcao){
    this._inscritos = this._inscritos.filter(f => f !== funcao);
  }

}
class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria; 
  }
}
