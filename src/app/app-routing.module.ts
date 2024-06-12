import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { AgentComponent } from './components/agent/agent/agent.component';
import { ClientComponent } from './components/client/client/client.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { OcrTestComponent } from './components/ocr-test/ocr-test.component';
import { ChangepasswordComponent } from './components/agent/changepassword/changepassword.component';
import { AddClientComponent } from './components/agent/add-client/add-client.component';
import { ClientListComponent } from './components/agent/client-list/client-list.component';
import { AddAgentComponent } from './components/admin/add-agent/add-agent.component';
import { AgentListComponent } from './components/admin/agent-list/agent-list.component';
import { BillSelectionComponent } from './payment/bill-selection/bill-selection.component';
import { AgencyListComponent } from './components/admin/agency-list/agency-list.component';
import { AddAgencyComponent } from './components/admin/add-agency/add-agency.component';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';
import { ConfirmepayeComponent } from './payment/confirmepaye/confirmepaye.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent},
  {path:'admin/dashboard',component:DashboardComponent},
  { path: 'ocr-test', component: OcrTestComponent },
  { path: 'agent', component: AgentComponent },
  { path: 'client', component: ClientComponent},
  { path: 'change-password', component: ChangepasswordComponent },
  { path: 'add-client', component: AddClientComponent },
  {path: 'add-agency', component: AddAgencyComponent},
  { path: 'clients', component: ClientListComponent },
  { path: 'add-agent', component: AddAgentComponent },
  {path : 'payment', component: BillSelectionComponent},
  // {path:'payment-form', component:PaymentFormComponent},
  { path: 'agents', component: AgentListComponent },
  {path:'confirmepaye',component:ConfirmepayeComponent},
  { path: 'payment-form/:creditorId/:serviceId', component: PaymentFormComponent },
  { path: 'agencies', component: AgencyListComponent}
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
