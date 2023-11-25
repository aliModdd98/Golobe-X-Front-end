import React from 'react'
import "./TitleContainer.css"

function TitleContainer({ button, stateV, setState }) {
    return (

        <div className='title_container'>
            <div>
                <h2>Fall into travel </h2>
                <p className='main_descrip'>Going somewhere to celebrate this season?
                    Whether you're going home or somewhere to roam
                    , we've got the travel tools to get you to your destination</p>
            </div>

            <button onClick={() => setState(!stateV)}>{button}</button>

        </div>

    )
}

export default TitleContainer