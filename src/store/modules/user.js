import { constantRouterMap } from "@/router/module";
const user = {
  state: {
    info: {},
    roles: constantRouterMap
  },

  mutations: {
    SET_INFO(state, info) {
      state.info = info;
    },
    SET_ROLES(state, roles) {
      state.roles = roles;
    },
    REMOVE_ROLES(state) {
      state.roles = [];
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      return Promise.resolve();
    },
    // 登出
    LogOut({ commit }) {
      return new Promise(resolve => {
        commit("REMOVE_ROLES");

        resolve();
      });
    },
    // 获取用户信息
    GetUserInfo({ commit }) {
      return Promise.resolve();
    }
  }
};
export default user;
