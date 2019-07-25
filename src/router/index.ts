import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);
import Router from 'vue-router';
const Home = () => import('../core/home/home.vue');
const Error = () => import('../core/error/error.vue');
const Register = () => import('../account/register/register.vue');
const Activate = () => import('../account/activate/activate.vue');
const ResetPasswordInit = () => import('../account/reset-password/init/reset-password-init.vue');
const ResetPasswordFinish = () => import('../account/reset-password/finish/reset-password-finish.vue');
const ChangePassword = () => import('../account/change-password/change-password.vue');
const Settings = () => import('../account/settings/settings.vue');
const JhiUserManagementComponent = () => import('../admin/user-management/user-management.vue');
const JhiUserManagementViewComponent = () => import('../admin/user-management/user-management-view.vue');
const JhiUserManagementEditComponent = () => import('../admin/user-management/user-management-edit.vue');
const JhiConfigurationComponent = () => import('../admin/configuration/configuration.vue');
const JhiDocsComponent = () => import('../admin/docs/docs.vue');
const JhiHealthComponent = () => import('../admin/health/health.vue');
const JhiLogsComponent = () => import('../admin/logs/logs.vue');
const JhiAuditsComponent = () => import('../admin/audits/audits.vue');
const JhiMetricsComponent = () => import('../admin/metrics/metrics.vue');
/* tslint:disable */
// prettier-ignore
const TopRecord = () => import('../entities/top-record/top-record.vue');
// prettier-ignore
const TopRecordUpdate = () => import('../entities/top-record/top-record-update.vue');
// prettier-ignore
const TopRecordDetails = () => import('../entities/top-record/top-record-details.vue');
// prettier-ignore
const RowRecord = () => import('../entities/row-record/row-record.vue');
// prettier-ignore
const RowRecordUpdate = () => import('../entities/row-record/row-record-update.vue');
// prettier-ignore
const RowRecordDetails = () => import('../entities/row-record/row-record-details.vue');
// prettier-ignore
const RowRecordExtra = () => import('../entities/row-record-extra/row-record-extra.vue');
// prettier-ignore
const RowRecordExtraUpdate = () => import('../entities/row-record-extra/row-record-extra-update.vue');
// prettier-ignore
const RowRecordExtraDetails = () => import('../entities/row-record-extra/row-record-extra-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

Vue.use(Router);

// prettier-ignore
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/activate',
      name: 'Activate',
      component: Activate
    },
    {
      path: '/reset/request',
      name: 'ResetPasswordInit',
      component: ResetPasswordInit
    },
    {
      path: '/reset/finish',
      name: 'ResetPasswordFinish',
      component: ResetPasswordFinish
    },
    {
      path: '/account/password',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/account/settings',
      name: 'Settings',
      component: Settings,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/admin/user-management',
      name: 'JhiUser',
      component: JhiUserManagementComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/new',
      name: 'JhiUserCreate',
      component: JhiUserManagementEditComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/:userId/edit',
      name: 'JhiUserEdit',
      component: JhiUserManagementEditComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/:userId/view',
      name: 'JhiUserView',
      component: JhiUserManagementViewComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/docs',
      name: 'JhiDocsComponent',
      component: JhiDocsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/audits',
      name: 'JhiAuditsComponent',
      component: JhiAuditsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-health',
      name: 'JhiHealthComponent',
      component: JhiHealthComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/logs',
      name: 'JhiLogsComponent',
      component: JhiLogsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-metrics',
      name: 'JhiMetricsComponent',
      component: JhiMetricsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-configuration',
      name: 'JhiConfigurationComponent',
      component: JhiConfigurationComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    }
    ,
    {
      path: '/entity/top-record',
      name: 'TopRecord',
      component: TopRecord,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/top-record/new',
      name: 'TopRecordCreate',
      component: TopRecordUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/top-record/:topRecordId/edit',
      name: 'TopRecordEdit',
      component: TopRecordUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/top-record/:topRecordId/view',
      name: 'TopRecordView',
      component: TopRecordDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/row-record',
      name: 'RowRecord',
      component: RowRecord,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/row-record/new',
      name: 'RowRecordCreate',
      component: RowRecordUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/row-record/:rowRecordId/edit',
      name: 'RowRecordEdit',
      component: RowRecordUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/row-record/:rowRecordId/view',
      name: 'RowRecordView',
      component: RowRecordDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/row-record-extra',
      name: 'RowRecordExtra',
      component: RowRecordExtra,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/row-record-extra/new',
      name: 'RowRecordExtraCreate',
      component: RowRecordExtraUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/row-record-extra/:rowRecordExtraId/edit',
      name: 'RowRecordExtraEdit',
      component: RowRecordExtraUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/row-record-extra/:rowRecordExtraId/view',
      name: 'RowRecordExtraView',
      component: RowRecordExtraDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ]
});
