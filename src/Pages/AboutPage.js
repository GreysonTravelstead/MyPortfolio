import React from 'react';
import Title from '../Components/Title.js'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import Scroll from '../Components/Scroll';


const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Scroll>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'C#'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Node Js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Python'} progress={'55%'} width={'55%'} />
                <SkillsSection skill={'ASP.NET Core MVC'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'SQL'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'Web Design'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'HTML'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Sass and CSS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Git'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'Azure DevOps'} progress={'60%'} width={'60%'} />
            </div>

            </Scroll>

            

        </div>
    )
}

export default AboutPage;