import FirebaseApp from './firebase';

class AuthService {
  login(provider) {
    const authProvider = new FirebaseApp.auth[`${provider}AuthProvider`]();
    return FirebaseApp.auth()
    .signInWithPopup(authProvider);
  }
}

export default AuthService;
