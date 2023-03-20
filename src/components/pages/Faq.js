import React from 'react';

function FAQ() {
    return (
        <div className="container">
            <h2>Frequently Asked Questions</h2>
            <p>We love answering your questions, but to save us all some time, we compiled some of the most common things we're asked and our answers below. Still got a question? Find out more about how to contact us on our contact page!</p>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h3 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        What is Just Buy?
                    </button>
                    </h3>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Just Buy is the e-commerce site you're on just now! We think buying products online doesn't need to be complicated so we took all the complexity out. So no need to stress -- just buy!</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        What do you sell?
                    </button>
                    </h3>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">We sell any of the products you see on this site! For specific ideas, why not try using the shop button in the nav bar above or looking through the product categories in our footer below?</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        How is Just Buy different from other shopping services?
                    </button>
                    </h3>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">There are three things that set us apart from others: the ease with which you can purchase our products, the quality of our range and the sheer variety of delivery options!</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header" id="flush-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        What delivery options do you offer?
                    </button>
                    </h3>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">We'll deliver products in pretty much any way you want! From rocket ships to carrier pigeons, we want our customers to be able to choose what works best for them. Note that not all delivery options are available for all products.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header" id="flush-headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseive">
                        Can I return items?
                    </button>
                    </h3>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Of course! As long as it's within 35 days of purchase, the product is undamaged and you have your proof of purchase or confirmation email.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;