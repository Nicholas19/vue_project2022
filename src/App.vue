<template>
  <div></div>
  <nav><router-link to="/">Home</router-link> |</nav>
  <router-view />
</template>

<style>
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

aside,
nav,
footer,
header,
section {
  display: block;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  overflow: hidden;
  flex: 1 0 auto;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  width: auto;
  max-width: 100%;

  height: auto;
}
.container {
  width: 100%;
  max-width: 1650px;
  padding: 0 15px;
  margin: 0 auto;
}
.title {
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  margin-bottom: 43px;
}
</style>
