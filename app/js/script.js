// localStorage.clear();

const form = document.getElementById("form");
const btnSubmit = document.getElementById("btnSubmit");
if (localStorage.getItem("formFields")) {
	const formFields = form.elements;

	for (let i = 0; i < formFields.length; i++) {
		if (localStorage.getItem(formFields[i].name)) {
			if (formFields[i].type !== "radio") {
				formFields[i].value = localStorage.getItem(formFields[i].name);
			} else {
				document.getElementById(localStorage.getItem(formFields[i].name)).checked = true;
				document.body.className = "";
				document.body.classList.add(localStorage.getItem(formFields[i].name) + "Theme");
			}
		}
	}
}

$(".chosenSelect").chosen({ disable_search_threshold: 50 });

$(".chosenSelect")
	.chosen()
	.change(function (event) {
		localStorage.setItem("formFields", true);
		localStorage.setItem(event.target.name, $(event.target).val());
	});

form.addEventListener("submit", function (e) {
	e.preventDefault();

	let theme = document.querySelector('input[name="theme"]:checked').value;

	document.body.className = "";
	document.body.classList.add(theme + "Theme");

	const formFields = form.elements;
	localStorage.setItem("formFields", true);

	for (let i = 0; i < formFields.length; i++) {
		if (formFields[i].name && formFields[i].type !== "select-one") {
			if (formFields[i].type !== "radio") {
				localStorage.setItem(formFields[i].name, formFields[i].value);
			} else if (formFields[i].checked === true) {
				localStorage.setItem(formFields[i].name, formFields[i].id);
			}
		}
	}
});
