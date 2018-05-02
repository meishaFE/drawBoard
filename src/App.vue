<template>
    <div id="app">
        <MsDrawBoard @save="handleSave"></MsDrawBoard>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MsDrawBoard from './DrawBoard.vue';

@Component({
    components: { MsDrawBoard }
})
export default class App extends Vue {
    isInitDrawBoard: boolean = true;

    handleSave(): void {}
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

    text-align: center;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
