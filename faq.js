//Create a list of all the available queries
var searchList = ["Tech" , "Physics", "Esports", "What’s the inspiration behind Savvy?", 
"What is the essential story being told by your site? ", "How to Subscribe?", 
"How often are new articles added?", "What should I do if I have an inquiry?",
"How do I create an account?", "Are there promotions for Subscription fees?", 
"How much are the subscription fees?", "What are the accepted payment methods for Subscription?",
"Will there be a printed press version?"];

var linkSearch = ["./faq.html", "./contactUs.html", "./esports.html"];

// const search_box = document.getElementsByClassName(".iSearch");

const searchBox = document.querySelector("section");
const inputSearch = searchBox.querySelector(".iSearch");
const autoComBox = searchBox.querySelector(".autocom-box");
 
/*Function that acts when user releases any key while typing
in the search bar. The user's input will be searched in the 
searchList array. 
If found, the complete query will be added to the autocomplete box
and the box will appear to the user
*/
inputSearch.onkeyup = (e)=>{

    let userInput = e.target.value;
    let emptyList = [];

    //When there is user input
    if (userInput != "") {
  
        autoComBox.style.display = "block";
      
        //Using filter adds data, which matches the user's input, into the emptyList 
        emptyList = searchList.filter((data) => {

            //Both data in searchList and user's input is made into lowercase for simple comparison
            //Startswith is used to match the user's input and data letter by letter from the beginning
            return data.toLocaleLowerCase().startsWith(userInput.toLocaleLowerCase());
        });

        if (emptyList.length == 0) {

            autoComBox.style.display = "none";
            return;
        }

        for (var i = 0; i<emptyList.length; i++) {

            var linkIndex = 0;

            for(var j = 0; j<searchList.length; j++) {

                if(emptyList[i] == searchList[j]) {

                    console.log(emptyList);
                    linkIndex = j;
                    
                }
            }

            emptyList[i] = '<a href=' + '"' + linkSearch[linkIndex] + '" target="_blank">' + emptyList[i] + ' </a>';

        }

        console.log(emptyList);
        emptyList = emptyList.map((data) => {

            return data = '<li>' + data + '</li>';

        });
        console.log(emptyList);
    }

    else {
        
        autoComBox.style.display = "none";
    }


    showSuggestionList(emptyList);
}

function showSuggestionList(list) {

    let listData;
    if (list.length) {

        listData = list.join('');

    }
    autoComBox.innerHTML = listData;
    
}
