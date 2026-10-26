import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-admin-matches-details',
  styleUrl: './admin-matches-details.css',
  templateUrl: './admin-matches-details.html',
})
export class AdminMatchesDetails {}
