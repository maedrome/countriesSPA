import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'countries',
        children: [
            {
                path: 'by-capital',
                title: 'By Capital',
                loadComponent: () => import('./countries/pages/by-capital-page/by-capital-page.component')
            },
            {
                path: 'by-region',
                title: 'By Region',
                loadComponent: () => import('./countries/pages/by-region-page/by-region-page.component')
            },
            {
                path: 'by-country',
                title: 'By Country',
                loadComponent: () => import('./countries/pages/by-country-page/by-country-page.component')
            },
            {
                path: 'by/:id',
                title: 'Country',
                loadComponent: () => import('./countries/pages/country-page/country-page.component')
            }
        ]
        
    },
    {
        path: '',
        redirectTo: '/countries/by-capital',
        pathMatch: 'full'
    }

];
