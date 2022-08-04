import { Component } from "react";

class TOC extends Component{
    render(){
        let lists = [];
        let data = this.props.data;
        let i = 0;
        
        while(i<data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id} 
            data-id = {data[i].id}
            onClick={function(e){
                e.preventDefault();
                this.props.onChange(e.target.dataset.id); 
                // 이 부분이 핵심, 클릭한 e를 구분하려면 target.dataset의 정보를 참조해야함
            }.bind(this)}
            >{data[i].title}</a></li>)
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