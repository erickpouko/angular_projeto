import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pagina01 } from './pagina01/pagina01';






@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Pagina01],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_projeto');
}
