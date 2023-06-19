import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  @Output() marcarElementoEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.recuperarCestaDelLocalStorage();

   }
  private cesta: any[] = [];

  marcarElemento(dato: any): void {
    this.marcarElementoEvent.emit(dato);
  }

  aniadirProductoCesta(producto: any): void {
    this.cesta.push(producto);
    this.guardarCestaEnLocalStorage();

   }

  obtenercesta() {
    return this.cesta;
  }

  quitarElementoDeCesta(index: number) {
    this.cesta.splice(index, 1);
    this.guardarCestaEnLocalStorage();
  }

  private guardarCestaEnLocalStorage() {
    localStorage.setItem('cesta', JSON.stringify(this.cesta));
  }

  // Recuperar la cesta del localStorage
  private recuperarCestaDelLocalStorage() {
    const cestaGuardada = localStorage.getItem('cesta');
    if (cestaGuardada) {
      this.cesta = JSON.parse(cestaGuardada);
    } else {
      this.cesta = [];
    }
  }
}
