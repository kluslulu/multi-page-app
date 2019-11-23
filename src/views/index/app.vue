<template>
  <div id="nav">
    <a href="christmas.html">Go To Another Page</a>
    <router-view />
  </div>
</template>
<style>
  #nav {
    text-align: center;
  }

  #nav>a {
    display: inline;
    padding: 5px 10px;
  }
</style>
