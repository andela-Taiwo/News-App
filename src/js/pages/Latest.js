import React from 'react';
import $ from 'jquery';
import Request from 'superagent';
import { Link } from 'react-router';

export  default class Latest extends React.Component{
    constructor() {
        super();
        this.state = { result: [] ,
                        news: []}
    }

    componentDidMount(){
    console.log('componentDidMount');

    const url= 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe';
    const url2 = 'https://newsapi.org/v1/sources?language=en';
    Request
    .get(url2)
    .query(null)
    .set('Accept', 'application/json')
    .end ((error, response)=>{
        const data=response.body
       
        const{ sources } = data;
        const{name} = sources;
        
        const newsList = [];
        for(var i=0 ; i<sources.length; i++){
        newsList.push(<tr key={sources[i].url}><td>{sources[i].author}</td><td>{sources[i].description}</td><td><a onClick={this.getArticle.bind(this,sources[i].id) }>{sources[i].url}</a></td></tr>);

        this.setState({
          result: newsList
        })
        }

})
}
getArticle(src_url){

    const news_obj = {key:'213327409d384371851777e7c7f78dfe'};
    const url= 'https://newsapi.org/v1/articles?source='+src_url+'&sortBy=latest&apiKey='+news_obj.key;
    console.log(url);
    Request
    .get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end ((error, response)=>{
        const data=response.body
        console.log(data);
        const{ articles } = data;
        
        console.log(articles);
        const newsList = [];
        for(var i=0 ; i<articles.length; i++){
        newsList.push(<tr key={articles[i].url}><td>{articles[i].author}</td><td>{articles[i].description}</td><td><a >{articles[i].url}</a></td></tr>);

        this.setState({
          news: newsList
        })
        }

})

    alert(src_url);
}
    render() {
        return (
            <div>
              <h1>Latest News</h1>
              <table className="table table-hover">
                <tbody>
                  {this.state.result}
                </tbody>
              </table>
              
            </div>
        );
    }
}
