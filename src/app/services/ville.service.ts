import { Injectable } from '@angular/core';
import { Ville } from '../models/Ville';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VilleService {
  villeSubject = new Subject<Ville[]>();

  private villes: Ville[] = [
    { nom: 'Lyon', status: 'eteint', specialite: 'gastronomie' },
    { nom: 'London', status: 'eteint', specialite: 'culture' },
    { nom: 'Paris', status: 'eteint', specialite: 'culture' },
    { nom: 'Berlin', status: 'eteint', specialite: 'histoire' },
    { nom: 'Madrid', status: 'eteint', specialite: 'art' },
    { nom: 'Rome', status: 'eteint', specialite: 'histoire' },
  ];

  emitVilleSubject() {
    this.villeSubject.next(this.villes.slice());
  }

  constructor() { }
}