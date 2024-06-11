import { Component } from '@angular/core';
import { faUserCircle, faExchangeAlt, faCog } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  faUserCircle = faUserCircle;
  faExchangeAlt = faExchangeAlt;
  faCog = faCog;

}
