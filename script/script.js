
let arrSeasonHello = [["寒さひとしお身にしみる今日のごろ。", "新春とは申しながら、まだまだ寒さが続いておりますが。", "厳寒の候。"], ["節分を過ぎましたのに、いっこうに春めいてまいりませんが。", "春寒の候。"], ["ひと雨ごとに春めいてまいりました。", "ようやく寒気もゆるみはしめましたが。", "早春の候。"], ["春の日うららかな今日のごろ。", "陽春の候。", "春暖の候。"], ["風薫る季節となりましたが。", "若草ひかる今日のごろ。", "新緑の候。"], ["緑の色あざやかな今日のごろ。", "入梅の候。"], ["厳しい暑さが続いておりますが。", "海山の恋しい季節となりましたが。", "炎暑の候。"], ["立秋とは名ばかりで、暑い日が続いておりますが。", "残暑の候。"], ["すっかり秋らしくなってまいりましたが。", "ひと雨ごとに秋らしくなっていく今日のごろ。", "初秋の候。"], ["日ましに秋が深まってまいりましたが。", "菊かおる季節となってまいりましたが。", "紅葉の候。"], ["寒気の身にしみる季節となりましたが。", "小春日和のいいお天気が続きますが。", "晩秋の候。"], ["寒気日ましに厳しい毎日ですが。", "寒冷の候。"]];
let arrWeather = ["cityは天気が良く、太陽が照ます", "cityはよく雪が降っていますが。春の訪れを感じることができます 。", "cityはよく雨が降って春が感じられません。",
	"自然は緑になります。", "cityは天気が急に変わりました。暖かい日々があっという間に寒い日に変わっています。", "cityは雪が溶けています。そろそろ春になります。",
	"cityは天気が良く、太陽が照ます。", "cityは雨が降っていますから、天気が暑くありません。", "cityは海に行きたくなるほどとても暑いです。",
	"cityは天気が良く、太陽が照ます。", "cityは寒くなりました。そろそろ冬になります。", "cityはよく雨が降っています。",
	"秋になりました。葉っぱが赤くなりました。", "cityは天気が急に変わりました。暖かい日々があっという間に寒い日に変わっています。", "cityはいい天気です。", "cityはよく雪が降っています。すべてが白くなりました。", "cityは寒いです。家でこもって熱いお茶を飲みたくなります。"];
let arrHealth = ["私は元気です。", "私もおかげさまで元気にしております。",
	"おかげさまで元気に暮らしております。", "家族一同元気にしております。", "別段変わりなく暮らしております。"];

let arrNumber = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
	"二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"];
let arrHello = ["緒方先生、こんにちは。", "緒方先生、お久しぶりです。"];
let arrSenseiHealth = ["先生はお元気ですか。", "お元気でいらっしゃいますか。", "いかがお過ごしでいらっしゃいますか。", "その後お変わりなくお過ごしのことと存じます。", "先生はお建やかにお過ごしのことと存じます。"];
let arrBye = ["お大事にしてください。", "ご自愛のほどお祈り申し上げます。", "ご健勝のことだとお喜び申し上げます。", "どうぞくれぐれもお大切になさってください。", "お疲れの出ませんよう、どうぞお休をお大切になさってください。", "ご自愛ください。", "お体を大事になさってください。", "風邪にご用心ください。"];
let arrArm = ["今回たっぷり書けましたから、ちょっと良いのができたのではないかと思います。", "一所懸命頑張りましたが、なかなか良い作品にならなかったと思います。残念です。", "最近とても忙しくてあまり書く時間がありませんが、とりあえずできたものをお送りします。", "今回ちょっと書く時間が少なかったのですが、今度より頑張りたいと思います。"];

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

	let arrSapporo = [senseiHealth, checkText(["札幌の天気はどうですか。", "そちらの天気はいかがでしょうか。"]), checkText(["お手紙とお手本誠にありがとうございます。", "先生から　お手紙　いただきまして　誠に　ありがとう　ございます。", "先生からお手紙を拝見いたしました誠にありがとうございます"]), checkText(["作品を添削してくださって誠にありがとう ございます。", "作品が よく できたと いうことで とても 嬉しい です。先生の ご指導の おかげ です。ありがとう ございます。"])];
	let arrSelf = [weather, health];
	shuffle(arrSapporo);
	shuffle(arrSelf);
	let arrLetterBody = [arrSapporo.join(" "), arrSelf.join(" ")];
	shuffle(arrLetterBody)

	document.getElementById('letter__hello').innerHTML = helloR + seasonHello + " いつもお世話になっております。";
	document.getElementById('letter__body').innerHTML = arrLetterBody.join("<br />");



	let letter = arm + byeR + " これからもよろしくお願いたします。";
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




