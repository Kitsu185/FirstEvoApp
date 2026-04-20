import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'item/:id',
    component: ItemComponent,
    children: [
      { path: 'details', component: DetailsComponent },
      { path: 'list', component: ListComponent }
    ]
  },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];