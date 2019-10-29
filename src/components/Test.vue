<template>
  <v-container>
    <v-row justify="center">
      <h1>{{ currentAnswers[0][0] }}</h1>
    </v-row>
    <v-row>
      <v-col v-for="(item, index) in currentAnswers[1]" v-bind:key="index">
        <Answers
          v-on:getAnswerFromObject="getAnswer"
          :id="item[2]"
          :imgUrl="item[1]"
          :titre="item[0]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="reset" color="error">RESET</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-progress-linear
        active="active"
        rounded="rounded"
        height="10"
        buffer:100
        :value="100 * currentQuestion / questionSet.length"
        color="light-blue"
      />
      <p>{{ currentQuestion }} / {{ questionSet.length }}</p>
    </v-row>

    <v-container>
      <v-overlay :opacity="0.5" :value="overlay">
        <v-card class="mx-auto">
          <v-card-title justify="center">{{ result[0] }}</v-card-title>
          <v-card-subtitle>{{ result[1] }}</v-card-subtitle>
          <v-btn @click="reset" color="error">RETAKE THE TEST</v-btn>
        </v-card>
      </v-overlay>
    </v-container>
  </v-container>
</template>

<script>
import Answers from "./Answers";
/* eslint-disable */
export default {
  components: {
    Answers,
  },
  data: () => ({
    currentQuestion: 0,
    currentAnswers: [],
    result: [],
    count: 0,
    overlay: false,
    questionSet: [
      [
        ["Favorite landscape?"],[
          ["Ireland","https://photos.marmara.com/ProduitPhoto/IRLATTOU_circuits-irlande-tui.jpg",1],
          ["Tree leaves","https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-1.2.1&w=1000&q=80",2],
          ["Palm","https://www.travelblat.com/wp-content/uploads/2014/07/summer-vacation.jpg",3],
          ["Flowers","https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg",4]
        ]
      ],
      [
        ["What animal would you like to see first ?"],[
          ["Penguin","http://blob-harmony.groupetva.ca/harmony/media/static/filemanager/content/1452661200/655x369-pingouin_1452715089.jpg",1],
          ["Squirrel","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Red_Squirrel_-_Lazienki.JPG/1200px-Red_Squirrel_-_Lazienki.JPG",2],
          ["Butterfly","https://cdn.futura-sciences.com/buildsv6/images/wide1920/b/b/7/bb70a62d85_108302_papillon-toucher-ailes.jpg",3],
          ["Bird", "https://i.ytimg.com/vi/EMe0Z4LCnVY/hqdefault.jpg", 4]
        ]
      ],
      [
        ["What color do you represent ?"],[
          ["Bleu","https://cuirenstock.com/6209-large_default/peau-de-cuir-d-agneau-metallise-bleu.jpg",1],
          ["Orange","https://cdn.pixabay.com/photo/2011/09/14/14/47/orange-9283_960_720.jpg",2],
          ["Vert","https://www.careandcoaching.nl/wp-content/uploads/2017/03/green-leaves-on-green-background.jpg",3],
          ["Rose","https://cdn11.bigcommerce.com/s-19ea7/images/stencil/1280x1280/products/191/501/Teaberry_Rose_Dry_Blusher__70069.1332299622.jpg?c=2&imbypass=on",4]
        ]
      ],
      [
        ["Which flower do you prefer ?"],[
          ["Edelweiss","https://img-3.journaldesfemmes.fr/zSqNG947ybV9QlLEdrRtuXTrNJk=/910x607/smart/68ac12ed12f84f99bc0759fdc408dee2/ccmcms-jdf/10960187.jpg",1],
          ["Tulip","https://media.ooreka.fr/public/image/plant/80/mainImage-source-9412304.jpg",2],
          ["Eglantine","https://steemitimages.com/p/B69zEhWZA8UBY2uvCm2jhayjPd2uZ8oUJxf1rwSUF4uHge5sghauiA52DTD3E796fJ65BvBubUm27W274ePo1PYmuNesLUYxPZLWc2mc?format=match&mode=fit&width=640",3],
          ["Orchid","https://media.ooreka.fr/public/image/orchidee-bienfait-full-12559057.jpg",4]
        ]
      ],
      [
        ["Which place is the most beautiful ?"],[
          ["Moscow","https://www.tripsavvy.com/thmb/FKkmwDSmBbP-P0b9qriggj3EIVw=/3858x2170/smart/filters:no_upscale()/winter-in-moscow--russia--629101330-5b1dd985fa6bcc0036a2e52e.jpg",1],
          ["Pays Basque","https://www.keyweek.com/blog/wp-content/uploads/visiter-pays-basque-hors-saison-biarritz-villa-belza-cover-1.jpg",2],
          ["Thaiti","http://www.nolobike.com/wp-content/uploads/2017/06/conseils-voyage-tahiti-1200x900.jpg",3],
          ["Cappadocia","https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1496699939/hot-air-balloons-festival-cappadocia-turkey-HOTAIR0605.jpg?itok=WZ9CVr-K",4]
        ]
      ],
    [
        ["What is the most delicious fruit ?"],[
          ["Ananas","https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/shutterstock_572083087_3.jpg?itok=813o9KfI",1],
          ["Poire","https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/r69-poire-williams_fotolia.jpg",2],
          ["Pastèque","https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/pasteque_morceaux.jpg?itok=snxfV3VQ",3],
          ["Fraise","https://www.sante-sur-le-net.com/wp-content/uploads/2018/07/fraise-sante.jpg",4]
        ]
      ],
      [
        ["Which quote defines you best ?"],[
          ["Coluche","https://citation-celebre.leparisien.fr/plugin/citation/view/resource/public/img/beautiful-image/generic/68043.png",1],
          ["Sénèque","https://sf1.viepratique.fr/wp-content/uploads/sites/5/2019/01/citation-1-750x410.jpg",2],
          ["Churchill","https://www.defi-ecologique.com/wp-content/uploads/citations-ecologie.jpg",3],
          ["Salomé","http://img.over-blog-kiwi.com/1/58/44/60/20151218/ob_fcc5bc_la-vache-rose-jacques-salome-6.jpg",4]
        ]
      ],
      [
        ["Which quote defines you best ?"],[
          ["Eau","https://10wallpaper.com/wallpaper/medium/1701/Scotland_Highlands_River-Winter_Landscape_HD_Wallpaper_medium.jpg",1],
          ["Terre","https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/a/3/8a3ab16898_106964_source-eau-potable.jpg",2],
          ["Mer","https://i.pinimg.com/originals/61/0b/87/610b874b87156d674a5b4c116f929693.jpg",3],
          ["Cascade","https://www.aeroportvoyage.com/wp-content/uploads/2019/07/eaux-thermales-tabacon-arenal-costa-rica-decouverte.jpg",4]
        ]
      ],
      
    ],
    
    answerSet: [
      ["Winter", "You are a little cold and reserved. If someone dislikes you, you can be scathing, but when you like a person, you give yourself 100%"],
      ["Autumn", "The colors, the falling leaves, the sweet and fragrant flavors ... All this puts you in a melancholic, romantic and dreamy mood."],
      ["Summer", "Dynamic and playful, you are passionate. you are fiery and ardent. And we appreciate you because you are sensitive !"],
      ["Spring", "You dream of a world full of sweetness, small birds and flowers. To be happy, you need harmony.With you, it's the sweetness of life!"]
    ]
  }),
  mounted() {},
  methods: {
    getAnswer(id) {
      if (this.currentQuestion < this.questionSet.length - 1) {
        this.currentQuestion++;
        this.currentAnswers = this.questionSet[this.currentQuestion];
        this.currentAnswers[1] = this.shuffle(this.currentAnswers[1]);
        this.count += id;
        alert(this.count);
      } else {
        this.overlay = true;
        if (this.count < (this.currentQuestion * this.questionSet.length) / 4) {
          this.result = this.answerSet[3];
        } else if (
          this.count >= (this.currentQuestion * this.questionSet.length) / 4 &&
          this.count < (this.currentQuestion * this.questionSet.length) / 2
        ) {
          this.result = this.answerSet[0];
        } else if (
          this.count >= (this.currentQuestion * this.questionSet.length) / 2 &&
          this.count < (this.currentQuestion * 3 * this.questionSet.length) / 4
        ) {
          this.result = this.answerSet[1];
        } else {
          this.result = this.answerSet[2];
        }
      }
    },
    shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    },
    reset() {
      this.currentQuestion = 0;
      this.count = 0;
      this.currentAnswers = this.questionSet[0];
      this.overlay = false;
    }
  },
  created() {
    this.currentAnswers = this.questionSet[this.currentQuestion];
    this.currentAnswers[1] = this.shuffle(this.currentAnswers[1]);
  }
};
</script>