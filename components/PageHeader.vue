<template>
    <header class="navbar-container">
        <nav class="navbar navbar-expand-md ">
            <nuxt-link to="/" class="navbar-brand">
            <img id="logo" src="~/assets/images/logos/CT_logo.svg" width="65" height="65" class="d-inline-block align-top"
            alt="Logo"><span class="brand-text">Colin Travis</span>
            </nuxt-link>

            <div class="" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <nuxt-link to="about" class="nav-link">About</nuxt-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "PageHeader"
    }
</script>

<style scoped>

</style>