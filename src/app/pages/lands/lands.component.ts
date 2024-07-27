import { Component } from '@angular/core';
import { NavigationComponent } from '../../example/navigation/navigation.component';

@Component({
  selector: 'app-lands',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './lands.component.html',
  styleUrl: './lands.component.css'
})
export class LandsComponent {

}
