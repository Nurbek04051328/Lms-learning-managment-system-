<template>
  <div class="flex min-h-screen">

    <aside class="w-64 border-r">
      Sidebar
    </aside>

    <div class="flex-1 flex flex-col">

      <header class="h-16 border-b">
        Header
      </header>

      <main class="flex-1 p-5">
        <RouterView />
      </main>

    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>