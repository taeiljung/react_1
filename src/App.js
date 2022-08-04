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
        {id:0, title:'HTML',desc:'HTML is for information'},
        {id:1, title:'CSS',desc:'CSS is CSS'},
        {id:2, title:'JAVASCRIPT',desc:'JAVASCRIPT is JAVASCRIPT'},
      ]
    }
  }
  render(){
    let _title,_desc = null;
    if(this.state.s_c_i === 0){
      _title=this.state.contents[0].title
      _desc=this.state.contents[0].desc
    }else if(this.state.s_c_i === 1){
      _title=this.state.contents[1].title
      _desc=this.state.contents[1].desc
    }else {
      _title=this.state.contents[2].title
      _desc=this.state.contents[2].desc
    }
    return (
      <div className='App'>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents} 
        onChange={function(id){
          this.setState({
            s_c_i : Number(id)
          })
          }.bind(this)}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
