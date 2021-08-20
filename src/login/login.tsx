import firebase from 'firebase';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '..';
import { Proviers } from '../service/firebase';
import styles from './login.module.css';

const Login = () => { 
    const authService = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        authService.onAuthChange((user: any) => {
            if(!user) {
                history.push('/');
            }
        })
    })
    const goToMain = (uid: string | undefined) => {
        history.push({
            pathname: '/main',
            state: {id: uid},
        });
    }

    const onLoginClick = async (provider: firebase.auth.AuthProvider) => {
        const data = await authService.login(provider);
        return goToMain(data.user.uid);
    }

    return (
    <div className={styles.login}>
        <article className={styles.login_welcome}>
            <h1 className={styles.title}>Welcome to Mypack Account</h1>
            <p className={styles.body}>
                <span className={styles.body_accent}>Manage your camping or backpacking items</span><br />
                and make the best choice for outdoor activities.</p>
        </article>
        <article className={styles.login_signin}>
            <h2>Sign in to Mypack</h2>
            <div className={styles.login_btns}>
                <button onClick={() => onLoginClick(Proviers.Google)} className={styles.login_btn}>Google</button>
                <button onClick={() => onLoginClick(Proviers.Github)} className={styles.login_btn}>Github</button>
            </div>
        </article>
    </div>
    );
}
export default Login;