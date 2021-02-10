import React from 'react';


const Card = ({image, name, description, deployed_url, repo_url, id}) => {

   
    return (
        // <Scroll>
        <div className='center ba b--white bg-none br2 pa2 ma2 mw7 grow'>
            <a href={deployed_url} target="_blank" rel="noreferrer">
                <img class="br-100 h5 w5 dib" alt='projects' src={ image } />
            </a>
            <div>
                <a target="_blank" rel="noreferrer" href={repo_url}>
                    <h2 class="lh-copy measure center f10 white ttu tracked mt0" >{name}</h2>
                </a>
                <p class="lh-copy measure center f9 white ttu tracked mt0">{description}</p>

            </div>
        </div>
        // </Scroll>
        
    );
}

export default Card;