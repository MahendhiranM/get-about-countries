function getCountryData(name) {
    const request = new XMLHttpRequest();
    request.open(
        "GET",
        `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
    );
    request.send();
    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        const html = `<div class="country">
        <img
            class="country__flag"
            src="${data.flag}"
            alt="flag"
        />
        <div class="country__name">${data.name}</div>
        <p class="country__population">
            <i class="bi bi-people-fill"></i>${(
                data.population / 10000000
            ).toFixed(1)}M People
        </p>
        <p class="country__language">
            <i class="bi bi-megaphone-fill"></i>${data.languages[0].name}
        </p>
        <p class="country__currencies">
            <i class="bi bi-cash"></i>${data.currencies[0].name}
        </p>
    </div>`;
        countries.insertAdjacentHTML("afterbegin", html);
    });
}

const searchValue = document.querySelector(".search__country");
const smtBtn = document.querySelector(".smt-btn");
const countries = document.querySelector(".countries");

smtBtn.addEventListener("click", function (e) {
    e.preventDefault();
    getCountryData(searchValue.value);
    searchValue.value = "";
});
