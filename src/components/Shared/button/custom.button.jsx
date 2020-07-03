import React from 'react';
import classnames from 'classnames';

import './custom.button.scss';

export const CustomButton = ({ title, type, className, onClick, disabled, children }) => {

    return (
        <button title={title} type={type} className={classnames('custom-btn', className)} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};