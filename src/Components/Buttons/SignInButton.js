import styles from './SignInButton.module.css';

export const SignInButton = ({text})=>{
    return(
        <>
            <button type='submit' className={styles.btn}>{text}</button>
        </>
    )
}