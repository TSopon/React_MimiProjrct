import React from 'react';
import ReactDOM from 'react-dom';

const Person=({img,name,job})=>{
    const url=  `Http://randomuser.me/api/portraits/thumb/men/${img}.jpg `
    return(
        <article>
            <img src={url}/>
            <h2>Name : {name}</h2>
            <h3>Job  : {job} </h3>
            
        </article>
    )
}
const PeopleList=()=>{
    return(
        <section>
            <Person img="10" name="Sopon" job="Programmer" />
            <Person img="25" name="Jonathan Joestar" job="Tester" />
            <Person img="6" name="JOJO" job="Designer"/>
        </section>
    )
}

ReactDOM.render(<PeopleList />, document.getElementById('root'));
