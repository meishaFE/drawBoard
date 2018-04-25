<template>
  <div id="app">
      <DrawBoard @save="handleSave"></DrawBoard>
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
        handleSave(): void  {
            console.log(arguments);
        }
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
}
</style>
