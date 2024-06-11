import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  characterList: Character[] = [{id: uuid(), name: 'Trunk', power:400}];

  @Output()
  emitCharacterId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: string) {
    this.emitCharacterId.emit(index);
  }
}
