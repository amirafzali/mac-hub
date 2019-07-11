import React from "react";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

interface Props {
    id: number,
    handleChange: Function,
    handleRemove: Function,
    name: string,
    mark: string,
    weight: string
}

export default class GradeIndexRow extends React.Component<Props, {}> {
  render() {
    const {
      id, name, mark, weight, handleRemove
    } = this.props;

    return (
      <div className="grade-index-row">
        <div className="input-row">
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              placeholder="Quiz 1"
              value={name}
              onChange={(e:any) => this.props.handleChange(e, id)}
            />
          </Form.Group>
        </div>
        <div className="input-row">
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
              <InputGroup.Text id="percent-addon">%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div className="input-row-weight">
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
          {id !== 1 && <i role="button" tabIndex={0} onClick={() => handleRemove()} className="fa fa-trash-o fa-2x remove-icon" />}
        </div>
      </div>
    );
  }
}
