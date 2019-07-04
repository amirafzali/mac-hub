/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../../Styling/GradeIndex.css';
import GradeIndexElement from './GradeIndexRow';
import GradeIndexConversion from './GradeIndexConversion';
import Navigation from '../Other/Navigation';

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
    examLetter: string,
    examWeight: string
}

export default class GradeIndex extends React.Component<{}, State> {
    private id = 0;

    constructor() {
      super({});
      this.state = {
        inputs: [{
          id: this.getId(), name: 'Quiz 1', mark: '85', weight: '40', default: true
        }],
        examLetter: 'A+',
        examPercent: '90',
        examWeight: '60'
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
    }

    handleConversionChange(e: React.ChangeEvent<HTMLInputElement>) {
      switch (e.target.id) {
        case ("examLetter"): this.setState({ examLetter: e.target.value }); break;
        case ("examPercent"): this.setState({ examPercent: e.target.value }); break;
        case ("examWeight"): this.setState({ examWeight: e.target.value }); break;
        default: break;
      }
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
          id: this.getId(), name: 'Quiz 1', mark: '85', weight: '40', default: true
        }]
      });
    }

    render() {
      const { examLetter, examPercent, examWeight } = this.state;
      console.log(this.state);
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
            <div className="gradeIndexForm">
              {this.state.inputs.map((elm:rowState) => (<GradeIndexElement default={elm.default} key={elm.id} id={elm.id} name={elm.name} mark={elm.mark} weight={elm.weight} handleChange={this.handleGradeChange} />))}
            </div>
            <div className="actionButtons">
              <p className="actionClick" onClick={() => this.newRow()}>Add Another Grade</p>
              <p className="actionClick" onClick={() => this.resetForm()}>Reset Form</p>
            </div>
            <hr />
            <div>
              <GradeIndexConversion examLetter={examLetter} examPercent={examPercent} examWeight={examWeight} handleChange={this.handleConversionChange} />
            </div>
          </div>
        </div>
      );
    }
}
