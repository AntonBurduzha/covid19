import * as React from 'react';

import moment from 'moment';

const Header: React.FunctionComponent = () => {
    return (
        <div className="header-wrapper">
            <span className="header-text header-title">COVID-19 Status</span>
            <span className="header-text">{moment().format('DD MMMM YYYY')}</span>
        </div>
    );
};

export { Header };
