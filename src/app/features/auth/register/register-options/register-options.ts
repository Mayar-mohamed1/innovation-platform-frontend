import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-register-options',
  styleUrl: './register-options.css',
  templateUrl: './register-options.html',
})
export class RegisterOptions {
  selectedRole: 'researcher' | 'company' = 'researcher';

}
