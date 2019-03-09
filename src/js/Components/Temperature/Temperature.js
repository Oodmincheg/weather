import Component from '../../framework/Component';
export class Temperature extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return this.props.temperature + '&deg;' + this.props.unit;
  }
}
