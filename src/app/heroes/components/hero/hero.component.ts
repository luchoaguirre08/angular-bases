import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Iron Man';
  public age: number = 45;
  public showButtonName: boolean = true;
  public showButtonAge: boolean = true;
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.showButtonName = false;
  }
  changeAge(): void {
    this.age = 25;
    this.showButtonAge = false;
  }
  resetForm(): void {
    this.name = 'Iron Man';
    this.age = 45;
    this.showButtonAge = true;
    this.showButtonName = true;
  }
}
