import * as React from 'react';
import Header from './Header';
import Axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: ''
        }
    }
    componentDidMount() {
        Axios.get('/api/test').then(res => {
            console.log(res.data);
            this.setState({avatar: res.data.avatar_url})
        })
    }
    render() {
        return (
            <div>
                <Header />
        <h2>{this.state.avatar}</h2>
            </div>
        )
    }
}

export default App;