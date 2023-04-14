<template>
  <div>
    <!-- <slot>Default Content</slot> -->
    <template>
      <p>Paragraph 1</p>
      <slot name="p1"></slot>
      <p>Paragraph 2</p>
      <slot name="p2"></slot>
      <p>Paragraph 3</p>
      <slot name="p3"></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: "slots-component",
};
</script>

<style lang="scss" scoped></style>
