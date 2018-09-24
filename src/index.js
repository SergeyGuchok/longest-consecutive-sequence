module.exports = function longestConsecutiveLength(array) {
	array = array.sort((a,b)=>a-b);
	let count = 1;
	let score = 1;
	for(let i = 0; i<array.length-1; i++){
		if(array[i]==array[i+1]-1){
			count++;
		}else{ count = 1;}
		if(count>score){
			score = count;
		}
		
	}
	return array.length == 0 ? 0 : score;
}
