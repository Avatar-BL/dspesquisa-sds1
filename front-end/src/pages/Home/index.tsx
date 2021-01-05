import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as GameImage } from '../../assets/gamer.svg';
import { ReactComponent as Arrowicon } from '../../assets/arrow.svg';

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                Quais jogos a galera gosta mais?
            </h1>
            <h3 className="home-text-subtitle">
                Clique no botão e saiba quais são os jogos que os gamers estão escolhendo!
            </h3>
            <Link to="/records">
                <div className="home-actions">
                    <button className="home-btn">
                        QUERO SABER QUAIS SÃO
                    </button>
                    <div className="home-btn-icon">
                        <Arrowicon />
                    </div>
                </div>
            </Link>
        </div>
        <GameImage className="home-image" />
    </div>
);

export default Home;