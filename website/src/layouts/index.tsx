import * as React from 'react';
import Helmet from 'react-helmet';

import './index.scss';

interface LayoutProps {
    children: () => React.ReactNode;
}
const Layout: React.SFC<LayoutProps> = ({ children }) => <div>
    <Helmet>
        <title>mimi chan moe</title>
    </Helmet>
    { children() }
</div>;

export default Layout;
