const manageTranslations = require("react-intl-translations-manager").default;

manageTranslations({
  messagesDirectory: './tmp/extracted-messages/src/',
  translationsDirectory: 'src/assets/translations/',
  languages: ['fr']
});

