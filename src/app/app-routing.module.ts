import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AgentComponent } from './components/agent/agent/agent.component';
import { ClientComponent } from './components/client/client/client.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent},
  { path: 'agent', component: AgentComponent },
  { path: 'client', component: ClientComponent},
  // { path: 'profil', component: ProfilComponent },
  // { path: 'depot', component: DepotComponent },
  // { path: 'payer-factures', component: PayerFacturesComponent },
  // { path: 'agence', component: AgenceComponent },
  // { path: 'agent', component: AgentComponent },
  // { path: 'clients', component: ClientsComponent },
  // { path: 'demande', component: DemandeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
