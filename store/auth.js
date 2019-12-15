export const state = () => ({
  authUser: 'No user'
})

export const mutations = {
  login(state, user) {
    state.authUser = user
  }
}
