import React from 'react';


export default class Footer extends React.Component {
    render() {
        return (
            <div className="page-footer ">
                <div className="container">
                <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div className="footer-copyright center"> 
                  <div className="container">
                  Sokunbi Memunat ©2017.
                  </div>
                  </div>
                    
                </div>

            </div>
        );
    }
}
