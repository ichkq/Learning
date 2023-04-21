import { Component, OnInit } from '@angular/core';
import { Ville } from "../../assets/Ville";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})

export class RacesComponent implements OnInit {

  villes: Ville[] = [];

  constructor() { }

  ngOnInit(): void {
    this.villes = [
      { nom: 'Lyon' },
      { nom: 'London' }
    ];
  }

}