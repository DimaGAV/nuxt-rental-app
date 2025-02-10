<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>
useServerHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
    },
  ],
});
</script>
