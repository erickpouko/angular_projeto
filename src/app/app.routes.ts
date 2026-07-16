import { Routes } from '@angular/router';
import { Pagina01 } from './pagina01/pagina01';
export const routes: Routes = [
    { path: '', redirectTo: 'pagina01', pathMatch: 'full' },
    { path: 'pagina01', component: Pagina01 },
];
