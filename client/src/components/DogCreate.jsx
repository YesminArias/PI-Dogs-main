import React from "react";

export function DogCreate(){
    const [name, setName]=React.useState('')
    const [height, setHeight]=React.useState('')
    const [weight, setWeight]=React.useState('')
    const [life_span, setLife_span]=React.useState('')
    const [image, setImage]=React.useState('')
    const [temperaments, setTemperaments]=React.useState('')
    const [input, setInput]= React.useState({name:'',
        height: '',
        weight: '',
        life_span: '',
        image: '' })
}