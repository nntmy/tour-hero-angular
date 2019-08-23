import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero-manager/service/hero.service';
import { Hero } from '../hero-manager/hero/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));/*tra gia tri mang hero  tai vi tri  1,5*/
  }

}
