/*import React from 'react';



const ArrayMethods = () => {
    const myArray = [1,2,3,4,5,6,7,8,9,10];

const listItems = myArray.map((mynumber) => <li>{mynumber}</li>);
    return
    <div>{listItems}</div>;
}; */



import React, {Component} from 'react';

const myArray = [1,2,3,4,5,6,7,8,9,10];

class ArrayMethods extends Component{
    state = {
        numberslist:myArray,

    };

    removeHandler = (listindex) =>{
        const myOldArray = [...this.state.numberslist];

        myOldArray.splice(listindex, 1);
        this.setState({numberslist:myOldArray});

    };

    render () {
    const listItems = this.state.numberslist.map((number,index) => ( <li key ={index} onClick ={this.removeHandler.bind(this, index)}>{number}</li>));
        return(
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}




export default ArrayMethods;