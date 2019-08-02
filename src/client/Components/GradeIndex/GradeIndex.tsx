import React from 'react';
import '../../Styling/GradeIndex.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import GradeIndexRow from './GradeIndexRow';
import GradeIndexConversion from './GradeIndexConversion';
import Navigation from '../Other/Navigation';
import { numberToPercent, percentToNumber, percentToLetter } from '../../../lib/conversions';
import { getResults } from '../../../lib/calculations';


interface rowState {
    id: number,
    name: string,
    mark: string,
    weight: string
}

interface State {
    inputs: rowState[],
    examPercent: string,
    examGrade: string,
    examWeight: string,
    showResults: boolean,
    showWarning: boolean,
    requiredAverage: string,
    currentAverage: string
}
interface OutputProps {
  requiredAverage: string,
  currentAverage: string,
  courseMark: string
}


function formatGrade(grade: string) {
  return `${percentToNumber(Number(grade))}, ${percentToLetter(Number(grade))}`;
}

const ResultsBox = (props:OutputProps) => {
  const { currentAverage, requiredAverage, courseMark } = props;
  return (
    <div className="grade-index-results">
      <div>
        <h3>Current Average: <h3 style={{ float: 'right' }}>{currentAverage}% ({formatGrade(currentAverage)})</h3></h3>
        <h3>Required Exam: <h3 style={{ float: 'right' }}>{requiredAverage}% ({formatGrade(requiredAverage)})</h3></h3>
        <h3>Final course mark: <h3 style={{ float: 'right' }}>{courseMark}% ({formatGrade(courseMark)})</h3></h3>
      </div>
    </div>
  );
};

const WarningBox = () => (
  <div className="grade-index-warning">
    <div>
      <h3>Course weights exceed 100, please verify.</h3>
    </div>
  </div>
);

export default class GradeIndex extends React.Component<{}, State> {
    private id:number = 0;

    private first:boolean = true;

    private formRef = React.createRef<HTMLFormElement>()

    constructor(props: {}) {
      super(props);
      this.state = {
        inputs: [{
          id: this.getId(), name: 'Quiz 1', mark: '100', weight: '40'
        }],
        examGrade: '12',
        examPercent: '90',
        examWeight: '60',
        showResults: false,
        showWarning: false,
        requiredAverage: '',
        currentAverage: ''
      };
      this.handleGradeChange = this.handleGradeChange.bind(this);
      this.handleConversionChange = this.handleConversionChange.bind(this);
    }

    handleGradeChange(e: React.ChangeEvent<HTMLInputElement>, id:number) {
      e.persist();
      this.setState((state) => {
        state.inputs.map((elm: rowState) => {
          if (elm.id === id) {
            // eslint-disable-next-line no-param-reassign
            elm[e.target.id] = e.target.value;
          }
          return elm;
        });
      });
      setImmediate(() => {
        this.recalculateWeight();
        if (this.formRef.current!.checkValidity()) {
          console.log('x');
          this.displayResults();
        } else {
          this.setState({ showResults: false });
        }
      });
    }

    handleConversionChange(e: React.ChangeEvent<HTMLInputElement>) {
      switch (e.target.id) {
        case ('examGrade'): this.gradeConversion(e.target.value); break;
        case ('examPercent'): this.percentConversion(e.target.value); break;
        case ('examWeight'): this.setState({ examWeight: e.target.value }); break;
        default: break;
      }
      setImmediate(() => {
        if (this.formRef.current!.checkValidity()) {
          this.displayResults();
        } else {
          this.setState({ showResults: false });
        }
      });
    }

    handleRemove(id:number) {
      this.setState(prev => ({ inputs: prev.inputs.filter(row => row.id !== id) }));
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
      if (100 - totalWeight >= 0) {
        this.setState({ examWeight: String(100 - totalWeight), showWarning: false });
      } else {
        this.setState({ examWeight: String(100 - totalWeight), showWarning: true, showResults: false });
      }
    }

    getId() {
      return ++this.id;
    }

    newRow() {
      this.setState(state => ({
        inputs: [...state.inputs, {
          id: this.getId(), name: '', mark: '', weight: ''
        }]
      }));
    }

    resetForm() {
      this.id = 0;
      this.setState({
        inputs: [{
          id: this.getId(), name: 'Quiz 1', mark: '100', weight: '40'
        }],
        showResults: false,
        showWarning: false
      });
    }


    displayResults() {
      const grades: number[] = [];
      const weights: number[] = [];
      this.state.inputs.forEach((row) => {
        grades.push(Number(row.mark));
        weights.push(Number(row.weight));
      });
      const { examWeight, examPercent } = this.state;

      const results = getResults(grades, weights, Number(examPercent), Number(examWeight));
      this.setState({
        showResults: true, showWarning: false, requiredAverage: String(results.required), currentAverage: String(results.average)
      });

      this.attemptLog();
    }

    attemptLog() {
      if (this.first) {
        fetch('/api/log', { method: 'get' })
          .then(() => { this.first = false; return true; })
          .catch(() => { this.first = false; });
      }
    }

    handleSubmit(e: React.FormEvent<Element>) {
      e.preventDefault();
      this.displayResults();
    }

    render() {
      const {
        examGrade, examPercent, examWeight, showResults, requiredAverage, currentAverage
      } = this.state;
      const headerStyle: React.CSSProperties = this.state.inputs.length >= 3 ? { position: 'absolute', alignSelf: 'flex-start', padding: '150px' } : {};
      return (
        <div className="grade-index-wrapper">
          <Navigation />
          <h1 style={headerStyle}>MaxAverage</h1>
          <div className="grade-index-container">
            <div id="containerHeader">
              <Nav variant="pills" defaultActiveKey="home">
                <Nav.Item>
                  <Nav.Link eventKey="home">Class 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">+</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div id="containerBody">
              <div className="grade-index-titles">
                <h3>Name</h3>
                <h3>Mark</h3>
                <h3>Weight</h3>
              </div>
              <Form ref={this.formRef as React.RefObject<any>} onSubmit={(e:React.FormEvent) => this.handleSubmit(e)}>
                <div className="grade-index-form-rows">
                  {this.state.inputs.map((elm:rowState) => (<GradeIndexRow key={elm.id} id={elm.id} name={elm.name} mark={elm.mark} weight={elm.weight} handleChange={this.handleGradeChange} handleRemove={() => this.handleRemove(elm.id)} />))}
                </div>
                <div className="action-buttons">
                  <Button variant="outline-primary" onClick={() => this.newRow()}>Add Grade</Button>
                  <Button variant="outline-warning" onClick={() => this.resetForm()}>Reset Form</Button>
                </div>
                <hr />
                <div>
                  <GradeIndexConversion examGrade={examGrade} examPercent={examPercent} examWeight={examWeight} handleChange={this.handleConversionChange} />
                </div>
                <div className="submit-row">
                  <Button type="submit" variant="outline-success">Calculate</Button>
                </div>
              </Form>
            </div>
          </div>
          {showResults && <ResultsBox requiredAverage={requiredAverage} currentAverage={currentAverage} courseMark={examPercent} />}
          {this.state.showWarning && <WarningBox />}
        </div>
      );
    }
}
