export const state = () => ({
  counter: {
    estate: 3,
    duchy: 0,
    province: 0,
    curse: 0
  }
})

export const mutations = {
  initCounter(state) {
    state.counter = {
      estate: 3,
      duchy: 0,
      province: 0,
      curse: 0
    }
  },
  incrementEstate(state) {
    state.counter.estate++
  },
  decrementEstate(state) {
    if (state.counter.estate >= 1) state.counter.estate--
  },
  incrementDuchy(state) {
    state.counter.duchy++
  },
  decrementDuchy(state) {
    if (state.counter.duchy >= 1) state.counter.duchy--
  },
  incrementProvince(state) {
    state.counter.province++
  },
  decrementProvince(state) {
    if (state.counter.province >= 1) state.counter.province--
  },
  incrementCurse(state) {
    state.counter.curse++
  },
  decrementCurse(state) {
    if (state.counter.curse >= 1) state.counter.curse--
  }
}

export const actions = {
  initCounter(context) {
    context.commit('initCounter')
  },
  incrementCounter(context, type) {
    switch (type) {
      case 'estate':
        context.commit('incrementEstate')
        break
      case 'duchy':
        context.commit('incrementDuchy')
        break
      case 'province':
        context.commit('incrementProvince')
        break
      case 'curse':
        context.commit('incrementCurse')
        break
      default:
        console.error('undefined type:', type)
    }
  },
  decrementCounter(context, type) {
    switch (type) {
      case 'estate':
        context.commit('decrementEstate')
        break
      case 'duchy':
        context.commit('decrementDuchy')
        break
      case 'province':
        context.commit('decrementProvince')
        break
      case 'curse':
        context.commit('decrementCurse')
        break
      default:
        console.error('undefined type:', type)
    }
  }
}
