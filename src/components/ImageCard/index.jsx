import React from 'react';

export class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };

    this.imageRef = React.createRef();
    this.setSpans = this.setSpans.bind(this);
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans() {
    const height = this.imageRef.current.clientHeight;

    const span = Math.ceil(height / 32);

    this.setState({ span });
  }

  render() {
    const { urls, description } = this.props.image;

    return (
      <li style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </li>
    );
  }
}
