import React,{ Component } from 'react';
import TOC from './Components/TOC';
import Subject from './Components/Subject';
import Content from './Components/Content';

// 생활코딩 보면서 학습중
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode : 'read',
      s_c_i:1,
      subject:{title:'web',sub:'world wide web'},
      welcome:{title:'Welcome',desc:'Hello react'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for information'},
        {id:2, title:'CSS',desc:'CSS is CSS'},
        {id:3, title:'JAVASCRIPT',desc:'JAVASCRIPT is JAVASCRIPT'},
      ]
    }
  }
  render(){
    return (
      <div className='App'>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} clicked={function(){}}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content></Content>
      </div>
    )
  }
}

export default App;
