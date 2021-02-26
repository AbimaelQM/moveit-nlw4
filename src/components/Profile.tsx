import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/AbimaelQM.png" alt="Diego imagem"/>
            <div>
                <strong>Abimael de Queiroz</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>
            </div>
        </div>
    )
}