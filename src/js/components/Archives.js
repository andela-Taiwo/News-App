import React from 'react';
export default class Archives extends React.Component{
  render(){
    const{ query }=this.props.location;
    const {date,filter}=query;
    const{params}=this.props;
    const{articles}=params;

    return(
      <div>

        <Header />
        <h1>Archives  ({articles})</h1>
        <h3>date: {date}, filter:{filter}</h3>
      </div>

  );
  }
}
