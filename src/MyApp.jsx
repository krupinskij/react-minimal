import React from 'react'
import AppTitle from './AppTitle';

const generateArray = (n) => { return Array.from(Array(n), (e,i)=>i+1) };

const generateRandomArray = (n) => { return Array.from(Array(n), (e)=>Math.floor(Math.random()*25)+1) };

const arr1 = [2, 56, 23, 88, 17, 4];

const MyApp = () => (
  <div>
    <AppTitle />
    <p>Bundle size: 91 bytes, Load time of the bundle: 44 ms, Last commit SHA1: b6347b74590b7816a799cf0c5322fef5fc54aa66</p>
    <p>{ generateArray(13).toString() }</p>
    <p>{ generateRandomArray(15).toString() }</p>
    <p>{ arr1.filter(x => x>15).toString() }</p>
  </div>
)

export default MyApp