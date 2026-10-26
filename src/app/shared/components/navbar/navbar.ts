import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language/language.service';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  imports: [CommonModule, RouterLink,TranslatePipe],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);


  private router = inject(Router);

 
  userRole: string = 'visitor';

 
  onRoleChange(event: any) {
    const selectedRole = event.target.value;
    this.userRole = selectedRole;
    console.log('Current Development Role:', selectedRole);

   
    switch (selectedRole) {
      case 'visitor':
        this.router.navigate(['/']);
        break;
      case 'researcher':
        this.router.navigate(['/researcher']);
        break;
      case 'company':
        this.router.navigate(['/company']);
        break;
      case 'viewer':
        this.router.navigate(['/judge']); 
        break;
      case 'admin':
        this.router.navigate(['/admin']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }


}
