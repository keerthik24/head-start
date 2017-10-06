import { Map } from 'immutable'
import { expect } from 'chai'
import reducer, { initialState } from 'state/reducers/user'
import * as user from 'state/actions/user'

describe('user reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(void(0), {})).to.eql(initialState)
  })

  it(`should handle ${ user.VERIFY_USER_SESSION }`, () => {
    expect(reducer(initialState, user.verifyUserSession())).to.eql(
      initialState.merge(Map({
        verifyingSession: true,
      }))
    )
  })

  it(`should handle ${ user.VERIFY_USER_SESSION_SUCCESS }`, () => {
    const userInfo = { token: 'some-token' }
    expect(reducer(initialState, user.verifyUserSessionSuccess(userInfo))).to.eql(
      initialState.merge(Map({
        verifyingSession: false,
        userInfo,
      }))
    )
  })

  it(`should handle ${ user.VERIFY_USER_SESSION_ERROR }`, () => {
    expect(reducer(initialState, user.verifyUserSessionError())).to.eql(
      initialState.merge(Map({
        verifyingSession: false,
        requireLogin: true,
      }))
    )
  })
})
