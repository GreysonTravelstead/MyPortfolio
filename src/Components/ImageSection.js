import React from 'react';
import saveFile from './saveFile'


const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <h4>I am<span> Greyson</span></h4>
                <p className="about-text">
                    I will be graduating from West Virginia University in May 2021. I really enjoy spending my free time skiing, hiking, and traveling. I am always looking for my next adventure. Now, I am looking for my first full-time position. Over the past year, the knowledge and insight that I gained in the classroom inspired me to pursue the world of web development. Since then, I am regularly refining my skillset into something that can be utilized in the real world. My passion and focus lie in building web and software applications. I know that I can provide a fresh take and extraordinary approach to every project that presents itself. I thrive in an environment of challenges and constructive feedback. I find it rewarding to combine creative ideas with those of others to achieve a common goal. I am looking forward to dedicate my talents and new evolving skills to develop unique and quality products. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>Education</p>
                        <p>Degree</p>
                    </div>
                    <div className="right-section">
                        <p>: Greyson Seth Travelstead</p>
                        <p>: 22</p>
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