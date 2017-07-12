<template>
	<div id="app">
		<h1>Vue Static Map</h1>
		<static-map :google-api-key="apiKey" v-on:getUrl="getUrl" :paths="paths" :format="format" :markers="markers" :zoom="zoom" :center="center" :size="size" :type="type"></static-map>
		<pre>{{url}}</pre>
	</div>
</template>

<script>
import StaticMap from './components/StaticMap';

function getUrl(url) {
	this.url = url;
}

export default {
	data: () => {
		const dataValues = {
			apiKey: '',
			center: 'Empire State Building',
			format: 'png32',
			markers: [],
			paths: [
				{
					color: 'blue',
					weight: 8,
					geodesic: false,
					fillcolor: '0xFFFF0033',
					locations: [
						{ startLat: 40.737102, endLng: -73.990318 },
						{ startLat: 40.749825, endLng: -73.987963 },
						{ startLat: 40.752946, endLng: -73.987384 },
						{ startLat: 40.762946, endLng: -73.997399 },
					],
				},
			],
			scale: '2',
			size: [800, 400],
			type: 'roadmap',
			url: '',
			zoom: 13,
		};
		return dataValues;
	},
	name: 'app',
	components: {
		StaticMap,
	},
	methods: {
		getUrl,
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

pre {
	white-space: pre-line;
}
</style>
