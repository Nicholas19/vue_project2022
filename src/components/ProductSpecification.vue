<template>
  <div class="box">
    <h3 class="title">Communication standard/Internet</h3>
    <div class="block">
      <p class="name">
        Communicaﬁon standard
        <span class="line"></span>
      </p>
      <p class="text">
        2G (GPRS/EDGE)
        <br />
        3G (WCDMA/UMTS/HSPA)
        <br />
        4G (LTE)
        <br />
        5G
      </p>
    </div>
  </div>

  <div class="box">
    <h3 class="title">Display</h3>
    <div class="block">
      <p class="name">
        Screen diagonal
        <span class="line"></span>
      </p>
      <p class="text">5.4</p>
    </div>
    <div class="block">
      <p class="name">
        Display resolution
        <span class="line"></span>
      </p>
      <p class="text">2340 x 1080</p>
    </div>
    <div class="block">
      <p class="name">
        Matrix type
        <span class="line"></span>
      </p>
      <p class="text">OLED (Super Retina XDR)</p>
    </div>
    <div class="block">
      <p class="name">
        Screen reﬁesh rate
        <span class="line"></span>
      </p>
      <p class="text">60 HZ</p>
    </div>
    <div class="block">
      <p class="name">
        Number of touch points
        <span class="line"></span>
      </p>
      <p class="text">10</p>
    </div>
    <div class="block">
      <p class="name">
        Screen material
        <span class="line"></span>
      </p>
      <p class="text">Ceramic Shield</p>
    </div>
  </div>

  <div class="box">
    <h3 class="title">SIM cards</h3>
    <div class="block">
      <p class="name">
        Number of SIM cards
        <span class="line"></span>
      </p>
      <p class="text">Nano-SIM</p>
    </div>
    <div class="block">
      <p class="name">
        SIM card dimensions
        <span class="line"></span>
      </p>
      <p class="text">eSIM</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSpecification",
};
</script>

<style scoped>
.title {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 28px;
  font-weight: 600;
  line-height: 150%;
  color: #000;
  margin-bottom: 24px;
}

.box {
  margin-bottom: 50px;
}

.block {
  display: flex;
  gap: 0 25px;
  margin-bottom: 15px;
}

.text,
.name {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 400;
  line-height: 180%;
  color: #000;
}

.name {
  max-width: 650px;
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 0 25px;
  white-space: nowrap;
}

.line {
  display: block;
  width: 100%;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}
</style>
