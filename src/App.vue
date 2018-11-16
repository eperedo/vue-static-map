<template>
	<div id="app">
		<h1>Vue Static Map</h1>
		<static-map :google-api-key="apiKey" alt="I am a custom alternative text"
			title="I am a custom title" id="i-am-a-custom-stop-it"
			:language="language" v-on:get-url="getUrl" :paths="paths"
			:format="format" :markers="markers" :zoom="zoom" :center="center"
			:size="size" :type="type"></static-map>
		<div>
			<pre>{{url}}</pre>
		</div>
		<h1>Custom Styled Vue Static Map</h1>
		<static-map :google-api-key="apiKey" alt="I am a custom alternative text"
			title="I am a custom title" id="i-am-a-custom-stop-it"
			:language="language" v-on:get-url="getStyledUrl" :paths="paths"
			:format="format" :markers="markers" :zoom="zoom" :center="center"
			:size="size" :type="type" :customStyle="customStyle"></static-map>
		<div>
			<pre>{{styledUrl}}</pre>
			<small>Custom style <a href="https://snazzymaps.com/style/8097/wy" target="_blank"><strong>WY</strong> by <strong>StipeP</strong></a> at <a href="https://snazzymaps.com" target="_blank"><strong>Snazzy Maps</strong></a></small>
		</div>
	</div>
</template>

<script>
import StaticMap from './components/static-map.vue';

function getUrl(url) {
	this.url = url;
}

function getStyledUrl(url) {
	this.styledUrl = url;
}

export default {
	data: () => {
		const dataValues = {
			apiKey: '',
			center: 'Brooklyn+Bridge,New+York,NY',
			format: 'gif',
			language: 'ja',
			markers: [
				{
					label: 'W',
					color: 'blue',
					lat: 40.702147,
					lng: -74.015794,
					size: 'normal',
				},
				{
					label: 'Y',
					color: 'yellow',
					lat: 40.711614,
					lng: -74.012318,
					size: 'tiny',
				},
				{
					label: 'G',
					color: 'green',
					lat: 40.718217,
					lng: -74.015794,
					size: 'small',
					icon: 'http://www.airsoftmap.net/images/pin_map.png',
				},
			],
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
			scale: '1',
			size: [800, 400],
			type: 'roadmap',
			url: '',
			styledUrl: '',
			zoom: 13,
			customStyle: [
				{
					featureType: 'all',
					elementType: 'geometry.fill',
					stylers: [
						{
							weight: '2.00',
						},
					],
				},
				{
					featureType: 'all',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#9c9c9c',
						},
					],
				},
				{
					featureType: 'all',
					elementType: 'labels.text',
					stylers: [
						{
							visibility: 'on',
						},
					],
				},
				{
					featureType: 'landscape',
					elementType: 'all',
					stylers: [
						{
							color: '#f2f2f2',
						},
					],
				},
				{
					featureType: 'landscape',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#ffffff',
						},
					],
				},
				{
					featureType: 'landscape.man_made',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#ffffff',
						},
					],
				},
				{
					featureType: 'poi',
					elementType: 'all',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'all',
					stylers: [
						{
							saturation: -100,
						},
						{
							lightness: 45,
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#eeeeee',
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#7b7b7b',
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#ffffff',
						},
					],
				},
				{
					featureType: 'road.highway',
					elementType: 'all',
					stylers: [
						{
							visibility: 'simplified',
						},
					],
				},
				{
					featureType: 'road.arterial',
					elementType: 'labels.icon',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'transit',
					elementType: 'all',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'water',
					elementType: 'all',
					stylers: [
						{
							color: '#46bcec',
						},
						{
							visibility: 'on',
						},
					],
				},
				{
					featureType: 'water',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#c8d7d4',
						},
					],
				},
				{
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#070707',
						},
					],
				},
				{
					featureType: 'water',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#ffffff',
						},
					],
				},
			],
		};
		return dataValues;
	},
	name: 'app',
	components: {
		StaticMap,
	},
	methods: {
		getUrl,
		getStyledUrl,
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

a {
	color: #369;
}
</style>
