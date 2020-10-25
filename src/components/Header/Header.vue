<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white mb-4"  >
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <router-link class="nav-link" to="/">
            Dashboard <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" to="/dateForm">
            Datas <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/departments/insert">
            Departamentos <span class="sr-only">(current)</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>