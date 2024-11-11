import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor'];
  public deletedHero?: string;
  showMessaje :boolean=false;
  removeLastHero() {
    this.deletedHero = this.heroNames.pop();
    this.showMessaje = true;
    if (this.deletedHero == undefined) {
      this.showMessaje = false;
    }
    return this.deletedHero;
  }
}
