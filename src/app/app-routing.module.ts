import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';
import { OperacionesComponent } from './paginas/operaciones/operaciones.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
const routes:Routes=[
{path:'principal',component:PrincipalComponent},
{path:'operaciones',component:OperacionesComponent},
{path:'contactenos',component:ContactenosComponent},
{path:'',redirectTo:'/principal',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
