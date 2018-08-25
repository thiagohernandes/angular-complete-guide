export class Funcoes {

  private inicializando: string;

  constructor(msg: string, inicializando: string) {
      console.log('constructor... ' + msg);
      this.inicializando = inicializando;
  }

    fcnInicializando(): void {
      console.log(this.inicializando);
    }

 }
