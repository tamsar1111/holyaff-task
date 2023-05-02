'use strict';

document.addEventListener("DOMContentLoaded", function() {
	/**
	 * Collect user answers
	 * */
	// Getting responses nodes and the resulting button
	const questions = document.querySelectorAll('.questions .survey_button');
	const resultBtn = document.getElementById('p_modal_button3');

	// Empty array to store answers
	const userResults = [];

	// Event listener on answers
	questions.forEach(function (item){
		item.addEventListener('click', function (){
			// Get & add answer to array
			let result = item.querySelector('[data-question-value]').textContent;
			userResults.push( result );
		})
	})

	// Displaying the results in the console on clicking by the button of the modal window
	resultBtn.addEventListener('click', function (){
		console.log( userResults );
	})


	/**
	 * Comment form
	 * */
	// Getting a form node
	const commentForm = document.querySelector('.comments-form');
	// Event listener on form submission
	commentForm.addEventListener('submit', function (event){
		event.preventDefault();

		// Getting username and comment fields
		let name = commentForm.querySelector('[name="name"]').value;
		let comment = commentForm.querySelector('[name="comment"]').value;

		// Checking if a username and comment exist
		if ( !name && !comment ) {
			alert('Enter your Name and Comment, please.');
		} else {
			// Creating markup for a future comment
			const commentMarkup = `
			<div class="profile">
				<img src="assets/images/user.jpg"></div>
			<div class="comment-content">
				<p class="name">${name}</p>
				<p>${comment}</p>
			</div>
			<div class="clr"></div>
			<div class="comment-status">
				<span>
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">Curte·comente</font>
					</font>
					<img src="assets/images/like.png" width="15px" height="15px" alt="">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">0</font>
					</font>
				</span>
				<font style="vertical-align: inherit;">
					<small>
						<font style="vertical-align: inherit;">·</font>
					</small>
					<small>
						<u>
							<font style="vertical-align: inherit;">1 minute antes</font>
						</u>
					</small>
				</font>
				<small>
					<font style="vertical-align: inherit;"></font>
					<u>
					<font style="vertical-align: inherit;"></font>
				</u>
				</small>
			</div>
		`;

			// Creating a comment block
			const commentBlock = document.createElement('div');
			commentBlock.classList.add('comments');
			commentBlock.innerHTML = commentMarkup;

			// Adding a comment after a form
			commentForm.after( commentBlock );
		}
	})
})