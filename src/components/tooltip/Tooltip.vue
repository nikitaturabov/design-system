<template>
	<div class="tooltip">
		<slot class="tooltip__curr-element"></slot>
		<div class="tooltip__container">
			<span
				class="tooltip__text"
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae, ut odit dolor quibusdam dolorem distinctio autem numquam vel, incidunt aperiam qui perspiciatis officia ad quo omnis? Fugiat, ipsum rerum.</span>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less">
.tooltip {
	position: relative;
	&__container {
		position: absolute;
		top: calc(100% + 16px);
		left: 0;
		max-width: 262px;
		background: #3b3e47;
		border-radius: 4px;
		padding: 16px;
		visibility: hidden;
		opacity: 0;
		transition: 0.2s;

		&:after {
			content: "";

			background: #3b3e47;
			width: 14px;
			height: 14px;
			transform: rotate(45deg);
			position: absolute;
			top: -6px;
			left: 16px;
		}
	}

	&__text {
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.02em;
		color: #ffffff;
	}

	&:hover {
		.tooltip__container {
			visibility: visible;
			opacity: 1;
			transition: 0.2s;
		}
	}
}
</style>