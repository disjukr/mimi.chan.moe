import * as React from 'react';
import Helmet from 'react-helmet';

import './Layout.scss';

const Layout: React.SFC = ({ children }) => <>
    <Helmet>
        <title>mimi chan moe</title>
    </Helmet>
    { children }
</>;

export default Layout;
