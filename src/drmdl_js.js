//drmdl.js v1.0.0
function drmdl_js(ioc) {
    this.ioc = ioc;
	this.ioce = document.querySelectorAll(ioc);
}

drmdl_js.prototype.html = function(html = "jsnosj",for_html = "for continue!") {
	var d_f_for1_var = 0;
	if(for_html == "for continue!"){
		for (let elem of this.ioce) {
      	  if(html == "jsnosj"){
			  return elem.innerHTML;
		  }else{
			  elem.innerHTML = html;
		  }
		}
	}else{
		for (let elem of this.ioce) {
			if(for_html == d_f_for1_var){
				if(html == "jsnosj"){
			  		return elem.innerHTML;
		  	    }else{
			        elem.innerHTML = html;
		        }
			}
			d_f_for1_var++;
		}
	}
};

/*drmdl_js.prototype.attr = function(attr_name,attr_text = "just look!",attr_n = "for continue!") {
	var d_f_for1_var = 0;
	if(attr_n == "for continue!"){
		for (let elem of this.ioce) {
      	  if(attr_text == "just look!")return elem.getAttribute(attr_name);
		  if(attr_text != "just look!")elem.getAttribute(attr_name,attr_text);
		}
	}else{
		for (let elem of this.ioce) {
			if(attr_n == d_f_for1_var){
				if(attr_text == "just look!")return elem.getAttribute(attr_name);
		        if(attr_text != "just look!")elem.getAttribute(attr_name,attr_text);
			}
			d_f_for1_var++;
		}
	}
};*/

drmdl_js.prototype.attr = function(attr_name,attr_n = "for continue!") {
	var d_f_for1_var = 0;
	if(attr_n == "for continue!"){
		for (let elem of this.ioce) {
      	  return elem.getAttribute(attr_name);
		}
	}else{
		for (let elem of this.ioce) {
			if(attr_n == d_f_for1_var){
				return elem.getAttribute(attr_name);
			}
			d_f_for1_var++;
		}
	}
};

drmdl_js.prototype.attr_app = function(attr_name,attr_text,attr_n = "for continue!") {
	var d_f_for1_var = 0;
	if(attr_n == "for continue!"){
		for (let elem of this.ioce) {
		  return elem.getAttribute(attr_name,attr_text);
		}
	}else{
		for (let elem of this.ioce) {
			if(attr_n == d_f_for1_var){
				return elem.getAttribute(attr_name,attr_text);
			}
			d_f_for1_var++;
		}
	}
};

drmdl_js.prototype.prepend = function(html,for_html = "for continue!") {
	var d_f_for1_var = 0;
	if(for_html == "for continue!"){
		for (let elem of this.ioce) {
    		elem.innerHTML = html+elem.innerHTML;
		}
	}else{
		for (let elem of this.ioce) {
			if(for_html == d_f_for1_var){
    			elem.innerHTML = html+elem.innerHTML;
			}
		}
	}
};

drmdl_js.prototype.prepend = function(html,for_html = "for continue!") {
	var d_f_for1_var = 0;
	if(for_html == "for continue!"){
		for (let elem of this.ioce) {
    		elem.innerHTML = html+elem.innerHTML;
		}
	}else{
		for (let elem of this.ioce) {
			if(for_html == d_f_for1_var){
    			elem.innerHTML = html+elem.innerHTML;
			}
		}
	}
};

drmdl_js.prototype.appendTo = function(html,for_html = "for continue!") {
	var d_f_for1_var = 0;
	if(for_html == "for continue!"){
		for (let elem of this.ioce) {
    		elem.innerHTML = elem.innerHTML+html;
		}
	}else{
		for (let elem of this.ioce) {
			if(for_html == d_f_for1_var){
    			elem.innerHTML = elem.innerHTML+html;
			}
		}
	}
};

drmdl_js.prototype.bootstrap = function() {
	_$('head').appendTo(`
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    `);
};

function _$(name){
	return new drmdl_js(name);
}