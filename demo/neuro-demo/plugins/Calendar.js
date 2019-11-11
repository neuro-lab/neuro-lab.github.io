class Calendar {
	constructor() {
	}

	onAttach(parent, lang) {
		this.options = {
				plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
				//height: 'parent',
				header: {
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				views: {
					listDay: { buttonText: 'list day' },
					listWeek: { buttonText: 'list week' }
				},
				navLinks: true, // can click day/week names to navigate views
				businessHours: true, // display business hours
				editable: false,
			};
		//
		this.calendar = new FullCalendar.Calendar(parent, this.options);
		this.render(parent);
	}

	onLang(parent, obj, lang) {
	}

	onResize(parent, obj) {
		this.render(parent);
	}

	onEvent(parent, obj, eventName, data, lang) {
		let eventObj = JSON.parse(data);
		//
		this.options['defaultView'] = eventObj['config']['defaultView'];
		this.options['defaultDate'] = eventObj['defaultDate'];
		this.options['events'] = eventObj['events'];
		//
		parent.innerHTML = '';
		this.calendar = new FullCalendar.Calendar(parent, this.options);
		this.render(parent);
	}

	render(parent) {
		this.calendar.render();
		//
		parent.querySelector('h2').style.fontSize = '1rem';
		let arr = parent.querySelectorAll('.fc-button');
		for (let i = 0; i < arr.length; i++) {
			let a = arr[i];
			a.style.background = getCssValue('--color-card-table-header-background');
			a.style.color = getCssValue('--color-card-table-header-foreground');
			a.style.borderTop = 'none';
			a.style.borderBottom = 'none';
			a.style.borderColor = '#fff';
			a.style.borderRadius = '0';
			a.style.height = '40px';
		}
	}
}
