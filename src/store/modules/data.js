const state = {

  dummyData: [

  ]
};

const getters = {

  allDummyData: (state) => state.dummyData,
};

const actions = {

};

const mutations = {

  setFurniture: (state, dummyData) => (state.dummyData = dummyData),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
