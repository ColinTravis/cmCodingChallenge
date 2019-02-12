<template>
    <section>
        <div class="">
            <ul class="">
                <li v-for="(repo, key) in repos" :key="key">
                    <h1>{{repo.name}}</h1>
                    <p>{{repo.author}}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        async asyncData({app}) {
            const {data} = await app.$axios.get("https://github-trending-api.now.sh/repositories")

            return {repos: data}
        }
    }
</script>

<style>

</style>
