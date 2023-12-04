import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

// importar aqui o que é comum a toda aplicacao
// se estivesse construindo uma casa, aqui seriam importados agua e luz
// pq tem tem todos os comodos
// muito comum importar o header e o footer


const MODULES = [CommonModule]
const COMPONENTS: any[] = []

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [MODULES],
  exports: [COMPONENTS, MODULES],
  // providers sao servicos que vc vai usar, mesmo sem injetar direto na classe
  // como to adicionando no core.module toda a aplicavai ter esse servicos
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // tipo do interceptor
      useClass: HttpErrorInterceptor, // qual classe vai fazer a interceptacao
      multi: true // diz que pode ter mais de um interceptor
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
