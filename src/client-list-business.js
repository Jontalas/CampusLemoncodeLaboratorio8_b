const Client_business = require("./client-business");
const Data_business = require("./data-business");

function printClientsAccounts() {
    const clients = Data_business.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = Client_business.getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }

  module.exports = { printClientsAccounts: printClientsAccounts };