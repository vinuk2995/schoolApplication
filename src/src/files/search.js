import React from 'react';

class SEARCH extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      sum : this.props.value
    }

  }
  render(){
    return(

      <div className="App">
        <h1>
          Added value is {this.props.value}
        </h1>
    </div>

    )
  }
};
export default SEARCH;
