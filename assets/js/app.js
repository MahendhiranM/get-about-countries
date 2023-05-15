function getCountryData(data) {
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
    countries.innerHTML = html;
}

const renderCountry = function (countryName) {
    fetch(`https://restcountries.eu/rest/v3.1/name/${countryName}?fullText=true`)
        .then((response) => response.json())
        .then((data) => getCountryData(data[0]))
        .catch(
            (err) =>
                (document.querySelector(".countries").textContent =
                    "Country not found!")
        )
        .finally(() => (searchValue.value = ""));
};

const searchValue = document.querySelector(".search__country");
const smtBtn = document.querySelector(".smt-btn");
const countries = document.querySelector(".countries");

smtBtn.addEventListener("click", function (e) {
    e.preventDefault();
    renderCountry(searchValue.value);
});

renderCountry("india");
