import { Component, OnInit } from '@angular/core';
import { VilleService } from '../services/ville.service';
import { Observable } from 'rxjs/Observable';
import { Ville } from '../models/Ville';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})

export class RacesComponent implements OnInit {
  villes: Ville[];

  constructor(public villeService: VilleService) { }

  onSwitch(index: number) {
    const ville = this.villes[index];
    ville.status = ville.status === 'allume' ? 'eteint' : 'allume';
  }

  ngOnInit(): void {
    this.villeService.villeSubject.subscribe(
      (villes: Ville[]) => { this.villes = villes }
    );
    this.villeService.emitVilleSubject();
  }
}