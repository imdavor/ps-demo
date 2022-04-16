import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgControlStatusGroup, NgForm, NgModel } from '@angular/forms';
import { empty } from 'rxjs';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originaluserSettings: UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...',
  };
  userSettings: UserSettings = { ...this.originaluserSettings };

  constructor() {}

  ngOnInit(): void {}

  onBlur(field: NgModel) {
    console.log('in onBlur', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit', form.valid);
  }
}
