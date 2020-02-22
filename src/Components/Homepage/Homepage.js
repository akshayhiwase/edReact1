import React from 'react';
import Axios from 'axios'
import classes from './Homepage.module.css'
import { Link } from 'react-router-dom'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoList: [],
            title: "",
            thumbnail: ""
        }
    }
    componentDidMount() {
        Axios.get("https://5dfb78000301690014b8fbde.mockapi.io/VideoLists")
            .then((responce) => {


                this.setState({
                    videoList: [...responce.data]
                })

            })
    }


    render() {
        const videoCards = this.state.videoList.map((item) => {
            return (
                <div className={classes.videocards} key={item.id}>
                    <Link to={`/details/${item.id}`}>

                        <img src={item.thumbnail} alt={item.title} />
                        <h1>{item.title}</h1>
                    </Link>
                </div>

            )
        })
        return (
            <div className={classes.main_container}>
                {videoCards}
            </div>
        );
    }
}

export default Homepage;