import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-login-researcher-company',
  styleUrl: './login-researcher-company.css',
  templateUrl: './login-researcher-company.html',
})
export class LoginResearcherCompany {}
