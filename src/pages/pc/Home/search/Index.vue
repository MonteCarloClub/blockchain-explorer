<template>
  <div class="group">
    <input
      type="text"
      required
      v-model="searchKey"
      @keydown.enter="onSearch(searchKey)"
    />
    <span class="bar"></span>
    <label>{{ placeholder }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onSearch } from "@/composition/search";

defineProps({
  placeholder: {
    type: String,
    default: "请在此输入",
  },
});

const searchKey = ref("");
</script>

<style scoped>
.group {
  margin-top: 45px;
  position: relative;
}

input {
  width: 100%;
  border: none;
  display: block;
  font-size: 18px;
  padding: 10px 10px 10px 0;
  background-color: transparent;
  border-bottom: 1px solid #757575;
}

input:focus {
  outline: none;
}

label {
  top: 10px;
  color: #999;
  font-size: 18px;
  position: absolute;
  font-weight: normal;
  pointer-events: none;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #646464;
}

.bar {
  width: 100%;
  display: block;
  position: relative;
}

.bar:before {
  left: 0%;
  width: 0;
  bottom: 1px;
  content: "";
  height: 2px;
  position: absolute;
  background: #646464;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ .bar:before {
  width: 100%;
}
</style>
