import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import {loggingInterceptor} from "./shared/interceptors/http-angular.interceptor";

registerLocaleData(es);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),
    provideNzI18n(es_ES),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    provideHttpClient(withInterceptors([loggingInterceptor]))],
};
