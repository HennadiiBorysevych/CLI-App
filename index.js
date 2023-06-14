const { Command } = require("commander");
const program = new Command();
const contacts = require("./contacts");

const contactsActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list": {
      const res = await contacts.listContacts();
      return console.table(res);
    }
    case "get": {
      const res = await contacts.getContactById(id);
      return console.table(res);
    }
    case "add": {
      const res = await contacts.addContact({ name, email, phone });
      return console.table(res);
    }
    case "remove": {
      const res = await contacts.removeContact(id);
      return console.table(res);
    }
  }
};

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse(process.argv);

const argv = program.opts();


contactsActions(argv);
