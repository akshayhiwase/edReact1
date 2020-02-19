import React from 'react'
import Axios from 'axios'

class Details extends React.Component {

    state = {
        videoInfo: {}
    }

    componentDidMount() {
        const videoId = this.props.match.params.id
        Axios.get('https://5dfb78000301690014b8fbde.mockapi.io/VideoLists/' + videoId)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    videoInfo: { ...response.data }
                })
            }
            )
    }
    render() {
        return (
            <div>
                <h1>This Is Details Page Of</h1>
                <h1>{this.state.videoInfo.title}</h1>
            </div>
        );
    }
}

export default Details;