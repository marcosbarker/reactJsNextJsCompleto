import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'Titulo 1',
        body: 'Corpo 1'
      },
      {
        id: 2,
        title: 'Titulo 2',
        body: 'Corpo 2'
      },
      {
        id: 3,
        title: 'Titulo 3',
        body: 'Corpo 3'
      }
    ]
  };

  timeoutUpdate = null;


  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillMount() {
    clearTimeout(this.clearTimeout);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'Mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 1000);


  }



  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <p>{counter}</p>

        {posts.map(post => (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>


        ))}


      </div>
    );
  }

}

export default App;