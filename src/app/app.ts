import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('klijentske-veb-aplikacije-2027');
  ime = "Bojan";
  prezime = "Kojic";
  indeks = '2021200834';
}

//Korena komponenta se on prvi ucitava
//template je taj i style je taj
