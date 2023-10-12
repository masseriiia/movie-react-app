import React from 'react';
import Style from './Header.module.scss'

const Index = () => {
    return (
        <section className={Style.header}>
            <div className={Style.headerLeft}>
                <a className={Style.logo} href="#">MovieApp</a>
            </div>
            <div className={Style.headerRight}></div>
        </section>
    );
};

export default Index;