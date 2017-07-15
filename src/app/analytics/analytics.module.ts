import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpModule,
  Http
} from '@angular/http';
import {
  Metric,
  AnalyticsImplementation
} from './analytics.interface';

import { AnalyticsService } from '../services/analytics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'API_URL',  useValue: 'http://devserver.com' },
    {
      provide: AnalyticsService,
      deps: [ Http, 'API_URL' ],
      useFactory(http: Http, apiUrl: string) {
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('La metrica es: ', metric);
            console.log('Enviado a: ', apiUrl);

            // Usaremos el http

          }
        }
        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  declarations: []
})
export class AnalyticsModule { }
