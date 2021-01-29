function getTotal(phone, casing){
    const phonePrice = 500;
    const casingPrice = 50;
    const phoneCost = phone * phonePrice;
    const casingCost = casing * casingPrice;
    const total = phoneCost + casingCost;
    return total;
}

const totalCost = getTotal(4,4);
const firstResult = document.getElementById('firstResult');
firstResult.innerText = totalCost;

const secondResult = document.getElementById('secondResult');
secondResult.innerHTML = totalCost;
