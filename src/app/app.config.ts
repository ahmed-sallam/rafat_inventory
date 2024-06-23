import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideFirebaseApp} from "@angular/fire/app";
import {app, db} from "./firebase";
import {provideFirestore} from "@angular/fire/firestore";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => app),
    provideFirestore(() => db)
  ]
};
