import Particles from "react-tsparticles";
import React from 'react';
import './App.scss';
// import NavBar from './Components/NavBar';
import HomePage from "./Pages/HomePage";
import {Switch, Route} from 'react-router-dom';
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import profile from './images/profile.png';

function App() {
  
  const [navbarOpen, setNavbarOpen] = useState(false)

  const navClick = () =>{
    setNavbarOpen(prev => !prev)
  }

  return (
    <div className="App">
      
      <div className= "container">
        <div className={`sidebar ${navbarOpen ? 'nav-toggle': ''}`}>
          <div className="NavBar"> 
            <nav className="nav">
                <div className="profile">
                    <img src={profile} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item" >
                        <NavLink to="/" exact activeClassName="active" onClick={navClick}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active" onClick={navClick}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active" onClick={navClick}>
                            Projects
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active" onClick={navClick}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="nav_contact">
                    <p className="nav_email">gst0001@mix.wvu.edu</p>
                    <p className="nav_phone">(304) 657-0995</p>
                </div>
            </nav>
          </div>
        </div>
     
      
        <div className="main-content">
        <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
        </div>
          <div className="content" >
            <Switch>

              <Route path="/" exact>
                <HomePage />
              </Route>

              <Route path="/about" exact>
                <AboutPage />
              </Route>

              <Route path="/projects" exact>
                <ProjectPage />
              </Route>

             

              <Route path="/contact" exact>
                <ContactPage />
              </Route>
              
            </Switch>
          </div>
        </div>
      </div>






      
      <Particles
        id="tsparticles"
        options={{
          "autoPlay": true,
          "background": {
            "color": {
              "value": "#130f40"
            },
            "image": "linear-gradient(315deg, #130f40 0%, #000000 74%)",
            "position": "",
            "repeat": "",
            "size": "",
            "opacity": 1
          },
          "backgroundMode": {
            "enable": true,
            "zIndex": -1
          },
          "detectRetina": true,
          "fpsLimit": 30,
          "interactivity": {
            "detectsOn": "window",
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "attract": {
                "distance": 200,
                "duration": 0.4,
                "speed": 1
              },
              "connect": {
                "distance": 80,
                "links": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 100,
                "links": {
                  "blink": false,
                  "consent": false,
                  "opacity": 1
                }
              },
              "light": {
                "area": {
                  "gradient": {
                    "start": {
                      "value": "#ffffff"
                    },
                    "stop": {
                      "value": "#000000"
                    }
                  },
                  "radius": 1000
                },
                "shadow": {
                  "color": {
                    "value": "#000000"
                  },
                  "length": 2000
                }
              },
              "push": {
                "quantity": 1
              },
              "trail": {
                "delay": 0.005,
                "quantity": 1,
                "particles": {
                  "color": {
                    "value": "#ff0000",
                    "animation": {
                      "enable": true,
                      "speed": 400,
                      "sync": true
                    }
                  },
                  "move": {
                    "outMode": "destroy",
                    "speed": 5,
                    "angle": {},
                    "attract": {
                      "rotate": {}
                    },
                    "gravity": {},
                    "noise": {
                      "delay": {
                        "random": {}
                      }
                    },
                    "outModes": {},
                    "trail": {}
                  },
                  "size": {
                    "value": 5,
                    "animation": {
                      "enable": true,
                      "speed": 5,
                      "minimumValue": 1,
                      "sync": true,
                      "startValue": "min",
                      "destroy": "max"
                    },
                    "random": {}
                  },
                  "shape": {},
                  "stroke": {
                    "color": {
                      "value": "",
                      "animation": {
                        "enable": false,
                        "speed": 0,
                        "sync": false
                      }
                    }
                  }
                }
              }
            }
          },
          "manualParticles": [],
          "motion": {
            "disable": false,
            "reduce": {
              "factor": 4,
              "value": true
            }
          },
          "particles": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "collisions": {
              "bounce": {
                "horizontal": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                },
                "vertical": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                }
              },
              "enable": true,
              "mode": "bounce"
            },
            "color": {
              "value": "#ff0000",
              "animation": {
                "enable": true,
                "speed": 50,
                "sync": false
              }
            },
            "links": {
              "blink": false,
              "color": {
                "value": "random"
              },
              "consent": false,
              "distance": 100,
              "enable": true,
              "frequency": 1,
              "opacity": 1,
              "shadow": {
                "blur": 5,
                "color": {
                  "value": "#00ff00"
                },
                "enable": false
              },
              "triangles": {
                "enable": false,
                "frequency": 1
              },
              "width": 1.5,
              "warp": false
            },
            "move": {
              "angle": {
                "offset": 45,
                "value": 90
              },
              "direction": "none",
              "distance": 0,
              "enable": true,
              "gravity": {
                "acceleration": 0.1,
                "enable": true,
                "maxSpeed": 0.3
              },
              "noise": {
                "delay": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0
                },
                "enable": false
              },
              "outModes": {
                "default": "out"
              },
              "speed": 0.4,
             
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800,
                "factor": 1000
              },
              "limit": 0,
              "value": 100
            },
            "opacity": {
              "random": {
                "enable": true,
                "minimumValue": 0.3
              },
              "value": 0.8,
              "animation": {
                "destroy": "none",
                "enable": true,
                "minimumValue": 0.3,
                "speed": 0.5,
                "startValue": "random",
                "sync": false
              }
            },
            "shape": {
              "options": {},
              "type": "circle"
            },
            "size": {
              "random": {
                "enable": true,
                "minimumValue": 1
              },
              "value": 3,
              "animation": {
                "destroy": "none",
                "enable": true,
                "minimumValue": 1,
                "speed": 3,
                "startValue": "random",
                "sync": false
              }
            }
          },
          "pauseOnBlur": true,
          "pauseOnOutsideViewport": false,
          "themes": []
        }}
      />
    </div>
    
  );
}

export default App;
