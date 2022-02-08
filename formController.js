import React from "react"

export default function Form() {
    
    //Create State
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    
    //Event Handler Function (input)
    function handleChange(event) {
        const {name, value, type, checked} = event.target //event target destructuring
        
        setFormData(prevFormData => { //set State Value
            return {
                ...prevFormData, //take prev state to new object
                [name]: type === "checkbox" ? checked : value // if type is checkbox the value will be checked (bolean value) else the value willl be value of input
            }
        })
    }
    
    
    //Event Handler Function (Submit) this function usually used to send data state to API
    function handleSubmit(event) {
        event.preventDefault() //remove default behavior that re render all of the page 
        // submitToApi(formData)
        console.log(formData)
    }
    
    return (
        <form onSubmit={handleSubmit}> // form 
    
            //input text
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName" //this name property must have the same value as state property 
                value={formData.firstName} 
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
                    
            //text area
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
                    
            //checkbox
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
                    
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            
            //radio button
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />
            
            //dropdown selector
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor" 
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
                    
            //button
            //the botton type is submit by default cuz that was inside the form tag
            <button>Submit</button>
        </form>
    )
}
