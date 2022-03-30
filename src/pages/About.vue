<template>
  <div id="about">
    <Header :headerClass="headerClass" :headerSubtitle="headerSubtitle" :aboutLink="aboutLink" />
    <div class="container">
      <p>
        <router-link to="/about">About</router-link>
      </p>

      <p>[texto completo estará em breve disponível no Capítulo Calendário dissidente: memória gráfica]</p>
      <p>O Calendário Dissidente é um projeto que discute o design de comunicação das redes e a memória gráfica dos principais acontecimentos sociopolíticos do Brasil desde a posse do Presidente Bolsonaro em 1º de janeiro de 2019. A discussão é feita pelo mapeamento das estéticas das imagens no banco de dados na rede social Instagram. Neste site, apresentam-se os resultados parciais da pesquisa de Doutorado da designer gráfico Didiana Prata, no curso de Pós-Graduação em Design da FAUUSP.</p>
      <p>O experimento gráfico problematiza questões relacionadas ao arquivamento das imagens nas redes sociais e o seu vocabulário estético. Assume que a participação online e diária de artistas, designers, coletivos e do público em geral na produção de linguagem visual e de objetos visuais constituem uma fração significativa da memória gráfica<sup><a href="#nota-1">1</a></sup> brasileira contemporânea – fadadas ao esquecimento devido ao fluxo de superprodução e veiculação de imagens das redes às quais pertencem.</p>
      <p>O projeto se propõe a catalogar e arquivar parte dessa imageria a partir da metodologia de visualização de dados, analisando as narrativas a partir de alguns hashtags temáticos. Para tanto, utilizou-se de inteligência artificial e aprendizagem de máquina para a extração, classificação e arquivamento dessas imagens.</p>
      <p>Considera-se que as hashtags estabelecidas pela autora, como filtro de busca, são representativas das dissidências e das manifestações coletivas e poéticas de todos nós frente ao momento atual da nossa história. Essas apresentam novos paradigmas para o estudo do design de comunicação da era pós internet.</p>

      <h2>Calendário streaming</h2>
      <p>O site captura, indexa e publica diariamente as três imagens mais curtidas dos #designativista, #desenhospelademocracia, #mariellepresente, #coleraalegria desde 1 de janeiro de 2019, primeiro dia da gestão do governo. As #foragarimpoforacovid e #projetemos foram adicionadas ao projeto em junho de 2020 pois essas representam a voz de outros ativismos que ganharam força durante o início da pandemia. A partir de uma varredura algorítmica, rastreia os principais temas relacionados às imagens e oferece ao usuário os filtros temáticos relacionados, sendo possível assim verificar quais os assuntos foram mais ilustrados.</p>

      <h2>Imagens em destaque</h2>
      <p>Todas as imagens publicadas estão creditadas a partir do nome do usuário que a publicou no Instagram (sendo possível acessar a página do autor). Como várias imagens são viralizadas e repetidas adotou-se o critério de creditar a primeira publicação referente àquela imagem.</p>

      <h2>Desemaranhar o tempo das redes</h2>
      <p>O diferencial do Calendário Dissidente é justamente sua função temporal. Ela passa a reger a lógica de leitura dessas narrativas imagéticas, apresentadas cronologicamente. A visualização das postagens no feed do Instagram ou Facebook seguem a lógica algorítmica, que embaralha as sequências temporais das postagens em nome do acesso à “visibilidade” dos fatos/postagens dos seguidores com os quais o usuário mais interagiu na rede ou das imagens mais curtidas pelo seu ciclo de amigos. Também não existe a possibilidade de uma busca de uma imagem por data, ou por assunto nos aplicativos.</p>
      <p>Nesse contexto de precariedade de arquivamento das “memórias compartilhadas” e de desconhecimento do que de fato é arquivado pelas empresas que detêm os dados das nuvens das redes sociais, a criação de novas estratégias de  arquivamento e categorização da produção de imagens com o auxílio de Inteligências Artificiais para fins editoriais, curatoriais e acadêmicos nos parece relevante.</p>
      <p>A imageria do Calendário também representa dados tratados, organizados e classificados em um servidor da USP com a finalidade de uma investigação no campo da cultura visual digital. E uma independência das grandes nuvens. Estas armazenam também os dados que estão no repositório do Calendário Dissidente, porém, organizam e manipulam esses dados em uma outra lógica.</p>
      <p>Esperamos que o Calendário possa ser uma ferramenta para designers, artistas, sociólogos, cientistas de dados e jornalistas acessarem as imagens desse período histórico.</p>

      <h2>Política de dados: o calendário interrompido</h2>
      <p>O Instagram adotou regras mais severas e restringe o uso da sua API ao acesso a um número limitado de imagens. Com o aumento de caso de fake News durante a campanha de reeleição de Donald Trump em 2020, a empresa alterou drasticamente as políticas de dados, restringindo o download de imagens por softwares autorizados para tal função. Esta medida teve um impacto muito grande na operação de extração de dados do projeto, impossibilitando o rastreamento das principais imagens do dia desde o dia 16 de novembro de 2020. Ou seja, a memória gráfica do calendário foi interrompida nessa data. [ver texto completo no capítulo 8]</p>

      <h2>Projeto interdisciplinar</h2>
      <p>Essa pesquisa tem a orientação da professora da FAU e artista multimídia Giselle Beiguelman e está sendo desenvolvida e implementada durante a residência de Prata no Centro de Inteligência Artificial do Inova USP, sob coordenação do Prof. Dr. Fabio Cozman. Participam da programação do site e do desenvolvimento dos classificadores de imagens os alunos e cientistas de dados Gustavo Poletti e Vinicius Akira Imaizumi e Vinicius Ariel dos Santos (POLI USP) e Marcelo Villela Gusmão (programador independente). Utilizou-se de softwares livres para a captura e programação das funcionalidades do calendário, assim como no processo de treinamento de máquina e na criação dos rotuladores de imagens.</p>

      <!-- O projeto também integra as pesquisas do Grupo de Pesquisa CNPq/FAUUSP Estéticas da Memória no Século 21 e é apoiado pelo <a href="http://outrosurbanismos.fau.usp.br/" target="_blank" rel="noopener">Laboratório para OUTROS Urbanismos</a>. </p> -->
      <p id="nota-1"><small><sup>1</sup> A expressão memória gráfica circunscreve uma linha de estudos, conforme assinalam Priscila Lena Farias e Marcos Braga, que busca compreender a importância e o valor de artefatos visuais, em particular impressos efêmeros, na criação de um sentido de identidade local.  (Braga & Farias, 2018)</small></p>
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
