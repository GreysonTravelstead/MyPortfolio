import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="hero">
                <h1 className="hero-text">
                    Hello, I am 
                    <span>
                        <TypeWriterEffect
                            textStyle={{
                                
                                
                                fontWeight: 500,
                                fontSize: '1.2em',
                                }   
                            }
                            startDelay={0}
                            cursorColor="#3F3D56"
                            multiText={[
                                'Greyson Travelstead.',
                                'a developer.',
                                'a student.',
                                'Greyson Travelstead.'
                                ]
                            }
                            loop={false}
                            nextTextDelay={1500}
                            typeSpeed={30}
                    />
                    </span>
                </h1>
                <p className="paragraph">
                    I build creative, responsive, and interactive mobile friendly websites and applications with a strong focus on user experience. 
                </p>
                <div className="icons">
                    <Link to={{pathname:"https://www.linkedin.com/in/greyson-seth-travelstead-a2b8b8125/"}} className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link>
                    <Link to={{pathname:"https://github.com/GreysonTravelstead"}} className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;