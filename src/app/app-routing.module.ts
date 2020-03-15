import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab-home', loadChildren: './tab-home/tab-home.module#TabHomePageModule' },
  { path: 'tab-report', loadChildren: './tab-report/tab-report.module#TabReportPageModule' },
  { path: 'tab-notification', loadChildren: './tab-notification/tab-notification.module#TabNotificationPageModule' },
  { path: 'tab-account', loadChildren: './tab-account/tab-account.module#TabAccountPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'add-product', loadChildren: './add-product/add-product.module#AddProductPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
