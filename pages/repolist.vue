<template>
    <section>
        <div class="container repo_list">
            <div class="col-md-12 repo_sort row">

                <button class="filter_button" v-on:click="sortOrder = 'date'">By Appearance</button>
                <div v-if="sortOrder === 'starsDesc'" class="ml-3">
                    <button class="filter_button" v-on:click="sortOrder = 'starsAsc'">Most Stars</button>
                </div>
                <div v-else class="ml-3">
                    <button class="filter_button" v-on:click="sortOrder = 'starsDesc'">Least Stars</button>
                </div>
            </div>
            <repo-card v-for="(repo, key) in sort(sortOrder)" :key="`repo-item-${key}`" :git-repo="repo"
                       :git-data="repos"/>
        </div>
    </section>
</template>

<script>
    import RepoCard from "../components/repoCard";

    export default {
        name: "repoList",
        components: {RepoCard},
        async asyncData({app}) {
            const {data} = await app.$axios.get(process.env.baseUrl)

            return {
                baseUrl: process.env.BASE_URL,
                repos: data,
                sortOrder: "date"
            }
        },
        computed: {
            orderedListOptions: function () {
                return {
                    "date": () => {
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
        },
        head: {
            title: 'Repo List'
        }
    }

</script>

<style>

</style>
