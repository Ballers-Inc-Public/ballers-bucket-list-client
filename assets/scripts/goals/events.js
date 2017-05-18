'use strict'
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// Pull Goal List___________________
const onGetGoals = function () {
// API request for index all
  api.getGoals()
  .then(ui.getGoalsSuccess)
  .catch(ui.Failure)
}

// On Create Goal
const onCreateGoal = function (event) {
  event.preventDefault()
  $('.alert').hide()
  if (store.user === undefined) {
    // //console.log('Not signed In')
    return
  }
  // //console.log('Sign out run')
  const userId = store.user.id
  const data = getFormFields(this)
  if (data.goal.title === '') {
    $('#add-goal-failure-alert').show()
    $('#add-goal-failure-message').text('You need to add a name to your goal')
    return
  }
  data.goal.status = 'Not Started'
  //console.log(data)

  api.createGoal(data)
    .then(onGetGoals)
    .then(ui.createGoalSuccess)
    .catch(ui.Failure)
}
// On Update goal___________________
const onUpdateGoal = function (event) {
  event.preventDefault()
  $('.alert').hide()
  // //console.log('Changing password run')
  const data = getFormFields(this)
  data.goal.status = $('#goal-status-select').text()
  //console.log(data)
  data.goal.id = $('#modify-target-record').text()

  //console.log(data)
  // checking if the title/status fields are populted
  if (
    data.goal.title === $('#title-' + data.goal.id).text() && data.goal.status === $('#status-' + data.goal.id).text()) {
// TODO need to add error message here, waiting on a spot in HTML
    $('#mod-goal-failure-alert').show()
    $('#mod-goal-failure-message').text('You need to make a change to your goal to update it.')
    return
  }

  api.updateGoal(data)
    .then(ui.updateGoalSucess)
    .then(onGetGoals)
    .catch(ui.failure)
}

// On Delete Goal
const onDeleteGoal = function (event) {
  event.preventDefault()
  // HOW DOES THE FUNCTION GET THE ID OF THE GOAL
  const id = $(event.target).parents('tr').attr('data-id')
  //console.log(id)
  api.deleteGoal(id)
    .then(ui.deleteGoalSuccess)
    .then(onGetGoals)
    .catch(ui.failure)
}

const goalStatusSetState = function (event) {
  event.preventDefault()
  $('#goal-status-select').text(event.currentTarget.text)
}

const onLoadUpdateForm = function (event) {
  event.preventDefault()
  $('.alert').hide()
  const id = $(event.target).parents('tr').attr('data-id')
  //console.log(event)
  $('#modify-target-record').text(id)
  $('#modify-goal-title').val($('#title-' + id).text())
  $('#goal-status-select').text($('#status-' + id).text())
  $('.help-block-modify').text('')
  $('#modify-goal').slideDown()
  $('#change-password').slideUp()
}

// HANDLER TO ASSIGN AUTHORIZATION FUNCTIONS TO OBJECTS___________________
const addHandlers = () => {
  $('#add-goal').on('submit', onCreateGoal)
  $('#modify-goal').on('submit', onUpdateGoal)
  $('.status-select').on('click', goalStatusSetState)
  $('#update-cancel').on('click', function () {
    $('.alert').hide()
    $('#modify-goal').slideToggle()
  })
  $(document).on('click', '.delete-button', onDeleteGoal)
  $(document).on('click', '.modify-button', onLoadUpdateForm)
}

module.exports = {
  addHandlers,
  onDeleteGoal,
  onUpdateGoal,
  onCreateGoal,
  goalStatusSetState,
  onGetGoals
}
