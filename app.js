
function displayNewsInfo() {

    // var search = $(this).attr("data-results");
    var search = $(this).attr("data-searchItem")
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=A1ScLBV5QNW7NslKQAMFdQ6xWghGYvRZ&limit=10";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        var newsDiv = $("<div class='news'>");
        var docs = data.response.docs
        for (docIndex in docs) {
            console.log("Headline: " + docs[docIndex].headline.main)
            console.log("Snippet: " + docs[docIndex].snippet)
            console.log("URL: " + docs[docIndex].web_url)
            console.log("by: " + docs[docIndex].web_)

        }
        console.log("----------------------------------------------------------------------------------------------------------------------");
        var pHeadline = $("<p>").text("Headline: " + docs[docIndex].headline.main);

        newsDiv.append(pHeadline);
    });


};

$("#search").click(displayNewsInfo)


// displayNewsInfo();