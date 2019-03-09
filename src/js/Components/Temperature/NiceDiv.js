import Component from '../../framework/Component';
import { Temperature } from './';

export class NiceDiv extends Component {
  render() {
    return [
      {
        tag: 'div',
        content: 'Me div',
        classList: ['nice'],
        attributes: [
          {
            name: 'title',
            value: 'Me definitely nice div'
          }
        ],
        children: [
          {
            tag: Temperature,
            props: { temperature: 20000000, unit: 'K' }
          }
        ]
      }
    ];
  }
}
