import * as React from 'react';
import img from '../assets/image/list.png'

class List extends React.Component {
    render() {
        return (
            <div>
                <img src={img} style={{maxWidth: '800px'}}/>
            </div>
        )
    }
}

export default List;