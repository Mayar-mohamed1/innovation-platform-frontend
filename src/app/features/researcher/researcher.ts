import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  selector: 'app-researcher',
  styleUrl: './researcher.css',
  templateUrl: './researcher.html',
})
export class Researcher {}
