import React from 'react';
import ReactDOM from 'react-dom';

const Person=({img,name,job,children})=>{
    const url=  `Http://randomuser.me/api/portraits/thumb/men/${img}.jpg `
    return(
        <article>
            <img src={url}/>
            <h2>Name : {name}</h2>
            <h3>Job  : {job} </h3>
            {children}
        </article>
    )
}
const PeopleList=()=>{
    return(
        <section>
            <Person img="10" name="Sopon" job="Programmer" />
            <p>Skill : C# Java PHP</p>
            <Person img="26" name="Jonathan Joestar" job="Tester" />
            <p>Skill : ทดสอบระบบ</p>
            <Person img="6" name="JOJO" job="Designer"/>
            <p>Skill : Photoshop , 3d model</p>
            <Person img="98" name="Code" job="SA"/>
            <p>Skill : A, B, C</p>
        </section>
    )
}

ReactDOM.render(<PeopleList />, document.getElementById('root'));
