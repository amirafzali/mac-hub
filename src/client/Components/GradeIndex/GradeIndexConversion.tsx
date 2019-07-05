import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { letterGrades } from '../../../lib/conversions';

interface Props {
    examPercent: string,
    examGrade: string,
    examWeight: string,
    handleChange: Function
}

export default class GradeIndexConversion extends React.Component<Props, {}> {
  render() {
    const {
      examPercent: percentage, examGrade: grade, examWeight: weight, handleChange
    } = this.props;
    return (
      <div className="conversionField">
        <div className="conversionFieldHeader">
          <h3>Desired Mark</h3>
          <h3>Exam Weight</h3>
        </div>
        <div className="conversionFieldForm">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="90"
              aria-label="Exam weight"
              value={String(percentage)}
              onChange={(e: any) => handleChange(e)}
              min={0}
              max={100}
              step={0.01}
              id="examPercent"
              required
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Form.Group controlId="examGrade">
            <Form.Control as="select" value={grade} onChange={e => handleChange(e)}>
              {Object.keys(letterGrades).map(letterGrade => (<option key={letterGrades[letterGrade]} value={letterGrades[letterGrade]}>{letterGrade}</option>))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="examWeight">
            <Form.Control type="number" onChange={(e: any) => handleChange(e)} placeholder="40" value={String(weight)} min={0} max={100} step={0.5} required />
          </Form.Group>
        </div>
      </div>
    );
  }
}
