function fetchData() {
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
        .then((res) => res.json())
        .then((data) => cardList(data.data.regional))
        .catch((err) => console.log(err))
}
fetchData();

function cardList(data) {
    const store = data.map((el) => singleCard(el.loc, el.confirmedCasesIndian, el.confirmedCasesForeign, el.discharged, el.deaths, el.totalConfirmed));
    console.log(store);
    document.getElementById("table").innerHTML = store.join("");
}

function singleCard(loc, confirmedCasesIndian, confirmedCasesForeign, discharged, deaths, totalConfirmed) {
    const card = `
    <tr class="table-warning">
        <th scope="row" class="text-center table-danger"><i class="bi bi-arrow-right"></i></th>
        <td class="text-start table-warning">${loc}</td>
        <td>${confirmedCasesIndian}</td>
        <td>${confirmedCasesForeign}</td>
        <td class="table-success">${discharged}</td>
        <td class="table-danger">${deaths}</td>
        <td>${totalConfirmed}</td>
    </tr>
    `
    return card;
    // const card = `
    // <div style="border: 2px solid black;">
    //     <h1>${loc}</h1>
    //     <h2>${confirmedCasesIndian}</h2>
    //     <h2>${confirmedCasesForeign}</h2>
    //     <h2>${discharged}</h2>
    //     <h2>${deaths}</h2>
    //     <h2>${totalConfirmed}</h2>
    // </div>`
    // return card;
}