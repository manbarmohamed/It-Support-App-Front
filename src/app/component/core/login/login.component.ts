import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserAuthServiceService } from '../../../service/user-auth-service.service';
import { Router } from '@angular/router';
import { Role } from '../../../enums/role';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: UserAuthServiceService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        const user = this.authService.currentUserValue;
        console.log(typeof user?.role);
        
        if (user) {
          switch (user.role?.toString()) {
            case Role[Role.ADMIN]:
              this.router.navigate(['/admin']);
              break;
            case Role[Role.TECH]:
              this.router.navigate(['/tech-dashboard']);
              break;
            case Role[Role.USER]:
              this.router.navigate(['/user-dashboard']);
              break;
              default:
                this.router.navigate(['/user-dashboard']);
                break;
          }
        }
      },
      error: err => console.error('Login failed', err)
    });
  }

}
