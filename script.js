function jQuery (selector, context = document) {
    this.elements = Array.from(context.querySelectorAll(selector));
    return this
}


jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

// Задание 1 (не работает)
// Написать метод jQuery.prototype.html(), 
// который возвращает или изменяет html-содержимое выбранных элементов.

jQuery.prototype.html = function(old_tag, tag = undefined) {
    if (tag === undefined) {
        console.log(tag);
        return this;
    }else {
        this.each(element => element.old_tag = tag);
        console.log(tag);
        return this;
    }
    
}

// Задание 2 (работает)
// Написать метод jQuery.prototype.text(), 
// который возвращает или изменяет текстовое содержимое выбранных элементов

jQuery.prototype.text = function(txt_cont = null) {
    if (txt_cont === null) {
        
        return this;
    } else {
        
        this.each(element => element.textContent = txt_cont);
        
        return this;
    }
}

const $ = (e) => new jQuery(e);

//ПРОВЕРКА

//$('h1', 'h3').html(); -- не работает
//$('h1').html(); -- не работат
//$('strong').text('TEXT IS CHANGED TO THIS'); ---  работает