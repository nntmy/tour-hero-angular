import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//component
import { HeroesComponent } from "../heroes/heroes.component";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

const routes: Routes = [
  { path: "detail/:id/:name", component: HeroDetailComponent },
  { path: "heroes", component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroModuleRoutingModule {}
