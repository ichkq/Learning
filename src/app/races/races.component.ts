import { Component, OnInit } from '@angular/core';
import { Ville } from "../Ville";
import { VilleService } from '../services/ville.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})

export class RacesComponent implements OnInit {

  constructor(public villeService: VilleService) { }

  onSwitch(index: number) {
    const ville = this.villeService.villes[index];
    ville.status = ville.status === 'allume' ? 'eteint' : 'allume';
  }

  ngOnInit(): void {

  }

}