import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  // ici le point ! car pas initialisée
  @Input() label!: string;
  @Input() route!: string;
  @Input() styleBtn!: string;

  // déclenchée une seule fois
  constructor() {
    console.log(this.label); ////undefined
  }

  // déclenchée une seule fois
  ngOnInit(): void {
    console.log(this.label); ////????
  }

  // déclenchée plusieurs fois
  ngOnChanges() {
    // là on peut recevoir les données venant du parent quand appel HTTP
  }
}
