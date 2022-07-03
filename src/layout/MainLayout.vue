<template>
  <div class="main-layout">
    <div>main-layout</div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "MainLayout",
	components: {},
	setup(props) {
		return {};
	},
});
</script>