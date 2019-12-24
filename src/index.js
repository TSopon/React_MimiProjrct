import React from 'react';
import ReactDOM from 'react-dom';

const Person=({img,name,job})=>{
    const url=  `Http://randomuser.me/api/portraits/thumb/men/${img}.jpg `
    return(
        <article>
            <img src="Http://randomuser.me/api/portraits/thumb/men/3.jpg"/>
            <h2>Name : Sopon Niyomwan</h2>
            <h3>Job  : Programmer</h3>
            
        </article>
    )
}
const PeopleList=()=>{
    return(
        <section>
            <Person/>
            <Person/>
            <Person/>
        </section>
    )
}

ReactDOM.render(<PeopleList />, document.getElementById('root'));
