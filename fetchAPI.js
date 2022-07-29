
//fetch API with caching, set the appropriate values for url, params and header options
let cache = {};
const request = (url, params, method="GET")=>{
	let cacheKey = JSON.stringify({url, params, method});
	if (cache[cacheKey]){
		return cache[cacheKey];
	}
	let options = {	
		method
		//headers:'Accept': 'application/json'
	}
	
	if (method === "GET"){
		url += '?' + ( new URLSearchParams( params)).toString();
	}
	else{
		options.body = JSON.stringify(params);
	}
	// this is a promise
	const result = fetch(url, options).then(resp => resp.json())
	cache[cacheKey] = result;
	return result;
}

const get = (url, params) => request(url, params, "GET");
const post = (url, params) => request(url, params, "POST");


get(url,params).then(data => console.log(data));
