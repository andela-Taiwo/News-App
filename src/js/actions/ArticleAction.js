import { EventEmitter } from "events" ;
import Dispatcher from '../dispatch/Dispatcher'
import NewsAPI from '../utils/NewsAPI';

/**
 * 
 */
export function getSources(){
  // console.log("Handling action");
  const url = 'https://newsapi.org/v1/sources?language=en';
  NewsAPI.getSources(url)
    .then((sources)=> {
      Dispatcher.dispatch({
      actionType: "GET_SOURCES",
      sources
    })
    });
  // Dispatcher.dispatch({
  //   actionType:"GET_SOURCES"
  // })

}



export function getArtcles(){
  Dispatcher.dispatch({
    type:"GET_ARTICLES"
  })

}

