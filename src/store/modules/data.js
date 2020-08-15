const state = {
  // your list of furniture
  furniture: [
    { id: 1, name: "Kanapa Sydney", dim1: "2,25m", dim2: "1,45m x 1,95m" },
    { id: 2, name: "Kanapa Alex", dim1: "1,95m", dim2: "1,45m x 1,95m" },
    { id: 3, name: "Blah Alex", dim1: "1,95m", dim2: "1,45m x 1,95m" },
  ],
};

const getters = {
  // getter for your furniture
  allFurniture: (state) => state.furniture,
};

const actions = {
  // have a getter here that would call an API to return your furniture objects. Here is an example using axios
  //   async fetchFurniture({ commit }) {
  //     const { data }  = await http.get(
  //       `/furniture`
  //     );
  //     commit("setFurniture", data);
  //   }
};

const mutations = {
  // set your furniture after you have created it
  setFurniture: (state, furniture) => (state.furniture = furniture),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
