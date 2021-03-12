import React from 'react';
import saveFile from './saveFile'


const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <h4>I am<span> Greyson</span></h4>
                <p className="about-text">
                    I will be graduating from West Virginia University in May 2021. I really enjoy spending my free time skiing, hiking, and traveling. My passion and focus lie in building web and software applications. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Name</p>
                        <p>Work</p>
                        <p>Location</p>
                        <p>Education</p>
                        <p>Degree</p>
                    </div>
                    <div className="right-section">
                        <p>: Greyson Seth Travelstead</p>
                        <p>: Analyst at M&S Consulting</p>
                        <p>: Morgantown, WV</p>
                        <p>: West Virginia University</p>
                        <p>: B.S.B.AD in Management Information Sytems, Minor in Data Analytics </p>
                    </div>
                </div>
                <button className="btn" onClick={saveFile}>Download Resume</button>
            </div>
        </div>
    )
}

export default ImageSection;