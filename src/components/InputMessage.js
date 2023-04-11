// import React, {useState} from 'react';

// function InputMessage (){
//     const [message, setMessage]= useState('');
//     const [submittedMessage, setSubmittedMessage]= useState('');

//     const handleInputChange = (event) =>{
//         // event here = the input change as the user types
//         // the target is the input itself
//         // the value is the content being typed in the input
//         setMessage(event.target.value);
//         console.log(event.target.value);
        
//     }

//     const handleSubmit = ()=>{
//         setSubmittedMessage(message);
//         console.log('message submitted');
//         // Clears what the user enter in the text box
//         setMessage('');
//     }
//     // This returns the users input on the dom
//     return(
//         <>
//         <p>You have Submitted:{submittedMessage}</p>
//         {/* Must use input tag for a user to input a message */}
//         <input 
//         type="text" 
//         value={message} 
//         onChange={handleInputChange}
//          />
//          {/* Handles what happens when the button is clicked */}
//         <button onClick={handleSubmit}>Submit</button>
//         </>
//     )
// }
// export default InputMessage;