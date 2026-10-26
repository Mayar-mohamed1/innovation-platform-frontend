import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  selector: 'app-form-config',
  styleUrl: './form-config.css',
  templateUrl: './form-config.html',
})
export class FormConfig {}
