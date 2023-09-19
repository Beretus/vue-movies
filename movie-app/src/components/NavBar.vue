<script setup></script>

<template>
  <header>
    <nav>
      <div class="logo">
        <img src="../assets/base.css" alt="page-logo" />
      </div>
      <ul class="links">
        <li class="link">Homepage</li>
        <li class="link">Movies</li>
        <li class="link">Series</li>
        <li class="link">My list</li>
      </ul>
      <input type="text" class="search-input" placeholder="Search Movies..." />
      <div class="buttons">
        <button class="signUp">Sign up</button>
        <button class="singIn">Sign in</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #535353;
  margin-bottom: 1rem;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgb(139, 139, 139);
  height: 4rem;
  background-color: #535353;
  width: 1600px;
  padding: 0 2rem 0 2rem;
}

ul.links {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

ul li.link {
  list-style: none;
  padding: 0 10px 0 10px;
}

ul li.link:hover {
  color: rgb(99, 0, 99);
  cursor: pointer;
}

input {
  background-color: #535353;
  color: rgb(139, 139, 139);
  border: 1px solid rgb(59, 59, 59);
  padding: 5px;
  border-radius: 10px;
  /* width: 300px; */
}

.signUp {
  background-color: #535353;
  color: rgb(139, 139, 139);
  border: none;
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
}

.singIn {
  background-color: rgb(99, 0, 99);
  border: 1px solid rgb(99, 0, 99);
  color: white;
  padding: 10px;
  border-radius: 20px;
  /* width: 100px; */
}
</style>
