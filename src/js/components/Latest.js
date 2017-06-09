import React from 'react';
import $ from 'jquery';
import Request from 'superagent';
import {Card,CardTitle} from 'react-materialize';
import sourceStore from '../stores/SourceStore'; 
import * as ArticleAction from '../actions/ArticleAction'


export default class Latest extends React.Component{
    constructor() {
        super();
        this.state = { result: sourceStore};
    }

componentWillMount(){
	sourceStore.on("change", ()=> {
		this.setState({
			result:sourceStore
		});
	})
     /*const newsList = [];
        for(var i=0 ; i<state.result.length; i++){
        newsList.push(<Card key={state.result[i].id} className='small'
	header={<CardTitle ></CardTitle>}
    title= {state.result[i].name}
	actions={[<button href='#' onClick={this.getArticle.bind(this,state.result[i].id) }>{state.result[i].url}</button>]}>
	{state.result[i].description}
    
</Card>);

        this.setState({
          result: newsList
        })
        }*/

}
render() {
 
        return (
            <div>
              <h4>Latest News</h4>
              <table className="table table-hover">
                <tbody>
                
                  {this.state.result}
                </tbody>
              </table>
              
            </div>
        );
    }
}
