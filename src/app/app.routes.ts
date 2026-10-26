import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Admin } from './features/admin/admin';
import { Researcher } from './features/researcher/researcher';
import { Company } from './features/company/company';
import { Judge } from './features/judge/judge';
import { Challenges } from './features/challenges/challenges';
import { Innovations } from './features/innovations/innovations';
import { ResearcherDashboard } from './features/researcher/components/researcher-dashboard/researcher-dashboard';
import { InnovationSubmit } from './features/researcher/components/innovation-submit/innovation-submit';
import { MyInnovationDetails } from './features/researcher/components/my-innovation-details/my-innovation-details';
import { AdminOverview } from './features/admin/components/admin-overview/admin-overview';
import { AdminSubmissions } from './features/admin/components/admin-submissions/admin-submissions';
import { AdminUsers } from './features/admin/components/admin-users/admin-users';
import { CreateJudge } from './features/admin/components/create-judge/create-judge';
import { AdminMatches } from './features/admin/components/admin-matches/admin-matches';
import { FormConfig } from './features/admin/components/form-config/form-config';
import { InnovationFormConfig } from './features/admin/components/form-config/components/innovation-form-config/innovation-form-config';
import { ChallengeFormConfig } from './features/admin/components/form-config/components/challenge-form-config/challenge-form-config';
import { AdminMatchesDetails } from './features/admin/components/admin-matches-details/admin-matches-details';

import { RegisterOptions } from './features/auth/register/register-options/register-options';
import { LoginOptions } from './features/auth/login/login-options/login-options';
import { LoginAdmin } from './features/auth/login/login-admin/login-admin';
import { LoginJudge } from './features/auth/login/login-judge/login-judge';
import { LoginResearcherCompany } from './features/auth/login/login-researcher-company/login-researcher-company';

export const routes: Routes = [


  { path: 'login-options', component: LoginOptions },
  { path: 'login-admin', component: LoginAdmin },
  { path: 'login-judge', component: LoginJudge },
  { path: 'login-researcher-company', component: LoginResearcherCompany },



  { path: 'register-options', component: RegisterOptions },
  




  { path: '', component: Home },
  { path: 'home', component: Home },
  {
    path: 'admin', component: Admin,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: AdminOverview },
      { path: 'submissions', component: AdminSubmissions },
      { path: 'users', component: AdminUsers },
      { path: 'create-judge', component: CreateJudge },
      {
        path: 'form-configuration', component: FormConfig,
        children: [
          { path: '', redirectTo: 'innovation-form', pathMatch: 'full' },
          { path: 'innovation-form', component: InnovationFormConfig},
          { path: 'challenge-form', component: ChallengeFormConfig },
         
        ]
      },
      { path: 'potential-matches', component: AdminMatches },
      { path: 'potential-matches-details', component: AdminMatchesDetails }

    ]
  },
  {
    path: 'researcher', component: Researcher,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ResearcherDashboard },
      { path: 'submit-innovation', component: InnovationSubmit },
      { path: 'innovation-details', component: MyInnovationDetails }
    ]
  },
  { path: 'company', component: Company },
  { path: 'judge', component: Judge },
  { path: 'challenges', component: Challenges },
  { path: 'innovations', component: Innovations },

];
