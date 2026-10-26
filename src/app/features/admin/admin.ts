import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {}
