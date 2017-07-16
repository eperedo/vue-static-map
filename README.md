# vue-static-map

> a simple component to generate static google map

![static google map](https://user-images.githubusercontent.com/461124/28100714-6c896d1e-6689-11e7-8a38-327dfe4b6ff5.png)

## Requirements

1. Vue 2.X.X
2. vue-cli https://github.com/vuejs/vue-cli (for development only)

## Usage

1. Install from npm

		npm install vue-static-map

2. Add component in your app

	```javascript
	import StaticMap from 'vue-static-map';
	// or require('vue-static-map')
	// or window.StaticMap if you are including in a script tag

	export default {
		components: {
			StaticMap,
		},
	}

	```

3. Create some parameters in your data object

	```javascript
	export default {
		data: {
			apiKey: 'YOUR_GOOGLE_API_KEY', // required
			zoom: 13, // required
			center: 'Brooklyn+Bridge,New+York,NY',
			format: 'gif',
			language: 'ja',
			markers: [
				{
					label: 'B', color: 'blue', lat: 40.702147, lng: -74.015794, size: 'normal',
				},
				{
					label: 'Y', color: 'yellow', lat: 40.711614, lng: -74.012318, size: 'tiny',
				},
				{
					label: 'G', color: 'green', lat: 40.718217, lng: -74.015794, size: 'small', icon: 'http://www.airsoftmap.net/images/pin_map.png',
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
			type: 'roadmap',
			size: [800, 400],
		},
		components: {
			StaticMap,
		},
	}
	```

4. In your template just call the static map component

	```html
	<static-map :google-api-key="apiKey" :format="format" :markers="markers" :zoom="zoom" :center="center" :size="size" :type="type" :paths="paths" :language="language"></static-map>
	```

## Events

1. What about if you want the URL of the map, you can easily do that using the **getUrl** event

	```javascript
		function getUrl(url) {
			this.url = url;
		}

		export default {
			data: () => {
				const dataValues = {
					apiKey: 'YOUR_API_KEY',
					center: 'Empire State Building',
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
	```

2. Add the event on your template

	```html
	<static-map :google-api-key="apiKey" v-on:getUrl="getUrl" :zoom="zoom" :center="center"></static-map>
	```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
vue build src/components/StaticMap.vue --prod --lib
```
