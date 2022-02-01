import React from 'react';

import styles from './CompOne.module.css';

function CompOne(props) {
    return (
        <div className={styles['text-color']}>
            Component One
        </div>
    );
}

export default CompOne;