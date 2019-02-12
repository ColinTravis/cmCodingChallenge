<template>
    <section>
        <div class="container repo_list">
            <div class="repo_sort">
                <a v-on:click="sortOrder = 'A-Z'">Alpha</a><br>
                <a v-on:click="sortOrder = 'starsAsc'">Stars ^</a><br>
                <a v-on:click="sortOrder = 'starsDesc'">Stars down</a>
            </div>
            <repo-card v-for="(repo, key) in sort(sortOrder)" :key="`repo-item-${key}`" :git-repo="repo"
                       :git-data="repos"/>
        </div>
    </section>
</template>

<script>
    import RepoCard from "../components/repoCard";

    export default {
        components: {RepoCard},
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
                        return this.repos.slice().sort();
                    },
                    "starsAsc": () => {
                        return this.repos.slice().sort((a, b) => {
                            return b.stars - a.stars
                        });
                    },
                    "starsDesc": () => {
                        return this.repos.slice().sort((a, b) => {
                            return b.stars - a.stars
                        }).reverse();
                    },
                }
            },
        },

        methods: {
            sort: function (sortOrder) {
                return this.orderedListOptions[sortOrder]()
            },
            head() {
                return {
                    title: "Repos",
                    meta: [
                        {hid: 'description', name: 'description'},
                    ]
                }
            },
        }
    }

</script>

<style>

</style>
