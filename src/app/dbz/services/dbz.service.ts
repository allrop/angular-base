import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [
    {id: uuid(), name: 'Krilin', power: 500},
    {id: uuid(), name: 'Goku', power: 50000},
    {id: uuid(), name: 'Vegeta', power: 5000},
  ];

  addNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }}
