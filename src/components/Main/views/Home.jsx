import React from 'react';
import Button from '../../Button/Button.jsx';
import Group from '../../Group/Group.jsx';
import ProgressBar from '../../ProgressBar/ProgressBar.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      progress: 0
    }
  }

  componentDidMount() {
    console.log('Home Mounted');

    this.myInterval = setInterval(() => {
      if(this.state.progress <= 100) {
        this.setState({
          progress: this.state.progress + Math.floor(Math.random() * 5) + 1
        })
      }
    }, 1000);
  }

  componentWillUnmount() {
    console.log('unmount');
    clearInterval(this.myInterval);
  }

  clickButton() {
    console.log('hi');
  }

  render() {
    return (
      <div>
        <h2>home</h2>
        <p>Phasellus erat quam, sollicitudin eu feugiat quis, dictum et erat. Suspendisse congue consectetur est, nec consectetur velit semper vitae. Ut mi nisi, porttitor et ante sit amet, dapibus gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet aliquam diam. Aliquam eu orci eget erat venenatis viverra. Proin ultricies aliquam finibus. Sed erat eros, egestas sed semper nec, ornare varius augue. Nunc urna enim, finibus vitae molestie elementum, lacinia ut magna. Nulla facilisi. Suspendisse ut lobortis nulla.</p>

        <Group>
          <Button color="red" onClick={this.clickButton}>Hello there</Button>
          <Button color="blue" onClick={this.clickButton}>Hello there</Button>
          <Button href="http://www.google.com" target="_blank" color="purple">Hello there</Button>
        </Group>

        <br />
        <ProgressBar completed={this.state.progress} color="blue" />
      </div>
    )
  }
}

export default Home;
