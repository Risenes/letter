
let arrSeasonHello = [["寒さ　ひとし　お身にしみる　今日のごろ。", "新春と　は申しながら、まだまだ　寒さが　続いて　おりますが。", "厳寒の候。"], ["節分を　過ぎましたのに、いっこうに　春めいて　まいりませんが。", "春寒の　候。"], ["ひと雨ごとに　春めいて　まいりました。", "ようやく　寒気も　ゆるみは　しめましたが。", "早春の　候。"], ["春の　日　うららかな　今日の　ごろ。", "陽春の　候。", "春暖の　候。"], ["風薫る　季節と　なりましたが。", "若草　ひかる　今日のごろ。", "新緑の　候。"], ["緑の　色　あざやかな　今日の　ごろ。", "入梅の　候。"], ["厳しい　暑さが　続いて　おりますが。", "海山の　恋しい　季節と　なりましたが。", "炎暑の　候。"], ["立秋とは　名ばかりで、暑い　日が　続いて　おりますが。", "残暑の　候。"], ["すっかり　秋らしくなって　まいりましたが。", "ひと雨ごとに　秋らしくなって　いく　今日のごろ。", "初秋の　候。"], ["日ましに　秋が　深まって　まいりましたが。", "菊　かおる　季節となって　まいりましたが。", "紅葉の　候。"], ["寒気の　身にしみる　季節となりましたが。", "小春日和の　いい　お天気が　続きますが。", "晩秋の　候。"], ["寒気日ましに　厳しい　毎日ですが。", "寒冷の　候。"]];
let arrWeather = ["cityは　天気が　良く、太陽が　照ます", "cityは　よく雪が　降っていますが。春の　訪れを　感じる　ことが　できます 。", "cityは　よく雨が　降って　春が　感じられません。",
	"自然は　緑になります。", "cityは　天気が　急に　変わりました。暖かい　日々が　あっという間に　寒い　日に　変わっています。", "cityは　雪が　溶けています。そろそろ　春になります。",
	"cityは　天気が　良く、太陽が　照ます。", "cityは　雨が　降っています　から、天気が　暑く　ありません。", "cityは　海に　行きたくなる　ほど　とても　暑いです。",
	"cityは　天気が　良く、太陽が　照ます。", "cityは　寒くなりました。そろそろ　冬になります。", "cityは　よく　雨が　降っています。",
	"秋になりました。葉っぱが　赤くなりました。", "cityは　天気が　急に　変わりました。暖かい　日々が　あっという間に　寒い　日に　変わっています。", "cityは　いい　天気です。", "cityは　よく　雪が　降って　います。すべてが　白くなりました。", "cityは　寒い　です。家で　こもって　熱い　お茶を　飲みたくなります。"];
let arrHealth = ["私は　元気　です。", "私も　おかげさまで　元気に　しております。",
	"おかげさまで　元気に　暮らしております。", "家族一同　元気にしております。", "別段　変わりなく　暮らしております。"];

let arrNumber = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
	"二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"];
let arrHello = ["緒方　先生、こんにちは。", "緒方　先生、お久しぶり　です。"];
let arrSenseiHealth = ["先生は　お元気　ですか。", "お元気　でいらっしゃいますか。", "いかが　お過ごしで　いらっしゃいますか。", "その　後　お変わりなく　お過ごしの　こと　と存じます。", "先生は　お建やかに　お過ごしの　こと　と存じます。"];
let arrBye = ["お大事に　してください。", "ご自愛の　ほど　お祈り　申し上げます。", "ご健勝の　こと　だと　お喜び　申し上げます。", "どうぞ　くれぐれも　お大切に　なさって　ください。", "お疲れの　出ませんよう、どうぞ　お休を　お大切に　なさって　ください。", "ご自愛　ください。", "お体を　大事に　なさって　ください。", "風邪に　ご用心　ください。"];
let arrArm = ["今回　たっぷ　り書けました　から、ちょっと　良いのが　できたので　はないか　と思います。", "一所懸命　頑張りましたが、なかなか　良い　作品に　ならなかった　と思います。残念　です。", "最近　とても　忙しくて　あまり　書く　時間が　ありませんが、とりあえずで　きたものを　お送りします。", "今回　ちょっと　書く　時間が　少なかったの　ですが、今度　より　頑張りたい　と思います。"];

function getValue() {
	let date = new Date();
	let year = date.getFullYear() - 2018;
	let checkBoxSeasonHello = document.getElementById("SeasonHello");
	let checkBoxWeather = document.getElementById("Weather");
	let checkBoxHealth = document.getElementById("Health");
	let checkBoxArm = document.getElementById("Arm");

	let seasonHello = "";
	let weather = "";
	let health = "";
	let selfName = "";
	let arm = "";

	helloIntext = document.getElementById("letter").innerHTML;
	if (checkBoxSeasonHello.checked == true) {
		hello = arrSeasonHello[date.getMonth()];
		seasonHello = hello[Math.floor(Math.random() * hello.length)];
		while (helloIntext.includes(seasonHello)) {
			seasonHello = hello[Math.floor(Math.random() * hello.length)];
		}
	} else {
		seasonHello = "";
	}
	console.log(seasonHello);

	if (checkBoxWeather.checked == true) {
		weather = arrWeather[document.getElementById('weather').value];
	} else {
		weather = "";
	}

	if (checkBoxHealth.checked == true) {
		health = checkText(arrHealth);
	} else {
		health = "";
	}

	armInText = document.getElementById("letter").innerHTML;
	arm = "";

	if (checkBoxArm.checked == true) {
		if (document.getElementById('selfArm').value == 0) {
			while (armInText.includes(arm)) { arm = arrArm[Math.floor(Math.random() * (1 - 0 + 1)) + 0]; }

		}
		else {
			while (armInText.includes(arm)) { arm = arrArm[Math.floor(Math.random() * (3 - 2 + 1)) + 2]; }
		}
	} else {
		arm = "";
	}
	console.log(arm);

	let helloR = checkText(arrHello);
	let senseiHealth = checkText(arrSenseiHealth);
	let byeR = checkText(arrBye);
	// let armR = checkText(arm);

	let arrSapporo = [senseiHealth, checkText(["札幌の　天気は　どう　ですか。", "そちらの　天気は　いかが　でしょうか。"]), checkText(["お手紙と　お手本　誠に　ありがとう　ございます。", "先生から　お手紙　いただきまして　誠に　ありがとう　ございます。", "先生から　お手紙を　拝見いたしました　誠に　ありがとう　ございます"]), checkText(["作品を　添削して　くださって　誠に　ありがとう ございます。", "作品が よく できたと いうことで とても 嬉しい です。先生の ご指導の おかげ です。ありがとう ございます。"])];
	let arrSelf = [weather, health];
	shuffle(arrSapporo);
	shuffle(arrSelf);
	let arrLetterBody = [arrSapporo.join(" "), arrSelf.join(" ")];
	shuffle(arrLetterBody)

	document.getElementById('letter__hello').innerHTML = helloR + seasonHello + " いつも　お世話に　なって　おります。";
	document.getElementById('letter__body').innerHTML = arrLetterBody.join("<br />");



	let letter = arm + byeR + " これ　からも　よろしく　お願い　いたします。";
	document.getElementById('letter__bye').innerHTML = letter;

	let dateLetter = " 令和 " + arrNumber[year - 1] + " 年 " + arrNumber[date.getMonth()] + " 月　" + arrNumber[date.getDate() - 1] + " 日　";
	document.getElementById('letter__date').innerHTML = dateLetter;

	selfName = document.letter__form.selectName.value.toLowerCase();
	document.getElementById('letter__name').innerHTML = selfName;

	city = document.letter__form.selectCity.value.toLowerCase();
	if (city) {
		document.getElementById("letter__body").innerHTML = document.getElementById("letter__body").innerHTML.replace('city', city);
	}

	let divs = [].slice.call(document.querySelectorAll('.letter__mid')),
		len = divs.length,
		elem = document.createElement("div");

	function randomDiv() {
		for (i = 0; i < len; i++) {
			let rand = Math.floor(Math.random() * len);
			divs[i].parentNode.replaceChild(elem, divs[i]);
			i != rand && divs[rand].parentNode.replaceChild(divs[i], divs[rand]);
			elem.parentNode.replaceChild(divs[rand], elem)
		}
	}
}

function checkText(arrR) {
	let checkT = document.getElementById("letter").innerHTML;
	let textR = arrR[Math.floor(Math.random() * arrR.length)];
	while (checkT.includes(textR)) {
		textR = arrR[Math.floor(Math.random() * arrR.length)];
	}
	return textR;
}

function shuffle(array) {
	var i = 0
		, j = 0
		, temp = null

	for (i = array.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1))
		temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
}

function boxFunctionWeather() {
	let checkBox = document.getElementById("Weather");
	if (checkBox.checked == true) {
		weather.disabled = false;
	} else {
		weather.disabled = true;
	}
}

function boxFunctionArm() {
	let checkBox = document.getElementById("Arm");
	if (checkBox.checked == true) {
		selfArm.disabled = false;
	} else {
		selfArm.disabled = true;
	}
}




