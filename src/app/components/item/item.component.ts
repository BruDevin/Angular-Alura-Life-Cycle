import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item!: Item

  @Output() emitindoItemParaEditar = new EventEmitter()
  @Output() emitindoItemComprado = new EventEmitter()
  @Output() emitindoIdParaDeletar = new EventEmitter()

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item)
  }

  marcarItemComoComprado() {
    this.emitindoItemComprado.emit(this.item)
  }

  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id)
  }

}
