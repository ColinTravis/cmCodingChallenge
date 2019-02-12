<template>
    <section>
        <div class="about_wrapper container">
                <div class="col-md-12">
                    <h1> Details of the Mission at Hand:</h1>
                    <ul>
                        <li>Fetch GitHub trending repositories from the following URL —
                            <a href="https://github-trending-api.now.sh/repositories">https://github-trending-api.now.sh/repositories</a>
                        </li>
                        <li>Display the results on the page including the repo name, description, and stars count</li>
                        <li>Add the ability to sort by stars count (most to least)</li>
                        <li>Feel free to use any frameworks of choice (or just use vanilla JavaScript)</li>
                        <li>You should only use HTML, CSS, and JavaScript</li>
                    </ul>
                </div>
            </div>
    </section>
</template>

<script>
    export default {
        name: "about",
        head: {
            title: 'About'
        },
    }
</script>

<style scoped>

</style>