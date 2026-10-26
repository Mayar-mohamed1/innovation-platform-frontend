import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FEATURED_CHALLENGES, FEATURED_INNOVATIONS, ItemCard } from './home.data';
@Component({
  imports: [CommonModule, RouterLink, TranslatePipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  innovations: ItemCard[] = FEATURED_INNOVATIONS;
  challenges: ItemCard[] = FEATURED_CHALLENGES;
}
