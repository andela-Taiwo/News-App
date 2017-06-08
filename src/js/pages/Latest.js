import React from 'react';
import $ from 'jquery';
import Request from 'superagent';
import {Card,CardTitle} from 'react-materialize';

export default class Latest extends React.Component{
    constructor() {
        super();
        this.state = { result: []};
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
        newsList.push(<Card key={sources[i].id} className='small'
	header={<CardTitle ></CardTitle>}
    title= {sources[i].name}
	actions={[<button href='#' onClick={this.getArticle.bind(this,sources[i].id) }>{sources[i].url}</button>]}>
	{sources[i].description}
    
</Card>);

        this.setState({
          result: newsList
        })
        }

})
}
getArticle(src_url){
    console.log(src_url);
    const news_obj = {key:'213327409d384371851777e7c7f78dfe'};
    const url= 'https://newsapi.org/v1/articles?source='+src_url+'&apiKey='+news_obj.key;
    console.log(url);
    Request
    .get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end ((error, response)=>{
        const data_body=response.body
        console.log(data_body);
        const{ articles } = data_body;
        
        console.log(articles);
        const newsList = [];
        for(var i=0 ; i<articles.length; i++){
            newsList.push(

                 <div className="row" key={articles[i].url}>
                    <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src={articles[i].urlToImage} alt="article image"/>
                            <span className="card-title">{articles[i].title}</span>
                        </div>
                        <div className="card-content">
                        <p>{articles[i].description}</p>
                        </div>
                        <div className="card-action">
                            <a href={articles[i].url} target="_blank">Read on {src_url}</a>
                            <span>{articles[i].author} </span>
                        </div>
                    </div>
                    </div>
                </div>
            );   

        }

        this.setState({
                result: newsList
        });



})

   // alert(src_url);
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
