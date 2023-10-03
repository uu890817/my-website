<template>
    <div class="box"></div>
    <div class="navbar animate__animated animate__bounceInDown">
        <!-- <div class="logo">
            <img src="@/assets/Yu.svg" alt="Logo" />
        </div> -->
        <div class="site-name">

            <span><router-link class="routerSiteName" to="/" style="font-weight: bold;">Yu's Website</router-link></span>


        </div>
        <ul>
            <!-- <li><a href="#">Home</a></li> -->
            <li>
                <p class="navBarLink">
                    <RouterLink to="/project" style="font-weight: bold;vertical-align:top;">
                        <n-icon style="vertical-align:sub;">
                            <StarOutline />
                        </n-icon>精選專案
                    </RouterLink>
                </p>
            </li>
            <li>
                <a href="https://github.com/uu890817">
                    <p class="navBarLink" style="vertical-align:top;">
                        <n-icon style="vertical-align:top;">
                            <ExitOutline />
                        </n-icon>我的Github
                    </p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { NIcon } from "naive-ui";
import { ExitOutline, StarOutline } from "@vicons/ionicons5";
</script>
<style>
@media (max-width: 980px) {
    .box {
        width: 100%;
        height: 75px;
    }

    .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        height: 55px;
        border: 1px solid hsl(0, 0%, 10%);
        /* border-radius: 100px; */
        background-color: rgba(121, 177, 255, 0.504);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        padding: 0 20px;
        z-index: 1000;
    }

    .logo img {
        height: 55px;
        margin-right: 10px;
    }

    .site-name {
        padding-left: 0px;
        font-size: 20px;
        font-weight: bold;
        margin-right: auto;
        transition: all 0.2s;
    }

    .site-name:hover {
        padding-left: 30px;
        font-size: 20px;
        font-weight: bold;
        margin-right: auto;
        color: coral;
        transition: all 0.2s;
    }

    .navbar ul {
        list-style: none;
        padding-right: 40px;
        margin: 0;
        display: flex;
    }

    .navbar li {
        margin-left: 20px;
        font-size: 12px;

    }


}

@media (min-width: 980px) {
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
        margin-right: 10px;
    }

    .site-name {
        padding-left: 50px;
        font-size: 24px;
        font-weight: bold;
        margin-right: auto;
        transition: all 0.2s;
    }

    .site-name:hover {
        padding-left: 50px;
        font-size: 24px;
        font-weight: bold;
        margin-right: auto;
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

}



.navBarLink {
    font-size: large;
    font-weight: bold;
}

a,
.navBarLink {
    text-decoration: none;
    transition: all 0.2s;
    text-decoration: none;
}

a:hover,
.navBarLink:hover {
    text-decoration: none;
    color: rgb(231, 203, 192);
    transition: all 0.2s;
    text-decoration: none;
}

.router-link-active {
    color: rgb(143, 213, 228);
}
</style>
  