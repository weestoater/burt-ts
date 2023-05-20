import React from 'react';

export const Header = () => {
    return (
        <header>
            <div className='logo'><a href="/">logo</a></div>
            <div className="site-name">burtware.com</div>
            <nav className="site-nav">
                <ul>
                    <li><a href="/a11y">A11y</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/agile">Agile</a></li>
                    <li><a href="/biking">Biking</a></li>
                    <li><a href="/football">Football</a></li>
                    <li><a href="/react">React</a></li>
                </ul>
            </nav> 

        </header>
    );
};