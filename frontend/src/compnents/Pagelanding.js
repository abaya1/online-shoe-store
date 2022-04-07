import React from 'react';
import TitleCard from './titlecard';
import Featured from './feature';

const Landing = (props) =>
{
    return <div>
                <TitleCard/>
                <div className='add'> RUN AWAY FROM YOUR PROBLEMS</div>
                <Featured  getitems={props.getitems}/>
          </div>
}


export default Landing;