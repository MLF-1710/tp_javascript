var core = require('../src/index');
var fs = require('fs');

module.exports = {
  test_init: function (test) {
    var contact = new core.Contact.Contact(core.Contact.Gender.MR, 'Eric', 'RAMAT');

    test.equals(contact.gender(), core.Contact.Gender.MR);
    test.equals(contact.firstName(), 'Eric');
    test.equals(contact.lastName(), 'RAMAT');
    test.done();
  },
  test_init_mail: function (test) {
    var mail = new core.Contact.Mail('eric.ramat@gmail.com', core.Contact.MailCategory.PERSO);

    test.equals(mail.address(), 'eric.ramat@gmail.com');
    test.equals(mail.category(), core.Contact.MailCategory.PERSO);
    test.done();
  },
  test_init_mail2: function (test) {
    var contact = new core.Contact.Contact(core.Contact.Gender.MR, 'Eric', 'RAMAT');

    contact.addMail(new core.Contact.Mail('eric.ramat@gmail.com', core.Contact.MailCategory.PERSO));
    contact.addMail(new core.Contact.Mail('ramat@lisic.univ-littoral.fr', core.Contact.MailCategory.PRO));

    test.equals(contact.mails().length, 2);
    test.done();
  },
  test_create_from_json: function (test) {
    fs.readFile('./data/contacts.json', 'utf8', function(err, json) {
      if (err) {
        throw err;
      }

      var list = JSON.parse(json);
      var contacts = new core.Contact.Builder().create(list);

      test.equals(contacts.length, 2);
      test.equals(contacts[0].gender(), core.Contact.Gender.MR);
      test.equals(contacts[0].firstName(), 'Eric');
      test.equals(contacts[0].lastName(), 'RAMAT');
      test.equals(contacts[0].mails().length, 2);
      test.equals(contacts[0].mails()[0].address(), 'eric.ramat@gmail.com');
      test.equals(contacts[0].mails()[0].category(), core.Contact.MailCategory.PERSO);
      test.equals(contacts[0].mails()[1].address(), 'ramat@lisic.univ-littoral.fr');
      test.equals(contacts[0].mails()[1].category(), core.Contact.MailCategory.PRO);
      test.equals(contacts[1].mails().length, 1);
      test.equals(contacts[1].gender(), core.Contact.Gender.MRS);
      test.equals(contacts[1].firstName(), 'Marie');
      test.equals(contacts[1].lastName(), 'DUPOND');
      test.equals(contacts[1].mails()[0].address(), 'marie.dupond@gmail.com');
      test.equals(contacts[1].mails()[0].category(), core.Contact.MailCategory.PERSO);
      test.done();
    });
  }
};