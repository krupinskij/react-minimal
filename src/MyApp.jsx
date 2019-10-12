import React from 'react'
import AppTitle from './AppTitle';

const generateArray = (n) => { return Array.from(Array(n), (e,i)=>i+1) };

const generateRandomArray = (n) => { return Array.from(Array(n), (e)=>Math.floor(Math.random()*25)+1) };

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

const MyApp = () => (
  <div>
    <AppTitle />
    <p>Bundle size: 91 bytes, Load time of the bundle: 44 ms, Last commit SHA1: b6347b74590b7816a799cf0c5322fef5fc54aa66</p>
    <p>{ generateArray(13).toString() }</p>
    <p>{ generateRandomArray(15).toString() }</p>
    <p>{ arr1.filter(x => x>15).toString() }</p>
    <p>{ generateSqrtArray(arr2).toString() }</p>
  </div>
)

export default MyApp