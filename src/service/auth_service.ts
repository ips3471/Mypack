import firebase from 'firebase/app';
import { auth } from './firebase';
import 'firebase/auth';


interface IAuthService {
    login(provider: firebase.auth.AuthProvider): any;
    logout(): void;
    onAuthChange(onUserChanged: any): void;
}

class AuthService implements IAuthService {
    login(provider: firebase.auth.AuthProvider) {
        console.log(`Auth-service got provider: ${provider}`);
        return auth.signInWithPopup(provider);
    }
    logout() {
        console.log('sign out');
        auth.signOut();
    }
    onAuthChange(onUserChanged: any) {
        auth.onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }
}

export default AuthService;
