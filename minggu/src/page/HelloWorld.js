import React, { Component } from 'react';
import { thisExpression } from '@babel/types';

class HelloWorld extends Component {
    state = {
        nama: 'Code',
        age: '16',
        gender: 'Cowo',
        number: 0
    }
    componentDidMount() {
        this.setState({
            nama: 'Halooooooooooooooooooooooooo',
            age: 20,
            gender: 'cowo'
        })
    }
    handleAddValue() {
        this.setState({
            number:
                this.state.number + 1
        })
    }
    handleMinValue() {
        if (this.state.number > 0) {
            this.setState({
                number:
                    this.state.number - 1
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Hellow World {this.state.nama} My age is {this.state.age} My Gender is {this.state.gender}</h1>

                <div>
                    <h1>{this.state.number}</h1>
                    <h1>{this.state.number}</h1>
                    <button onClick={() => this.handleAddValue()}>Tambahkan<i>1</i></button>
                    <button onClick={() => this.handleMinValue()}>Kurangkan<i>1</i></button>
                </div>
            </div>
        )
    }
}
export default HelloWorld;