'use strict'

const config = require('../config.js')
const store = require('../store')

const updateGoal = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigins.production + '/goals/' + data.id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: data
  })
}

const deleteGoal = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigins.production + '/goals/' + id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    }
  })
}
module.exports = {

  signUp,
  signIn,
  signOut,
  changePassword,
  deleteGoal,
  updateGoal

}
