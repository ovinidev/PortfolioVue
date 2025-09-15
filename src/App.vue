<script setup lang="ts">
  import Link from './components/Link.vue'
  import Logo from './components/Logo.vue'
  import { TECHNOLOGIES } from './constants/technologies'
  import VueWriter from 'vue-writer'

  // onMounted(() => {
  //   driverService.drive();
  // });
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-start space-y-14 py-14 text-slate-50"
    style="background-color: #042905"
  >
    <header
      id="header"
      class="flex h-44 w-44 flex-col items-center justify-between"
    >
      <VueWriter
        id="name"
        class="text-slate-50"
        :array="['Vinícius Medeiros']"
        :iterations="1"
      />

      <img
        id="image"
        class="h-36 rounded-full"
        alt="vini profile photo"
        src="https://github.com/ovinidev.png"
      />
    </header>

    <section
      id="content-1"
      class="flex w-full flex-col items-start space-y-4 px-8 sm:w-[40rem] lg:w-[60rem]"
    >
      <p>
        Hello, my name is Vinícius, I’m 23 years old and I’ve been working as a
        frontend developer for over 4 years.
      </p>
      <p>
        My main technologies today are React, Next.js, and TypeScript, but I’m
        currently studying Vue.
      </p>
      <p>
        I've worked with several styling technologies such as Styled Components,
        Stitches, Sass, etc. Today I’m working with Chakra UI and Tailwind.
      </p>
      <p>
        I'm currently a Software Engineer III at
        <Link link="https://www.linkedin.com/company/stone-co" name="Stone." />
      </p>
      <p>
        I'm also a programming instructor at
        <Link link="https://www.inclus.com.br/index.html" name="Inclus." />
        A philanthropic initiative established in my city 20 years ago, which
        offers several courses in the field of technology.
      </p>
      <p>
        I'm constantly evolving and always looking to take on new challenges.
      </p>
    </section>

    <footer class="flex flex-col items-center space-y-6">
      <div id="techs" class="flex flex-wrap items-center gap-3 px-8">
        <Logo
          v-for="tech in TECHNOLOGIES"
          :key="tech.alt"
          :alt="tech.alt"
          :src="tech.src"
        />
      </div>

      <div id="social" class="text-secondary flex items-center space-x-4">
        <Link
          link="httEps://www.linkedin.com/in/vinimedeiros13"
          name="LinkedIn"
        />
        <Link link="https://github.com/ovinidev" name="Github" />
      </div>
    </footer>
  </main>
</template>
