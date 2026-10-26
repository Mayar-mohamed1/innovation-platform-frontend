import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-login-judge',
  styleUrl: './login-judge.css',
  templateUrl: './login-judge.html',
})
export class LoginJudge {}
