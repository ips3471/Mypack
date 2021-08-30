import firebase from 'firebase';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../..';
import { Proviers } from '../../service/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './login.module.css';
import google from '../../common/google.png';
import github from '../../common/github.png';
import { faCampground, faShareAlt } from '@fortawesome/free-solid-svg-icons';

interface LoginProps {
    setUserId: any;
}
    
const Login = ({setUserId}: LoginProps) => { 
    const authService = useContext(AuthContext);
    const history = useHistory();
    useEffect(() => {
        function onUserChanged(user: any) {
            if(user) {
                history.push('/main');
                setUserId(user.uid)
                console.log(`onUserChanged state updated: ${user.uid}`)
            } else {
                history.push('/');
                console.log(`onUserChanged state detached`)
            }
        }
        authService.onAuthChange(onUserChanged);
        return function cleanup() {
            authService.onAuthChange(onUserChanged);
        }
    }, [setUserId, authService, history])
    

    const onLoginClick = async (provider: firebase.auth.AuthProvider) => {
        await authService.login(provider);
        console.log(`onLoginClick => Auth-provider called for login`);
    }

    return (
    <div className={styles.login}>
        <div className={styles.welcome}>
            <div className={styles.welcome__container}>
                <h1 className={styles.welcome_title}>Mypack 로그인에 오신 것을 환영합니다 🎉</h1>
                <div className={styles.body__container}>
                    <div className={styles.body_logo}>
                        <FontAwesomeIcon className={styles.img} icon={faCampground} />
                    </div>
                    <p className={styles.body_description}>
                        <span className={styles.body_accent}>캠핑 또는 백패킹 장비를 등록하고</span><br />
                        가장 효율적인 방법으로 아웃도어 활동을 즐겨보세요
                    </p>
                </div>
                <div className={styles.body__container}>
                    <div className={styles.body_logo}>
                        <FontAwesomeIcon className={styles.img} icon={faShareAlt} />
                    </div>
                    <p className={styles.body_description}>
                        <span className={styles.body_accent}>즐겨찾는 장비를 보관함에 저장하고</span><br />
                        본인의 장비 리스트를 다른 사람에게 공유해보세요
                    </p>
                </div>
            </div>

        </div>
        <div className={styles.signin}>
            <div className={styles.signin__container}>
            <h2 className={styles.signin_title}>본인의 소셜 계정으로 로그인하세요</h2>
                <div className={styles.login_btns}>
                    <button 
                    onClick={() => onLoginClick(Proviers.Google)} 
                    className={styles.login_btn}>
                        <img className={styles.login_btn_img} alt="googie" src={google}/>
                        Google 로그인
                    </button>
                    <button 
                    onClick={() => onLoginClick(Proviers.Github)} 
                    className={styles.login_btn}>
                        <img className={styles.login_btn_img} alt="github" src={github}/>
                        Github 로그인
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Login;