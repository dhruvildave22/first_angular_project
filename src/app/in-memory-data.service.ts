import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id:11, name: 'Mr. Nice'},
      {id:12, name: 'Mr. demo'},
      {id:13, name: 'Mr. dummy'},
      {id:14, name: 'Mr. dave'},
      {id:15, name: 'Mr. dalo'},
      {id:16, name: 'Mr. guin'},
      {id:17, name: 'Mr. Nike'},
      {id:18, name: 'Mr. gucci'},
      {id:19, name: 'Mr. tesla'},
      {id:20, name: 'Mr. bruce'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
