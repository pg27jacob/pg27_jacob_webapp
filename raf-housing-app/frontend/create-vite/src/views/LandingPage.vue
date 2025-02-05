<template>
    <div class="landing-page">
        <h1>Welcome to Raf Housing, uh oh</h1>
        <p>This is thee Landing Page</p>

        <leaderboard-summary />

        <task-list />

        <parent-component />

    </div>
</template>

<script>
    import LeaderboardSummary from '../components/LeaderboardSummary.vue'
    import TaskList from '../components/TaskList.vue'
    import ParentComponent from '../components/ParentComponent.vue'


    export default {
        name: 'LandingPage',
        components: {
            LeaderboardSummary,
            TaskList,
            ParentComponent
        }
    }
</script>

<style scoped>
    .landing-page {
        text-align: center;
        margin-top: 20px;
    }
</style>