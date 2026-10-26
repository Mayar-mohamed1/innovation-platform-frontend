import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink,RouterLinkActive],
  selector: 'app-admin-matches',
  styleUrl: './admin-matches.css',
  templateUrl: './admin-matches.html',
})
export class AdminMatches {}
