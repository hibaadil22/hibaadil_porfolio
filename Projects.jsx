import React from 'react';
import '../styles/stylproj.css';

const Projects = () => {
    return (
        <section id="projets" className="projects text-center p-5">
            <div className="row">
                  <h3 >Mes projects</h3>
            </div><br/>
            <div className="row">

                <div className="col-md-4">
                    <div className="card mb-4 transition-card">
                        <img src="immg/n1.png" className="card-img-top rounded" alt="Projet 1" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 transition-card">
                        <img src="immg/n2.png" className="card-img-top rounded" alt="Projet 2" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 transition-card">
                        <img src="immg/n3.png" className="card-img-top rounded" alt="Projet 3" />
                    </div>
                </div>
               
                
               
            </div>
        </section>
    );
};

export default Projects;
