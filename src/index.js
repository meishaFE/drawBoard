import DrawBoard from './DrawBoard.vue';

const install = function(Vue, opts = {}) {
    Vue.component(DrawBoard.name, DrawBoard);
};

const version = '0.2.0';

export { DrawBoard, install, version };
export default { DrawBoard, install, version };
