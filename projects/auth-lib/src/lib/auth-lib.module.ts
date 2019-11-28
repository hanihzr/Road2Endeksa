import { NgModule } from '@angular/core';
import { RootEffects } from './ngrx/effects/root';
import { RootReducers } from './ngrx/store/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    StoreModule.forRoot({ ...RootReducers }),
    EffectsModule.forRoot(RootEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ]
})
export class AuthLibModule {}
