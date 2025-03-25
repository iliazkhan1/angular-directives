import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHighlightDirective } from './app-highlight.directive';
import { AppShowIfPermissionDirective } from './app-show-if-permission.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AppHighlightDirective,AppShowIfPermissionDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '1';
  hasPermission: boolean = true; 




  togglePermission() {
    this.hasPermission = !this.hasPermission;
    console.log('Permission toggled:', this.hasPermission);
  }
}
