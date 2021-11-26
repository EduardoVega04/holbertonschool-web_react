import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';

function Footer() {
    return (
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
    )
}

export default Footer;
