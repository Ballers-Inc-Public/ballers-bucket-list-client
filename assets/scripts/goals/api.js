'use strict'

const config = require('../config.js')
const store = require('../store')

// GET request to the API to retrieve all goals for the current user
const getGoals = function () {
  return $.ajax({
    url: config.apiOrigin + '/goals',
    method: 'GET',
    beforeSend: function () {
      $('loader').show()
    },
    complete: function () {
      $('.loader').hide()
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// POST request to the API to create a goal for the current user
const createGoal = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/goals',
    method: 'POST',
    beforeSend: function () {
      $('loader').show()
    },
    complete: function () {
      $('.loader').hide()
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const updateGoal = function (data) {
  return $.ajax({
    method: 'PATCH',
    beforeSend: function () {
      $('loader').show()
    },
    complete: function () {
      $('.loader').hide()
    },
    url: config.apiOrigin + '/goals/' + data.goal.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteGoal = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/goals/' + id,
    beforeSend: function () {
      $('loader').show()
    },
    complete: function () {
      $('.loader').hide()
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  deleteGoal,
  updateGoal,
  getGoals,
  createGoal

}
