'use strict'

const store = require('../store')

// Sign UP SUCCESS AND FAILURE MESSAGING ________________________
const getGoalsSuccess = (data) => {
  console.log('Get goals was successful')
}

const createGoalSuccess = (data) => {
  console.log('Create goal was successful')
}

module.exports = {
  getGoalsSuccess,
  createGoalSuccess
}
