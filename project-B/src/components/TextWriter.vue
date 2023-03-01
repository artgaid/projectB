<template>
    <div class="writer" :class="{ show: isShowButton }">
      <Transition name="fade" mode="out-in">
        <TheButton v-if="isShowButton" />
        <VueWriter v-else :array="['I NEED YOU', '25.03']" :start="1000" :typeSpeed="300" :delay="4000" :intervals="2000" :iterations='2' />
      </Transition>
    </div>
</template>

<script setup lang="ts">
import TheButton from "@/components/TheButton.vue";
import {ref} from "vue";

const isShowButton = ref(false);
setTimeout(() => {
  isShowButton.value = true
}, 18000);
</script>

<style lang="scss">
.writer {
  height: 70px;
  display: flex;
  flex-direction: column;
  perspective: 2em;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    filter: blur(1em);
    transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
    background: var(--glow-color);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    background-color: var(--glow-color);
    box-shadow: 0 0 2em 0.2em var(--glow-color);
    transition: opacity 100ms linear;
  }
}

.show {
  animation: none;
}


.is-typed {
  position: relative;
  height: 4em;
  width: auto;
  display: flex;
  text-align: center;
  align-items: center;
  user-select: none;

  margin-bottom: 10px;
}

.is-typed span.typed {
  height: auto;
  position: relative;
  pointer-events: none;
  user-select: none;
  color: var(--glow-color);
  background: none;
  perspective: 2em;
  font-family: "Raleway", sans-serif;
  font-size: 2em;
  line-height: 100%;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.5em;
  animation: text-flicker 3s linear infinite;

  float: left;
  -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
  0 0 0.45em var(--glow-color);
  -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
  0 0 0.45em var(--glow-color);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}

.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  height: 100%;
  background-color: var(--glow-color);
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

@keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 0.1;
  }
  4% {
    opacity: 0.5;
  }
  19% {
    opacity: 0.5;
  }
  21% {
    opacity: 0.1;
  }
  23% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }
  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 1;
  }
  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

@media only screen and (max-width: 600px) {
  .is-typed span.typed{
    font-size: 1em;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0, 1);
}
</style>