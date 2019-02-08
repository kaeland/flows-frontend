import _ from 'lodash'
/* 
  Objective: create a function to persist the data in a state array.

  stateArray = [{
    id: 1,
    machine_id: 1,
    round_id: 1,
    data: 23
  }]

  machineRound = {
    11: 23
    // [machin_id][round_id]: [data]
  }

  machine_id: 1 === Temp Sensor
  machine_id: 2 === Flow Sensor
  round_id: 1 === 7am
  round_id: 2 === 11am
  round_id: 3 === 3pm
*/

const objectsMatch = (machineRound, matchKey) => {
  const key = Object.keys(machineRound)[0]
  if (key === matchKey) {
    return true
  } else {
    return false
  }
}

export const parseMachineRounds = (stateArray, machineRound) => {
  // Map state array for specific machineRound instance
    // debugger;
    return stateArray.map((obj) => {
      // If match found, update instance (obj) from stateArray with the data from machineRound
      const { machine_id, round_id } = obj
      const matchKey = `${machine_id}${round_id}`
      if (objectsMatch(machineRound, matchKey)) {
        return Object.assign({}, obj, { data: Object.values(machineRound)[0] })
      } else {
        return obj
      }
      // Return new updated stateArray
    })
} 