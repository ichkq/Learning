import { Injectable } from '@angular/core';
import { Ville } from '../Ville';

@Injectable({
  providedIn: 'root'
})

export class VilleService {
  villes: Ville[] = [
    { nom: 'Lyon', status: 'eteint' },
    { nom: 'London', status: 'eteint' },
  ];

  constructor() { }
}