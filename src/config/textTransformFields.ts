import l10n from '../constants/translations.en'
import {
  clapback,
  sarcastic,
  ssssnake,
  airquotes,
} from '../utils/textTransform'

const textTransformFields = [
  {
    label: l10n.textFields.sarcastic,
    name: l10n.textFields.sarcastic.toLowerCase(),
    value: sarcastic,
  },
  {
    label: l10n.textFields.clapback,
    name: l10n.textFields.clapback.toLowerCase(),
    value: clapback,
  },
  {
    label: l10n.textFields.ssssnake,
    name: l10n.textFields.ssssnake.toLowerCase(),
    value: ssssnake,
  },
  {
    label: l10n.textFields.airquotes,
    name: l10n.textFields.airquotes.toLowerCase(),
    value: airquotes,
  },
]

export default textTransformFields
