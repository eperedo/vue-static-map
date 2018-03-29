<template>
	<img v-bind:src="mapUrl" v-bind:alt="altText" v-bind:title="titleText" />
</template>

<script>

const BASE_URL_MAP = 'https://maps.googleapis.com/maps/api/staticmap?';

function generateFormatMap() {
	return this.format.toLowerCase();
}

function generateMapType() {
	const types = ['roadmap', 'satellite', 'hybrid', 'terrain'];
	const currenType = this.type;
	if (types.indexOf(currenType) > -1) {
		return currenType;
	}
	throw Error(`Type must be one of the following values ${types.join(', ').toUpperCase()}`);
}

function generateMapUrl() {
	const mapUrl = `${BASE_URL_MAP}center=${this.center}&zoom=${this.zoom}&size=${this.sizeMap}&maptype=${this.mapTypeMap}&format=${this.formatMap}&key=${this.googleApiKey}&scale=${this.scaleMap}&language=${this.language}${this.markersMap}${this.pathsMap}`;
	this.$emit('get-url', mapUrl);
	return mapUrl;
}

function generateMarkers() {
	const markers = this.markers.map((marker) => {
		const color = `color:${marker.color}|`;
		const size = `size:${marker.size}|`;
		const label = `label:${marker.label}|`;
		const icon = `icon:${marker.icon}|`;
		const latLng = `${marker.lat},${marker.lng}`;
		let markerUrl = '&markers=';
		if (marker.color) {
			markerUrl += color;
		}
		if (marker.size) {
			markerUrl += size;
		}
		if (marker.label) {
			markerUrl += label;
		}
		if (marker.icon) {
			markerUrl += icon;
		}
		if (marker.lat && marker.lng) {
			markerUrl += latLng;
		}
		// const markerUrl = `&markers=${icon}|${size}|${color}|${label}|${latLng}`;
		return markerUrl;
	});
	return markers.join('');
}

function generatePaths() {
	const paths = this.paths.map((path) => {
		const color = `color:${path.color}`;
		const weight = `weight:${path.weight}`;
		const geodesic = `geodesic:${path.geodesic}`;
		const fillcolor = `fillcolor:${path.fillcolor}`;
		const latLng = path.locations.map((location) => {
			if (location.startLat && location.endLng) {
				return `|${location.startLat},${location.endLng}`;
			}
			throw Error('The path object must have startLat and endLng properties');
		});
		const joinLatLng = latLng.join('');
		const pathUrl = `&path=${color}|${fillcolor}|${geodesic}|${weight}${joinLatLng}`;
		return pathUrl;
	});
	return paths[0];
}

function generateScaleMap() {
	const allowedScales = ['1', '2', '4'];
	if (allowedScales.indexOf(this.scale) > -1) {
		return this.scale;
	}
	throw Error(`Scale only can have the values ${allowedScales.join(', ')}`);
}

function generateSizeMap() {
	if (this.size.length > 0) {
		const size = this.size;
		return `${size[0]}x${size[1]}`;
	}
	throw Error('Size must have 2 values: WIDTH AND HEIGHT');
}

export default {
	computed: {
		formatMap: generateFormatMap,
		mapTypeMap: generateMapType,
		mapUrl: generateMapUrl,
		markersMap: generateMarkers,
		pathsMap: generatePaths,
		scaleMap: generateScaleMap,
		sizeMap: generateSizeMap,
	},
	props: {
		altText: {
			type: String,
			required: false,
			default: 'Static Google Map',
		},
		titleText: {
			type: String,
			required: false,
			default: 'Static Google Map',
		},
		center: {
			type: String,
			required: true,
		},
		format: {
			type: String,
			default: 'png',
		},
		getUrl: {
			type: Function,
		},
		googleApiKey: {
			type: String,
			required: true,
		},
		language: {
			type: String,
			default: 'en',
		},
		markers: {
			type: Array,
			default: () => [],
		},
		paths: {
			type: Array,
			default: () => [],
		},
		type: {
			type: String,
			default: 'roadmap',
		},
		scale: {
			type: String,
			default: '1',
		},
		size: {
			type: Array,
			default: () => [500, 400],
		},
		zoom: {
			type: Number,
			required: true,
		},
	},
};
</script>

