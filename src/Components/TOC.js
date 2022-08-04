import { Component } from "react";

class TOC extends Component{
    render(){
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while(i<data.length){
            lists.push(<li><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
            i = i+1;
        }
        return(
            <div className="TOC">
                <ul>
                    {lists}
                </ul>
            </div>
        )
    }
}
export default TOC;