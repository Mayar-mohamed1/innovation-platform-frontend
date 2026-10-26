import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-login-admin',
  styleUrl: './login-admin.css',
  templateUrl: './login-admin.html',
})
export class LoginAdmin {}
