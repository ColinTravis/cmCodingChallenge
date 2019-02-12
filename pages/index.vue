<template>
    <section>
        <div class="">
            <ul class="">
                <a v-on:click="sortOrder = 'A-Z'" >A-Z</a><br>
                <a v-on:click="sortOrder = 'Z-A'" >Z-A</a><br>
                <a v-on:click="sortOrder = 'starsAsc'" >Stars ^</a><br>
                <a v-on:click="sortOrder = 'starsDesc'" >Stars down</a>
                <li v-for="(repo, key) in sort(sortOrder)" :key="key">
                    <h1 style="text-transform: capitalize;">{{repo.name}}</h1>
                    <p>{{repo.author}}</p>
                    <p>Stars: {{repo.stars}}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        async asyncData({app}) {
            const {data} = await app.$axios.get("https://github-trending-api.now.sh/repositories")

            return {
                repos: data,
                sortOrder: "A-Z"
            }
        },
        computed: {
            orderedListOptions: function () {
                return {
                    "A-Z": () => {
                        return this.repos.slice().sort().reverse()
                    },
                    "Z-A": () => {
                        return this.repos.slice().sort()
                    },
                    "starsAsc": () => {
                        return this.repos.slice().sort((a,b) => {return b.stars - a.stars});
                    },
                    "starsDesc": () => {
                        return this.repos.slice().sort((a,b) => {return b.stars - a.stars}).reverse();
                    },
                }
            },
        },
        methods: {
            sort: function (sortOrder) {
                return this.orderedListOptions[sortOrder]()
            },
        },
        head () {
            return {
                title: "Repos",
                meta: [
                    { hid: 'description', name: 'description' },
                ]
            }
        }
    }

</script>

<style>

</style>
