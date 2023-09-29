<template>
    <div class="box"></div>
    <div class="navbar animate__animated animate__bounceInDown">
        <!-- <div class="logo">
            <img src="@/assets/Yu.svg" alt="Logo" />
        </div> -->
        <div class="site-name">
            <span>Yu's Website</span>
        </div>
        <ul>
            <!-- <li><a href="#">Home</a></li> -->
            <li><a href="#">作品集</a></li>
            <li><a href="https://github.com/uu890817">Github</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
</script>
<style>
.box {
    width: 100%;
    height: 75px;
}

.navbar {
    position: fixed;
    top: 0;
    margin-top: 10px;
    margin-left: 10%;
    width: 80%;
    height: 55px;
    border: 1px solid hsl(0, 0%, 10%);
    border-radius: 100px;
    background-color: rgba(121, 177, 255, 0.504);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    padding: 0 20px;
    z-index: 1000;
}

.logo img {
    height: 55px;
    /* Adjust height as needed */
    margin-right: 10px;
}

.site-name {
    padding-left: 50px;
    font-size: 24px;
    /* Adjust font size as needed */
    font-weight: bold;
    /* Adjust font weight as needed */
    margin-right: auto;
    /* Pushes the logo and site name to the left */
    transition: all 0.2s;
}

.site-name:hover {
    padding-left: 50px;
    font-size: 24px;
    /* Adjust font size as needed */
    font-weight: bold;
    /* Adjust font weight as needed */
    margin-right: auto;
    /* Pushes the logo and site name to the left */
    color: coral;
    transition: all 0.2s;
}

.navbar ul {
    list-style: none;
    padding-right: 50px;
    margin: 0;
    display: flex;
}

.navbar li {
    margin-left: 20px;
}

.navbar a {
    display: block;
    font-size: large;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.2s;
}

.navbar a:hover {
    font-size: large;
    font-weight: bold;
    text-decoration: none;
    color: coral;
    transition: all 0.2s;
}
</style>
  