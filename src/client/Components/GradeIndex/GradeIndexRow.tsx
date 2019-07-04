import React from "react";
import Form from "react-bootstrap/Form";

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
            required
            type="text"
            placeholder="Quiz 1"
            value={name}
            onChange={(e:any) => this.props.handleChange(e, id)}
          />
        </Form.Group>
        <Form.Group controlId="mark">
          <Form.Control
            required
            type="number"
            placeholder="85"
            step=".01"
            value={mark}
            onChange={(e:any) => this.props.handleChange(e, id)}
          />
        </Form.Group>
        <Form.Group controlId="weight">
          <Form.Control
            required
            type="number"
            placeholder="40"
            step="1"
            value={weight}
            onChange={(e:any) => this.props.handleChange(e, id)}
          />
        </Form.Group>
      </div>
    );
  }
}
