import Component from '../../framework/Component';
import { Temperature, NiceDiv } from './';
export class TemperatureInNiceDiv extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    return [
      {
        tag: NiceDiv,
        children: [
          { tag: Temperature, props: { temperature: 2000, unit: 'K' } },
          {
            tag: Temperature,
            props: { temperature: 10000, unit: 'K' },
            children: [
              {
                tag: Temperature,
                props: { temperature: 50000, unit: 'K' }
              }
            ]
          }
        ]
      }
    ];
  }
}
