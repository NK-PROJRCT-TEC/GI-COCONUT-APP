import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { WaitingApproveComponent } from './pages/waiting-approve/waiting-approve.component';
import { PagesEditPeopleComponent } from './pages/pages-edit-people/pages-edit-people.component';
import { PagesUserProfilePeopleComponent } from './pages/pages-user-profile-people/pages-user-profile-people.component';
import { PagesLandInformationComponent } from './pages/pages-land-information/pages-land-information.component';
import { PagesWaitingApproveLanduseComponent } from './pages/pages-waiting-approve-landuse/pages-waiting-approve-landuse.component';
import { PagesLanduseDetailComponent } from './pages/pages-landuse-detail/pages-landuse-detail.component';
import { PagesEditLanduseDetailComponent } from './pages/pages-edit-landuse-detail/pages-edit-landuse-detail.component';
import { PagesCertificateComponent } from './pages/pages-certificate/pages-certificate.component';
import { PagesWaitingApproveLanduseDetailComponent } from './pages/pages-waiting-approve-landuse-detail/pages-waiting-approve-landuse-detail.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'waiting-approve', component: WaitingApproveComponent },
  { path: 'pages-edit-people', component: PagesEditPeopleComponent },
  { path: 'pages-user-profile-people', component: PagesUserProfilePeopleComponent },
  { path: 'pages-land-information', component: PagesLandInformationComponent },
  { path: 'pages-waiting-landuse', component: PagesWaitingApproveLanduseComponent },
  { path: 'pages-waiting-approve-landuse', component: PagesWaitingApproveLanduseComponent },
  { path: 'pages-landuse-detail', component: PagesLanduseDetailComponent },
  { path: 'pages-edit-landuse-detail', component: PagesEditLanduseDetailComponent },
  { path: 'pages-certificate', component: PagesCertificateComponent },
  { path: 'pages-waiting-approve-landuse-detail', component: PagesWaitingApproveLanduseDetailComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
