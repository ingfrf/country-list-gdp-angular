import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryListComponent} from './components/country-list/country-list.component';
import {CountryDetailComponent} from './components/country-detail/country-detail.component';


const routes: Routes = [
  {path: 'home', component: CountryListComponent},
  {path: 'detail', component: CountryDetailComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
