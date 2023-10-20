<template>
  <n-config-provider :theme="theme">
    <!-- <n-card> 当前操作系统的主题是 {{ osThemeRef }}。 </n-card> -->

    <div class="navBar">
      <NavBar />
    </div>

    <RouterView />



    <n-back-top :right="20" />
  </n-config-provider>
</template>
  
<script setup lang='ts'>
import "animate.css";
import NavBar from "@/components/NavBar.vue";
import { useOsTheme, darkTheme } from "naive-ui";
import { computed } from "vue";

const osThemeRef = useOsTheme();
const theme = computed(() => {
  // return osThemeRef.value === "dark" ? darkTheme : null;
  return osThemeRef.value === "dark" ? darkTheme : darkTheme;
});
</script>
  
<style>
/* Reset CSS */
body,
html,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
button,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  color: #adbac7;
  font-family: arial, "Microsoft JhengHei", "微軟正黑體", sans-serif !important;
}

* {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;

}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
  background-color: #20252d;
}

html,
body,
#app {
  height: 100vh;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

@media (max-width: 1023px) {
  .wrap {
    width: 90%;
    height: 100%;
    margin: auto;
    margin-bottom: 10px;
  }
}

@media (min-width: 1023px) {
  .wrap {

    width: 70%;
    height: 100;
    margin: auto;
    margin-bottom: 10px;

  }
}



.n-icon {
  vertical-align: middle;
}

.n-back-top {
  background: #4a5970;
}

.n-back-top>.n-base-icon {
  color: #b5caec;
}
</style>