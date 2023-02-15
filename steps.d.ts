/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type create UserPage = typeof import('./pages/Create User.js');
type home_page = typeof import('./pages/home_page.js');
type login_page = typeof import('./pages/login.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, create UserPage: create UserPage, home_page: home_page, login_page: login_page }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
