import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ville } from '../models/Ville';
import { VilleService } from '../services/ville.service';

@Component({
  selector: 'app-singlerace',
  templateUrl: './singlerace.component.html',
  styleUrls: ['./singlerace.component.css']
})
export class SingleraceComponent implements OnInit {
  id: number;
  ville: Ville;

  constructor(private route: ActivatedRoute, public villeService: VilleService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.villeService.villeSubject.subscribe((
      (villes: Ville[]) => { this.ville = villes[this.id] }
    ));
    this.villeService.emitVilleSubject();
  }
}