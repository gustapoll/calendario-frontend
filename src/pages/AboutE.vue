<template>
  <div id="about">
    <Header :headerClass="headerClass" :headerSubtitle="headerSubtitle" :aboutLink="aboutLink" />
    <div class="container">
      <h2>Dissident Calendar: Graphic memory of Brazilian politics</h2>

      <p>The Dissident Calendar is a project that discusses the graphic memory of the main socio-political events in Brazil since January 1st, 2019, the first day of Jair Bolsonaro as president of Brazil. The discussion is made by mapping the aesthetics of the images in the database on the social network Instagram.</p>

      <p>The website illustrates the partial results of my PhD research during the Postgraduate Course in Design at FAUUSP, under the guidance of Professor Giselle Beiguelman, PhD in Social History, and is it has been developed during my residence at the Artificial Intelligence Center at Inova USP under the coordination of Professor Fabio Cozman, PhD in Robotics.</p><p>Through data visualization and a communication design curatorship, the Dissident Calendar intends to discuss the aesthetic vocabulary of these collective manifestations.</p>

      <p>Faded by oblivion, due to the flow of overproduction of images on Instagram, these images are cataloged and archived, based on the analysis of some hashtags and the use of new methodologies. Artificial intelligence and machine learning resources have been used to classify millions of images.</p>

      <p>This project also assumes that the daily and online participation of artists, designers, collectives and the general public in the production of visual language and visual objects constitutes a significant fraction of contemporary Brazilian graphic memory<sup><a href="#note-1">1</a></sup>.</p>

      <p>It is considered that the hashtags established by the author, as a search filter, are representative of the dissences as well as the collective and poetic manifestations of all of us in the face of the current moment in our history. These images present new paradigms for the study of communication design in the post-internet era.</p>

      <h2>First step:streaming calendar</h2>

      <p>The website extracts, indexes and publishes daily the six most liked images in #designativista, #desenhospelademocracia, #mariellepresente, #coleraalegria. Using an algorithmic scan, it tracks the main themes related to the images and offers the user the corresponding thematic filters, making it possible to verify which subjects were most illustrated.</p>

      <h2>Featured images</h2>

      <p>All image information (caption and other key-words) is extracted and published, including the credit from the name of the user who posted them on Instagram (provided we are able to access the author's page). As several images are viralized and repeated, the criterion of crediting the first publication referring to that image has been adopted. </p>

      <h2>Second stage: use of artificial intelligence</h2>

      <p>The second phase of the project will present a curatorship of images selected from six aesthetic categories pre-established by the author: factual; digital illustration; manual illustration; digital typography; vernacular typography and appropriation.</p>

      <p>Using artificial intelligence and machine learning in the creation of image classifiers, the website will publish visual narratives organized from aesthetic categories, thus enabling the appreciation of the different visual languages of the dissident images in the networks. This stage of the project is scheduled to go live in June 2020.</p>

      <p id="note-1"><small><sup>1</sup> The term graphic memory circumscribes a line of studies, as pointed out by Priscila Lena Farias and Marcos Braga, which “seeks to understand the importance and value of visual artifacts, in particular ephemeral prints, in creating a sense of local identity”.</small></p>

      <h2>About the author:</h2>

      <p>Didiana Prata is a graphic designer and image curator. Currently she is a PhD candidate at the Post Graduation Program in Design at FAU-USP and Resident Researcher at the Center for Artificial Intelligence (C4AI) at InovaUSP, Universidade de São Paulo, Brazil. Her research focuses on graphic design in different interfaces, database aesthetics and the use of AI as creative and curatorial strategy. Didiana has also been working as a multidisciplinary visual artist an designer since 1990 and runs her own studio, Prata Design working on curatorial and graphic design projects and exhibitions of visual culture, education, architecture and urban anthropology. She is also member of the Research Group of Aesthetics' Memory in the 21st Century and Professor of Design at the Faculty of Visual Arts at FAAP, São Paulo, Brazil. ORCID: <a href="https://orcid.org/0000-0001-6440-3878" target="_blank" rel="noopener">https://orcid.org/0000-0001-6440-3878</a></p>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'aboutE',
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
        'content': 'https://calendariodissidente.fau.usp.br/about'
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
