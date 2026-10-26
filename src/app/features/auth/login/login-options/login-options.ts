import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink,RouterLinkActive,CommonModule],
  selector: 'app-login-options',
  styleUrl: './login-options.css',
  templateUrl: './login-options.html',
})
export class LoginOptions {}
