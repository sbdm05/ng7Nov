import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  @Input() public init!: Client;
  @Output() submitted = new EventEmitter<Client>();

  public states = Object.values(StateClient);

  // nom donné à notre formulaire
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
    console.log(this.init, 'objet client');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      state: [this.init.state],
      tva: [this.init.tva],
      id: [this.init.id],
      name: [this.init.name],
      totalCaHt: [this.init.totalCaHt],
      comment: [this.init.comment],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value); 
  }
}
