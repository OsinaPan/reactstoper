import styles from './TimeConverter.module.scss';

const formatTime = (time) => {
    const date = new Date(time) 
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
    return <div className={styles.time}>{`${hours}:${minutes}:${seconds}.${milliseconds}`}</div>;
}

export default formatTime;