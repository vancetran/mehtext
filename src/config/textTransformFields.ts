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
    name: l10n.textFields.sarcastic,
    value: sarcastic,
  },
  {
    label: l10n.textFields.clapback,
    name: l10n.textFields.clapback,
    value: clapback,
  },
  {
    label: l10n.textFields.ssssnake,
    name: l10n.textFields.ssssnake,
    value: ssssnake,
  },
  {
    label: l10n.textFields.airquotes,
    name: l10n.textFields.airquotes,
    value: airquotes,
  },
]

export default textTransformFields
