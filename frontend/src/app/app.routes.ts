import { Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SettingComponent } from './page/setting/setting.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        loadComponent: () => import('./page/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'course',
        loadComponent: () => import('./page/course/course.component').then(m => m.CourseComponent)
    },
    {
        path: 'assignment',
        loadComponent: () => import('./page/assignment/assignment.component').then(m => m.AssignmentComponent)
    },
    {
        path: 'mentor',
        loadComponent: () => import('./page/mentor/mentor.component').then(m => m.MentorComponent)
    }, {
        path: 'event',
        loadComponent: () => import('./page/event/event.component').then(m => m.EventComponent)
    }, 
    {
        path: 'library',
        loadComponent: () => import('./page/library/library.component').then(m => m.LibraryComponent)
    }, 
    {
        path: 'login',
        loadComponent: () => import('./page/login/login.component').then(m => m.LoginComponent)
    }, 
    {
        path: 'register',
        loadComponent: () => import('./page/register/register.component').then(m => m.RegisterComponent)
    }, 
    {
        path: 'messages',
        loadComponent: () => import('./page/messages/messages.component').then(m => m.MessagesComponent)
    }, 
    {
        path: 'reset',
        loadComponent: () => import('./page/reset/reset.component').then(m => m.ResetComponent)
    },
    {
        path: 'student',
        loadComponent: () => import('./page/student/student.component').then(m => m.StudentComponent)
    },

    {
        path: 'analytics',
        loadComponent: () => import('./page/analytics/analytics.component').then(m => m.AnalyticsComponent)
    },
    {
        path: 'create-course',
        loadComponent: () => import('./page/create-course/create-course.component').then(m => m.CreateCourseComponent)
    },
    {
        path: 'course-detail',
        loadComponent: () => import('./page/course-detail/course-detail.component').then(m => m.CourseDetailComponent)
    },
    {
        path: 'create-quiz',
        loadComponent: () => import('./page/create-quiz/create-quiz.component').then(m => m.CreateQuizComponent)
    },
    {
        path: 'publish-course',
        loadComponent: () => import('./page/publish-course/publish-course.component').then(m => m.PublishCourseComponent)
    },
    {
        path: 'setting',
        loadComponent: () => import('./page/setting/setting.component').then(m => m.SettingComponent)
    },
];
