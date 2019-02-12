<template>
    <div class="card container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <a :href=gitRepo.url target="_blank" class="card-title"><h1>{{gitRepo.name}}</h1></a>
                <p class="card-author">brought to you by: <span class="card-author name">{{gitRepo.author}}</span></p>
            </div>
            <div class="col-md-6">
                <p class="card-stars">⭐: <span class="card-stars starsVal">{{gitRepo.stars}}</span></p>
                <p class="card-description">Description: <span class="card-description descriptionVal">{{gitRepo.description}}</span></p>
            </div>
        </div>
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