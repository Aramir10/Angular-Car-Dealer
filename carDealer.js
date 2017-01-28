

var app = angular.module("instantCarSearch", []);

app.filter('searchFor', function(){
	return function(vrr, carString){

		if(!carString){
			return vrr;
		}

		var result = [];

		carString = carString.toLowerCase();

		angular.forEach(vrr, function(item){

			if(item.title.toLowerCase().indexOf(carString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

///////////////////////////////

function carSearchController($scope){

	$scope.cars = [
		{
			url: 'https://www.tesla.com/',
			model: 'Tesla',
      id:3,
			Price : 25000,
			image: 'https://tctechcrunch2011.files.wordpress.com/2015/08/tesla_model_s.jpg?w=738'
		},
		{
			url: 'http://www.subaru.com/vehicles/wrx/index.html',
			model: 'Subaru ',
      id:3,
      Price : 15000,
			image: 'https://d3lp4xedbqa8a5.cloudfront.net/imagegen/max/658/-/s3/digital-cougar-assets/motor/2015/10/23/47951/sweet-dream-subaru-wrx-sti-23B-main.jpg'
		},
		{
			url: 'https://www.audiusa.com/',
			model: 'Audi',
      id:1,
			Price : 20000,
			image: ' http://icdn3.digitaltrends.com/image/2017-audi-r8-v10-plus-0010-800x533-c.jpg'
		},
		{
			url: 'https://www.lamborghini.com/en-en/',
			model: 'Lambo',
      id:2,
			Price : 55000,
			image: 'https://s-media-cache-ak0.pinimg.com/originals/66/82/a6/6682a6f2dc127e38e4212e7775fe65b5.jpg'
		},
		{
			url: 'http://www.honda.com/',
			model: 'Honda Civic Si',
      id:2,
			Price : 35000,
			image: 'http://o.aolcdn.com/dims-shared/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/http://www.blogcdn.com/www.autoblog.com/media/2010/07/lead1civicsihppreview2010.jpg'
		},
		{
			url: 'https://www.mbusa.com/mercedes/index',
			model: 'Mercedez',
     id:1,
			Price : 45000,
			image: 'http://2.bp.blogspot.com/-NBlu2VMVUxU/Tg_oNw1NDLI/AAAAAAAAF_E/mMzRY-xj67g/s1600/2011-MEC-Design-Mercedes-Benz-SLS-AMG-Rear-Angle-Door-Open.jpg'
		},
		{
			url: 'http://www.miniusa.com/',
		model: 'Mini cooper ',
     id:2,
			Price : 10000,
			image: 'https://s3.amazonaws.com/thingiverse-resources/3D-Printed-Mini-Cooper-Parts-Accessories.jpg'
		}];

	$scope.makes = [
   {
    type : "Sport",
		id:1
	 },
	 {
    type : "Luxury",
		id:2
	 },
	 {
    type : "Electric",
		id:3
	 }

	]

	}
