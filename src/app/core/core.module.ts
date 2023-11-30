import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

// importar aqui o que é comum a toda aplicacao
// se estivesse construindo uma casa, aqui seriam importados agua e luz
// pq tem tem todos os comodos
// muito comum importar o header e o footer


const MODULES = [CommonModule]
const COMPONENTS = [ToolbarComponent]

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [MODULES],
  exports: [COMPONENTS, MODULES]
})
export class CoreModule {
  // para ser importando apenas no AppModule
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule has already  been loaded. Import this module int the AppModule.")
    }
  }
}
