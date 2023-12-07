import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor/http-error.interceptor';
import { PublicKeyInterceptor } from './interceptors/public-key-interceptor/public-key.interceptor';
import { TokenInterceptor } from './interceptors/token-interceptor/token-interceptor.interceptor';

// importar aqui o que é comum a toda aplicacao
// se estivesse construindo uma casa, aqui seriam importados agua e luz
// pq tem tem todos os comodos
// muito comum importar o header e o footer


const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  AuthModule
]

const COMPONENTS: any[] = [

]

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [COMPONENTS, MODULES],
  // providers sao servicos que vc vai usar, mesmo sem injetar direto na classe
  // como to adicionando no core.module toda a aplicavai ter esse servicos
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // tipo do interceptor
      useClass: HttpErrorInterceptor, // qual classe vai fazer a interceptacao
      multi: true // diz que pode ter mais de um interceptor
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PublicKeyInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  // para ser importando apenas no AppModule
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule has already  been loaded. Import this module int the AppModule.")
    }
  }
}
