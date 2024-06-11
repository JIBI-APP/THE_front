import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill,faTrashAlt, faEdit  } from '@fortawesome/free-solid-svg-icons';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { AgentComponent } from './components/agent/agent/agent.component';
import { ClientComponent } from './components/client/client/client.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { OcrTestComponent } from './components/ocr-test/ocr-test.component';
import { AddAgentComponent } from './components/admin/add-agent/add-agent.component';
import { AgentListComponent } from './components/admin/agent-list/agent-list.component';
import { AgencyListComponent } from './components/admin/agency-list/agency-list.component';
import { AddAgencyComponent } from './components/admin/add-agency/add-agency.component';
import { AddClientComponent } from './components/agent/add-client/add-client.component';
import { ChangepasswordComponent } from './components/agent/changepassword/changepassword.component';
import { ClientListComponent } from './components/agent/client-list/client-list.component';
import { HistoryComponent } from './components/client/components/history/history.component';
import { SoldeComponent } from './components/client/components/solde/solde.component';
import { BillSelectionComponent } from './payment/bill-selection/bill-selection.component';
// import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { PieChartComponent } from './components/admin/Charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/admin/Charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/admin/Charts/line-chart/line-chart.component';
import { HeatmapComponent } from './components/admin/Charts/heatmap/heatmap.component';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';
import{ConfirmepayeComponent} from './payment/confirmepaye/confirmepaye.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    AdminComponent,
    LoginComponent,
    AgentComponent,
    ClientComponent,
    DashboardComponent,
    OcrTestComponent,
    AddAgentComponent,
    AgentListComponent,
    AgencyListComponent,
    AddAgencyComponent,
    AddClientComponent,
    ChangepasswordComponent,
    ClientListComponent,
    HistoryComponent,
    SoldeComponent,
    BillSelectionComponent,
    // ChangePasswordComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    HeatmapComponent,
    PaymentFormComponent,
    ConfirmepayeComponent,
    ConfirmepayeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faExchangeAlt, faUserCircle,  faCog, faMoneyBill, faTrashAlt, faEdit);
  }
}
