import * as React from 'react';

import * as styles from './index.scss';
import PopnPlayScreen from '../components/PopnPlayScreen';

const IndexPage = () => <div className={styles['index-page']}>
    <PopnPlayScreen/>
    <div className={styles['sample']}>
        <img src={require('../images/b.png')}/>
        <img src={require('../images/e.png')}/>
    </div>
</div>;

export default IndexPage;
