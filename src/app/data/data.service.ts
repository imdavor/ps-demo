import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // metoda za post forme
  // pass userSettings:
  // type of userSetting
  // želimo da vrati observable type od userSettings
  // koristimo of funkciju koja je iz rxjs-a i passamo userSettings(our data)
  postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings> {
    return of(userSettings);
  }
}
