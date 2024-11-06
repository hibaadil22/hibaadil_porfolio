import React from 'react';
import '../styles/stylcontact.css';

const Contact = () => {
    return (
        <div>
            <section id="contact" className="contact-section">
                <div className="container srcc">
                    <div className="row">
                  
                        <div className="col-4 div1">
                       
                            <br /><br /><br />
                           
                            <ul className="list-unstyled d-flex flex-column gap-2">
                            <h2>Suivez-moi</h2>
                                <li>
                               
                                    <a href="mailto:hibaadil119@mail.com" className="text-decoration-none">
                                        <i className="bi bi-envelope"></i><strong>hibaadil119</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+2120710518330" className="text-decoration-none">
                                        <i className="bi bi-telephone"></i><strong>07 10 51 83 30</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                        <i className="bi bi-linkedin"></i> <strong>hibaadil9</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                        <i className="bi bi-twitter"></i> <strong>hibaadil9</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                        <i className="bi bi-instagram"></i> <strong>hibaadil9</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 div2">
                            <h2>Contactez-moi</h2>
                            <form className="row g-3 align-items-center mt-3 animated-form">
                                <div className="col-12">
                                    <label htmlFor="nom" className="visually-hidden">Nom</label>
                                    <input type="text" className="form-control" id="nom" placeholder="Nom" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="prenom" className="visually-hidden">Prénom</label>
                                    <input type="text" className="form-control" id="prenom" placeholder="Prénom" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="visually-hidden">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="telephone" className="visually-hidden">Téléphone</label>
                                    <input type="tel" className="form-control" id="telephone" placeholder="Téléphone" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="message" className="visually-hidden">Message</label>
                                    <textarea className="form-control" id="message" placeholder="Votre message" rows="4"></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" style={{ backgroundColor: 'rgb(219, 16, 152)' }} className='btn '>Soumettre</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
