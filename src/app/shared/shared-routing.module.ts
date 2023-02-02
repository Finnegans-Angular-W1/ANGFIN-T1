import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [{
  path:'sidebar',
  component:SidebarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }