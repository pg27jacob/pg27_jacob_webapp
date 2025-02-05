<script>
    import ChildComponent from './ChildComponent.vue'

    export default {
        name: 'ParentComponent',
        components: {
            ChildComponent
        },
        data() {
            return {
                parentMessage: "Hello From Parent"
            }
        },
        methods: {
            handleCustomEvent(dataFromChild) {
                this.parentMessage = dataFromChild;
            }
        }
    }
</script>

<template>
    <div>
        <h2>Parent Data; {{ parentMessage }}</h2>
        <child-component :someProp="parentMesssage" @customEvent="handleCustomEvent" />
    </div>
</template>

<style>

</style>