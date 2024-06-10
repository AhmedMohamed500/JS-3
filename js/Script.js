
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl")
var webList = [];
if(localStorage.getItem("webList")!=null){
    webList = JSON.parse(localStorage.getItem("webList"))
    displayWebsite(webList)
}


function makeBook(){
    
    var webSite = {
        Description : siteName.value,
        url : siteUrl.value
    }

    webList.push(webSite)

    localStorage.setItem("webList", JSON.stringify(webList))
    
    displayWebsite()
    clear()


}



function displayWebsite(){

    cartona = ``;

    for (var i = 0; i<webList.length; i++){

        cartona += `<tr>

        <td>${i}</td>

        <td>${webList[i].Description}</td>
        <td>
        <button class="btn btn-colors-2  mb-1">
                <i class="fa-solid fa-eye"></i>
                <a class="text-white text-decoration-none" href="https://${webList[i].url}">visit</a>
        </button>
        </td>

        <td>
        <button onclick = "deleteWebsite(${i})" class = "btn btn-colors-3  text-white mb-1">
                <i class="fa-solid fa-trash-can"></i>
                Delete
        </button>
        </td>


        </tr>`

    }
    document.getElementById("body").innerHTML = cartona
}

function clear(){
    siteName.value = null;
    siteUrl.value = null
}

function deleteWebsite(index){
    webList.splice(index,1);
    localStorage.setItem("webList", JSON.stringify(webList))

    console.log(index);
    displayWebsite(webList)
}

function validWebsiteInput(element){
    var regex = {
        siteName : /[A-Za-z]{3,15}$/,
        siteUrl : /[w]{3}\.[a-z]{5,15}\.(com)$/i
    }
    if(regex[element.id].test(element.value)==true){

        element.classList.add("is-valid");
        element.classList.remove("is-invalid");

    }else{
        element.classList.remove("is-valid");jt
        element.classList.add("is-invalid");
    }
}
