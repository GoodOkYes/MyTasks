
let app = new Vue ({
	el: '#app',
	data: {
	elems: ['!', '?', '*'],
	num1: 1,
	num2: 2,
	text: 'hello',
	text2: '12345',
	elems2: ['%', '?', '*'],
	items: [8, 6, -22, 15, 14, -9, 7, -5, 3],
	number: [8, 6, 15, 14, 3],
	age: 25,
	show: true,
	mass: '',
	massive: [],
	lil: [],
	type: '',
	select: 'Loremus',
	options: ['Loremus', 'LoreText', 'LoreMain'],
	classes: {
	isValid: true,
	invalid: false,
	},
	style: false,
	textp: '',
	Cyrsiv: '',
	buttons: ''
	},	

	methods: {
		/*
		show: function() {
			console.log('Hello');
		},
		summa: function() {
			console.log("Сумма элементов - " + (this.num1+this.num2));
		},
		ii: function() {
			alert("Это - "+this.text);
		},
		chengeText: function() {
			this.text2 = 'abcde';
		},
		addElem: function() {
			this.elems2.push('!!!');
		},
		*/


		/*5.7
		filter1: function() {
		this.items = this.items.filter(n => n > 0 && n < 10);	
		},
		*/

		/*6.4
		db: function() {
			this.number.splice(index, 1, Math.pow([index], 2));
		},
		*/

		/*7.14
		tl: function() {
			this.show = !this.show;
		}
		*/
		/*10.2
		add: function() {
			this.massive.push(this.mass);
		}
		*/
		/*17.1
		textad: function() {
			this.textp = '212';
		}
		*/
		/*17.3
		chage: function() {
			this.text = '212';
		}
		*/
		/*17.4
		nng: function() {
			this.Cyrsiv = '<i>Курсив</i>';
		}
		*/
		/*18.3
		left: function() {
			this.buttons = 'left';
		},
		right: function() {
			this.buttons = 'right';
		},
		middle: function() {
			this.buttons = 'middle';
		}
		*/

	},
});

