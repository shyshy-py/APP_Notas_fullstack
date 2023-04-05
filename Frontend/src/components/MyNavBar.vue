<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-black text-white">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-4 mt-lg-0 text-center">
          <img class="nav-logo mx-auto" src="@/assets/logodark.png" alt="" />
        </a>
      
        <!-- Left links -->
        <ul style="font-size: x-large" class="navbar-nav me-auto mb-4 mb-lg-4">
          <li class="nav-item">
            <router-link to="/home">
              <a class="btn btn-transparent btn-nav nav-link text-white mr-4">Inicio</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/notas">
              <a class="btn btn-transparent btn-nav nav-link text-white mr-4">Tus Notas</a>
            </router-link>
          </li>
        </ul>
      
        <!-- Right links -->
        <div class="d-flex justify-content-end align-items-center">
          <div class="order-last">
            <router-link to="/login">
            <button  class="btn btn-sm btn-secondary ms-3">
              <i class="fas fa-sign-out-alt fa-sm"></i>
              Login
            </button>
            </router-link>
          </div>
        </div>
      </div>
      
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>
