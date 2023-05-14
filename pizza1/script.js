let topping_options_array = [
  {
        name: 'Pepperoni',
        img_src: './imgs/pic1.png',
        price: 1,
        special: true
     },
    {
      name: 'Olives',
      img_src: './imgs/pic2.jpg',
       price: 1.2,
     special: false
   },
   {
       name: 'Extra Cheese',
      img_src: './imgs/pic3.jpg',
         price: 1,
        special: false
    },
    {
        name: 'Mushroom',
        img_src: './imgs/pic4.jpg',
       price: 1,
       special: true
   },
    {
       name: 'Bacon',
       img_src: './imgs/pic5.jpg',
      price: 1.5,
      special: false
  },
   {
        name: 'Mountain Goat Droppings',
        img_src: './imgs/pic6.jpg',
        price: 5,
        special: true
    }
 
  ];
 let toppings_menu = document.getElementsByClassName('topping-options-menu')[0];
     //console.log(toppings_menu);
    function create_topping_card(topping_obj){
    console.log(topping_obj);

    // create a new topping card and add it in menu division
    let new_card = document.createElement('div');
    new_card.classList.add('topping-card');
    toppings_menu.appendChild(new_card);

    // create the special span and add it inside the CARD
    let special_span = document.createElement('span');
    special_span.classList.add('special');
   special_span.innerHTML = 'SPECIAL';
    if(topping_obj.special == false) // if( !topping_obj.special )
         special_span.classList.add('no-display');
         new_card.appendChild(special_span);

    // img&name div into new card
     let img_name_div = document.createElement('div');
     img_name_div.classList.add("topping-img-name-div");
     new_card.appendChild(img_name_div);

     // img into img&name div
     let topping_img = document.createElement('img');
     topping_img.classList.add('topping-img');
    topping_img.src = topping_obj.img_src;
    img_name_div.appendChild(topping_img);

    // name h2 inside img&name div
     let topping_name_h2 = document.createElement('h2');
     topping_name_h2.classList.add('topping-name');
     topping_name_h2.innerHTML = topping_obj.name;
     img_name_div.appendChild(topping_name_h2);

    // price div into card
     let new_price_div = document.createElement('div');
     new_price_div.classList.add('topping-price-div');
    new_card.appendChild(new_price_div);
    // span'extra' into price div
    let extra_span = document.createElement('span');
     extra_span.innerHTML = 'extra';
     new_price_div.appendChild(extra_span);
    // h1 price into price div
    let topping_price_h1 = document.createElement('h1');
    topping_price_h1.classList.add('topping-price');
     topping_price_h1.innerHTML = topping_obj.price;
     new_price_div.appendChild(topping_price_h1);

    // $ symbol h1 into price div
     let dollar_h1 = document.createElement('h1');
    dollar_h1.innerHTML = '$';
   new_price_div.appendChild(dollar_h1);
}
 for(let i = 0; i < topping_options_array.length; i++)
     create_topping_card(topping_options_array[i]); // a hidden line of code happens when we provide a parameter to a function topping_obj = topping_options_array[i]
 // highlight selected cards
    
// TO DO get the cards of each topping from html doc 
 // TO DO run a for loop through those cards to assign onclick event listener
 // TO DO create a function to be called by above event listener that toggles CSS class
   let topping_cards = document.getElementsByClassName('topping-card');
for(let i = 0; i < topping_cards.length; i++)
    topping_cards[i].onclick = highlight_selected_card;
 function highlight_selected_card(){
    this.classList.toggle('selected-highlight');
 }    
 // select all
 // TO DO get the select all button from document
 // TO DO assign an onclick evenlistener to the btn
 // TO DO the function called by event listener will ADD class for ALL cards

 let select_all_btn = document.getElementById('select-all-btn');
 select_all_btn.onclick = function(){
    for(i = 0; i < topping_cards.length; i++)
        topping_cards[i].classList.add('selected-highlight');
 };
 // clear all
 // TO DO get the clear all button from document
 // TO DO assign an onclick eventlistener to above button
// TO DO function called by that eventlistener will remove the CSS class from ALL cards

 let clear_all_btn = document.getElementById("clear-all-btn");
  clear_all_btn.onclick = function(){
      for(i = 0; i < topping_cards.length; i++)
         topping_cards[i].classList.remove('selected-highlight');
 };
 // confirm order
 // TO DO get the confirm button from document
 // TO DO get the modal from document
 // TO DO get the modal background div from document
// TO DO assign onclick eventlistener to confirm button
 // TO DO function that is called with that eventlistener will reveal modal and modalBG by remove the no-display CSS class from modal and modalBG
 let confirm_order_btn = document.getElementById("confirm-order-btn");
 let modal_confirm_order = document.getElementById("modal-confirm-order");
let modal_bg = document.getElementById("modal-bg");
 let order_toppings_parent = document.getElementById('ordered-toppings');
 let topping_names_collection = document.getElementsByClassName('topping-name');
 let topping_prices_collection = document.getElementsByClassName('topping-price');
 let  total_cost = 0;
 let total_cost_display = document.getElementById("modal-total-cost-display");
 confirm_order_btn.onclick = function(){
   // reveal modal
    modal_confirm_order.classList.remove('no-display');
     modal_bg.classList.remove('no-display');
   // extra milestone #1 topping names
    
     // look at ALL the cards. check EACH whether they have highlight class. then get the name h2 with same index position for reaching the topping name 
    for(let o = 0; o < topping_cards.length; o++ )
       if( topping_cards[o].classList.contains('selected-highlight') ){
           console.log( topping_options_array[o].name );
            let new_h2_topping = document.createElement('h2');
            new_h2_topping.innerHTML = topping_options_array[o].name;
            order_toppings_parent.appendChild(new_h2_topping);
         }
     // end of milestone #1
    // extra milestone #2 total cost of chosen toppings
    for(o = 0; o < topping_cards.length; o++)
        if( topping_cards[o].classList.contains('selected-highlight') ){
            console.log( topping_options_array[o].price );
            total_cost += topping_options_array[o].price; 
        }
   total_cost_display.innerHTML = 'Total cost is ' + total_cost + '$';
    // end of extra kmilestone #2
 };
  // EXTRA MILESTONE #1 NAMES OF TOPPINGS
// // user selects some topping cards
// // user clicks on confirm btn
// // names of toppings in those cards are detected
// // those names are added into that division in modal
// // EXTRA MILESTONE #2 GET TOTAL COST
// // user selects some toppings
// // user clicks on confirm
// // I find the price in each selected topping card
// // I add each price to default starting total cost of ZERO
// // I display total numeric value in those prices