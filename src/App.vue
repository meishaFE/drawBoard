<template>
  <div id="app">
      <DrawBoard @init="handleInit"></DrawBoard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DrawBoard from './DrawBoard.vue';

@Component({
    data() {
        return {
            isInitDrawBoard: true
        };
    },
    components: {
        DrawBoard
    },
    methods: {
        handleInit(): void {
            console.log(arguments);
        }
    },
    created() {
        console.log(1);
        console.log(DrawBoard);
    }
})
export default class App extends Vue {}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
