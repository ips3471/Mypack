import React from 'react';
import { Proviers, auth } from '../service/firebase';
import styles from './login.module.css';

const Login = () => { 
    const onSocialLogin = (provider: any) => {
        console.log('click');
        return auth.signInWithPopup(provider)
        .then(console.log);
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
            <div className={styles.login_buttons}>
                <button onClick={() => onSocialLogin(Proviers.Google)} className="google">Google</button>
                <button onClick={() => onSocialLogin(Proviers.Github)} className="github">Github</button>
            </div>
        </article>
    </div>
    );
}
export default Login;