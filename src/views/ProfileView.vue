
<template>
  <div class="portfolio">

    <!-- NAVIGATION -->
    <v-app-bar flat color="#211A17" dark>
      <v-toolbar-title class="brand">
        ANPT.
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="d-none d-md-flex">
        <v-btn text small @click="scrollTo('home')">
          Home
        </v-btn>
        <v-btn text small @click="scrollTo('about')">
          About
        </v-btn>
        <v-btn text small @click="scrollTo('hobbies')">
          Hobbies
        </v-btn>
      </div>

      <v-btn text small to="/grade">
        Grade
      </v-btn>

      <v-btn
        rounded
        small
        color="#786046"
        class="ml-2"
        @click="contactDialog = true"
      >
        Contact
      </v-btn>
    </v-app-bar>

    <v-container fluid class="content">

      <!-- HERO -->
      <section id="home" class="hero-section">
        <v-row align="center">

          <!-- PROFILE IMAGE -->
          <v-col cols="12" md="5">
            <div class="portrait-frame">
              <v-img
                :src="profileImage"
                height="340"
                
                position="center top"
                cover
              ></v-img>
            </div>
          </v-col>

          <!-- ABOUT -->
          <v-col cols="12" md="7" id="about">
            <div class="about-content">

              <p class="eyebrow">ABOUT ME</p>

              <h1 class="main-title">
                Hello, I'm
                <span>{{ profile.nickname }}.</span>
              </h1>

              <div class="accent-line"></div>

              <p class="intro">
                I'm {{ profile.fullName }},
                a Computer Science graduate from
                Khon Kaen University.
              </p>

              <p class="description">
                Passionate about Artificial Intelligence,
                programming and technology. I enjoy
                solving problems, learning new things
                and creating practical solutions.
              </p>

              <div class="skills">
                <span
                  v-for="skill in profile.strengths"
                  :key="skill"
                  class="skill-tag"
                >
                  {{ skill }}
                </span>
              </div>

              <v-btn
                outlined
                dark
                color="#D6B98C"
                rounded
                class="mt-6"
                @click="aboutDialog = true"
              >
                More About Me
              </v-btn>

            </div>
          </v-col>
        </v-row>
      </section>

<!-- HOBBIES SECTION -->
<section id="hobbies" class="hobbies-section">

  <v-row align="center">

    <!-- SECTION TITLE -->
    <v-col cols="12" md="3">
      <div class="hobbies-heading">
        <p class="eyebrow">
          HOBBIES &amp; INTERESTS
        </p>

        <h2 class="section-title">
          What I Enjoy.
        </h2>

        <div class="accent-line"></div>
      </div>
    </v-col>

    <!-- MAIN IMAGE -->
    <v-col cols="12" md="4">
      <div
        class="gallery-photo gallery-main"
        @click="openGallery(gallery[0])"
      >
        <v-img
          :src="gallery[0].image"
          height="220"
          cover
        ></v-img>

        <div class="photo-caption">
          <h3>{{ gallery[0].title }}</h3>
          <small>Click to view photo</small>
        </div>
      </div>
    </v-col>

    <!-- SMALL IMAGES -->
    <v-col cols="12" md="5">
      <v-row dense>

        <v-col
          v-for="(item, index) in gallery.slice(1)"
          :key="index"
          cols="6"
        >
          <div
            class="gallery-photo gallery-small"
            @click="openGallery(item)"
          >
            <v-img
              :src="item.image"
              height="140px"
              cover
            ></v-img>

            <div class="photo-caption small-caption">
              {{ item.title }}
            </div>
          </div>
        </v-col>

      </v-row>
    </v-col>

  </v-row>

</section>
  
      <!-- PERSONAL DETAILS -->
      <section class="details-section">
        <v-row>

          <v-col cols="12" md="4">
            <p class="eyebrow">EDUCATION</p>
            <h3>{{ profile.university }}</h3>
            <p>{{ profile.major }}</p>
          </v-col>

          <v-col cols="12" md="4">
            <p class="eyebrow">LIKES &amp; DISLIKES</p>
            <p>Likes: {{ profile.likes }}</p>
            <p>Dislikes: {{ profile.dislikes }}</p>
          </v-col>

          <v-col cols="12" md="4">
            <p class="eyebrow">FAVORITE SPORTS TEAM</p>
            <h3>{{ profile.favoriteTeam }}</h3>
          </v-col>

        </v-row>
      </section>

      <!-- CONTACT BANNER -->
      <section class="contact-section">
        <v-row align="center">

          <v-col cols="12" md="8">
            <h2>Let's Build Something Together.</h2>
            <p>
              Have a project, idea, or opportunity in mind?
              I'd love to hear from you.
            </p>
          </v-col>

          <v-col cols="12" md="4" class="text-md-right">
            <v-btn
              rounded
              large
              color="#89724C"
              dark
              @click="contactDialog = true"
            >
              Get in Touch
            </v-btn>
          </v-col>

        </v-row>
      </section>

    </v-container>

    <!-- ABOUT POPUP -->
    <v-dialog v-model="aboutDialog" max-width="480">
      <v-card class="popup-card">
        <v-card-title>
          About Me
          <v-spacer></v-spacer>
          <v-btn icon dark @click="aboutDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="popup-text">
          <h3>{{ profile.fullName }}</h3>
          <p>Nickname: {{ profile.nickname }}</p>
          <p>University: {{ profile.university }}</p>
          <p>Major: {{ profile.major }}</p>
          <p>
            I enjoy learning new technologies
            and developing useful software solutions.
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>


    
<!-- COFFEE IMAGE POPUP -->
<v-dialog v-model="coffeeDialog" max-width="850">
  <v-card class="popup-card">
    <v-img
      :src="coffeeImage"
      contain
      max-height="650"
    ></v-img>

    <v-card-actions class="pa-4">
      <div>
        <div class="font-weight-bold">
          Coffee &amp; Latte Art
        </div>

        <div class="caption">
          One of my favorite hobbies
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        color="#D6B98C"
        text
        @click="coffeeDialog = false"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>

<!-- GALLERY POPUP -->
<v-dialog v-model="galleryDialog" max-width="850">
  <v-card
    v-if="selectedImage"
    class="popup-card"
  >
    <v-img
      :src="selectedImage.image"
      contain
      max-height="650"
    ></v-img>

    <v-card-actions class="pa-4">
      <span class="font-weight-bold">
        {{ selectedImage.title }}
      </span>

      <v-spacer></v-spacer>

      <v-btn
        text
        color="#D6B98C"
        @click="galleryDialog = false"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>


    <!-- CONTACT POPUP -->
    <v-dialog v-model="contactDialog" max-width="450">
      <v-card class="popup-card pa-3">
        <v-card-title>Contact Me</v-card-title>

        <v-card-text class="popup-text">
          Feel free to get in touch!
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text dark @click="contactDialog = false">
            Cancel
          </v-btn>

          <v-btn color="#89724C" dark @click="sayHello">
            Say Hello
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- SNACKBAR -->
    <v-snackbar v-model="snackbar" :timeout="3000">
      Thank you for visiting my portfolio!
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script>
import profileImage from '@/assets/Profile.jpg'
import coffeeImage from '@/assets/coffee.jpg'
import hobbyImage1 from '@/assets/hobbies/1.jpg'
import hobbyImage2 from '@/assets/hobbies/2.jpg'
import hobbyImage3 from '@/assets/hobbies/3.jpg'
import hobbyImage4 from '@/assets/hobbies/4.jpg'

export default {
  name: 'ProfileView',

  data() {
    return {
      profileImage,
      coffeeImage,

      aboutDialog: false,
      coffeeDialog: false,
      contactDialog: false,
      snackbar: false,
      selectedImage: null,
      galleryDialog: false,
        gallery: [
        {
            title: 'Coffee & Latte Art',
            image: coffeeImage
        },
        {
            title: 'Walk The Dog',
            image: hobbyImage1
        },
        {
            title: 'Afternoon Tea',
            image: hobbyImage2
        },
        {
            title: 'Delivery Hair Cut',
            image: hobbyImage3
        },  {
            title: 'Prep The Meal',
            image: hobbyImage4
        }
        ],

      profile: {
        fullName: 'Anapat Chansong',
        nickname: 'Tae',
        university: 'Khon Kaen University',
        major: 'Computer Science',

        hobbies: [
          'Collector',
          'Travel',
          'Exercise',
          'Latte Art',
          'Hair Design'
        ],

        strengths: [
          'Problem Solving',
          'Programming',
          'Teamwork'
        ],

        likes: 'Air Craft Technology',
        dislikes: 'Price of fuel in Thailand',
        favoriteTeam: 'Tossakan PB clan'
      }
    }
  },

  methods: {
    openGallery(item) {
        console.log('Clicked:', item)
        this.selectedImage = item
        this.galleryDialog = true
    },
    scrollTo(id) {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    },

    sayHello() {
      this.contactDialog = false
      this.snackbar = true
    }
  }
}
</script>


<style scoped>
/* =========================
   MAIN LAYOUT
========================= */

.portfolio {
  background: #211a17;
  color: #ead8c3;
  min-height: 100vh;
}

.content {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 12px 3%;
}

.brand {
  font-family: Georgia, serif;
  font-size: 26px;
  font-weight: bold;
  color: #ead8c3;
}

/* =========================
   HERO / PROFILE
========================= */

.hero-section {
  padding: 12px 0 20px;
}

.portrait-frame {
  background: #352920;
  border-radius: 18px;
  overflow: hidden;
}

.about-content {
  padding: 10px 4%;
}

.eyebrow {
  color: #c9ae80;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 600;
}

.main-title {
  font-family: Georgia, serif;
  font-size: clamp(32px, 3.5vw, 52px);
  font-weight: normal;
  line-height: 1.15;
  color: #f1deca;
}

.main-title span {
  font-style: italic;
  color: #d3ad80;
}

.accent-line {
  width: 55px;
  height: 3px;
  background: #9c885d;
  margin: 12px 0;
}

.intro {
  font-size: 16px;
  line-height: 1.5;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  color: #c9b8a8;
}

.skills {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.skill-tag {
  background: #3a2c25;
  color: #e5cdb6;
  border-radius: 25px;
  padding: 6px 11px;
  font-size: 11px;
}

/* =========================
   HOBBIES SECTION
========================= */

.hobbies-section {
  padding: 20px 0;
  border-top: 1px solid #433329;
}

.hobbies-heading {
  padding-right: 15px;
}

.section-title {
  font-family: Georgia, serif;
  font-size: clamp(26px, 2.8vw, 38px);
  font-weight: normal;
  color: #f1deca;
}

/* =========================
   IMAGE GALLERY
========================= */

.gallery-photo {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  background: #352920;
}

.gallery-photo .v-image {
  transition: transform 0.4s ease;
}

.gallery-photo:hover .v-image {
  transform: scale(1.05);
}

.gallery-main {
  height: 220px;
}

.gallery-small {
  height: 106px;
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  color: #f4e7d7;
  background: linear-gradient(
    transparent,
    rgba(0, 0, 0, 0.85)
  );
  font-size: 14px;
}

.photo-caption span {
  font-size: 10px;
  letter-spacing: 2px;
  color: #d4b78b;
}

.photo-caption h3 {
  font-family: Georgia, serif;
  font-size: 16px;
  line-height: 1.3;
}

.photo-caption small {
  color: #d2c1b1;
  font-size: 10px;
}

.small-caption {
  font-size: 11px;
  padding: 7px;
}

/* =========================
   HOBBIES LIST
========================= */

.interest-panel {
  background: #352921;
  padding: 18px;
  border-radius: 12px;
  height: 100%;
}

.interest-item {
  padding: 10px 0;
  border-bottom: 1px solid #574437;
  font-size: 13px;
}

.interest-number {
  color: #b99b71;
  margin-right: 12px;
  font-size: 11px;
}

.hobby-list {
  height: 100%;
  background: #2f241e;
  border-radius: 12px;
  padding: 16px;
}

.hobby-item {
  display: flex;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #554237;
  color: #ead8c3;
  font-size: 13px;
}

.hobby-number {
  color: #b99b71;
  font-size: 11px;
}

.hobby-item:hover {
  color: #d4b78b;
}

/* =========================
   PERSONAL DETAILS
========================= */

.details-section {
  border-top: 1px solid #433329;
  padding: 18px 0;
}

.details-section h3 {
  font-size: 16px;
  margin-bottom: 6px;
}

.details-section p {
  color: #c9b8a8;
  font-size: 13px;
  margin-bottom: 5px;
}

/* =========================
   CONTACT
========================= */

.contact-section {
  background: #382a23;
  border-radius: 16px;
  padding: 16px 25px;
  margin: 12px 0 20px;
}

.contact-section h2 {
  font-family: Georgia, serif;
  font-size: 24px;
  font-weight: normal;
}

.contact-section p {
  color: #d0b9a2;
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 0;
}

/* =========================
   POPUPS
========================= */

.popup-card {
  background: #2b211d !important;
  color: #f0ddc8 !important;
}

.popup-text {
  color: #d2bba5 !important;
  line-height: 1.6;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 960px) {
  .content {
    padding: 20px;
  }

  .hero-section {
    padding: 20px 0;
  }

  .about-content {
    padding: 18px 8px;
  }

  .hobbies-section {
    padding: 25px 0;
  }

  .hobbies-heading {
    padding-bottom: 15px;
  }
}

@media (max-width: 600px) {
  .content {
    padding: 15px;
  }

  .main-title {
    font-size: 34px;
  }

  .section-title {
    font-size: 30px;
  }

  .contact-section {
    padding: 20px;
  }

  .contact-section h2 {
    font-size: 22px;
  }
}
</style>
