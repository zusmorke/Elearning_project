import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
  };

  apiUrl = 'https://localhost:7092/api/User/register'; 

  constructor(private http: HttpClient, private router: Router) {} // Inject Router

  onSubmit() {
    this.http.post(this.apiUrl, this.user).subscribe({
      next: (response: any) => {
        alert(response.message);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if (err.status === 409) {
          alert('Tên người dùng đã tồn tại.');
        } else {
          alert('Đã xảy ra lỗi. Vui lòng thử lại.');
        }
      },
    });
  }
}