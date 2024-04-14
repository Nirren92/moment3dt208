import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MainmenuComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'moment3dt208';
}
