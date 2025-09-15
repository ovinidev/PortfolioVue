<script setup lang="ts">
import Link from "./components/Link.vue";
import Logo from "./components/Logo.vue";
import { TECHNOLOGIES } from "./constants/technologies";
import VueWriter from "vue-writer";

// onMounted(() => {
//   driverService.drive();
// });
</script>

<template>
  <main
    className="flex bg-green-950 min-h-screen flex-col items-center justify-start space-y-14 bg-background py-14 text-slate-50"
  >
    <header
      id="header"
      className="flex h-44 w-44 flex-col items-center justify-between"
    >
      <VueWriter
        id="name"
        class="text-slate-50"
        :array="['Vinícius Medeiros']"
        :iterations="1"
      />

      <img
        id="image"
        className="h-36 rounded-full"
        alt="vini profile photo"
        src="https://github.com/ovinidev.png"
      />
    </header>

    <section
      id="content-1"
      className="flex w-full flex-col items-start space-y-4 px-8 sm:w-[40rem] lg:w-[60rem]"
    >
      <p>
        Olá, meu nome é Vinícius, tenho 23 anos e sou desenvolvedor frontend a
        mais de 4 anos.
      </p>
      <p>
        Minhas principais tecnologias hoje são o React, next e typescript,
        porém, estou estudando Vue.
      </p>
      <p>
        Já trabalhei com várias tecnologias de estilização como styled
        components, stitches, sass, etc. Hoje estou trabalhando com Chakra UI e
        Tailwind.
      </p>
      <p>
        Atualmente sou Software Engineer III na
        <Link link="https://www.linkedin.com/company/stone-co" name="Stone." />
      </p>
      <p>
        Sou professor de programação na
        <Link link="https://www.inclus.com.br/index.html" name="Inclus." />
        Uma iniciativa filantrópica consolidada em minha cidade há 20 anos, na
        qual oferta alguns cursos na área de tecnologia.
      </p>
      <p>
        Estou em constante evolução e buscando sempre me aventurar por novos
        desafios.
      </p>
    </section>

    <footer className="flex flex-col items-center space-y-6">
      <div id="techs" className="flex flex-wrap items-center gap-3 px-8">
        <Logo
          v-for="tech in TECHNOLOGIES"
          :key="tech.alt"
          :alt="tech.alt"
          :src="tech.src"
        />
      </div>

      <div id="social" className="text-secondary flex items-center space-x-4">
        <Link
          link="httEps://www.linkedin.com/in/vinimedeiros13"
          name="LinkedIn"
        />
        <Link link="https://github.com/ovinidev" name="Github" />
      </div>
    </footer>
  </main>
</template>
