import React from 'react';
import './Form.css';

const Form = (props) =>{

        return(
          <div className= 'formbox'>
            <form>
                 <label>
            First name:
            
          </label>
          <input type="text" name= 'firstname' onChange={props.onChange} />
          <label>
            Last name:
            </label>

          <input type="text" name= 'lastname' onChange={props.onChange}/>
          <label>
            Phone:
           
          </label>
          <input type="number" name='phone' onChange={props.onChange} />

          <label>
          Message:
          
        </label>
        <textarea name='message' onChange={props.onChange} />

            </form>
            </div>

        );
    }


  export default Form;