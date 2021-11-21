<template>
  <div id="about">
    <Header :headerClass="headerClass" :headerSubtitle="headerSubtitle" :aboutLink="aboutLink" />
    <div class="container">
      <p>“Pantone Político” é um projeto concebido inicialmente para o Instagram. Iniciado durante a pandemia do coronavírus no Brasil, pretende dar visibilidade aos principais acontecimentos do período informando sobre a situação do país,mergulhado em uma quádrupla pandemia (sanitária, política, econômica e social). A série é um registro da memória gráfica da política brasileira, na ordem cronológica dos fatos, e contribui de forma criativa, com seu papel social de informar.</p>

      <p>Pelo fato da comunicação bolsonarista ter utilizado estratégias de disseminação de Fake news para diminuir a gravidade do Covid-19, via redes sociais, referindo-se ao coronavírus como se fosse uma “gripezinha”, a população foi muito prejudicada. Sobretudo os mais vulneráveis, que muitas vezes não têm acesso aos veículos de comunicação confiáveis e se informam no whatsapp, Instagram, Facebook e Youtube.</p>

      <p>Desde o dia 7 de maio de 2020, o Pantone Político publica diariamente no Instagram as 10 principais notícias de até 10 veículos de comunicação. Devido à velocidade e ao volume de acontecimentos diários, o projeto desenvolveu uma versão streaming, atualizada 24 horas, 7 dias por semana. Para tanto, foi desenvolvido um algoritmo que extrai, sem edição humana, as notícias mais tuitadas e compartilhadas por alguns serviços de comunicação, acerca dos temas abordados pelo projeto. Os perfis dos veículos varridos pelo projeto são: @folha, @uol, @estadao, @estadaopolitica, @midianinja, @elpais_brasil, @JornalOGlobo, @TheInterceptBr, @canalmeio, @CNNBrasil.</p>

      <p>A partir do momento em que utilizamos o Twitter como fonte da notícia, assumimos a participação política dos usuários desta rede e seu o caráter colaborativo no engajamento e na distribuição dos acontecimentos em tempo real. Nesse sentido, o projeto se insere dentro do projeto do <a href="/">Calendário Dissidente</a> como mais uma narrativa visual dissidente.</p>

      <h2>Escalas tonais</h2>

      <p>O Pantone político, joga luz (e cor) no apocalipse político e pandêmico de 2020, da memória política brasileira e do obscurantismo do governo Bolsonaro. Por meio da metalinguagem, a edição diária do projeto propõe um jogo semântico entre o factual e a estética da cultura visual das redes. Os títulos das notícias, pílulas tipográficas, são deslocados para cards sequenciais, dispostos em tonalidades cromáticas apropriadas da escala de cores Pantone – referência estética para se falar de cor no mundo do design, da moda e da comunicação. Essas notícias, “embelezadas”, congeladas e plasmadas nos cards coloridos têm também como objetivo arquivar as notícias deste período nebuloso.</p>

      <p>#pantonepolítico #designativista #política #quarentena #design #brasil #forabolsonaro</p>

    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'about-pantone',
  metaInfo: {
    title: 'Pantone político',
    meta: [
      {
        'name': 'description',
        'content': 'O Pantone político é um projeto que joga luz (e cor) ao apocalipse político e pandêmico de 2020.'
      },
      {
        'property': 'og:description',
        'content': 'O Pantone político é um projeto que joga luz (e cor) ao apocalipse político e pandêmico de 2020.'
      },
      {
        'property': 'twitter:description',
        'content': 'O Pantone político é um projeto que joga luz (e cor) ao apocalipse político e pandêmico de 2020.'
      },
      {
        'property': 'og:title',
        'content': 'Pantone político'
      },
      {
        'property': 'twitter:title',
        'content': 'Pantone político'
      },
      {
        'property': 'og:image',
        'content': 'https://calendariodissidente.fau.usp.br/abertura-pantone.png'
      },
      {
        'property': 'twitter:image',
        'content': 'https://calendariodissidente.fau.usp.br/abertura-pantone.png'
      },
      {
        'property': 'og:url',
        'content': 'https://calendariodissidente.fau.usp.br/pantone-sobre'
      }
    ]
  },
  components: {
    Header
  },
  data () {
    return {
      headerClass: 'pantone',
      headerSubtitle: 'Pantone político',
      aboutLink: 'pantone-sobre'
    }
  }
}
</script>

<style lang="scss" scoped>
  #about {
    min-height: 60vh;

    p,
    h2 {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }

    h2 {
      font-size: $font-20;
    }

    a {
      color: $black;
      text-decoration: underline;
    }

    @media screen and (max-width: 48rem) {
      h2 {
        font-size: $font-18;
      }
    }

    @media screen and (max-width: 36rem) {
      p,
      h2 {
        width: 100%;
      }
    }
  }
</style>
