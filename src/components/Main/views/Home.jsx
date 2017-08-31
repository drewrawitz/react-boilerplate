import React from 'react';
import Button from '../../Button/Button.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    }
  }

  componentDidMount() {
    console.log('Home Mounted');
  }

  clickButton() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <h2>home</h2>
        <p>Phasellus erat quam, sollicitudin eu feugiat quis, dictum et erat. Suspendisse congue consectetur est, nec consectetur velit semper vitae. Ut mi nisi, porttitor et ante sit amet, dapibus gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet aliquam diam. Aliquam eu orci eget erat venenatis viverra. Proin ultricies aliquam finibus. Sed erat eros, egestas sed semper nec, ornare varius augue. Nunc urna enim, finibus vitae molestie elementum, lacinia ut magna. Nulla facilisi. Suspendisse ut lobortis nulla.</p>
        <Button onClick={this.clickButton}>Hello there</Button>
      </div>
    )
  }
}

export default Home;
