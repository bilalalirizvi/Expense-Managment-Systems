let redirect = (screen) => {
    switch (screen) {
        case 'login':
            window.location.href = `auth-screens/login/login.html`
            break;
        case 'signup':
            window.location.href = `../signup/signup.html`
            break;
        case 'signupToLogin':
            window.location.href = `../login/login.html`
            break;
        case 'dashboard':
            window.location.href = `../../src/dashboard/dashboard.html`
            break;
        case 'addExpense':
            window.location.href = `dashboard-screens/addExpense.html`
            break;
        case 'allCategories':
            window.location.href = `dashboard-screens/allCategories.html`
            break;
        case 'addCategory':
            window.location.href = `addCategory.html`
            break;
        case 'generateReport':
            window.open(`dashboard-screens/generateReport.html`, `_blank`)
            break;
        case 'addExpenseToDashboard':
            window.location.href = `../dashboard.html`
            break;
        case 'allCategoriesToDashboard':
            window.location.href = `../dashboard.html`
            break;
        case 'addCategoryToAllCategory':
            window.location.href = `allCategories.html`
            break;
        default:
            console.error('Redirect Error!')
    }
}


// Time & Date
let timeAndDate = () => {
    let dateNow = new Date().toLocaleDateString([], { day: '2-digit', month: '2-digit', year: '2-digit' });
    let timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return `${dateNow} | ${timeNow}`
}

// Random Id Generate
function RandomId() {
    return Math.floor(Math.random() * 10000);
}
RandomId.prototype.RandomId = () => {
    return this;
}

// Add Categories
let addCategories = () => {
    timeAndDate();

    // Random Id Generate
    // let id = Math.floor(Math.random() * 10000);

    const categoryName = document.getElementById('categoryname');

    let allCategories = {
        id: RandomId(),
        // userId: userId,
        categoryName: categoryName.value,
        createdOn: timeAndDate(),
    }
    console.log(allCategories)

    let categories = JSON.parse(localStorage.getItem('All Categories'));
    if (!categories) {
        categories = [];
    }
    categories.push(allCategories)

    localStorage.setItem('All Categories', JSON.stringify(categories))

    categoryName.value = '';
}

let getCategories = () => {
    let getCate = JSON.parse(localStorage.getItem('All Categories'));
    console.log(getCate)
    let { id, catName, createdOn } = getCate;

    let categ = {
        id: id,
        catName: catName,
        createdOn: createdOn,
    }
    console.log(categ.map())

    let tableRow = document.getElementById('tableRowAllCategories');

    let firstTd = document.createElement('td');
    firstTd.innerText = id;
    tableRow.appendChild(firstTd);
}
getCategories()
// let tableRow = document.getElementById('tableRowAllCategories');

//     let firstTd = document.createElement('td');
//     firstTd.innerText = allCategories.id;
//     tableRow.appendChild(firstTd);