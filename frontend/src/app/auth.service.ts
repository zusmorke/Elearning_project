import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7092/api/User'; // URL backend của bạn

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    // Gửi yêu cầu logout tới API backend
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      next: () => {

        // Chuyển hướng người dùng về trang login
        this.router.navigate(['/login']);
        
      },
      error: (err) => {
        console.error('Logout failed', err);
      },
    });
  }
}
