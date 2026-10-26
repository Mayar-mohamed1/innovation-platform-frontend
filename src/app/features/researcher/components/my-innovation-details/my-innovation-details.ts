import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-my-innovation-details',
  styleUrl: './my-innovation-details.css',
  templateUrl: './my-innovation-details.html',
})
export class MyInnovationDetails {}
