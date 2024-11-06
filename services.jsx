import React from 'react';
import '../styles/services.css'; 

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Développement Web',
            description: 'Création de sites web Création de sites web dynamiques et responsives en utilisant des langages comme HTML, CSS, JavaScript, ainsi que des frameworks comme Bootstrap, React ou Vue.js. et réactifs.',
            icon: 'bi bi-code-slash', 
        },
        {
            id: 2,
            title: 'Applications Mobiles',
            description: ' Conception et gestion de la logique serveur et de la base de données. Utilisation de langages comme PHP, Python',
            icon: 'bi bi-phone', 
        },
        {
            id: 3,
            title: 'Gestion de Bases de Données',
            description: 'Gestion des mises à jour, des bugs et des performances des sites ou applications existants..',
            icon: 'bi bi-database', 
        },
    ];

    return (
        <section className="services" id='services'>
           <div className="row">
                  <h3 >Mes services</h3>
            </div><br/>
            <div className="services-container">
                {services.map(service => (
                    <div className="service-card" key={service.id}>
                        <i className={service.icon} style={{ fontSize: '50px', color: 'rgb(219, 16, 152)' }}></i>
                        <h3  style={{ color: ' linear-gradient(120deg, #cc1bae, #0eabc7)' }}>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
