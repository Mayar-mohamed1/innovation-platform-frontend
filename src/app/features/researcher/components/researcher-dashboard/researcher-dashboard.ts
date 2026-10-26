import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink,RouterLinkActive],
  selector: 'app-researcher-dashboard',
  styleUrl: './researcher-dashboard.css',
  templateUrl: './researcher-dashboard.html',
})
export class ResearcherDashboard {}
