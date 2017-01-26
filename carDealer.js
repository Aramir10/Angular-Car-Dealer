
var app = angular.module("instantSearch", []);

app.filter('searchFor', function(){
	return function(vrr, searchString){

		if(!searchString){
			return vrr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(vrr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

///////////////////////////////

function InstantSearchController($scope){

	$scope.items = [
		{
			url: 'https://www.tesla.com/',
			title: 'Tesla',
			Price : 25000,
			image: 'https://tctechcrunch2011.files.wordpress.com/2015/08/tesla_model_s.jpg?w=738'
		},
		{
			url: 'http://www.subaru.com/vehicles/wrx/index.html',
			title: 'Subaru ',
			Price : 15000,
			image: 'https://d3lp4xedbqa8a5.cloudfront.net/imagegen/max/658/-/s3/digital-cougar-assets/motor/2015/10/23/47951/sweet-dream-subaru-wrx-sti-23B-main.jpg'
		},
		{
			url: 'https://www.audiusa.com/',
			title: 'Audi',
			Price : 20000,
			image: ' http://icdn3.digitaltrends.com/image/2017-audi-r8-v10-plus-0010-800x533-c.jpg'
		},
		{
			url: 'https://www.lamborghini.com/en-en/',
			title: 'Lambo',
			Price : 55000,
			image: 'https://s-media-cache-ak0.pinimg.com/originals/66/82/a6/6682a6f2dc127e38e4212e7775fe65b5.jpg'
		},
		{
			url: 'http://www.honda.com/',
			title: 'Honda Civic Si',
			Price : 35000,
			image: 'http://o.aolcdn.com/dims-shared/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/http://www.blogcdn.com/www.autoblog.com/media/2010/07/lead1civicsihppreview2010.jpg'
		},
		{
			url: 'https://www.mbusa.com/mercedes/index',
			title: 'Mercedez',
			Price : 45000,
			image: 'http://2.bp.blogspot.com/-NBlu2VMVUxU/Tg_oNw1NDLI/AAAAAAAAF_E/mMzRY-xj67g/s1600/2011-MEC-Design-Mercedes-Benz-SLS-AMG-Rear-Angle-Door-Open.jpg'
		},
		{
			url: 'http://www.miniusa.com/',
			title: 'Mini cooper ',
			Price : 10000,
			image: 'https://s3.amazonaws.com/thingiverse-resources/3D-Printed-Mini-Cooper-Parts-Accessories.jpg'
		}
	];


}