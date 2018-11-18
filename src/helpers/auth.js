export function checkAuthToken(to, from, next) {
  if (!window.localStorage.getItem('auth_token')) {
    next({name: 'login'})
  } else {
    next()
  }
}