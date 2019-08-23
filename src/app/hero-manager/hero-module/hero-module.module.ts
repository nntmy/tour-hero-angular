import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroModuleRoutingModule } from './hero-module-routing.module';
import { FormsModule } from '@angular/forms'; // su dung cho  <input [(ngModel)]

//component
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HeroModuleRoutingModule
  ],
  exports: [
    HeroSearchComponent //export de module cha co the goi va su dung <app-hero-search> 
],
})
export class HeroModuleModule { }
