import { Injectable } from '@angular/core';
import { Ville } from '../models/Ville';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VilleService {
  villeSubject = new Subject<Ville[]>();
  private villes: Ville[] = [
    { nom: 'Lyon', status: 'eteint' },
    { nom: 'London', status: 'eteint' },
    { nom: 'Paris', status: 'eteint' },
    { nom: 'Berlin', status: 'eteint' },
    { nom: 'Madrid', status: 'eteint' },
    { nom: 'Rome', status: 'eteint' },
  ];

  emitVilleSubject() {
    this.villeSubject.next(this.villes.slice());
  }

  constructor() { }
}