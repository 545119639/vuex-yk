let Vue;

class Store {
  constructor(options) {
    let {
      state = {},
      getters = {},
      mutations = {},
      actions = {},
      modules = {},
    } = options;

    for (let key in modules) {
      state = Object.assign(state, modules[key].state);
      getters = Object.assign(getters, modules[key].getters);
      mutations = Object.assign(mutations, modules[key].mutations);
      actions = Object.assign(actions, modules[key].actions);
    }

    //state响应式
    this.vm = new Vue({
      data: {
        state: state,
      },
    });

    //getters
    this.getters = {};
    Object.keys(getters).forEach((gettersName) => {
      Object.defineProperty(this.getters, gettersName, {
        get: () => {
          return getters[gettersName](this.state);
        },
      });
    });

    //mutations
    this.mutations = {};
    Object.keys(mutations).forEach((mutationsName) => {
      this.mutations[mutationsName] = (arg) => {
        mutations[mutationsName](this.state, arg);
      };
    });

    //actions
    this.actions = {};
    Object.keys(actions).forEach((actionsName) => {
      this.actions[actionsName] = (arg) => {
        actions[actionsName](this, arg);
      };
    });
  }

  get state() {
    return this.vm.state;
  }

  commit = (method, arg) => {
    this.mutations[method](arg);
  };

  dispatch(method, arg) {
    this.actions[method](arg);
  }
}

let install = (_Vue) => {
  Vue = _Vue;
  _Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store; //判断是父组件
      } else {
        this.$store = this.$parent && this.$parent.$store; //判断是子组件
      }
    },
  });
};

let vuex = {
  Store,
  install,
};

export default vuex;
