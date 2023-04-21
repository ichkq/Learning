import { Injectable } from '@angular/core';
import { Ville } from '../Ville';

@Injectable({
  providedIn: 'root'
})

export class VilleService {
  villes: Ville[] = [
    { nom: 'Lyon', status: 'eteint' },
    { nom: 'London', status: 'eteint' },
    { nom: 'Paris', status: 'eteint' },
    { nom: 'Berlin', status: 'eteint' },
    { nom: 'Madrid', status: 'eteint' },
    { nom: 'Rome', status: 'eteint' },
  ];

  constructor() { }
}