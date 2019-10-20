import React from 'react'
import AppTitle from './AppTitle';
import Printer from './Printer';

const generateArray = (n) => { return Array.from(Array(n), (e, i) => i + 1) };

const generateArrayMod = (a,b) => {
  if(a<0 || a>b) return [];
  return Array.from(Array(b-a + 1), (e, i) => i + a)
};

const generateRandomArray = (n) => { return Array.from(Array(n), (e) => Math.floor(Math.random() * 25) + 1) };

const arr1 = [2, 56, 23, 88, 17, 4];

const arr2 = [2, 5, 8, 10];
const generateSqrtArray = (arr) => { return arr.map(x => Math.sqrt(x)) };

const data = [
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta Poznańska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]


class MyApp extends React.Component {

  takeAllStudents = () => {
    const students = [];
    data.forEach(lecture => {
      lecture.students.forEach(student => {
        students.push(student);
      })
    });

    this.setState({
      data: students
    })
  }

  sortStudents = () => {
    const students = [];
    data.forEach(lecture => {
      lecture.students.forEach(student => {
        students.push(student);
      })
    });

    students.sort((s1, s2) => { return s1.name > s2.name })

    this.setState({
      data: students
    })
  }

  takeOldStudents = () => {
    const students = [];
    data.forEach(lecture => {
      if (lecture.active) lecture.students.forEach(student => {
        if (student.age > 20) students.push(student);
      })
    });

    this.setState({
      data: students
    })
  }

  inputChange = () => {

    const l = event.target.name;
    
    this.setState({
      [l]: +event.target.value
    })
    console.log("Value changed " + l + ": " + event.target.value)
  }

  checkKey = () => {
    let charCode = event.keyCode;

    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  incRenders = () => {
    const rC = this.state.renderCount;

    //this.setState({
    // renderCount: rC+1
    //})
    //console.log(rC+1);
  }

  startRendering = () => {
    this.renderCount++;
    console.time("render - " + this.renderCount);
    
  }

  endRendering = () => {
    console.timeEnd("render - " + this.renderCount);
  }

  renderCount = 0;

  state = {
    data: [],
    a: null,
    b: null,

  }

  render() {
    
    return (
      <div>
        <AppTitle />
        {this.startRendering()}
        <p>Bundle size: 91 bytes, Load time of the bundle: 44 ms, Last commit SHA1: b6347b74590b7816a799cf0c5322fef5fc54aa66</p>
        <p>{generateArray(13).toString()}</p>
        <p>{generateRandomArray(15).toString()}</p>
        <p>{arr1.filter(x => x > 15).toString()}</p>
        <p>{generateSqrtArray(arr2).toString()}</p>

        <button onClick={this.takeAllStudents}>All students</button>
        <button onClick={this.sortStudents}>Sort students</button>
        <button onClick={this.takeOldStudents}>Old students</button>

        <Printer data={this.state.data} />

        <label htmlFor="inputA">Liczba a: </label>
        <input type="number" name="a" id="inputA" onKeyPress={this.checkKey} onChange={this.inputChange} /> <br/>
        <label htmlFor="inputB">Liczba b: </label>
        <input type="number" name="b" id="inputB" onKeyPress={this.checkKey} onChange={this.inputChange} />

        <p>{generateArrayMod(this.state.a, this.state.b).toString()}</p>
        {this.endRendering()}
      </div>
    )
  }
}

export default MyApp