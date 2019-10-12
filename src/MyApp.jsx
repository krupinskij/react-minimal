import React from 'react'
import AppTitle from './AppTitle';

const generateArray = (n) => { return Array.from(Array(n), (e,i)=>i+1) };

const MyApp = () => (
  <div>
    <AppTitle />
    <p>Bundle size: 91 bytes, Load time of the bundle: 44 ms, Last commit SHA1: b6347b74590b7816a799cf0c5322fef5fc54aa66</p>
  </div>
)

export default MyApp