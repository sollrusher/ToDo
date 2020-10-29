import React from 'react';

function Footer(){
    return(
    <div className="todofooter">
                <div className="count">0 items left</div>
                <div className="footerFilters">
                    <a href="#d" className="filter selected">Все</a>
                    <a href="#a" className="filter">Активные</a>
                    <a href="#s" className="filter">Выполненные</a>
                </div>
                <div className="clear">Очистить выполненные</div>
    </div>
    )
}

export default Footer;