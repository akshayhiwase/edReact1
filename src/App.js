import React from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const videoList = myList.map(data => {
      return (

        <div className="card" key={data.id}>
          <img src={data.thumbnail}></img>
          <p>{data.title}</p>
        </div>

      )


    })
    return (
      <div className="main-container">

        {videoList}
      </div>
    );
  }
}

export default App;

