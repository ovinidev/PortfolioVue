<script setup lang="ts">
import Link from "./components/Link.vue";
import Logo from "./components/Logo.vue";
import { TECHNOLOGIES } from "./constants/technologies";
// @ts-ignore
import VueWriter from "vue-writer";
import { driver } from "driver.js";
import "./styles.css";
import { onMounted } from "vue";

const driverObj = driver({
  showProgress: false,
  allowClose: false,
  popoverClass: "driverjs-theme",
  steps: [
    {
      element: "#name",
      popover: {
        title: "Nome",
        description:
          "Aqui possui meu nome utilizando a biblioteca vue-writer para animação de digitação.",
        side: "left",
        align: "start",
      },
    },
    {
      element: "#image",
      popover: {
        title: "Foto",
        description: "Foto utilizada nas redes sociais.",
        side: "left",
        align: "start",
      },
    },
    {
      element: "#content-1",
      popover: {
        title: "Descrição",
        description: "Aqui uma breve descrição sobre mim.",
        side: "right",
        align: "start",
      },
    },
    {
      element: "#techs",
      popover: {
        title: "Tecnologias",
        description: "Tecnologias que utilizo no meu dia a dia.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "#social",
      popover: {
        title: "Social",
        description: "Links para minhas principais redes sociais.",
        side: "right",
        align: "center",
      },
    },
  ],
});

onMounted(() => {
  driverObj.drive();
});
</script>

<template>
  <main
    className="flex min-h-screen flex-col items-center justify-start space-y-14 bg-background py-14 text-slate-50"
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
        Olá, meu nome é Vinícius, tenho 21 anos e sou desenvolvedor frontend a
        mais de 2 anos.
      </p>
      <p>
        Minhas principais tecnologias hoje são o React, Next e typescript,
        porém, estou estudando Vue e, em breve, Angular.
      </p>
      <p>
        Já trabalhei com várias tecnologias de estilização como styled
        components, stitches, sass, etc. Hoje estou trabalhando bastante com
        Chakra UI e Tailwind.
      </p>
      <p>
        Atualmente sou desenvolvedor frontend pleno na
        <Link
          link="https://www.linkedin.com/company/dataside-data-ia"
          name="Dataside."
        />
      </p>
      <p>
        Sou professor de desenvolvimento frontend na
        <Link link="https://www.inclus.com.br/index.html" name="Inclus." /> Uma
        iniciativa filantrópica consolidada em minha cidade há 10 anos, na qual
        oferta alguns cursos na área de tecnologia.
      </p>
      <p>
        Estou em constante evolução e buscando sempre me aventurar por novos
        desafios.
      </p>
      <p>
        Confira alguns vídeos técnicos meus no
        <Link link="https://www.youtube.com/@ovinidev/videos" name="youtube." />
      </p>
    </section>

    <div className="flex flex-col items-center space-y-6">
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
        <Link
          link="https://www.youtube.com/channel/UCpnNH4Q4gWA_3GB4LNn8dhQ"
          name="Youtube"
        />
      </div>
    </div>
  </main>
</template>
