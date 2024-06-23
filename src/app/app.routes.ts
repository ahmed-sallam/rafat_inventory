import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),

    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('./dashboard/products/products.component').then(
            (m) => m.ProductsComponent
          ),
      },
      {
        path: 'products/create',
        loadComponent: () =>
          import(
            './dashboard/products/create-product/create-product.component'
          ).then((m) => m.CreateProductComponent),
      },
      {
        path:'products/:id',
        loadComponent: () => import('./dashboard/products/one-product/one-product.component').then(m => m.OneProductComponent)
      },
      {
        path:'categories',
        loadComponent: () => import('./dashboard/categories/categories.component').then(m => m.CategoriesComponent)
      },
      {
        path:'categories/create',
        loadComponent: () => import('./dashboard/categories/create-category/create-category.component').then(m => m.CreateCategoryComponent)
      },
      {
        path:'categories/:id',
        loadComponent: () => import('./dashboard/categories/one-category/one-category.component').then(m => m.OneCategoryComponent)
      }
    ],
  },
];
