import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeComprasService {

  private listaDeCompras: Item[] = []

  constructor() {
    this.listaDeCompras = JSON.parse(localStorage.getItem('itens') || '[]')
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompras(){
    return this.listaDeCompras;
  }

  criarItem(nomeDoItem: string) {
    const id = this.listaDeCompras.length + 1
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }

    return item
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompras.push(item)
    //this.atualizarLocalStorage()
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem?: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem || itemAntigo.nome,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }

    const id = itemAntigo.id
    this.listaDeCompras.splice(Number(id) - 1, 1, itemEditado)
    //this.atualizarLocalStorage()

  }

  marcarItemComprado(item: Item) {
    this.editarItemDaLista(item)
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompras))
  }

}
