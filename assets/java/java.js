function searchButton() {
    var searchButton = document.querySelector("#search-value").value;
    searchWeather(searchValue);
    newRow(searchValue);
  }
function newRow(searchButton) {
    var liEl = document.createElement("li")
    liEL.classList.add("list-history-action");
    var text = searchButton;
    liEL.textContent = text;
    varHistoryEl = document.querySelector(".history");
    console.log(event.target)
    historyEl.onlcick = function(){
        console.log(event.target.tagName)
        if(event.target.tagName == "LI"){
            searchWeather(event.target.textContent)
        }
    }
    historyEl.appendChild(liEl);
}




  

