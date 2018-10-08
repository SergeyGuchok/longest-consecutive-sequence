module.exports = function longestConsecutiveLength(array) {
	if(array.length==0){return 0}
 	
 	let lengths=1;	
	let count=1;

	let set = new Set(array);

 	set.forEach(function(item) {
 		let plus =1+ item;
 		let minus = 1- item;
 
 		while(set.has(plus)){
 			plus++;
 			count++
 			if(count>lengths)lengths=count;
 		}
 		while(set.has(minus)){
 			minus--;
 			count++;
 			if(count>lengths) lengths=count;
 		}
 		count = 1;
 	}
 )
 return lengths;
}
