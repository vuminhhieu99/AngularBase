import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/base/_guads/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },  
  {
    path: 'login',
    component: LoginComponent
   
  }, 
  { 
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'my-request',
    loadChildren: () => import('./components/my-request/my-request.module').then(m => m.MyRequestModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'request',
    loadChildren: () => import('./components/request/request.module').then(m => m.RequestModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'role-group',
    loadChildren: () => import('./components/role-group/role-group.module').then(m => m.RoleGroupModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'roles',
    loadChildren: () => import('./components/roles/roles.module').then(m => m.RolesModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'student',
    loadChildren: () => import('./components/student/student.module').then(m => m.StudentModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'teacher',
    loadChildren: () => import('./components/teacher/teacher.module').then(m => m.TeacherModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'role-group',
    loadChildren: () => import('./components/role-group/role-group.module').then(m => m.RoleGroupModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'topic-request',
    loadChildren: () => import('./components/topic-request/topic-request.module').then(m => m.TopicRequestModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'user-group',
    loadChildren: () => import('./components/user-group/user-group.module').then(m => m.UserGroupModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'users',
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard] 
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
