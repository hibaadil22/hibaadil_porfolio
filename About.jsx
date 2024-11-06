import React, { useState, useEffect } from 'react';
import '../styles/styleabout.css';

const About = () => {
  const [loopNum, setLoopNum] = useState(0);     
  const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ["Dévellepeuse Full Stack", "Dévellepeuse Front-End", "Dévellepeuse Front-Back"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className='v' id='about'>
      <div className="row">
        <div className="col-8">
          <h4><span>B</span>ienvenue <span>S</span>ur <span> M</span>on<span> P</span>ortfolio</h4>
          <h1>Hiba ADIL <span>{text}</span></h1>
          <p>
          Pendant le développement, je ressens un mélange d'excitation et de défis constants. Chaque 
          projet est une opportunité d'apprendre, de surmonter des obstacles techniques et de pousser mes 
          limites. Parfois, il y a des moments de frustration quand une solution semble hors de portée, mais la satisfaction de résoudre un problème ou de voir un code fonctionner comme prévu est inégalable. J’aime la créativité que le développement apporte, en construisant quelque chose de concret à partir d’idées abstraites, et c’est ce sentiment d'accomplissement qui me motive
           à continuer d'explorer et d’améliorer mes compétences.
          </p>
       
        </div>
        <div className="col-4">
          <img src='immg/fadaee.jpg' alt="Hiba ADIL" style={{width:"200px"}} />
         
        </div>
      </div>
      <div className="row rowbtn">
        <div className='col-4 f'>
        <button onClick={() => console.log('connect')} className='btn '><a href='#'>Télecharger moon CV</a></button>
        </div>
        <div className='col-4 f'>
        <button onClick={() => console.log('connect')} className='btn btninfo'><a href='#contact'>Connectez-moi</a></button>
        </div>
        <div className='col-4'>
        </div>

      
      </div>
    </section>
  );
};

export default About;
