/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../../Styling/GradeIndex.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GradeIndexElement from './GradeIndexRow';
import GradeIndexConversion from './GradeIndexConversion';
import Navigation from '../Other/Navigation';
import { numberToPercent, percentToNumber, percentToLetter } from '../../../lib/conversions';
import { getResults } from '../../../lib/calculations';


interface rowState {
    id: number,
    name: string,
    mark: string,
    weight: string,
    default: boolean
}

interface State {
    inputs: rowState[],
    examPercent: string,
    examGrade: string,
    examWeight: string,
    showResults: boolean,
    requiredAverage: string,
    currentAverage: string
}
interface OutputProps {
  requiredAverage: string,
  currentAverage: string,
  courseMark: string
}
const OutputBox = (props:OutputProps) => {
  const { currentAverage, requiredAverage, courseMark } = props;
  return (
    <div className="gradeIndexResults">
      <div>
        <h3>Current Average: <h3 style={{ float: 'right' }}>{currentAverage}% ({formatGrade(currentAverage)})</h3></h3>
        <h3>Required Exam: <h3 style={{ float: 'right' }}>{requiredAverage}% ({formatGrade(requiredAverage)})</h3></h3>
        <h3>Final course mark: <h3 style={{ float: 'right' }}>{courseMark}% ({formatGrade(courseMark)})</h3></h3>
      </div>
    </div>
  );
};

function formatGrade(grade: string) {
  return `${percentToNumber(Number(grade))}, ${percentToLetter(Number(grade))}`;
}

export default class GradeIndex extends React.Component<{}, State> {
    private id = 0;

    constructor(props: {}) {
      super(props);
      this.state = {
        inputs: [{
          id: this.getId(), name: 'Quiz 1', mark: '100', weight: '40', default: true,
        }],
        examGrade: '12',
        examPercent: '90',
        examWeight: '60',
        showResults: false,
        requiredAverage: '',
        currentAverage: ''
      };
      this.handleGradeChange = this.handleGradeChange.bind(this);
      this.handleConversionChange = this.handleConversionChange.bind(this);
    }

    handleGradeChange(e: React.ChangeEvent<HTMLInputElement>, id:number) {
      this.setState({
        inputs: this.state.inputs.map((elm: rowState) => {
          if (elm.id === id) {
            elm[e.target.id] = e.target.value;
          }
          return elm;
        })
      });
      setImmediate(() => this.recalculateWeight());
    }

    handleConversionChange(e: React.ChangeEvent<HTMLInputElement>) {
      switch (e.target.id) {
        case ("examGrade"): this.gradeConversion(e.target.value); break;
        case ("examPercent"): this.percentConversion(e.target.value); break;
        case ("examWeight"): this.setState({ examWeight: e.target.value }); break;
        default: break;
      }
    }

    gradeConversion(grade: string) {
      this.setState({ examGrade: grade, examPercent: String(numberToPercent(Number(grade))) });
    }

    percentConversion(percent: string) {
      this.setState({ examPercent: percent, examGrade: String(percentToNumber(Number(percent))) });
    }

    recalculateWeight() {
      let totalWeight: number = 0;
      this.state.inputs.forEach((row) => {
        totalWeight += Number(row.weight);
      });
      this.setState({ examWeight: String(100 - totalWeight) });
    }

    getId() {
      return ++this.id;
    }

    newRow() {
      this.setState({
        inputs: [...this.state.inputs, {
          id: this.getId(), name: '', mark: '', weight: '', default: false
        }]
      });
    }

    resetForm() {
      this.setState({
        inputs: [{
          id: this.getId(), name: 'Quiz 1', mark: '100', weight: '40', default: true
        }]
      });
    }

    handleSubmit(e: React.FormEvent<Element>) {
      e.preventDefault();
      const grades: number[] = [];
      const weights: number[] = [];
      this.state.inputs.forEach((row) => {
        grades.push(Number(row.mark));
        weights.push(Number(row.weight));
      });
      const { examWeight, examPercent } = this.state;


      const results = getResults(grades, weights, Number(examPercent), Number(examWeight));
      this.setState({ showResults: true, requiredAverage: String(results.required), currentAverage: String(results.average) });
    }

    render() {
      const {
        examGrade, examPercent, examWeight, showResults, requiredAverage, currentAverage
      } = this.state;
      return (
        <div className="gradeIndexWrapper">
          <Navigation />
          <h1>MaxAverage</h1>
          <div className="gradeIndexContainer">
            <div className="gradeIndexHeader">
              <h3>Name</h3>
              <h3>Mark</h3>
              <h3>Weight</h3>
            </div>
            <Form onSubmit={(e:React.FormEvent) => this.handleSubmit(e)}>
              <div className="gradeIndexFormRows">
                {this.state.inputs.map((elm:rowState) => (<GradeIndexElement default={elm.default} key={elm.id} id={elm.id} name={elm.name} mark={elm.mark} weight={elm.weight} handleChange={this.handleGradeChange} />))}
              </div>
              <div className="actionButtons">
                <p className="actionClick" onClick={() => this.newRow()}>Add Another Grade</p>
                <p className="actionClick" onClick={() => this.resetForm()}>Reset Form</p>
              </div>
              <hr />
              <div>
                <GradeIndexConversion examGrade={examGrade} examPercent={examPercent} examWeight={examWeight} handleChange={this.handleConversionChange} />
              </div>
              <div className="submitRow">
                <Button type="submit" variant="outline-success">Calculate</Button>
              </div>
            </Form>
          </div>
          {showResults && <OutputBox requiredAverage={requiredAverage} currentAverage={currentAverage} courseMark={examPercent} />}
        </div>
      );
    }
}
