import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {MainPageComponent} from './main-page/main-page.component';
import {SearchPageComponent} from './search-page/search-page.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: '', component: MainPageComponent},
      {path: 'search', component: SearchPageComponent},
    ]},
  // {path: 'space', component: SpaceLayoutComponent, children: [
  //     {path: 'tasks', component: TasksDashPageComponent},
  //     {path: 'lessons', component: LessonsArchivePageComponent},
  //   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
