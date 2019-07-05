import React from "react";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

interface Props {
    id: number,
    handleChange: Function,
    default: Boolean,
    name: string,
    mark: string,
    weight: string
}

export default class GradeIndexElement extends React.Component<Props, {}> {
  render() {
    const {
      id, name, mark, weight
    } = this.props;

    return (
      <div className="gradeIndexRow">
        <Form.Group controlId="name">
          <Form.Control
            type="text"
            placeholder="Quiz 1"
            value={name}
            onChange={(e:any) => this.props.handleChange(e, id)}
          />
        </Form.Group>
        <InputGroup>
          <Form.Control
            required
            type="number"
            placeholder="85"
            value={mark}
            onChange={(e:any) => this.props.handleChange(e, id)}
            min="0"
            step="0.01"
            id="mark"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Form.Group controlId="weight">
          <Form.Control
            required
            type="number"
            placeholder="40"
            min="0"
            max="100"
            step="0.5"
            value={weight}
            onChange={(e:any) => this.props.handleChange(e, id)}
          />
        </Form.Group>
      </div>
    );
  }
}
