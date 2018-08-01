import * as React from 'react';
import classNames from 'classnames';

import * as styles from './index.scss';

class PopnPlayScreen extends React.Component {
    render() {
        return <div className={styles.popnPlayScreen}>
            <div className={styles.center}>
                <div className={styles.titleBar}>
                    <div className={styles.titleText}>chilblain</div>
                </div>
                <div className={styles.lanes}>
                    <div className={classNames(styles.lane, styles.white)}/>
                    <div className={classNames(styles.lane, styles.yellow)}/>
                    <div className={classNames(styles.lane, styles.green)}/>
                    <div className={classNames(styles.lane, styles.blue)}/>
                    <div className={classNames(styles.lane, styles.red)}/>
                    <div className={classNames(styles.lane, styles.blue)}/>
                    <div className={classNames(styles.lane, styles.green)}/>
                    <div className={classNames(styles.lane, styles.yellow)}/>
                    <div className={classNames(styles.lane, styles.white)}/>
                </div>
            </div>
        </div>;
    }
}

export default PopnPlayScreen;
