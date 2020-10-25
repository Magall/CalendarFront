<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <router-link class="nav-link" to="/departments/Insert">
                  Inserir <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/departments/Delete">
                  Excluir <span class="sr-only">(current)</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
