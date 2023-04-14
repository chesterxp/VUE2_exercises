<template>
  <div class="big_box">
    <div class="select_box">
      <!-- <svg
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:svg="http://www.w3.org/2000/svg"
        id="svg2833"
        viewBox="0 0 64 64"
        version="1.1"
      >
        <title id="title4182">netalloy car</title>
        <defs id="defs2835">
          <linearGradient
            id="linearGradient2864"
            y2="31.791"
            gradientUnits="userSpaceOnUse"
            y1="24.527"
            x2="26.857"
            x1="26.475"
          >
            <stop id="stop2860" stop-color="#fce94f" offset="0" />
            <stop
              id="stop2862"
              stop-color="#fce94f"
              stop-opacity="0"
              offset="1"
            />
          </linearGradient>
          <filter
            id="filter3648"
            y="-.55673"
            width="1.0788"
            x="-.039396"
            height="2.1135"
          >
            <feGaussianBlur id="feGaussianBlur3650" stdDeviation="0.84248789" />
          </filter>
        </defs>
        <g id="layer1">
          <g id="g4184">
            <path
              id="path2856"
              d="m7.1755 34.803s-1.5579-7.8246-0.97579-8.8634c1.3788-2.4607 4.6545 0.81057 7.3997 0.16263 0 0 7.6341-4.1967 12.116-4.0658 4.0717 0.11893 7.652 3.1359 11.709 3.4966 0 0 7.1685 0.4173 12.035 0.97579 2.2981 0.26376 5.9253 1.9285 7.6895 3.7782 1.0401 1.0905 1.9205 3.7089 1.0113 4.6787-16.356-1.213-38.933-2.022-50.984-0.162z"
              stroke="#2e2727"
              stroke-linecap="round"
              stroke-width="1.199"
              fill="url(#linearGradient2864)"
            />
            <path
              id="path3751"
              d="m225.26 479.1a64.145 55.053 0 1 1 -128.29 0 64.145 55.053 0 1 1 128.29 0z"
              transform="matrix(.080499 0 0 .080499 -.061632 -5.4313)"
              stroke="#fcfeff"
              stroke-width="14.9"
              fill="#555753"
            />
            <path
              id="path3753"
              d="m673.77 488.7a70.206 54.548 0 1 1 -140.41 0 70.206 54.548 0 1 1 140.41 0z"
              transform="matrix(.071671 0 0 .084752 5.6276 -8.4984)"
              stroke="#fcfeff"
              stroke-width="14.9"
              fill="#555753"
            />
            <path
              id="path2874"
              opacity=".20192"
              d="m57.059 39.724a25.662 1.8159 0 1 1 -51.324 0 25.662 1.8159 0 1 1 51.324 0z"
              filter="url(#filter3648)"
              stroke="#ada7a7"
              stroke-linecap="round"
              stroke-width=".6"
              fill="#999"
            />
            <rect
              id="rect3652"
              opacity="0"
              height="63.191"
              width="63.191"
              y=".40432"
              x=".40432"
              stroke-width=".80865"
            />
          </g>
        </g>
        <metadata>
          <rdf:RDF>
            <cc:Work>
              <dc:format>image/svg+xml</dc:format>
              <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
              <cc:license
                rdf:resource="http://creativecommons.org/licenses/publicdomain/"
              />
              <dc:publisher>
                <cc:Agent rdf:about="http://openclipart.org/">
                  <dc:title>Openclipart</dc:title>
                </cc:Agent>
              </dc:publisher>
              <dc:title>netalloy car logo</dc:title>
              <dc:date>2010-04-07T09:13:44</dc:date>
              <dc:description>automotive clipart</dc:description>
              <dc:source
                >http://openclipart.org/detail/38755/netalloy-car-logo-by-netalloy</dc:source
              >
              <dc:creator>
                <cc:Agent>
                  <dc:title>netalloy</dc:title>
                </cc:Agent>
              </dc:creator>
              <dc:subject>
                <rdf:Bag>
                  <rdf:li>automobile</rdf:li>
                  <rdf:li>car</rdf:li>
                  <rdf:li>car logo</rdf:li>
                  <rdf:li>clip art</rdf:li>
                  <rdf:li>clipart</rdf:li>
                  <rdf:li>icon</rdf:li>
                  <rdf:li>motorsports</rdf:li>
                  <rdf:li>race</rdf:li>
                  <rdf:li>sports2010</rdf:li>
                </rdf:Bag>
              </dc:subject>
            </cc:Work>
            <cc:License
              rdf:about="http://creativecommons.org/licenses/publicdomain/"
            >
              <cc:permits
                rdf:resource="http://creativecommons.org/ns#Reproduction"
              />
              <cc:permits
                rdf:resource="http://creativecommons.org/ns#Distribution"
              />
              <cc:permits
                rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
              />
            </cc:License>
          </rdf:RDF>
        </metadata>
      </svg>

      <img
        src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-triple-stars-icon-isolated-png-image_1727902.jpg"
        alt=""
      /> -->

      <v-app id="inspire">
        <v-container fluid>
          <v-select
            :items="users"
            label="Required users to finalize"
            item-text="NAME"
            item-value="ID"
            multiple
            filled
            chips
            return-object
          >
            <template #selection="{ item }">
              <v-chip
                v-if="item.IS_ACTIVE"
                class="ma-2"
                color="teal"
                text-color="white"
              >
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                {{ item.NAME }}
              </v-chip>
            </template>
          </v-select>
        </v-container>
      </v-app>

      <img src="../../assets/logo.png" alt="logo picture" />

      <h1>test</h1>

      <v-select
        :items="items"
        label="Standard"
        class="ma-4"
        prepend-icon="mdi-palette"
      ></v-select>

      <h2>test2</h2>
      <select>
        <option style="background-image: url(../../assets/logo.png)">
          male
        </option>
        <option style="background-image: url('../../assets/logo.png')">
          female
        </option>
        <option style="background-image: url(others.png)">others</option>
      </select>
      <template>
        <v-container fluid>
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                label="Standard"
                name="cars"
                id="cars"
                prepend-icon="edit"
              >
                <option
                  value="volvo"
                  style="background-image: url('../../assets/logo.png')"
                >
                  Volvo
                  <svg
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:svg="http://www.w3.org/2000/svg"
                    id="svg2833"
                    viewBox="0 0 64 64"
                    version="1.1"
                  >
                    <title id="title4182">netalloy car</title>
                    <defs id="defs2835">
                      <linearGradient
                        id="linearGradient2864"
                        y2="31.791"
                        gradientUnits="userSpaceOnUse"
                        y1="24.527"
                        x2="26.857"
                        x1="26.475"
                      >
                        <stop id="stop2860" stop-color="#fce94f" offset="0" />
                        <stop
                          id="stop2862"
                          stop-color="#fce94f"
                          stop-opacity="0"
                          offset="1"
                        />
                      </linearGradient>
                      <filter
                        id="filter3648"
                        y="-.55673"
                        width="1.0788"
                        x="-.039396"
                        height="2.1135"
                      >
                        <feGaussianBlur
                          id="feGaussianBlur3650"
                          stdDeviation="0.84248789"
                        />
                      </filter>
                    </defs>
                    <g id="layer1">
                      <g id="g4184">
                        <path
                          id="path2856"
                          d="m7.1755 34.803s-1.5579-7.8246-0.97579-8.8634c1.3788-2.4607 4.6545 0.81057 7.3997 0.16263 0 0 7.6341-4.1967 12.116-4.0658 4.0717 0.11893 7.652 3.1359 11.709 3.4966 0 0 7.1685 0.4173 12.035 0.97579 2.2981 0.26376 5.9253 1.9285 7.6895 3.7782 1.0401 1.0905 1.9205 3.7089 1.0113 4.6787-16.356-1.213-38.933-2.022-50.984-0.162z"
                          stroke="#2e2727"
                          stroke-linecap="round"
                          stroke-width="1.199"
                          fill="url(#linearGradient2864)"
                        />
                        <path
                          id="path3751"
                          d="m225.26 479.1a64.145 55.053 0 1 1 -128.29 0 64.145 55.053 0 1 1 128.29 0z"
                          transform="matrix(.080499 0 0 .080499 -.061632 -5.4313)"
                          stroke="#fcfeff"
                          stroke-width="14.9"
                          fill="#555753"
                        />
                        <path
                          id="path3753"
                          d="m673.77 488.7a70.206 54.548 0 1 1 -140.41 0 70.206 54.548 0 1 1 140.41 0z"
                          transform="matrix(.071671 0 0 .084752 5.6276 -8.4984)"
                          stroke="#fcfeff"
                          stroke-width="14.9"
                          fill="#555753"
                        />
                        <path
                          id="path2874"
                          opacity=".20192"
                          d="m57.059 39.724a25.662 1.8159 0 1 1 -51.324 0 25.662 1.8159 0 1 1 51.324 0z"
                          filter="url(#filter3648)"
                          stroke="#ada7a7"
                          stroke-linecap="round"
                          stroke-width=".6"
                          fill="#999"
                        />
                        <rect
                          id="rect3652"
                          opacity="0"
                          height="63.191"
                          width="63.191"
                          y=".40432"
                          x=".40432"
                          stroke-width=".80865"
                        />
                      </g>
                    </g>
                    <metadata>
                      <rdf:RDF>
                        <cc:Work>
                          <dc:format>image/svg+xml</dc:format>
                          <dc:type
                            rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                          />
                          <cc:license
                            rdf:resource="http://creativecommons.org/licenses/publicdomain/"
                          />
                          <dc:publisher>
                            <cc:Agent rdf:about="http://openclipart.org/">
                              <dc:title>Openclipart</dc:title>
                            </cc:Agent>
                          </dc:publisher>
                          <dc:title>netalloy car logo</dc:title>
                          <dc:date>2010-04-07T09:13:44</dc:date>
                          <dc:description>automotive clipart</dc:description>
                          <dc:source
                            >http://openclipart.org/detail/38755/netalloy-car-logo-by-netalloy</dc:source
                          >
                          <dc:creator>
                            <cc:Agent>
                              <dc:title>netalloy</dc:title>
                            </cc:Agent>
                          </dc:creator>
                          <dc:subject>
                            <rdf:Bag>
                              <rdf:li>automobile</rdf:li>
                              <rdf:li>car</rdf:li>
                              <rdf:li>car logo</rdf:li>
                              <rdf:li>clip art</rdf:li>
                              <rdf:li>clipart</rdf:li>
                              <rdf:li>icon</rdf:li>
                              <rdf:li>motorsports</rdf:li>
                              <rdf:li>race</rdf:li>
                              <rdf:li>sports2010</rdf:li>
                            </rdf:Bag>
                          </dc:subject>
                        </cc:Work>
                        <cc:License
                          rdf:about="http://creativecommons.org/licenses/publicdomain/"
                        >
                          <cc:permits
                            rdf:resource="http://creativecommons.org/ns#Reproduction"
                          />
                          <cc:permits
                            rdf:resource="http://creativecommons.org/ns#Distribution"
                          />
                          <cc:permits
                            rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
                          />
                        </cc:License>
                      </rdf:RDF>
                    </metadata>
                  </svg>
                </option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </v-select>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <v-select label="Standard" value="luki2">Luki2</v-select>
              <v-select label="Standard" value="luki3">Luki3</v-select>
            </v-col>

            <!-- <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          filled
          label="Filled style"
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
      </v-col> -->
          </v-row>
        </v-container>
      </template>
    </div>
    <!-- <v-toolbar app dark class="">
      <h1>h1 test</h1>
    </v-toolbar> -->
    <v-btn>bez niczego</v-btn>
    <v-btn text>bez niczego</v-btn>
    <v-btn text x-small>bez niczego</v-btn>
    <p class="blue--text display-2 font-weight-bold">Tests</p>
    <p color="indigo" class="indigo white--text pa-5 ma-5">Łuki fajny text</p>
    <p class="blue--text display-2 font-weight-bold">Progress</p>
    <v-progress-linear
      v-model="power"
      color="amber"
      height="25"
    ></v-progress-linear>
    <p class="blue--text display-2 font-weight-bold">Color Picker</p>
    <v-color-picker dot-size="25" swatches-max-height="200"></v-color-picker>
    <p class="blue--text display-2 font-weight-bold">Images</p>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="150"
      max-width="250"
      src="https://picsum.photos/id/11/500/300"
    ></v-img>
    <p class="blue--text display-2 font-weight-bold">BreakingPoint</p>
    <v-btn class="hidden-xs-only"
      >Hide only for mobile hidden-xs-only below 600px</v-btn
    >
    <v-btn class="hidden-md-and-up">Show below 960px hidden-md-and-up</v-btn>
    <p class="blue--text display-2 font-weight-bold">Fonts and size</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
      magnam facilis, reiciendis explicabo ducimus magni voluptate ullam aut
      ipsam maxime blanditiis dolorum, modi provident dolores, vitae expedita
      quis deserunt ipsum?
    </p>
    <p class="red white--text padding-20">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
      magnam facilis, reiciendis explicabo ducimus magni voluptate ullam aut
      ipsam maxime blanditiis dolorum, modi provident dolores, vitae expedita
      quis deserunt ipsum?
    </p>
    <p class="pink lighten-4 red--text text--darken-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis obcaecati
      quis ipsum odit amet magnam nulla commodi quae delectus similique corrupti
      nostrum et exercitationem, veritatis ratione laboriosam quidem veniam
      consequatur?
    </p>

    <h1>Display-4</h1>

    <h1 class="display-1">Display-1</h1>
    <h1 class="display-4">Display-4</h1>
    <h1 class="display-4 font-weight-bold">Display-4 bold</h1>

    <p class="blue--text display-2 font-weight-bold">Buttons</p>

    <v-btn> Button - default</v-btn>
    <v-btn variant="tonal" color="secondary"> Button - tonal</v-btn>
    <v-btn variant="text" color="error"> Button - text</v-btn>
    <v-btn variant="plain" disabled> Button - plain</v-btn>
    <v-btn variant="dupa"> Button - dupa</v-btn>
    <v-btn append-icon="mdi-vuetify" variant="plain"> Button </v-btn>

    <v-btn class="pink lighten-2 white--text"> Button - custom</v-btn>
    <!-- <v-btn class="pink lighten-2 white--text"> Button - custom</v-btn> -->
    <v-btn flat color="red">Flat color red</v-btn>
    <br />
    <v-icon color="success" icon="mdi-wifi" size="small"></v-icon>
    <v-icon color="green"></v-icon>
    <v-btn class="ma-4" color="primary">
      Accept
      <v-icon dark right flat> mdi-checkbox-marked-circle </v-icon>
    </v-btn>
    <!-- <v-btn class="ma-4" color="primary">
      <v-icon dark right flat> close </v-icon>
    </v-btn> -->
    <v-icon dark right flat color="green" class="ma-2 green--text">
      mdi-checkbox-marked-circle
    </v-icon>
    <v-icon color="green" class="ma-2 green--text"> shopping-basket </v-icon>
    <v-btn>
      <!-- <v-icon>email</v-icon> -->
      <v-icon icon="mdi-vuetify"></v-icon>
    </v-btn>

    <br />

    <v-btn class="pink white--text">
      <v-icon left>mdi-checkbox-marked-circle</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn class="pink white--text ma-2" small>
      <v-icon left small>mdi-checkbox-marked-circle</v-icon>
      <span small>Email me</span>
    </v-btn>

    <v-btn class="ma-2" color="indigo" dark fab>
      <v-icon> mdi-cloud-upload</v-icon>
    </v-btn>

    <p class="blue--text display-2 font-weight-bold">Others</p>

    <v-col>
      <v-btn icon="mdi-heart" color="primary"></v-btn>
    </v-col>
    <div class="box2">
      <v-card
        title="Card title"
        subtitle="Subtitle"
        text="text jakos wlasciwosci"
        >Testowa</v-card
      >
      <!-- <v-card loading title="Card title" subtitle="Subtitle" text="...">
        <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card> -->
    </div>

    <div class="box">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente,
      facere modi ipsam delectus incidunt ullam, esse ipsa excepturi, suscipit
      nostrum asperiores libero accusamus. Unde voluptas, minus rem laudantium
      veritatis odit obcaecati animi delectus numquam id molestias sequi ipsam
      accusantium atque impedit officia aliquid placeat cupiditate asperiores
      aspernatur. Eaque, deserunt, hic, earum porro qui fugit debitis mollitia
      accusantium ipsam est aliquid similique et soluta harum. Tempore,
      perspiciatis. Autem velit earum possimus totam nulla placeat consequuntur,
      itaque ipsa cum aut magnam suscipit deserunt reprehenderit vel dolorem
      consectetur dicta. Itaque ab deserunt facere beatae, praesentium,
      molestias atque delectus tenetur animi eius est mollitia voluptatem omnis
      enim iusto sapiente quisquam voluptas expedita similique quos, nobis
      fugit? Facilis reprehenderit voluptate sapiente laboriosam quo corrupti
      temporibus ut alias laborum amet id minus cumque consequatur, eos totam
      assumenda tempore nihil vel itaque accusamus? Aliquid, ipsam praesentium?
      Voluptate recusandae sequi dicta autem atque tempora fugiat possimus
      dolores odit commodi facere aperiam repudiandae iste cum in, porro
      reiciendis id tenetur placeat minus et sunt mollitia minima! Magni nihil
      delectus molestiae eius, voluptas pariatur fugiat tempore consectetur,
      maiores error suscipit at corrupti nobis non illum minus corporis debitis
      praesentium nisi laudantium quae vel? Sed dolorem tempora quasi in
      deserunt vel fugit culpa, enim ad sint voluptate error nisi a? In hic
      dolore, qui esse est laborum distinctio, eum modi dolor explicabo quam
      eveniet, iste recusandae aliquid. Iste, incidunt aperiam obcaecati quae
      sunt quis cumque dolor qui tempore placeat provident nam sapiente eos!
      Accusantium consectetur laboriosam neque totam obcaecati quis maxime
      explicabo optio, suscipit, accusamus ad a rem. Id sed fugiat dolores.
      Repellat molestiae expedita illum tempora porro modi recusandae reiciendis
      debitis! Reprehenderit fuga impedit architecto deleniti pariatur, omnis et
      fugit est eos. Veniam quod alias accusamus ad aperiam corrupti. Quibusdam,
      a, obcaecati maiores cupiditate iste necessitatibus totam cum esse, omnis
      dolore sit voluptates et veniam? Magni possimus tempora aut accusantium
      natus, praesentium, numquam laboriosam eveniet blanditiis sapiente nostrum
      commodi ullam! Non dolorem necessitatibus nemo consequuntur reprehenderit
      itaque iste maiores vero fugiat vitae sequi, assumenda nulla soluta?
      Dignissimos vitae commodi hic sequi rerum aperiam inventore quia nulla
      minus a. Provident aliquam, libero neque nostrum sequi et iusto dolores
      deserunt velit ullam molestiae amet eligendi assumenda alias dolorum
      suscipit accusamus voluptatum animi recusandae minima repellendus non
      omnis aut? Soluta eveniet aspernatur amet veritatis deserunt! Dolore ea,
      voluptatibus omnis tempora odit, vitae, eos repudiandae suscipit atque
      ipsam est fugit nihil ipsa perferendis!
    </div>
  </div>
</template>

<script>
export default {
  name: "vuetify-view",
  data: () => {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      users: [
        { NAME: "NAME1", ID: "001", IS_ACTIVE: true },
        { NAME: "NAME2", ID: "002", IS_ACTIVE: false },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.big_box {
  width: 1000px;
  margin: 20px auto;
}
.box {
  padding: 30px;
  font-size: 22px;
}
// .box2 {
//   width: 300px;
//   margin: 30px auto;
// }

select#gender option[value="male"] {
  background-image: url(../../assets/logo.png);
}
select#gender option[value="female"] {
  background-image: url("../../assets/logo.png");
}
select#gender option[value="others"] {
  background-image: url(../../assets/logo.png);
}
</style>
