import * as React from 'react';

import * as styles from './index.scss';
import Layout from '../components/Layout';
import PopnPlayScreen from '../components/PopnPlayScreen';

const IndexPage = () => <Layout>
    <div className={styles.indexPage}>
        <PopnPlayScreen/>
        <div className={styles.sample}>
            <img src={require('../images/b.png')}/>
            <img src={require('../images/e.png')}/>
        </div>
    </div>
</Layout>;

export default IndexPage;
