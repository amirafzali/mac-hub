import React from 'react';
import Form from 'react-bootstrap/Form';
import '../../Styling/conversion-bubble.css';
import { twelve, four, letters } from '../../../lib/conversions';

interface State {
    twelvePoint: string,
    fourPoint: string,
    letter: string
}
export default class ConversionBubble extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = { twelvePoint: '0', fourPoint: '0', letter: '0' };
  }

  handleChange(e: any) {
    this.setState({ twelvePoint: e.target.value, fourPoint: e.target.value, letter: e.target.value });
  }

  render() {
    const { twelvePoint, fourPoint, letter } = this.state;
    return (
      <div className="conversion-bubble">
        <div className="conversion-bubble-header">
          <h3>12-Point</h3>
          <h3>4-Point</h3>
          <h3>Letter Grade</h3>
        </div>
        <div className="conversion-field-form conversion-bubble-form">
          <Form.Group controlId="twelve">
            <Form.Control as="select" value={twelvePoint} onChange={(e) => this.handleChange(e)}>
              {twelve.map((twelveGrade, index) => (<option key={twelveGrade} value={index}>{twelveGrade}</option>))}
            </Form.Control>
          </Form.Group>
          <span className="equals-sign">=</span>
          <Form.Group controlId="four">
            <Form.Control as="select" value={fourPoint} onChange={(e) => this.handleChange(e)}>
              {four.map((fourGrade, index) => (<option key={fourGrade} value={index}>{fourGrade}</option>))}
            </Form.Control>
          </Form.Group>
          <span className="equals-sign">=</span>
          <Form.Group controlId="letter">
            <Form.Control as="select" value={letter} onChange={(e) => this.handleChange(e)}>
              {letters.map((letterGrade, index) => (<option key={letterGrade} value={index}>{letterGrade}</option>))}
            </Form.Control>
          </Form.Group>
        </div>
      </div>
    );
  }
}
