<template>
	<div class="last-change">
		<h1 class="ds-current-page__title ds-title ds-title--1">
			LAST
			<strong>CHANGE</strong> IN THE SYSTEM
		</h1>

		<span
			class="ds-current-page__text ds-current-page__text--gray"
		>На этой панели можно отследить последние внесённые изменения в системе</span>

		<table class="ds-current-page__table ds-table">
			<tr class="ds-table__row">
				<td class="ds-table__cell">№</td>
				<td class="ds-table__cell">Изменения</td>
				<td class="ds-table__cell">дата</td>
			</tr>
			<tr class="ds-table__row" v-for="(data, index) in getMyCommits" :key="index">
				<td class="ds-table__cell">{{ index + 1 }}</td>
				<td class="ds-table__cell">{{ data.commit.message }}</td>
				<td class="ds-table__cell">{{ data.commit.author.date }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			commits: [],
		};
	},
	created() {
		let promise = fetch(
			"https://cors-anywhere.herokuapp.com/https://api.github.com/repos/nikitaturabov/design-system/commits",
			{
				method: "GET",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Content-Type": "multipart/form-data",
				},
			},
		);
		promise
			.then(response => response.json())
			.then(response => {
				this.commits = response;
				console.log(response);
			});
	},
	computed: {
		getMyCommits() {
			return this.commits;
		},
	},
};
</script>

<style lang="less"></style>