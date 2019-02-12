<template>
    <section>
        <div class="container">
            <div class="intro_container row">
                <div class="text-center col-md-12 align-self-center">
                    <span class="intro_emoji">📃 💻 🔥</span>
                    <h1 class="intro_title">This Small App Loads a List of Trending Github Repos!</h1>


                    <nuxt-link to="/repolist">
                        <button class="filter_button">Load Those In!</button>
                    </nuxt-link>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

    export default {
        name: "home",
        head: {
            title: 'Home'
        },
    }

</script>

<style>

</style>
