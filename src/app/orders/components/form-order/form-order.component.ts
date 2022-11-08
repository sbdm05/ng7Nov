import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() init!: Order;

  public form!: FormGroup;

  // transformer enum en tableau
  public states = Object.values(StateOrder);

  constructor(private fb: FormBuilder) {
    //console.log(this.init.nbJours);// undefined
  }

  ngOnInit(): void {
    console.log(this.init);
    // créer un objet avec les valeurs de init
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  // déclenchée quand on valide le formulaire
  onSubmit(){
    console.log(this.form.value); // afiche l'objet complet
  }
}
