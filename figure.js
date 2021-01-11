const type = {
	CROSS: "x.svg",
	ZERO: "0.svg"
}

class Figure {

	constructor(type, position) {
		this.type = type;
		this.position = position;
	}

	print() {
		console.log(`type = ${this.type}, position = ${this.position}`)
	}

	display(visible) {
		document.getElementById(`item${this.position}`).style.backgroundImage = (visible ? `url(${this.type})` : "");
	}

}