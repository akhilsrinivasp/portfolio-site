<template>
  <div class="contact-tile" @click="openMail">
    <div class="mail-icon">
      <Icon class="mail-icon" name="grommet-icons:mail" color="white" />
    </div>
    <div class="mail-id">
      {{ mail }}
    </div>
  </div>
</template>
<script setup lang="ts">
    const { mail: mail } = defineProps({
        mail: String,
        }) as { mail: string };
        const openMail = () => {
            window.open(`mailto:${mail}`);
        }; 
</script>
<style>
.contact-tile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a202c;
  border: 1px solid #1a202c;
  box-shadow: rgba(74, 74, 138, 0.25) 0px 50px 100px -20px,
    rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,
    rgba(26, 98, 170, 0.35) 0px -2px 6px 0px inset;
  font-family: "Montserrat", sans-serif;
  border-radius: 25px;
  cursor: pointer;
  width: 400px;
  padding: 6%;
  margin: 5% 0%;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.contact-tile:hover {
  width: 410px;
  font-size: 1rem;
  background-color: #2d3748;
}

.contact-tile .mail-icon {
  width: 30px;
  height: 30px;
}

@media (min-width: 1024px) {
  .contact-tile {
    width: 600px;
    padding: 6% 10%;
    margin: 5% 0%;
    font-size: 1.2rem;
  }

  .contact-tile:hover {
    width: 700px;
    font-size: 1.5rem;
  }
}
</style>
