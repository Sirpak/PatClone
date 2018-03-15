


//You'll need to make a server request to get the array of possible files. 
//This is the only way to do this without sticking to a naming convention or 
//a set list of files.

// so with the png folder, I used a naming convention
// then created var random number below to pluck
// a random image out of the file of 369 images

// KeyData will hold the sounds for each key
// not all keys where assigned a sound because 
// if the user types to fast it becomes too chaotic and sounds
// horrible, even though that was not the design intent


var keyData = {
	a: {
	sound: new Howl({
		src:['sounds/Synth_Loop_3-125-G.wav']
	})
		},
	f: {
	sound: new Howl({
		src:['sounds/15_Doepfer_Bassline-E.wav']
	})
		},
	c: {
	sound: new Howl({
		src:['sounds/ADC_CTV1_Batch_Chords_E.wav']
	})
		},
	d: {
	sound: new Howl({
		src:['sounds/ADC_CTV1_Eletronik_Chords_B.wav']
	})
		},
	e: {
	sound: new Howl({
		src:['sounds/ADC_CTV1_Eletronik_Full_B.wav']
	})
		},
	i: {
	sound: new Howl({
		src:['sounds/ADC_CTV1_Energy_Drums.wav']
	})
		},
	m: {
	sound: new Howl({
		src:['sounds/ADC_CTV1_Energy_Snare.wav']
	})
		},
	n: {
	sound: new Howl({
		src:['sounds/BD-PHFL_128_Bonus_FX_09.wav']
	})
		},
	j: {
	sound: new Howl({
		src:['sounds/BD-PHFL_128_Bonus_FX_10.wav']
	})
		},
	o: {
	sound: new Howl({
		src:['sounds/BD-PHFL_128_Bonus_FX_14.wav']
	})
		},
	h: {
	sound: new Howl({
		src:['sounds/BD-PHFL_128_Bonus_FX_16.wav']
	})
		},
}


// array that stores all the images created by randdomPng
var emages = [];


// takes a random # then builds as a filename that 
// we pass into new Raster to display that image
// onto the screen 

function randomPng (x) {
var randomnumber = Math.floor(Math.random() * (369 - 1 + 1)) + 1;

var emagesurl = "png/x (" + randomnumber + ").png";

var nuEmage = new Raster(emagesurl);
	nuEmage.scale(0.45);
	nuEmage.position = x;
	emages.push(nuEmage);
	
	
};


// below new point is gotten by the traditional .random process (0-1) 
// so a i.e. .67 * maxPoint which is the largest screen size (view.size.w/h)
// that we can have gives us a random point on our view
// if (keyData[e.key]) checks to see if its truthy
// so i.e. if there is an object built for that specific key
// in keyData (I didn't build sounds for all keys, too crazy)
// else it creates a new Raster img on the screen with no sound 


function onKeyDown(e){
	if(keyData[e.key]) {
	keyData[e.key].sound.play();
	keyData[e.key].sound.fade(1, 0, 5000);
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var knewPoint = maxPoint * randomPoint;
	randomPng(knewPoint);
} else {
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var knewPoint = maxPoint * randomPoint;
	randomPng(knewPoint);
}
}


// scales down the images on the screen frame by frame
function onFrame(e) {
	for( var i = 0; i < emages.length; i++){
		emages[i].scale(.99);
		


		if(emages[i].size.width < 1){
			emages[i].remove(); // takes image off canvas
			emages.splice(i, 1); // off of array
			i--;// dec i so we don't skip a img
			
			
		};
		
	}
}










