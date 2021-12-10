var Controller = false;

const getAPI = async () => {
    const response = await fetch("https://api.covid19api.com/summary");
    return (data = response.json());
};

const getCountries = async () => {
    const setAPI = await getAPI();

    const getUruguay = setAPI.Countries.find(Countries => Countries.Country === "Uruguay");

    console.log(getUruguay);
    document.getElementById("Date").innerHTML = ` ${getUruguay.Date}`
    document.getElementById("NewConfirmed").innerHTML = ` ${getUruguay.NewConfirmed}`
    document.getElementById("TotalConfirmed").innerHTML = ` ${getUruguay.TotalConfirmed}`
    document.getElementById("NewDeaths").innerHTML = ` ${getUruguay.NewDeaths}`
    document.getElementById("TotalDeaths").innerHTML = ` ${getUruguay.TotalDeaths}`
};

const Mostrar_Ocultar = () => {
    Controller = !Controller;
    if (Controller === true) {
        document.getElementById("setInformation").style.display = "block";
    } else {
        document.getElementById("setInformation").style.display = "none";
    };
};

getCountries()