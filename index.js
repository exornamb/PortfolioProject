document.querySelector(".year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", ()=>{
    const cookieConsent = document.querySelector(".cookieConsent");
    const container = document.querySelector(".container");
    const grey = document.querySelector(".grey")

    function getCookie(name){
        let match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
        return match ? match[2]: null;
    }

    function setCookie(name, value, days){
        let expires = "";
        let date = new Date();
        if(days){
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
            expires = "; expires=" + date.toUTCString();
        }

        document.cookie = `${name}=${value}${expires}; path=/`
        console.log(document.cookie)
    }

    if(!getCookie("cookieConsent")){
        cookieConsent.setAttribute("style", "display: flex")
        container.style.pointerEvents = "none";
    }

    document.getElementById("consent").addEventListener("click", ()=>{
        setCookie("cookieConsent", "true", 365)
        cookieConsent.setAttribute("style", "display: none")
        container.removeChild(grey)
        container.setAttribute("style", "overflow: auto")
    })
})