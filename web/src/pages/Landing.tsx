import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/global.css';
import '../styles/pages/landing.css';

import logoImg from '../assets/images/Logo.svg';

const Landing: React.FC = () => {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Logo" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Macatuba</strong>
                    <span>São Paulo</span>
                </div>

                <a href="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0 0.6)" />
                </a>
            </div>
        </div>
    );
};

export default Landing;
