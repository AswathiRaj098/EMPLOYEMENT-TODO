import React from 'react';
const Person = (props) => {
    return (
        <p>I am a Student: My name is {props.name} and my score is {props.score}</p>
    );
}
export default Person;