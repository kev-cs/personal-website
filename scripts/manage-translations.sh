#!/usr/bin/env sh
# Simple script to validate translations since react-intl-translations-manager
# doesn't return error codes for missing translations and other cases.

set -e

npm run translations:extract-messages
MANAGE_TRANSLATIONS_OUTPUT=$(npm run translations:manage-translations)

if [[ $MANAGE_TRANSLATIONS_OUTPUT != *"Perfectly maintained"* ]]; then
  echo -e "$MANAGE_TRANSLATIONS_OUTPUT";
  echo "Error : Translations are missing."
  exit 1;
fi