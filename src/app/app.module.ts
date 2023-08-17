import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { WaitingApproveComponent } from './pages/waiting-approve/waiting-approve.component';
import { SearchStudentComponent } from './pages/search-student/search-student.component';
import { InsertDetailStudentComponent } from './pages/insert-detail-student/insert-detail-student.component';


import { FormsModule } from '@angular/forms';
import { PagesChartComponent } from './pages/pages-chart/pages-chart.component';
//import google map
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
// QRCODE
import { QRCodeModule } from 'angularx-qrcode';
//import images
import { ImageCropperModule } from 'ngx-image-cropper';
import { PagesRegisComponent } from './pages/pages-regis/pages-regis.component';
import { PendingStatusComponent } from './pages/pending-status/pending-status.component';
import { PagesLoginEmployeeComponent } from './pages/pages-login-employee/pages-login-employee.component';
import { DashboardEmployeeComponent } from './pages/dashboard-employee/dashboard-employee.component';
import { PagesEditPeopleComponent } from './pages/pages-edit-people/pages-edit-people.component';
import { PagesUserProfilePeopleComponent } from './pages/pages-user-profile-people/pages-user-profile-people.component';
import { PagesLandInformationComponent } from './pages/pages-land-information/pages-land-information.component';
import { PagesRouteLoginComponent } from './pages/pages-route-login/pages-route-login.component';
import { PagesRegisEmployeeComponent } from './pages/pages-regis-employee/pages-regis-employee.component';
import { PagesWaitingApproveLanduseComponent } from './pages/pages-waiting-approve-landuse/pages-waiting-approve-landuse.component';
import { PendingLanduseStatusComponent } from './pages/pending-landuse-status/pending-landuse-status.component';
import { PagesLanduseDetailComponent } from './pages/pages-landuse-detail/pages-landuse-detail.component';
import { PagesEditLanduseDetailComponent } from './pages/pages-edit-landuse-detail/pages-edit-landuse-detail.component';
import { PagesCertificateComponent } from './pages/pages-certificate/pages-certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    WaitingApproveComponent,
    SearchStudentComponent,
    InsertDetailStudentComponent,
    PagesChartComponent,
    PagesRegisComponent,
    PendingStatusComponent,
    PagesLoginEmployeeComponent,
    DashboardEmployeeComponent,
    PagesEditPeopleComponent,
    PagesUserProfilePeopleComponent,
    PagesLandInformationComponent,
    PagesRouteLoginComponent,
    PagesRegisEmployeeComponent,
    PagesWaitingApproveLanduseComponent,
    PendingLanduseStatusComponent,
    PagesLanduseDetailComponent,
    PagesEditLanduseDetailComponent,
    PagesCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    ImageCropperModule,
    QRCodeModule
    // AgmCoreModule.forRoot({
    //   // please get your own API key here:
    //   // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    //   apiKey: 'AIzaSyCcsidGB5pgrsS6Xujp0GaFl5k_gAbfYsM'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
