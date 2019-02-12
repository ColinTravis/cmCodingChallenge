<template>
    <div class="card">
        <a :href=gitRepo.url><h1 style="text-transform: capitalize;">{{gitRepo.name}}</h1></a>
        <p>{{gitRepo.author}}</p>
        <p>Stars: {{gitRepo.stars}}</p>
        <p>Description: {{gitRepo.description}}</p>
    </div>
</template>

<script>
    export default {
        name: "repoCard",
        props: ['gitRepo', 'gitData']
    }
</script>

<style scoped>

</style>