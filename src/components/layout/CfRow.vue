<template>
	<div class="cf-row">
		<slot />
		<div class="grid">
			<div class="grid__col--8">lorem</div>
			<div class="grid__col--8">lorem</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CfRow",
};
</script>

<style lang="scss" scoped></style>
