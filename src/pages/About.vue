<template>
  <div id="about">
    <Header :headerClass="headerClass" :headerSubtitle="headerSubtitle" :aboutLink="aboutLink" />
    <div class="container">
      <p>
        <router-link to="/about">About</router-link>
      </p>
      <p>O Calendário Dissidente é um projeto que discute a memória gráfica dos principais acontecimentos sociopolíticos do Brasil desde a posse do presidente Bolsonaro em 1º de janeiro de 2019. A discussão é feita pelo mapeamento das estéticas das imagens no banco de dados na rede social Instagram.</p>
      <p>Neste site, apresentam-se os resultados parciais da pesquisa de doutorado da designer gráfico Didiana Prata, no curso de Pós-Graduação em Design da FAUUSP, sob orientação da Profa. Dra. Giselle Beiguelman e desenvolvida na residência de Prata no Centro de Inteligência Artificial do Inova USP, sob coordenação do Prof. Dr. Fabio Cozman.</p>
      <p>O Calendário Dissidente problematiza questões relacionadas ao arquivamento das imagens nas redes sociais e o seu vocabulário estético. Assume que a participação online e diária de artistas, designers, coletivos e do público em geral na produção de linguagem visual e de objetos visuais constitui uma fração significativa da memória gráfica<sup><a href="#nota-1">1</a></sup> brasileira contemporânea.</p>
      <p>Fadadas ao esquecimento, devido ao fluxo de superprodução e veiculação nas redes às quais pertencem, essas imagens são aqui catalogadas e arquivadas, a partir da análise de algumas hashtags.</p>
      <p>Para tanto, utilizaram-se recursos de inteligência artificial e aprendizagem de máquina no processo de classificação e arquivamento das imagens coletadas. Considera-se que as hashtags estabelecidas pela autora, como filtro de busca, são representativas das dissidências e das manifestações coletivas e poéticas de todos nós frente ao momento atual da nossa história. Essas imagens apresentam novos paradigmas para o estudo do design de comunicação da era pós-internet.</p>
      <h2>Primeira etapa: calendário streaming</h2>
      <p>O site captura, indexa e publica diariamente as três imagens mais curtidas em #designativista, #desenhospelademocracia, #mariellepresente, #coleraalegria.</p>
      <p>A partir de uma varredura algorítmica, rastreia os principais temas relacionados às imagens e oferece ao usuário os filtros temáticos correspondentes, sendo possível assim verificar quais assuntos foram mais ilustrados.</p>
      <h2>Imagens em destaque</h2>
      <p>Todas as imagens publicadas estão creditadas a partir do nome do usuário que a publicou no Instagram (sendo possível acessar a página do autor). Como várias imagens são viralizadas e repetidas, adotou-se o critério de creditar a primeira publicação referente àquela imagem.</p>
      <h2>Segunda etapa: uso de inteligência artificial</h2>
      <p>A segunda fase do projeto apresentará uma curadoria de imagens selecionadas a partir de seis categorias estéticas preestabelecidas pela autora: factuais; ilustração digital; ilustração manual; tipografia digital; tipografia vernacular e apropriação. Utilizando inteligência artificial e aprendizagem de máquina na criação de classificadores de imagens, o site publicará narrativas visuais organizadas a partir de categorias estéticas, possibilitando assim a apreciação das diversas linguagens visuais das imagens dissidentes das redes. Esta etapa do projeto está prevista para ir ao ar em junho de 2020.</p>
      <h2>Equipe interdisciplinar</h2>
      <p>Participam da programação do site e do desenvolvimento dos classificadores de imagens a equipe do Centro de Inteligência Artificial do Inova USP, composta pelos alunos e cientistas de dados Gustavo Polleti e Vinicius Akira Imaizumi (Poli-USP), Gustavo Braga (Insper) e pelo programador independente Marcelo Villela Gusmão. Utilizaram-se softwares livres para a captura e programação das funcionalidades do calendário, assim como no processo de treinamento de máquina e na criação dos rotuladores de imagens. O projeto também integra as pesquisas do Grupo de Pesquisa CNPq/FAUUSP Estéticas da Memória no Século 21 e é apoiado pelo <a href="http://outrosurbanismos.fau.usp.br/" target="_blank" rel="noopener">Laboratório para OUTROS Urbanismos</a>. </p>
      <p id="nota-1"><small><sup>1</sup> A expressão memória gráfica circunscreve uma linha de estudos, conforme assinalam Priscila Lena Farias e Marcos Braga, que “busca compreender a importância e o valor de artefatos visuais, em particular impressos efêmeros, na criação de um sentido de identidade local”.</small></p>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'about',
  metaInfo: {
    title: 'Cultura visual + memória política brasileira',
    meta: [
      {
        'name': 'description',
        'content': 'Acesse as narrativas visuais sobre os principais acontecimentos sociopolíticos do Brasil, a partir de hashtags do Instagram.'
      },
      {
        'property': 'og:description',
        'content': 'Acesse as narrativas visuais sobre os principais acontecimentos sociopolíticos do Brasil, a partir de hashtags do Instagram.'
      },
      {
        'property': 'twitter:description',
        'content': 'Acesse as narrativas visuais sobre os principais acontecimentos sociopolíticos do Brasil, a partir de hashtags do Instagram.'
      },
      {
        'property': 'og:title',
        'content': 'Cultura visual + memória política brasileira'
      },
      {
        'property': 'twitter:title',
        'content': 'Cultura visual + memória política brasileira'
      },
      {
        'property': 'og:image',
        'content': 'https://calendariodissidente.fau.usp.br/abertura-cultura.png'
      },
      {
        'property': 'twitter:image',
        'content': 'https://calendariodissidente.fau.usp.br/abertura-cultura.png'
      },
      {
        'property': 'og:url',
        'content': 'https://calendariodissidente.fau.usp.br/sobre'
      }
    ]
  },
  components: {
    Header
  },
  data () {
    return {
      headerClass: 'cultura',
      headerSubtitle: 'Cultura visual e memória <br>política brasileira',
      aboutLink: 'sobre'
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
