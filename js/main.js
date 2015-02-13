var blueberries = {
info: 'Vaccinium corymbosum',
growsOnShrub: 'true',
energy: 240,
carbohydrates: 14.49,
protein: 0.74
};
  
var grapes = {
info: 'Vitis vinifera',
growsOnShrub: 'false',
energy: 288,
carbohydrates: 18.1,
protein: 0.72,
};

var redCurrants = {
info: 'Ribes rubrum',
growsOnShrub: 'true',
energy: 234,
carbohydrates: 13.8,
protein: 1.4
};

var writeFruitInfo = function (fruit) {
    document.write ('<h1>' + fruit.info  + '</h1>');
    
    document.write('<dl>');
    
	document.write('<dt>Grows on shrub</dt>');
	document.write('<dd>' + fruit.growsOnShrub +'</dd>');
    
	document.write('<dt>Energy</dt>');
	document.write('<dd>'+ fruit.energy + ' KJ </dd>');
    
	document.write('<dt>Carbohydrates</dt>');
	document.write('<dd>' + fruit.carbohydrates +' g </dd>');
    
	document.write('<dt>Protein</dt>');
	document.write('<dd> ' + fruit.protein + ' g </dd>');
    
	document.write('</dl>');
};


var allFruitInfo = [blueberries,grapes,redCurrants];
allFruitInfo.forEach(writeFruitInfo);


