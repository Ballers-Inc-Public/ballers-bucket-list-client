'use strict'

const store = require('../store')
const showGoals = require('../templates/goal.handlebars')

const limitGoalsToCurrentUser = function (data) {
  const userOnlyData = []
  data.forEach((e) => { if (e.editable) { userOnlyData.push(e) } })
  return userOnlyData
}

const getGoalsSuccess = (data) => {
  console.log('Get goals was successful')
  console.log('Your data looks likes', data)
  const dataForHandlebars = {}
  dataForHandlebars.goals = limitGoalsToCurrentUser(data.goals)
  console.log('goals limited to user', dataForHandlebars)
  $('#display-goals').html('<tr class="table-header"><td>Title</td><td>Status</td><td>Modify</td><td>Delete</td></tr>')
  $('#display-goals').append(showGoals(dataForHandlebars))
}

const createGoalSuccess = (data) => {
  console.log('Create goal was successful')
  console.log('Your data looks likes', data)
  $('#add-goal').trigger('reset')
}

const updateGoalSucess = function (data) {
  console.log('You updated a goal...whoop')
  $('#modify-target-record').text('')
  $('#modify-goal').trigger('reset')
  $('#modify-goal').slideToggle()
}

const deleteGoalSuccess = function () {
  console.log('you deleted a goal...YAY...IGuess!')
}

const failure = function (error) {
  console.log(error)
  console.log("That didn't work...")
}

module.exports = {
  limitGoalsToCurrentUser,
  deleteGoalSuccess,
  failure,
  updateGoalSucess,
  getGoalsSuccess,
  createGoalSuccess
}
