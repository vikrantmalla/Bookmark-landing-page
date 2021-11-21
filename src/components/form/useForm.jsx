import {useState} from 'react'

const useForm = validate => {
    const [userInput, setUserInput] = useState({
        email: ""
    });
    const [errors,setErrors] = useState({})

    const handleInput = e =>{
       const {name,value} = e.target
       setUserInput({
           ...userInput,
           [name]: value
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(userInput));
    }
    return {handleInput,userInput,handleSubmit,errors}
}

export default useForm
