import React from 'react'
import Card from './Card'

 class Credit extends React.Component {

      state={ num:'', val:'',name:'' };

creditNumber = (event) => {
  if(event.target.value.length<17)  {
    this.setState({ num: event.target.value  })
  }     
  
    
}
validthru = (event) =>{
if (event.target.value.slice(0,2)<13){
    this.setState({val: event.target.value})
}
   
    
}

owner = (event) => {

    this.setState({name: event.target.value})
}

    render () {
        return (
        <div className='container'>
            <Card
             number={this.state.num} 
             valid={this.state.val}
             name={this.state.name}
             />
            <div className='inputs'> 
                <input type='number' onChange={this.creditNumber} placeholder='Credit card number' ></input>
                <input type='number' onChange={this.validthru} placeholder='ValidThru'></input>
                <input type='text' onChange={this.owner} placeholder='Your Name'></input>
            </div>
        </div>
         );


    }
}
export default Credit