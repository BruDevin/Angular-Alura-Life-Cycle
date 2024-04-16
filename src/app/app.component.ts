import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeComprasService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listadeCompras!: Array<Item>
  itemParaSerEditado!: Item


  constructor(private listaService: ListaDeComprasService) { }

  ngOnInit() {
    this.listadeCompras = this.listaService.getListaDeCompras()
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item
  }

  marcarItem(item: Item) {
    this.itemParaSerEditado = item
    this.itemParaSerEditado.comprado = !this.itemParaSerEditado.comprado
    this.listaService.marcarItemComprado(this.itemParaSerEditado)
  }

  deletarItem(id: number) {
    const index = this.listadeCompras.findIndex((item) => item.id === id)
    this.listadeCompras.splice(index, 1)
  }

  limparLista() {
    this.listadeCompras.splice(0, this.listadeCompras.length)
  }

  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage()
  }

}
