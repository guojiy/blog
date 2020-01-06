import * as React from 'react';
import img from '../assets/image/home.png';
import {connect} from 'react-redux';

class Home extends React.Component {
    change() {
        this.props.changeTest('test data has changed')
    }
    render() {
        return (
            <div>
                <h1 onClick={this.change.bind(this)}>{this.props.test}</h1>
                <img src={img} style={{maxWidth: '800px'}}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        test: state.test
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeTest(data){
            dispatch({
                type: 'CHANGETEST',
                payload: data
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);