<template>
  <div id="about">
    <Header :headerClass="headerClass" :headerSubtitle="headerSubtitle" :aboutLink="aboutLink" />
    <div class="container">
      <p>O “Pantone Político” é um projeto concebido inicialmente para o Instagram. Criado durante o período da pandemia do coronavírus no Brasil, pretende dar visibilidade aos principais fatos, informando ao público das redes sobre a real situação do país – mergulhado em uma quádrupla pandemia (sanitária, política, econômica e social).</p>
      <p>Devido a velocidade e o volume de acontecimentos diários, o projeto desenvolveu uma versão streaming para site, atualizada 24/7 (24 horas, 7 dias por semana). Esta versão sofreu algumas adaptações e a edição passou a ser maquínica, 100% automatizada. Criou-se um algoritmo para extrair as notícias mais tuitadas e compartilhadas dos seguintes veículos: @folha, @uol, @estadao, @estadaopolitica, @midianinja, @elpais_brasil, @JornalOGlobo, @TheInterceptBr, @canalmeio, @CNNBrasil.</p>
      <p>O design set selecionou palavras-chaves vinculadas à Covid e a gestão Bolsonaro. A extração de dados do Twitter se deu a partir de uma autorização do aplicativo para que a pesquisadora tivesse uma API (Interface de Programação da Aplicação) Acadêmica, permitindo o download de um grande volume de dados para fins de pesquisa no campo do design e comunicação, sem fins lucrativos. Esse processo levou algumas semanas mas impulsionou qualitativamente e quantitativamente o projeto a outro patamar de mineração de dados retroativos e em tempo real.</p>
      <p>A partir do momento em que utilizamos o Twitter como fonte da notícia – assumimos a participação política dos usuários desta rede.O caráter colaborativo que a caracteriza, no engajamento e na distribuição dos acontecimentos em tempo real, desse tempo surreal. Como esta versão é isenta da edição humana, as notícias mais tuitadas muitas vezes podem ser mais opinativas, o que confere o caráter dissidente do Pantone Político, aproximando-o do projeto de net art, o Calendariodissidente.fau.usp.br. – um site sobre as principais imagens dissidentes no Instagram – onde a página do Pantone Político também está publicada (calendoriodissidente.fau.usp.br/pantone).</p>

      <h2>Pantone como jogo de linguagem</h2>
      <p>Por meio da metonímia, o projeto propõe um jogo entre o factual e a estética da cultura visual digital. Representa de uma forma original o papel do design de comunicação nas redes. Divulga de forma lúdica, as notícias sobre a pandêmia. Os títulos, pílulas tipográficas, são deslocados para cartões sequenciais, dispostos em tonalidades cromáticas apropriadas da escala de cores Pantone – referência estética para se falar de cor no mundo do design, moda e comunicação. Essas notícias, “embelezadas”, congeladas e plasmadas nos cards coloridos tem também como objetivo arquivar as notícias deste período nebuloso. A série é um registro da memória gráfica da política brasileira, na ordem cronológica dos fatos, e contribui de forma criativa, com seu papel social de informar.</p>

      <h2>Caráter colaborativo e para o grande público</h2>
      <p>Este experimento gráfico faz parte da tese de doutorado de Didiana Prata sobre design dissidente e a cultura do design nas redes, no Curso de Pós-Graduação em Design da FAUUSP.  A realização do site exigiu uma equipe multidisciplinar: um designer gráfico, um web designer desenvolvedor do front end e dois cientistas de dados para a criação de um script próprio com todos os parâmetros para a seleção e extração das notícias. Destaca-se  o caráter colaborativo e experimental do projeto, cujos objetivos extravasam a pesquisa acadêmica.</p>
      <p>O Calendário Dissidente - Pantone Político tem o potencial de alcançar a população em geral, a qualquer usuário da internet e das redes sociais, por meio do design.Os cards também saíram das telas e foram para as ruas, projetados em interfaces urbanas pelo coletivo @projetemos. As notícias coloridas atingiram um público muito além das redes. Desenhado em forma de um calendário, este projeto também dialoga com a memória gráfica e a diversidade do vocabulário estético das narrativas visuais dissidentes apresentadas no Calendário Dissidente: Cultura Visual e Memória Política Brasileira.</p>

      <h2>Créditos</h2>
      <p class="credit">Idealização e Design: Didiana Prata</p>
      <p class="credit">Desenvolvimento: Vinicius Akira Imaizumi e Vinicius Ariel Arruda dos Santos  - Centro de Inteligência Artificial INOVA USP</p>
      <p class="credit">Marcelo Villela Gusmão - programador independente</p>
      <p class="credit">Orientação acadêmica: Giselle Beiguelman - FAUUSP</p>
      <p class="credit">Apoio: FAUUSP e INOVA-USP</p>

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

    .credit {
      margin-bottom: auto;
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
