
class GeoCoder {
	getLatLng(address) {
		if (address === 'Amsterdam') {
			return '52.3700° N, 4.8900° E';
		} else if (address === 'London') {
			return '51.5171° N, 0.1062° W';
		} else if (address === 'Paris') {
			return '48.8742° N, 2.3470° E';
		} else if (address === 'Berlin') {
			return '52.5233° N, 13.4127° E';
		} else {
			return '';
		}
	}
}

class GeoProxy {
	_geoCoder = new GeoCoder();
	_geoCache = {};

	getLatLng(address) {
		if (!this._geoCache[address]) {
			this._geoCache[address] = this._geoCoder.getLatLng(address);
		}
		console.log(`${address} : ${this._geoCache[address]}`);
		return this._geoCache[address];
	}

	getCount() {
		return Object.keys(this._geoCache).length;
	}
}

const run = () => {

	const geo = new GeoProxy();

	// geolocation requests

	geo.getLatLng("Paris");
	geo.getLatLng("London");
	geo.getLatLng("London");
	geo.getLatLng("London");
	geo.getLatLng("London");
	geo.getLatLng("Amsterdam");
	geo.getLatLng("Amsterdam");
	geo.getLatLng("Amsterdam");
	geo.getLatLng("Amsterdam");
	geo.getLatLng("London");
	geo.getLatLng("London");

	console.log("\nCache size: " + geo.getCount());

}

run();
