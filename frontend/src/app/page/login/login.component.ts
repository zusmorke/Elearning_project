import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
import { FormsModule } from '@angular/forms'; // Import FormsModule for [(ngModel)]

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  apiUrl = 'https://localhost:7092/api/User/login'; // URL API for login

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post(this.apiUrl, this.user).subscribe({
      next: (response) => {
        alert('Login successful');
        this.router.navigate(['/dashboard']); // Redirect to dashboard
      },
      error: (err) => {
        if (err.status === 401) {
          alert('Invalid username or password.');
        } else {
          alert('An error occurred. Please try again.');
        }
      },
    });
  }
}