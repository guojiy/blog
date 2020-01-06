import * as React from 'react';
import Axios from 'axios';

class List extends React.Component {
    state: {list: any[]}
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        Axios.get('/api/list').then(res => {
            this.setState({list: res.data.data});
        })
    }
    render() {
        const {list} = this.state;
        console.log(list);
        if(list.length < 1) {
            return (
                <h2>无数据</h2>
            )
        };
        return (
            <div>
                <h2>data</h2>
                {
                    list.map(item => {
                        return (
                            <div key={item.id} style={{float: 'left',margin: 10, width: 150, height: 250}}>
                                <img src={item.cover} style={{width: '100%', height: '90%'}}/>
                                <p>{item.title}</p>
                            </div>    
                        )
                    })
                }
            </div>
        )
    }
}

export default List;