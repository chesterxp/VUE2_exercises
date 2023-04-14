<template>
  <div>
    <svg class="svg">
      <use :href="svg"></use>
    </svg>

    <div class="buttons">
      <div class="btn" @click="activeTab = 'Luki1'">Tab1</div>
      <div class="btn" @click="activeTab = 'Luki2'">Tab2</div>
      <div class="btn" @click="activeTab = 'Luki3'">Tab3</div>
    </div>
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      display="none"
      width="38"
      height="38"
    >
      <!-- ViewBox and Polygon taken from "Star.svg" -->
      <symbol id="icon-star" viewBox="0 0 95 95">
        <polygon
          points="47.5 0 62.18 31.27 95 36.29 71.25 60.63 76.86 95 47.5 78.77 18.14 95 23.75 60.63 0 36.29 32.82 31.27 47.5 0"
        />
      </symbol>

      <!-- ViewBox and Polygon taken from "Flower.svg" -->
      <symbol id="icon-flower" viewBox="0 0 95 95">
        <path
          class="cls-1"
          d="M96.9,36.75A14.87,14.87,0,0,0,85.62,26.54a14.39,14.39,0,0,0-5.57-14A15.44,15.44,0,0,0,63.68,11.2a15.27,15.27,0,0,0-27-1,15.47,15.47,0,0,0-15.36,1.3A14.43,14.43,0,0,0,15.16,25.2,14.93,14.93,0,0,0,3.48,35a14.29,14.29,0,0,0,3.3,14.62A14.3,14.3,0,0,0,3.19,64.15a14.89,14.89,0,0,0,11.48,10A14.41,14.41,0,0,0,20.52,88a15.42,15.42,0,0,0,15.34,1.59,15.28,15.28,0,0,0,26.49.51,15.42,15.42,0,0,0,15.38-1,14.43,14.43,0,0,0,6.41-13.61A15,15,0,0,0,96,65.92a14.31,14.31,0,0,0-3-14.69A14.31,14.31,0,0,0,96.9,36.75"
          transform="translate(-2.5 -2.5)"
        />
      </symbol>

      <!-- ViewBox and Polygon taken from "8 Point Star.svg" -->
      <symbol id="icon-8pt-star" viewBox="0 0 95 95">
        <path
          class="cls-1"
          d="M83.59,63.91,97.5,50,83.59,36.09V16.41H63.91L50,2.5,36.09,16.41H16.41V36.09L2.5,50,16.41,63.91V83.59H36.09L50,97.5,63.91,83.59H83.59Z"
          transform="translate(-2.5 -2.5)"
        />
      </symbol>

      <symbol id="ball" width="95" height="95" viewBox="0 0 95 95">
        <g id="ball_icon">
          <path
            id="Path_16"
            data-name="Path 16"
            d="M12.058.058a12,12,0,1,0,12,12A12,12,0,0,0,12.058.058ZM9.105,21.35l.971-1.052L7.931,17.622,4.724,16.588l-.573,1.158a9.7,9.7,0,0,1-1.839-5.618l1.165.665L5.6,10.1l.284-3.358-1.709-.4A9.756,9.756,0,0,1,8.992,2.808L8.8,4.178l3.289.971,3.224-.983-.2-1.362a9.762,9.762,0,0,1,4.835,3.542l-1.64.342.192,3.424,2.011,2.7,1.3-.691a9.687,9.687,0,0,1-1.763,5.519l-.58-1.127-3.249,1.1-2.068,2.661.982,1.03a9.679,9.679,0,0,1-6.022.041Z"
            transform="translate(0 0)"
            fill="#222"
          />
          <path
            id="Path_17"
            data-name="Path 17"
            d="M24.042,19.213l-3.759-2.73-3.735,2.73,1.389,4.238h4.668Z"
            transform="translate(-8.225 -8.193)"
            fill="#222"
          />
        </g>
      </symbol>
    </svg>
  </div>
</template>

<script>
import Luki1 from "./Tab1.vue";
import Luki2 from "./Tab2.vue";
import Luki3 from "./Tab3.vue";
export default {
  name: "Tabs-box",
  components: {
    Luki1,
    Luki2,
    Luki3,
  },
  data() {
    return {
      activeTab: "Luki1",
      svg: "#ball",
    };
  },
};
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  width: 400px;
  margin: 0px auto 20px;
}

.svg {
  width: 24px;
  height: 24px;
}
</style>
