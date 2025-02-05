<script>
    export default {
        name: 'ChildComponent',
        props: {
            someProp: {
            type: String,
            required: true
        }
    },
    methods: {
        sendToParent(){
            this.$emit('customEvent', 'Hello Parent, I am your Child')
        }
    }
 }   
</script>

<template>
    <div>
        <p>Child Reveived: {{ someProp }}</p>
        <button @click="sendToParent">Send Event to Parent</button>
    </div>
</template>

<style>

</style>