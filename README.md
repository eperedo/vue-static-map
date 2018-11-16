
# vue-static-map

> a simple component to generate an static google map

![static google map](https://user-images.githubusercontent.com/461124/28100714-6c896d1e-6689-11e7-8a38-327dfe4b6ff5.png)

[Google Documentation](https://developers.google.com/maps/documentation/static-maps/intro)

## Demo

- [SandBox](https://codesandbox.io/s/9o8yqq527p)
- [JSBin example](https://jsbin.com/ganoxoyopo/1/edit?html,js,output)

## Requirements

1.  Vue 2.X.X

## Usage

1.  Install from npm

        npm install vue-static-map

    Or include in your html using the script tag

    ```html
    <script src="https://unpkg.com/vue-static-map/dist/StaticMap.umd.min.js"></script>
    ```

2.  Add component in your app

    ```javascript
    import StaticMap from 'vue-static-map';
    // or require('vue-static-map')
    // or window.StaticMap if you are including in a script tag

    export default {
    	components: {
    		StaticMap,
    	},
    };
    ```

3.  Create some parameters in your data object

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
    				label: 'B',
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
    		type: 'roadmap',
    		size: [800, 400],
    	},
    	components: {
    		StaticMap,
    	},
    };
    ```

4.  In your template just call the static map component

    ```html
    <static-map :google-api-key="apiKey" :format="format" :markers="markers" :zoom="zoom" :center="center" :size="size" :type="type" :paths="paths" :language="language"></static-map>
    ```

## Styled Maps
You can use [Snazzy Maps](https://snazzymaps.com/) to style your maps. You just need to pass a Snazzy Maps' valid style JSON as `customStyle` prop. You can do it in two ways and both will work: As an *array* (defined in your 'data' object) or as a *string* (directly in your template tag —yeah! it looks awful :P— but it's the simplest way without re-indenting and re-quoting the whole JSON to match the —usually restrictive— *eslint* requirements.)

### As an *array*

1.  Create some parameters in your data object

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
    				label: 'B',
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
    		type: 'roadmap',
    		size: [800, 400],
    		customStyle: [
				{
					"featureType": "all",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"weight": "2.00"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#9c9c9c"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "landscape.man_made",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#7b7b7b"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#46bcec"
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#c8d7d4"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#070707"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				}
			],
    	},
    	components: {
    		StaticMap,
    	},
    };
    ```

2.  In your template just call the static map component

    ```html
    <static-map :google-api-key="apiKey" :format="format" :markers="markers" :zoom="zoom" :center="center" :size="size" :type="type" :paths="paths" :language="language" :customStyle="customStyle"></static-map>
    ```

### As a *string* (yuck!)

1. Just paste the Snazzy Maps' JSON into the `customStyle` prop of your static map tag (remember to use simple quotes around the pasted JSON)

    ```html
    <static-map :google-api-key="apiKey" :format="format" :markers="markers" :zoom="zoom" :center="center" :size="size" :type="type" :paths="paths" :language="language" customStyle='[
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "weight": "2.00"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#9c9c9c"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#7b7b7b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#c8d7d4"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#070707"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        }
    ]'></static-map>
    ```

## Events

1.  What about if you want the URL of the map, you can easily do that using the **getUrl** event

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

2.  Add the event on your template

    ```html
    <static-map :google-api-key="apiKey" v-on:get-url="getUrl" :zoom="zoom" :center="center"></static-map>
    ```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run component
```
