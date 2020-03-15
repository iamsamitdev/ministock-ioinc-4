import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-home/tab-home.module').then(m => m.TabHomePageModule)
          }
        ]
      },
      {
        path: 'tab-report',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-report/tab-report.module').then(m => m.TabReportPageModule)
          }
        ]
      },
      {
        path: 'tab-notification',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-notification/tab-notification.module').then(m => m.TabNotificationPageModule)
          }
        ]
      },
      {
        path: 'tab-account',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-account/tab-account.module').then(m => m.TabAccountPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
