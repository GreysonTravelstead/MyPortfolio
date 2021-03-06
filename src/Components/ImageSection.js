import React from 'react';
// import saveFile from './saveFile'


const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <h4>I am<span> Greyson</span></h4>
                <p className="about-text">
                Software Developer capable of building applications from the ground up using information gathering, planning, design, development, testing and delivery. Passionate towards software architecture, design, and UI combined with sensitivity to serve the needs of the business balanced with the delivery of high quality solutions. 
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
                        <p>: Software Developer at M&S Consulting</p>
                        <p>: Morgantown, WV</p>
                        <p>: West Virginia University</p>
                        <p>: B.S.B.AD in Management Information Sytems, Minor in Data Analytics </p>
                    </div>
                </div>
                {/* <button className="btn" onClick={saveFile}>Download Resume</button> */}
            </div>
        </div>
    )
}

export default ImageSection;