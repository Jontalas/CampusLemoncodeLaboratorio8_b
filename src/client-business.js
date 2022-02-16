const Account_business = require("./account-business");
const Data_business = require("./data-business");

function getClientElement(client) {
    const allAccounts = Data_business.getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
      if (account.clientId === client.id) {
        clientAccounts.push(account);
      }
    }
  
    const node = getClientNode(client);
    const ul = Account_business.getClientAccountsElement(clientAccounts);
  
    node.appendChild(ul);
  
    return node;
  }
  
  function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));
  
    return li;
  }
  
  function getFullName(client) {
    return client.first_name + " " + client.last_name;
  }

  module.exports = { getClientElement: getClientElement };