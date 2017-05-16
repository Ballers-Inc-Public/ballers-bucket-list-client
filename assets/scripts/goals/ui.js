'use strict'

const store = require('../store')

// Sign UP SUCCESS AND FAILURE MESSAGING ________________________
const getGoalsSuccess = (data) => {
  console.log('Get goals was successful')
}

const createGoalSuccess = (data) => {
  console.log('Create goal was successful')
}

const updateGoalSucess = function () {
  console.log('You updated a goal...whoop')
}

const deleteGoalSuccess = function () {
  console.log('you deleted a goal...YAY...IGuess!')
}

const failure = function () {
  console.log("That didn't work...")
}

module.exports = {
  getGoalsSuccess,
  createGoalSuccess,
  updateGoalSucess,
  deleteGoalSuccess,
  failure
}
