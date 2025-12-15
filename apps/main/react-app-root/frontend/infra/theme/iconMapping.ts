/**
 * Icon Mapping Configuration
 * Maps Lucide icons to other icon libraries for theme-specific icon styles
 */

import { ThemeStyle } from './config'

export type IconLibrary = 
  | 'lucide'
  // Material Symbols
  | 'material-symbols'
  | 'material-symbols:sharp'
  | 'material-symbols:rounded'
  // Material Design Icons (MDI)
  | 'mdi'
  | 'mdi:outline'
/**
 * Icon mapping table: lucide icon name -> target library icon name
 * 
 * Structure: { 'lucide:icon-name': { 'target-library': 'target-library:icon-name' } }
 * 
 * Example:
 * {
 *   'lucide:home': {
 *     'material-symbols': 'material-symbols:home',
 *     'material-symbols:sharp': 'material-symbols:home-sharp',
 *     'material-symbols:rounded': 'material-symbols:home-rounded',
 *     'mdi': 'mdi:home',
 *     'mdi:outline': 'mdi:home-outline'
 *   }
 * }
 * 
 * Note: The icon library names (material-symbols, mdi) 
 * are correct as defined by Iconify. Do not modify these prefix names.
 */
export const iconMapping: Record<string, Partial<Record<IconLibrary, string>>> = {
  'lucide:a-arrow-down': {
    'material-symbols': 'material-symbols:arrow-downward',
    'material-symbols:sharp': 'material-symbols:arrow-downward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-downward',
    'mdi': 'mdi:alpha-a-box',
    'mdi:outline': 'mdi:alpha-a-box-outline'
  },
  'lucide:a-arrow-up': {
    'material-symbols': 'material-symbols:arrow-upward',
    'material-symbols:sharp': 'material-symbols:arrow-upward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-upward',
    'mdi': 'mdi:alpha-a-box',
    'mdi:outline': 'mdi:alpha-a-box-outline'
  },
  'lucide:a-large-small': {
    'material-symbols': 'material-symbols:text-format',
    'material-symbols:sharp': 'material-symbols:text-format-sharp',
    'material-symbols:rounded': 'material-symbols:text-format',
    'mdi': 'mdi:format-letter-case',
    'mdi:outline': 'mdi:format-letter-case'
  },
  'lucide:accessibility': {
    'material-symbols': 'material-symbols:accessibility',
    'material-symbols:sharp': 'material-symbols:accessibility-sharp',
    'material-symbols:rounded': 'material-symbols:accessibility',
    'mdi': 'mdi:human-wheelchair',
    'mdi:outline': 'mdi:human-wheelchair'
  },
  'lucide:activity': {
    'material-symbols': 'material-symbols:monitoring',
    'material-symbols:sharp': 'material-symbols:monitoring-sharp',
    'material-symbols:rounded': 'material-symbols:monitoring',
    'mdi': 'mdi:chart-line',
    'mdi:outline': 'mdi:chart-line'
  },
  'lucide:air-vent': {
    'material-symbols': 'material-symbols:air',
    'material-symbols:sharp': 'material-symbols:air-sharp',
    'material-symbols:rounded': 'material-symbols:air',
    'mdi': 'mdi:air-filter',
    'mdi:outline': 'mdi:air-filter'
  },
  'lucide:airplay': {
    'material-symbols': 'material-symbols:airplay',
    'material-symbols:sharp': 'material-symbols:airplay-sharp',
    'material-symbols:rounded': 'material-symbols:airplay',
    'mdi': 'mdi:cast-variant',
    'mdi:outline': 'mdi:cast-variant'
  },
  'lucide:alarm-clock': {
    'material-symbols': 'material-symbols:alarm',
    'material-symbols:sharp': 'material-symbols:alarm-sharp',
    'material-symbols:rounded': 'material-symbols:alarm',
    'mdi': 'mdi:alarm',
    'mdi:outline': 'mdi:alarm-outline'
  },
  'lucide:alarm-clock-check': {
    'material-symbols': 'material-symbols:alarm-on',
    'material-symbols:sharp': 'material-symbols:alarm-on-sharp',
    'material-symbols:rounded': 'material-symbols:alarm-on',
    'mdi': 'mdi:alarm-check',
    'mdi:outline': 'mdi:alarm-check'
  },
  'lucide:alarm-clock-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:alarm-minus',
    'mdi:outline': 'mdi:alarm-minus'
  },
  'lucide:alarm-clock-off': {
    'material-symbols': 'material-symbols:alarm-off',
    'material-symbols:sharp': 'material-symbols:alarm-off-sharp',
    'material-symbols:rounded': 'material-symbols:alarm-off',
    'mdi': 'mdi:alarm-off',
    'mdi:outline': 'mdi:alarm-off-outline'
  },
  'lucide:alarm-clock-plus': {
    'material-symbols': 'material-symbols:alarm-add',
    'material-symbols:sharp': 'material-symbols:alarm-add-sharp',
    'material-symbols:rounded': 'material-symbols:alarm-add',
    'mdi': 'mdi:alarm-plus',
    'mdi:outline': 'mdi:alarm-plus'
  },
  'lucide:alarm-smoke': {
    'material-symbols': 'material-symbols:sensors',
    'material-symbols:sharp': 'material-symbols:sensors-sharp',
    'material-symbols:rounded': 'material-symbols:sensors',
    'mdi': 'mdi:smoke-detector',
    'mdi:outline': 'mdi:smoke-detector-outline'
  },
  'lucide:album': {
    'material-symbols': 'material-symbols:album',
    'material-symbols:sharp': 'material-symbols:album-sharp',
    'material-symbols:rounded': 'material-symbols:album',
    'mdi': 'mdi:album',
    'mdi:outline': 'mdi:album'
  },
  'lucide:align-center-horizontal': {
    'material-symbols': 'material-symbols:align-horizontal-center',
    'material-symbols:sharp': 'material-symbols:align-horizontal-center-sharp',
    'material-symbols:rounded': 'material-symbols:align-horizontal-center',
    'mdi': 'mdi:format-align-center',
    'mdi:outline': 'mdi:format-align-center'
  },
  'lucide:align-center-vertical': {
    'material-symbols': 'material-symbols:align-vertical-center',
    'material-symbols:sharp': 'material-symbols:align-vertical-center-sharp',
    'material-symbols:rounded': 'material-symbols:align-vertical-center',
    'mdi': 'mdi:format-vertical-align-center',
    'mdi:outline': 'mdi:format-vertical-align-center'
  },
  'lucide:align-end-horizontal': {
    'material-symbols': 'material-symbols:align-horizontal-right',
    'material-symbols:sharp': 'material-symbols:align-horizontal-right-sharp',
    'material-symbols:rounded': 'material-symbols:align-horizontal-right',
    'mdi': 'mdi:format-align-right',
    'mdi:outline': 'mdi:format-align-right'
  },
  'lucide:align-end-vertical': {
    'material-symbols': 'material-symbols:align-vertical-bottom',
    'material-symbols:sharp': 'material-symbols:align-vertical-bottom-sharp',
    'material-symbols:rounded': 'material-symbols:align-vertical-bottom',
    'mdi': 'mdi:format-vertical-align-bottom',
    'mdi:outline': 'mdi:format-vertical-align-bottom'
  },
  'lucide:align-horizontal-distribute-center': {
    'material-symbols': 'material-symbols:horizontal-distribute',
    'material-symbols:sharp': 'material-symbols:horizontal-distribute-sharp',
    'material-symbols:rounded': 'material-symbols:horizontal-distribute',
    'mdi': 'mdi:distribute-horizontal-center',
    'mdi:outline': 'mdi:distribute-horizontal-center'
  },
  'lucide:align-horizontal-distribute-end': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:distribute-horizontal-right',
    'mdi:outline': 'mdi:distribute-horizontal-right'
  },
  'lucide:align-horizontal-distribute-start': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:distribute-horizontal-left',
    'mdi:outline': 'mdi:distribute-horizontal-left'
  },
  'lucide:align-horizontal-justify-center': {
    'material-symbols': 'material-symbols:align-horizontal-center',
    'material-symbols:sharp': 'material-symbols:align-horizontal-center-sharp',
    'material-symbols:rounded': 'material-symbols:align-horizontal-center',
    'mdi': 'mdi:format-align-center',
    'mdi:outline': 'mdi:format-align-center'
  },
  'lucide:align-horizontal-justify-end': {
    'material-symbols': 'material-symbols:align-horizontal-right',
    'material-symbols:sharp': 'material-symbols:align-horizontal-right-sharp',
    'material-symbols:rounded': 'material-symbols:align-horizontal-right',
    'mdi': 'mdi:format-align-right',
    'mdi:outline': 'mdi:format-align-right'
  },
  'lucide:align-horizontal-justify-start': {
    'material-symbols': 'material-symbols:align-horizontal-left',
    'material-symbols:sharp': 'material-symbols:align-horizontal-left-sharp',
    'material-symbols:rounded': 'material-symbols:align-horizontal-left',
    'mdi': 'mdi:format-align-left',
    'mdi:outline': 'mdi:format-align-left'
  },
  'lucide:align-horizontal-space-around': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:alpha-a-box',
    'mdi:outline': 'mdi:alpha-a-box-outline'
  },
  'lucide:align-horizontal-space-between': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:alpha-a-box',
    'mdi:outline': 'mdi:alpha-a-box-outline'
  },
  'lucide:align-start-horizontal': {
    'material-symbols': 'material-symbols:align-horizontal-left',
    'material-symbols:sharp': 'material-symbols:align-horizontal-left-sharp',
    'material-symbols:rounded': 'material-symbols:align-horizontal-left',
    'mdi': 'mdi:format-align-left',
    'mdi:outline': 'mdi:format-align-left'
  },
  'lucide:align-start-vertical': {
    'material-symbols': 'material-symbols:align-vertical-top',
    'material-symbols:sharp': 'material-symbols:align-vertical-top-sharp',
    'material-symbols:rounded': 'material-symbols:align-vertical-top',
    'mdi': 'mdi:format-vertical-align-top',
    'mdi:outline': 'mdi:format-vertical-align-top'
  },
  'lucide:align-vertical-distribute-center': {
    'material-symbols': 'material-symbols:vertical-distribute',
    'material-symbols:sharp': 'material-symbols:vertical-distribute-sharp',
    'material-symbols:rounded': 'material-symbols:vertical-distribute',
    'mdi': 'mdi:distribute-vertical-center',
    'mdi:outline': 'mdi:distribute-vertical-center'
  },
  'lucide:align-vertical-distribute-end': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:distribute-vertical-bottom',
    'mdi:outline': 'mdi:distribute-vertical-bottom'
  },
  'lucide:align-vertical-distribute-start': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:distribute-vertical-top',
    'mdi:outline': 'mdi:distribute-vertical-top'
  },
  'lucide:align-vertical-justify-center': {
    'material-symbols': 'material-symbols:align-vertical-center',
    'material-symbols:sharp': 'material-symbols:align-vertical-center-sharp',
    'material-symbols:rounded': 'material-symbols:align-vertical-center',
    'mdi': 'mdi:format-vertical-align-center',
    'mdi:outline': 'mdi:format-vertical-align-center'
  },
  'lucide:align-vertical-justify-end': {
    'material-symbols': 'material-symbols:align-vertical-bottom',
    'material-symbols:sharp': 'material-symbols:align-vertical-bottom-sharp',
    'material-symbols:rounded': 'material-symbols:align-vertical-bottom',
    'mdi': 'mdi:format-vertical-align-bottom',
    'mdi:outline': 'mdi:format-vertical-align-bottom'
  },
  'lucide:align-vertical-justify-start': {
    'material-symbols': 'material-symbols:align-vertical-top',
    'material-symbols:sharp': 'material-symbols:align-vertical-top-sharp',
    'material-symbols:rounded': 'material-symbols:align-vertical-top',
    'mdi': 'mdi:format-vertical-align-top',
    'mdi:outline': 'mdi:format-vertical-align-top'
  },
  'lucide:align-vertical-space-around': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-letter-case',
    'mdi:outline': 'mdi:format-letter-case'
  },
  'lucide:align-vertical-space-between': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:human-wheelchair',
    'mdi:outline': 'mdi:human-wheelchair'
  },
  'lucide:ambulance': {
    'material-symbols': 'material-symbols:ambulance',
    'material-symbols:sharp': 'material-symbols:ambulance-sharp',
    'material-symbols:rounded': 'material-symbols:ambulance',
    'mdi': 'mdi:ambulance',
    'mdi:outline': 'mdi:ambulance'
  },
  'lucide:ampersand': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chart-line',
    'mdi:outline': 'mdi:chart-line'
  },
  'lucide:ampersands': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:air-filter',
    'mdi:outline': 'mdi:air-filter'
  },
  'lucide:amphora': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:bottle-wine',
    'mdi:outline': 'mdi:bottle-wine-outline'
  },
  'lucide:anchor': {
    'material-symbols': 'material-symbols:anchor',
    'material-symbols:sharp': 'material-symbols:anchor-sharp',
    'material-symbols:rounded': 'material-symbols:anchor',
    'mdi': 'mdi:anchor',
    'mdi:outline': 'mdi:anchor'
  },
  'lucide:angry': {
    'material-symbols': 'material-symbols:sentiment-very-dissatisfied',
    'material-symbols:sharp': 'material-symbols:sentiment-very-dissatisfied-sharp',
    'material-symbols:rounded': 'material-symbols:sentiment-very-dissatisfied',
    'mdi': 'mdi:emoticon-angry',
    'mdi:outline': 'mdi:emoticon-angry-outline'
  },
  'lucide:annoyed': {
    'material-symbols': 'material-symbols:sentiment-dissatisfied',
    'material-symbols:sharp': 'material-symbols:sentiment-dissatisfied-sharp',
    'material-symbols:rounded': 'material-symbols:sentiment-dissatisfied',
    'mdi': 'mdi:emoticon-sad',
    'mdi:outline': 'mdi:emoticon-sad-outline'
  },
  'lucide:antenna': {
    'material-symbols': 'material-symbols:router',
    'material-symbols:sharp': 'material-symbols:router-sharp',
    'material-symbols:rounded': 'material-symbols:router',
    'mdi': 'mdi:antenna',
    'mdi:outline': 'mdi:antenna'
  },
  'lucide:anvil': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:anvil',
    'mdi:outline': 'mdi:anvil'
  },
  'lucide:aperture': {
    'material-symbols': 'material-symbols:camera',
    'material-symbols:sharp': 'material-symbols:camera-sharp',
    'material-symbols:rounded': 'material-symbols:camera',
    'mdi': 'mdi:camera-iris',
    'mdi:outline': 'mdi:camera-iris'
  },
  'lucide:app-window': {
    'material-symbols': 'material-symbols:web-asset',
    'material-symbols:sharp': 'material-symbols:web-asset-sharp',
    'material-symbols:rounded': 'material-symbols:web-asset',
    'mdi': 'mdi:application',
    'mdi:outline': 'mdi:application-outline'
  },
  'lucide:app-window-mac': {
    'material-symbols': 'material-symbols:desktop-mac',
    'material-symbols:sharp': 'material-symbols:desktop-mac-sharp',
    'material-symbols:rounded': 'material-symbols:desktop-mac',
    'mdi': 'mdi:application',
    'mdi:outline': 'mdi:application-outline'
  },
  'lucide:apple': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:apple',
    'mdi:outline': 'mdi:apple'
  },
  'lucide:archive': {
    'material-symbols': 'material-symbols:archive',
    'material-symbols:sharp': 'material-symbols:archive-sharp',
    'material-symbols:rounded': 'material-symbols:archive',
    'mdi': 'mdi:archive',
    'mdi:outline': 'mdi:archive-outline'
  },
  'lucide:archive-restore': {
    'material-symbols': 'material-symbols:unarchive',
    'material-symbols:sharp': 'material-symbols:unarchive-sharp',
    'material-symbols:rounded': 'material-symbols:unarchive',
    'mdi': 'mdi:archive-arrow-up',
    'mdi:outline': 'mdi:archive-arrow-up-outline'
  },
  'lucide:archive-x': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:archive-remove',
    'mdi:outline': 'mdi:archive-remove-outline'
  },
  'lucide:armchair': {
    'material-symbols': 'material-symbols:chair',
    'material-symbols:sharp': 'material-symbols:chair-sharp',
    'material-symbols:rounded': 'material-symbols:chair',
    'mdi': 'mdi:seat',
    'mdi:outline': 'mdi:seat-outline'
  },
  'lucide:arrow-big-down': {
    'material-symbols': 'material-symbols:arrow-downward',
    'material-symbols:sharp': 'material-symbols:arrow-downward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-downward',
    'mdi': 'mdi:arrow-down-bold',
    'mdi:outline': 'mdi:arrow-down-bold-outline'
  },
  'lucide:arrow-big-down-dash': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-down-bold',
    'mdi:outline': 'mdi:arrow-down-bold-outline'
  },
  'lucide:arrow-big-left': {
    'material-symbols': 'material-symbols:arrow-back',
    'material-symbols:sharp': 'material-symbols:arrow-back-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-back',
    'mdi': 'mdi:arrow-left-bold',
    'mdi:outline': 'mdi:arrow-left-bold-outline'
  },
  'lucide:arrow-big-left-dash': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-left-bold',
    'mdi:outline': 'mdi:arrow-left-bold-outline'
  },
  'lucide:arrow-big-right': {
    'material-symbols': 'material-symbols:arrow-forward',
    'material-symbols:sharp': 'material-symbols:arrow-forward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-forward',
    'mdi': 'mdi:arrow-right-bold',
    'mdi:outline': 'mdi:arrow-right-bold-outline'
  },
  'lucide:arrow-big-right-dash': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-right-bold',
    'mdi:outline': 'mdi:arrow-right-bold-outline'
  },
  'lucide:arrow-big-up': {
    'material-symbols': 'material-symbols:arrow-upward',
    'material-symbols:sharp': 'material-symbols:arrow-upward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-upward',
    'mdi': 'mdi:arrow-up-bold',
    'mdi:outline': 'mdi:arrow-up-bold-outline'
  },
  'lucide:arrow-big-up-dash': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-up-bold',
    'mdi:outline': 'mdi:arrow-up-bold-outline'
  },
  'lucide:arrow-down': {
    'material-symbols': 'material-symbols:arrow-downward',
    'material-symbols:sharp': 'material-symbols:arrow-downward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-downward',
    'mdi': 'mdi:arrow-down',
    'mdi:outline': 'mdi:arrow-down'
  },
  'lucide:arrow-down-0-1': {
    'material-symbols': 'material-symbols:sort',
    'material-symbols:sharp': 'material-symbols:sort-sharp',
    'material-symbols:rounded': 'material-symbols:sort',
    'mdi': 'mdi:sort-numeric-ascending',
    'mdi:outline': 'mdi:sort-numeric-ascending'
  },
  'lucide:arrow-down-1-0': {
    'material-symbols': 'material-symbols:sort',
    'material-symbols:sharp': 'material-symbols:sort-sharp',
    'material-symbols:rounded': 'material-symbols:sort',
    'mdi': 'mdi:sort-numeric-descending',
    'mdi:outline': 'mdi:sort-numeric-descending'
  },
  'lucide:arrow-down-a-z': {
    'material-symbols': 'material-symbols:sort-by-alpha',
    'material-symbols:sharp': 'material-symbols:sort-by-alpha-sharp',
    'material-symbols:rounded': 'material-symbols:sort-by-alpha',
    'mdi': 'mdi:sort-alphabetical-ascending',
    'mdi:outline': 'mdi:sort-alphabetical-ascending'
  },
  'lucide:arrow-down-from-line': {
    'material-symbols': 'material-symbols:arrow-downward',
    'material-symbols:sharp': 'material-symbols:arrow-downward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-downward',
    'mdi': 'mdi:arrow-down',
    'mdi:outline': 'mdi:arrow-down'
  },
  'lucide:arrow-down-left': {
    'material-symbols': 'material-symbols:south-west',
    'material-symbols:sharp': 'material-symbols:south-west-sharp',
    'material-symbols:rounded': 'material-symbols:south-west',
    'mdi': 'mdi:arrow-bottom-left',
    'mdi:outline': 'mdi:arrow-bottom-left'
  },
  'lucide:arrow-down-narrow-wide': {
    'material-symbols': 'material-symbols:sort',
    'material-symbols:sharp': 'material-symbols:sort-sharp',
    'material-symbols:rounded': 'material-symbols:sort',
    'mdi': 'mdi:sort-ascending',
    'mdi:outline': 'mdi:sort-ascending'
  },
  'lucide:arrow-down-right': {
    'material-symbols': 'material-symbols:south-east',
    'material-symbols:sharp': 'material-symbols:south-east-sharp',
    'material-symbols:rounded': 'material-symbols:south-east',
    'mdi': 'mdi:arrow-bottom-right',
    'mdi:outline': 'mdi:arrow-bottom-right'
  },
  'lucide:arrow-down-to-dot': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-down',
    'mdi:outline': 'mdi:arrow-down'
  },
  'lucide:arrow-down-to-line': {
    'material-symbols': 'material-symbols:arrow-downward',
    'material-symbols:sharp': 'material-symbols:arrow-downward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-downward',
    'mdi': 'mdi:arrow-down',
    'mdi:outline': 'mdi:arrow-down'
  },
  'lucide:arrow-down-up': {
    'material-symbols': 'material-symbols:swap-vert',
    'material-symbols:sharp': 'material-symbols:swap-vert-sharp',
    'material-symbols:rounded': 'material-symbols:swap-vert',
    'mdi': 'mdi:swap-vertical',
    'mdi:outline': 'mdi:swap-vertical'
  },
  'lucide:arrow-down-wide-narrow': {
    'material-symbols': 'material-symbols:sort',
    'material-symbols:sharp': 'material-symbols:sort-sharp',
    'material-symbols:rounded': 'material-symbols:sort',
    'mdi': 'mdi:sort-descending',
    'mdi:outline': 'mdi:sort-descending'
  },
  'lucide:arrow-down-z-a': {
    'material-symbols': 'material-symbols:sort-by-alpha',
    'material-symbols:sharp': 'material-symbols:sort-by-alpha-sharp',
    'material-symbols:rounded': 'material-symbols:sort-by-alpha',
    'mdi': 'mdi:sort-alphabetical-descending',
    'mdi:outline': 'mdi:sort-alphabetical-descending'
  },
  'lucide:arrow-left': {
    'material-symbols': 'material-symbols:arrow-back',
    'material-symbols:sharp': 'material-symbols:arrow-back-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-back',
    'mdi': 'mdi:arrow-left',
    'mdi:outline': 'mdi:arrow-left'
  },
  'lucide:arrow-left-from-line': {
    'material-symbols': 'material-symbols:arrow-back',
    'material-symbols:sharp': 'material-symbols:arrow-back-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-back',
    'mdi': 'mdi:arrow-left',
    'mdi:outline': 'mdi:arrow-left'
  },
  'lucide:arrow-left-right': {
    'material-symbols': 'material-symbols:swap-horiz',
    'material-symbols:sharp': 'material-symbols:swap-horiz-sharp',
    'material-symbols:rounded': 'material-symbols:swap-horiz',
    'mdi': 'mdi:swap-horizontal',
    'mdi:outline': 'mdi:swap-horizontal'
  },
  'lucide:arrow-left-to-line': {
    'material-symbols': 'material-symbols:arrow-back',
    'material-symbols:sharp': 'material-symbols:arrow-back-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-back',
    'mdi': 'mdi:arrow-left',
    'mdi:outline': 'mdi:arrow-left'
  },
  'lucide:arrow-right': {
    'material-symbols': 'material-symbols:arrow-forward',
    'material-symbols:sharp': 'material-symbols:arrow-forward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-forward',
    'mdi': 'mdi:arrow-right',
    'mdi:outline': 'mdi:arrow-right'
  },
  'lucide:arrow-right-from-line': {
    'material-symbols': 'material-symbols:arrow-forward',
    'material-symbols:sharp': 'material-symbols:arrow-forward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-forward',
    'mdi': 'mdi:arrow-right',
    'mdi:outline': 'mdi:arrow-right'
  },
  'lucide:arrow-right-left': {
    'material-symbols': 'material-symbols:swap-horiz',
    'material-symbols:sharp': 'material-symbols:swap-horiz-sharp',
    'material-symbols:rounded': 'material-symbols:swap-horiz',
    'mdi': 'mdi:swap-horizontal',
    'mdi:outline': 'mdi:swap-horizontal'
  },
  'lucide:arrow-right-to-line': {
    'material-symbols': 'material-symbols:arrow-forward',
    'material-symbols:sharp': 'material-symbols:arrow-forward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-forward',
    'mdi': 'mdi:arrow-right',
    'mdi:outline': 'mdi:arrow-right'
  },
  'lucide:arrow-up': {
    'material-symbols': 'material-symbols:arrow-upward',
    'material-symbols:sharp': 'material-symbols:arrow-upward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-upward',
    'mdi': 'mdi:arrow-up',
    'mdi:outline': 'mdi:arrow-up'
  },
  'lucide:arrow-up-0-1': {
    'material-symbols': 'material-symbols:sort',
    'material-symbols:sharp': 'material-symbols:sort-sharp',
    'material-symbols:rounded': 'material-symbols:sort',
    'mdi': 'mdi:sort-numeric-ascending',
    'mdi:outline': 'mdi:sort-numeric-ascending'
  },
  'lucide:arrow-up-1-0': {
    'material-symbols': 'material-symbols:sort',
    'material-symbols:sharp': 'material-symbols:sort-sharp',
    'material-symbols:rounded': 'material-symbols:sort',
    'mdi': 'mdi:sort-numeric-descending',
    'mdi:outline': 'mdi:sort-numeric-descending'
  },
  'lucide:arrow-up-a-z': {
    'material-symbols': 'material-symbols:sort-by-alpha',
    'material-symbols:sharp': 'material-symbols:sort-by-alpha-sharp',
    'material-symbols:rounded': 'material-symbols:sort-by-alpha',
    'mdi': 'mdi:sort-alphabetical-ascending',
    'mdi:outline': 'mdi:sort-alphabetical-ascending'
  },
  'lucide:arrow-up-down': {
    'material-symbols': 'material-symbols:swap-vert',
    'material-symbols:sharp': 'material-symbols:swap-vert-sharp',
    'material-symbols:rounded': 'material-symbols:swap-vert',
    'mdi': 'mdi:swap-vertical',
    'mdi:outline': 'mdi:swap-vertical'
  },
  'lucide:arrow-up-from-dot': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-up',
    'mdi:outline': 'mdi:arrow-up'
  },
  'lucide:arrow-up-from-line': {
    'material-symbols': 'material-symbols:arrow-upward',
    'material-symbols:sharp': 'material-symbols:arrow-upward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-upward',
    'mdi': 'mdi:arrow-up',
    'mdi:outline': 'mdi:arrow-up'
  },
  'lucide:arrow-up-left': {
    'material-symbols': 'material-symbols:north-west',
    'material-symbols:sharp': 'material-symbols:north-west-sharp',
    'material-symbols:rounded': 'material-symbols:north-west',
    'mdi': 'mdi:arrow-top-left',
    'mdi:outline': 'mdi:arrow-top-left'
  },
  'lucide:arrow-up-narrow-wide': {
    'material-symbols': 'material-symbols:sort',
    'material-symbols:sharp': 'material-symbols:sort-sharp',
    'material-symbols:rounded': 'material-symbols:sort',
    'mdi': 'mdi:sort-ascending',
    'mdi:outline': 'mdi:sort-ascending'
  },
  'lucide:arrow-up-right': {
    'material-symbols': 'material-symbols:north-east',
    'material-symbols:sharp': 'material-symbols:north-east-sharp',
    'material-symbols:rounded': 'material-symbols:north-east',
    'mdi': 'mdi:arrow-top-right',
    'mdi:outline': 'mdi:arrow-top-right'
  },
  'lucide:arrow-up-to-line': {
    'material-symbols': 'material-symbols:arrow-upward',
    'material-symbols:sharp': 'material-symbols:arrow-upward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-upward',
    'mdi': 'mdi:arrow-up',
    'mdi:outline': 'mdi:arrow-up'
  },
  'lucide:arrow-up-wide-narrow': {
    'material-symbols': 'material-symbols:sort',
    'material-symbols:sharp': 'material-symbols:sort-sharp',
    'material-symbols:rounded': 'material-symbols:sort',
    'mdi': 'mdi:sort-descending',
    'mdi:outline': 'mdi:sort-descending'
  },
  'lucide:arrow-up-z-a': {
    'material-symbols': 'material-symbols:sort-by-alpha',
    'material-symbols:sharp': 'material-symbols:sort-by-alpha-sharp',
    'material-symbols:rounded': 'material-symbols:sort-by-alpha',
    'mdi': 'mdi:sort-alphabetical-descending',
    'mdi:outline': 'mdi:sort-alphabetical-descending'
  },
  'lucide:arrows-up-from-line': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-up',
    'mdi:outline': 'mdi:arrow-up'
  },
  'lucide:asterisk': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:asterisk',
    'mdi:outline': 'mdi:asterisk'
  },
  'lucide:at-sign': {
    'material-symbols': 'material-symbols:alternate-email',
    'material-symbols:sharp': 'material-symbols:alternate-email-sharp',
    'material-symbols:rounded': 'material-symbols:alternate-email',
    'mdi': 'mdi:at',
    'mdi:outline': 'mdi:at'
  },
  'lucide:atom': {
    'material-symbols': 'material-symbols:science',
    'material-symbols:sharp': 'material-symbols:science-sharp',
    'material-symbols:rounded': 'material-symbols:science',
    'mdi': 'mdi:atom',
    'mdi:outline': 'mdi:atom-variant'
  },
  'lucide:audio-lines': {
    'material-symbols': 'material-symbols:graphic-eq',
    'material-symbols:sharp': 'material-symbols:graphic-eq-sharp',
    'material-symbols:rounded': 'material-symbols:graphic-eq',
    'mdi': 'mdi:equalizer',
    'mdi:outline': 'mdi:equalizer-outline'
  },
  'lucide:audio-waveform': {
    'material-symbols': 'material-symbols:waveform',
    'material-symbols:sharp': 'material-symbols:waveform-sharp',
    'material-symbols:rounded': 'material-symbols:waveform',
    'mdi': 'mdi:waveform',
    'mdi:outline': 'mdi:waveform'
  },
  'lucide:award': {
    'material-symbols': 'material-symbols:emoji-events',
    'material-symbols:sharp': 'material-symbols:emoji-events-sharp',
    'material-symbols:rounded': 'material-symbols:emoji-events',
    'mdi': 'mdi:trophy-award',
    'mdi:outline': 'mdi:trophy-outline'
  },
  'lucide:axe': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:axe',
    'mdi:outline': 'mdi:axe-battle'
  },
  'lucide:axis-3d': {
    'material-symbols': 'material-symbols:3d-rotation',
    'material-symbols:sharp': 'material-symbols:3d-rotation-sharp',
    'material-symbols:rounded': 'material-symbols:3d-rotation',
    'mdi': 'mdi:axis-arrow',
    'mdi:outline': 'mdi:axis-arrow'
  },
  'lucide:baby': {
    'material-symbols': 'material-symbols:child-care',
    'material-symbols:sharp': 'material-symbols:child-care-sharp',
    'material-symbols:rounded': 'material-symbols:child-care',
    'mdi': 'mdi:baby-carriage',
    'mdi:outline': 'mdi:baby-carriage-outline'
  },
  'lucide:backpack': {
    'material-symbols': 'material-symbols:backpack',
    'material-symbols:sharp': 'material-symbols:backpack-sharp',
    'material-symbols:rounded': 'material-symbols:backpack',
    'mdi': 'mdi:bag-personal',
    'mdi:outline': 'mdi:bag-personal-outline'
  },
  'lucide:badge': {
    'material-symbols': 'material-symbols:badge',
    'material-symbols:sharp': 'material-symbols:badge-sharp',
    'material-symbols:rounded': 'material-symbols:badge',
    'mdi': 'mdi:shield-star',
    'mdi:outline': 'mdi:shield-star-outline'
  },
  'lucide:badge-alert': {
    'material-symbols': 'material-symbols:error',
    'material-symbols:sharp': 'material-symbols:error-sharp',
    'material-symbols:rounded': 'material-symbols:error',
    'mdi': 'mdi:shield-alert',
    'mdi:outline': 'mdi:shield-alert-outline'
  },
  'lucide:badge-cent': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:currency-usd',
    'mdi:outline': 'mdi:currency-usd-outline'
  },
  'lucide:badge-check': {
    'material-symbols': 'material-symbols:verified',
    'material-symbols:sharp': 'material-symbols:verified-sharp',
    'material-symbols:rounded': 'material-symbols:verified',
    'mdi': 'mdi:shield-check',
    'mdi:outline': 'mdi:shield-check-outline'
  },
  'lucide:badge-dollar-sign': {
    'material-symbols': 'material-symbols:attach-money',
    'material-symbols:sharp': 'material-symbols:attach-money-sharp',
    'material-symbols:rounded': 'material-symbols:attach-money',
    'mdi': 'mdi:currency-usd',
    'mdi:outline': 'mdi:currency-usd-outline'
  },
  'lucide:badge-euro': {
    'material-symbols': 'material-symbols:euro',
    'material-symbols:sharp': 'material-symbols:euro-sharp',
    'material-symbols:rounded': 'material-symbols:euro',
    'mdi': 'mdi:currency-eur',
    'mdi:outline': 'mdi:currency-eur-outline'
  },
  'lucide:badge-indian-rupee': {
    'material-symbols': 'material-symbols:currency-rupee',
    'material-symbols:sharp': 'material-symbols:currency-rupee-sharp',
    'material-symbols:rounded': 'material-symbols:currency-rupee',
    'mdi': 'mdi:currency-inr',
    'mdi:outline': 'mdi:currency-inr-outline'
  },
  'lucide:badge-info': {
    'material-symbols': 'material-symbols:info',
    'material-symbols:sharp': 'material-symbols:info-sharp',
    'material-symbols:rounded': 'material-symbols:info',
    'mdi': 'mdi:information',
    'mdi:outline': 'mdi:information-outline'
  },
  'lucide:badge-japanese-yen': {
    'material-symbols': 'material-symbols:currency-yen',
    'material-symbols:sharp': 'material-symbols:currency-yen-sharp',
    'material-symbols:rounded': 'material-symbols:currency-yen',
    'mdi': 'mdi:currency-jpy',
    'mdi:outline': 'mdi:currency-jpy-outline'
  },
  'lucide:badge-minus': {
    'material-symbols': 'material-symbols:remove-circle',
    'material-symbols:sharp': 'material-symbols:remove-circle-sharp',
    'material-symbols:rounded': 'material-symbols:remove-circle',
    'mdi': 'mdi:shield-minus',
    'mdi:outline': 'mdi:shield-minus-outline'
  },
  'lucide:badge-percent': {
    'material-symbols': 'material-symbols:percent',
    'material-symbols:sharp': 'material-symbols:percent-sharp',
    'material-symbols:rounded': 'material-symbols:percent',
    'mdi': 'mdi:percent',
    'mdi:outline': 'mdi:percent-outline'
  },
  'lucide:badge-plus': {
    'material-symbols': 'material-symbols:add-circle',
    'material-symbols:sharp': 'material-symbols:add-circle-sharp',
    'material-symbols:rounded': 'material-symbols:add-circle',
    'mdi': 'mdi:shield-plus',
    'mdi:outline': 'mdi:shield-plus-outline'
  },
  'lucide:badge-pound-sterling': {
    'material-symbols': 'material-symbols:currency-pound',
    'material-symbols:sharp': 'material-symbols:currency-pound-sharp',
    'material-symbols:rounded': 'material-symbols:currency-pound',
    'mdi': 'mdi:currency-gbp',
    'mdi:outline': 'mdi:currency-gbp-outline'
  },
  'lucide:badge-question-mark': {
    'material-symbols': 'material-symbols:help',
    'material-symbols:sharp': 'material-symbols:help-sharp',
    'material-symbols:rounded': 'material-symbols:help',
    'mdi': 'mdi:shield-question',
    'mdi:outline': 'mdi:shield-question-outline'
  },
  'lucide:badge-russian-ruble': {
    'material-symbols': 'material-symbols:currency-ruble',
    'material-symbols:sharp': 'material-symbols:currency-ruble-sharp',
    'material-symbols:rounded': 'material-symbols:currency-ruble',
    'mdi': 'mdi:currency-rub',
    'mdi:outline': 'mdi:currency-rub-outline'
  },
  'lucide:badge-swiss-franc': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:currency-chf',
    'mdi:outline': 'mdi:currency-chf-outline'
  },
  'lucide:badge-turkish-lira': {
    'material-symbols': 'material-symbols:currency-lira',
    'material-symbols:sharp': 'material-symbols:currency-lira-sharp',
    'material-symbols:rounded': 'material-symbols:currency-lira',
    'mdi': 'mdi:currency-try',
    'mdi:outline': 'mdi:currency-try-outline'
  },
  'lucide:badge-x': {
    'material-symbols': 'material-symbols:cancel',
    'material-symbols:sharp': 'material-symbols:cancel-sharp',
    'material-symbols:rounded': 'material-symbols:cancel',
    'mdi': 'mdi:shield-remove',
    'mdi:outline': 'mdi:shield-remove-outline'
  },
  'lucide:baggage-claim': {
    'material-symbols': 'material-symbols:luggage',
    'material-symbols:sharp': 'material-symbols:luggage-sharp',
    'material-symbols:rounded': 'material-symbols:luggage',
    'mdi': 'mdi:bag-suitcase',
    'mdi:outline': 'mdi:bag-suitcase-outline'
  },
  'lucide:ban': {
    'material-symbols': 'material-symbols:block',
    'material-symbols:sharp': 'material-symbols:block-sharp',
    'material-symbols:rounded': 'material-symbols:block',
    'mdi': 'mdi:cancel',
    'mdi:outline': 'mdi:cancel-outline'
  },
  'lucide:banana': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:food-variant',
    'mdi:outline': 'mdi:food-variant-outline'
  },
  'lucide:bandage': {
    'material-symbols': 'material-symbols:healing',
    'material-symbols:sharp': 'material-symbols:healing-sharp',
    'material-symbols:rounded': 'material-symbols:healing',
    'mdi': 'mdi:bandage',
    'mdi:outline': 'mdi:bandage-outline'
  },
  'lucide:banknote': {
    'material-symbols': 'material-symbols:payments',
    'material-symbols:sharp': 'material-symbols:payments-sharp',
    'material-symbols:rounded': 'material-symbols:payments',
    'mdi': 'mdi:cash',
    'mdi:outline': 'mdi:cash-outline'
  },
  'lucide:banknote-arrow-down': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cash-minus',
    'mdi:outline': 'mdi:cash-minus-outline'
  },
  'lucide:banknote-arrow-up': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cash-plus',
    'mdi:outline': 'mdi:cash-plus-outline'
  },
  'lucide:banknote-x': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cash-remove',
    'mdi:outline': 'mdi:cash-remove-outline'
  },
  'lucide:barcode': {
    'material-symbols': 'material-symbols:barcode',
    'material-symbols:sharp': 'material-symbols:barcode-sharp',
    'material-symbols:rounded': 'material-symbols:barcode',
    'mdi': 'mdi:barcode',
    'mdi:outline': 'mdi:barcode-outline'
  },
  'lucide:barrel': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:barrel',
    'mdi:outline': 'mdi:barrel-outline'
  },
  'lucide:baseline': {
    'material-symbols': 'material-symbols:format-align-justify',
    'material-symbols:sharp': 'material-symbols:format-align-justify-sharp',
    'material-symbols:rounded': 'material-symbols:format-align-justify',
    'mdi': 'mdi:format-text',
    'mdi:outline': 'mdi:format-text'
  },
  'lucide:bath': {
    'material-symbols': 'material-symbols:bathtub',
    'material-symbols:sharp': 'material-symbols:bathtub-sharp',
    'material-symbols:rounded': 'material-symbols:bathtub',
    'mdi': 'mdi:bathtub',
    'mdi:outline': 'mdi:bathtub-outline'
  },
  'lucide:battery': {
    'material-symbols': 'material-symbols:battery-full',
    'material-symbols:sharp': 'material-symbols:battery-full-sharp',
    'material-symbols:rounded': 'material-symbols:battery-full',
    'mdi': 'mdi:battery',
    'mdi:outline': 'mdi:battery-outline'
  },
  'lucide:battery-charging': {
    'material-symbols': 'material-symbols:battery-charging-full',
    'material-symbols:sharp': 'material-symbols:battery-charging-full-sharp',
    'material-symbols:rounded': 'material-symbols:battery-charging-full',
    'mdi': 'mdi:battery-charging',
    'mdi:outline': 'mdi:battery-charging-outline'
  },
  'lucide:battery-full': {
    'material-symbols': 'material-symbols:battery-full',
    'material-symbols:sharp': 'material-symbols:battery-full-sharp',
    'material-symbols:rounded': 'material-symbols:battery-full',
    'mdi': 'mdi:battery',
    'mdi:outline': 'mdi:battery-outline'
  },
  'lucide:battery-low': {
    'material-symbols': 'material-symbols:battery-alert',
    'material-symbols:sharp': 'material-symbols:battery-alert-sharp',
    'material-symbols:rounded': 'material-symbols:battery-alert',
    'mdi': 'mdi:battery-low',
    'mdi:outline': 'mdi:battery-low-outline'
  },
  'lucide:battery-medium': {
    'material-symbols': 'material-symbols:battery-5-bar',
    'material-symbols:sharp': 'material-symbols:battery-5-bar-sharp',
    'material-symbols:rounded': 'material-symbols:battery-5-bar',
    'mdi': 'mdi:battery-medium',
    'mdi:outline': 'mdi:battery-medium-outline'
  },
  'lucide:battery-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:battery-plus',
    'mdi:outline': 'mdi:battery-plus-outline'
  },
  'lucide:battery-warning': {
    'material-symbols': 'material-symbols:battery-alert',
    'material-symbols:sharp': 'material-symbols:battery-alert-sharp',
    'material-symbols:rounded': 'material-symbols:battery-alert',
    'mdi': 'mdi:battery-alert',
    'mdi:outline': 'mdi:battery-alert-outline'
  },
  'lucide:beaker': {
    'material-symbols': 'material-symbols:science',
    'material-symbols:sharp': 'material-symbols:science-sharp',
    'material-symbols:rounded': 'material-symbols:science',
    'mdi': 'mdi:beaker',
    'mdi:outline': 'mdi:beaker-outline'
  },
  'lucide:bean': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:seed',
    'mdi:outline': 'mdi:seed-outline'
  },
  'lucide:bean-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:seed-off',
    'mdi:outline': 'mdi:seed-off-outline'
  },
  'lucide:bed': {
    'material-symbols': 'material-symbols:bed',
    'material-symbols:sharp': 'material-symbols:bed-sharp',
    'material-symbols:rounded': 'material-symbols:bed',
    'mdi': 'mdi:bed',
    'mdi:outline': 'mdi:bed-outline'
  },
  'lucide:bed-double': {
    'material-symbols': 'material-symbols:king-bed',
    'material-symbols:sharp': 'material-symbols:king-bed-sharp',
    'material-symbols:rounded': 'material-symbols:king-bed',
    'mdi': 'mdi:bed-double',
    'mdi:outline': 'mdi:bed-double-outline'
  },
  'lucide:bed-single': {
    'material-symbols': 'material-symbols:single-bed',
    'material-symbols:sharp': 'material-symbols:single-bed-sharp',
    'material-symbols:rounded': 'material-symbols:single-bed',
    'mdi': 'mdi:bed-single',
    'mdi:outline': 'mdi:bed-single-outline'
  },
  'lucide:beef': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:food-steak',
    'mdi:outline': 'mdi:food-steak-outline'
  },
  'lucide:beer': {
    'material-symbols': 'material-symbols:local-bar',
    'material-symbols:sharp': 'material-symbols:local-bar-sharp',
    'material-symbols:rounded': 'material-symbols:local-bar',
    'mdi': 'mdi:beer',
    'mdi:outline': 'mdi:beer-outline'
  },
  'lucide:beer-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:beer-outline',
    'mdi:outline': 'mdi:beer-outline-outline'
  },
  'lucide:bell': {
    'material-symbols': 'material-symbols:notifications',
    'material-symbols:sharp': 'material-symbols:notifications-sharp',
    'material-symbols:rounded': 'material-symbols:notifications',
    'mdi': 'mdi:bell',
    'mdi:outline': 'mdi:bell-outline'
  },
  'lucide:bell-dot': {
    'material-symbols': 'material-symbols:notifications-active',
    'material-symbols:sharp': 'material-symbols:notifications-active-sharp',
    'material-symbols:rounded': 'material-symbols:notifications-active',
    'mdi': 'mdi:bell-badge',
    'mdi:outline': 'mdi:bell-badge-outline'
  },
  'lucide:bell-electric': {
    'material-symbols': 'material-symbols:doorbell',
    'material-symbols:sharp': 'material-symbols:doorbell-sharp',
    'material-symbols:rounded': 'material-symbols:doorbell',
    'mdi': 'mdi:bell-ring',
    'mdi:outline': 'mdi:bell-ring-outline'
  },
  'lucide:bell-minus': {
    'material-symbols': 'material-symbols:notifications-off',
    'material-symbols:sharp': 'material-symbols:notifications-off-sharp',
    'material-symbols:rounded': 'material-symbols:notifications-off',
    'mdi': 'mdi:bell-minus',
    'mdi:outline': 'mdi:bell-minus-outline'
  },
  'lucide:bell-off': {
    'material-symbols': 'material-symbols:notifications-off',
    'material-symbols:sharp': 'material-symbols:notifications-off-sharp',
    'material-symbols:rounded': 'material-symbols:notifications-off',
    'mdi': 'mdi:bell-off',
    'mdi:outline': 'mdi:bell-off-outline'
  },
  'lucide:bell-plus': {
    'material-symbols': 'material-symbols:add-alert',
    'material-symbols:sharp': 'material-symbols:add-alert-sharp',
    'material-symbols:rounded': 'material-symbols:add-alert',
    'mdi': 'mdi:bell-plus',
    'mdi:outline': 'mdi:bell-plus-outline'
  },
  'lucide:bell-ring': {
    'material-symbols': 'material-symbols:notifications-active',
    'material-symbols:sharp': 'material-symbols:notifications-active-sharp',
    'material-symbols:rounded': 'material-symbols:notifications-active',
    'mdi': 'mdi:bell-ring',
    'mdi:outline': 'mdi:bell-ring-outline'
  },
  'lucide:between-horizontal-end': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cast-variant',
    'mdi:outline': 'mdi:cast-variant'
  },
  'lucide:between-horizontal-start': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:alarm',
    'mdi:outline': 'mdi:alarm-outline'
  },
  'lucide:between-vertical-end': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:alarm-check',
    'mdi:outline': 'mdi:alarm-check'
  },
  'lucide:between-vertical-start': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:alarm-minus',
    'mdi:outline': 'mdi:alarm-minus'
  },
  'lucide:biceps-flexed': {
    'material-symbols': 'material-symbols:fitness-center',
    'material-symbols:sharp': 'material-symbols:fitness-center-sharp',
    'material-symbols:rounded': 'material-symbols:fitness-center',
    'mdi': 'mdi:arm-flex',
    'mdi:outline': 'mdi:arm-flex-outline'
  },
  'lucide:bike': {
    'material-symbols': 'material-symbols:directions-bike',
    'material-symbols:sharp': 'material-symbols:directions-bike-sharp',
    'material-symbols:rounded': 'material-symbols:directions-bike',
    'mdi': 'mdi:bicycle',
    'mdi:outline': 'mdi:bicycle-outline'
  },
  'lucide:binary': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:binary',
    'mdi:outline': 'mdi:binary-outline'
  },
  'lucide:binoculars': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:binoculars',
    'mdi:outline': 'mdi:binoculars-outline'
  },
  'lucide:biohazard': {
    'material-symbols': 'material-symbols:coronavirus',
    'material-symbols:sharp': 'material-symbols:coronavirus-sharp',
    'material-symbols:rounded': 'material-symbols:coronavirus',
    'mdi': 'mdi:biohazard',
    'mdi:outline': 'mdi:biohazard-outline'
  },
  'lucide:bird': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:bird',
    'mdi:outline': 'mdi:bird-outline'
  },
  'lucide:birdhouse': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:birdhouse',
    'mdi:outline': 'mdi:birdhouse-outline'
  },
  'lucide:bitcoin': {
    'material-symbols': 'material-symbols:currency-bitcoin',
    'material-symbols:sharp': 'material-symbols:currency-bitcoin-sharp',
    'material-symbols:rounded': 'material-symbols:currency-bitcoin',
    'mdi': 'mdi:bitcoin',
    'mdi:outline': 'mdi:bitcoin-outline'
  },
  'lucide:blend': {
    'material-symbols': 'material-symbols:blender',
    'material-symbols:sharp': 'material-symbols:blender-sharp',
    'material-symbols:rounded': 'material-symbols:blender',
    'mdi': 'mdi:blender',
    'mdi:outline': 'mdi:blender-outline'
  },
  'lucide:blinds': {
    'material-symbols': 'material-symbols:blinds',
    'material-symbols:sharp': 'material-symbols:blinds-sharp',
    'material-symbols:rounded': 'material-symbols:blinds',
    'mdi': 'mdi:blinds',
    'mdi:outline': 'mdi:blinds-outline'
  },
  'lucide:blocks': {
    'material-symbols': 'material-symbols:extension',
    'material-symbols:sharp': 'material-symbols:extension-sharp',
    'material-symbols:rounded': 'material-symbols:extension',
    'mdi': 'mdi:cube',
    'mdi:outline': 'mdi:cube-outline'
  },
  'lucide:bluetooth': {
    'material-symbols': 'material-symbols:bluetooth',
    'material-symbols:sharp': 'material-symbols:bluetooth-sharp',
    'material-symbols:rounded': 'material-symbols:bluetooth',
    'mdi': 'mdi:bluetooth',
    'mdi:outline': 'mdi:bluetooth-outline'
  },
  'lucide:bluetooth-connected': {
    'material-symbols': 'material-symbols:bluetooth-connected',
    'material-symbols:sharp': 'material-symbols:bluetooth-connected-sharp',
    'material-symbols:rounded': 'material-symbols:bluetooth-connected',
    'mdi': 'mdi:bluetooth-connect',
    'mdi:outline': 'mdi:bluetooth-connect-outline'
  },
  'lucide:bluetooth-off': {
    'material-symbols': 'material-symbols:bluetooth-disabled',
    'material-symbols:sharp': 'material-symbols:bluetooth-disabled-sharp',
    'material-symbols:rounded': 'material-symbols:bluetooth-disabled',
    'mdi': 'mdi:bluetooth-off',
    'mdi:outline': 'mdi:bluetooth-off-outline'
  },
  'lucide:bluetooth-searching': {
    'material-symbols': 'material-symbols:bluetooth-searching',
    'material-symbols:sharp': 'material-symbols:bluetooth-searching-sharp',
    'material-symbols:rounded': 'material-symbols:bluetooth-searching',
    'mdi': 'mdi:bluetooth-search',
    'mdi:outline': 'mdi:bluetooth-search-outline'
  },
  'lucide:bold': {
    'material-symbols': 'material-symbols:format-bold',
    'material-symbols:sharp': 'material-symbols:format-bold-sharp',
    'material-symbols:rounded': 'material-symbols:format-bold',
    'mdi': 'mdi:format-bold',
    'mdi:outline': 'mdi:format-bold'
  },
  'lucide:bolt': {
    'material-symbols': 'material-symbols:bolt',
    'material-symbols:sharp': 'material-symbols:bolt-sharp',
    'material-symbols:rounded': 'material-symbols:bolt',
    'mdi': 'mdi:lightning-bolt',
    'mdi:outline': 'mdi:lightning-bolt-outline'
  },
  'lucide:bomb': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:bomb',
    'mdi:outline': 'mdi:bomb-outline'
  },
  'lucide:bone': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:bone',
    'mdi:outline': 'mdi:bone-outline'
  },
  'lucide:book': {
    'material-symbols': 'material-symbols:book-2',
    'material-symbols:sharp': 'material-symbols:book-2-sharp',
    'material-symbols:rounded': 'material-symbols:book-2',
    'mdi': 'mdi:book',
    'mdi:outline': 'mdi:book-outline'
  },
  'lucide:book-a': {
    'material-symbols': 'material-symbols:book-3',
    'material-symbols:sharp': 'material-symbols:book-3-sharp',
    'material-symbols:rounded': 'material-symbols:book-3',
    'mdi': 'mdi:book-alphabet',
    'mdi:outline': 'mdi:book-alphabet-outline'
  },
  'lucide:book-alert': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:book-alert',
    'mdi:outline': 'mdi:book-alert-outline'
  },
  'lucide:book-audio': {
    'material-symbols': 'material-symbols:audio-file',
    'material-symbols:sharp': 'material-symbols:audio-file-sharp',
    'material-symbols:rounded': 'material-symbols:audio-file',
    'mdi': 'mdi:book-music',
    'mdi:outline': 'mdi:book-music-outline'
  },
  'lucide:book-check': {
    'material-symbols': 'material-symbols:bookmark-check',
    'material-symbols:sharp': 'material-symbols:bookmark-check-sharp',
    'material-symbols:rounded': 'material-symbols:bookmark-check',
    'mdi': 'mdi:book-check',
    'mdi:outline': 'mdi:book-check-outline'
  },
  'lucide:book-copy': {
    'material-symbols': 'material-symbols:content-copy',
    'material-symbols:sharp': 'material-symbols:content-copy-sharp',
    'material-symbols:rounded': 'material-symbols:content-copy',
    'mdi': 'mdi:book-multiple',
    'mdi:outline': 'mdi:book-multiple-outline'
  },
  'lucide:book-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:book-open-variant',
    'mdi:outline': 'mdi:book-open-variant-outline'
  },
  'lucide:book-down': {
    'material-symbols': 'material-symbols:sim-card-download',
    'material-symbols:sharp': 'material-symbols:sim-card-download-sharp',
    'material-symbols:rounded': 'material-symbols:sim-card-download',
    'mdi': 'mdi:book-arrow-down',
    'mdi:outline': 'mdi:book-arrow-down-outline'
  },
  'lucide:book-headphones': {
    'material-symbols': 'material-symbols:headphones',
    'material-symbols:sharp': 'material-symbols:headphones-sharp',
    'material-symbols:rounded': 'material-symbols:headphones',
    'mdi': 'mdi:book-music',
    'mdi:outline': 'mdi:book-music-outline'
  },
  'lucide:book-heart': {
    'material-symbols': 'material-symbols:favorite',
    'material-symbols:sharp': 'material-symbols:favorite-sharp',
    'material-symbols:rounded': 'material-symbols:favorite',
    'mdi': 'mdi:book-heart',
    'mdi:outline': 'mdi:book-heart-outline'
  },
  'lucide:book-image': {
    'material-symbols': 'material-symbols:photo-library',
    'material-symbols:sharp': 'material-symbols:photo-library-sharp',
    'material-symbols:rounded': 'material-symbols:photo-library',
    'mdi': 'mdi:book-open-page-variant',
    'mdi:outline': 'mdi:book-open-page-variant-outline'
  },
  'lucide:book-key': {
    'material-symbols': 'material-symbols:vpn-key',
    'material-symbols:sharp': 'material-symbols:vpn-key-sharp',
    'material-symbols:rounded': 'material-symbols:vpn-key',
    'mdi': 'mdi:book-lock',
    'mdi:outline': 'mdi:book-lock-outline'
  },
  'lucide:book-lock': {
    'material-symbols': 'material-symbols:lock',
    'material-symbols:sharp': 'material-symbols:lock-sharp',
    'material-symbols:rounded': 'material-symbols:lock',
    'mdi': 'mdi:book-lock',
    'mdi:outline': 'mdi:book-lock-outline'
  },
  'lucide:book-marked': {
    'material-symbols': 'material-symbols:bookmark',
    'material-symbols:sharp': 'material-symbols:bookmark-sharp',
    'material-symbols:rounded': 'material-symbols:bookmark',
    'mdi': 'mdi:bookmark',
    'mdi:outline': 'mdi:bookmark-outline'
  },
  'lucide:book-minus': {
    'material-symbols': 'material-symbols:remove',
    'material-symbols:sharp': 'material-symbols:remove-sharp',
    'material-symbols:rounded': 'material-symbols:remove',
    'mdi': 'mdi:book-minus',
    'mdi:outline': 'mdi:book-minus-outline'
  },
  'lucide:book-open': {
    'material-symbols': 'material-symbols:menu-book',
    'material-symbols:sharp': 'material-symbols:menu-book-sharp',
    'material-symbols:rounded': 'material-symbols:menu-book',
    'mdi': 'mdi:book-open',
    'mdi:outline': 'mdi:book-open-outline'
  },
  'lucide:book-open-check': {
    'material-symbols': 'material-symbols:bookmark-check',
    'material-symbols:sharp': 'material-symbols:bookmark-check-sharp',
    'material-symbols:rounded': 'material-symbols:bookmark-check',
    'mdi': 'mdi:book-check',
    'mdi:outline': 'mdi:book-check-outline'
  },
  'lucide:book-open-text': {
    'material-symbols': 'material-symbols:menu-book',
    'material-symbols:sharp': 'material-symbols:menu-book-sharp',
    'material-symbols:rounded': 'material-symbols:menu-book',
    'mdi': 'mdi:book-open-page-variant',
    'mdi:outline': 'mdi:book-open-page-variant-outline'
  },
  'lucide:book-plus': {
    'material-symbols': 'material-symbols:bookmark-add',
    'material-symbols:sharp': 'material-symbols:bookmark-add-sharp',
    'material-symbols:rounded': 'material-symbols:bookmark-add',
    'mdi': 'mdi:book-plus',
    'mdi:outline': 'mdi:book-plus-outline'
  },
  'lucide:book-search': {
    'material-symbols': 'material-symbols:search',
    'material-symbols:sharp': 'material-symbols:search-sharp',
    'material-symbols:rounded': 'material-symbols:search',
    'mdi': 'mdi:book-search',
    'mdi:outline': 'mdi:book-search-outline'
  },
  'lucide:book-text': {
    'material-symbols': 'material-symbols:auto-stories',
    'material-symbols:sharp': 'material-symbols:auto-stories-sharp',
    'material-symbols:rounded': 'material-symbols:auto-stories',
    'mdi': 'mdi:book-open-page-variant',
    'mdi:outline': 'mdi:book-open-page-variant-outline'
  },
  'lucide:book-type': {
    'material-symbols': 'material-symbols:category',
    'material-symbols:sharp': 'material-symbols:category-sharp',
    'material-symbols:rounded': 'material-symbols:category',
    'mdi': 'mdi:book-alphabet',
    'mdi:outline': 'mdi:book-alphabet-outline'
  },
  'lucide:book-up': {
    'material-symbols': 'material-symbols:upload',
    'material-symbols:sharp': 'material-symbols:upload-sharp',
    'material-symbols:rounded': 'material-symbols:upload',
    'mdi': 'mdi:book-arrow-up',
    'mdi:outline': 'mdi:book-arrow-up-outline'
  },
  'lucide:book-up-2': {
    'material-symbols': 'material-symbols:upload',
    'material-symbols:sharp': 'material-symbols:upload-sharp',
    'material-symbols:rounded': 'material-symbols:upload',
    'mdi': 'mdi:book-arrow-up',
    'mdi:outline': 'mdi:book-arrow-up-outline'
  },
  'lucide:book-user': {
    'material-symbols': 'material-symbols:person',
    'material-symbols:sharp': 'material-symbols:person-sharp',
    'material-symbols:rounded': 'material-symbols:person',
    'mdi': 'mdi:account-box',
    'mdi:outline': 'mdi:account-box-outline'
  },
  'lucide:book-x': {
    'material-symbols': 'material-symbols:close',
    'material-symbols:sharp': 'material-symbols:close-sharp',
    'material-symbols:rounded': 'material-symbols:close',
    'mdi': 'mdi:book-remove',
    'mdi:outline': 'mdi:book-remove-outline'
  },
  'lucide:bookmark': {
    'material-symbols': 'material-symbols:bookmark',
    'material-symbols:sharp': 'material-symbols:bookmark-sharp',
    'material-symbols:rounded': 'material-symbols:bookmark',
    'mdi': 'mdi:bookmark',
    'mdi:outline': 'mdi:bookmark-outline'
  },
  'lucide:bookmark-check': {
    'material-symbols': 'material-symbols:bookmark-check',
    'material-symbols:sharp': 'material-symbols:bookmark-check-sharp',
    'material-symbols:rounded': 'material-symbols:bookmark-check',
    'mdi': 'mdi:bookmark-check',
    'mdi:outline': 'mdi:bookmark-check-outline'
  },
  'lucide:bookmark-minus': {
    'material-symbols': 'material-symbols:bookmark-remove',
    'material-symbols:sharp': 'material-symbols:bookmark-remove-sharp',
    'material-symbols:rounded': 'material-symbols:bookmark-remove',
    'mdi': 'mdi:bookmark-minus',
    'mdi:outline': 'mdi:bookmark-minus-outline'
  },
  'lucide:bookmark-plus': {
    'material-symbols': 'material-symbols:bookmark-add',
    'material-symbols:sharp': 'material-symbols:bookmark-add-sharp',
    'material-symbols:rounded': 'material-symbols:bookmark-add',
    'mdi': 'mdi:bookmark-plus',
    'mdi:outline': 'mdi:bookmark-plus-outline'
  },
  'lucide:bookmark-x': {
    'material-symbols': 'material-symbols:bookmark-remove',
    'material-symbols:sharp': 'material-symbols:bookmark-remove-sharp',
    'material-symbols:rounded': 'material-symbols:bookmark-remove',
    'mdi': 'mdi:bookmark-remove',
    'mdi:outline': 'mdi:bookmark-remove-outline'
  },
  'lucide:boom-box': {
    'material-symbols': 'material-symbols:radio',
    'material-symbols:sharp': 'material-symbols:radio-sharp',
    'material-symbols:rounded': 'material-symbols:radio',
    'mdi': 'mdi:boombox',
    'mdi:outline': 'mdi:boombox-outline'
  },
  'lucide:bot': {
    'material-symbols': 'material-symbols:smart-toy',
    'material-symbols:sharp': 'material-symbols:smart-toy-sharp',
    'material-symbols:rounded': 'material-symbols:smart-toy',
    'mdi': 'mdi:robot',
    'mdi:outline': 'mdi:robot-outline'
  },
  'lucide:bot-message-square': {
    'material-symbols': 'material-symbols:chat',
    'material-symbols:sharp': 'material-symbols:chat-sharp',
    'material-symbols:rounded': 'material-symbols:chat',
    'mdi': 'mdi:robot',
    'mdi:outline': 'mdi:robot-outline'
  },
  'lucide:bot-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:robot-off',
    'mdi:outline': 'mdi:robot-off-outline'
  },
  'lucide:bottle-wine': {
    'material-symbols': 'material-symbols:wine-bar',
    'material-symbols:sharp': 'material-symbols:wine-bar-sharp',
    'material-symbols:rounded': 'material-symbols:wine-bar',
    'mdi': 'mdi:bottle-wine',
    'mdi:outline': 'mdi:bottle-wine-outline'
  },
  'lucide:bow-arrow': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:bow-arrow',
    'mdi:outline': 'mdi:bow-arrow-outline'
  },
  'lucide:box': {
    'material-symbols': 'material-symbols:inventory-2',
    'material-symbols:sharp': 'material-symbols:inventory-2-sharp',
    'material-symbols:rounded': 'material-symbols:inventory-2',
    'mdi': 'mdi:package-variant',
    'mdi:outline': 'mdi:package-variant-outline'
  },
  'lucide:boxes': {
    'material-symbols': 'material-symbols:inventory',
    'material-symbols:sharp': 'material-symbols:inventory-sharp',
    'material-symbols:rounded': 'material-symbols:inventory',
    'mdi': 'mdi:package-variant-closed',
    'mdi:outline': 'mdi:package-variant-closed-outline'
  },
  'lucide:braces': {
    'material-symbols': 'material-symbols:data-object',
    'material-symbols:sharp': 'material-symbols:data-object-sharp',
    'material-symbols:rounded': 'material-symbols:data-object',
    'mdi': 'mdi:code-braces',
    'mdi:outline': 'mdi:code-braces-outline'
  },
  'lucide:brackets': {
    'material-symbols': 'material-symbols:code-blocks',
    'material-symbols:sharp': 'material-symbols:code-blocks-sharp',
    'material-symbols:rounded': 'material-symbols:code-blocks',
    'mdi': 'mdi:code-brackets',
    'mdi:outline': 'mdi:code-brackets-outline'
  },
  'lucide:brain': {
    'material-symbols': 'material-symbols:psychology',
    'material-symbols:sharp': 'material-symbols:psychology-sharp',
    'material-symbols:rounded': 'material-symbols:psychology',
    'mdi': 'mdi:brain',
    'mdi:outline': 'mdi:brain-outline'
  },
  'lucide:brain-circuit': {
    'material-symbols': 'material-symbols:psychology-alt',
    'material-symbols:sharp': 'material-symbols:psychology-alt-sharp',
    'material-symbols:rounded': 'material-symbols:psychology-alt',
    'mdi': 'mdi:brain',
    'mdi:outline': 'mdi:brain-outline'
  },
  'lucide:brain-cog': {
    'material-symbols': 'material-symbols:settings-suggest',
    'material-symbols:sharp': 'material-symbols:settings-suggest-sharp',
    'material-symbols:rounded': 'material-symbols:settings-suggest',
    'mdi': 'mdi:brain',
    'mdi:outline': 'mdi:brain-outline'
  },
  'lucide:brick-wall': {
    'material-symbols': 'material-symbols:texture',
    'material-symbols:sharp': 'material-symbols:texture-sharp',
    'material-symbols:rounded': 'material-symbols:texture',
    'mdi': 'mdi:wall',
    'mdi:outline': 'mdi:wall-outline'
  },
  'lucide:brick-wall-fire': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:fireplace',
    'mdi:outline': 'mdi:fireplace-outline'
  },
  'lucide:brick-wall-shield': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:shield-home',
    'mdi:outline': 'mdi:shield-home-outline'
  },
  'lucide:briefcase': {
    'material-symbols': 'material-symbols:work',
    'material-symbols:sharp': 'material-symbols:work-sharp',
    'material-symbols:rounded': 'material-symbols:work',
    'mdi': 'mdi:briefcase',
    'mdi:outline': 'mdi:briefcase-outline'
  },
  'lucide:briefcase-business': {
    'material-symbols': 'material-symbols:business-center',
    'material-symbols:sharp': 'material-symbols:business-center-sharp',
    'material-symbols:rounded': 'material-symbols:business-center',
    'mdi': 'mdi:briefcase',
    'mdi:outline': 'mdi:briefcase-outline'
  },
  'lucide:briefcase-conveyor-belt': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:briefcase',
    'mdi:outline': 'mdi:briefcase-outline'
  },
  'lucide:briefcase-medical': {
    'material-symbols': 'material-symbols:medical-services',
    'material-symbols:sharp': 'material-symbols:medical-services-sharp',
    'material-symbols:rounded': 'material-symbols:medical-services',
    'mdi': 'mdi:briefcase-medical',
    'mdi:outline': 'mdi:briefcase-medical-outline'
  },
  'lucide:bring-to-front': {
    'material-symbols': 'material-symbols:flip-to-front',
    'material-symbols:sharp': 'material-symbols:flip-to-front-sharp',
    'material-symbols:rounded': 'material-symbols:flip-to-front',
    'mdi': 'mdi:arrange-bring-forward',
    'mdi:outline': 'mdi:arrange-bring-forward-outline'
  },
  'lucide:brush': {
    'material-symbols': 'material-symbols:brush',
    'material-symbols:sharp': 'material-symbols:brush-sharp',
    'material-symbols:rounded': 'material-symbols:brush',
    'mdi': 'mdi:brush',
    'mdi:outline': 'mdi:brush-outline'
  },
  'lucide:brush-cleaning': {
    'material-symbols': 'material-symbols:cleaning-services',
    'material-symbols:sharp': 'material-symbols:cleaning-services-sharp',
    'material-symbols:rounded': 'material-symbols:cleaning-services',
    'mdi': 'mdi:broom',
    'mdi:outline': 'mdi:broom-outline'
  },
  'lucide:bubbles': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chart-bubble',
    'mdi:outline': 'mdi:chart-bubble-outline'
  },
  'lucide:bug': {
    'material-symbols': 'material-symbols:bug-report',
    'material-symbols:sharp': 'material-symbols:bug-report-sharp',
    'material-symbols:rounded': 'material-symbols:bug-report',
    'mdi': 'mdi:bug',
    'mdi:outline': 'mdi:bug-outline'
  },
  'lucide:bug-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:bug-outline',
    'mdi:outline': 'mdi:bug-outline-outline'
  },
  'lucide:bug-play': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:bug-play',
    'mdi:outline': 'mdi:bug-play-outline'
  },
  'lucide:building': {
    'material-symbols': 'material-symbols:apartment',
    'material-symbols:sharp': 'material-symbols:apartment-sharp',
    'material-symbols:rounded': 'material-symbols:apartment',
    'mdi': 'mdi:office-building',
    'mdi:outline': 'mdi:office-building-outline'
  },
  'lucide:building-2': {
    'material-symbols': 'material-symbols:domain',
    'material-symbols:sharp': 'material-symbols:domain-sharp',
    'material-symbols:rounded': 'material-symbols:domain',
    'mdi': 'mdi:domain',
    'mdi:outline': 'mdi:domain-outline'
  },
  'lucide:bus': {
    'material-symbols': 'material-symbols:directions-bus',
    'material-symbols:sharp': 'material-symbols:directions-bus-sharp',
    'material-symbols:rounded': 'material-symbols:directions-bus',
    'mdi': 'mdi:bus',
    'mdi:outline': 'mdi:bus-outline'
  },
  'lucide:bus-front': {
    'material-symbols': 'material-symbols:airport-shuttle',
    'material-symbols:sharp': 'material-symbols:airport-shuttle-sharp',
    'material-symbols:rounded': 'material-symbols:airport-shuttle',
    'mdi': 'mdi:bus-side',
    'mdi:outline': 'mdi:bus-side-outline'
  },
  'lucide:cable': {
    'material-symbols': 'material-symbols:cable',
    'material-symbols:sharp': 'material-symbols:cable-sharp',
    'material-symbols:rounded': 'material-symbols:cable',
    'mdi': 'mdi:cable-data',
    'mdi:outline': 'mdi:cable-data-outline'
  },
  'lucide:cable-car': {
    'material-symbols': 'material-symbols:tram',
    'material-symbols:sharp': 'material-symbols:tram-sharp',
    'material-symbols:rounded': 'material-symbols:tram',
    'mdi': 'mdi:gondola',
    'mdi:outline': 'mdi:gondola-outline'
  },
  'lucide:cake': {
    'material-symbols': 'material-symbols:cake',
    'material-symbols:sharp': 'material-symbols:cake-sharp',
    'material-symbols:rounded': 'material-symbols:cake',
    'mdi': 'mdi:cake',
    'mdi:outline': 'mdi:cake-outline'
  },
  'lucide:cake-slice': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cake-variant',
    'mdi:outline': 'mdi:cake-variant-outline'
  },
  'lucide:calculator': {
    'material-symbols': 'material-symbols:calculate',
    'material-symbols:sharp': 'material-symbols:calculate-sharp',
    'material-symbols:rounded': 'material-symbols:calculate',
    'mdi': 'mdi:calculator',
    'mdi:outline': 'mdi:calculator-outline'
  },
  'lucide:calendar': {
    'material-symbols': 'material-symbols:calendar-today',
    'material-symbols:sharp': 'material-symbols:calendar-today-sharp',
    'material-symbols:rounded': 'material-symbols:calendar-today',
    'mdi': 'mdi:calendar',
    'mdi:outline': 'mdi:calendar-outline'
  },
  'lucide:calendar-1': {
    'material-symbols': 'material-symbols:event',
    'material-symbols:sharp': 'material-symbols:event-sharp',
    'material-symbols:rounded': 'material-symbols:event',
    'mdi': 'mdi:calendar',
    'mdi:outline': 'mdi:calendar-outline'
  },
  'lucide:calendar-arrow-down': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:calendar-arrow-down',
    'mdi:outline': 'mdi:calendar-arrow-down-outline'
  },
  'lucide:calendar-arrow-up': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:calendar-arrow-up',
    'mdi:outline': 'mdi:calendar-arrow-up-outline'
  },
  'lucide:calendar-check': {
    'material-symbols': 'material-symbols:event-available',
    'material-symbols:sharp': 'material-symbols:event-available-sharp',
    'material-symbols:rounded': 'material-symbols:event-available',
    'mdi': 'mdi:calendar-check',
    'mdi:outline': 'mdi:calendar-check-outline'
  },
  'lucide:calendar-check-2': {
    'material-symbols': 'material-symbols:event-available',
    'material-symbols:sharp': 'material-symbols:event-available-sharp',
    'material-symbols:rounded': 'material-symbols:event-available',
    'mdi': 'mdi:calendar-check',
    'mdi:outline': 'mdi:calendar-check-outline'
  },
  'lucide:calendar-clock': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:calendar-clock',
    'mdi:outline': 'mdi:calendar-clock-outline'
  },
  'lucide:calendar-cog': {
    'material-symbols': 'material-symbols:settings',
    'material-symbols:sharp': 'material-symbols:settings-sharp',
    'material-symbols:rounded': 'material-symbols:settings',
    'mdi': 'mdi:calendar-cog',
    'mdi:outline': 'mdi:calendar-cog-outline'
  },
  'lucide:calendar-days': {
    'material-symbols': 'material-symbols:calendar-month',
    'material-symbols:sharp': 'material-symbols:calendar-month-sharp',
    'material-symbols:rounded': 'material-symbols:calendar-month',
    'mdi': 'mdi:calendar',
    'mdi:outline': 'mdi:calendar-outline'
  },
  'lucide:calendar-fold': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:calendar-collapse-horizontal',
    'mdi:outline': 'mdi:calendar-collapse-horizontal-outline'
  },
  'lucide:calendar-heart': {
    'material-symbols': 'material-symbols:favorite',
    'material-symbols:sharp': 'material-symbols:favorite-sharp',
    'material-symbols:rounded': 'material-symbols:favorite',
    'mdi': 'mdi:calendar-heart',
    'mdi:outline': 'mdi:calendar-heart-outline'
  },
  'lucide:calendar-minus': {
    'material-symbols': 'material-symbols:event-busy',
    'material-symbols:sharp': 'material-symbols:event-busy-sharp',
    'material-symbols:rounded': 'material-symbols:event-busy',
    'mdi': 'mdi:calendar-minus',
    'mdi:outline': 'mdi:calendar-minus-outline'
  },
  'lucide:calendar-minus-2': {
    'material-symbols': 'material-symbols:event-busy',
    'material-symbols:sharp': 'material-symbols:event-busy-sharp',
    'material-symbols:rounded': 'material-symbols:event-busy',
    'mdi': 'mdi:calendar-remove',
    'mdi:outline': 'mdi:calendar-remove-outline'
  },
  'lucide:calendar-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:calendar-remove',
    'mdi:outline': 'mdi:calendar-remove-outline'
  },
  'lucide:calendar-plus': {
    'material-symbols': 'material-symbols:event',
    'material-symbols:sharp': 'material-symbols:event-sharp',
    'material-symbols:rounded': 'material-symbols:event',
    'mdi': 'mdi:calendar-plus',
    'mdi:outline': 'mdi:calendar-plus-outline'
  },
  'lucide:calendar-plus-2': {
    'material-symbols': 'material-symbols:event',
    'material-symbols:sharp': 'material-symbols:event-sharp',
    'material-symbols:rounded': 'material-symbols:event',
    'mdi': 'mdi:calendar-plus',
    'mdi:outline': 'mdi:calendar-plus-outline'
  },
  'lucide:calendar-range': {
    'material-symbols': 'material-symbols:date-range',
    'material-symbols:sharp': 'material-symbols:date-range-sharp',
    'material-symbols:rounded': 'material-symbols:date-range',
    'mdi': 'mdi:calendar-range',
    'mdi:outline': 'mdi:calendar-range-outline'
  },
  'lucide:calendar-search': {
    'material-symbols': 'material-symbols:search',
    'material-symbols:sharp': 'material-symbols:search-sharp',
    'material-symbols:rounded': 'material-symbols:search',
    'mdi': 'mdi:calendar-search',
    'mdi:outline': 'mdi:calendar-search-outline'
  },
  'lucide:calendar-sync': {
    'material-symbols': 'material-symbols:sync',
    'material-symbols:sharp': 'material-symbols:sync-sharp',
    'material-symbols:rounded': 'material-symbols:sync',
    'mdi': 'mdi:calendar-sync',
    'mdi:outline': 'mdi:calendar-sync-outline'
  },
  'lucide:calendar-x': {
    'material-symbols': 'material-symbols:event-busy',
    'material-symbols:sharp': 'material-symbols:event-busy-sharp',
    'material-symbols:rounded': 'material-symbols:event-busy',
    'mdi': 'mdi:calendar-remove',
    'mdi:outline': 'mdi:calendar-remove-outline'
  },
  'lucide:calendar-x-2': {
    'material-symbols': 'material-symbols:event-busy',
    'material-symbols:sharp': 'material-symbols:event-busy-sharp',
    'material-symbols:rounded': 'material-symbols:event-busy',
    'mdi': 'mdi:calendar-remove',
    'mdi:outline': 'mdi:calendar-remove-outline'
  },
  'lucide:calendars': {
    'material-symbols': 'material-symbols:calendar-view-month',
    'material-symbols:sharp': 'material-symbols:calendar-view-month-sharp',
    'material-symbols:rounded': 'material-symbols:calendar-view-month',
    'mdi': 'mdi:calendar-multiple',
    'mdi:outline': 'mdi:calendar-multiple-outline'
  },
  'lucide:camera': {
    'material-symbols': 'material-symbols:photo-camera',
    'material-symbols:sharp': 'material-symbols:photo-camera-sharp',
    'material-symbols:rounded': 'material-symbols:photo-camera',
    'mdi': 'mdi:camera',
    'mdi:outline': 'mdi:camera-outline'
  },
  'lucide:camera-off': {
    'material-symbols': 'material-symbols:no-photography',
    'material-symbols:sharp': 'material-symbols:no-photography-sharp',
    'material-symbols:rounded': 'material-symbols:no-photography',
    'mdi': 'mdi:camera-off',
    'mdi:outline': 'mdi:camera-off-outline'
  },
  'lucide:candy': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:candy',
    'mdi:outline': 'mdi:candy-outline'
  },
  'lucide:candy-cane': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:candy-cane',
    'mdi:outline': 'mdi:candy-cane-outline'
  },
  'lucide:candy-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:candy-off',
    'mdi:outline': 'mdi:candy-off-outline'
  },
  'lucide:cannabis': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cannabis',
    'mdi:outline': 'mdi:cannabis-outline'
  },
  'lucide:captions': {
    'material-symbols': 'material-symbols:closed-caption',
    'material-symbols:sharp': 'material-symbols:closed-caption-sharp',
    'material-symbols:rounded': 'material-symbols:closed-caption',
    'mdi': 'mdi:closed-caption',
    'mdi:outline': 'mdi:closed-caption-outline'
  },
  'lucide:captions-off': {
    'material-symbols': 'material-symbols:closed-caption-disabled',
    'material-symbols:sharp': 'material-symbols:closed-caption-disabled-sharp',
    'material-symbols:rounded': 'material-symbols:closed-caption-disabled',
    'mdi': 'mdi:closed-caption-outline',
    'mdi:outline': 'mdi:closed-caption-outline-outline'
  },
  'lucide:car': {
    'material-symbols': 'material-symbols:directions-car',
    'material-symbols:sharp': 'material-symbols:directions-car-sharp',
    'material-symbols:rounded': 'material-symbols:directions-car',
    'mdi': 'mdi:car',
    'mdi:outline': 'mdi:car-outline'
  },
  'lucide:car-front': {
    'material-symbols': 'material-symbols:directions-car',
    'material-symbols:sharp': 'material-symbols:directions-car-sharp',
    'material-symbols:rounded': 'material-symbols:directions-car',
    'mdi': 'mdi:car-side',
    'mdi:outline': 'mdi:car-side-outline'
  },
  'lucide:car-taxi-front': {
    'material-symbols': 'material-symbols:local-taxi',
    'material-symbols:sharp': 'material-symbols:local-taxi-sharp',
    'material-symbols:rounded': 'material-symbols:local-taxi',
    'mdi': 'mdi:taxi',
    'mdi:outline': 'mdi:taxi-outline'
  },
  'lucide:caravan': {
    'material-symbols': 'material-symbols:rv-hookup',
    'material-symbols:sharp': 'material-symbols:rv-hookup-sharp',
    'material-symbols:rounded': 'material-symbols:rv-hookup',
    'mdi': 'mdi:rv-truck',
    'mdi:outline': 'mdi:rv-truck-outline'
  },
  'lucide:card-sim': {
    'material-symbols': 'material-symbols:sim-card',
    'material-symbols:sharp': 'material-symbols:sim-card-sharp',
    'material-symbols:rounded': 'material-symbols:sim-card',
    'mdi': 'mdi:sim',
    'mdi:outline': 'mdi:sim-outline'
  },
  'lucide:carrot': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:carrot',
    'mdi:outline': 'mdi:carrot-outline'
  },
  'lucide:case-lower': {
    'material-symbols': 'material-symbols:format-letter-case-lower',
    'material-symbols:sharp': 'material-symbols:format-letter-case-lower-sharp',
    'material-symbols:rounded': 'material-symbols:format-letter-case-lower',
    'mdi': 'mdi:format-letter-case-lower',
    'mdi:outline': 'mdi:format-letter-case-lower-outline'
  },
  'lucide:case-sensitive': {
    'material-symbols': 'material-symbols:match-case',
    'material-symbols:sharp': 'material-symbols:match-case-sharp',
    'material-symbols:rounded': 'material-symbols:match-case',
    'mdi': 'mdi:format-letter-case',
    'mdi:outline': 'mdi:format-letter-case'
  },
  'lucide:case-upper': {
    'material-symbols': 'material-symbols:format-letter-case-upper',
    'material-symbols:sharp': 'material-symbols:format-letter-case-upper-sharp',
    'material-symbols:rounded': 'material-symbols:format-letter-case-upper',
    'mdi': 'mdi:format-letter-case-upper',
    'mdi:outline': 'mdi:format-letter-case-upper-outline'
  },
  'lucide:cassette-tape': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cassette',
    'mdi:outline': 'mdi:cassette-outline'
  },
  'lucide:cast': {
    'material-symbols': 'material-symbols:cast',
    'material-symbols:sharp': 'material-symbols:cast-sharp',
    'material-symbols:rounded': 'material-symbols:cast',
    'mdi': 'mdi:cast',
    'mdi:outline': 'mdi:cast-outline'
  },
  'lucide:castle': {
    'material-symbols': 'material-symbols:castle',
    'material-symbols:sharp': 'material-symbols:castle-sharp',
    'material-symbols:rounded': 'material-symbols:castle',
    'mdi': 'mdi:castle',
    'mdi:outline': 'mdi:castle-outline'
  },
  'lucide:cat': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cat',
    'mdi:outline': 'mdi:cat-outline'
  },
  'lucide:cctv': {
    'material-symbols': 'material-symbols:videocam',
    'material-symbols:sharp': 'material-symbols:videocam-sharp',
    'material-symbols:rounded': 'material-symbols:videocam',
    'mdi': 'mdi:cctv',
    'mdi:outline': 'mdi:cctv-outline'
  },
  'lucide:chart-area': {
    'material-symbols': 'material-symbols:area-chart',
    'material-symbols:sharp': 'material-symbols:area-chart-sharp',
    'material-symbols:rounded': 'material-symbols:area-chart',
    'mdi': 'mdi:chart-areaspline',
    'mdi:outline': 'mdi:chart-areaspline'
  },
  'lucide:chart-bar': {
    'material-symbols': 'material-symbols:bar-chart',
    'material-symbols:sharp': 'material-symbols:bar-chart-sharp',
    'material-symbols:rounded': 'material-symbols:bar-chart',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-bar-big': {
    'material-symbols': 'material-symbols:bar-chart',
    'material-symbols:sharp': 'material-symbols:bar-chart-sharp',
    'material-symbols:rounded': 'material-symbols:bar-chart',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-bar-decreasing': {
    'material-symbols': 'material-symbols:trending-down',
    'material-symbols:sharp': 'material-symbols:trending-down-sharp',
    'material-symbols:rounded': 'material-symbols:trending-down',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-bar-increasing': {
    'material-symbols': 'material-symbols:trending-up',
    'material-symbols:sharp': 'material-symbols:trending-up-sharp',
    'material-symbols:rounded': 'material-symbols:trending-up',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-bar-stacked': {
    'material-symbols': 'material-symbols:stacked-bar-chart',
    'material-symbols:sharp': 'material-symbols:stacked-bar-chart-sharp',
    'material-symbols:rounded': 'material-symbols:stacked-bar-chart',
    'mdi': 'mdi:chart-bar-stacked',
    'mdi:outline': 'mdi:chart-bar-stacked-outline'
  },
  'lucide:chart-candlestick': {
    'material-symbols': 'material-symbols:candlestick-chart',
    'material-symbols:sharp': 'material-symbols:candlestick-chart-sharp',
    'material-symbols:rounded': 'material-symbols:candlestick-chart',
    'mdi': 'mdi:chart-candlestick',
    'mdi:outline': 'mdi:chart-candlestick-outline'
  },
  'lucide:chart-column': {
    'material-symbols': 'material-symbols:bar-chart',
    'material-symbols:sharp': 'material-symbols:bar-chart-sharp',
    'material-symbols:rounded': 'material-symbols:bar-chart',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-column-big': {
    'material-symbols': 'material-symbols:bar-chart',
    'material-symbols:sharp': 'material-symbols:bar-chart-sharp',
    'material-symbols:rounded': 'material-symbols:bar-chart',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-column-decreasing': {
    'material-symbols': 'material-symbols:trending-down',
    'material-symbols:sharp': 'material-symbols:trending-down-sharp',
    'material-symbols:rounded': 'material-symbols:trending-down',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-column-increasing': {
    'material-symbols': 'material-symbols:trending-up',
    'material-symbols:sharp': 'material-symbols:trending-up-sharp',
    'material-symbols:rounded': 'material-symbols:trending-up',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-column-stacked': {
    'material-symbols': 'material-symbols:stacked-bar-chart',
    'material-symbols:sharp': 'material-symbols:stacked-bar-chart-sharp',
    'material-symbols:rounded': 'material-symbols:stacked-bar-chart',
    'mdi': 'mdi:chart-bar-stacked',
    'mdi:outline': 'mdi:chart-bar-stacked-outline'
  },
  'lucide:chart-gantt': {
    'material-symbols': 'material-symbols:view-timeline',
    'material-symbols:sharp': 'material-symbols:view-timeline-sharp',
    'material-symbols:rounded': 'material-symbols:view-timeline',
    'mdi': 'mdi:chart-gantt',
    'mdi:outline': 'mdi:chart-gantt-outline'
  },
  'lucide:chart-line': {
    'material-symbols': 'material-symbols:show-chart',
    'material-symbols:sharp': 'material-symbols:show-chart-sharp',
    'material-symbols:rounded': 'material-symbols:show-chart',
    'mdi': 'mdi:chart-line',
    'mdi:outline': 'mdi:chart-line'
  },
  'lucide:chart-network': {
    'material-symbols': 'material-symbols:hub',
    'material-symbols:sharp': 'material-symbols:hub-sharp',
    'material-symbols:rounded': 'material-symbols:hub',
    'mdi': 'mdi:graph',
    'mdi:outline': 'mdi:graph-outline'
  },
  'lucide:chart-no-axes-column': {
    'material-symbols': 'material-symbols:bar-chart',
    'material-symbols:sharp': 'material-symbols:bar-chart-sharp',
    'material-symbols:rounded': 'material-symbols:bar-chart',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-no-axes-column-decreasing': {
    'material-symbols': 'material-symbols:trending-down',
    'material-symbols:sharp': 'material-symbols:trending-down-sharp',
    'material-symbols:rounded': 'material-symbols:trending-down',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-no-axes-column-increasing': {
    'material-symbols': 'material-symbols:trending-up',
    'material-symbols:sharp': 'material-symbols:trending-up-sharp',
    'material-symbols:rounded': 'material-symbols:trending-up',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:chart-no-axes-combined': {
    'material-symbols': 'material-symbols:analytics',
    'material-symbols:sharp': 'material-symbols:analytics-sharp',
    'material-symbols:rounded': 'material-symbols:analytics',
    'mdi': 'mdi:chart-multiline',
    'mdi:outline': 'mdi:chart-multiline-outline'
  },
  'lucide:chart-no-axes-gantt': {
    'material-symbols': 'material-symbols:view-timeline',
    'material-symbols:sharp': 'material-symbols:view-timeline-sharp',
    'material-symbols:rounded': 'material-symbols:view-timeline',
    'mdi': 'mdi:chart-gantt',
    'mdi:outline': 'mdi:chart-gantt-outline'
  },
  'lucide:chart-pie': {
    'material-symbols': 'material-symbols:pie-chart',
    'material-symbols:sharp': 'material-symbols:pie-chart-sharp',
    'material-symbols:rounded': 'material-symbols:pie-chart',
    'mdi': 'mdi:chart-pie',
    'mdi:outline': 'mdi:chart-pie-outline'
  },
  'lucide:chart-scatter': {
    'material-symbols': 'material-symbols:scatter-plot',
    'material-symbols:sharp': 'material-symbols:scatter-plot-sharp',
    'material-symbols:rounded': 'material-symbols:scatter-plot',
    'mdi': 'mdi:chart-scatter-plot',
    'mdi:outline': 'mdi:chart-scatter-plot-outline'
  },
  'lucide:chart-spline': {
    'material-symbols': 'material-symbols:show-chart',
    'material-symbols:sharp': 'material-symbols:show-chart-sharp',
    'material-symbols:rounded': 'material-symbols:show-chart',
    'mdi': 'mdi:chart-line-variant',
    'mdi:outline': 'mdi:chart-line-variant'
  },
  'lucide:check': {
    'material-symbols': 'material-symbols:check',
    'material-symbols:sharp': 'material-symbols:check',
    'material-symbols:rounded': 'material-symbols:check',
    'mdi': 'mdi:check',
    'mdi:outline': 'mdi:check'
  },
  'lucide:check-check': {
    'material-symbols': 'material-symbols:done-all',
    'material-symbols:sharp': 'material-symbols:done-all-sharp',
    'material-symbols:rounded': 'material-symbols:done-all',
    'mdi': 'mdi:check-all',
    'mdi:outline': 'mdi:check-all-outline'
  },
  'lucide:check-line': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:check',
    'mdi:outline': 'mdi:check-outline'
  },
  'lucide:chef-hat': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chef-hat',
    'mdi:outline': 'mdi:chef-hat-outline'
  },
  'lucide:cherry': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:food-variant',
    'mdi:outline': 'mdi:food-variant-outline'
  },
  'lucide:chess-bishop': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chess-bishop',
    'mdi:outline': 'mdi:chess-bishop-outline'
  },
  'lucide:chess-king': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chess-king',
    'mdi:outline': 'mdi:chess-king-outline'
  },
  'lucide:chess-knight': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chess-knight',
    'mdi:outline': 'mdi:chess-knight-outline'
  },
  'lucide:chess-pawn': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chess-pawn',
    'mdi:outline': 'mdi:chess-pawn-outline'
  },
  'lucide:chess-queen': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chess-queen',
    'mdi:outline': 'mdi:chess-queen-outline'
  },
  'lucide:chess-rook': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chess-rook',
    'mdi:outline': 'mdi:chess-rook-outline'
  },
  'lucide:chevron-down': {
    'material-symbols': 'material-symbols:expand-more',
    'material-symbols:sharp': 'material-symbols:expand-more-sharp',
    'material-symbols:rounded': 'material-symbols:expand-more',
    'mdi': 'mdi:chevron-down',
    'mdi:outline': 'mdi:chevron-down-outline'
  },
  'lucide:chevron-first': {
    'material-symbols': 'material-symbols:first-page',
    'material-symbols:sharp': 'material-symbols:first-page-sharp',
    'material-symbols:rounded': 'material-symbols:first-page',
    'mdi': 'mdi:page-first',
    'mdi:outline': 'mdi:page-first-outline'
  },
  'lucide:chevron-last': {
    'material-symbols': 'material-symbols:last-page',
    'material-symbols:sharp': 'material-symbols:last-page-sharp',
    'material-symbols:rounded': 'material-symbols:last-page',
    'mdi': 'mdi:page-last',
    'mdi:outline': 'mdi:page-last-outline'
  },
  'lucide:chevron-left': {
    'material-symbols': 'material-symbols:chevron-left',
    'material-symbols:sharp': 'material-symbols:chevron-left-sharp',
    'material-symbols:rounded': 'material-symbols:chevron-left',
    'mdi': 'mdi:chevron-left',
    'mdi:outline': 'mdi:chevron-left-outline'
  },
  'lucide:chevron-right': {
    'material-symbols': 'material-symbols:chevron-right',
    'material-symbols:sharp': 'material-symbols:chevron-right-sharp',
    'material-symbols:rounded': 'material-symbols:chevron-right',
    'mdi': 'mdi:chevron-right',
    'mdi:outline': 'mdi:chevron-right-outline'
  },
  'lucide:chevron-up': {
    'material-symbols': 'material-symbols:expand-less',
    'material-symbols:sharp': 'material-symbols:expand-less-sharp',
    'material-symbols:rounded': 'material-symbols:expand-less',
    'mdi': 'mdi:chevron-up',
    'mdi:outline': 'mdi:chevron-up-outline'
  },
  'lucide:chevrons-down': {
    'material-symbols': 'material-symbols:keyboard-double-arrow-down',
    'material-symbols:sharp': 'material-symbols:keyboard-double-arrow-down-sharp',
    'material-symbols:rounded': 'material-symbols:keyboard-double-arrow-down',
    'mdi': 'mdi:chevron-double-down',
    'mdi:outline': 'mdi:chevron-double-down-outline'
  },
  'lucide:chevrons-down-up': {
    'material-symbols': 'material-symbols:unfold-less',
    'material-symbols:sharp': 'material-symbols:unfold-less-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-less',
    'mdi': 'mdi:unfold-less-vertical',
    'mdi:outline': 'mdi:unfold-less-vertical-outline'
  },
  'lucide:chevrons-left': {
    'material-symbols': 'material-symbols:keyboard-double-arrow-left',
    'material-symbols:sharp': 'material-symbols:keyboard-double-arrow-left-sharp',
    'material-symbols:rounded': 'material-symbols:keyboard-double-arrow-left',
    'mdi': 'mdi:chevron-double-left',
    'mdi:outline': 'mdi:chevron-double-left-outline'
  },
  'lucide:chevrons-left-right': {
    'material-symbols': 'material-symbols:unfold-more-horizontal',
    'material-symbols:sharp': 'material-symbols:unfold-more-horizontal-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-more-horizontal',
    'mdi': 'mdi:unfold-less-horizontal',
    'mdi:outline': 'mdi:unfold-less-horizontal-outline'
  },
  'lucide:chevrons-left-right-ellipsis': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dots-horizontal',
    'mdi:outline': 'mdi:dots-horizontal-outline'
  },
  'lucide:chevrons-right': {
    'material-symbols': 'material-symbols:keyboard-double-arrow-right',
    'material-symbols:sharp': 'material-symbols:keyboard-double-arrow-right-sharp',
    'material-symbols:rounded': 'material-symbols:keyboard-double-arrow-right',
    'mdi': 'mdi:chevron-double-right',
    'mdi:outline': 'mdi:chevron-double-right-outline'
  },
  'lucide:chevrons-right-left': {
    'material-symbols': 'material-symbols:unfold-less-horizontal',
    'material-symbols:sharp': 'material-symbols:unfold-less-horizontal-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-less-horizontal',
    'mdi': 'mdi:unfold-less-horizontal',
    'mdi:outline': 'mdi:unfold-less-horizontal-outline'
  },
  'lucide:chevrons-up': {
    'material-symbols': 'material-symbols:keyboard-double-arrow-up',
    'material-symbols:sharp': 'material-symbols:keyboard-double-arrow-up-sharp',
    'material-symbols:rounded': 'material-symbols:keyboard-double-arrow-up',
    'mdi': 'mdi:chevron-double-up',
    'mdi:outline': 'mdi:chevron-double-up-outline'
  },
  'lucide:chevrons-up-down': {
    'material-symbols': 'material-symbols:unfold-more',
    'material-symbols:sharp': 'material-symbols:unfold-more-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-more',
    'mdi': 'mdi:unfold-more-vertical',
    'mdi:outline': 'mdi:unfold-more-vertical-outline'
  },
  'lucide:chromium': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:google-chrome',
    'mdi:outline': 'mdi:google-chrome-outline'
  },
  'lucide:church': {
    'material-symbols': 'material-symbols:church',
    'material-symbols:sharp': 'material-symbols:church-sharp',
    'material-symbols:rounded': 'material-symbols:church',
    'mdi': 'mdi:church',
    'mdi:outline': 'mdi:church-outline'
  },
  'lucide:cigarette': {
    'material-symbols': 'material-symbols:smoking-rooms',
    'material-symbols:sharp': 'material-symbols:smoking-rooms-sharp',
    'material-symbols:rounded': 'material-symbols:smoking-rooms',
    'mdi': 'mdi:cigarette',
    'mdi:outline': 'mdi:cigarette-outline'
  },
  'lucide:cigarette-off': {
    'material-symbols': 'material-symbols:smoke-free',
    'material-symbols:sharp': 'material-symbols:smoke-free-sharp',
    'material-symbols:rounded': 'material-symbols:smoke-free',
    'mdi': 'mdi:cigarette-off',
    'mdi:outline': 'mdi:cigarette-off-outline'
  },
  'lucide:circle': {
    'material-symbols': 'material-symbols:circle',
    'material-symbols:sharp': 'material-symbols:circle-sharp',
    'material-symbols:rounded': 'material-symbols:circle',
    'mdi': 'mdi:circle',
    'mdi:outline': 'mdi:circle-outline'
  },
  'lucide:circle-alert': {
    'material-symbols': 'material-symbols:error',
    'material-symbols:sharp': 'material-symbols:error-sharp',
    'material-symbols:rounded': 'material-symbols:error',
    'mdi': 'mdi:alert-circle',
    'mdi:outline': 'mdi:alert-circle-outline'
  },
  'lucide:circle-arrow-down': {
    'material-symbols': 'material-symbols:arrow-circle-down',
    'material-symbols:sharp': 'material-symbols:arrow-circle-down-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-circle-down',
    'mdi': 'mdi:arrow-down-circle',
    'mdi:outline': 'mdi:arrow-down-circle-outline'
  },
  'lucide:circle-arrow-left': {
    'material-symbols': 'material-symbols:arrow-circle-left',
    'material-symbols:sharp': 'material-symbols:arrow-circle-left-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-circle-left',
    'mdi': 'mdi:arrow-left-circle',
    'mdi:outline': 'mdi:arrow-left-circle-outline'
  },
  'lucide:circle-arrow-out-down-left': {
    'material-symbols': 'material-symbols:south-west',
    'material-symbols:sharp': 'material-symbols:south-west-sharp',
    'material-symbols:rounded': 'material-symbols:south-west',
    'mdi': 'mdi:arrow-bottom-left-thin-circle-outline',
    'mdi:outline': 'mdi:arrow-bottom-left-thin-circle-outline-outline'
  },
  'lucide:circle-arrow-out-down-right': {
    'material-symbols': 'material-symbols:south-east',
    'material-symbols:sharp': 'material-symbols:south-east-sharp',
    'material-symbols:rounded': 'material-symbols:south-east',
    'mdi': 'mdi:arrow-bottom-right-thin-circle-outline',
    'mdi:outline': 'mdi:arrow-bottom-right-thin-circle-outline-outline'
  },
  'lucide:circle-arrow-out-up-left': {
    'material-symbols': 'material-symbols:north-west',
    'material-symbols:sharp': 'material-symbols:north-west-sharp',
    'material-symbols:rounded': 'material-symbols:north-west',
    'mdi': 'mdi:arrow-top-left-thin-circle-outline',
    'mdi:outline': 'mdi:arrow-top-left-thin-circle-outline-outline'
  },
  'lucide:circle-arrow-out-up-right': {
    'material-symbols': 'material-symbols:north-east',
    'material-symbols:sharp': 'material-symbols:north-east-sharp',
    'material-symbols:rounded': 'material-symbols:north-east',
    'mdi': 'mdi:arrow-top-right-thin-circle-outline',
    'mdi:outline': 'mdi:arrow-top-right-thin-circle-outline-outline'
  },
  'lucide:circle-arrow-right': {
    'material-symbols': 'material-symbols:arrow-circle-right',
    'material-symbols:sharp': 'material-symbols:arrow-circle-right-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-circle-right',
    'mdi': 'mdi:arrow-right-circle',
    'mdi:outline': 'mdi:arrow-right-circle-outline'
  },
  'lucide:circle-arrow-up': {
    'material-symbols': 'material-symbols:arrow-circle-up',
    'material-symbols:sharp': 'material-symbols:arrow-circle-up-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-circle-up',
    'mdi': 'mdi:arrow-up-circle',
    'mdi:outline': 'mdi:arrow-up-circle-outline'
  },
  'lucide:circle-check': {
    'material-symbols': 'material-symbols:check-circle',
    'material-symbols:sharp': 'material-symbols:check-circle-sharp',
    'material-symbols:rounded': 'material-symbols:check-circle',
    'mdi': 'mdi:check-circle',
    'mdi:outline': 'mdi:check-circle-outline'
  },
  'lucide:circle-check-big': {
    'material-symbols': 'material-symbols:check-circle',
    'material-symbols:sharp': 'material-symbols:check-circle-sharp',
    'material-symbols:rounded': 'material-symbols:check-circle',
    'mdi': 'mdi:check-circle',
    'mdi:outline': 'mdi:check-circle-outline'
  },
  'lucide:circle-chevron-down': {
    'material-symbols': 'material-symbols:expand-circle-down',
    'material-symbols:sharp': 'material-symbols:expand-circle-down-sharp',
    'material-symbols:rounded': 'material-symbols:expand-circle-down',
    'mdi': 'mdi:chevron-down-circle',
    'mdi:outline': 'mdi:chevron-down-circle-outline'
  },
  'lucide:circle-chevron-left': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chevron-left-circle',
    'mdi:outline': 'mdi:chevron-left-circle-outline'
  },
  'lucide:circle-chevron-right': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chevron-right-circle',
    'mdi:outline': 'mdi:chevron-right-circle-outline'
  },
  'lucide:circle-chevron-up': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chevron-up-circle',
    'mdi:outline': 'mdi:chevron-up-circle-outline'
  },
  'lucide:circle-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:circle-outline',
    'mdi:outline': 'mdi:circle-outline-outline'
  },
  'lucide:circle-divide': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:slash-forward',
    'mdi:outline': 'mdi:slash-forward-outline'
  },
  'lucide:circle-dollar-sign': {
    'material-symbols': 'material-symbols:paid',
    'material-symbols:sharp': 'material-symbols:paid-sharp',
    'material-symbols:rounded': 'material-symbols:paid',
    'mdi': 'mdi:currency-usd-circle',
    'mdi:outline': 'mdi:currency-usd-circle-outline'
  },
  'lucide:circle-dot': {
    'material-symbols': 'material-symbols:fiber-manual-record',
    'material-symbols:sharp': 'material-symbols:fiber-manual-record-sharp',
    'material-symbols:rounded': 'material-symbols:fiber-manual-record',
    'mdi': 'mdi:circle-medium',
    'mdi:outline': 'mdi:circle-medium-outline'
  },
  'lucide:circle-dot-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:circle-outline',
    'mdi:outline': 'mdi:circle-outline-outline'
  },
  'lucide:circle-ellipsis': {
    'material-symbols': 'material-symbols:more-horiz',
    'material-symbols:sharp': 'material-symbols:more-horiz-sharp',
    'material-symbols:rounded': 'material-symbols:more-horiz',
    'mdi': 'mdi:dots-horizontal-circle',
    'mdi:outline': 'mdi:dots-horizontal-circle-outline'
  },
  'lucide:circle-equal': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:equal',
    'mdi:outline': 'mdi:equal-outline'
  },
  'lucide:circle-fading-arrow-up': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-up-circle',
    'mdi:outline': 'mdi:arrow-up-circle-outline'
  },
  'lucide:circle-fading-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:plus-circle',
    'mdi:outline': 'mdi:plus-circle-outline'
  },
  'lucide:circle-gauge': {
    'material-symbols': 'material-symbols:speed',
    'material-symbols:sharp': 'material-symbols:speed-sharp',
    'material-symbols:rounded': 'material-symbols:speed',
    'mdi': 'mdi:gauge',
    'mdi:outline': 'mdi:gauge-outline'
  },
  'lucide:circle-minus': {
    'material-symbols': 'material-symbols:remove-circle',
    'material-symbols:sharp': 'material-symbols:remove-circle-sharp',
    'material-symbols:rounded': 'material-symbols:remove-circle',
    'mdi': 'mdi:minus-circle',
    'mdi:outline': 'mdi:minus-circle-outline'
  },
  'lucide:circle-off': {
    'material-symbols': 'material-symbols:do-not-disturb-on',
    'material-symbols:sharp': 'material-symbols:do-not-disturb-on-sharp',
    'material-symbols:rounded': 'material-symbols:do-not-disturb-on',
    'mdi': 'mdi:circle-off-outline',
    'mdi:outline': 'mdi:circle-off-outline-outline'
  },
  'lucide:circle-parking': {
    'material-symbols': 'material-symbols:local-parking',
    'material-symbols:sharp': 'material-symbols:local-parking-sharp',
    'material-symbols:rounded': 'material-symbols:local-parking',
    'mdi': 'mdi:parking',
    'mdi:outline': 'mdi:parking-outline'
  },
  'lucide:circle-parking-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:parking',
    'mdi:outline': 'mdi:parking-outline'
  },
  'lucide:circle-pause': {
    'material-symbols': 'material-symbols:pause-circle',
    'material-symbols:sharp': 'material-symbols:pause-circle-sharp',
    'material-symbols:rounded': 'material-symbols:pause-circle',
    'mdi': 'mdi:pause-circle',
    'mdi:outline': 'mdi:pause-circle-outline'
  },
  'lucide:circle-percent': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:percent-circle',
    'mdi:outline': 'mdi:percent-circle-outline'
  },
  'lucide:circle-play': {
    'material-symbols': 'material-symbols:play-circle',
    'material-symbols:sharp': 'material-symbols:play-circle-sharp',
    'material-symbols:rounded': 'material-symbols:play-circle',
    'mdi': 'mdi:play-circle',
    'mdi:outline': 'mdi:play-circle-outline'
  },
  'lucide:circle-plus': {
    'material-symbols': 'material-symbols:add-circle',
    'material-symbols:sharp': 'material-symbols:add-circle-sharp',
    'material-symbols:rounded': 'material-symbols:add-circle',
    'mdi': 'mdi:plus-circle',
    'mdi:outline': 'mdi:plus-circle-outline'
  },
  'lucide:circle-pound-sterling': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:currency-gbp',
    'mdi:outline': 'mdi:currency-gbp-outline'
  },
  'lucide:circle-power': {
    'material-symbols': 'material-symbols:power-settings-new',
    'material-symbols:sharp': 'material-symbols:power-settings-new-sharp',
    'material-symbols:rounded': 'material-symbols:power-settings-new',
    'mdi': 'mdi:power',
    'mdi:outline': 'mdi:power-outline'
  },
  'lucide:circle-question-mark': {
    'material-symbols': 'material-symbols:help',
    'material-symbols:sharp': 'material-symbols:help-sharp',
    'material-symbols:rounded': 'material-symbols:help',
    'mdi': 'mdi:help-circle',
    'mdi:outline': 'mdi:help-circle-outline'
  },
  'lucide:circle-slash': {
    'material-symbols': 'material-symbols:block',
    'material-symbols:sharp': 'material-symbols:block-sharp',
    'material-symbols:rounded': 'material-symbols:block',
    'mdi': 'mdi:cancel',
    'mdi:outline': 'mdi:cancel-outline'
  },
  'lucide:circle-slash-2': {
    'material-symbols': 'material-symbols:not-interested',
    'material-symbols:sharp': 'material-symbols:not-interested-sharp',
    'material-symbols:rounded': 'material-symbols:not-interested',
    'mdi': 'mdi:block-helper',
    'mdi:outline': 'mdi:block-helper-outline'
  },
  'lucide:circle-small': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:circle-small',
    'mdi:outline': 'mdi:circle-small-outline'
  },
  'lucide:circle-star': {
    'material-symbols': 'material-symbols:star',
    'material-symbols:sharp': 'material-symbols:star-sharp',
    'material-symbols:rounded': 'material-symbols:star',
    'mdi': 'mdi:star-circle',
    'mdi:outline': 'mdi:star-circle-outline'
  },
  'lucide:circle-stop': {
    'material-symbols': 'material-symbols:stop-circle',
    'material-symbols:sharp': 'material-symbols:stop-circle-sharp',
    'material-symbols:rounded': 'material-symbols:stop-circle',
    'mdi': 'mdi:stop-circle',
    'mdi:outline': 'mdi:stop-circle-outline'
  },
  'lucide:circle-user': {
    'material-symbols': 'material-symbols:account-circle',
    'material-symbols:sharp': 'material-symbols:account-circle-sharp',
    'material-symbols:rounded': 'material-symbols:account-circle',
    'mdi': 'mdi:account-circle',
    'mdi:outline': 'mdi:account-circle-outline'
  },
  'lucide:circle-user-round': {
    'material-symbols': 'material-symbols:account-circle',
    'material-symbols:sharp': 'material-symbols:account-circle-sharp',
    'material-symbols:rounded': 'material-symbols:account-circle',
    'mdi': 'mdi:account-circle',
    'mdi:outline': 'mdi:account-circle-outline'
  },
  'lucide:circle-x': {
    'material-symbols': 'material-symbols:cancel',
    'material-symbols:sharp': 'material-symbols:cancel-sharp',
    'material-symbols:rounded': 'material-symbols:cancel',
    'mdi': 'mdi:close-circle',
    'mdi:outline': 'mdi:close-circle-outline'
  },
  'lucide:circuit-board': {
    'material-symbols': 'material-symbols:memory',
    'material-symbols:sharp': 'material-symbols:memory-sharp',
    'material-symbols:rounded': 'material-symbols:memory',
    'mdi': 'mdi:chip',
    'mdi:outline': 'mdi:chip-outline'
  },
  'lucide:citrus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:fruit-citrus',
    'mdi:outline': 'mdi:fruit-citrus-outline'
  },
  'lucide:clapperboard': {
    'material-symbols': 'material-symbols:movie',
    'material-symbols:sharp': 'material-symbols:movie-sharp',
    'material-symbols:rounded': 'material-symbols:movie',
    'mdi': 'mdi:movie-open',
    'mdi:outline': 'mdi:movie-open-outline'
  },
  'lucide:clipboard': {
    'material-symbols': 'material-symbols:content-paste',
    'material-symbols:sharp': 'material-symbols:content-paste-sharp',
    'material-symbols:rounded': 'material-symbols:content-paste',
    'mdi': 'mdi:clipboard',
    'mdi:outline': 'mdi:clipboard-outline'
  },
  'lucide:clipboard-check': {
    'material-symbols': 'material-symbols:task-alt',
    'material-symbols:sharp': 'material-symbols:task-alt-sharp',
    'material-symbols:rounded': 'material-symbols:task-alt',
    'mdi': 'mdi:clipboard-check',
    'mdi:outline': 'mdi:clipboard-check-outline'
  },
  'lucide:clipboard-clock': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clipboard-clock',
    'mdi:outline': 'mdi:clipboard-clock-outline'
  },
  'lucide:clipboard-copy': {
    'material-symbols': 'material-symbols:content-copy',
    'material-symbols:sharp': 'material-symbols:content-copy-sharp',
    'material-symbols:rounded': 'material-symbols:content-copy',
    'mdi': 'mdi:clipboard-multiple',
    'mdi:outline': 'mdi:clipboard-multiple-outline'
  },
  'lucide:clipboard-list': {
    'material-symbols': 'material-symbols:fact-check',
    'material-symbols:sharp': 'material-symbols:fact-check-sharp',
    'material-symbols:rounded': 'material-symbols:fact-check',
    'mdi': 'mdi:clipboard-list',
    'mdi:outline': 'mdi:clipboard-list-outline'
  },
  'lucide:clipboard-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clipboard-minus',
    'mdi:outline': 'mdi:clipboard-minus-outline'
  },
  'lucide:clipboard-paste': {
    'material-symbols': 'material-symbols:content-paste',
    'material-symbols:sharp': 'material-symbols:content-paste-sharp',
    'material-symbols:rounded': 'material-symbols:content-paste',
    'mdi': 'mdi:clipboard-arrow-down',
    'mdi:outline': 'mdi:clipboard-arrow-down-outline'
  },
  'lucide:clipboard-pen': {
    'material-symbols': 'material-symbols:edit-note',
    'material-symbols:sharp': 'material-symbols:edit-note-sharp',
    'material-symbols:rounded': 'material-symbols:edit-note',
    'mdi': 'mdi:clipboard-edit',
    'mdi:outline': 'mdi:clipboard-edit-outline'
  },
  'lucide:clipboard-pen-line': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clipboard-edit',
    'mdi:outline': 'mdi:clipboard-edit-outline'
  },
  'lucide:clipboard-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clipboard-plus',
    'mdi:outline': 'mdi:clipboard-plus-outline'
  },
  'lucide:clipboard-type': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clipboard-text',
    'mdi:outline': 'mdi:clipboard-text-outline'
  },
  'lucide:clipboard-x': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clipboard-remove',
    'mdi:outline': 'mdi:clipboard-remove-outline'
  },
  'lucide:clock': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock',
    'mdi:outline': 'mdi:clock-outline'
  },
  'lucide:clock-1': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-one',
    'mdi:outline': 'mdi:clock-time-one-outline'
  },
  'lucide:clock-10': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-ten',
    'mdi:outline': 'mdi:clock-time-ten-outline'
  },
  'lucide:clock-11': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-eleven',
    'mdi:outline': 'mdi:clock-time-eleven-outline'
  },
  'lucide:clock-12': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-twelve',
    'mdi:outline': 'mdi:clock-time-twelve-outline'
  },
  'lucide:clock-2': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-two',
    'mdi:outline': 'mdi:clock-time-two-outline'
  },
  'lucide:clock-3': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-three',
    'mdi:outline': 'mdi:clock-time-three-outline'
  },
  'lucide:clock-4': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-four',
    'mdi:outline': 'mdi:clock-time-four-outline'
  },
  'lucide:clock-5': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-five',
    'mdi:outline': 'mdi:clock-time-five-outline'
  },
  'lucide:clock-6': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-six',
    'mdi:outline': 'mdi:clock-time-six-outline'
  },
  'lucide:clock-7': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-seven',
    'mdi:outline': 'mdi:clock-time-seven-outline'
  },
  'lucide:clock-8': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-eight',
    'mdi:outline': 'mdi:clock-time-eight-outline'
  },
  'lucide:clock-9': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:clock-time-nine',
    'mdi:outline': 'mdi:clock-time-nine-outline'
  },
  'lucide:clock-alert': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clock-alert',
    'mdi:outline': 'mdi:clock-alert-outline'
  },
  'lucide:clock-arrow-down': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clock-end',
    'mdi:outline': 'mdi:clock-end-outline'
  },
  'lucide:clock-arrow-up': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clock-start',
    'mdi:outline': 'mdi:clock-start-outline'
  },
  'lucide:clock-check': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clock-check',
    'mdi:outline': 'mdi:clock-check-outline'
  },
  'lucide:clock-fading': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clock-outline',
    'mdi:outline': 'mdi:clock-outline-outline'
  },
  'lucide:clock-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clock-plus',
    'mdi:outline': 'mdi:clock-plus-outline'
  },
  'lucide:closed-caption': {
    'material-symbols': 'material-symbols:closed-caption',
    'material-symbols:sharp': 'material-symbols:closed-caption-sharp',
    'material-symbols:rounded': 'material-symbols:closed-caption',
    'mdi': 'mdi:closed-caption',
    'mdi:outline': 'mdi:closed-caption-outline'
  },
  'lucide:cloud': {
    'material-symbols': 'material-symbols:cloud',
    'material-symbols:sharp': 'material-symbols:cloud-sharp',
    'material-symbols:rounded': 'material-symbols:cloud',
    'mdi': 'mdi:cloud',
    'mdi:outline': 'mdi:cloud-outline'
  },
  'lucide:cloud-alert': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cloud-alert',
    'mdi:outline': 'mdi:cloud-alert-outline'
  },
  'lucide:cloud-check': {
    'material-symbols': 'material-symbols:cloud-done',
    'material-symbols:sharp': 'material-symbols:cloud-done-sharp',
    'material-symbols:rounded': 'material-symbols:cloud-done',
    'mdi': 'mdi:cloud-check',
    'mdi:outline': 'mdi:cloud-check-outline'
  },
  'lucide:cloud-cog': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cloud-cog',
    'mdi:outline': 'mdi:cloud-cog-outline'
  },
  'lucide:cloud-download': {
    'material-symbols': 'material-symbols:cloud-download',
    'material-symbols:sharp': 'material-symbols:cloud-download-sharp',
    'material-symbols:rounded': 'material-symbols:cloud-download',
    'mdi': 'mdi:cloud-download',
    'mdi:outline': 'mdi:cloud-download-outline'
  },
  'lucide:cloud-drizzle': {
    'material-symbols': 'material-symbols:water-drop',
    'material-symbols:sharp': 'material-symbols:water-drop-sharp',
    'material-symbols:rounded': 'material-symbols:water-drop',
    'mdi': 'mdi:weather-rainy',
    'mdi:outline': 'mdi:weather-rainy-outline'
  },
  'lucide:cloud-fog': {
    'material-symbols': 'material-symbols:foggy',
    'material-symbols:sharp': 'material-symbols:foggy-sharp',
    'material-symbols:rounded': 'material-symbols:foggy',
    'mdi': 'mdi:weather-fog',
    'mdi:outline': 'mdi:weather-fog-outline'
  },
  'lucide:cloud-hail': {
    'material-symbols': 'material-symbols:ac-unit',
    'material-symbols:sharp': 'material-symbols:ac-unit-sharp',
    'material-symbols:rounded': 'material-symbols:ac-unit',
    'mdi': 'mdi:weather-hail',
    'mdi:outline': 'mdi:weather-hail-outline'
  },
  'lucide:cloud-lightning': {
    'material-symbols': 'material-symbols:thunderstorm',
    'material-symbols:sharp': 'material-symbols:thunderstorm-sharp',
    'material-symbols:rounded': 'material-symbols:thunderstorm',
    'mdi': 'mdi:weather-lightning',
    'mdi:outline': 'mdi:weather-lightning-outline'
  },
  'lucide:cloud-moon': {
    'material-symbols': 'material-symbols:nights-stay',
    'material-symbols:sharp': 'material-symbols:nights-stay-sharp',
    'material-symbols:rounded': 'material-symbols:nights-stay',
    'mdi': 'mdi:weather-night-partly-cloudy',
    'mdi:outline': 'mdi:weather-night-partly-cloudy-outline'
  },
  'lucide:cloud-moon-rain': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:weather-night-rainy',
    'mdi:outline': 'mdi:weather-night-rainy-outline'
  },
  'lucide:cloud-off': {
    'material-symbols': 'material-symbols:cloud-off',
    'material-symbols:sharp': 'material-symbols:cloud-off-sharp',
    'material-symbols:rounded': 'material-symbols:cloud-off',
    'mdi': 'mdi:cloud-off',
    'mdi:outline': 'mdi:cloud-off-outline'
  },
  'lucide:cloud-rain': {
    'material-symbols': 'material-symbols:rainy',
    'material-symbols:sharp': 'material-symbols:rainy-sharp',
    'material-symbols:rounded': 'material-symbols:rainy',
    'mdi': 'mdi:weather-pouring',
    'mdi:outline': 'mdi:weather-pouring-outline'
  },
  'lucide:cloud-rain-wind': {
    'material-symbols': 'material-symbols:air',
    'material-symbols:sharp': 'material-symbols:air-sharp',
    'material-symbols:rounded': 'material-symbols:air',
    'mdi': 'mdi:weather-windy',
    'mdi:outline': 'mdi:weather-windy-outline'
  },
  'lucide:cloud-snow': {
    'material-symbols': 'material-symbols:ac-unit',
    'material-symbols:sharp': 'material-symbols:ac-unit-sharp',
    'material-symbols:rounded': 'material-symbols:ac-unit',
    'mdi': 'mdi:weather-snowy',
    'mdi:outline': 'mdi:weather-snowy-outline'
  },
  'lucide:cloud-sun': {
    'material-symbols': 'material-symbols:wb-cloudy',
    'material-symbols:sharp': 'material-symbols:wb-cloudy-sharp',
    'material-symbols:rounded': 'material-symbols:wb-cloudy',
    'mdi': 'mdi:weather-partly-cloudy',
    'mdi:outline': 'mdi:weather-partly-cloudy-outline'
  },
  'lucide:cloud-sun-rain': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:weather-partly-rainy',
    'mdi:outline': 'mdi:weather-partly-rainy-outline'
  },
  'lucide:cloud-upload': {
    'material-symbols': 'material-symbols:cloud-upload',
    'material-symbols:sharp': 'material-symbols:cloud-upload-sharp',
    'material-symbols:rounded': 'material-symbols:cloud-upload',
    'mdi': 'mdi:cloud-upload',
    'mdi:outline': 'mdi:cloud-upload-outline'
  },
  'lucide:cloudy': {
    'material-symbols': 'material-symbols:cloud',
    'material-symbols:sharp': 'material-symbols:cloud-sharp',
    'material-symbols:rounded': 'material-symbols:cloud',
    'mdi': 'mdi:weather-cloudy',
    'mdi:outline': 'mdi:weather-cloudy-outline'
  },
  'lucide:clover': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clover',
    'mdi:outline': 'mdi:clover-outline'
  },
  'lucide:club': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cards-club',
    'mdi:outline': 'mdi:cards-club-outline'
  },
  'lucide:code': {
    'material-symbols': 'material-symbols:code',
    'material-symbols:sharp': 'material-symbols:code-sharp',
    'material-symbols:rounded': 'material-symbols:code',
    'mdi': 'mdi:code-tags',
    'mdi:outline': 'mdi:code-tags-outline'
  },
  'lucide:code-xml': {
    'material-symbols': 'material-symbols:code',
    'material-symbols:sharp': 'material-symbols:code-sharp',
    'material-symbols:rounded': 'material-symbols:code',
    'mdi': 'mdi:xml',
    'mdi:outline': 'mdi:xml-outline'
  },
  'lucide:codepen': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:codepen',
    'mdi:outline': 'mdi:codepen-outline'
  },
  'lucide:codesandbox': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:alarm-off',
    'mdi:outline': 'mdi:alarm-off-outline'
  },
  'lucide:coffee': {
    'material-symbols': 'material-symbols:local-cafe',
    'material-symbols:sharp': 'material-symbols:local-cafe-sharp',
    'material-symbols:rounded': 'material-symbols:local-cafe',
    'mdi': 'mdi:coffee',
    'mdi:outline': 'mdi:coffee-outline'
  },
  'lucide:cog': {
    'material-symbols': 'material-symbols:settings',
    'material-symbols:sharp': 'material-symbols:settings-sharp',
    'material-symbols:rounded': 'material-symbols:settings',
    'mdi': 'mdi:cog',
    'mdi:outline': 'mdi:cog-outline'
  },
  'lucide:coins': {
    'material-symbols': 'material-symbols:payments',
    'material-symbols:sharp': 'material-symbols:payments-sharp',
    'material-symbols:rounded': 'material-symbols:payments',
    'mdi': 'mdi:coin',
    'mdi:outline': 'mdi:coin-outline'
  },
  'lucide:columns-2': {
    'material-symbols': 'material-symbols:view-column-2',
    'material-symbols:sharp': 'material-symbols:view-column-2-sharp',
    'material-symbols:rounded': 'material-symbols:view-column-2',
    'mdi': 'mdi:view-column',
    'mdi:outline': 'mdi:view-column-outline'
  },
  'lucide:columns-3': {
    'material-symbols': 'material-symbols:view-column',
    'material-symbols:sharp': 'material-symbols:view-column-sharp',
    'material-symbols:rounded': 'material-symbols:view-column',
    'mdi': 'mdi:view-column',
    'mdi:outline': 'mdi:view-column-outline'
  },
  'lucide:columns-3-cog': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:view-column',
    'mdi:outline': 'mdi:view-column-outline'
  },
  'lucide:columns-4': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:view-column',
    'mdi:outline': 'mdi:view-column-outline'
  },
  'lucide:combine': {
    'material-symbols': 'material-symbols:merge',
    'material-symbols:sharp': 'material-symbols:merge-sharp',
    'material-symbols:rounded': 'material-symbols:merge',
    'mdi': 'mdi:set-merge',
    'mdi:outline': 'mdi:set-merge-outline'
  },
  'lucide:command': {
    'material-symbols': 'material-symbols:keyboard-command-key',
    'material-symbols:sharp': 'material-symbols:keyboard-command-key-sharp',
    'material-symbols:rounded': 'material-symbols:keyboard-command-key',
    'mdi': 'mdi:apple-keyboard-command',
    'mdi:outline': 'mdi:apple-keyboard-command-outline'
  },
  'lucide:compass': {
    'material-symbols': 'material-symbols:explore',
    'material-symbols:sharp': 'material-symbols:explore-sharp',
    'material-symbols:rounded': 'material-symbols:explore',
    'mdi': 'mdi:compass',
    'mdi:outline': 'mdi:compass-outline'
  },
  'lucide:component': {
    'material-symbols': 'material-symbols:widgets',
    'material-symbols:sharp': 'material-symbols:widgets-sharp',
    'material-symbols:rounded': 'material-symbols:widgets',
    'mdi': 'mdi:view-module',
    'mdi:outline': 'mdi:view-module-outline'
  },
  'lucide:computer': {
    'material-symbols': 'material-symbols:computer',
    'material-symbols:sharp': 'material-symbols:computer-sharp',
    'material-symbols:rounded': 'material-symbols:computer',
    'mdi': 'mdi:desktop-classic',
    'mdi:outline': 'mdi:desktop-classic-outline'
  },
  'lucide:concierge-bell': {
    'material-symbols': 'material-symbols:notifications',
    'material-symbols:sharp': 'material-symbols:notifications-sharp',
    'material-symbols:rounded': 'material-symbols:notifications',
    'mdi': 'mdi:bell-ring',
    'mdi:outline': 'mdi:bell-ring-outline'
  },
  'lucide:cone': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cone',
    'mdi:outline': 'mdi:cone-outline'
  },
  'lucide:construction': {
    'material-symbols': 'material-symbols:construction',
    'material-symbols:sharp': 'material-symbols:construction-sharp',
    'material-symbols:rounded': 'material-symbols:construction',
    'mdi': 'mdi:hard-hat',
    'mdi:outline': 'mdi:hard-hat-outline'
  },
  'lucide:contact': {
    'material-symbols': 'material-symbols:contact-page',
    'material-symbols:sharp': 'material-symbols:contact-page-sharp',
    'material-symbols:rounded': 'material-symbols:contact-page',
    'mdi': 'mdi:contacts',
    'mdi:outline': 'mdi:contacts-outline'
  },
  'lucide:contact-round': {
    'material-symbols': 'material-symbols:account-circle',
    'material-symbols:sharp': 'material-symbols:account-circle-sharp',
    'material-symbols:rounded': 'material-symbols:account-circle',
    'mdi': 'mdi:account-circle',
    'mdi:outline': 'mdi:account-circle-outline'
  },
  'lucide:container': {
    'material-symbols': 'material-symbols:inventory-2',
    'material-symbols:sharp': 'material-symbols:inventory-2-sharp',
    'material-symbols:rounded': 'material-symbols:inventory-2',
    'mdi': 'mdi:docker',
    'mdi:outline': 'mdi:docker-outline'
  },
  'lucide:contrast': {
    'material-symbols': 'material-symbols:contrast',
    'material-symbols:sharp': 'material-symbols:contrast-sharp',
    'material-symbols:rounded': 'material-symbols:contrast',
    'mdi': 'mdi:contrast-circle',
    'mdi:outline': 'mdi:contrast-circle-outline'
  },
  'lucide:cookie': {
    'material-symbols': 'material-symbols:cookie',
    'material-symbols:sharp': 'material-symbols:cookie-sharp',
    'material-symbols:rounded': 'material-symbols:cookie',
    'mdi': 'mdi:cookie',
    'mdi:outline': 'mdi:cookie-outline'
  },
  'lucide:cooking-pot': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pot',
    'mdi:outline': 'mdi:pot-outline'
  },
  'lucide:copy': {
    'material-symbols': 'material-symbols:content-copy',
    'material-symbols:sharp': 'material-symbols:content-copy-sharp',
    'material-symbols:rounded': 'material-symbols:content-copy',
    'mdi': 'mdi:content-copy',
    'mdi:outline': 'mdi:content-copy-outline'
  },
  'lucide:copy-check': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clipboard-check',
    'mdi:outline': 'mdi:clipboard-check-outline'
  },
  'lucide:copy-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:content-duplicate',
    'mdi:outline': 'mdi:content-duplicate-outline'
  },
  'lucide:copy-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:content-duplicate',
    'mdi:outline': 'mdi:content-duplicate-outline'
  },
  'lucide:copy-slash': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:content-copy',
    'mdi:outline': 'mdi:content-copy-outline'
  },
  'lucide:copy-x': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:content-copy',
    'mdi:outline': 'mdi:content-copy-outline'
  },
  'lucide:copyleft': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:copyleft',
    'mdi:outline': 'mdi:copyleft-outline'
  },
  'lucide:copyright': {
    'material-symbols': 'material-symbols:copyright',
    'material-symbols:sharp': 'material-symbols:copyright-sharp',
    'material-symbols:rounded': 'material-symbols:copyright',
    'mdi': 'mdi:copyright',
    'mdi:outline': 'mdi:copyright-outline'
  },
  'lucide:corner-down-left': {
    'material-symbols': 'material-symbols:turn-left',
    'material-symbols:sharp': 'material-symbols:turn-left-sharp',
    'material-symbols:rounded': 'material-symbols:turn-left',
    'mdi': 'mdi:corner-down-left',
    'mdi:outline': 'mdi:corner-down-left-outline'
  },
  'lucide:corner-down-right': {
    'material-symbols': 'material-symbols:turn-right',
    'material-symbols:sharp': 'material-symbols:turn-right-sharp',
    'material-symbols:rounded': 'material-symbols:turn-right',
    'mdi': 'mdi:corner-down-right',
    'mdi:outline': 'mdi:corner-down-right-outline'
  },
  'lucide:corner-left-down': {
    'material-symbols': 'material-symbols:turn-slight-left',
    'material-symbols:sharp': 'material-symbols:turn-slight-left-sharp',
    'material-symbols:rounded': 'material-symbols:turn-slight-left',
    'mdi': 'mdi:corner-left-down',
    'mdi:outline': 'mdi:corner-left-down-outline'
  },
  'lucide:corner-left-up': {
    'material-symbols': 'material-symbols:turn-sharp-left',
    'material-symbols:sharp': 'material-symbols:turn-sharp-left-sharp',
    'material-symbols:rounded': 'material-symbols:turn-sharp-left',
    'mdi': 'mdi:corner-left-up',
    'mdi:outline': 'mdi:corner-left-up-outline'
  },
  'lucide:corner-right-down': {
    'material-symbols': 'material-symbols:turn-slight-right',
    'material-symbols:sharp': 'material-symbols:turn-slight-right-sharp',
    'material-symbols:rounded': 'material-symbols:turn-slight-right',
    'mdi': 'mdi:corner-right-down',
    'mdi:outline': 'mdi:corner-right-down-outline'
  },
  'lucide:corner-right-up': {
    'material-symbols': 'material-symbols:turn-sharp-right',
    'material-symbols:sharp': 'material-symbols:turn-sharp-right-sharp',
    'material-symbols:rounded': 'material-symbols:turn-sharp-right',
    'mdi': 'mdi:corner-right-up',
    'mdi:outline': 'mdi:corner-right-up-outline'
  },
  'lucide:corner-up-left': {
    'material-symbols': 'material-symbols:turn-left',
    'material-symbols:sharp': 'material-symbols:turn-left-sharp',
    'material-symbols:rounded': 'material-symbols:turn-left',
    'mdi': 'mdi:corner-up-left',
    'mdi:outline': 'mdi:corner-up-left-outline'
  },
  'lucide:corner-up-right': {
    'material-symbols': 'material-symbols:turn-right',
    'material-symbols:sharp': 'material-symbols:turn-right-sharp',
    'material-symbols:rounded': 'material-symbols:turn-right',
    'mdi': 'mdi:corner-up-right',
    'mdi:outline': 'mdi:corner-up-right-outline'
  },
  'lucide:cpu': {
    'material-symbols': 'material-symbols:memory',
    'material-symbols:sharp': 'material-symbols:memory-sharp',
    'material-symbols:rounded': 'material-symbols:memory',
    'mdi': 'mdi:cpu-64-bit',
    'mdi:outline': 'mdi:cpu-64-bit-outline'
  },
  'lucide:creative-commons': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:creative-commons',
    'mdi:outline': 'mdi:creative-commons-outline'
  },
  'lucide:credit-card': {
    'material-symbols': 'material-symbols:credit-card',
    'material-symbols:sharp': 'material-symbols:credit-card-sharp',
    'material-symbols:rounded': 'material-symbols:credit-card',
    'mdi': 'mdi:credit-card',
    'mdi:outline': 'mdi:credit-card-outline'
  },
  'lucide:croissant': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:food-croissant',
    'mdi:outline': 'mdi:food-croissant-outline'
  },
  'lucide:crop': {
    'material-symbols': 'material-symbols:crop',
    'material-symbols:sharp': 'material-symbols:crop-sharp',
    'material-symbols:rounded': 'material-symbols:crop',
    'mdi': 'mdi:crop',
    'mdi:outline': 'mdi:crop-outline'
  },
  'lucide:cross': {
    'material-symbols': 'material-symbols:close',
    'material-symbols:sharp': 'material-symbols:close-sharp',
    'material-symbols:rounded': 'material-symbols:close',
    'mdi': 'mdi:cross',
    'mdi:outline': 'mdi:cross-outline'
  },
  'lucide:crosshair': {
    'material-symbols': 'material-symbols:gps-fixed',
    'material-symbols:sharp': 'material-symbols:gps-fixed-sharp',
    'material-symbols:rounded': 'material-symbols:gps-fixed',
    'mdi': 'mdi:crosshairs',
    'mdi:outline': 'mdi:crosshairs-outline'
  },
  'lucide:crown': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:crown',
    'mdi:outline': 'mdi:crown-outline'
  },
  'lucide:cuboid': {
    'material-symbols': 'material-symbols:view-in-ar',
    'material-symbols:sharp': 'material-symbols:view-in-ar-sharp',
    'material-symbols:rounded': 'material-symbols:view-in-ar',
    'mdi': 'mdi:cube',
    'mdi:outline': 'mdi:cube-outline'
  },
  'lucide:cup-soda': {
    'material-symbols': 'material-symbols:local-bar',
    'material-symbols:sharp': 'material-symbols:local-bar-sharp',
    'material-symbols:rounded': 'material-symbols:local-bar',
    'mdi': 'mdi:cup',
    'mdi:outline': 'mdi:cup-outline'
  },
  'lucide:currency': {
    'material-symbols': 'material-symbols:attach-money',
    'material-symbols:sharp': 'material-symbols:attach-money-sharp',
    'material-symbols:rounded': 'material-symbols:attach-money',
    'mdi': 'mdi:currency-usd',
    'mdi:outline': 'mdi:currency-usd-outline'
  },
  'lucide:cylinder': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cylinder',
    'mdi:outline': 'mdi:cylinder-outline'
  },
  'lucide:dam': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dam',
    'mdi:outline': 'mdi:dam-outline'
  },
  'lucide:database': {
    'material-symbols': 'material-symbols:database',
    'material-symbols:sharp': 'material-symbols:database-sharp',
    'material-symbols:rounded': 'material-symbols:database',
    'mdi': 'mdi:database',
    'mdi:outline': 'mdi:database-outline'
  },
  'lucide:database-backup': {
    'material-symbols': 'material-symbols:backup',
    'material-symbols:sharp': 'material-symbols:backup-sharp',
    'material-symbols:rounded': 'material-symbols:backup',
    'mdi': 'mdi:database-import',
    'mdi:outline': 'mdi:database-import-outline'
  },
  'lucide:database-zap': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:database-refresh',
    'mdi:outline': 'mdi:database-refresh-outline'
  },
  'lucide:decimals-arrow-left': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:alarm-plus',
    'mdi:outline': 'mdi:alarm-plus'
  },
  'lucide:decimals-arrow-right': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:smoke-detector',
    'mdi:outline': 'mdi:smoke-detector-outline'
  },
  'lucide:delete': {
    'material-symbols': 'material-symbols:delete',
    'material-symbols:sharp': 'material-symbols:delete-sharp',
    'material-symbols:rounded': 'material-symbols:delete',
    'mdi': 'mdi:delete',
    'mdi:outline': 'mdi:delete-outline'
  },
  'lucide:dessert': {
    'material-symbols': 'material-symbols:cake',
    'material-symbols:sharp': 'material-symbols:cake-sharp',
    'material-symbols:rounded': 'material-symbols:cake',
    'mdi': 'mdi:food-variant',
    'mdi:outline': 'mdi:food-variant-outline'
  },
  'lucide:diameter': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:diameter',
    'mdi:outline': 'mdi:diameter-outline'
  },
  'lucide:diamond': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:diamond-stone',
    'mdi:outline': 'mdi:diamond-stone-outline'
  },
  'lucide:diamond-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:rhombus-split',
    'mdi:outline': 'mdi:rhombus-split-outline'
  },
  'lucide:diamond-percent': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:album',
    'mdi:outline': 'mdi:album'
  },
  'lucide:diamond-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:diamond-stone',
    'mdi:outline': 'mdi:diamond-stone-outline'
  },
  'lucide:dice-1': {
    'material-symbols': 'material-symbols:casino',
    'material-symbols:sharp': 'material-symbols:casino-sharp',
    'material-symbols:rounded': 'material-symbols:casino',
    'mdi': 'mdi:dice-1',
    'mdi:outline': 'mdi:dice-1-outline'
  },
  'lucide:dice-2': {
    'material-symbols': 'material-symbols:casino',
    'material-symbols:sharp': 'material-symbols:casino-sharp',
    'material-symbols:rounded': 'material-symbols:casino',
    'mdi': 'mdi:dice-2',
    'mdi:outline': 'mdi:dice-2-outline'
  },
  'lucide:dice-3': {
    'material-symbols': 'material-symbols:casino',
    'material-symbols:sharp': 'material-symbols:casino-sharp',
    'material-symbols:rounded': 'material-symbols:casino',
    'mdi': 'mdi:dice-3',
    'mdi:outline': 'mdi:dice-3-outline'
  },
  'lucide:dice-4': {
    'material-symbols': 'material-symbols:casino',
    'material-symbols:sharp': 'material-symbols:casino-sharp',
    'material-symbols:rounded': 'material-symbols:casino',
    'mdi': 'mdi:dice-4',
    'mdi:outline': 'mdi:dice-4-outline'
  },
  'lucide:dice-5': {
    'material-symbols': 'material-symbols:casino',
    'material-symbols:sharp': 'material-symbols:casino-sharp',
    'material-symbols:rounded': 'material-symbols:casino',
    'mdi': 'mdi:dice-5',
    'mdi:outline': 'mdi:dice-5-outline'
  },
  'lucide:dice-6': {
    'material-symbols': 'material-symbols:casino',
    'material-symbols:sharp': 'material-symbols:casino-sharp',
    'material-symbols:rounded': 'material-symbols:casino',
    'mdi': 'mdi:dice-6',
    'mdi:outline': 'mdi:dice-6-outline'
  },
  'lucide:dices': {
    'material-symbols': 'material-symbols:casino',
    'material-symbols:sharp': 'material-symbols:casino-sharp',
    'material-symbols:rounded': 'material-symbols:casino',
    'mdi': 'mdi:dice-multiple',
    'mdi:outline': 'mdi:dice-multiple-outline'
  },
  'lucide:diff': {
    'material-symbols': 'material-symbols:difference',
    'material-symbols:sharp': 'material-symbols:difference-sharp',
    'material-symbols:rounded': 'material-symbols:difference',
    'mdi': 'mdi:file-compare',
    'mdi:outline': 'mdi:file-compare-outline'
  },
  'lucide:disc': {
    'material-symbols': 'material-symbols:album',
    'material-symbols:sharp': 'material-symbols:album-sharp',
    'material-symbols:rounded': 'material-symbols:album',
    'mdi': 'mdi:disc',
    'mdi:outline': 'mdi:disc-outline'
  },
  'lucide:disc-2': {
    'material-symbols': 'material-symbols:album',
    'material-symbols:sharp': 'material-symbols:album-sharp',
    'material-symbols:rounded': 'material-symbols:album',
    'mdi': 'mdi:disc',
    'mdi:outline': 'mdi:disc-outline'
  },
  'lucide:disc-3': {
    'material-symbols': 'material-symbols:album',
    'material-symbols:sharp': 'material-symbols:album-sharp',
    'material-symbols:rounded': 'material-symbols:album',
    'mdi': 'mdi:disc',
    'mdi:outline': 'mdi:disc-outline'
  },
  'lucide:disc-album': {
    'material-symbols': 'material-symbols:album',
    'material-symbols:sharp': 'material-symbols:album-sharp',
    'material-symbols:rounded': 'material-symbols:album',
    'mdi': 'mdi:album',
    'mdi:outline': 'mdi:album-outline'
  },
  'lucide:divide': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:division',
    'mdi:outline': 'mdi:division-outline'
  },
  'lucide:dna': {
    'material-symbols': 'material-symbols:biotech',
    'material-symbols:sharp': 'material-symbols:biotech-sharp',
    'material-symbols:rounded': 'material-symbols:biotech',
    'mdi': 'mdi:dna',
    'mdi:outline': 'mdi:dna-outline'
  },
  'lucide:dna-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-align-center',
    'mdi:outline': 'mdi:format-align-center'
  },
  'lucide:dock': {
    'material-symbols': 'material-symbols:dock',
    'material-symbols:sharp': 'material-symbols:dock-sharp',
    'material-symbols:rounded': 'material-symbols:dock',
    'mdi': 'mdi:dock-window',
    'mdi:outline': 'mdi:dock-window-outline'
  },
  'lucide:dog': {
    'material-symbols': 'material-symbols:pets',
    'material-symbols:sharp': 'material-symbols:pets-sharp',
    'material-symbols:rounded': 'material-symbols:pets',
    'mdi': 'mdi:dog',
    'mdi:outline': 'mdi:dog-outline'
  },
  'lucide:dollar-sign': {
    'material-symbols': 'material-symbols:attach-money',
    'material-symbols:sharp': 'material-symbols:attach-money-sharp',
    'material-symbols:rounded': 'material-symbols:attach-money',
    'mdi': 'mdi:currency-usd',
    'mdi:outline': 'mdi:currency-usd-outline'
  },
  'lucide:donut': {
    'material-symbols': 'material-symbols:donut-small',
    'material-symbols:sharp': 'material-symbols:donut-small-sharp',
    'material-symbols:rounded': 'material-symbols:donut-small',
    'mdi': 'mdi:food-variant',
    'mdi:outline': 'mdi:food-variant-outline'
  },
  'lucide:door-closed': {
    'material-symbols': 'material-symbols:door-front',
    'material-symbols:sharp': 'material-symbols:door-front-sharp',
    'material-symbols:rounded': 'material-symbols:door-front',
    'mdi': 'mdi:door-closed',
    'mdi:outline': 'mdi:door-closed-outline'
  },
  'lucide:door-closed-locked': {
    'material-symbols': 'material-symbols:door-front',
    'material-symbols:sharp': 'material-symbols:door-front-sharp',
    'material-symbols:rounded': 'material-symbols:door-front',
    'mdi': 'mdi:door-closed-lock',
    'mdi:outline': 'mdi:door-closed-lock-outline'
  },
  'lucide:door-open': {
    'material-symbols': 'material-symbols:door-open',
    'material-symbols:sharp': 'material-symbols:door-open-sharp',
    'material-symbols:rounded': 'material-symbols:door-open',
    'mdi': 'mdi:door-open',
    'mdi:outline': 'mdi:door-open-outline'
  },
  'lucide:dot': {
    'material-symbols': 'material-symbols:fiber-manual-record',
    'material-symbols:sharp': 'material-symbols:fiber-manual-record-sharp',
    'material-symbols:rounded': 'material-symbols:fiber-manual-record',
    'mdi': 'mdi:circle-small',
    'mdi:outline': 'mdi:circle-small-outline'
  },
  'lucide:download': {
    'material-symbols': 'material-symbols:download',
    'material-symbols:sharp': 'material-symbols:download-sharp',
    'material-symbols:rounded': 'material-symbols:download',
    'mdi': 'mdi:download',
    'mdi:outline': 'mdi:download-outline'
  },
  'lucide:drafting-compass': {
    'material-symbols': 'material-symbols:architecture',
    'material-symbols:sharp': 'material-symbols:architecture-sharp',
    'material-symbols:rounded': 'material-symbols:architecture',
    'mdi': 'mdi:compass',
    'mdi:outline': 'mdi:compass-outline'
  },
  'lucide:drama': {
    'material-symbols': 'material-symbols:theater-comedy',
    'material-symbols:sharp': 'material-symbols:theater-comedy-sharp',
    'material-symbols:rounded': 'material-symbols:theater-comedy',
    'mdi': 'mdi:drama-masks',
    'mdi:outline': 'mdi:drama-masks-outline'
  },
  'lucide:dribbble': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dribbble',
    'mdi:outline': 'mdi:dribbble-outline'
  },
  'lucide:drill': {
    'material-symbols': 'material-symbols:handyman',
    'material-symbols:sharp': 'material-symbols:handyman-sharp',
    'material-symbols:rounded': 'material-symbols:handyman',
    'mdi': 'mdi:power-plug',
    'mdi:outline': 'mdi:power-plug-outline'
  },
  'lucide:drone': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:quadcopter',
    'mdi:outline': 'mdi:quadcopter-outline'
  },
  'lucide:droplet': {
    'material-symbols': 'material-symbols:water-drop',
    'material-symbols:sharp': 'material-symbols:water-drop-sharp',
    'material-symbols:rounded': 'material-symbols:water-drop',
    'mdi': 'mdi:water',
    'mdi:outline': 'mdi:water-outline'
  },
  'lucide:droplet-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:water-off',
    'mdi:outline': 'mdi:water-off-outline'
  },
  'lucide:droplets': {
    'material-symbols': 'material-symbols:water-drop',
    'material-symbols:sharp': 'material-symbols:water-drop-sharp',
    'material-symbols:rounded': 'material-symbols:water-drop',
    'mdi': 'mdi:water',
    'mdi:outline': 'mdi:water-outline'
  },
  'lucide:drum': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:drum',
    'mdi:outline': 'mdi:drum-outline'
  },
  'lucide:drumstick': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:food-drumstick',
    'mdi:outline': 'mdi:food-drumstick-outline'
  },
  'lucide:dumbbell': {
    'material-symbols': 'material-symbols:fitness-center',
    'material-symbols:sharp': 'material-symbols:fitness-center-sharp',
    'material-symbols:rounded': 'material-symbols:fitness-center',
    'mdi': 'mdi:dumbbell',
    'mdi:outline': 'mdi:dumbbell-outline'
  },
  'lucide:ear': {
    'material-symbols': 'material-symbols:hearing',
    'material-symbols:sharp': 'material-symbols:hearing-sharp',
    'material-symbols:rounded': 'material-symbols:hearing',
    'mdi': 'mdi:ear-hearing',
    'mdi:outline': 'mdi:ear-hearing-outline'
  },
  'lucide:ear-off': {
    'material-symbols': 'material-symbols:hearing-disabled',
    'material-symbols:sharp': 'material-symbols:hearing-disabled-sharp',
    'material-symbols:rounded': 'material-symbols:hearing-disabled',
    'mdi': 'mdi:ear-hearing-off',
    'mdi:outline': 'mdi:ear-hearing-off-outline'
  },
  'lucide:earth': {
    'material-symbols': 'material-symbols:public',
    'material-symbols:sharp': 'material-symbols:public-sharp',
    'material-symbols:rounded': 'material-symbols:public',
    'mdi': 'mdi:earth',
    'mdi:outline': 'mdi:earth-outline'
  },
  'lucide:earth-lock': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:earth-lock',
    'mdi:outline': 'mdi:earth-lock-outline'
  },
  'lucide:eclipse': {
    'material-symbols': 'material-symbols:brightness-2',
    'material-symbols:sharp': 'material-symbols:brightness-2-sharp',
    'material-symbols:rounded': 'material-symbols:brightness-2',
    'mdi': 'mdi:moon-waning-crescent',
    'mdi:outline': 'mdi:moon-waning-crescent-outline'
  },
  'lucide:egg': {
    'material-symbols': 'material-symbols:egg',
    'material-symbols:sharp': 'material-symbols:egg-sharp',
    'material-symbols:rounded': 'material-symbols:egg',
    'mdi': 'mdi:egg',
    'mdi:outline': 'mdi:egg-outline'
  },
  'lucide:egg-fried': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:egg-fried',
    'mdi:outline': 'mdi:egg-fried-outline'
  },
  'lucide:egg-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:egg-off',
    'mdi:outline': 'mdi:egg-off-outline'
  },
  'lucide:ellipsis': {
    'material-symbols': 'material-symbols:more-horiz',
    'material-symbols:sharp': 'material-symbols:more-horiz-sharp',
    'material-symbols:rounded': 'material-symbols:more-horiz',
    'mdi': 'mdi:dots-horizontal',
    'mdi:outline': 'mdi:dots-horizontal-outline'
  },
  'lucide:ellipsis-vertical': {
    'material-symbols': 'material-symbols:more-vert',
    'material-symbols:sharp': 'material-symbols:more-vert-sharp',
    'material-symbols:rounded': 'material-symbols:more-vert',
    'mdi': 'mdi:dots-vertical',
    'mdi:outline': 'mdi:dots-vertical-outline'
  },
  'lucide:equal': {
    'material-symbols': 'material-symbols:drag-handle',
    'material-symbols:sharp': 'material-symbols:drag-handle-sharp',
    'material-symbols:rounded': 'material-symbols:drag-handle',
    'mdi': 'mdi:equal',
    'mdi:outline': 'mdi:equal-outline'
  },
  'lucide:equal-approximately': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:approximately-equal',
    'mdi:outline': 'mdi:approximately-equal-outline'
  },
  'lucide:equal-not': {
    'material-symbols': 'material-symbols:not-equal',
    'material-symbols:sharp': 'material-symbols:not-equal-sharp',
    'material-symbols:rounded': 'material-symbols:not-equal',
    'mdi': 'mdi:not-equal-variant',
    'mdi:outline': 'mdi:not-equal-variant-outline'
  },
  'lucide:eraser': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:eraser',
    'mdi:outline': 'mdi:eraser-outline'
  },
  'lucide:ethernet-port': {
    'material-symbols': 'material-symbols:settings-ethernet',
    'material-symbols:sharp': 'material-symbols:settings-ethernet-sharp',
    'material-symbols:rounded': 'material-symbols:settings-ethernet',
    'mdi': 'mdi:ethernet',
    'mdi:outline': 'mdi:ethernet-outline'
  },
  'lucide:euro': {
    'material-symbols': 'material-symbols:euro',
    'material-symbols:sharp': 'material-symbols:euro-sharp',
    'material-symbols:rounded': 'material-symbols:euro',
    'mdi': 'mdi:currency-eur',
    'mdi:outline': 'mdi:currency-eur-outline'
  },
  'lucide:ev-charger': {
    'material-symbols': 'material-symbols:ev-station',
    'material-symbols:sharp': 'material-symbols:ev-station-sharp',
    'material-symbols:rounded': 'material-symbols:ev-station',
    'mdi': 'mdi:ev-station',
    'mdi:outline': 'mdi:ev-station-outline'
  },
  'lucide:expand': {
    'material-symbols': 'material-symbols:open-in-full',
    'material-symbols:sharp': 'material-symbols:open-in-full-sharp',
    'material-symbols:rounded': 'material-symbols:open-in-full',
    'mdi': 'mdi:arrow-expand-all',
    'mdi:outline': 'mdi:arrow-expand-all-outline'
  },
  'lucide:external-link': {
    'material-symbols': 'material-symbols:open-in-new',
    'material-symbols:sharp': 'material-symbols:open-in-new-sharp',
    'material-symbols:rounded': 'material-symbols:open-in-new',
    'mdi': 'mdi:open-in-new',
    'mdi:outline': 'mdi:open-in-new-outline'
  },
  'lucide:eye': {
    'material-symbols': 'material-symbols:visibility',
    'material-symbols:sharp': 'material-symbols:visibility-sharp',
    'material-symbols:rounded': 'material-symbols:visibility',
    'mdi': 'mdi:eye',
    'mdi:outline': 'mdi:eye-outline'
  },
  'lucide:eye-closed': {
    'material-symbols': 'material-symbols:visibility-off',
    'material-symbols:sharp': 'material-symbols:visibility-off-sharp',
    'material-symbols:rounded': 'material-symbols:visibility-off',
    'mdi': 'mdi:eye-closed',
    'mdi:outline': 'mdi:eye-closed-outline'
  },
  'lucide:eye-off': {
    'material-symbols': 'material-symbols:visibility-off',
    'material-symbols:sharp': 'material-symbols:visibility-off-sharp',
    'material-symbols:rounded': 'material-symbols:visibility-off',
    'mdi': 'mdi:eye-off',
    'mdi:outline': 'mdi:eye-off-outline'
  },
  'lucide:facebook': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:facebook',
    'mdi:outline': 'mdi:facebook-outline'
  },
  'lucide:factory': {
    'material-symbols': 'material-symbols:factory',
    'material-symbols:sharp': 'material-symbols:factory-sharp',
    'material-symbols:rounded': 'material-symbols:factory',
    'mdi': 'mdi:factory',
    'mdi:outline': 'mdi:factory-outline'
  },
  'lucide:fan': {
    'material-symbols': 'material-symbols:mode-fan',
    'material-symbols:sharp': 'material-symbols:mode-fan-sharp',
    'material-symbols:rounded': 'material-symbols:mode-fan',
    'mdi': 'mdi:fan',
    'mdi:outline': 'mdi:fan-outline'
  },
  'lucide:fast-forward': {
    'material-symbols': 'material-symbols:fast-forward',
    'material-symbols:sharp': 'material-symbols:fast-forward-sharp',
    'material-symbols:rounded': 'material-symbols:fast-forward',
    'mdi': 'mdi:fast-forward',
    'mdi:outline': 'mdi:fast-forward-outline'
  },
  'lucide:feather': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:feather',
    'mdi:outline': 'mdi:feather-outline'
  },
  'lucide:fence': {
    'material-symbols': 'material-symbols:fence',
    'material-symbols:sharp': 'material-symbols:fence-sharp',
    'material-symbols:rounded': 'material-symbols:fence',
    'mdi': 'mdi:fence',
    'mdi:outline': 'mdi:fence-outline'
  },
  'lucide:ferris-wheel': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:ferris-wheel',
    'mdi:outline': 'mdi:ferris-wheel-outline'
  },
  'lucide:figma': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:figma',
    'mdi:outline': 'mdi:figma-outline'
  },
  'lucide:file': {
    'material-symbols': 'material-symbols:description',
    'material-symbols:sharp': 'material-symbols:description-sharp',
    'material-symbols:rounded': 'material-symbols:description',
    'mdi': 'mdi:file',
    'mdi:outline': 'mdi:file-outline'
  },
  'lucide:file-archive': {
    'material-symbols': 'material-symbols:folder-zip',
    'material-symbols:sharp': 'material-symbols:folder-zip-sharp',
    'material-symbols:rounded': 'material-symbols:folder-zip',
    'mdi': 'mdi:file-archive',
    'mdi:outline': 'mdi:file-archive-outline'
  },
  'lucide:file-axis-3d': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cube-scan',
    'mdi:outline': 'mdi:cube-scan-outline'
  },
  'lucide:file-badge': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-certificate',
    'mdi:outline': 'mdi:file-certificate-outline'
  },
  'lucide:file-box': {
    'material-symbols': 'material-symbols:inventory-2',
    'material-symbols:sharp': 'material-symbols:inventory-2-sharp',
    'material-symbols:rounded': 'material-symbols:inventory-2',
    'mdi': 'mdi:package-variant',
    'mdi:outline': 'mdi:package-variant-outline'
  },
  'lucide:file-braces': {
    'material-symbols': 'material-symbols:data-object',
    'material-symbols:sharp': 'material-symbols:data-object-sharp',
    'material-symbols:rounded': 'material-symbols:data-object',
    'mdi': 'mdi:code-json',
    'mdi:outline': 'mdi:code-json-outline'
  },
  'lucide:file-braces-corner': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:code-json',
    'mdi:outline': 'mdi:code-json-outline'
  },
  'lucide:file-chart-column': {
    'material-symbols': 'material-symbols:bar-chart',
    'material-symbols:sharp': 'material-symbols:bar-chart-sharp',
    'material-symbols:rounded': 'material-symbols:bar-chart',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:file-chart-column-increasing': {
    'material-symbols': 'material-symbols:trending-up',
    'material-symbols:sharp': 'material-symbols:trending-up-sharp',
    'material-symbols:rounded': 'material-symbols:trending-up',
    'mdi': 'mdi:chart-bar',
    'mdi:outline': 'mdi:chart-bar-outline'
  },
  'lucide:file-chart-line': {
    'material-symbols': 'material-symbols:show-chart',
    'material-symbols:sharp': 'material-symbols:show-chart-sharp',
    'material-symbols:rounded': 'material-symbols:show-chart',
    'mdi': 'mdi:chart-line',
    'mdi:outline': 'mdi:chart-line'
  },
  'lucide:file-chart-pie': {
    'material-symbols': 'material-symbols:pie-chart',
    'material-symbols:sharp': 'material-symbols:pie-chart-sharp',
    'material-symbols:rounded': 'material-symbols:pie-chart',
    'mdi': 'mdi:chart-pie',
    'mdi:outline': 'mdi:chart-pie-outline'
  },
  'lucide:file-check': {
    'material-symbols': 'material-symbols:task-alt',
    'material-symbols:sharp': 'material-symbols:task-alt-sharp',
    'material-symbols:rounded': 'material-symbols:task-alt',
    'mdi': 'mdi:file-check',
    'mdi:outline': 'mdi:file-check-outline'
  },
  'lucide:file-check-corner': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-check',
    'mdi:outline': 'mdi:file-check-outline'
  },
  'lucide:file-clock': {
    'material-symbols': 'material-symbols:schedule',
    'material-symbols:sharp': 'material-symbols:schedule-sharp',
    'material-symbols:rounded': 'material-symbols:schedule',
    'mdi': 'mdi:file-clock',
    'mdi:outline': 'mdi:file-clock-outline'
  },
  'lucide:file-code': {
    'material-symbols': 'material-symbols:code',
    'material-symbols:sharp': 'material-symbols:code-sharp',
    'material-symbols:rounded': 'material-symbols:code',
    'mdi': 'mdi:file-code',
    'mdi:outline': 'mdi:file-code-outline'
  },
  'lucide:file-code-corner': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-code',
    'mdi:outline': 'mdi:file-code-outline'
  },
  'lucide:file-cog': {
    'material-symbols': 'material-symbols:settings',
    'material-symbols:sharp': 'material-symbols:settings-sharp',
    'material-symbols:rounded': 'material-symbols:settings',
    'mdi': 'mdi:file-cog',
    'mdi:outline': 'mdi:file-cog-outline'
  },
  'lucide:file-diff': {
    'material-symbols': 'material-symbols:difference',
    'material-symbols:sharp': 'material-symbols:difference-sharp',
    'material-symbols:rounded': 'material-symbols:difference',
    'mdi': 'mdi:file-compare',
    'mdi:outline': 'mdi:file-compare-outline'
  },
  'lucide:file-digit': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-document',
    'mdi:outline': 'mdi:file-document-outline'
  },
  'lucide:file-down': {
    'material-symbols': 'material-symbols:download',
    'material-symbols:sharp': 'material-symbols:download-sharp',
    'material-symbols:rounded': 'material-symbols:download',
    'mdi': 'mdi:file-download',
    'mdi:outline': 'mdi:file-download-outline'
  },
  'lucide:file-exclamation-point': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-alert',
    'mdi:outline': 'mdi:file-alert-outline'
  },
  'lucide:file-headphone': {
    'material-symbols': 'material-symbols:headphones',
    'material-symbols:sharp': 'material-symbols:headphones-sharp',
    'material-symbols:rounded': 'material-symbols:headphones',
    'mdi': 'mdi:file-music',
    'mdi:outline': 'mdi:file-music-outline'
  },
  'lucide:file-heart': {
    'material-symbols': 'material-symbols:favorite',
    'material-symbols:sharp': 'material-symbols:favorite-sharp',
    'material-symbols:rounded': 'material-symbols:favorite',
    'mdi': 'mdi:file-heart',
    'mdi:outline': 'mdi:file-heart-outline'
  },
  'lucide:file-image': {
    'material-symbols': 'material-symbols:image',
    'material-symbols:sharp': 'material-symbols:image-sharp',
    'material-symbols:rounded': 'material-symbols:image',
    'mdi': 'mdi:file-image',
    'mdi:outline': 'mdi:file-image-outline'
  },
  'lucide:file-input': {
    'material-symbols': 'material-symbols:input',
    'material-symbols:sharp': 'material-symbols:input-sharp',
    'material-symbols:rounded': 'material-symbols:input',
    'mdi': 'mdi:file-import',
    'mdi:outline': 'mdi:file-import-outline'
  },
  'lucide:file-key': {
    'material-symbols': 'material-symbols:vpn-key',
    'material-symbols:sharp': 'material-symbols:vpn-key-sharp',
    'material-symbols:rounded': 'material-symbols:vpn-key',
    'mdi': 'mdi:file-key',
    'mdi:outline': 'mdi:file-key-outline'
  },
  'lucide:file-lock': {
    'material-symbols': 'material-symbols:lock',
    'material-symbols:sharp': 'material-symbols:lock-sharp',
    'material-symbols:rounded': 'material-symbols:lock',
    'mdi': 'mdi:file-lock',
    'mdi:outline': 'mdi:file-lock-outline'
  },
  'lucide:file-minus': {
    'material-symbols': 'material-symbols:remove',
    'material-symbols:sharp': 'material-symbols:remove-sharp',
    'material-symbols:rounded': 'material-symbols:remove',
    'mdi': 'mdi:file-minus',
    'mdi:outline': 'mdi:file-minus-outline'
  },
  'lucide:file-minus-corner': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-minus',
    'mdi:outline': 'mdi:file-minus-outline'
  },
  'lucide:file-music': {
    'material-symbols': 'material-symbols:music-note',
    'material-symbols:sharp': 'material-symbols:music-note-sharp',
    'material-symbols:rounded': 'material-symbols:music-note',
    'mdi': 'mdi:file-music',
    'mdi:outline': 'mdi:file-music-outline'
  },
  'lucide:file-output': {
    'material-symbols': 'material-symbols:output',
    'material-symbols:sharp': 'material-symbols:output-sharp',
    'material-symbols:rounded': 'material-symbols:output',
    'mdi': 'mdi:file-export',
    'mdi:outline': 'mdi:file-export-outline'
  },
  'lucide:file-pen': {
    'material-symbols': 'material-symbols:edit',
    'material-symbols:sharp': 'material-symbols:edit-sharp',
    'material-symbols:rounded': 'material-symbols:edit',
    'mdi': 'mdi:file-edit',
    'mdi:outline': 'mdi:file-edit-outline'
  },
  'lucide:file-pen-line': {
    'material-symbols': 'material-symbols:edit-note',
    'material-symbols:sharp': 'material-symbols:edit-note-sharp',
    'material-symbols:rounded': 'material-symbols:edit-note',
    'mdi': 'mdi:file-edit',
    'mdi:outline': 'mdi:file-edit-outline'
  },
  'lucide:file-play': {
    'material-symbols': 'material-symbols:play-arrow',
    'material-symbols:sharp': 'material-symbols:play-arrow-sharp',
    'material-symbols:rounded': 'material-symbols:play-arrow',
    'mdi': 'mdi:file-video',
    'mdi:outline': 'mdi:file-video-outline'
  },
  'lucide:file-plus': {
    'material-symbols': 'material-symbols:add',
    'material-symbols:sharp': 'material-symbols:add-sharp',
    'material-symbols:rounded': 'material-symbols:add',
    'mdi': 'mdi:file-plus',
    'mdi:outline': 'mdi:file-plus-outline'
  },
  'lucide:file-plus-corner': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-plus',
    'mdi:outline': 'mdi:file-plus-outline'
  },
  'lucide:file-question-mark': {
    'material-symbols': 'material-symbols:help',
    'material-symbols:sharp': 'material-symbols:help-sharp',
    'material-symbols:rounded': 'material-symbols:help',
    'mdi': 'mdi:file-question',
    'mdi:outline': 'mdi:file-question-outline'
  },
  'lucide:file-scan': {
    'material-symbols': 'material-symbols:document-scanner',
    'material-symbols:sharp': 'material-symbols:document-scanner-sharp',
    'material-symbols:rounded': 'material-symbols:document-scanner',
    'mdi': 'mdi:file-find',
    'mdi:outline': 'mdi:file-find-outline'
  },
  'lucide:file-search': {
    'material-symbols': 'material-symbols:search',
    'material-symbols:sharp': 'material-symbols:search-sharp',
    'material-symbols:rounded': 'material-symbols:search',
    'mdi': 'mdi:file-search',
    'mdi:outline': 'mdi:file-search-outline'
  },
  'lucide:file-search-corner': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-search',
    'mdi:outline': 'mdi:file-search-outline'
  },
  'lucide:file-signal': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-chart',
    'mdi:outline': 'mdi:file-chart-outline'
  },
  'lucide:file-sliders': {
    'material-symbols': 'material-symbols:tune',
    'material-symbols:sharp': 'material-symbols:tune-sharp',
    'material-symbols:rounded': 'material-symbols:tune',
    'mdi': 'mdi:file-cog',
    'mdi:outline': 'mdi:file-cog-outline'
  },
  'lucide:file-spreadsheet': {
    'material-symbols': 'material-symbols:table-chart',
    'material-symbols:sharp': 'material-symbols:table-chart-sharp',
    'material-symbols:rounded': 'material-symbols:table-chart',
    'mdi': 'mdi:file-table',
    'mdi:outline': 'mdi:file-table-outline'
  },
  'lucide:file-stack': {
    'material-symbols': 'material-symbols:file-copy',
    'material-symbols:sharp': 'material-symbols:file-copy-sharp',
    'material-symbols:rounded': 'material-symbols:file-copy',
    'mdi': 'mdi:file-multiple',
    'mdi:outline': 'mdi:file-multiple-outline'
  },
  'lucide:file-symlink': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-link',
    'mdi:outline': 'mdi:file-link-outline'
  },
  'lucide:file-terminal': {
    'material-symbols': 'material-symbols:terminal',
    'material-symbols:sharp': 'material-symbols:terminal-sharp',
    'material-symbols:rounded': 'material-symbols:terminal',
    'mdi': 'mdi:console',
    'mdi:outline': 'mdi:console-outline'
  },
  'lucide:file-text': {
    'material-symbols': 'material-symbols:description',
    'material-symbols:sharp': 'material-symbols:description-sharp',
    'material-symbols:rounded': 'material-symbols:description',
    'mdi': 'mdi:file-document',
    'mdi:outline': 'mdi:file-document-outline'
  },
  'lucide:file-type': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-document',
    'mdi:outline': 'mdi:file-document-outline'
  },
  'lucide:file-type-corner': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-document',
    'mdi:outline': 'mdi:file-document-outline'
  },
  'lucide:file-up': {
    'material-symbols': 'material-symbols:upload',
    'material-symbols:sharp': 'material-symbols:upload-sharp',
    'material-symbols:rounded': 'material-symbols:upload',
    'mdi': 'mdi:file-upload',
    'mdi:outline': 'mdi:file-upload-outline'
  },
  'lucide:file-user': {
    'material-symbols': 'material-symbols:person',
    'material-symbols:sharp': 'material-symbols:person-sharp',
    'material-symbols:rounded': 'material-symbols:person',
    'mdi': 'mdi:account-box',
    'mdi:outline': 'mdi:account-box-outline'
  },
  'lucide:file-video-camera': {
    'material-symbols': 'material-symbols:videocam',
    'material-symbols:sharp': 'material-symbols:videocam-sharp',
    'material-symbols:rounded': 'material-symbols:videocam',
    'mdi': 'mdi:file-video',
    'mdi:outline': 'mdi:file-video-outline'
  },
  'lucide:file-volume': {
    'material-symbols': 'material-symbols:volume-up',
    'material-symbols:sharp': 'material-symbols:volume-up-sharp',
    'material-symbols:rounded': 'material-symbols:volume-up',
    'mdi': 'mdi:volume-high',
    'mdi:outline': 'mdi:volume-high-outline'
  },
  'lucide:file-x': {
    'material-symbols': 'material-symbols:close',
    'material-symbols:sharp': 'material-symbols:close-sharp',
    'material-symbols:rounded': 'material-symbols:close',
    'mdi': 'mdi:file-remove',
    'mdi:outline': 'mdi:file-remove-outline'
  },
  'lucide:file-x-corner': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-remove',
    'mdi:outline': 'mdi:file-remove-outline'
  },
  'lucide:files': {
    'material-symbols': 'material-symbols:file-copy',
    'material-symbols:sharp': 'material-symbols:file-copy-sharp',
    'material-symbols:rounded': 'material-symbols:file-copy',
    'mdi': 'mdi:file-multiple',
    'mdi:outline': 'mdi:file-multiple-outline'
  },
  'lucide:film': {
    'material-symbols': 'material-symbols:movie',
    'material-symbols:sharp': 'material-symbols:movie-sharp',
    'material-symbols:rounded': 'material-symbols:movie',
    'mdi': 'mdi:film',
    'mdi:outline': 'mdi:film-outline'
  },
  'lucide:fingerprint-pattern': {
    'material-symbols': 'material-symbols:fingerprint',
    'material-symbols:sharp': 'material-symbols:fingerprint-sharp',
    'material-symbols:rounded': 'material-symbols:fingerprint',
    'mdi': 'mdi:fingerprint',
    'mdi:outline': 'mdi:fingerprint-outline'
  },
  'lucide:fire-extinguisher': {
    'material-symbols': 'material-symbols:fire-extinguisher',
    'material-symbols:sharp': 'material-symbols:fire-extinguisher-sharp',
    'material-symbols:rounded': 'material-symbols:fire-extinguisher',
    'mdi': 'mdi:fire-extinguisher',
    'mdi:outline': 'mdi:fire-extinguisher-outline'
  },
  'lucide:fish': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:fish',
    'mdi:outline': 'mdi:fish-outline'
  },
  'lucide:fish-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:fish-off',
    'mdi:outline': 'mdi:fish-off-outline'
  },
  'lucide:fish-symbol': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:fish',
    'mdi:outline': 'mdi:fish-outline'
  },
  'lucide:flag': {
    'material-symbols': 'material-symbols:flag',
    'material-symbols:sharp': 'material-symbols:flag-sharp',
    'material-symbols:rounded': 'material-symbols:flag',
    'mdi': 'mdi:flag',
    'mdi:outline': 'mdi:flag-outline'
  },
  'lucide:flag-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:flag-off',
    'mdi:outline': 'mdi:flag-off-outline'
  },
  'lucide:flag-triangle-left': {
    'material-symbols': 'material-symbols:tour',
    'material-symbols:sharp': 'material-symbols:tour-sharp',
    'material-symbols:rounded': 'material-symbols:tour',
    'mdi': 'mdi:flag-triangle',
    'mdi:outline': 'mdi:flag-triangle-outline'
  },
  'lucide:flag-triangle-right': {
    'material-symbols': 'material-symbols:tour',
    'material-symbols:sharp': 'material-symbols:tour-sharp',
    'material-symbols:rounded': 'material-symbols:tour',
    'mdi': 'mdi:flag-triangle',
    'mdi:outline': 'mdi:flag-triangle-outline'
  },
  'lucide:flame': {
    'material-symbols': 'material-symbols:local-fire-department',
    'material-symbols:sharp': 'material-symbols:local-fire-department-sharp',
    'material-symbols:rounded': 'material-symbols:local-fire-department',
    'mdi': 'mdi:fire',
    'mdi:outline': 'mdi:fire-outline'
  },
  'lucide:flame-kindling': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:fire',
    'mdi:outline': 'mdi:fire-outline'
  },
  'lucide:flashlight': {
    'material-symbols': 'material-symbols:flashlight-on',
    'material-symbols:sharp': 'material-symbols:flashlight-on-sharp',
    'material-symbols:rounded': 'material-symbols:flashlight-on',
    'mdi': 'mdi:flashlight',
    'mdi:outline': 'mdi:flashlight-outline'
  },
  'lucide:flashlight-off': {
    'material-symbols': 'material-symbols:flashlight-off',
    'material-symbols:sharp': 'material-symbols:flashlight-off-sharp',
    'material-symbols:rounded': 'material-symbols:flashlight-off',
    'mdi': 'mdi:flashlight-off',
    'mdi:outline': 'mdi:flashlight-off-outline'
  },
  'lucide:flask-conical': {
    'material-symbols': 'material-symbols:science',
    'material-symbols:sharp': 'material-symbols:science-sharp',
    'material-symbols:rounded': 'material-symbols:science',
    'mdi': 'mdi:flask',
    'mdi:outline': 'mdi:flask-outline'
  },
  'lucide:flask-conical-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:flask-off',
    'mdi:outline': 'mdi:flask-off-outline'
  },
  'lucide:flask-round': {
    'material-symbols': 'material-symbols:science',
    'material-symbols:sharp': 'material-symbols:science-sharp',
    'material-symbols:rounded': 'material-symbols:science',
    'mdi': 'mdi:flask-round-bottom',
    'mdi:outline': 'mdi:flask-round-bottom-outline'
  },
  'lucide:flip-horizontal': {
    'material-symbols': 'material-symbols:flip',
    'material-symbols:sharp': 'material-symbols:flip-sharp',
    'material-symbols:rounded': 'material-symbols:flip',
    'mdi': 'mdi:flip-horizontal',
    'mdi:outline': 'mdi:flip-horizontal-outline'
  },
  'lucide:flip-horizontal-2': {
    'material-symbols': 'material-symbols:flip',
    'material-symbols:sharp': 'material-symbols:flip-sharp',
    'material-symbols:rounded': 'material-symbols:flip',
    'mdi': 'mdi:flip-horizontal',
    'mdi:outline': 'mdi:flip-horizontal-outline'
  },
  'lucide:flip-vertical': {
    'material-symbols': 'material-symbols:flip',
    'material-symbols:sharp': 'material-symbols:flip-sharp',
    'material-symbols:rounded': 'material-symbols:flip',
    'mdi': 'mdi:flip-vertical',
    'mdi:outline': 'mdi:flip-vertical-outline'
  },
  'lucide:flip-vertical-2': {
    'material-symbols': 'material-symbols:flip',
    'material-symbols:sharp': 'material-symbols:flip-sharp',
    'material-symbols:rounded': 'material-symbols:flip',
    'mdi': 'mdi:flip-vertical',
    'mdi:outline': 'mdi:flip-vertical-outline'
  },
  'lucide:flower': {
    'material-symbols': 'material-symbols:local-florist',
    'material-symbols:sharp': 'material-symbols:local-florist-sharp',
    'material-symbols:rounded': 'material-symbols:local-florist',
    'mdi': 'mdi:flower',
    'mdi:outline': 'mdi:flower-outline'
  },
  'lucide:flower-2': {
    'material-symbols': 'material-symbols:local-florist',
    'material-symbols:sharp': 'material-symbols:local-florist-sharp',
    'material-symbols:rounded': 'material-symbols:local-florist',
    'mdi': 'mdi:flower-tulip',
    'mdi:outline': 'mdi:flower-tulip-outline'
  },
  'lucide:focus': {
    'material-symbols': 'material-symbols:center-focus-strong',
    'material-symbols:sharp': 'material-symbols:center-focus-strong-sharp',
    'material-symbols:rounded': 'material-symbols:center-focus-strong',
    'mdi': 'mdi:target',
    'mdi:outline': 'mdi:target-outline'
  },
  'lucide:fold-horizontal': {
    'material-symbols': 'material-symbols:unfold-less-horizontal',
    'material-symbols:sharp': 'material-symbols:unfold-less-horizontal-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-less-horizontal',
    'mdi': 'mdi:unfold-less-horizontal',
    'mdi:outline': 'mdi:unfold-less-horizontal-outline'
  },
  'lucide:fold-vertical': {
    'material-symbols': 'material-symbols:unfold-less',
    'material-symbols:sharp': 'material-symbols:unfold-less-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-less',
    'mdi': 'mdi:unfold-less-vertical',
    'mdi:outline': 'mdi:unfold-less-vertical-outline'
  },
  'lucide:folder': {
    'material-symbols': 'material-symbols:folder',
    'material-symbols:sharp': 'material-symbols:folder-sharp',
    'material-symbols:rounded': 'material-symbols:folder',
    'mdi': 'mdi:folder',
    'mdi:outline': 'mdi:folder-outline'
  },
  'lucide:folder-archive': {
    'material-symbols': 'material-symbols:folder-zip',
    'material-symbols:sharp': 'material-symbols:folder-zip-sharp',
    'material-symbols:rounded': 'material-symbols:folder-zip',
    'mdi': 'mdi:folder-zip',
    'mdi:outline': 'mdi:folder-zip-outline'
  },
  'lucide:folder-check': {
    'material-symbols': 'material-symbols:folder-special',
    'material-symbols:sharp': 'material-symbols:folder-special-sharp',
    'material-symbols:rounded': 'material-symbols:folder-special',
    'mdi': 'mdi:folder-check',
    'mdi:outline': 'mdi:folder-check-outline'
  },
  'lucide:folder-clock': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:folder-clock',
    'mdi:outline': 'mdi:folder-clock-outline'
  },
  'lucide:folder-closed': {
    'material-symbols': 'material-symbols:folder',
    'material-symbols:sharp': 'material-symbols:folder-sharp',
    'material-symbols:rounded': 'material-symbols:folder',
    'mdi': 'mdi:folder',
    'mdi:outline': 'mdi:folder-outline'
  },
  'lucide:folder-code': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:folder-cog',
    'mdi:outline': 'mdi:folder-cog-outline'
  },
  'lucide:folder-cog': {
    'material-symbols': 'material-symbols:folder-managed',
    'material-symbols:sharp': 'material-symbols:folder-managed-sharp',
    'material-symbols:rounded': 'material-symbols:folder-managed',
    'mdi': 'mdi:folder-cog',
    'mdi:outline': 'mdi:folder-cog-outline'
  },
  'lucide:folder-dot': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:folder',
    'mdi:outline': 'mdi:folder-outline'
  },
  'lucide:folder-down': {
    'material-symbols': 'material-symbols:download',
    'material-symbols:sharp': 'material-symbols:download-sharp',
    'material-symbols:rounded': 'material-symbols:download',
    'mdi': 'mdi:folder-download',
    'mdi:outline': 'mdi:folder-download-outline'
  },
  'lucide:folder-git': {
    'material-symbols': 'material-symbols:source',
    'material-symbols:sharp': 'material-symbols:source-sharp',
    'material-symbols:rounded': 'material-symbols:source',
    'mdi': 'mdi:folder-github',
    'mdi:outline': 'mdi:folder-github-outline'
  },
  'lucide:folder-git-2': {
    'material-symbols': 'material-symbols:source',
    'material-symbols:sharp': 'material-symbols:source-sharp',
    'material-symbols:rounded': 'material-symbols:source',
    'mdi': 'mdi:folder-github',
    'mdi:outline': 'mdi:folder-github-outline'
  },
  'lucide:folder-heart': {
    'material-symbols': 'material-symbols:favorite',
    'material-symbols:sharp': 'material-symbols:favorite-sharp',
    'material-symbols:rounded': 'material-symbols:favorite',
    'mdi': 'mdi:folder-heart',
    'mdi:outline': 'mdi:folder-heart-outline'
  },
  'lucide:folder-input': {
    'material-symbols': 'material-symbols:input',
    'material-symbols:sharp': 'material-symbols:input-sharp',
    'material-symbols:rounded': 'material-symbols:input',
    'mdi': 'mdi:folder-download',
    'mdi:outline': 'mdi:folder-download-outline'
  },
  'lucide:folder-kanban': {
    'material-symbols': 'material-symbols:dashboard',
    'material-symbols:sharp': 'material-symbols:dashboard-sharp',
    'material-symbols:rounded': 'material-symbols:dashboard',
    'mdi': 'mdi:folder',
    'mdi:outline': 'mdi:folder-outline'
  },
  'lucide:folder-key': {
    'material-symbols': 'material-symbols:vpn-key',
    'material-symbols:sharp': 'material-symbols:vpn-key-sharp',
    'material-symbols:rounded': 'material-symbols:vpn-key',
    'mdi': 'mdi:folder-key',
    'mdi:outline': 'mdi:folder-key-outline'
  },
  'lucide:folder-lock': {
    'material-symbols': 'material-symbols:folder-lock',
    'material-symbols:sharp': 'material-symbols:folder-lock-sharp',
    'material-symbols:rounded': 'material-symbols:folder-lock',
    'mdi': 'mdi:folder-lock',
    'mdi:outline': 'mdi:folder-lock-outline'
  },
  'lucide:folder-minus': {
    'material-symbols': 'material-symbols:remove',
    'material-symbols:sharp': 'material-symbols:remove-sharp',
    'material-symbols:rounded': 'material-symbols:remove',
    'mdi': 'mdi:folder-minus',
    'mdi:outline': 'mdi:folder-minus-outline'
  },
  'lucide:folder-open': {
    'material-symbols': 'material-symbols:folder-open',
    'material-symbols:sharp': 'material-symbols:folder-open-sharp',
    'material-symbols:rounded': 'material-symbols:folder-open',
    'mdi': 'mdi:folder-open',
    'mdi:outline': 'mdi:folder-open-outline'
  },
  'lucide:folder-open-dot': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:folder-open',
    'mdi:outline': 'mdi:folder-open-outline'
  },
  'lucide:folder-output': {
    'material-symbols': 'material-symbols:output',
    'material-symbols:sharp': 'material-symbols:output-sharp',
    'material-symbols:rounded': 'material-symbols:output',
    'mdi': 'mdi:folder-upload',
    'mdi:outline': 'mdi:folder-upload-outline'
  },
  'lucide:folder-pen': {
    'material-symbols': 'material-symbols:edit',
    'material-symbols:sharp': 'material-symbols:edit-sharp',
    'material-symbols:rounded': 'material-symbols:edit',
    'mdi': 'mdi:folder-edit',
    'mdi:outline': 'mdi:folder-edit-outline'
  },
  'lucide:folder-plus': {
    'material-symbols': 'material-symbols:create-new-folder',
    'material-symbols:sharp': 'material-symbols:create-new-folder-sharp',
    'material-symbols:rounded': 'material-symbols:create-new-folder',
    'mdi': 'mdi:folder-plus',
    'mdi:outline': 'mdi:folder-plus-outline'
  },
  'lucide:folder-root': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:folder-home',
    'mdi:outline': 'mdi:folder-home-outline'
  },
  'lucide:folder-search': {
    'material-symbols': 'material-symbols:folder-open',
    'material-symbols:sharp': 'material-symbols:folder-open-sharp',
    'material-symbols:rounded': 'material-symbols:folder-open',
    'mdi': 'mdi:folder-search',
    'mdi:outline': 'mdi:folder-search-outline'
  },
  'lucide:folder-search-2': {
    'material-symbols': 'material-symbols:folder-open',
    'material-symbols:sharp': 'material-symbols:folder-open-sharp',
    'material-symbols:rounded': 'material-symbols:folder-open',
    'mdi': 'mdi:folder-search',
    'mdi:outline': 'mdi:folder-search-outline'
  },
  'lucide:folder-symlink': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:folder-link',
    'mdi:outline': 'mdi:folder-link-outline'
  },
  'lucide:folder-sync': {
    'material-symbols': 'material-symbols:sync',
    'material-symbols:sharp': 'material-symbols:sync-sharp',
    'material-symbols:rounded': 'material-symbols:sync',
    'mdi': 'mdi:folder-sync',
    'mdi:outline': 'mdi:folder-sync-outline'
  },
  'lucide:folder-tree': {
    'material-symbols': 'material-symbols:account-tree',
    'material-symbols:sharp': 'material-symbols:account-tree-sharp',
    'material-symbols:rounded': 'material-symbols:account-tree',
    'mdi': 'mdi:file-tree',
    'mdi:outline': 'mdi:file-tree-outline'
  },
  'lucide:folder-up': {
    'material-symbols': 'material-symbols:upload',
    'material-symbols:sharp': 'material-symbols:upload-sharp',
    'material-symbols:rounded': 'material-symbols:upload',
    'mdi': 'mdi:folder-upload',
    'mdi:outline': 'mdi:folder-upload-outline'
  },
  'lucide:folder-x': {
    'material-symbols': 'material-symbols:delete',
    'material-symbols:sharp': 'material-symbols:delete-sharp',
    'material-symbols:rounded': 'material-symbols:delete',
    'mdi': 'mdi:folder-remove',
    'mdi:outline': 'mdi:folder-remove-outline'
  },
  'lucide:folders': {
    'material-symbols': 'material-symbols:folder-copy',
    'material-symbols:sharp': 'material-symbols:folder-copy-sharp',
    'material-symbols:rounded': 'material-symbols:folder-copy',
    'mdi': 'mdi:folder-multiple',
    'mdi:outline': 'mdi:folder-multiple-outline'
  },
  'lucide:footprints': {
    'material-symbols': 'material-symbols:directions-walk',
    'material-symbols:sharp': 'material-symbols:directions-walk-sharp',
    'material-symbols:rounded': 'material-symbols:directions-walk',
    'mdi': 'mdi:foot-print',
    'mdi:outline': 'mdi:foot-print-outline'
  },
  'lucide:forklift': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:forklift',
    'mdi:outline': 'mdi:forklift-outline'
  },
  'lucide:form': {
    'material-symbols': 'material-symbols:description',
    'material-symbols:sharp': 'material-symbols:description-sharp',
    'material-symbols:rounded': 'material-symbols:description',
    'mdi': 'mdi:form-select',
    'mdi:outline': 'mdi:form-select-outline'
  },
  'lucide:forward': {
    'material-symbols': 'material-symbols:redo',
    'material-symbols:sharp': 'material-symbols:redo-sharp',
    'material-symbols:rounded': 'material-symbols:redo',
    'mdi': 'mdi:skip-next',
    'mdi:outline': 'mdi:skip-next-outline'
  },
  'lucide:frame': {
    'material-symbols': 'material-symbols:crop-free',
    'material-symbols:sharp': 'material-symbols:crop-free-sharp',
    'material-symbols:rounded': 'material-symbols:crop-free',
    'mdi': 'mdi:border-all',
    'mdi:outline': 'mdi:border-all-outline'
  },
  'lucide:framer': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-vertical-align-center',
    'mdi:outline': 'mdi:format-vertical-align-center'
  },
  'lucide:frown': {
    'material-symbols': 'material-symbols:sentiment-dissatisfied',
    'material-symbols:sharp': 'material-symbols:sentiment-dissatisfied-sharp',
    'material-symbols:rounded': 'material-symbols:sentiment-dissatisfied',
    'mdi': 'mdi:emoticon-sad',
    'mdi:outline': 'mdi:emoticon-sad-outline'
  },
  'lucide:fuel': {
    'material-symbols': 'material-symbols:local-gas-station',
    'material-symbols:sharp': 'material-symbols:local-gas-station-sharp',
    'material-symbols:rounded': 'material-symbols:local-gas-station',
    'mdi': 'mdi:gas-station',
    'mdi:outline': 'mdi:gas-station-outline'
  },
  'lucide:fullscreen': {
    'material-symbols': 'material-symbols:fullscreen',
    'material-symbols:sharp': 'material-symbols:fullscreen-sharp',
    'material-symbols:rounded': 'material-symbols:fullscreen',
    'mdi': 'mdi:fullscreen',
    'mdi:outline': 'mdi:fullscreen-outline'
  },
  'lucide:funnel': {
    'material-symbols': 'material-symbols:filter-alt',
    'material-symbols:sharp': 'material-symbols:filter-alt-sharp',
    'material-symbols:rounded': 'material-symbols:filter-alt',
    'mdi': 'mdi:filter',
    'mdi:outline': 'mdi:filter-outline'
  },
  'lucide:funnel-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:filter-plus',
    'mdi:outline': 'mdi:filter-plus-outline'
  },
  'lucide:funnel-x': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:filter-remove',
    'mdi:outline': 'mdi:filter-remove-outline'
  },
  'lucide:gallery-horizontal': {
    'material-symbols': 'material-symbols:view-carousel',
    'material-symbols:sharp': 'material-symbols:view-carousel-sharp',
    'material-symbols:rounded': 'material-symbols:view-carousel',
    'mdi': 'mdi:view-carousel',
    'mdi:outline': 'mdi:view-carousel-outline'
  },
  'lucide:gallery-horizontal-end': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:view-carousel',
    'mdi:outline': 'mdi:view-carousel-outline'
  },
  'lucide:gallery-thumbnails': {
    'material-symbols': 'material-symbols:grid-view',
    'material-symbols:sharp': 'material-symbols:grid-view-sharp',
    'material-symbols:rounded': 'material-symbols:grid-view',
    'mdi': 'mdi:view-grid',
    'mdi:outline': 'mdi:view-grid-outline'
  },
  'lucide:gallery-vertical': {
    'material-symbols': 'material-symbols:view-agenda',
    'material-symbols:sharp': 'material-symbols:view-agenda-sharp',
    'material-symbols:rounded': 'material-symbols:view-agenda',
    'mdi': 'mdi:view-carousel',
    'mdi:outline': 'mdi:view-carousel-outline'
  },
  'lucide:gallery-vertical-end': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:view-carousel',
    'mdi:outline': 'mdi:view-carousel-outline'
  },
  'lucide:gamepad': {
    'material-symbols': 'material-symbols:sports-esports',
    'material-symbols:sharp': 'material-symbols:sports-esports-sharp',
    'material-symbols:rounded': 'material-symbols:sports-esports',
    'mdi': 'mdi:gamepad-variant',
    'mdi:outline': 'mdi:gamepad-variant-outline'
  },
  'lucide:gamepad-2': {
    'material-symbols': 'material-symbols:videogame-asset',
    'material-symbols:sharp': 'material-symbols:videogame-asset-sharp',
    'material-symbols:rounded': 'material-symbols:videogame-asset',
    'mdi': 'mdi:gamepad',
    'mdi:outline': 'mdi:gamepad-outline'
  },
  'lucide:gamepad-directional': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:gamepad',
    'mdi:outline': 'mdi:gamepad-outline'
  },
  'lucide:gauge': {
    'material-symbols': 'material-symbols:speed',
    'material-symbols:sharp': 'material-symbols:speed-sharp',
    'material-symbols:rounded': 'material-symbols:speed',
    'mdi': 'mdi:gauge',
    'mdi:outline': 'mdi:gauge-outline'
  },
  'lucide:gavel': {
    'material-symbols': 'material-symbols:gavel',
    'material-symbols:sharp': 'material-symbols:gavel-sharp',
    'material-symbols:rounded': 'material-symbols:gavel',
    'mdi': 'mdi:gavel',
    'mdi:outline': 'mdi:gavel-outline'
  },
  'lucide:gem': {
    'material-symbols': 'material-symbols:diamond',
    'material-symbols:sharp': 'material-symbols:diamond-sharp',
    'material-symbols:rounded': 'material-symbols:diamond',
    'mdi': 'mdi:diamond-stone',
    'mdi:outline': 'mdi:diamond-stone-outline'
  },
  'lucide:georgian-lari': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:currency-gel',
    'mdi:outline': 'mdi:currency-gel-outline'
  },
  'lucide:ghost': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:ghost',
    'mdi:outline': 'mdi:ghost-outline'
  },
  'lucide:gift': {
    'material-symbols': 'material-symbols:card-giftcard',
    'material-symbols:sharp': 'material-symbols:card-giftcard-sharp',
    'material-symbols:rounded': 'material-symbols:card-giftcard',
    'mdi': 'mdi:gift',
    'mdi:outline': 'mdi:gift-outline'
  },
  'lucide:git-branch': {
    'material-symbols': 'material-symbols:account-tree',
    'material-symbols:sharp': 'material-symbols:account-tree-sharp',
    'material-symbols:rounded': 'material-symbols:account-tree',
    'mdi': 'mdi:source-branch',
    'mdi:outline': 'mdi:source-branch-outline'
  },
  'lucide:git-branch-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:source-branch-minus',
    'mdi:outline': 'mdi:source-branch-minus-outline'
  },
  'lucide:git-branch-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:source-branch-plus',
    'mdi:outline': 'mdi:source-branch-plus-outline'
  },
  'lucide:git-commit-horizontal': {
    'material-symbols': 'material-symbols:commit',
    'material-symbols:sharp': 'material-symbols:commit-sharp',
    'material-symbols:rounded': 'material-symbols:commit',
    'mdi': 'mdi:source-commit',
    'mdi:outline': 'mdi:source-commit-outline'
  },
  'lucide:git-commit-vertical': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:source-commit',
    'mdi:outline': 'mdi:source-commit-outline'
  },
  'lucide:git-compare': {
    'material-symbols': 'material-symbols:compare-arrows',
    'material-symbols:sharp': 'material-symbols:compare-arrows-sharp',
    'material-symbols:rounded': 'material-symbols:compare-arrows',
    'mdi': 'mdi:source-compare',
    'mdi:outline': 'mdi:source-compare-outline'
  },
  'lucide:git-compare-arrows': {
    'material-symbols': 'material-symbols:compare-arrows',
    'material-symbols:sharp': 'material-symbols:compare-arrows-sharp',
    'material-symbols:rounded': 'material-symbols:compare-arrows',
    'mdi': 'mdi:source-compare',
    'mdi:outline': 'mdi:source-compare-outline'
  },
  'lucide:git-fork': {
    'material-symbols': 'material-symbols:call-split',
    'material-symbols:sharp': 'material-symbols:call-split-sharp',
    'material-symbols:rounded': 'material-symbols:call-split',
    'mdi': 'mdi:source-fork',
    'mdi:outline': 'mdi:source-fork-outline'
  },
  'lucide:git-graph': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:git',
    'mdi:outline': 'mdi:git-outline'
  },
  'lucide:git-merge': {
    'material-symbols': 'material-symbols:merge',
    'material-symbols:sharp': 'material-symbols:merge-sharp',
    'material-symbols:rounded': 'material-symbols:merge',
    'mdi': 'mdi:source-merge',
    'mdi:outline': 'mdi:source-merge-outline'
  },
  'lucide:git-pull-request': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:source-pull',
    'mdi:outline': 'mdi:source-pull-outline'
  },
  'lucide:git-pull-request-arrow': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:source-pull',
    'mdi:outline': 'mdi:source-pull-outline'
  },
  'lucide:git-pull-request-closed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:source-pull',
    'mdi:outline': 'mdi:source-pull-outline'
  },
  'lucide:git-pull-request-create': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:source-pull',
    'mdi:outline': 'mdi:source-pull-outline'
  },
  'lucide:git-pull-request-create-arrow': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:source-pull',
    'mdi:outline': 'mdi:source-pull-outline'
  },
  'lucide:git-pull-request-draft': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:source-pull',
    'mdi:outline': 'mdi:source-pull-outline'
  },
  'lucide:github': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:github',
    'mdi:outline': 'mdi:github-outline'
  },
  'lucide:gitlab': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:gitlab',
    'mdi:outline': 'mdi:gitlab-outline'
  },
  'lucide:glass-water': {
    'material-symbols': 'material-symbols:local-drink',
    'material-symbols:sharp': 'material-symbols:local-drink-sharp',
    'material-symbols:rounded': 'material-symbols:local-drink',
    'mdi': 'mdi:cup-water',
    'mdi:outline': 'mdi:cup-water-outline'
  },
  'lucide:glasses': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:glasses',
    'mdi:outline': 'mdi:glasses-outline'
  },
  'lucide:globe': {
    'material-symbols': 'material-symbols:language',
    'material-symbols:sharp': 'material-symbols:language-sharp',
    'material-symbols:rounded': 'material-symbols:language',
    'mdi': 'mdi:earth',
    'mdi:outline': 'mdi:earth-outline'
  },
  'lucide:globe-lock': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:earth-lock',
    'mdi:outline': 'mdi:earth-lock-outline'
  },
  'lucide:goal': {
    'material-symbols': 'material-symbols:sports-score',
    'material-symbols:sharp': 'material-symbols:sports-score-sharp',
    'material-symbols:rounded': 'material-symbols:sports-score',
    'mdi': 'mdi:soccer',
    'mdi:outline': 'mdi:soccer-outline'
  },
  'lucide:gpu': {
    'material-symbols': 'material-symbols:developer-board',
    'material-symbols:sharp': 'material-symbols:developer-board-sharp',
    'material-symbols:rounded': 'material-symbols:developer-board',
    'mdi': 'mdi:expansion-card',
    'mdi:outline': 'mdi:expansion-card-outline'
  },
  'lucide:graduation-cap': {
    'material-symbols': 'material-symbols:school',
    'material-symbols:sharp': 'material-symbols:school-sharp',
    'material-symbols:rounded': 'material-symbols:school',
    'mdi': 'mdi:school',
    'mdi:outline': 'mdi:school-outline'
  },
  'lucide:grape': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:fruit-grapes',
    'mdi:outline': 'mdi:fruit-grapes-outline'
  },
  'lucide:grid-2x2': {
    'material-symbols': 'material-symbols:grid-view',
    'material-symbols:sharp': 'material-symbols:grid-view-sharp',
    'material-symbols:rounded': 'material-symbols:grid-view',
    'mdi': 'mdi:grid',
    'mdi:outline': 'mdi:grid-outline'
  },
  'lucide:grid-2x2-check': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:grid',
    'mdi:outline': 'mdi:grid-outline'
  },
  'lucide:grid-2x2-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:grid',
    'mdi:outline': 'mdi:grid-outline'
  },
  'lucide:grid-2x2-x': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:grid',
    'mdi:outline': 'mdi:grid-outline'
  },
  'lucide:grid-3x2': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:grid',
    'mdi:outline': 'mdi:grid-outline'
  },
  'lucide:grid-3x3': {
    'material-symbols': 'material-symbols:apps',
    'material-symbols:sharp': 'material-symbols:apps-sharp',
    'material-symbols:rounded': 'material-symbols:apps',
    'mdi': 'mdi:grid',
    'mdi:outline': 'mdi:grid-outline'
  },
  'lucide:grip': {
    'material-symbols': 'material-symbols:drag-indicator',
    'material-symbols:sharp': 'material-symbols:drag-indicator-sharp',
    'material-symbols:rounded': 'material-symbols:drag-indicator',
    'mdi': 'mdi:drag',
    'mdi:outline': 'mdi:drag'
  },
  'lucide:grip-horizontal': {
    'material-symbols': 'material-symbols:drag-handle',
    'material-symbols:sharp': 'material-symbols:drag-handle-sharp',
    'material-symbols:rounded': 'material-symbols:drag-handle',
    'mdi': 'mdi:drag-horizontal',
    'mdi:outline': 'mdi:drag-horizontal'
  },
  'lucide:grip-vertical': {
    'material-symbols': 'material-symbols:drag-indicator',
    'material-symbols:sharp': 'material-symbols:drag-indicator-sharp',
    'material-symbols:rounded': 'material-symbols:drag-indicator',
    'mdi': 'mdi:drag-vertical',
    'mdi:outline': 'mdi:drag-vertical'
  },
  'lucide:group': {
    'material-symbols': 'material-symbols:groups',
    'material-symbols:sharp': 'material-symbols:groups-sharp',
    'material-symbols:rounded': 'material-symbols:groups',
    'mdi': 'mdi:account-group',
    'mdi:outline': 'mdi:account-group-outline'
  },
  'lucide:guitar': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:guitar-acoustic',
    'mdi:outline': 'mdi:guitar-acoustic-outline'
  },
  'lucide:ham': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:food-steak',
    'mdi:outline': 'mdi:food-steak-outline'
  },
  'lucide:hamburger': {
    'material-symbols': 'material-symbols:lunch-dining',
    'material-symbols:sharp': 'material-symbols:lunch-dining-sharp',
    'material-symbols:rounded': 'material-symbols:lunch-dining',
    'mdi': 'mdi:hamburger',
    'mdi:outline': 'mdi:hamburger-outline'
  },
  'lucide:hammer': {
    'material-symbols': 'material-symbols:handyman',
    'material-symbols:sharp': 'material-symbols:handyman-sharp',
    'material-symbols:rounded': 'material-symbols:handyman',
    'mdi': 'mdi:hammer',
    'mdi:outline': 'mdi:hammer-outline'
  },
  'lucide:hand': {
    'material-symbols': 'material-symbols:pan-tool',
    'material-symbols:sharp': 'material-symbols:pan-tool-sharp',
    'material-symbols:rounded': 'material-symbols:pan-tool',
    'mdi': 'mdi:hand-back-right',
    'mdi:outline': 'mdi:hand-back-right-outline'
  },
  'lucide:hand-coins': {
    'material-symbols': 'material-symbols:payments',
    'material-symbols:sharp': 'material-symbols:payments-sharp',
    'material-symbols:rounded': 'material-symbols:payments',
    'mdi': 'mdi:hand-coin',
    'mdi:outline': 'mdi:hand-coin-outline'
  },
  'lucide:hand-fist': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:hand-clap',
    'mdi:outline': 'mdi:hand-clap-outline'
  },
  'lucide:hand-grab': {
    'material-symbols': 'material-symbols:pan-tool',
    'material-symbols:sharp': 'material-symbols:pan-tool-sharp',
    'material-symbols:rounded': 'material-symbols:pan-tool',
    'mdi': 'mdi:hand-back-right',
    'mdi:outline': 'mdi:hand-back-right-outline'
  },
  'lucide:hand-heart': {
    'material-symbols': 'material-symbols:volunteer-activism',
    'material-symbols:sharp': 'material-symbols:volunteer-activism-sharp',
    'material-symbols:rounded': 'material-symbols:volunteer-activism',
    'mdi': 'mdi:hand-heart',
    'mdi:outline': 'mdi:hand-heart-outline'
  },
  'lucide:hand-helping': {
    'material-symbols': 'material-symbols:support',
    'material-symbols:sharp': 'material-symbols:support-sharp',
    'material-symbols:rounded': 'material-symbols:support',
    'mdi': 'mdi:hand-extended',
    'mdi:outline': 'mdi:hand-extended-outline'
  },
  'lucide:hand-metal': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:hand-peace',
    'mdi:outline': 'mdi:hand-peace-outline'
  },
  'lucide:hand-platter': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:hand-extended',
    'mdi:outline': 'mdi:hand-extended-outline'
  },
  'lucide:handbag': {
    'material-symbols': 'material-symbols:work',
    'material-symbols:sharp': 'material-symbols:work-sharp',
    'material-symbols:rounded': 'material-symbols:work',
    'mdi': 'mdi:bag-personal',
    'mdi:outline': 'mdi:bag-personal-outline'
  },
  'lucide:handshake': {
    'material-symbols': 'material-symbols:handshake',
    'material-symbols:sharp': 'material-symbols:handshake-sharp',
    'material-symbols:rounded': 'material-symbols:handshake',
    'mdi': 'mdi:handshake',
    'mdi:outline': 'mdi:handshake-outline'
  },
  'lucide:hard-drive': {
    'material-symbols': 'material-symbols:storage',
    'material-symbols:sharp': 'material-symbols:storage-sharp',
    'material-symbols:rounded': 'material-symbols:storage',
    'mdi': 'mdi:harddisk',
    'mdi:outline': 'mdi:harddisk-outline'
  },
  'lucide:hard-drive-download': {
    'material-symbols': 'material-symbols:download',
    'material-symbols:sharp': 'material-symbols:download-sharp',
    'material-symbols:rounded': 'material-symbols:download',
    'mdi': 'mdi:download',
    'mdi:outline': 'mdi:download-outline'
  },
  'lucide:hard-drive-upload': {
    'material-symbols': 'material-symbols:upload',
    'material-symbols:sharp': 'material-symbols:upload-sharp',
    'material-symbols:rounded': 'material-symbols:upload',
    'mdi': 'mdi:upload',
    'mdi:outline': 'mdi:upload-outline'
  },
  'lucide:hard-hat': {
    'material-symbols': 'material-symbols:construction',
    'material-symbols:sharp': 'material-symbols:construction-sharp',
    'material-symbols:rounded': 'material-symbols:construction',
    'mdi': 'mdi:hard-hat',
    'mdi:outline': 'mdi:hard-hat-outline'
  },
  'lucide:hash': {
    'material-symbols': 'material-symbols:tag',
    'material-symbols:sharp': 'material-symbols:tag-sharp',
    'material-symbols:rounded': 'material-symbols:tag',
    'mdi': 'mdi:pound',
    'mdi:outline': 'mdi:pound-outline'
  },
  'lucide:hat-glasses': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:sunglasses',
    'mdi:outline': 'mdi:sunglasses-outline'
  },
  'lucide:haze': {
    'material-symbols': 'material-symbols:dehaze',
    'material-symbols:sharp': 'material-symbols:dehaze-sharp',
    'material-symbols:rounded': 'material-symbols:dehaze',
    'mdi': 'mdi:weather-hazy',
    'mdi:outline': 'mdi:weather-hazy-outline'
  },
  'lucide:hdmi-port': {
    'material-symbols': 'material-symbols:hdmi',
    'material-symbols:sharp': 'material-symbols:hdmi-sharp',
    'material-symbols:rounded': 'material-symbols:hdmi',
    'mdi': 'mdi:hdmi-port',
    'mdi:outline': 'mdi:hdmi-port-outline'
  },
  'lucide:heading': {
    'material-symbols': 'material-symbols:title',
    'material-symbols:sharp': 'material-symbols:title-sharp',
    'material-symbols:rounded': 'material-symbols:title',
    'mdi': 'mdi:format-header-pound',
    'mdi:outline': 'mdi:format-header-pound-outline'
  },
  'lucide:heading-1': {
    'material-symbols': 'material-symbols:looks-one',
    'material-symbols:sharp': 'material-symbols:looks-one-sharp',
    'material-symbols:rounded': 'material-symbols:looks-one',
    'mdi': 'mdi:format-header-1',
    'mdi:outline': 'mdi:format-header-1'
  },
  'lucide:heading-2': {
    'material-symbols': 'material-symbols:looks-two',
    'material-symbols:sharp': 'material-symbols:looks-two-sharp',
    'material-symbols:rounded': 'material-symbols:looks-two',
    'mdi': 'mdi:format-header-2',
    'mdi:outline': 'mdi:format-header-2'
  },
  'lucide:heading-3': {
    'material-symbols': 'material-symbols:looks-3',
    'material-symbols:sharp': 'material-symbols:looks-3-sharp',
    'material-symbols:rounded': 'material-symbols:looks-3',
    'mdi': 'mdi:format-header-3',
    'mdi:outline': 'mdi:format-header-3'
  },
  'lucide:heading-4': {
    'material-symbols': 'material-symbols:looks-4',
    'material-symbols:sharp': 'material-symbols:looks-4-sharp',
    'material-symbols:rounded': 'material-symbols:looks-4',
    'mdi': 'mdi:format-header-4',
    'mdi:outline': 'mdi:format-header-4'
  },
  'lucide:heading-5': {
    'material-symbols': 'material-symbols:looks-5',
    'material-symbols:sharp': 'material-symbols:looks-5-sharp',
    'material-symbols:rounded': 'material-symbols:looks-5',
    'mdi': 'mdi:format-header-5',
    'mdi:outline': 'mdi:format-header-5'
  },
  'lucide:heading-6': {
    'material-symbols': 'material-symbols:looks-6',
    'material-symbols:sharp': 'material-symbols:looks-6-sharp',
    'material-symbols:rounded': 'material-symbols:looks-6',
    'mdi': 'mdi:format-header-6',
    'mdi:outline': 'mdi:format-header-6'
  },
  'lucide:headphone-off': {
    'material-symbols': 'material-symbols:headset-off',
    'material-symbols:sharp': 'material-symbols:headset-off-sharp',
    'material-symbols:rounded': 'material-symbols:headset-off',
    'mdi': 'mdi:headphones-off',
    'mdi:outline': 'mdi:headphones-off-outline'
  },
  'lucide:headphones': {
    'material-symbols': 'material-symbols:headphones',
    'material-symbols:sharp': 'material-symbols:headphones-sharp',
    'material-symbols:rounded': 'material-symbols:headphones',
    'mdi': 'mdi:headphones',
    'mdi:outline': 'mdi:headphones-outline'
  },
  'lucide:headset': {
    'material-symbols': 'material-symbols:headset',
    'material-symbols:sharp': 'material-symbols:headset-sharp',
    'material-symbols:rounded': 'material-symbols:headset',
    'mdi': 'mdi:headset',
    'mdi:outline': 'mdi:headset-outline'
  },
  'lucide:heart': {
    'material-symbols': 'material-symbols:favorite',
    'material-symbols:sharp': 'material-symbols:favorite-sharp',
    'material-symbols:rounded': 'material-symbols:favorite',
    'mdi': 'mdi:heart',
    'mdi:outline': 'mdi:heart-outline'
  },
  'lucide:heart-crack': {
    'material-symbols': 'material-symbols:heart-broken',
    'material-symbols:sharp': 'material-symbols:heart-broken-sharp',
    'material-symbols:rounded': 'material-symbols:heart-broken',
    'mdi': 'mdi:heart-broken',
    'mdi:outline': 'mdi:heart-broken-outline'
  },
  'lucide:heart-handshake': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:heart',
    'mdi:outline': 'mdi:heart-outline'
  },
  'lucide:heart-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:heart-minus',
    'mdi:outline': 'mdi:heart-minus-outline'
  },
  'lucide:heart-off': {
    'material-symbols': 'material-symbols:heart-broken',
    'material-symbols:sharp': 'material-symbols:heart-broken-sharp',
    'material-symbols:rounded': 'material-symbols:heart-broken',
    'mdi': 'mdi:heart-off',
    'mdi:outline': 'mdi:heart-off-outline'
  },
  'lucide:heart-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:heart-plus',
    'mdi:outline': 'mdi:heart-plus-outline'
  },
  'lucide:heart-pulse': {
    'material-symbols': 'material-symbols:monitor-heart',
    'material-symbols:sharp': 'material-symbols:monitor-heart-sharp',
    'material-symbols:rounded': 'material-symbols:monitor-heart',
    'mdi': 'mdi:heart-pulse',
    'mdi:outline': 'mdi:heart-pulse-outline'
  },
  'lucide:heater': {
    'material-symbols': 'material-symbols:heat',
    'material-symbols:sharp': 'material-symbols:heat-sharp',
    'material-symbols:rounded': 'material-symbols:heat',
    'mdi': 'mdi:radiator',
    'mdi:outline': 'mdi:radiator-outline'
  },
  'lucide:helicopter': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:helicopter',
    'mdi:outline': 'mdi:helicopter-outline'
  },
  'lucide:hexagon': {
    'material-symbols': 'material-symbols:hexagon',
    'material-symbols:sharp': 'material-symbols:hexagon-sharp',
    'material-symbols:rounded': 'material-symbols:hexagon',
    'mdi': 'mdi:hexagon',
    'mdi:outline': 'mdi:hexagon-outline'
  },
  'lucide:highlighter': {
    'material-symbols': 'material-symbols:highlight',
    'material-symbols:sharp': 'material-symbols:highlight-sharp',
    'material-symbols:rounded': 'material-symbols:highlight',
    'mdi': 'mdi:marker',
    'mdi:outline': 'mdi:marker-outline'
  },
  'lucide:history': {
    'material-symbols': 'material-symbols:history',
    'material-symbols:sharp': 'material-symbols:history-sharp',
    'material-symbols:rounded': 'material-symbols:history',
    'mdi': 'mdi:history',
    'mdi:outline': 'mdi:history-outline'
  },
  'lucide:home': {
    'material-symbols': 'material-symbols:home',
    'material-symbols:sharp': 'material-symbols:home',
    'material-symbols:rounded': 'material-symbols:home-rounded',
    'mdi': 'mdi:home',
    'mdi:outline': 'mdi:home-outline'
  },
  'lucide:hop': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:hops',
    'mdi:outline': 'mdi:hops-outline'
  },
  'lucide:hop-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-align-right',
    'mdi:outline': 'mdi:format-align-right'
  },
  'lucide:hospital': {
    'material-symbols': 'material-symbols:local-hospital',
    'material-symbols:sharp': 'material-symbols:local-hospital-sharp',
    'material-symbols:rounded': 'material-symbols:local-hospital',
    'mdi': 'mdi:hospital-building',
    'mdi:outline': 'mdi:hospital-building-outline'
  },
  'lucide:hotel': {
    'material-symbols': 'material-symbols:hotel',
    'material-symbols:sharp': 'material-symbols:hotel-sharp',
    'material-symbols:rounded': 'material-symbols:hotel',
    'mdi': 'mdi:office-building',
    'mdi:outline': 'mdi:office-building-outline'
  },
  'lucide:hourglass': {
    'material-symbols': 'material-symbols:hourglass-empty',
    'material-symbols:sharp': 'material-symbols:hourglass-empty-sharp',
    'material-symbols:rounded': 'material-symbols:hourglass-empty',
    'mdi': 'mdi:timer-sand',
    'mdi:outline': 'mdi:timer-sand-outline'
  },
  'lucide:house': {
    'material-symbols': 'material-symbols:home',
    'material-symbols:sharp': 'material-symbols:home-sharp',
    'material-symbols:rounded': 'material-symbols:home',
    'mdi': 'mdi:home',
    'mdi:outline': 'mdi:home-outline'
  },
  'lucide:house-heart': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:home-heart',
    'mdi:outline': 'mdi:home-heart-outline'
  },
  'lucide:house-plug': {
    'material-symbols': 'material-symbols:power',
    'material-symbols:sharp': 'material-symbols:power-sharp',
    'material-symbols:rounded': 'material-symbols:power',
    'mdi': 'mdi:home-lightning-bolt',
    'mdi:outline': 'mdi:home-lightning-bolt-outline'
  },
  'lucide:house-plus': {
    'material-symbols': 'material-symbols:add-home',
    'material-symbols:sharp': 'material-symbols:add-home-sharp',
    'material-symbols:rounded': 'material-symbols:add-home',
    'mdi': 'mdi:home-plus',
    'mdi:outline': 'mdi:home-plus-outline'
  },
  'lucide:house-wifi': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:home-wifi',
    'mdi:outline': 'mdi:home-wifi-outline'
  },
  'lucide:ice-cream-bowl': {
    'material-symbols': 'material-symbols:icecream',
    'material-symbols:sharp': 'material-symbols:icecream-sharp',
    'material-symbols:rounded': 'material-symbols:icecream',
    'mdi': 'mdi:ice-cream',
    'mdi:outline': 'mdi:ice-cream-outline'
  },
  'lucide:ice-cream-cone': {
    'material-symbols': 'material-symbols:icecream',
    'material-symbols:sharp': 'material-symbols:icecream-sharp',
    'material-symbols:rounded': 'material-symbols:icecream',
    'mdi': 'mdi:ice-cream',
    'mdi:outline': 'mdi:ice-cream-outline'
  },
  'lucide:id-card': {
    'material-symbols': 'material-symbols:badge',
    'material-symbols:sharp': 'material-symbols:badge-sharp',
    'material-symbols:rounded': 'material-symbols:badge',
    'mdi': 'mdi:card-account-details',
    'mdi:outline': 'mdi:card-account-details-outline'
  },
  'lucide:id-card-lanyard': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:badge-account',
    'mdi:outline': 'mdi:badge-account-outline'
  },
  'lucide:image': {
    'material-symbols': 'material-symbols:image',
    'material-symbols:sharp': 'material-symbols:image-sharp',
    'material-symbols:rounded': 'material-symbols:image',
    'mdi': 'mdi:image',
    'mdi:outline': 'mdi:image-outline'
  },
  'lucide:image-down': {
    'material-symbols': 'material-symbols:download',
    'material-symbols:sharp': 'material-symbols:download-sharp',
    'material-symbols:rounded': 'material-symbols:download',
    'mdi': 'mdi:image-minus',
    'mdi:outline': 'mdi:image-minus-outline'
  },
  'lucide:image-minus': {
    'material-symbols': 'material-symbols:remove',
    'material-symbols:sharp': 'material-symbols:remove-sharp',
    'material-symbols:rounded': 'material-symbols:remove',
    'mdi': 'mdi:image-minus',
    'mdi:outline': 'mdi:image-minus-outline'
  },
  'lucide:image-off': {
    'material-symbols': 'material-symbols:hide-image',
    'material-symbols:sharp': 'material-symbols:hide-image-sharp',
    'material-symbols:rounded': 'material-symbols:hide-image',
    'mdi': 'mdi:image-off',
    'mdi:outline': 'mdi:image-off-outline'
  },
  'lucide:image-play': {
    'material-symbols': 'material-symbols:slideshow',
    'material-symbols:sharp': 'material-symbols:slideshow-sharp',
    'material-symbols:rounded': 'material-symbols:slideshow',
    'mdi': 'mdi:play',
    'mdi:outline': 'mdi:play-outline'
  },
  'lucide:image-plus': {
    'material-symbols': 'material-symbols:add-photo-alternate',
    'material-symbols:sharp': 'material-symbols:add-photo-alternate-sharp',
    'material-symbols:rounded': 'material-symbols:add-photo-alternate',
    'mdi': 'mdi:image-plus',
    'mdi:outline': 'mdi:image-plus-outline'
  },
  'lucide:image-up': {
    'material-symbols': 'material-symbols:upload',
    'material-symbols:sharp': 'material-symbols:upload-sharp',
    'material-symbols:rounded': 'material-symbols:upload',
    'mdi': 'mdi:image-plus',
    'mdi:outline': 'mdi:image-plus-outline'
  },
  'lucide:image-upscale': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:image-size-select-large',
    'mdi:outline': 'mdi:image-size-select-large-outline'
  },
  'lucide:images': {
    'material-symbols': 'material-symbols:collections',
    'material-symbols:sharp': 'material-symbols:collections-sharp',
    'material-symbols:rounded': 'material-symbols:collections',
    'mdi': 'mdi:image-multiple',
    'mdi:outline': 'mdi:image-multiple-outline'
  },
  'lucide:import': {
    'material-symbols': 'material-symbols:file-download',
    'material-symbols:sharp': 'material-symbols:file-download-sharp',
    'material-symbols:rounded': 'material-symbols:file-download',
    'mdi': 'mdi:import',
    'mdi:outline': 'mdi:import-outline'
  },
  'lucide:inbox': {
    'material-symbols': 'material-symbols:inbox',
    'material-symbols:sharp': 'material-symbols:inbox-sharp',
    'material-symbols:rounded': 'material-symbols:inbox',
    'mdi': 'mdi:inbox',
    'mdi:outline': 'mdi:inbox-outline'
  },
  'lucide:indian-rupee': {
    'material-symbols': 'material-symbols:currency-rupee',
    'material-symbols:sharp': 'material-symbols:currency-rupee-sharp',
    'material-symbols:rounded': 'material-symbols:currency-rupee',
    'mdi': 'mdi:currency-inr',
    'mdi:outline': 'mdi:currency-inr-outline'
  },
  'lucide:infinity': {
    'material-symbols': 'material-symbols:all-inclusive',
    'material-symbols:sharp': 'material-symbols:all-inclusive-sharp',
    'material-symbols:rounded': 'material-symbols:all-inclusive',
    'mdi': 'mdi:infinity',
    'mdi:outline': 'mdi:infinity-outline'
  },
  'lucide:info': {
    'material-symbols': 'material-symbols:info',
    'material-symbols:sharp': 'material-symbols:info-sharp',
    'material-symbols:rounded': 'material-symbols:info',
    'mdi': 'mdi:information',
    'mdi:outline': 'mdi:information-outline'
  },
  'lucide:inspection-panel': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:clipboard-list',
    'mdi:outline': 'mdi:clipboard-list-outline'
  },
  'lucide:instagram': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:instagram',
    'mdi:outline': 'mdi:instagram-outline'
  },
  'lucide:italic': {
    'material-symbols': 'material-symbols:format-italic',
    'material-symbols:sharp': 'material-symbols:format-italic-sharp',
    'material-symbols:rounded': 'material-symbols:format-italic',
    'mdi': 'mdi:format-italic',
    'mdi:outline': 'mdi:format-italic'
  },
  'lucide:iteration-ccw': {
    'material-symbols': 'material-symbols:replay',
    'material-symbols:sharp': 'material-symbols:replay-sharp',
    'material-symbols:rounded': 'material-symbols:replay',
    'mdi': 'mdi:rotate-left',
    'mdi:outline': 'mdi:rotate-left-outline'
  },
  'lucide:iteration-cw': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:rotate-right',
    'mdi:outline': 'mdi:rotate-right-outline'
  },
  'lucide:japanese-yen': {
    'material-symbols': 'material-symbols:currency-yen',
    'material-symbols:sharp': 'material-symbols:currency-yen-sharp',
    'material-symbols:rounded': 'material-symbols:currency-yen',
    'mdi': 'mdi:currency-jpy',
    'mdi:outline': 'mdi:currency-jpy-outline'
  },
  'lucide:joystick': {
    'material-symbols': 'material-symbols:sports-esports',
    'material-symbols:sharp': 'material-symbols:sports-esports-sharp',
    'material-symbols:rounded': 'material-symbols:sports-esports',
    'mdi': 'mdi:gamepad',
    'mdi:outline': 'mdi:gamepad-outline'
  },
  'lucide:kanban': {
    'material-symbols': 'material-symbols:view-kanban',
    'material-symbols:sharp': 'material-symbols:view-kanban-sharp',
    'material-symbols:rounded': 'material-symbols:view-kanban',
    'mdi': 'mdi:view-column',
    'mdi:outline': 'mdi:view-column-outline'
  },
  'lucide:kayak': {
    'material-symbols': 'material-symbols:kayaking',
    'material-symbols:sharp': 'material-symbols:kayaking-sharp',
    'material-symbols:rounded': 'material-symbols:kayaking',
    'mdi': 'mdi:kayaking',
    'mdi:outline': 'mdi:kayaking-outline'
  },
  'lucide:key': {
    'material-symbols': 'material-symbols:key',
    'material-symbols:sharp': 'material-symbols:key-sharp',
    'material-symbols:rounded': 'material-symbols:key',
    'mdi': 'mdi:key',
    'mdi:outline': 'mdi:key-outline'
  },
  'lucide:key-round': {
    'material-symbols': 'material-symbols:vpn-key',
    'material-symbols:sharp': 'material-symbols:vpn-key-sharp',
    'material-symbols:rounded': 'material-symbols:vpn-key',
    'mdi': 'mdi:key',
    'mdi:outline': 'mdi:key-outline'
  },
  'lucide:key-square': {
    'material-symbols': 'material-symbols:vpn-key',
    'material-symbols:sharp': 'material-symbols:vpn-key-sharp',
    'material-symbols:rounded': 'material-symbols:vpn-key',
    'mdi': 'mdi:key-variant',
    'mdi:outline': 'mdi:key-variant-outline'
  },
  'lucide:keyboard': {
    'material-symbols': 'material-symbols:keyboard',
    'material-symbols:sharp': 'material-symbols:keyboard-sharp',
    'material-symbols:rounded': 'material-symbols:keyboard',
    'mdi': 'mdi:keyboard',
    'mdi:outline': 'mdi:keyboard-outline'
  },
  'lucide:keyboard-music': {
    'material-symbols': 'material-symbols:piano',
    'material-symbols:sharp': 'material-symbols:piano-sharp',
    'material-symbols:rounded': 'material-symbols:piano',
    'mdi': 'mdi:piano',
    'mdi:outline': 'mdi:piano-outline'
  },
  'lucide:keyboard-off': {
    'material-symbols': 'material-symbols:keyboard-hide',
    'material-symbols:sharp': 'material-symbols:keyboard-hide-sharp',
    'material-symbols:rounded': 'material-symbols:keyboard-hide',
    'mdi': 'mdi:keyboard-off',
    'mdi:outline': 'mdi:keyboard-off-outline'
  },
  'lucide:lamp': {
    'material-symbols': 'material-symbols:lightbulb',
    'material-symbols:sharp': 'material-symbols:lightbulb-sharp',
    'material-symbols:rounded': 'material-symbols:lightbulb',
    'mdi': 'mdi:lamp',
    'mdi:outline': 'mdi:lamp-outline'
  },
  'lucide:lamp-ceiling': {
    'material-symbols': 'material-symbols:light',
    'material-symbols:sharp': 'material-symbols:light-sharp',
    'material-symbols:rounded': 'material-symbols:light',
    'mdi': 'mdi:ceiling-light',
    'mdi:outline': 'mdi:ceiling-light-outline'
  },
  'lucide:lamp-desk': {
    'material-symbols': 'material-symbols:desk-lamp',
    'material-symbols:sharp': 'material-symbols:desk-lamp-sharp',
    'material-symbols:rounded': 'material-symbols:desk-lamp',
    'mdi': 'mdi:desk-lamp',
    'mdi:outline': 'mdi:desk-lamp-outline'
  },
  'lucide:lamp-floor': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:floor-lamp',
    'mdi:outline': 'mdi:floor-lamp-outline'
  },
  'lucide:lamp-wall-down': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:wall-sconce',
    'mdi:outline': 'mdi:wall-sconce-outline'
  },
  'lucide:lamp-wall-up': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:wall-sconce-flat',
    'mdi:outline': 'mdi:wall-sconce-flat-outline'
  },
  'lucide:land-plot': {
    'material-symbols': 'material-symbols:landscape',
    'material-symbols:sharp': 'material-symbols:landscape-sharp',
    'material-symbols:rounded': 'material-symbols:landscape',
    'mdi': 'mdi:map-marker-radius',
    'mdi:outline': 'mdi:map-marker-radius-outline'
  },
  'lucide:landmark': {
    'material-symbols': 'material-symbols:account-balance',
    'material-symbols:sharp': 'material-symbols:account-balance-sharp',
    'material-symbols:rounded': 'material-symbols:account-balance',
    'mdi': 'mdi:bank',
    'mdi:outline': 'mdi:bank-outline'
  },
  'lucide:languages': {
    'material-symbols': 'material-symbols:translate',
    'material-symbols:sharp': 'material-symbols:translate-sharp',
    'material-symbols:rounded': 'material-symbols:translate',
    'mdi': 'mdi:translate',
    'mdi:outline': 'mdi:translate-outline'
  },
  'lucide:laptop': {
    'material-symbols': 'material-symbols:laptop',
    'material-symbols:sharp': 'material-symbols:laptop-sharp',
    'material-symbols:rounded': 'material-symbols:laptop',
    'mdi': 'mdi:laptop',
    'mdi:outline': 'mdi:laptop-outline'
  },
  'lucide:laptop-minimal': {
    'material-symbols': 'material-symbols:laptop-chromebook',
    'material-symbols:sharp': 'material-symbols:laptop-chromebook-sharp',
    'material-symbols:rounded': 'material-symbols:laptop-chromebook',
    'mdi': 'mdi:laptop',
    'mdi:outline': 'mdi:laptop-outline'
  },
  'lucide:laptop-minimal-check': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:laptop',
    'mdi:outline': 'mdi:laptop-outline'
  },
  'lucide:lasso': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:lasso',
    'mdi:outline': 'mdi:lasso-outline'
  },
  'lucide:lasso-select': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:selection',
    'mdi:outline': 'mdi:selection-outline'
  },
  'lucide:laugh': {
    'material-symbols': 'material-symbols:sentiment-satisfied',
    'material-symbols:sharp': 'material-symbols:sentiment-satisfied-sharp',
    'material-symbols:rounded': 'material-symbols:sentiment-satisfied',
    'mdi': 'mdi:emoticon-happy',
    'mdi:outline': 'mdi:emoticon-happy-outline'
  },
  'lucide:layers': {
    'material-symbols': 'material-symbols:layers',
    'material-symbols:sharp': 'material-symbols:layers-sharp',
    'material-symbols:rounded': 'material-symbols:layers',
    'mdi': 'mdi:layers',
    'mdi:outline': 'mdi:layers-outline'
  },
  'lucide:layers-2': {
    'material-symbols': 'material-symbols:layers',
    'material-symbols:sharp': 'material-symbols:layers-sharp',
    'material-symbols:rounded': 'material-symbols:layers',
    'mdi': 'mdi:layers-triple',
    'mdi:outline': 'mdi:layers-triple-outline'
  },
  'lucide:layout-dashboard': {
    'material-symbols': 'material-symbols:dashboard',
    'material-symbols:sharp': 'material-symbols:dashboard-sharp',
    'material-symbols:rounded': 'material-symbols:dashboard',
    'mdi': 'mdi:view-dashboard',
    'mdi:outline': 'mdi:view-dashboard-outline'
  },
  'lucide:layout-grid': {
    'material-symbols': 'material-symbols:grid-view',
    'material-symbols:sharp': 'material-symbols:grid-view-sharp',
    'material-symbols:rounded': 'material-symbols:grid-view',
    'mdi': 'mdi:view-grid',
    'mdi:outline': 'mdi:view-grid-outline'
  },
  'lucide:layout-list': {
    'material-symbols': 'material-symbols:view-list',
    'material-symbols:sharp': 'material-symbols:view-list-sharp',
    'material-symbols:rounded': 'material-symbols:view-list',
    'mdi': 'mdi:view-list',
    'mdi:outline': 'mdi:view-list-outline'
  },
  'lucide:layout-panel-left': {
    'material-symbols': 'material-symbols:vertical-split',
    'material-symbols:sharp': 'material-symbols:vertical-split-sharp',
    'material-symbols:rounded': 'material-symbols:vertical-split',
    'mdi': 'mdi:page-layout-sidebar-left',
    'mdi:outline': 'mdi:page-layout-sidebar-left-outline'
  },
  'lucide:layout-panel-top': {
    'material-symbols': 'material-symbols:horizontal-split',
    'material-symbols:sharp': 'material-symbols:horizontal-split-sharp',
    'material-symbols:rounded': 'material-symbols:horizontal-split',
    'mdi': 'mdi:page-layout-header',
    'mdi:outline': 'mdi:page-layout-header-outline'
  },
  'lucide:layout-template': {
    'material-symbols': 'material-symbols:view-quilt',
    'material-symbols:sharp': 'material-symbols:view-quilt-sharp',
    'material-symbols:rounded': 'material-symbols:view-quilt',
    'mdi': 'mdi:page-layout-body',
    'mdi:outline': 'mdi:page-layout-body-outline'
  },
  'lucide:leaf': {
    'material-symbols': 'material-symbols:eco',
    'material-symbols:sharp': 'material-symbols:eco-sharp',
    'material-symbols:rounded': 'material-symbols:eco',
    'mdi': 'mdi:leaf',
    'mdi:outline': 'mdi:leaf-outline'
  },
  'lucide:leafy-green': {
    'material-symbols': 'material-symbols:grass',
    'material-symbols:sharp': 'material-symbols:grass-sharp',
    'material-symbols:rounded': 'material-symbols:grass',
    'mdi': 'mdi:food-variant',
    'mdi:outline': 'mdi:food-variant-outline'
  },
  'lucide:lectern': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:podium',
    'mdi:outline': 'mdi:podium-outline'
  },
  'lucide:library': {
    'material-symbols': 'material-symbols:local-library',
    'material-symbols:sharp': 'material-symbols:local-library-sharp',
    'material-symbols:rounded': 'material-symbols:local-library',
    'mdi': 'mdi:library',
    'mdi:outline': 'mdi:library-outline'
  },
  'lucide:library-big': {
    'material-symbols': 'material-symbols:local-library',
    'material-symbols:sharp': 'material-symbols:local-library-sharp',
    'material-symbols:rounded': 'material-symbols:local-library',
    'mdi': 'mdi:library-shelves',
    'mdi:outline': 'mdi:library-shelves-outline'
  },
  'lucide:life-buoy': {
    'material-symbols': 'material-symbols:support',
    'material-symbols:sharp': 'material-symbols:support-sharp',
    'material-symbols:rounded': 'material-symbols:support',
    'mdi': 'mdi:lifebuoy',
    'mdi:outline': 'mdi:lifebuoy-outline'
  },
  'lucide:ligature': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-text',
    'mdi:outline': 'mdi:format-text'
  },
  'lucide:lightbulb': {
    'material-symbols': 'material-symbols:lightbulb',
    'material-symbols:sharp': 'material-symbols:lightbulb-sharp',
    'material-symbols:rounded': 'material-symbols:lightbulb',
    'mdi': 'mdi:lightbulb',
    'mdi:outline': 'mdi:lightbulb-outline'
  },
  'lucide:lightbulb-off': {
    'material-symbols': 'material-symbols:lightbulb',
    'material-symbols:sharp': 'material-symbols:lightbulb-sharp',
    'material-symbols:rounded': 'material-symbols:lightbulb',
    'mdi': 'mdi:lightbulb-off',
    'mdi:outline': 'mdi:lightbulb-off-outline'
  },
  'lucide:line-squiggle': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:vector-curve',
    'mdi:outline': 'mdi:vector-curve-outline'
  },
  'lucide:link': {
    'material-symbols': 'material-symbols:link',
    'material-symbols:sharp': 'material-symbols:link-sharp',
    'material-symbols:rounded': 'material-symbols:link',
    'mdi': 'mdi:link',
    'mdi:outline': 'mdi:link-outline'
  },
  'lucide:link-2': {
    'material-symbols': 'material-symbols:insert-link',
    'material-symbols:sharp': 'material-symbols:insert-link-sharp',
    'material-symbols:rounded': 'material-symbols:insert-link',
    'mdi': 'mdi:link-variant',
    'mdi:outline': 'mdi:link-variant-outline'
  },
  'lucide:link-2-off': {
    'material-symbols': 'material-symbols:link-off',
    'material-symbols:sharp': 'material-symbols:link-off-sharp',
    'material-symbols:rounded': 'material-symbols:link-off',
    'mdi': 'mdi:link-variant-off',
    'mdi:outline': 'mdi:link-variant-off-outline'
  },
  'lucide:linkedin': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:linkedin',
    'mdi:outline': 'mdi:linkedin-outline'
  },
  'lucide:list': {
    'material-symbols': 'material-symbols:list',
    'material-symbols:sharp': 'material-symbols:list-sharp',
    'material-symbols:rounded': 'material-symbols:list',
    'mdi': 'mdi:format-list-bulleted',
    'mdi:outline': 'mdi:format-list-bulleted'
  },
  'lucide:list-check': {
    'material-symbols': 'material-symbols:checklist',
    'material-symbols:sharp': 'material-symbols:checklist-sharp',
    'material-symbols:rounded': 'material-symbols:checklist',
    'mdi': 'mdi:format-list-checks',
    'mdi:outline': 'mdi:format-list-checks'
  },
  'lucide:list-checks': {
    'material-symbols': 'material-symbols:checklist',
    'material-symbols:sharp': 'material-symbols:checklist-sharp',
    'material-symbols:rounded': 'material-symbols:checklist',
    'mdi': 'mdi:format-list-checkbox',
    'mdi:outline': 'mdi:format-list-checkbox'
  },
  'lucide:list-chevrons-down-up': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:unfold-less-vertical',
    'mdi:outline': 'mdi:unfold-less-vertical-outline'
  },
  'lucide:list-chevrons-up-down': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:unfold-more-vertical',
    'mdi:outline': 'mdi:unfold-more-vertical-outline'
  },
  'lucide:list-collapse': {
    'material-symbols': 'material-symbols:unfold-less',
    'material-symbols:sharp': 'material-symbols:unfold-less-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-less',
    'mdi': 'mdi:collapse-all',
    'mdi:outline': 'mdi:collapse-all-outline'
  },
  'lucide:list-end': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-list-bulleted',
    'mdi:outline': 'mdi:format-list-bulleted'
  },
  'lucide:list-filter': {
    'material-symbols': 'material-symbols:filter-list',
    'material-symbols:sharp': 'material-symbols:filter-list-sharp',
    'material-symbols:rounded': 'material-symbols:filter-list',
    'mdi': 'mdi:filter-menu',
    'mdi:outline': 'mdi:filter-menu-outline'
  },
  'lucide:list-filter-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:filter-plus',
    'mdi:outline': 'mdi:filter-plus-outline'
  },
  'lucide:list-indent-decrease': {
    'material-symbols': 'material-symbols:format-indent-decrease',
    'material-symbols:sharp': 'material-symbols:format-indent-decrease-sharp',
    'material-symbols:rounded': 'material-symbols:format-indent-decrease',
    'mdi': 'mdi:format-indent-decrease',
    'mdi:outline': 'mdi:format-indent-decrease'
  },
  'lucide:list-indent-increase': {
    'material-symbols': 'material-symbols:format-indent-increase',
    'material-symbols:sharp': 'material-symbols:format-indent-increase-sharp',
    'material-symbols:rounded': 'material-symbols:format-indent-increase',
    'mdi': 'mdi:format-indent-increase',
    'mdi:outline': 'mdi:format-indent-increase'
  },
  'lucide:list-minus': {
    'material-symbols': 'material-symbols:remove',
    'material-symbols:sharp': 'material-symbols:remove-sharp',
    'material-symbols:rounded': 'material-symbols:remove',
    'mdi': 'mdi:playlist-minus',
    'mdi:outline': 'mdi:playlist-minus-outline'
  },
  'lucide:list-music': {
    'material-symbols': 'material-symbols:queue-music',
    'material-symbols:sharp': 'material-symbols:queue-music-sharp',
    'material-symbols:rounded': 'material-symbols:queue-music',
    'mdi': 'mdi:playlist-music',
    'mdi:outline': 'mdi:playlist-music-outline'
  },
  'lucide:list-ordered': {
    'material-symbols': 'material-symbols:format-list-numbered',
    'material-symbols:sharp': 'material-symbols:format-list-numbered-sharp',
    'material-symbols:rounded': 'material-symbols:format-list-numbered',
    'mdi': 'mdi:format-list-numbered',
    'mdi:outline': 'mdi:format-list-numbered'
  },
  'lucide:list-plus': {
    'material-symbols': 'material-symbols:playlist-add',
    'material-symbols:sharp': 'material-symbols:playlist-add-sharp',
    'material-symbols:rounded': 'material-symbols:playlist-add',
    'mdi': 'mdi:playlist-plus',
    'mdi:outline': 'mdi:playlist-plus-outline'
  },
  'lucide:list-restart': {
    'material-symbols': 'material-symbols:restart-alt',
    'material-symbols:sharp': 'material-symbols:restart-alt-sharp',
    'material-symbols:rounded': 'material-symbols:restart-alt',
    'mdi': 'mdi:restart',
    'mdi:outline': 'mdi:restart-outline'
  },
  'lucide:list-start': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-list-bulleted',
    'mdi:outline': 'mdi:format-list-bulleted'
  },
  'lucide:list-todo': {
    'material-symbols': 'material-symbols:checklist',
    'material-symbols:sharp': 'material-symbols:checklist-sharp',
    'material-symbols:rounded': 'material-symbols:checklist',
    'mdi': 'mdi:format-list-checks',
    'mdi:outline': 'mdi:format-list-checks'
  },
  'lucide:list-tree': {
    'material-symbols': 'material-symbols:account-tree',
    'material-symbols:sharp': 'material-symbols:account-tree-sharp',
    'material-symbols:rounded': 'material-symbols:account-tree',
    'mdi': 'mdi:file-tree',
    'mdi:outline': 'mdi:file-tree-outline'
  },
  'lucide:list-video': {
    'material-symbols': 'material-symbols:video-library',
    'material-symbols:sharp': 'material-symbols:video-library-sharp',
    'material-symbols:rounded': 'material-symbols:video-library',
    'mdi': 'mdi:playlist-play',
    'mdi:outline': 'mdi:playlist-play-outline'
  },
  'lucide:list-x': {
    'material-symbols': 'material-symbols:clear',
    'material-symbols:sharp': 'material-symbols:clear-sharp',
    'material-symbols:rounded': 'material-symbols:clear',
    'mdi': 'mdi:playlist-remove',
    'mdi:outline': 'mdi:playlist-remove-outline'
  },
  'lucide:loader': {
    'material-symbols': 'material-symbols:sync',
    'material-symbols:sharp': 'material-symbols:sync-sharp',
    'material-symbols:rounded': 'material-symbols:sync',
    'mdi': 'mdi:loading',
    'mdi:outline': 'mdi:loading-outline'
  },
  'lucide:loader-circle': {
    'material-symbols': 'material-symbols:progress-activity',
    'material-symbols:sharp': 'material-symbols:progress-activity-sharp',
    'material-symbols:rounded': 'material-symbols:progress-activity',
    'mdi': 'mdi:loading',
    'mdi:outline': 'mdi:loading-outline'
  },
  'lucide:loader-pinwheel': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:loading',
    'mdi:outline': 'mdi:loading-outline'
  },
  'lucide:locate': {
    'material-symbols': 'material-symbols:my-location',
    'material-symbols:sharp': 'material-symbols:my-location-sharp',
    'material-symbols:rounded': 'material-symbols:my-location',
    'mdi': 'mdi:crosshairs-gps',
    'mdi:outline': 'mdi:crosshairs-gps-outline'
  },
  'lucide:locate-fixed': {
    'material-symbols': 'material-symbols:gps-fixed',
    'material-symbols:sharp': 'material-symbols:gps-fixed-sharp',
    'material-symbols:rounded': 'material-symbols:gps-fixed',
    'mdi': 'mdi:crosshairs',
    'mdi:outline': 'mdi:crosshairs-outline'
  },
  'lucide:locate-off': {
    'material-symbols': 'material-symbols:location-disabled',
    'material-symbols:sharp': 'material-symbols:location-disabled-sharp',
    'material-symbols:rounded': 'material-symbols:location-disabled',
    'mdi': 'mdi:crosshairs-off',
    'mdi:outline': 'mdi:crosshairs-off-outline'
  },
  'lucide:lock': {
    'material-symbols': 'material-symbols:lock',
    'material-symbols:sharp': 'material-symbols:lock-sharp',
    'material-symbols:rounded': 'material-symbols:lock',
    'mdi': 'mdi:lock',
    'mdi:outline': 'mdi:lock-outline'
  },
  'lucide:lock-keyhole': {
    'material-symbols': 'material-symbols:lock',
    'material-symbols:sharp': 'material-symbols:lock-sharp',
    'material-symbols:rounded': 'material-symbols:lock',
    'mdi': 'mdi:lock',
    'mdi:outline': 'mdi:lock-outline'
  },
  'lucide:lock-keyhole-open': {
    'material-symbols': 'material-symbols:lock-open',
    'material-symbols:sharp': 'material-symbols:lock-open-sharp',
    'material-symbols:rounded': 'material-symbols:lock-open',
    'mdi': 'mdi:lock-open',
    'mdi:outline': 'mdi:lock-open-outline'
  },
  'lucide:lock-open': {
    'material-symbols': 'material-symbols:lock-open',
    'material-symbols:sharp': 'material-symbols:lock-open-sharp',
    'material-symbols:rounded': 'material-symbols:lock-open',
    'mdi': 'mdi:lock-open',
    'mdi:outline': 'mdi:lock-open-outline'
  },
  'lucide:log-in': {
    'material-symbols': 'material-symbols:login',
    'material-symbols:sharp': 'material-symbols:login-sharp',
    'material-symbols:rounded': 'material-symbols:login',
    'mdi': 'mdi:login',
    'mdi:outline': 'mdi:login-outline'
  },
  'lucide:log-out': {
    'material-symbols': 'material-symbols:logout',
    'material-symbols:sharp': 'material-symbols:logout-sharp',
    'material-symbols:rounded': 'material-symbols:logout',
    'mdi': 'mdi:logout',
    'mdi:outline': 'mdi:logout-outline'
  },
  'lucide:logs': {
    'material-symbols': 'material-symbols:article',
    'material-symbols:sharp': 'material-symbols:article-sharp',
    'material-symbols:rounded': 'material-symbols:article',
    'mdi': 'mdi:file-document-multiple',
    'mdi:outline': 'mdi:file-document-multiple-outline'
  },
  'lucide:lollipop': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:candy',
    'mdi:outline': 'mdi:candy-outline'
  },
  'lucide:luggage': {
    'material-symbols': 'material-symbols:luggage',
    'material-symbols:sharp': 'material-symbols:luggage-sharp',
    'material-symbols:rounded': 'material-symbols:luggage',
    'mdi': 'mdi:bag-suitcase',
    'mdi:outline': 'mdi:bag-suitcase-outline'
  },
  'lucide:magnet': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:magnet',
    'mdi:outline': 'mdi:magnet-outline'
  },
  'lucide:mail': {
    'material-symbols': 'material-symbols:mail',
    'material-symbols:sharp': 'material-symbols:mail-sharp',
    'material-symbols:rounded': 'material-symbols:mail',
    'mdi': 'mdi:email',
    'mdi:outline': 'mdi:email-outline'
  },
  'lucide:mail-check': {
    'material-symbols': 'material-symbols:mark-email-read',
    'material-symbols:sharp': 'material-symbols:mark-email-read-sharp',
    'material-symbols:rounded': 'material-symbols:mark-email-read',
    'mdi': 'mdi:email-check',
    'mdi:outline': 'mdi:email-check-outline'
  },
  'lucide:mail-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:email-minus',
    'mdi:outline': 'mdi:email-minus-outline'
  },
  'lucide:mail-open': {
    'material-symbols': 'material-symbols:drafts',
    'material-symbols:sharp': 'material-symbols:drafts-sharp',
    'material-symbols:rounded': 'material-symbols:drafts',
    'mdi': 'mdi:email-open',
    'mdi:outline': 'mdi:email-open-outline'
  },
  'lucide:mail-plus': {
    'material-symbols': 'material-symbols:add-task',
    'material-symbols:sharp': 'material-symbols:add-task-sharp',
    'material-symbols:rounded': 'material-symbols:add-task',
    'mdi': 'mdi:email-plus',
    'mdi:outline': 'mdi:email-plus-outline'
  },
  'lucide:mail-question-mark': {
    'material-symbols': 'material-symbols:contact-support',
    'material-symbols:sharp': 'material-symbols:contact-support-sharp',
    'material-symbols:rounded': 'material-symbols:contact-support',
    'mdi': 'mdi:email-question',
    'mdi:outline': 'mdi:email-question-outline'
  },
  'lucide:mail-search': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:email-search',
    'mdi:outline': 'mdi:email-search-outline'
  },
  'lucide:mail-warning': {
    'material-symbols': 'material-symbols:report',
    'material-symbols:sharp': 'material-symbols:report-sharp',
    'material-symbols:rounded': 'material-symbols:report',
    'mdi': 'mdi:email-alert',
    'mdi:outline': 'mdi:email-alert-outline'
  },
  'lucide:mail-x': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:email-remove',
    'mdi:outline': 'mdi:email-remove-outline'
  },
  'lucide:mailbox': {
    'material-symbols': 'material-symbols:mail',
    'material-symbols:sharp': 'material-symbols:mail-sharp',
    'material-symbols:rounded': 'material-symbols:mail',
    'mdi': 'mdi:mailbox',
    'mdi:outline': 'mdi:mailbox-outline'
  },
  'lucide:mails': {
    'material-symbols': 'material-symbols:mail',
    'material-symbols:sharp': 'material-symbols:mail-sharp',
    'material-symbols:rounded': 'material-symbols:mail',
    'mdi': 'mdi:email-multiple',
    'mdi:outline': 'mdi:email-multiple-outline'
  },
  'lucide:map': {
    'material-symbols': 'material-symbols:map',
    'material-symbols:sharp': 'material-symbols:map-sharp',
    'material-symbols:rounded': 'material-symbols:map',
    'mdi': 'mdi:map',
    'mdi:outline': 'mdi:map-outline'
  },
  'lucide:map-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:map-minus',
    'mdi:outline': 'mdi:map-minus-outline'
  },
  'lucide:map-pin': {
    'material-symbols': 'material-symbols:place',
    'material-symbols:sharp': 'material-symbols:place-sharp',
    'material-symbols:rounded': 'material-symbols:place',
    'mdi': 'mdi:map-marker',
    'mdi:outline': 'mdi:map-marker-outline'
  },
  'lucide:map-pin-check': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:map-marker-check',
    'mdi:outline': 'mdi:map-marker-check-outline'
  },
  'lucide:map-pin-check-inside': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:map-marker-check',
    'mdi:outline': 'mdi:map-marker-check-outline'
  },
  'lucide:map-pin-house': {
    'material-symbols': 'material-symbols:home-pin',
    'material-symbols:sharp': 'material-symbols:home-pin-sharp',
    'material-symbols:rounded': 'material-symbols:home-pin',
    'mdi': 'mdi:home-map-marker',
    'mdi:outline': 'mdi:home-map-marker-outline'
  },
  'lucide:map-pin-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:map-marker-minus',
    'mdi:outline': 'mdi:map-marker-minus-outline'
  },
  'lucide:map-pin-minus-inside': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:map-marker-minus',
    'mdi:outline': 'mdi:map-marker-minus-outline'
  },
  'lucide:map-pin-off': {
    'material-symbols': 'material-symbols:location-off',
    'material-symbols:sharp': 'material-symbols:location-off-sharp',
    'material-symbols:rounded': 'material-symbols:location-off',
    'mdi': 'mdi:map-marker-off',
    'mdi:outline': 'mdi:map-marker-off-outline'
  },
  'lucide:map-pin-pen': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:map-marker-edit',
    'mdi:outline': 'mdi:map-marker-edit-outline'
  },
  'lucide:map-pin-plus': {
    'material-symbols': 'material-symbols:add-location',
    'material-symbols:sharp': 'material-symbols:add-location-sharp',
    'material-symbols:rounded': 'material-symbols:add-location',
    'mdi': 'mdi:map-marker-plus',
    'mdi:outline': 'mdi:map-marker-plus-outline'
  },
  'lucide:map-pin-plus-inside': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:map-marker-plus',
    'mdi:outline': 'mdi:map-marker-plus-outline'
  },
  'lucide:map-pin-x': {
    'material-symbols': 'material-symbols:wrong-location',
    'material-symbols:sharp': 'material-symbols:wrong-location-sharp',
    'material-symbols:rounded': 'material-symbols:wrong-location',
    'mdi': 'mdi:map-marker-remove',
    'mdi:outline': 'mdi:map-marker-remove-outline'
  },
  'lucide:map-pin-x-inside': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:map-marker-remove',
    'mdi:outline': 'mdi:map-marker-remove-outline'
  },
  'lucide:map-pinned': {
    'material-symbols': 'material-symbols:push-pin',
    'material-symbols:sharp': 'material-symbols:push-pin-sharp',
    'material-symbols:rounded': 'material-symbols:push-pin',
    'mdi': 'mdi:map-marker',
    'mdi:outline': 'mdi:map-marker-outline'
  },
  'lucide:map-plus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:map-plus',
    'mdi:outline': 'mdi:map-plus-outline'
  },
  'lucide:mars': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:gender-male',
    'mdi:outline': 'mdi:gender-male-outline'
  },
  'lucide:mars-stroke': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:gender-male',
    'mdi:outline': 'mdi:gender-male-outline'
  },
  'lucide:martini': {
    'material-symbols': 'material-symbols:local-bar',
    'material-symbols:sharp': 'material-symbols:local-bar-sharp',
    'material-symbols:rounded': 'material-symbols:local-bar',
    'mdi': 'mdi:glass-cocktail',
    'mdi:outline': 'mdi:glass-cocktail-outline'
  },
  'lucide:maximize': {
    'material-symbols': 'material-symbols:fullscreen',
    'material-symbols:sharp': 'material-symbols:fullscreen-sharp',
    'material-symbols:rounded': 'material-symbols:fullscreen',
    'mdi': 'mdi:arrow-expand',
    'mdi:outline': 'mdi:arrow-expand-outline'
  },
  'lucide:maximize-2': {
    'material-symbols': 'material-symbols:open-in-full',
    'material-symbols:sharp': 'material-symbols:open-in-full-sharp',
    'material-symbols:rounded': 'material-symbols:open-in-full',
    'mdi': 'mdi:arrow-expand-all',
    'mdi:outline': 'mdi:arrow-expand-all-outline'
  },
  'lucide:medal': {
    'material-symbols': 'material-symbols:military-tech',
    'material-symbols:sharp': 'material-symbols:military-tech-sharp',
    'material-symbols:rounded': 'material-symbols:military-tech',
    'mdi': 'mdi:medal',
    'mdi:outline': 'mdi:medal-outline'
  },
  'lucide:megaphone': {
    'material-symbols': 'material-symbols:campaign',
    'material-symbols:sharp': 'material-symbols:campaign-sharp',
    'material-symbols:rounded': 'material-symbols:campaign',
    'mdi': 'mdi:bullhorn',
    'mdi:outline': 'mdi:bullhorn-outline'
  },
  'lucide:megaphone-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:bullhorn-outline',
    'mdi:outline': 'mdi:bullhorn-outline-outline'
  },
  'lucide:meh': {
    'material-symbols': 'material-symbols:sentiment-neutral',
    'material-symbols:sharp': 'material-symbols:sentiment-neutral-sharp',
    'material-symbols:rounded': 'material-symbols:sentiment-neutral',
    'mdi': 'mdi:emoticon-neutral',
    'mdi:outline': 'mdi:emoticon-neutral-outline'
  },
  'lucide:memory-stick': {
    'material-symbols': 'material-symbols:usb',
    'material-symbols:sharp': 'material-symbols:usb-sharp',
    'material-symbols:rounded': 'material-symbols:usb',
    'mdi': 'mdi:usb-flash-drive',
    'mdi:outline': 'mdi:usb-flash-drive-outline'
  },
  'lucide:menu': {
    'material-symbols': 'material-symbols:menu',
    'material-symbols:sharp': 'material-symbols:menu',
    'material-symbols:rounded': 'material-symbols:menu-rounded',
    'mdi': 'mdi:menu',
    'mdi:outline': 'mdi:menu-outline'
  },
  'lucide:merge': {
    'material-symbols': 'material-symbols:merge',
    'material-symbols:sharp': 'material-symbols:merge-sharp',
    'material-symbols:rounded': 'material-symbols:merge',
    'mdi': 'mdi:merge',
    'mdi:outline': 'mdi:merge-outline'
  },
  'lucide:message-circle': {
    'material-symbols': 'material-symbols:chat-bubble',
    'material-symbols:sharp': 'material-symbols:chat-bubble-sharp',
    'material-symbols:rounded': 'material-symbols:chat-bubble',
    'mdi': 'mdi:message',
    'mdi:outline': 'mdi:message-outline'
  },
  'lucide:message-circle-code': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:message-code',
    'mdi:outline': 'mdi:message-code-outline'
  },
  'lucide:message-circle-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:message-outline',
    'mdi:outline': 'mdi:message-outline-outline'
  },
  'lucide:message-circle-heart': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:heart-circle',
    'mdi:outline': 'mdi:heart-circle-outline'
  },
  'lucide:message-circle-more': {
    'material-symbols': 'material-symbols:more-horiz',
    'material-symbols:sharp': 'material-symbols:more-horiz-sharp',
    'material-symbols:rounded': 'material-symbols:more-horiz',
    'mdi': 'mdi:message-plus',
    'mdi:outline': 'mdi:message-plus-outline'
  },
  'lucide:message-circle-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:message-off',
    'mdi:outline': 'mdi:message-off-outline'
  },
  'lucide:message-circle-plus': {
    'material-symbols': 'material-symbols:add-comment',
    'material-symbols:sharp': 'material-symbols:add-comment-sharp',
    'material-symbols:rounded': 'material-symbols:add-comment',
    'mdi': 'mdi:message-plus',
    'mdi:outline': 'mdi:message-plus-outline'
  },
  'lucide:message-circle-question-mark': {
    'material-symbols': 'material-symbols:help',
    'material-symbols:sharp': 'material-symbols:help-sharp',
    'material-symbols:rounded': 'material-symbols:help',
    'mdi': 'mdi:message-question',
    'mdi:outline': 'mdi:message-question-outline'
  },
  'lucide:message-circle-reply': {
    'material-symbols': 'material-symbols:reply',
    'material-symbols:sharp': 'material-symbols:reply-sharp',
    'material-symbols:rounded': 'material-symbols:reply',
    'mdi': 'mdi:message-reply',
    'mdi:outline': 'mdi:message-reply-outline'
  },
  'lucide:message-circle-warning': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:message-alert',
    'mdi:outline': 'mdi:message-alert-outline'
  },
  'lucide:message-circle-x': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:message-remove',
    'mdi:outline': 'mdi:message-remove-outline'
  },
  'lucide:message-square': {
    'material-symbols': 'material-symbols:chat',
    'material-symbols:sharp': 'material-symbols:chat-sharp',
    'material-symbols:rounded': 'material-symbols:chat',
    'mdi': 'mdi:message-text',
    'mdi:outline': 'mdi:message-text-outline'
  },
  'lucide:message-square-code': {
    'material-symbols': 'material-symbols:code',
    'material-symbols:sharp': 'material-symbols:code-sharp',
    'material-symbols:rounded': 'material-symbols:code',
    'mdi': 'mdi:message-code',
    'mdi:outline': 'mdi:message-code-outline'
  },
  'lucide:message-square-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:message-text-outline',
    'mdi:outline': 'mdi:message-text-outline-outline'
  },
  'lucide:message-square-diff': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-compare',
    'mdi:outline': 'mdi:file-compare-outline'
  },
  'lucide:message-square-dot': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:message',
    'mdi:outline': 'mdi:message-outline'
  },
  'lucide:message-square-heart': {
    'material-symbols': 'material-symbols:favorite',
    'material-symbols:sharp': 'material-symbols:favorite-sharp',
    'material-symbols:rounded': 'material-symbols:favorite',
    'mdi': 'mdi:heart',
    'mdi:outline': 'mdi:heart-outline'
  },
  'lucide:message-square-lock': {
    'material-symbols': 'material-symbols:lock',
    'material-symbols:sharp': 'material-symbols:lock-sharp',
    'material-symbols:rounded': 'material-symbols:lock',
    'mdi': 'mdi:message-lock',
    'mdi:outline': 'mdi:message-lock-outline'
  },
  'lucide:message-square-more': {
    'material-symbols': 'material-symbols:more-horiz',
    'material-symbols:sharp': 'material-symbols:more-horiz-sharp',
    'material-symbols:rounded': 'material-symbols:more-horiz',
    'mdi': 'mdi:message-plus',
    'mdi:outline': 'mdi:message-plus-outline'
  },
  'lucide:message-square-off': {
    'material-symbols': 'material-symbols:chat-disabled',
    'material-symbols:sharp': 'material-symbols:chat-disabled-sharp',
    'material-symbols:rounded': 'material-symbols:chat-disabled',
    'mdi': 'mdi:message-off',
    'mdi:outline': 'mdi:message-off-outline'
  },
  'lucide:message-square-plus': {
    'material-symbols': 'material-symbols:add-comment',
    'material-symbols:sharp': 'material-symbols:add-comment-sharp',
    'material-symbols:rounded': 'material-symbols:add-comment',
    'mdi': 'mdi:message-plus',
    'mdi:outline': 'mdi:message-plus-outline'
  },
  'lucide:message-square-quote': {
    'material-symbols': 'material-symbols:format-quote',
    'material-symbols:sharp': 'material-symbols:format-quote-sharp',
    'material-symbols:rounded': 'material-symbols:format-quote',
    'mdi': 'mdi:message-quote',
    'mdi:outline': 'mdi:message-quote-outline'
  },
  'lucide:message-square-reply': {
    'material-symbols': 'material-symbols:reply',
    'material-symbols:sharp': 'material-symbols:reply-sharp',
    'material-symbols:rounded': 'material-symbols:reply',
    'mdi': 'mdi:message-reply',
    'mdi:outline': 'mdi:message-reply-outline'
  },
  'lucide:message-square-share': {
    'material-symbols': 'material-symbols:share',
    'material-symbols:sharp': 'material-symbols:share-sharp',
    'material-symbols:rounded': 'material-symbols:share',
    'mdi': 'mdi:share',
    'mdi:outline': 'mdi:share-outline'
  },
  'lucide:message-square-text': {
    'material-symbols': 'material-symbols:chat',
    'material-symbols:sharp': 'material-symbols:chat-sharp',
    'material-symbols:rounded': 'material-symbols:chat',
    'mdi': 'mdi:message-text',
    'mdi:outline': 'mdi:message-text-outline'
  },
  'lucide:message-square-warning': {
    'material-symbols': 'material-symbols:warning',
    'material-symbols:sharp': 'material-symbols:warning-sharp',
    'material-symbols:rounded': 'material-symbols:warning',
    'mdi': 'mdi:message-alert',
    'mdi:outline': 'mdi:message-alert-outline'
  },
  'lucide:message-square-x': {
    'material-symbols': 'material-symbols:close',
    'material-symbols:sharp': 'material-symbols:close-sharp',
    'material-symbols:rounded': 'material-symbols:close',
    'mdi': 'mdi:message-remove',
    'mdi:outline': 'mdi:message-remove-outline'
  },
  'lucide:messages-square': {
    'material-symbols': 'material-symbols:question-answer',
    'material-symbols:sharp': 'material-symbols:question-answer-sharp',
    'material-symbols:rounded': 'material-symbols:question-answer',
    'mdi': 'mdi:message-text-multiple',
    'mdi:outline': 'mdi:message-text-multiple-outline'
  },
  'lucide:mic': {
    'material-symbols': 'material-symbols:mic',
    'material-symbols:sharp': 'material-symbols:mic-sharp',
    'material-symbols:rounded': 'material-symbols:mic',
    'mdi': 'mdi:microphone',
    'mdi:outline': 'mdi:microphone-outline'
  },
  'lucide:mic-off': {
    'material-symbols': 'material-symbols:mic-off',
    'material-symbols:sharp': 'material-symbols:mic-off-sharp',
    'material-symbols:rounded': 'material-symbols:mic-off',
    'mdi': 'mdi:microphone-off',
    'mdi:outline': 'mdi:microphone-off-outline'
  },
  'lucide:mic-vocal': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:microphone',
    'mdi:outline': 'mdi:microphone-outline'
  },
  'lucide:microchip': {
    'material-symbols': 'material-symbols:memory',
    'material-symbols:sharp': 'material-symbols:memory-sharp',
    'material-symbols:rounded': 'material-symbols:memory',
    'mdi': 'mdi:chip',
    'mdi:outline': 'mdi:chip-outline'
  },
  'lucide:microscope': {
    'material-symbols': 'material-symbols:biotech',
    'material-symbols:sharp': 'material-symbols:biotech-sharp',
    'material-symbols:rounded': 'material-symbols:biotech',
    'mdi': 'mdi:microscope',
    'mdi:outline': 'mdi:microscope-outline'
  },
  'lucide:microwave': {
    'material-symbols': 'material-symbols:microwave',
    'material-symbols:sharp': 'material-symbols:microwave-sharp',
    'material-symbols:rounded': 'material-symbols:microwave',
    'mdi': 'mdi:microwave',
    'mdi:outline': 'mdi:microwave-outline'
  },
  'lucide:milestone': {
    'material-symbols': 'material-symbols:flag',
    'material-symbols:sharp': 'material-symbols:flag-sharp',
    'material-symbols:rounded': 'material-symbols:flag',
    'mdi': 'mdi:flag-checkered',
    'mdi:outline': 'mdi:flag-checkered-outline'
  },
  'lucide:milk': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cup',
    'mdi:outline': 'mdi:cup-outline'
  },
  'lucide:milk-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cup-off',
    'mdi:outline': 'mdi:cup-off-outline'
  },
  'lucide:minimize': {
    'material-symbols': 'material-symbols:close-fullscreen',
    'material-symbols:sharp': 'material-symbols:close-fullscreen-sharp',
    'material-symbols:rounded': 'material-symbols:close-fullscreen',
    'mdi': 'mdi:arrow-collapse',
    'mdi:outline': 'mdi:arrow-collapse-outline'
  },
  'lucide:minimize-2': {
    'material-symbols': 'material-symbols:close-fullscreen',
    'material-symbols:sharp': 'material-symbols:close-fullscreen-sharp',
    'material-symbols:rounded': 'material-symbols:close-fullscreen',
    'mdi': 'mdi:arrow-collapse-all',
    'mdi:outline': 'mdi:arrow-collapse-all-outline'
  },
  'lucide:minus': {
    'material-symbols': 'material-symbols:remove',
    'material-symbols:sharp': 'material-symbols:remove-sharp',
    'material-symbols:rounded': 'material-symbols:remove',
    'mdi': 'mdi:minus',
    'mdi:outline': 'mdi:minus-outline'
  },
  'lucide:monitor': {
    'material-symbols': 'material-symbols:desktop-windows',
    'material-symbols:sharp': 'material-symbols:desktop-windows-sharp',
    'material-symbols:rounded': 'material-symbols:desktop-windows',
    'mdi': 'mdi:monitor',
    'mdi:outline': 'mdi:monitor-outline'
  },
  'lucide:monitor-check': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:monitor-check',
    'mdi:outline': 'mdi:monitor-check-outline'
  },
  'lucide:monitor-cloud': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cloud',
    'mdi:outline': 'mdi:cloud-outline'
  },
  'lucide:monitor-cog': {
    'material-symbols': 'material-symbols:settings',
    'material-symbols:sharp': 'material-symbols:settings-sharp',
    'material-symbols:rounded': 'material-symbols:settings',
    'mdi': 'mdi:monitor-cog',
    'mdi:outline': 'mdi:monitor-cog-outline'
  },
  'lucide:monitor-dot': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:monitor',
    'mdi:outline': 'mdi:monitor-outline'
  },
  'lucide:monitor-down': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:monitor-arrow-down',
    'mdi:outline': 'mdi:monitor-arrow-down-outline'
  },
  'lucide:monitor-off': {
    'material-symbols': 'material-symbols:monitor-off',
    'material-symbols:sharp': 'material-symbols:monitor-off-sharp',
    'material-symbols:rounded': 'material-symbols:monitor-off',
    'mdi': 'mdi:monitor-off',
    'mdi:outline': 'mdi:monitor-off-outline'
  },
  'lucide:monitor-pause': {
    'material-symbols': 'material-symbols:pause',
    'material-symbols:sharp': 'material-symbols:pause-sharp',
    'material-symbols:rounded': 'material-symbols:pause',
    'mdi': 'mdi:pause',
    'mdi:outline': 'mdi:pause-outline'
  },
  'lucide:monitor-play': {
    'material-symbols': 'material-symbols:play-arrow',
    'material-symbols:sharp': 'material-symbols:play-arrow-sharp',
    'material-symbols:rounded': 'material-symbols:play-arrow',
    'mdi': 'mdi:play',
    'mdi:outline': 'mdi:play-outline'
  },
  'lucide:monitor-smartphone': {
    'material-symbols': 'material-symbols:phone-android',
    'material-symbols:sharp': 'material-symbols:phone-android-sharp',
    'material-symbols:rounded': 'material-symbols:phone-android',
    'mdi': 'mdi:responsive',
    'mdi:outline': 'mdi:responsive-outline'
  },
  'lucide:monitor-speaker': {
    'material-symbols': 'material-symbols:speaker',
    'material-symbols:sharp': 'material-symbols:speaker-sharp',
    'material-symbols:rounded': 'material-symbols:speaker',
    'mdi': 'mdi:monitor-speaker',
    'mdi:outline': 'mdi:monitor-speaker-outline'
  },
  'lucide:monitor-stop': {
    'material-symbols': 'material-symbols:stop',
    'material-symbols:sharp': 'material-symbols:stop-sharp',
    'material-symbols:rounded': 'material-symbols:stop',
    'mdi': 'mdi:stop',
    'mdi:outline': 'mdi:stop-outline'
  },
  'lucide:monitor-up': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:monitor',
    'mdi:outline': 'mdi:monitor-outline'
  },
  'lucide:monitor-x': {
    'material-symbols': 'material-symbols:close',
    'material-symbols:sharp': 'material-symbols:close-sharp',
    'material-symbols:rounded': 'material-symbols:close',
    'mdi': 'mdi:monitor-off',
    'mdi:outline': 'mdi:monitor-off-outline'
  },
  'lucide:moon': {
    'material-symbols': 'material-symbols:dark-mode',
    'material-symbols:sharp': 'material-symbols:dark-mode-sharp',
    'material-symbols:rounded': 'material-symbols:dark-mode',
    'mdi': 'mdi:weather-night',
    'mdi:outline': 'mdi:weather-night-outline'
  },
  'lucide:moon-star': {
    'material-symbols': 'material-symbols:nights-stay',
    'material-symbols:sharp': 'material-symbols:nights-stay-sharp',
    'material-symbols:rounded': 'material-symbols:nights-stay',
    'mdi': 'mdi:moon-waning-crescent',
    'mdi:outline': 'mdi:moon-waning-crescent-outline'
  },
  'lucide:motorbike': {
    'material-symbols': 'material-symbols:two-wheeler',
    'material-symbols:sharp': 'material-symbols:two-wheeler-sharp',
    'material-symbols:rounded': 'material-symbols:two-wheeler',
    'mdi': 'mdi:motorbike',
    'mdi:outline': 'mdi:motorbike-outline'
  },
  'lucide:mountain': {
    'material-symbols': 'material-symbols:terrain',
    'material-symbols:sharp': 'material-symbols:terrain-sharp',
    'material-symbols:rounded': 'material-symbols:terrain',
    'mdi': 'mdi:image-filter-hdr',
    'mdi:outline': 'mdi:image-filter-hdr-outline'
  },
  'lucide:mountain-snow': {
    'material-symbols': 'material-symbols:ac-unit',
    'material-symbols:sharp': 'material-symbols:ac-unit-sharp',
    'material-symbols:rounded': 'material-symbols:ac-unit',
    'mdi': 'mdi:snowflake',
    'mdi:outline': 'mdi:snowflake-outline'
  },
  'lucide:mouse': {
    'material-symbols': 'material-symbols:mouse',
    'material-symbols:sharp': 'material-symbols:mouse-sharp',
    'material-symbols:rounded': 'material-symbols:mouse',
    'mdi': 'mdi:mouse',
    'mdi:outline': 'mdi:mouse-outline'
  },
  'lucide:mouse-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:mouse-off',
    'mdi:outline': 'mdi:mouse-off-outline'
  },
  'lucide:mouse-pointer': {
    'material-symbols': 'material-symbols:mouse',
    'material-symbols:sharp': 'material-symbols:mouse-sharp',
    'material-symbols:rounded': 'material-symbols:mouse',
    'mdi': 'mdi:cursor-default',
    'mdi:outline': 'mdi:cursor-default-outline'
  },
  'lucide:mouse-pointer-2': {
    'material-symbols': 'material-symbols:arrow-selector-tool',
    'material-symbols:sharp': 'material-symbols:arrow-selector-tool-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-selector-tool',
    'mdi': 'mdi:cursor-pointer',
    'mdi:outline': 'mdi:cursor-pointer-outline'
  },
  'lucide:mouse-pointer-2-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cursor-default-outline',
    'mdi:outline': 'mdi:cursor-default-outline-outline'
  },
  'lucide:mouse-pointer-ban': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cursor-default-click',
    'mdi:outline': 'mdi:cursor-default-click-outline'
  },
  'lucide:mouse-pointer-click': {
    'material-symbols': 'material-symbols:ads-click',
    'material-symbols:sharp': 'material-symbols:ads-click-sharp',
    'material-symbols:rounded': 'material-symbols:ads-click',
    'mdi': 'mdi:cursor-default-click',
    'mdi:outline': 'mdi:cursor-default-click-outline'
  },
  'lucide:move': {
    'material-symbols': 'material-symbols:open-with',
    'material-symbols:sharp': 'material-symbols:open-with-sharp',
    'material-symbols:rounded': 'material-symbols:open-with',
    'mdi': 'mdi:cursor-move',
    'mdi:outline': 'mdi:cursor-move-outline'
  },
  'lucide:move-3d': {
    'material-symbols': 'material-symbols:3d-rotation',
    'material-symbols:sharp': 'material-symbols:3d-rotation-sharp',
    'material-symbols:rounded': 'material-symbols:3d-rotation',
    'mdi': 'mdi:axis-arrow',
    'mdi:outline': 'mdi:axis-arrow'
  },
  'lucide:move-diagonal': {
    'material-symbols': 'material-symbols:open-with',
    'material-symbols:sharp': 'material-symbols:open-with-sharp',
    'material-symbols:rounded': 'material-symbols:open-with',
    'mdi': 'mdi:arrow-expand',
    'mdi:outline': 'mdi:arrow-expand-outline'
  },
  'lucide:move-diagonal-2': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-expand-all',
    'mdi:outline': 'mdi:arrow-expand-all-outline'
  },
  'lucide:move-down': {
    'material-symbols': 'material-symbols:arrow-downward',
    'material-symbols:sharp': 'material-symbols:arrow-downward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-downward',
    'mdi': 'mdi:arrow-down',
    'mdi:outline': 'mdi:arrow-down'
  },
  'lucide:move-down-left': {
    'material-symbols': 'material-symbols:south-west',
    'material-symbols:sharp': 'material-symbols:south-west-sharp',
    'material-symbols:rounded': 'material-symbols:south-west',
    'mdi': 'mdi:arrow-bottom-left',
    'mdi:outline': 'mdi:arrow-bottom-left'
  },
  'lucide:move-down-right': {
    'material-symbols': 'material-symbols:south-east',
    'material-symbols:sharp': 'material-symbols:south-east-sharp',
    'material-symbols:rounded': 'material-symbols:south-east',
    'mdi': 'mdi:arrow-bottom-right',
    'mdi:outline': 'mdi:arrow-bottom-right'
  },
  'lucide:move-horizontal': {
    'material-symbols': 'material-symbols:swap-horiz',
    'material-symbols:sharp': 'material-symbols:swap-horiz-sharp',
    'material-symbols:rounded': 'material-symbols:swap-horiz',
    'mdi': 'mdi:arrow-left-right',
    'mdi:outline': 'mdi:arrow-left-right-outline'
  },
  'lucide:move-left': {
    'material-symbols': 'material-symbols:arrow-back',
    'material-symbols:sharp': 'material-symbols:arrow-back-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-back',
    'mdi': 'mdi:arrow-left',
    'mdi:outline': 'mdi:arrow-left'
  },
  'lucide:move-right': {
    'material-symbols': 'material-symbols:arrow-forward',
    'material-symbols:sharp': 'material-symbols:arrow-forward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-forward',
    'mdi': 'mdi:arrow-right',
    'mdi:outline': 'mdi:arrow-right'
  },
  'lucide:move-up': {
    'material-symbols': 'material-symbols:arrow-upward',
    'material-symbols:sharp': 'material-symbols:arrow-upward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-upward',
    'mdi': 'mdi:arrow-up',
    'mdi:outline': 'mdi:arrow-up'
  },
  'lucide:move-up-left': {
    'material-symbols': 'material-symbols:north-west',
    'material-symbols:sharp': 'material-symbols:north-west-sharp',
    'material-symbols:rounded': 'material-symbols:north-west',
    'mdi': 'mdi:arrow-top-left',
    'mdi:outline': 'mdi:arrow-top-left'
  },
  'lucide:move-up-right': {
    'material-symbols': 'material-symbols:north-east',
    'material-symbols:sharp': 'material-symbols:north-east-sharp',
    'material-symbols:rounded': 'material-symbols:north-east',
    'mdi': 'mdi:arrow-top-right',
    'mdi:outline': 'mdi:arrow-top-right'
  },
  'lucide:move-vertical': {
    'material-symbols': 'material-symbols:swap-vert',
    'material-symbols:sharp': 'material-symbols:swap-vert-sharp',
    'material-symbols:rounded': 'material-symbols:swap-vert',
    'mdi': 'mdi:arrow-up-down',
    'mdi:outline': 'mdi:arrow-up-down-outline'
  },
  'lucide:music': {
    'material-symbols': 'material-symbols:music-note',
    'material-symbols:sharp': 'material-symbols:music-note-sharp',
    'material-symbols:rounded': 'material-symbols:music-note',
    'mdi': 'mdi:music',
    'mdi:outline': 'mdi:music-outline'
  },
  'lucide:music-2': {
    'material-symbols': 'material-symbols:library-music',
    'material-symbols:sharp': 'material-symbols:library-music-sharp',
    'material-symbols:rounded': 'material-symbols:library-music',
    'mdi': 'mdi:music-note',
    'mdi:outline': 'mdi:music-note-outline'
  },
  'lucide:music-3': {
    'material-symbols': 'material-symbols:audiotrack',
    'material-symbols:sharp': 'material-symbols:audiotrack-sharp',
    'material-symbols:rounded': 'material-symbols:audiotrack',
    'mdi': 'mdi:music-note-multiple',
    'mdi:outline': 'mdi:music-note-multiple-outline'
  },
  'lucide:music-4': {
    'material-symbols': 'material-symbols:album',
    'material-symbols:sharp': 'material-symbols:album-sharp',
    'material-symbols:rounded': 'material-symbols:album',
    'mdi': 'mdi:music-box-multiple',
    'mdi:outline': 'mdi:music-box-multiple-outline'
  },
  'lucide:navigation': {
    'material-symbols': 'material-symbols:navigation',
    'material-symbols:sharp': 'material-symbols:navigation-sharp',
    'material-symbols:rounded': 'material-symbols:navigation',
    'mdi': 'mdi:navigation',
    'mdi:outline': 'mdi:navigation-outline'
  },
  'lucide:navigation-2': {
    'material-symbols': 'material-symbols:explore',
    'material-symbols:sharp': 'material-symbols:explore-sharp',
    'material-symbols:rounded': 'material-symbols:explore',
    'mdi': 'mdi:navigation-variant',
    'mdi:outline': 'mdi:navigation-variant-outline'
  },
  'lucide:navigation-2-off': {
    'material-symbols': 'material-symbols:explore-off',
    'material-symbols:sharp': 'material-symbols:explore-off-sharp',
    'material-symbols:rounded': 'material-symbols:explore-off',
    'mdi': 'mdi:navigation-variant-outline',
    'mdi:outline': 'mdi:navigation-variant-outline-outline'
  },
  'lucide:navigation-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:navigation-outline',
    'mdi:outline': 'mdi:navigation-outline-outline'
  },
  'lucide:network': {
    'material-symbols': 'material-symbols:hub',
    'material-symbols:sharp': 'material-symbols:hub-sharp',
    'material-symbols:rounded': 'material-symbols:hub',
    'mdi': 'mdi:lan',
    'mdi:outline': 'mdi:lan-outline'
  },
  'lucide:newspaper': {
    'material-symbols': 'material-symbols:newspaper',
    'material-symbols:sharp': 'material-symbols:newspaper-sharp',
    'material-symbols:rounded': 'material-symbols:newspaper',
    'mdi': 'mdi:newspaper',
    'mdi:outline': 'mdi:newspaper-outline'
  },
  'lucide:nfc': {
    'material-symbols': 'material-symbols:nfc',
    'material-symbols:sharp': 'material-symbols:nfc-sharp',
    'material-symbols:rounded': 'material-symbols:nfc',
    'mdi': 'mdi:nfc',
    'mdi:outline': 'mdi:nfc-outline'
  },
  'lucide:non-binary': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:gender-non-binary',
    'mdi:outline': 'mdi:gender-non-binary-outline'
  },
  'lucide:notebook': {
    'material-symbols': 'material-symbols:book',
    'material-symbols:sharp': 'material-symbols:book-sharp',
    'material-symbols:rounded': 'material-symbols:book',
    'mdi': 'mdi:notebook',
    'mdi:outline': 'mdi:notebook-outline'
  },
  'lucide:notebook-pen': {
    'material-symbols': 'material-symbols:edit-note',
    'material-symbols:sharp': 'material-symbols:edit-note-sharp',
    'material-symbols:rounded': 'material-symbols:edit-note',
    'mdi': 'mdi:notebook-edit',
    'mdi:outline': 'mdi:notebook-edit-outline'
  },
  'lucide:notebook-tabs': {
    'material-symbols': 'material-symbols:tab',
    'material-symbols:sharp': 'material-symbols:tab-sharp',
    'material-symbols:rounded': 'material-symbols:tab',
    'mdi': 'mdi:notebook-multiple',
    'mdi:outline': 'mdi:notebook-multiple-outline'
  },
  'lucide:notebook-text': {
    'material-symbols': 'material-symbols:description',
    'material-symbols:sharp': 'material-symbols:description-sharp',
    'material-symbols:rounded': 'material-symbols:description',
    'mdi': 'mdi:notebook',
    'mdi:outline': 'mdi:notebook-outline'
  },
  'lucide:notepad-text': {
    'material-symbols': 'material-symbols:sticky-note-2',
    'material-symbols:sharp': 'material-symbols:sticky-note-2-sharp',
    'material-symbols:rounded': 'material-symbols:sticky-note-2',
    'mdi': 'mdi:note-text',
    'mdi:outline': 'mdi:note-text-outline'
  },
  'lucide:notepad-text-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:note-text-outline',
    'mdi:outline': 'mdi:note-text-outline-outline'
  },
  'lucide:nut': {
    'material-symbols': 'material-symbols:settings',
    'material-symbols:sharp': 'material-symbols:settings-sharp',
    'material-symbols:rounded': 'material-symbols:settings',
    'mdi': 'mdi:nut',
    'mdi:outline': 'mdi:nut-outline'
  },
  'lucide:nut-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-vertical-align-bottom',
    'mdi:outline': 'mdi:format-vertical-align-bottom'
  },
  'lucide:octagon': {
    'material-symbols': 'material-symbols:octagon',
    'material-symbols:sharp': 'material-symbols:octagon-sharp',
    'material-symbols:rounded': 'material-symbols:octagon',
    'mdi': 'mdi:octagon',
    'mdi:outline': 'mdi:octagon-outline'
  },
  'lucide:octagon-alert': {
    'material-symbols': 'material-symbols:error',
    'material-symbols:sharp': 'material-symbols:error-sharp',
    'material-symbols:rounded': 'material-symbols:error',
    'mdi': 'mdi:octagon-outline',
    'mdi:outline': 'mdi:octagon-outline-outline'
  },
  'lucide:octagon-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:minus-circle',
    'mdi:outline': 'mdi:minus-circle-outline'
  },
  'lucide:octagon-pause': {
    'material-symbols': 'material-symbols:pause',
    'material-symbols:sharp': 'material-symbols:pause-sharp',
    'material-symbols:rounded': 'material-symbols:pause',
    'mdi': 'mdi:pause-octagon',
    'mdi:outline': 'mdi:pause-octagon-outline'
  },
  'lucide:octagon-x': {
    'material-symbols': 'material-symbols:cancel',
    'material-symbols:sharp': 'material-symbols:cancel-sharp',
    'material-symbols:rounded': 'material-symbols:cancel',
    'mdi': 'mdi:close-octagon',
    'mdi:outline': 'mdi:close-octagon-outline'
  },
  'lucide:omega': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:omega',
    'mdi:outline': 'mdi:omega-outline'
  },
  'lucide:option': {
    'material-symbols': 'material-symbols:keyboard-option-key',
    'material-symbols:sharp': 'material-symbols:keyboard-option-key-sharp',
    'material-symbols:rounded': 'material-symbols:keyboard-option-key',
    'mdi': 'mdi:apple-keyboard-option',
    'mdi:outline': 'mdi:apple-keyboard-option-outline'
  },
  'lucide:orbit': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:orbit',
    'mdi:outline': 'mdi:orbit-outline'
  },
  'lucide:origami': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:origami',
    'mdi:outline': 'mdi:origami-outline'
  },
  'lucide:package': {
    'material-symbols': 'material-symbols:inventory-2',
    'material-symbols:sharp': 'material-symbols:inventory-2-sharp',
    'material-symbols:rounded': 'material-symbols:inventory-2',
    'mdi': 'mdi:package-variant',
    'mdi:outline': 'mdi:package-variant-outline'
  },
  'lucide:package-2': {
    'material-symbols': 'material-symbols:package-2',
    'material-symbols:sharp': 'material-symbols:package-2-sharp',
    'material-symbols:rounded': 'material-symbols:package-2',
    'mdi': 'mdi:package',
    'mdi:outline': 'mdi:package-outline'
  },
  'lucide:package-check': {
    'material-symbols': 'material-symbols:task-alt',
    'material-symbols:sharp': 'material-symbols:task-alt-sharp',
    'material-symbols:rounded': 'material-symbols:task-alt',
    'mdi': 'mdi:package-check',
    'mdi:outline': 'mdi:package-check-outline'
  },
  'lucide:package-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:package-variant-minus',
    'mdi:outline': 'mdi:package-variant-minus-outline'
  },
  'lucide:package-open': {
    'material-symbols': 'material-symbols:inventory',
    'material-symbols:sharp': 'material-symbols:inventory-sharp',
    'material-symbols:rounded': 'material-symbols:inventory',
    'mdi': 'mdi:package-variant-closed',
    'mdi:outline': 'mdi:package-variant-closed-outline'
  },
  'lucide:package-plus': {
    'material-symbols': 'material-symbols:add-box',
    'material-symbols:sharp': 'material-symbols:add-box-sharp',
    'material-symbols:rounded': 'material-symbols:add-box',
    'mdi': 'mdi:package-variant-plus',
    'mdi:outline': 'mdi:package-variant-plus-outline'
  },
  'lucide:package-search': {
    'material-symbols': 'material-symbols:search',
    'material-symbols:sharp': 'material-symbols:search-sharp',
    'material-symbols:rounded': 'material-symbols:search',
    'mdi': 'mdi:package-variant-search',
    'mdi:outline': 'mdi:package-variant-search-outline'
  },
  'lucide:package-x': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:package-variant-closed',
    'mdi:outline': 'mdi:package-variant-closed-outline'
  },
  'lucide:paint-bucket': {
    'material-symbols': 'material-symbols:format-color-fill',
    'material-symbols:sharp': 'material-symbols:format-color-fill-sharp',
    'material-symbols:rounded': 'material-symbols:format-color-fill',
    'mdi': 'mdi:format-color-fill',
    'mdi:outline': 'mdi:format-color-fill-outline'
  },
  'lucide:paint-roller': {
    'material-symbols': 'material-symbols:format-paint',
    'material-symbols:sharp': 'material-symbols:format-paint-sharp',
    'material-symbols:rounded': 'material-symbols:format-paint',
    'mdi': 'mdi:roller',
    'mdi:outline': 'mdi:roller-outline'
  },
  'lucide:paintbrush': {
    'material-symbols': 'material-symbols:brush',
    'material-symbols:sharp': 'material-symbols:brush-sharp',
    'material-symbols:rounded': 'material-symbols:brush',
    'mdi': 'mdi:brush',
    'mdi:outline': 'mdi:brush-outline'
  },
  'lucide:paintbrush-vertical': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:brush',
    'mdi:outline': 'mdi:brush-outline'
  },
  'lucide:palette': {
    'material-symbols': 'material-symbols:palette',
    'material-symbols:sharp': 'material-symbols:palette-sharp',
    'material-symbols:rounded': 'material-symbols:palette',
    'mdi': 'mdi:palette',
    'mdi:outline': 'mdi:palette-outline'
  },
  'lucide:panda': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:panda',
    'mdi:outline': 'mdi:panda-outline'
  },
  'lucide:panel-bottom': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:page-layout-footer',
    'mdi:outline': 'mdi:page-layout-footer-outline'
  },
  'lucide:panel-bottom-close': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dock-bottom',
    'mdi:outline': 'mdi:dock-bottom-outline'
  },
  'lucide:panel-bottom-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:page-layout-footer',
    'mdi:outline': 'mdi:page-layout-footer-outline'
  },
  'lucide:panel-bottom-open': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dock-bottom',
    'mdi:outline': 'mdi:dock-bottom-outline'
  },
  'lucide:panel-left': {
    'material-symbols': 'material-symbols:vertical-split',
    'material-symbols:sharp': 'material-symbols:vertical-split-sharp',
    'material-symbols:rounded': 'material-symbols:vertical-split',
    'mdi': 'mdi:page-layout-sidebar-left',
    'mdi:outline': 'mdi:page-layout-sidebar-left-outline'
  },
  'lucide:panel-left-close': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dock-left',
    'mdi:outline': 'mdi:dock-left-outline'
  },
  'lucide:panel-left-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:page-layout-sidebar-left',
    'mdi:outline': 'mdi:page-layout-sidebar-left-outline'
  },
  'lucide:panel-left-open': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dock-left',
    'mdi:outline': 'mdi:dock-left-outline'
  },
  'lucide:panel-left-right-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:page-layout-sidebar-left',
    'mdi:outline': 'mdi:page-layout-sidebar-left-outline'
  },
  'lucide:panel-right': {
    'material-symbols': 'material-symbols:vertical-split',
    'material-symbols:sharp': 'material-symbols:vertical-split-sharp',
    'material-symbols:rounded': 'material-symbols:vertical-split',
    'mdi': 'mdi:page-layout-sidebar-right',
    'mdi:outline': 'mdi:page-layout-sidebar-right-outline'
  },
  'lucide:panel-right-close': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dock-right',
    'mdi:outline': 'mdi:dock-right-outline'
  },
  'lucide:panel-right-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:page-layout-sidebar-right',
    'mdi:outline': 'mdi:page-layout-sidebar-right-outline'
  },
  'lucide:panel-right-open': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dock-right',
    'mdi:outline': 'mdi:dock-right-outline'
  },
  'lucide:panel-top': {
    'material-symbols': 'material-symbols:horizontal-split',
    'material-symbols:sharp': 'material-symbols:horizontal-split-sharp',
    'material-symbols:rounded': 'material-symbols:horizontal-split',
    'mdi': 'mdi:page-layout-header',
    'mdi:outline': 'mdi:page-layout-header-outline'
  },
  'lucide:panel-top-bottom-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:page-layout-header',
    'mdi:outline': 'mdi:page-layout-header-outline'
  },
  'lucide:panel-top-close': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dock-top',
    'mdi:outline': 'mdi:dock-top-outline'
  },
  'lucide:panel-top-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:page-layout-header',
    'mdi:outline': 'mdi:page-layout-header-outline'
  },
  'lucide:panel-top-open': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dock-top',
    'mdi:outline': 'mdi:dock-top-outline'
  },
  'lucide:panels-left-bottom': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:page-layout-sidebar-left',
    'mdi:outline': 'mdi:page-layout-sidebar-left-outline'
  },
  'lucide:panels-right-bottom': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:page-layout-sidebar-right',
    'mdi:outline': 'mdi:page-layout-sidebar-right-outline'
  },
  'lucide:panels-top-left': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:page-layout-header',
    'mdi:outline': 'mdi:page-layout-header-outline'
  },
  'lucide:paperclip': {
    'material-symbols': 'material-symbols:attach-file',
    'material-symbols:sharp': 'material-symbols:attach-file-sharp',
    'material-symbols:rounded': 'material-symbols:attach-file',
    'mdi': 'mdi:paperclip',
    'mdi:outline': 'mdi:paperclip-outline'
  },
  'lucide:parentheses': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:code-parentheses',
    'mdi:outline': 'mdi:code-parentheses-outline'
  },
  'lucide:parking-meter': {
    'material-symbols': 'material-symbols:local-parking',
    'material-symbols:sharp': 'material-symbols:local-parking-sharp',
    'material-symbols:rounded': 'material-symbols:local-parking',
    'mdi': 'mdi:parking',
    'mdi:outline': 'mdi:parking-outline'
  },
  'lucide:party-popper': {
    'material-symbols': 'material-symbols:celebration',
    'material-symbols:sharp': 'material-symbols:celebration-sharp',
    'material-symbols:rounded': 'material-symbols:celebration',
    'mdi': 'mdi:party-popper',
    'mdi:outline': 'mdi:party-popper-outline'
  },
  'lucide:pause': {
    'material-symbols': 'material-symbols:pause',
    'material-symbols:sharp': 'material-symbols:pause-sharp',
    'material-symbols:rounded': 'material-symbols:pause',
    'mdi': 'mdi:pause',
    'mdi:outline': 'mdi:pause-outline'
  },
  'lucide:paw-print': {
    'material-symbols': 'material-symbols:pets',
    'material-symbols:sharp': 'material-symbols:pets-sharp',
    'material-symbols:rounded': 'material-symbols:pets',
    'mdi': 'mdi:paw',
    'mdi:outline': 'mdi:paw-outline'
  },
  'lucide:pc-case': {
    'material-symbols': 'material-symbols:computer',
    'material-symbols:sharp': 'material-symbols:computer-sharp',
    'material-symbols:rounded': 'material-symbols:computer',
    'mdi': 'mdi:desktop-tower',
    'mdi:outline': 'mdi:desktop-tower-outline'
  },
  'lucide:pen': {
    'material-symbols': 'material-symbols:edit',
    'material-symbols:sharp': 'material-symbols:edit-sharp',
    'material-symbols:rounded': 'material-symbols:edit',
    'mdi': 'mdi:pen',
    'mdi:outline': 'mdi:pen-outline'
  },
  'lucide:pen-line': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pen',
    'mdi:outline': 'mdi:pen-outline'
  },
  'lucide:pen-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pen-off',
    'mdi:outline': 'mdi:pen-off-outline'
  },
  'lucide:pen-tool': {
    'material-symbols': 'material-symbols:draw',
    'material-symbols:sharp': 'material-symbols:draw-sharp',
    'material-symbols:rounded': 'material-symbols:draw',
    'mdi': 'mdi:vector-pen',
    'mdi:outline': 'mdi:vector-pen-outline'
  },
  'lucide:pencil': {
    'material-symbols': 'material-symbols:edit',
    'material-symbols:sharp': 'material-symbols:edit-sharp',
    'material-symbols:rounded': 'material-symbols:edit',
    'mdi': 'mdi:pencil',
    'mdi:outline': 'mdi:pencil-outline'
  },
  'lucide:pencil-line': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pencil',
    'mdi:outline': 'mdi:pencil-outline'
  },
  'lucide:pencil-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pencil-off',
    'mdi:outline': 'mdi:pencil-off-outline'
  },
  'lucide:pencil-ruler': {
    'material-symbols': 'material-symbols:design-services',
    'material-symbols:sharp': 'material-symbols:design-services-sharp',
    'material-symbols:rounded': 'material-symbols:design-services',
    'mdi': 'mdi:pencil-ruler',
    'mdi:outline': 'mdi:pencil-ruler-outline'
  },
  'lucide:pentagon': {
    'material-symbols': 'material-symbols:pentagon',
    'material-symbols:sharp': 'material-symbols:pentagon-sharp',
    'material-symbols:rounded': 'material-symbols:pentagon',
    'mdi': 'mdi:pentagon',
    'mdi:outline': 'mdi:pentagon-outline'
  },
  'lucide:percent': {
    'material-symbols': 'material-symbols:percent',
    'material-symbols:sharp': 'material-symbols:percent-sharp',
    'material-symbols:rounded': 'material-symbols:percent',
    'mdi': 'mdi:percent',
    'mdi:outline': 'mdi:percent-outline'
  },
  'lucide:person-standing': {
    'material-symbols': 'material-symbols:accessibility-new',
    'material-symbols:sharp': 'material-symbols:accessibility-new-sharp',
    'material-symbols:rounded': 'material-symbols:accessibility-new',
    'mdi': 'mdi:human',
    'mdi:outline': 'mdi:human-outline'
  },
  'lucide:philippine-peso': {
    'material-symbols': 'material-symbols:currency-peso',
    'material-symbols:sharp': 'material-symbols:currency-peso-sharp',
    'material-symbols:rounded': 'material-symbols:currency-peso',
    'mdi': 'mdi:currency-php',
    'mdi:outline': 'mdi:currency-php-outline'
  },
  'lucide:phone': {
    'material-symbols': 'material-symbols:phone',
    'material-symbols:sharp': 'material-symbols:phone-sharp',
    'material-symbols:rounded': 'material-symbols:phone',
    'mdi': 'mdi:phone',
    'mdi:outline': 'mdi:phone-outline'
  },
  'lucide:phone-call': {
    'material-symbols': 'material-symbols:call',
    'material-symbols:sharp': 'material-symbols:call-sharp',
    'material-symbols:rounded': 'material-symbols:call',
    'mdi': 'mdi:phone-in-talk',
    'mdi:outline': 'mdi:phone-in-talk-outline'
  },
  'lucide:phone-forwarded': {
    'material-symbols': 'material-symbols:call-made',
    'material-symbols:sharp': 'material-symbols:call-made-sharp',
    'material-symbols:rounded': 'material-symbols:call-made',
    'mdi': 'mdi:phone-forward',
    'mdi:outline': 'mdi:phone-forward-outline'
  },
  'lucide:phone-incoming': {
    'material-symbols': 'material-symbols:call-received',
    'material-symbols:sharp': 'material-symbols:call-received-sharp',
    'material-symbols:rounded': 'material-symbols:call-received',
    'mdi': 'mdi:phone-incoming',
    'mdi:outline': 'mdi:phone-incoming-outline'
  },
  'lucide:phone-missed': {
    'material-symbols': 'material-symbols:phone-missed',
    'material-symbols:sharp': 'material-symbols:phone-missed-sharp',
    'material-symbols:rounded': 'material-symbols:phone-missed',
    'mdi': 'mdi:phone-missed',
    'mdi:outline': 'mdi:phone-missed-outline'
  },
  'lucide:phone-off': {
    'material-symbols': 'material-symbols:phone-disabled',
    'material-symbols:sharp': 'material-symbols:phone-disabled-sharp',
    'material-symbols:rounded': 'material-symbols:phone-disabled',
    'mdi': 'mdi:phone-off',
    'mdi:outline': 'mdi:phone-off-outline'
  },
  'lucide:phone-outgoing': {
    'material-symbols': 'material-symbols:call-made',
    'material-symbols:sharp': 'material-symbols:call-made-sharp',
    'material-symbols:rounded': 'material-symbols:call-made',
    'mdi': 'mdi:phone-outgoing',
    'mdi:outline': 'mdi:phone-outgoing-outline'
  },
  'lucide:pi': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pi',
    'mdi:outline': 'mdi:pi-outline'
  },
  'lucide:piano': {
    'material-symbols': 'material-symbols:piano',
    'material-symbols:sharp': 'material-symbols:piano-sharp',
    'material-symbols:rounded': 'material-symbols:piano',
    'mdi': 'mdi:piano',
    'mdi:outline': 'mdi:piano-outline'
  },
  'lucide:pickaxe': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pickaxe',
    'mdi:outline': 'mdi:pickaxe-outline'
  },
  'lucide:picture-in-picture': {
    'material-symbols': 'material-symbols:picture-in-picture',
    'material-symbols:sharp': 'material-symbols:picture-in-picture-sharp',
    'material-symbols:rounded': 'material-symbols:picture-in-picture',
    'mdi': 'mdi:picture-in-picture-bottom-right',
    'mdi:outline': 'mdi:picture-in-picture-bottom-right-outline'
  },
  'lucide:picture-in-picture-2': {
    'material-symbols': 'material-symbols:picture-in-picture-alt',
    'material-symbols:sharp': 'material-symbols:picture-in-picture-alt-sharp',
    'material-symbols:rounded': 'material-symbols:picture-in-picture-alt',
    'mdi': 'mdi:picture-in-picture-top-right',
    'mdi:outline': 'mdi:picture-in-picture-top-right-outline'
  },
  'lucide:piggy-bank': {
    'material-symbols': 'material-symbols:savings',
    'material-symbols:sharp': 'material-symbols:savings-sharp',
    'material-symbols:rounded': 'material-symbols:savings',
    'mdi': 'mdi:piggy-bank',
    'mdi:outline': 'mdi:piggy-bank-outline'
  },
  'lucide:pilcrow': {
    'material-symbols': 'material-symbols:format-paragraph',
    'material-symbols:sharp': 'material-symbols:format-paragraph-sharp',
    'material-symbols:rounded': 'material-symbols:format-paragraph',
    'mdi': 'mdi:format-pilcrow',
    'mdi:outline': 'mdi:format-pilcrow'
  },
  'lucide:pilcrow-left': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-pilcrow',
    'mdi:outline': 'mdi:format-pilcrow'
  },
  'lucide:pilcrow-right': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-pilcrow',
    'mdi:outline': 'mdi:format-pilcrow'
  },
  'lucide:pill': {
    'material-symbols': 'material-symbols:medication',
    'material-symbols:sharp': 'material-symbols:medication-sharp',
    'material-symbols:rounded': 'material-symbols:medication',
    'mdi': 'mdi:pill',
    'mdi:outline': 'mdi:pill-outline'
  },
  'lucide:pill-bottle': {
    'material-symbols': 'material-symbols:pill',
    'material-symbols:sharp': 'material-symbols:pill-sharp',
    'material-symbols:rounded': 'material-symbols:pill',
    'mdi': 'mdi:bottle-tonic-plus',
    'mdi:outline': 'mdi:bottle-tonic-plus-outline'
  },
  'lucide:pin': {
    'material-symbols': 'material-symbols:push-pin',
    'material-symbols:sharp': 'material-symbols:push-pin-sharp',
    'material-symbols:rounded': 'material-symbols:push-pin',
    'mdi': 'mdi:pin',
    'mdi:outline': 'mdi:pin-outline'
  },
  'lucide:pin-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pin-off',
    'mdi:outline': 'mdi:pin-off-outline'
  },
  'lucide:pipette': {
    'material-symbols': 'material-symbols:colorize',
    'material-symbols:sharp': 'material-symbols:colorize-sharp',
    'material-symbols:rounded': 'material-symbols:colorize',
    'mdi': 'mdi:eyedropper',
    'mdi:outline': 'mdi:eyedropper-outline'
  },
  'lucide:pizza': {
    'material-symbols': 'material-symbols:local-pizza',
    'material-symbols:sharp': 'material-symbols:local-pizza-sharp',
    'material-symbols:rounded': 'material-symbols:local-pizza',
    'mdi': 'mdi:pizza',
    'mdi:outline': 'mdi:pizza-outline'
  },
  'lucide:plane': {
    'material-symbols': 'material-symbols:flight',
    'material-symbols:sharp': 'material-symbols:flight-sharp',
    'material-symbols:rounded': 'material-symbols:flight',
    'mdi': 'mdi:airplane',
    'mdi:outline': 'mdi:airplane-outline'
  },
  'lucide:plane-landing': {
    'material-symbols': 'material-symbols:flight-land',
    'material-symbols:sharp': 'material-symbols:flight-land-sharp',
    'material-symbols:rounded': 'material-symbols:flight-land',
    'mdi': 'mdi:airplane-landing',
    'mdi:outline': 'mdi:airplane-landing-outline'
  },
  'lucide:plane-takeoff': {
    'material-symbols': 'material-symbols:flight-takeoff',
    'material-symbols:sharp': 'material-symbols:flight-takeoff-sharp',
    'material-symbols:rounded': 'material-symbols:flight-takeoff',
    'mdi': 'mdi:airplane-takeoff',
    'mdi:outline': 'mdi:airplane-takeoff-outline'
  },
  'lucide:play': {
    'material-symbols': 'material-symbols:play-arrow',
    'material-symbols:sharp': 'material-symbols:play-arrow-sharp',
    'material-symbols:rounded': 'material-symbols:play-arrow',
    'mdi': 'mdi:play',
    'mdi:outline': 'mdi:play-outline'
  },
  'lucide:plug': {
    'material-symbols': 'material-symbols:power',
    'material-symbols:sharp': 'material-symbols:power-sharp',
    'material-symbols:rounded': 'material-symbols:power',
    'mdi': 'mdi:power-plug',
    'mdi:outline': 'mdi:power-plug-outline'
  },
  'lucide:plug-2': {
    'material-symbols': 'material-symbols:electrical-services',
    'material-symbols:sharp': 'material-symbols:electrical-services-sharp',
    'material-symbols:rounded': 'material-symbols:electrical-services',
    'mdi': 'mdi:power-socket',
    'mdi:outline': 'mdi:power-socket-outline'
  },
  'lucide:plug-zap': {
    'material-symbols': 'material-symbols:bolt',
    'material-symbols:sharp': 'material-symbols:bolt-sharp',
    'material-symbols:rounded': 'material-symbols:bolt',
    'mdi': 'mdi:power-plug',
    'mdi:outline': 'mdi:power-plug-outline'
  },
  'lucide:plus': {
    'material-symbols': 'material-symbols:add',
    'material-symbols:sharp': 'material-symbols:add-sharp',
    'material-symbols:rounded': 'material-symbols:add',
    'mdi': 'mdi:plus',
    'mdi:outline': 'mdi:plus-outline'
  },
  'lucide:pocket': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:distribute-horizontal-center',
    'mdi:outline': 'mdi:distribute-horizontal-center'
  },
  'lucide:pocket-knife': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:knife',
    'mdi:outline': 'mdi:knife-outline'
  },
  'lucide:podcast': {
    'material-symbols': 'material-symbols:podcasts',
    'material-symbols:sharp': 'material-symbols:podcasts-sharp',
    'material-symbols:rounded': 'material-symbols:podcasts',
    'mdi': 'mdi:podcast',
    'mdi:outline': 'mdi:podcast-outline'
  },
  'lucide:pointer': {
    'material-symbols': 'material-symbols:near-me',
    'material-symbols:sharp': 'material-symbols:near-me-sharp',
    'material-symbols:rounded': 'material-symbols:near-me',
    'mdi': 'mdi:cursor-pointer',
    'mdi:outline': 'mdi:cursor-pointer-outline'
  },
  'lucide:pointer-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cursor-default-outline',
    'mdi:outline': 'mdi:cursor-default-outline-outline'
  },
  'lucide:popcorn': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:popcorn',
    'mdi:outline': 'mdi:popcorn-outline'
  },
  'lucide:popsicle': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:ice-pop',
    'mdi:outline': 'mdi:ice-pop-outline'
  },
  'lucide:pound-sterling': {
    'material-symbols': 'material-symbols:currency-pound',
    'material-symbols:sharp': 'material-symbols:currency-pound-sharp',
    'material-symbols:rounded': 'material-symbols:currency-pound',
    'mdi': 'mdi:currency-gbp',
    'mdi:outline': 'mdi:currency-gbp-outline'
  },
  'lucide:power': {
    'material-symbols': 'material-symbols:power-settings-new',
    'material-symbols:sharp': 'material-symbols:power-settings-new-sharp',
    'material-symbols:rounded': 'material-symbols:power-settings-new',
    'mdi': 'mdi:power',
    'mdi:outline': 'mdi:power-outline'
  },
  'lucide:power-off': {
    'material-symbols': 'material-symbols:power-off',
    'material-symbols:sharp': 'material-symbols:power-off-sharp',
    'material-symbols:rounded': 'material-symbols:power-off',
    'mdi': 'mdi:power-off',
    'mdi:outline': 'mdi:power-off-outline'
  },
  'lucide:presentation': {
    'material-symbols': 'material-symbols:presentation',
    'material-symbols:sharp': 'material-symbols:presentation-sharp',
    'material-symbols:rounded': 'material-symbols:presentation',
    'mdi': 'mdi:presentation',
    'mdi:outline': 'mdi:presentation-outline'
  },
  'lucide:printer': {
    'material-symbols': 'material-symbols:print',
    'material-symbols:sharp': 'material-symbols:print-sharp',
    'material-symbols:rounded': 'material-symbols:print',
    'mdi': 'mdi:printer',
    'mdi:outline': 'mdi:printer-outline'
  },
  'lucide:printer-check': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:printer-check',
    'mdi:outline': 'mdi:printer-check-outline'
  },
  'lucide:projector': {
    'material-symbols': 'material-symbols:videocam',
    'material-symbols:sharp': 'material-symbols:videocam-sharp',
    'material-symbols:rounded': 'material-symbols:videocam',
    'mdi': 'mdi:projector',
    'mdi:outline': 'mdi:projector-outline'
  },
  'lucide:proportions': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:aspect-ratio',
    'mdi:outline': 'mdi:aspect-ratio-outline'
  },
  'lucide:puzzle': {
    'material-symbols': 'material-symbols:extension',
    'material-symbols:sharp': 'material-symbols:extension-sharp',
    'material-symbols:rounded': 'material-symbols:extension',
    'mdi': 'mdi:puzzle',
    'mdi:outline': 'mdi:puzzle-outline'
  },
  'lucide:pyramid': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pyramid',
    'mdi:outline': 'mdi:pyramid-outline'
  },
  'lucide:qr-code': {
    'material-symbols': 'material-symbols:qr-code-2',
    'material-symbols:sharp': 'material-symbols:qr-code-2-sharp',
    'material-symbols:rounded': 'material-symbols:qr-code-2',
    'mdi': 'mdi:qrcode',
    'mdi:outline': 'mdi:qrcode-outline'
  },
  'lucide:quote': {
    'material-symbols': 'material-symbols:format-quote',
    'material-symbols:sharp': 'material-symbols:format-quote-sharp',
    'material-symbols:rounded': 'material-symbols:format-quote',
    'mdi': 'mdi:format-quote-close',
    'mdi:outline': 'mdi:format-quote-close'
  },
  'lucide:rabbit': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:rabbit',
    'mdi:outline': 'mdi:rabbit-outline'
  },
  'lucide:radar': {
    'material-symbols': 'material-symbols:radar',
    'material-symbols:sharp': 'material-symbols:radar-sharp',
    'material-symbols:rounded': 'material-symbols:radar',
    'mdi': 'mdi:radar',
    'mdi:outline': 'mdi:radar-outline'
  },
  'lucide:radiation': {
    'material-symbols': 'material-symbols:warning',
    'material-symbols:sharp': 'material-symbols:warning-sharp',
    'material-symbols:rounded': 'material-symbols:warning',
    'mdi': 'mdi:radioactive',
    'mdi:outline': 'mdi:radioactive-outline'
  },
  'lucide:radical': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:square-root',
    'mdi:outline': 'mdi:square-root-outline'
  },
  'lucide:radio': {
    'material-symbols': 'material-symbols:radio',
    'material-symbols:sharp': 'material-symbols:radio-sharp',
    'material-symbols:rounded': 'material-symbols:radio',
    'mdi': 'mdi:radio',
    'mdi:outline': 'mdi:radio-outline'
  },
  'lucide:radio-receiver': {
    'material-symbols': 'material-symbols:radio',
    'material-symbols:sharp': 'material-symbols:radio-sharp',
    'material-symbols:rounded': 'material-symbols:radio',
    'mdi': 'mdi:radio',
    'mdi:outline': 'mdi:radio-outline'
  },
  'lucide:radio-tower': {
    'material-symbols': 'material-symbols:cell-tower',
    'material-symbols:sharp': 'material-symbols:cell-tower-sharp',
    'material-symbols:rounded': 'material-symbols:cell-tower',
    'mdi': 'mdi:radio-tower',
    'mdi:outline': 'mdi:radio-tower-outline'
  },
  'lucide:radius': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:radius',
    'mdi:outline': 'mdi:radius-outline'
  },
  'lucide:rail-symbol': {
    'material-symbols': 'material-symbols:train',
    'material-symbols:sharp': 'material-symbols:train-sharp',
    'material-symbols:rounded': 'material-symbols:train',
    'mdi': 'mdi:train',
    'mdi:outline': 'mdi:train-outline'
  },
  'lucide:rainbow': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:weather-rainbow',
    'mdi:outline': 'mdi:weather-rainbow-outline'
  },
  'lucide:rat': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:distribute-horizontal-right',
    'mdi:outline': 'mdi:distribute-horizontal-right'
  },
  'lucide:ratio': {
    'material-symbols': 'material-symbols:aspect-ratio',
    'material-symbols:sharp': 'material-symbols:aspect-ratio-sharp',
    'material-symbols:rounded': 'material-symbols:aspect-ratio',
    'mdi': 'mdi:aspect-ratio',
    'mdi:outline': 'mdi:aspect-ratio-outline'
  },
  'lucide:receipt': {
    'material-symbols': 'material-symbols:receipt',
    'material-symbols:sharp': 'material-symbols:receipt-sharp',
    'material-symbols:rounded': 'material-symbols:receipt',
    'mdi': 'mdi:receipt',
    'mdi:outline': 'mdi:receipt-outline'
  },
  'lucide:receipt-cent': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:receipt',
    'mdi:outline': 'mdi:receipt-outline'
  },
  'lucide:receipt-euro': {
    'material-symbols': 'material-symbols:euro',
    'material-symbols:sharp': 'material-symbols:euro-sharp',
    'material-symbols:rounded': 'material-symbols:euro',
    'mdi': 'mdi:receipt',
    'mdi:outline': 'mdi:receipt-outline'
  },
  'lucide:receipt-indian-rupee': {
    'material-symbols': 'material-symbols:currency-rupee',
    'material-symbols:sharp': 'material-symbols:currency-rupee-sharp',
    'material-symbols:rounded': 'material-symbols:currency-rupee',
    'mdi': 'mdi:receipt',
    'mdi:outline': 'mdi:receipt-outline'
  },
  'lucide:receipt-japanese-yen': {
    'material-symbols': 'material-symbols:currency-yen',
    'material-symbols:sharp': 'material-symbols:currency-yen-sharp',
    'material-symbols:rounded': 'material-symbols:currency-yen',
    'mdi': 'mdi:receipt',
    'mdi:outline': 'mdi:receipt-outline'
  },
  'lucide:receipt-pound-sterling': {
    'material-symbols': 'material-symbols:currency-pound',
    'material-symbols:sharp': 'material-symbols:currency-pound-sharp',
    'material-symbols:rounded': 'material-symbols:currency-pound',
    'mdi': 'mdi:receipt',
    'mdi:outline': 'mdi:receipt-outline'
  },
  'lucide:receipt-russian-ruble': {
    'material-symbols': 'material-symbols:currency-ruble',
    'material-symbols:sharp': 'material-symbols:currency-ruble-sharp',
    'material-symbols:rounded': 'material-symbols:currency-ruble',
    'mdi': 'mdi:receipt',
    'mdi:outline': 'mdi:receipt-outline'
  },
  'lucide:receipt-swiss-franc': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:receipt',
    'mdi:outline': 'mdi:receipt-outline'
  },
  'lucide:receipt-text': {
    'material-symbols': 'material-symbols:receipt-long',
    'material-symbols:sharp': 'material-symbols:receipt-long-sharp',
    'material-symbols:rounded': 'material-symbols:receipt-long',
    'mdi': 'mdi:receipt-text',
    'mdi:outline': 'mdi:receipt-text-outline'
  },
  'lucide:receipt-turkish-lira': {
    'material-symbols': 'material-symbols:currency-lira',
    'material-symbols:sharp': 'material-symbols:currency-lira-sharp',
    'material-symbols:rounded': 'material-symbols:currency-lira',
    'mdi': 'mdi:receipt',
    'mdi:outline': 'mdi:receipt-outline'
  },
  'lucide:rectangle-circle': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:panorama-horizontal',
    'mdi:outline': 'mdi:panorama-horizontal-outline'
  },
  'lucide:rectangle-ellipsis': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:dots-horizontal',
    'mdi:outline': 'mdi:dots-horizontal-outline'
  },
  'lucide:rectangle-goggles': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:goggles',
    'mdi:outline': 'mdi:goggles-outline'
  },
  'lucide:rectangle-horizontal': {
    'material-symbols': 'material-symbols:rectangle',
    'material-symbols:sharp': 'material-symbols:rectangle-sharp',
    'material-symbols:rounded': 'material-symbols:rectangle',
    'mdi': 'mdi:rectangle',
    'mdi:outline': 'mdi:rectangle-outline'
  },
  'lucide:rectangle-vertical': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:rectangle',
    'mdi:outline': 'mdi:rectangle-outline'
  },
  'lucide:recycle': {
    'material-symbols': 'material-symbols:recycling',
    'material-symbols:sharp': 'material-symbols:recycling-sharp',
    'material-symbols:rounded': 'material-symbols:recycling',
    'mdi': 'mdi:recycle',
    'mdi:outline': 'mdi:recycle-outline'
  },
  'lucide:redo': {
    'material-symbols': 'material-symbols:redo',
    'material-symbols:sharp': 'material-symbols:redo-sharp',
    'material-symbols:rounded': 'material-symbols:redo',
    'mdi': 'mdi:redo',
    'mdi:outline': 'mdi:redo-outline'
  },
  'lucide:redo-2': {
    'material-symbols': 'material-symbols:redo',
    'material-symbols:sharp': 'material-symbols:redo-sharp',
    'material-symbols:rounded': 'material-symbols:redo',
    'mdi': 'mdi:redo-variant',
    'mdi:outline': 'mdi:redo-variant-outline'
  },
  'lucide:redo-dot': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:redo',
    'mdi:outline': 'mdi:redo-outline'
  },
  'lucide:refresh-ccw': {
    'material-symbols': 'material-symbols:refresh',
    'material-symbols:sharp': 'material-symbols:refresh',
    'material-symbols:rounded': 'material-symbols:refresh-rounded',
    'mdi': 'mdi:refresh',
    'mdi:outline': 'mdi:refresh-outline'
  },
  'lucide:refresh-ccw-dot': {
    'material-symbols': 'refresh',
    'material-symbols:sharp': 'refresh',
    'material-symbols:rounded': 'refresh-rounded',
    'mdi': 'mdi:refresh',
    'mdi:outline': 'mdi:refresh-outline'
  },
  'lucide:refresh-cw': {
    'material-symbols': 'material-symbols:refresh',
    'material-symbols:sharp': 'material-symbols:refresh',
    'material-symbols:rounded': 'material-symbols:refresh-rounded',
    'mdi': 'mdi:refresh',
    'mdi:outline': 'mdi:refresh-outline'
  },
  'lucide:refresh-cw-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:refresh-off',
    'mdi:outline': 'mdi:refresh-off-outline'
  },
  'lucide:refrigerator': {
    'material-symbols': 'material-symbols:kitchen',
    'material-symbols:sharp': 'material-symbols:kitchen-sharp',
    'material-symbols:rounded': 'material-symbols:kitchen',
    'mdi': 'mdi:fridge',
    'mdi:outline': 'mdi:fridge-outline'
  },
  'lucide:regex': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:regex',
    'mdi:outline': 'mdi:regex-outline'
  },
  'lucide:remove-formatting': {
    'material-symbols': 'material-symbols:format-clear',
    'material-symbols:sharp': 'material-symbols:format-clear-sharp',
    'material-symbols:rounded': 'material-symbols:format-clear',
    'mdi': 'mdi:format-clear',
    'mdi:outline': 'mdi:format-clear'
  },
  'lucide:repeat': {
    'material-symbols': 'material-symbols:repeat',
    'material-symbols:sharp': 'material-symbols:repeat-sharp',
    'material-symbols:rounded': 'material-symbols:repeat',
    'mdi': 'mdi:repeat',
    'mdi:outline': 'mdi:repeat-outline'
  },
  'lucide:repeat-1': {
    'material-symbols': 'material-symbols:repeat-one',
    'material-symbols:sharp': 'material-symbols:repeat-one-sharp',
    'material-symbols:rounded': 'material-symbols:repeat-one',
    'mdi': 'mdi:repeat-once',
    'mdi:outline': 'mdi:repeat-once-outline'
  },
  'lucide:repeat-2': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:repeat',
    'mdi:outline': 'mdi:repeat-outline'
  },
  'lucide:replace': {
    'material-symbols': 'material-symbols:find-replace',
    'material-symbols:sharp': 'material-symbols:find-replace-sharp',
    'material-symbols:rounded': 'material-symbols:find-replace',
    'mdi': 'mdi:find-replace',
    'mdi:outline': 'mdi:find-replace-outline'
  },
  'lucide:replace-all': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:find-replace',
    'mdi:outline': 'mdi:find-replace-outline'
  },
  'lucide:reply': {
    'material-symbols': 'material-symbols:reply',
    'material-symbols:sharp': 'material-symbols:reply-sharp',
    'material-symbols:rounded': 'material-symbols:reply',
    'mdi': 'mdi:reply',
    'mdi:outline': 'mdi:reply-outline'
  },
  'lucide:reply-all': {
    'material-symbols': 'material-symbols:reply-all',
    'material-symbols:sharp': 'material-symbols:reply-all-sharp',
    'material-symbols:rounded': 'material-symbols:reply-all',
    'mdi': 'mdi:reply-all',
    'mdi:outline': 'mdi:reply-all-outline'
  },
  'lucide:rewind': {
    'material-symbols': 'material-symbols:fast-rewind',
    'material-symbols:sharp': 'material-symbols:fast-rewind-sharp',
    'material-symbols:rounded': 'material-symbols:fast-rewind',
    'mdi': 'mdi:rewind',
    'mdi:outline': 'mdi:rewind-outline'
  },
  'lucide:ribbon': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:ribbon',
    'mdi:outline': 'mdi:ribbon-outline'
  },
  'lucide:rocket': {
    'material-symbols': 'material-symbols:rocket-launch',
    'material-symbols:sharp': 'material-symbols:rocket-launch-sharp',
    'material-symbols:rounded': 'material-symbols:rocket-launch',
    'mdi': 'mdi:rocket',
    'mdi:outline': 'mdi:rocket-outline'
  },
  'lucide:rocking-chair': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:chair-rolling',
    'mdi:outline': 'mdi:chair-rolling-outline'
  },
  'lucide:roller-coaster': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:roller-coaster',
    'mdi:outline': 'mdi:roller-coaster-outline'
  },
  'lucide:rose': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:flower',
    'mdi:outline': 'mdi:flower-outline'
  },
  'lucide:rotate-3d': {
    'material-symbols': 'material-symbols:3d-rotation',
    'material-symbols:sharp': 'material-symbols:3d-rotation-sharp',
    'material-symbols:rounded': 'material-symbols:3d-rotation',
    'mdi': 'mdi:rotate-3d-variant',
    'mdi:outline': 'mdi:rotate-3d-variant-outline'
  },
  'lucide:rotate-ccw': {
    'material-symbols': 'material-symbols:rotate-left',
    'material-symbols:sharp': 'material-symbols:rotate-left-sharp',
    'material-symbols:rounded': 'material-symbols:rotate-left',
    'mdi': 'mdi:rotate-left',
    'mdi:outline': 'mdi:rotate-left-outline'
  },
  'lucide:rotate-ccw-key': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:rotate-left',
    'mdi:outline': 'mdi:rotate-left-outline'
  },
  'lucide:rotate-ccw-square': {
    'material-symbols': 'material-symbols:rotate-left',
    'material-symbols:sharp': 'material-symbols:rotate-left-sharp',
    'material-symbols:rounded': 'material-symbols:rotate-left',
    'mdi': 'mdi:rotate-left',
    'mdi:outline': 'mdi:rotate-left-outline'
  },
  'lucide:rotate-cw': {
    'material-symbols': 'material-symbols:rotate-right',
    'material-symbols:sharp': 'material-symbols:rotate-right-sharp',
    'material-symbols:rounded': 'material-symbols:rotate-right',
    'mdi': 'mdi:rotate-right',
    'mdi:outline': 'mdi:rotate-right-outline'
  },
  'lucide:rotate-cw-square': {
    'material-symbols': 'material-symbols:rotate-right',
    'material-symbols:sharp': 'material-symbols:rotate-right-sharp',
    'material-symbols:rounded': 'material-symbols:rotate-right',
    'mdi': 'mdi:rotate-right',
    'mdi:outline': 'mdi:rotate-right-outline'
  },
  'lucide:route': {
    'material-symbols': 'material-symbols:route',
    'material-symbols:sharp': 'material-symbols:route-sharp',
    'material-symbols:rounded': 'material-symbols:route',
    'mdi': 'mdi:routes',
    'mdi:outline': 'mdi:routes-outline'
  },
  'lucide:route-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:routes-clock',
    'mdi:outline': 'mdi:routes-clock-outline'
  },
  'lucide:router': {
    'material-symbols': 'material-symbols:router',
    'material-symbols:sharp': 'material-symbols:router-sharp',
    'material-symbols:rounded': 'material-symbols:router',
    'mdi': 'mdi:router-wireless',
    'mdi:outline': 'mdi:router-wireless-outline'
  },
  'lucide:rows-2': {
    'material-symbols': 'material-symbols:table-rows',
    'material-symbols:sharp': 'material-symbols:table-rows-sharp',
    'material-symbols:rounded': 'material-symbols:table-rows',
    'mdi': 'mdi:view-sequential',
    'mdi:outline': 'mdi:view-sequential-outline'
  },
  'lucide:rows-3': {
    'material-symbols': 'material-symbols:table-rows',
    'material-symbols:sharp': 'material-symbols:table-rows-sharp',
    'material-symbols:rounded': 'material-symbols:table-rows',
    'mdi': 'mdi:view-sequential',
    'mdi:outline': 'mdi:view-sequential-outline'
  },
  'lucide:rows-4': {
    'material-symbols': 'material-symbols:table-rows',
    'material-symbols:sharp': 'material-symbols:table-rows-sharp',
    'material-symbols:rounded': 'material-symbols:table-rows',
    'mdi': 'mdi:view-sequential',
    'mdi:outline': 'mdi:view-sequential-outline'
  },
  'lucide:rss': {
    'material-symbols': 'material-symbols:rss-feed',
    'material-symbols:sharp': 'material-symbols:rss-feed-sharp',
    'material-symbols:rounded': 'material-symbols:rss-feed',
    'mdi': 'mdi:rss',
    'mdi:outline': 'mdi:rss-outline'
  },
  'lucide:ruler': {
    'material-symbols': 'material-symbols:straighten',
    'material-symbols:sharp': 'material-symbols:straighten-sharp',
    'material-symbols:rounded': 'material-symbols:straighten',
    'mdi': 'mdi:ruler',
    'mdi:outline': 'mdi:ruler-outline'
  },
  'lucide:ruler-dimension-line': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:ruler',
    'mdi:outline': 'mdi:ruler-outline'
  },
  'lucide:russian-ruble': {
    'material-symbols': 'material-symbols:currency-ruble',
    'material-symbols:sharp': 'material-symbols:currency-ruble-sharp',
    'material-symbols:rounded': 'material-symbols:currency-ruble',
    'mdi': 'mdi:currency-rub',
    'mdi:outline': 'mdi:currency-rub-outline'
  },
  'lucide:sailboat': {
    'material-symbols': 'material-symbols:sailing',
    'material-symbols:sharp': 'material-symbols:sailing-sharp',
    'material-symbols:rounded': 'material-symbols:sailing',
    'mdi': 'mdi:sail-boat',
    'mdi:outline': 'mdi:sail-boat-outline'
  },
  'lucide:salad': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:food-variant',
    'mdi:outline': 'mdi:food-variant-outline'
  },
  'lucide:sandwich': {
    'material-symbols': 'material-symbols:lunch-dining',
    'material-symbols:sharp': 'material-symbols:lunch-dining-sharp',
    'material-symbols:rounded': 'material-symbols:lunch-dining',
    'mdi': 'mdi:food-variant',
    'mdi:outline': 'mdi:food-variant-outline'
  },
  'lucide:satellite': {
    'material-symbols': 'material-symbols:satellite',
    'material-symbols:sharp': 'material-symbols:satellite-sharp',
    'material-symbols:rounded': 'material-symbols:satellite',
    'mdi': 'mdi:satellite-variant',
    'mdi:outline': 'mdi:satellite-variant-outline'
  },
  'lucide:satellite-dish': {
    'material-symbols': 'material-symbols:satellite-alt',
    'material-symbols:sharp': 'material-symbols:satellite-alt-sharp',
    'material-symbols:rounded': 'material-symbols:satellite-alt',
    'mdi': 'mdi:satellite-uplink',
    'mdi:outline': 'mdi:satellite-uplink-outline'
  },
  'lucide:saudi-riyal': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:currency-sar',
    'mdi:outline': 'mdi:currency-sar-outline'
  },
  'lucide:save': {
    'material-symbols': 'material-symbols:save',
    'material-symbols:sharp': 'material-symbols:save-sharp',
    'material-symbols:rounded': 'material-symbols:save',
    'mdi': 'mdi:content-save',
    'mdi:outline': 'mdi:content-save-outline'
  },
  'lucide:save-all': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:content-save-all',
    'mdi:outline': 'mdi:content-save-all-outline'
  },
  'lucide:save-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:content-save-off',
    'mdi:outline': 'mdi:content-save-off-outline'
  },
  'lucide:scale': {
    'material-symbols': 'material-symbols:balance',
    'material-symbols:sharp': 'material-symbols:balance-sharp',
    'material-symbols:rounded': 'material-symbols:balance',
    'mdi': 'mdi:scale-balance',
    'mdi:outline': 'mdi:scale-balance-outline'
  },
  'lucide:scale-3d': {
    'material-symbols': 'material-symbols:3d-rotation',
    'material-symbols:sharp': 'material-symbols:3d-rotation-sharp',
    'material-symbols:rounded': 'material-symbols:3d-rotation',
    'mdi': 'mdi:resize',
    'mdi:outline': 'mdi:resize-outline'
  },
  'lucide:scaling': {
    'material-symbols': 'material-symbols:zoom-out-map',
    'material-symbols:sharp': 'material-symbols:zoom-out-map-sharp',
    'material-symbols:rounded': 'material-symbols:zoom-out-map',
    'mdi': 'mdi:vector-arrange-below',
    'mdi:outline': 'mdi:vector-arrange-below-outline'
  },
  'lucide:scan': {
    'material-symbols': 'material-symbols:document-scanner',
    'material-symbols:sharp': 'material-symbols:document-scanner-sharp',
    'material-symbols:rounded': 'material-symbols:document-scanner',
    'mdi': 'mdi:scanner',
    'mdi:outline': 'mdi:scanner-outline'
  },
  'lucide:scan-barcode': {
    'material-symbols': 'material-symbols:barcode-scanner',
    'material-symbols:sharp': 'material-symbols:barcode-scanner-sharp',
    'material-symbols:rounded': 'material-symbols:barcode-scanner',
    'mdi': 'mdi:barcode-scan',
    'mdi:outline': 'mdi:barcode-scan-outline'
  },
  'lucide:scan-eye': {
    'material-symbols': 'material-symbols:visibility',
    'material-symbols:sharp': 'material-symbols:visibility-sharp',
    'material-symbols:rounded': 'material-symbols:visibility',
    'mdi': 'mdi:eye-scan',
    'mdi:outline': 'mdi:eye-scan-outline'
  },
  'lucide:scan-face': {
    'material-symbols': 'material-symbols:face-retouching-natural',
    'material-symbols:sharp': 'material-symbols:face-retouching-natural-sharp',
    'material-symbols:rounded': 'material-symbols:face-retouching-natural',
    'mdi': 'mdi:face-recognition',
    'mdi:outline': 'mdi:face-recognition-outline'
  },
  'lucide:scan-heart': {
    'material-symbols': 'material-symbols:favorite',
    'material-symbols:sharp': 'material-symbols:favorite-sharp',
    'material-symbols:rounded': 'material-symbols:favorite',
    'mdi': 'mdi:heart',
    'mdi:outline': 'mdi:heart-outline'
  },
  'lucide:scan-line': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:line-scan',
    'mdi:outline': 'mdi:line-scan-outline'
  },
  'lucide:scan-qr-code': {
    'material-symbols': 'material-symbols:qr-code-scanner',
    'material-symbols:sharp': 'material-symbols:qr-code-scanner-sharp',
    'material-symbols:rounded': 'material-symbols:qr-code-scanner',
    'mdi': 'mdi:qrcode-scan',
    'mdi:outline': 'mdi:qrcode-scan-outline'
  },
  'lucide:scan-search': {
    'material-symbols': 'material-symbols:search',
    'material-symbols:sharp': 'material-symbols:search-sharp',
    'material-symbols:rounded': 'material-symbols:search',
    'mdi': 'mdi:magnify-scan',
    'mdi:outline': 'mdi:magnify-scan-outline'
  },
  'lucide:scan-text': {
    'material-symbols': 'material-symbols:document-scanner',
    'material-symbols:sharp': 'material-symbols:document-scanner-sharp',
    'material-symbols:rounded': 'material-symbols:document-scanner',
    'mdi': 'mdi:text-search',
    'mdi:outline': 'mdi:text-search-outline'
  },
  'lucide:school': {
    'material-symbols': 'material-symbols:school',
    'material-symbols:sharp': 'material-symbols:school-sharp',
    'material-symbols:rounded': 'material-symbols:school',
    'mdi': 'mdi:school',
    'mdi:outline': 'mdi:school-outline'
  },
  'lucide:scissors': {
    'material-symbols': 'material-symbols:content-cut',
    'material-symbols:sharp': 'material-symbols:content-cut-sharp',
    'material-symbols:rounded': 'material-symbols:content-cut',
    'mdi': 'mdi:content-cut',
    'mdi:outline': 'mdi:content-cut-outline'
  },
  'lucide:scissors-line-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:content-cut',
    'mdi:outline': 'mdi:content-cut-outline'
  },
  'lucide:scooter': {
    'material-symbols': 'material-symbols:electric-scooter',
    'material-symbols:sharp': 'material-symbols:electric-scooter-sharp',
    'material-symbols:rounded': 'material-symbols:electric-scooter',
    'mdi': 'mdi:scooter',
    'mdi:outline': 'mdi:scooter-outline'
  },
  'lucide:screen-share': {
    'material-symbols': 'material-symbols:screen-share',
    'material-symbols:sharp': 'material-symbols:screen-share-sharp',
    'material-symbols:rounded': 'material-symbols:screen-share',
    'mdi': 'mdi:monitor-share',
    'mdi:outline': 'mdi:monitor-share-outline'
  },
  'lucide:screen-share-off': {
    'material-symbols': 'material-symbols:stop-screen-share',
    'material-symbols:sharp': 'material-symbols:stop-screen-share-sharp',
    'material-symbols:rounded': 'material-symbols:stop-screen-share',
    'mdi': 'mdi:monitor-off',
    'mdi:outline': 'mdi:monitor-off-outline'
  },
  'lucide:scroll': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:scroll-text',
    'mdi:outline': 'mdi:scroll-text-outline'
  },
  'lucide:scroll-text': {
    'material-symbols': 'material-symbols:article',
    'material-symbols:sharp': 'material-symbols:article-sharp',
    'material-symbols:rounded': 'material-symbols:article',
    'mdi': 'mdi:text-box',
    'mdi:outline': 'mdi:text-box-outline'
  },
  'lucide:search': {
    'material-symbols': 'material-symbols:search',
    'material-symbols:sharp': 'material-symbols:search-sharp',
    'material-symbols:rounded': 'material-symbols:search',
    'mdi': 'mdi:magnify',
    'mdi:outline': 'mdi:magnify-outline'
  },
  'lucide:search-check': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:file-find',
    'mdi:outline': 'mdi:file-find-outline'
  },
  'lucide:search-code': {
    'material-symbols': 'material-symbols:code',
    'material-symbols:sharp': 'material-symbols:code-sharp',
    'material-symbols:rounded': 'material-symbols:code',
    'mdi': 'mdi:file-code',
    'mdi:outline': 'mdi:file-code-outline'
  },
  'lucide:search-slash': {
    'material-symbols': 'material-symbols:search-off',
    'material-symbols:sharp': 'material-symbols:search-off-sharp',
    'material-symbols:rounded': 'material-symbols:search-off',
    'mdi': 'mdi:magnify-close',
    'mdi:outline': 'mdi:magnify-close-outline'
  },
  'lucide:search-x': {
    'material-symbols': 'material-symbols:search-off',
    'material-symbols:sharp': 'material-symbols:search-off-sharp',
    'material-symbols:rounded': 'material-symbols:search-off',
    'mdi': 'mdi:magnify-remove-cursor',
    'mdi:outline': 'mdi:magnify-remove-cursor-outline'
  },
  'lucide:section': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-section',
    'mdi:outline': 'mdi:format-section-outline'
  },
  'lucide:send': {
    'material-symbols': 'material-symbols:send',
    'material-symbols:sharp': 'material-symbols:send-sharp',
    'material-symbols:rounded': 'material-symbols:send',
    'mdi': 'mdi:send',
    'mdi:outline': 'mdi:send-outline'
  },
  'lucide:send-horizontal': {
    'material-symbols': 'material-symbols:send',
    'material-symbols:sharp': 'material-symbols:send-sharp',
    'material-symbols:rounded': 'material-symbols:send',
    'mdi': 'mdi:send',
    'mdi:outline': 'mdi:send-outline'
  },
  'lucide:send-to-back': {
    'material-symbols': 'material-symbols:flip-to-back',
    'material-symbols:sharp': 'material-symbols:flip-to-back-sharp',
    'material-symbols:rounded': 'material-symbols:flip-to-back',
    'mdi': 'mdi:arrange-send-to-back',
    'mdi:outline': 'mdi:arrange-send-to-back-outline'
  },
  'lucide:separator-horizontal': {
    'material-symbols': 'material-symbols:horizontal-rule',
    'material-symbols:sharp': 'material-symbols:horizontal-rule-sharp',
    'material-symbols:rounded': 'material-symbols:horizontal-rule',
    'mdi': 'mdi:minus',
    'mdi:outline': 'mdi:minus-outline'
  },
  'lucide:separator-vertical': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:drag-vertical',
    'mdi:outline': 'mdi:drag-vertical'
  },
  'lucide:server': {
    'material-symbols': 'material-symbols:dns',
    'material-symbols:sharp': 'material-symbols:dns-sharp',
    'material-symbols:rounded': 'material-symbols:dns',
    'mdi': 'mdi:server',
    'mdi:outline': 'mdi:server-outline'
  },
  'lucide:server-cog': {
    'material-symbols': 'material-symbols:settings',
    'material-symbols:sharp': 'material-symbols:settings-sharp',
    'material-symbols:rounded': 'material-symbols:settings',
    'mdi': 'mdi:server-network',
    'mdi:outline': 'mdi:server-network-outline'
  },
  'lucide:server-crash': {
    'material-symbols': 'material-symbols:error',
    'material-symbols:sharp': 'material-symbols:error-sharp',
    'material-symbols:rounded': 'material-symbols:error',
    'mdi': 'mdi:server-off',
    'mdi:outline': 'mdi:server-off-outline'
  },
  'lucide:server-off': {
    'material-symbols': 'material-symbols:dns',
    'material-symbols:sharp': 'material-symbols:dns-sharp',
    'material-symbols:rounded': 'material-symbols:dns',
    'mdi': 'mdi:server-off',
    'mdi:outline': 'mdi:server-off-outline'
  },
  'lucide:settings': {
    'material-symbols': 'material-symbols:settings',
    'material-symbols:sharp': 'material-symbols:settings-sharp',
    'material-symbols:rounded': 'material-symbols:settings',
    'mdi': 'mdi:cog',
    'mdi:outline': 'mdi:cog-outline'
  },
  'lucide:settings-2': {
    'material-symbols': 'material-symbols:tune',
    'material-symbols:sharp': 'material-symbols:tune-sharp',
    'material-symbols:rounded': 'material-symbols:tune',
    'mdi': 'mdi:cog-outline',
    'mdi:outline': 'mdi:cog-outline-outline'
  },
  'lucide:shapes': {
    'material-symbols': 'material-symbols:category',
    'material-symbols:sharp': 'material-symbols:category-sharp',
    'material-symbols:rounded': 'material-symbols:category',
    'mdi': 'mdi:shape',
    'mdi:outline': 'mdi:shape-outline'
  },
  'lucide:share': {
    'material-symbols': 'material-symbols:share',
    'material-symbols:sharp': 'material-symbols:share-sharp',
    'material-symbols:rounded': 'material-symbols:share',
    'mdi': 'mdi:share-variant',
    'mdi:outline': 'mdi:share-variant-outline'
  },
  'lucide:share-2': {
    'material-symbols': 'material-symbols:ios-share',
    'material-symbols:sharp': 'material-symbols:ios-share-sharp',
    'material-symbols:rounded': 'material-symbols:ios-share',
    'mdi': 'mdi:export-variant',
    'mdi:outline': 'mdi:export-variant-outline'
  },
  'lucide:sheet': {
    'material-symbols': 'material-symbols:table-chart',
    'material-symbols:sharp': 'material-symbols:table-chart-sharp',
    'material-symbols:rounded': 'material-symbols:table-chart',
    'mdi': 'mdi:grid',
    'mdi:outline': 'mdi:grid-outline'
  },
  'lucide:shell': {
    'material-symbols': 'material-symbols:terminal',
    'material-symbols:sharp': 'material-symbols:terminal-sharp',
    'material-symbols:rounded': 'material-symbols:terminal',
    'mdi': 'mdi:powershell',
    'mdi:outline': 'mdi:powershell-outline'
  },
  'lucide:shield': {
    'material-symbols': 'material-symbols:shield',
    'material-symbols:sharp': 'material-symbols:shield-sharp',
    'material-symbols:rounded': 'material-symbols:shield',
    'mdi': 'mdi:shield',
    'mdi:outline': 'mdi:shield-outline'
  },
  'lucide:shield-alert': {
    'material-symbols': 'material-symbols:gpp-maybe',
    'material-symbols:sharp': 'material-symbols:gpp-maybe-sharp',
    'material-symbols:rounded': 'material-symbols:gpp-maybe',
    'mdi': 'mdi:shield-alert',
    'mdi:outline': 'mdi:shield-alert-outline'
  },
  'lucide:shield-ban': {
    'material-symbols': 'material-symbols:block',
    'material-symbols:sharp': 'material-symbols:block-sharp',
    'material-symbols:rounded': 'material-symbols:block',
    'mdi': 'mdi:shield-off',
    'mdi:outline': 'mdi:shield-off-outline'
  },
  'lucide:shield-check': {
    'material-symbols': 'material-symbols:verified-user',
    'material-symbols:sharp': 'material-symbols:verified-user-sharp',
    'material-symbols:rounded': 'material-symbols:verified-user',
    'mdi': 'mdi:shield-check',
    'mdi:outline': 'mdi:shield-check-outline'
  },
  'lucide:shield-ellipsis': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:shield',
    'mdi:outline': 'mdi:shield-outline'
  },
  'lucide:shield-half': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:shield-half-full',
    'mdi:outline': 'mdi:shield-half-full-outline'
  },
  'lucide:shield-minus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:shield-minus',
    'mdi:outline': 'mdi:shield-minus-outline'
  },
  'lucide:shield-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:shield-off',
    'mdi:outline': 'mdi:shield-off-outline'
  },
  'lucide:shield-plus': {
    'material-symbols': 'material-symbols:add-moderator',
    'material-symbols:sharp': 'material-symbols:add-moderator-sharp',
    'material-symbols:rounded': 'material-symbols:add-moderator',
    'mdi': 'mdi:shield-plus',
    'mdi:outline': 'mdi:shield-plus-outline'
  },
  'lucide:shield-question-mark': {
    'material-symbols': 'material-symbols:help',
    'material-symbols:sharp': 'material-symbols:help-sharp',
    'material-symbols:rounded': 'material-symbols:help',
    'mdi': 'mdi:shield-question',
    'mdi:outline': 'mdi:shield-question-outline'
  },
  'lucide:shield-user': {
    'material-symbols': 'material-symbols:admin-panel-settings',
    'material-symbols:sharp': 'material-symbols:admin-panel-settings-sharp',
    'material-symbols:rounded': 'material-symbols:admin-panel-settings',
    'mdi': 'mdi:shield-account',
    'mdi:outline': 'mdi:shield-account-outline'
  },
  'lucide:shield-x': {
    'material-symbols': 'material-symbols:gpp-bad',
    'material-symbols:sharp': 'material-symbols:gpp-bad-sharp',
    'material-symbols:rounded': 'material-symbols:gpp-bad',
    'mdi': 'mdi:shield-remove',
    'mdi:outline': 'mdi:shield-remove-outline'
  },
  'lucide:ship': {
    'material-symbols': 'material-symbols:directions-boat',
    'material-symbols:sharp': 'material-symbols:directions-boat-sharp',
    'material-symbols:rounded': 'material-symbols:directions-boat',
    'mdi': 'mdi:ferry',
    'mdi:outline': 'mdi:ferry-outline'
  },
  'lucide:ship-wheel': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:ship-wheel',
    'mdi:outline': 'mdi:ship-wheel-outline'
  },
  'lucide:shirt': {
    'material-symbols': 'material-symbols:checkroom',
    'material-symbols:sharp': 'material-symbols:checkroom-sharp',
    'material-symbols:rounded': 'material-symbols:checkroom',
    'mdi': 'mdi:tshirt-crew',
    'mdi:outline': 'mdi:tshirt-crew-outline'
  },
  'lucide:shopping-bag': {
    'material-symbols': 'material-symbols:shopping-bag',
    'material-symbols:sharp': 'material-symbols:shopping-bag-sharp',
    'material-symbols:rounded': 'material-symbols:shopping-bag',
    'mdi': 'mdi:shopping',
    'mdi:outline': 'mdi:shopping-outline'
  },
  'lucide:shopping-basket': {
    'material-symbols': 'material-symbols:shopping-basket',
    'material-symbols:sharp': 'material-symbols:shopping-basket-sharp',
    'material-symbols:rounded': 'material-symbols:shopping-basket',
    'mdi': 'mdi:basket',
    'mdi:outline': 'mdi:basket-outline'
  },
  'lucide:shopping-cart': {
    'material-symbols': 'material-symbols:shopping-cart',
    'material-symbols:sharp': 'material-symbols:shopping-cart-sharp',
    'material-symbols:rounded': 'material-symbols:shopping-cart',
    'mdi': 'mdi:cart',
    'mdi:outline': 'mdi:cart-outline'
  },
  'lucide:shovel': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:shovel',
    'mdi:outline': 'mdi:shovel-outline'
  },
  'lucide:shower-head': {
    'material-symbols': 'material-symbols:shower',
    'material-symbols:sharp': 'material-symbols:shower-sharp',
    'material-symbols:rounded': 'material-symbols:shower',
    'mdi': 'mdi:shower-head',
    'mdi:outline': 'mdi:shower-head-outline'
  },
  'lucide:shredder': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:shredder',
    'mdi:outline': 'mdi:shredder-outline'
  },
  'lucide:shrimp': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:food-variant',
    'mdi:outline': 'mdi:food-variant-outline'
  },
  'lucide:shrink': {
    'material-symbols': 'material-symbols:zoom-in',
    'material-symbols:sharp': 'material-symbols:zoom-in-sharp',
    'material-symbols:rounded': 'material-symbols:zoom-in',
    'mdi': 'mdi:arrow-collapse-all',
    'mdi:outline': 'mdi:arrow-collapse-all-outline'
  },
  'lucide:shrub': {
    'material-symbols': 'material-symbols:park',
    'material-symbols:sharp': 'material-symbols:park-sharp',
    'material-symbols:rounded': 'material-symbols:park',
    'mdi': 'mdi:tree',
    'mdi:outline': 'mdi:tree-outline'
  },
  'lucide:shuffle': {
    'material-symbols': 'material-symbols:shuffle',
    'material-symbols:sharp': 'material-symbols:shuffle-sharp',
    'material-symbols:rounded': 'material-symbols:shuffle',
    'mdi': 'mdi:shuffle-variant',
    'mdi:outline': 'mdi:shuffle-variant-outline'
  },
  'lucide:sigma': {
    'material-symbols': 'material-symbols:functions',
    'material-symbols:sharp': 'material-symbols:functions-sharp',
    'material-symbols:rounded': 'material-symbols:functions',
    'mdi': 'mdi:sigma',
    'mdi:outline': 'mdi:sigma-outline'
  },
  'lucide:signal': {
    'material-symbols': 'material-symbols:signal-cellular-alt',
    'material-symbols:sharp': 'material-symbols:signal-cellular-alt-sharp',
    'material-symbols:rounded': 'material-symbols:signal-cellular-alt',
    'mdi': 'mdi:signal',
    'mdi:outline': 'mdi:signal-outline'
  },
  'lucide:signal-high': {
    'material-symbols': 'material-symbols:signal-cellular-4-bar',
    'material-symbols:sharp': 'material-symbols:signal-cellular-4-bar-sharp',
    'material-symbols:rounded': 'material-symbols:signal-cellular-4-bar',
    'mdi': 'mdi:signal-cellular-3',
    'mdi:outline': 'mdi:signal-cellular-3-outline'
  },
  'lucide:signal-low': {
    'material-symbols': 'material-symbols:signal-cellular-1-bar',
    'material-symbols:sharp': 'material-symbols:signal-cellular-1-bar-sharp',
    'material-symbols:rounded': 'material-symbols:signal-cellular-1-bar',
    'mdi': 'mdi:signal-cellular-1',
    'mdi:outline': 'mdi:signal-cellular-1-outline'
  },
  'lucide:signal-medium': {
    'material-symbols': 'material-symbols:signal-cellular-3-bar',
    'material-symbols:sharp': 'material-symbols:signal-cellular-3-bar-sharp',
    'material-symbols:rounded': 'material-symbols:signal-cellular-3-bar',
    'mdi': 'mdi:signal-cellular-2',
    'mdi:outline': 'mdi:signal-cellular-2-outline'
  },
  'lucide:signal-zero': {
    'material-symbols': 'material-symbols:signal-cellular-0-bar',
    'material-symbols:sharp': 'material-symbols:signal-cellular-0-bar-sharp',
    'material-symbols:rounded': 'material-symbols:signal-cellular-0-bar',
    'mdi': 'mdi:signal-cellular-outline',
    'mdi:outline': 'mdi:signal-cellular-outline-outline'
  },
  'lucide:signature': {
    'material-symbols': 'material-symbols:draw',
    'material-symbols:sharp': 'material-symbols:draw-sharp',
    'material-symbols:rounded': 'material-symbols:draw',
    'mdi': 'mdi:draw',
    'mdi:outline': 'mdi:draw-outline'
  },
  'lucide:signpost': {
    'material-symbols': 'material-symbols:signpost',
    'material-symbols:sharp': 'material-symbols:signpost-sharp',
    'material-symbols:rounded': 'material-symbols:signpost',
    'mdi': 'mdi:sign-direction',
    'mdi:outline': 'mdi:sign-direction-outline'
  },
  'lucide:signpost-big': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:sign-direction',
    'mdi:outline': 'mdi:sign-direction-outline'
  },
  'lucide:siren': {
    'material-symbols': 'material-symbols:emergency',
    'material-symbols:sharp': 'material-symbols:emergency-sharp',
    'material-symbols:rounded': 'material-symbols:emergency',
    'mdi': 'mdi:alarm-light',
    'mdi:outline': 'mdi:alarm-light-outline'
  },
  'lucide:skip-back': {
    'material-symbols': 'material-symbols:skip-previous',
    'material-symbols:sharp': 'material-symbols:skip-previous-sharp',
    'material-symbols:rounded': 'material-symbols:skip-previous',
    'mdi': 'mdi:skip-previous',
    'mdi:outline': 'mdi:skip-previous-outline'
  },
  'lucide:skip-forward': {
    'material-symbols': 'material-symbols:skip-next',
    'material-symbols:sharp': 'material-symbols:skip-next-sharp',
    'material-symbols:rounded': 'material-symbols:skip-next',
    'mdi': 'mdi:skip-next',
    'mdi:outline': 'mdi:skip-next-outline'
  },
  'lucide:skull': {
    'material-symbols': 'material-symbols:skull',
    'material-symbols:sharp': 'material-symbols:skull-sharp',
    'material-symbols:rounded': 'material-symbols:skull',
    'mdi': 'mdi:skull',
    'mdi:outline': 'mdi:skull-outline'
  },
  'lucide:slack': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:slack',
    'mdi:outline': 'mdi:slack-outline'
  },
  'lucide:slash': {
    'material-symbols': 'material-symbols:do-not-disturb-on',
    'material-symbols:sharp': 'material-symbols:do-not-disturb-on-sharp',
    'material-symbols:rounded': 'material-symbols:do-not-disturb-on',
    'mdi': 'mdi:slash-forward',
    'mdi:outline': 'mdi:slash-forward-outline'
  },
  'lucide:slice': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:triangle',
    'mdi:outline': 'mdi:triangle-outline'
  },
  'lucide:sliders-horizontal': {
    'material-symbols': 'material-symbols:tune',
    'material-symbols:sharp': 'material-symbols:tune-sharp',
    'material-symbols:rounded': 'material-symbols:tune',
    'mdi': 'mdi:tune',
    'mdi:outline': 'mdi:tune-outline'
  },
  'lucide:sliders-vertical': {
    'material-symbols': 'material-symbols:tune',
    'material-symbols:sharp': 'material-symbols:tune-sharp',
    'material-symbols:rounded': 'material-symbols:tune',
    'mdi': 'mdi:tune-vertical',
    'mdi:outline': 'mdi:tune-vertical-outline'
  },
  'lucide:smartphone': {
    'material-symbols': 'material-symbols:smartphone',
    'material-symbols:sharp': 'material-symbols:smartphone-sharp',
    'material-symbols:rounded': 'material-symbols:smartphone',
    'mdi': 'mdi:cellphone',
    'mdi:outline': 'mdi:cellphone-outline'
  },
  'lucide:smartphone-charging': {
    'material-symbols': 'material-symbols:phone-android',
    'material-symbols:sharp': 'material-symbols:phone-android-sharp',
    'material-symbols:rounded': 'material-symbols:phone-android',
    'mdi': 'mdi:cellphone-charging',
    'mdi:outline': 'mdi:cellphone-charging-outline'
  },
  'lucide:smartphone-nfc': {
    'material-symbols': 'material-symbols:nfc',
    'material-symbols:sharp': 'material-symbols:nfc-sharp',
    'material-symbols:rounded': 'material-symbols:nfc',
    'mdi': 'mdi:nfc-tap',
    'mdi:outline': 'mdi:nfc-tap-outline'
  },
  'lucide:smile': {
    'material-symbols': 'material-symbols:sentiment-satisfied',
    'material-symbols:sharp': 'material-symbols:sentiment-satisfied-sharp',
    'material-symbols:rounded': 'material-symbols:sentiment-satisfied',
    'mdi': 'mdi:emoticon-happy',
    'mdi:outline': 'mdi:emoticon-happy-outline'
  },
  'lucide:smile-plus': {
    'material-symbols': 'material-symbols:add-reaction',
    'material-symbols:sharp': 'material-symbols:add-reaction-sharp',
    'material-symbols:rounded': 'material-symbols:add-reaction',
    'mdi': 'mdi:emoticon-happy',
    'mdi:outline': 'mdi:emoticon-happy-outline'
  },
  'lucide:snail': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:snail',
    'mdi:outline': 'mdi:snail-outline'
  },
  'lucide:snowflake': {
    'material-symbols': 'material-symbols:ac-unit',
    'material-symbols:sharp': 'material-symbols:ac-unit-sharp',
    'material-symbols:rounded': 'material-symbols:ac-unit',
    'mdi': 'mdi:snowflake',
    'mdi:outline': 'mdi:snowflake-outline'
  },
  'lucide:soap-dispenser-droplet': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cup-water',
    'mdi:outline': 'mdi:cup-water-outline'
  },
  'lucide:sofa': {
    'material-symbols': 'material-symbols:weekend',
    'material-symbols:sharp': 'material-symbols:weekend-sharp',
    'material-symbols:rounded': 'material-symbols:weekend',
    'mdi': 'mdi:sofa',
    'mdi:outline': 'mdi:sofa-outline'
  },
  'lucide:solar-panel': {
    'material-symbols': 'material-symbols:solar-power',
    'material-symbols:sharp': 'material-symbols:solar-power-sharp',
    'material-symbols:rounded': 'material-symbols:solar-power',
    'mdi': 'mdi:solar-panel',
    'mdi:outline': 'mdi:solar-panel-outline'
  },
  'lucide:soup': {
    'material-symbols': 'material-symbols:soup-kitchen',
    'material-symbols:sharp': 'material-symbols:soup-kitchen-sharp',
    'material-symbols:rounded': 'material-symbols:soup-kitchen',
    'mdi': 'mdi:pot',
    'mdi:outline': 'mdi:pot-outline'
  },
  'lucide:space': {
    'material-symbols': 'material-symbols:space-bar',
    'material-symbols:sharp': 'material-symbols:space-bar-sharp',
    'material-symbols:rounded': 'material-symbols:space-bar',
    'mdi': 'mdi:keyboard-space',
    'mdi:outline': 'mdi:keyboard-space-outline'
  },
  'lucide:spade': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cards-spade',
    'mdi:outline': 'mdi:cards-spade-outline'
  },
  'lucide:sparkle': {
    'material-symbols': 'material-symbols:auto-awesome',
    'material-symbols:sharp': 'material-symbols:auto-awesome-sharp',
    'material-symbols:rounded': 'material-symbols:auto-awesome',
    'mdi': 'mdi:sparkles',
    'mdi:outline': 'mdi:sparkles-outline'
  },
  'lucide:sparkles': {
    'material-symbols': 'material-symbols:auto-awesome',
    'material-symbols:sharp': 'material-symbols:auto-awesome-sharp',
    'material-symbols:rounded': 'material-symbols:auto-awesome',
    'mdi': 'mdi:sparkles',
    'mdi:outline': 'mdi:sparkles-outline'
  },
  'lucide:speaker': {
    'material-symbols': 'material-symbols:volume-up',
    'material-symbols:sharp': 'material-symbols:volume-up-sharp',
    'material-symbols:rounded': 'material-symbols:volume-up',
    'mdi': 'mdi:speaker',
    'mdi:outline': 'mdi:speaker-outline'
  },
  'lucide:speech': {
    'material-symbols': 'material-symbols:record-voice-over',
    'material-symbols:sharp': 'material-symbols:record-voice-over-sharp',
    'material-symbols:rounded': 'material-symbols:record-voice-over',
    'mdi': 'mdi:comment-text',
    'mdi:outline': 'mdi:comment-text-outline'
  },
  'lucide:spell-check': {
    'material-symbols': 'material-symbols:spellcheck',
    'material-symbols:sharp': 'material-symbols:spellcheck-sharp',
    'material-symbols:rounded': 'material-symbols:spellcheck',
    'mdi': 'mdi:spellcheck',
    'mdi:outline': 'mdi:spellcheck-outline'
  },
  'lucide:spell-check-2': {
    'material-symbols': 'material-symbols:spellcheck',
    'material-symbols:sharp': 'material-symbols:spellcheck-sharp',
    'material-symbols:rounded': 'material-symbols:spellcheck',
    'mdi': 'mdi:spellcheck',
    'mdi:outline': 'mdi:spellcheck-outline'
  },
  'lucide:spline': {
    'material-symbols': 'material-symbols:timeline',
    'material-symbols:sharp': 'material-symbols:timeline-sharp',
    'material-symbols:rounded': 'material-symbols:timeline',
    'mdi': 'mdi:vector-curve',
    'mdi:outline': 'mdi:vector-curve-outline'
  },
  'lucide:spline-pointer': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:vector-point',
    'mdi:outline': 'mdi:vector-point-outline'
  },
  'lucide:split': {
    'material-symbols': 'material-symbols:call-split',
    'material-symbols:sharp': 'material-symbols:call-split-sharp',
    'material-symbols:rounded': 'material-symbols:call-split',
    'mdi': 'mdi:call-split',
    'mdi:outline': 'mdi:call-split-outline'
  },
  'lucide:spool': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:motorbike',
    'mdi:outline': 'mdi:motorbike-outline'
  },
  'lucide:spotlight': {
    'material-symbols': 'material-symbols:highlight',
    'material-symbols:sharp': 'material-symbols:highlight-sharp',
    'material-symbols:rounded': 'material-symbols:highlight',
    'mdi': 'mdi:spotlight',
    'mdi:outline': 'mdi:spotlight-outline'
  },
  'lucide:spray-can': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:spray',
    'mdi:outline': 'mdi:spray-outline'
  },
  'lucide:sprout': {
    'material-symbols': 'material-symbols:eco',
    'material-symbols:sharp': 'material-symbols:eco-sharp',
    'material-symbols:rounded': 'material-symbols:eco',
    'mdi': 'mdi:sprout',
    'mdi:outline': 'mdi:sprout-outline'
  },
  'lucide:square': {
    'material-symbols': 'material-symbols:square',
    'material-symbols:sharp': 'material-symbols:square-sharp',
    'material-symbols:rounded': 'material-symbols:square',
    'mdi': 'mdi:square',
    'mdi:outline': 'mdi:square-outline'
  },
  'lucide:square-activity': {
    'material-symbols': 'material-symbols:show-chart',
    'material-symbols:sharp': 'material-symbols:show-chart-sharp',
    'material-symbols:rounded': 'material-symbols:show-chart',
    'mdi': 'mdi:chart-line-variant',
    'mdi:outline': 'mdi:chart-line-variant'
  },
  'lucide:square-arrow-down': {
    'material-symbols': 'material-symbols:arrow-downward',
    'material-symbols:sharp': 'material-symbols:arrow-downward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-downward',
    'mdi': 'mdi:arrow-down-box',
    'mdi:outline': 'mdi:arrow-down-box-outline'
  },
  'lucide:square-arrow-down-left': {
    'material-symbols': 'material-symbols:south-west',
    'material-symbols:sharp': 'material-symbols:south-west-sharp',
    'material-symbols:rounded': 'material-symbols:south-west',
    'mdi': 'mdi:arrow-bottom-left-box-outline',
    'mdi:outline': 'mdi:arrow-bottom-left-box-outline-outline'
  },
  'lucide:square-arrow-down-right': {
    'material-symbols': 'material-symbols:south-east',
    'material-symbols:sharp': 'material-symbols:south-east-sharp',
    'material-symbols:rounded': 'material-symbols:south-east',
    'mdi': 'mdi:arrow-bottom-right-box-outline',
    'mdi:outline': 'mdi:arrow-bottom-right-box-outline-outline'
  },
  'lucide:square-arrow-left': {
    'material-symbols': 'material-symbols:arrow-back',
    'material-symbols:sharp': 'material-symbols:arrow-back-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-back',
    'mdi': 'mdi:arrow-left-box',
    'mdi:outline': 'mdi:arrow-left-box-outline'
  },
  'lucide:square-arrow-out-down-left': {
    'material-symbols': 'material-symbols:south-west',
    'material-symbols:sharp': 'material-symbols:south-west-sharp',
    'material-symbols:rounded': 'material-symbols:south-west',
    'mdi': 'mdi:arrow-bottom-left-thin-circle-outline',
    'mdi:outline': 'mdi:arrow-bottom-left-thin-circle-outline-outline'
  },
  'lucide:square-arrow-out-down-right': {
    'material-symbols': 'material-symbols:south-east',
    'material-symbols:sharp': 'material-symbols:south-east-sharp',
    'material-symbols:rounded': 'material-symbols:south-east',
    'mdi': 'mdi:arrow-bottom-right-thin-circle-outline',
    'mdi:outline': 'mdi:arrow-bottom-right-thin-circle-outline-outline'
  },
  'lucide:square-arrow-out-up-left': {
    'material-symbols': 'material-symbols:north-west',
    'material-symbols:sharp': 'material-symbols:north-west-sharp',
    'material-symbols:rounded': 'material-symbols:north-west',
    'mdi': 'mdi:arrow-top-left-thin-circle-outline',
    'mdi:outline': 'mdi:arrow-top-left-thin-circle-outline-outline'
  },
  'lucide:square-arrow-out-up-right': {
    'material-symbols': 'material-symbols:north-east',
    'material-symbols:sharp': 'material-symbols:north-east-sharp',
    'material-symbols:rounded': 'material-symbols:north-east',
    'mdi': 'mdi:arrow-top-right-thin-circle-outline',
    'mdi:outline': 'mdi:arrow-top-right-thin-circle-outline-outline'
  },
  'lucide:square-arrow-right': {
    'material-symbols': 'material-symbols:arrow-forward',
    'material-symbols:sharp': 'material-symbols:arrow-forward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-forward',
    'mdi': 'mdi:arrow-right-box',
    'mdi:outline': 'mdi:arrow-right-box-outline'
  },
  'lucide:square-arrow-up': {
    'material-symbols': 'material-symbols:arrow-upward',
    'material-symbols:sharp': 'material-symbols:arrow-upward-sharp',
    'material-symbols:rounded': 'material-symbols:arrow-upward',
    'mdi': 'mdi:arrow-up-box',
    'mdi:outline': 'mdi:arrow-up-box-outline'
  },
  'lucide:square-arrow-up-left': {
    'material-symbols': 'material-symbols:north-west',
    'material-symbols:sharp': 'material-symbols:north-west-sharp',
    'material-symbols:rounded': 'material-symbols:north-west',
    'mdi': 'mdi:arrow-top-left-box-outline',
    'mdi:outline': 'mdi:arrow-top-left-box-outline-outline'
  },
  'lucide:square-arrow-up-right': {
    'material-symbols': 'material-symbols:north-east',
    'material-symbols:sharp': 'material-symbols:north-east-sharp',
    'material-symbols:rounded': 'material-symbols:north-east',
    'mdi': 'mdi:arrow-top-right-box-outline',
    'mdi:outline': 'mdi:arrow-top-right-box-outline-outline'
  },
  'lucide:square-asterisk': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:asterisk',
    'mdi:outline': 'mdi:asterisk'
  },
  'lucide:square-bottom-dashed-scissors': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:content-cut',
    'mdi:outline': 'mdi:content-cut-outline'
  },
  'lucide:square-chart-gantt': {
    'material-symbols': 'material-symbols:view-timeline',
    'material-symbols:sharp': 'material-symbols:view-timeline-sharp',
    'material-symbols:rounded': 'material-symbols:view-timeline',
    'mdi': 'mdi:chart-gantt',
    'mdi:outline': 'mdi:chart-gantt-outline'
  },
  'lucide:square-check': {
    'material-symbols': 'material-symbols:check-box',
    'material-symbols:sharp': 'material-symbols:check-box-sharp',
    'material-symbols:rounded': 'material-symbols:check-box',
    'mdi': 'mdi:checkbox-marked',
    'mdi:outline': 'mdi:checkbox-marked-outline'
  },
  'lucide:square-check-big': {
    'material-symbols': 'material-symbols:check-box',
    'material-symbols:sharp': 'material-symbols:check-box-sharp',
    'material-symbols:rounded': 'material-symbols:check-box',
    'mdi': 'mdi:checkbox-marked',
    'mdi:outline': 'mdi:checkbox-marked-outline'
  },
  'lucide:square-chevron-down': {
    'material-symbols': 'material-symbols:expand-more',
    'material-symbols:sharp': 'material-symbols:expand-more-sharp',
    'material-symbols:rounded': 'material-symbols:expand-more',
    'mdi': 'mdi:chevron-down-box',
    'mdi:outline': 'mdi:chevron-down-box-outline'
  },
  'lucide:square-chevron-left': {
    'material-symbols': 'material-symbols:chevron-left',
    'material-symbols:sharp': 'material-symbols:chevron-left-sharp',
    'material-symbols:rounded': 'material-symbols:chevron-left',
    'mdi': 'mdi:chevron-left-box',
    'mdi:outline': 'mdi:chevron-left-box-outline'
  },
  'lucide:square-chevron-right': {
    'material-symbols': 'material-symbols:chevron-right',
    'material-symbols:sharp': 'material-symbols:chevron-right-sharp',
    'material-symbols:rounded': 'material-symbols:chevron-right',
    'mdi': 'mdi:chevron-right-box',
    'mdi:outline': 'mdi:chevron-right-box-outline'
  },
  'lucide:square-chevron-up': {
    'material-symbols': 'material-symbols:expand-less',
    'material-symbols:sharp': 'material-symbols:expand-less-sharp',
    'material-symbols:rounded': 'material-symbols:expand-less',
    'mdi': 'mdi:chevron-up-box',
    'mdi:outline': 'mdi:chevron-up-box-outline'
  },
  'lucide:square-code': {
    'material-symbols': 'material-symbols:code',
    'material-symbols:sharp': 'material-symbols:code-sharp',
    'material-symbols:rounded': 'material-symbols:code',
    'mdi': 'mdi:code-brackets',
    'mdi:outline': 'mdi:code-brackets-outline'
  },
  'lucide:square-dashed': {
    'material-symbols': 'material-symbols:check-box-outline-blank',
    'material-symbols:sharp': 'material-symbols:check-box-outline-blank-sharp',
    'material-symbols:rounded': 'material-symbols:check-box-outline-blank',
    'mdi': 'mdi:square-outline',
    'mdi:outline': 'mdi:square-outline-outline'
  },
  'lucide:square-dashed-bottom': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:square-outline',
    'mdi:outline': 'mdi:square-outline-outline'
  },
  'lucide:square-dashed-bottom-code': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:code-brackets',
    'mdi:outline': 'mdi:code-brackets-outline'
  },
  'lucide:square-dashed-kanban': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:view-column',
    'mdi:outline': 'mdi:view-column-outline'
  },
  'lucide:square-dashed-mouse-pointer': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:cursor-default-outline',
    'mdi:outline': 'mdi:cursor-default-outline-outline'
  },
  'lucide:square-dashed-top-solid': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:square-outline',
    'mdi:outline': 'mdi:square-outline-outline'
  },
  'lucide:square-divide': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:division',
    'mdi:outline': 'mdi:division-outline'
  },
  'lucide:square-dot': {
    'material-symbols': 'material-symbols:fiber-manual-record',
    'material-symbols:sharp': 'material-symbols:fiber-manual-record-sharp',
    'material-symbols:rounded': 'material-symbols:fiber-manual-record',
    'mdi': 'mdi:square-medium',
    'mdi:outline': 'mdi:square-medium-outline'
  },
  'lucide:square-equal': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:equal-box',
    'mdi:outline': 'mdi:equal-box-outline'
  },
  'lucide:square-function': {
    'material-symbols': 'material-symbols:functions',
    'material-symbols:sharp': 'material-symbols:functions-sharp',
    'material-symbols:rounded': 'material-symbols:functions',
    'mdi': 'mdi:function-variant',
    'mdi:outline': 'mdi:function-variant-outline'
  },
  'lucide:square-kanban': {
    'material-symbols': 'material-symbols:view-kanban',
    'material-symbols:sharp': 'material-symbols:view-kanban-sharp',
    'material-symbols:rounded': 'material-symbols:view-kanban',
    'mdi': 'mdi:view-column',
    'mdi:outline': 'mdi:view-column-outline'
  },
  'lucide:square-library': {
    'material-symbols': 'material-symbols:local-library',
    'material-symbols:sharp': 'material-symbols:local-library-sharp',
    'material-symbols:rounded': 'material-symbols:local-library',
    'mdi': 'mdi:library',
    'mdi:outline': 'mdi:library-outline'
  },
  'lucide:square-m': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:alpha-m-box',
    'mdi:outline': 'mdi:alpha-m-box-outline'
  },
  'lucide:square-menu': {
    'material-symbols': 'material-symbols:menu',
    'material-symbols:sharp': 'material-symbols:menu-sharp',
    'material-symbols:rounded': 'material-symbols:menu',
    'mdi': 'mdi:menu',
    'mdi:outline': 'mdi:menu-outline'
  },
  'lucide:square-minus': {
    'material-symbols': 'material-symbols:indeterminate-check-box',
    'material-symbols:sharp': 'material-symbols:indeterminate-check-box-sharp',
    'material-symbols:rounded': 'material-symbols:indeterminate-check-box',
    'mdi': 'mdi:minus-box',
    'mdi:outline': 'mdi:minus-box-outline'
  },
  'lucide:square-mouse-pointer': {
    'material-symbols': 'material-symbols:mouse',
    'material-symbols:sharp': 'material-symbols:mouse-sharp',
    'material-symbols:rounded': 'material-symbols:mouse',
    'mdi': 'mdi:cursor-default',
    'mdi:outline': 'mdi:cursor-default-outline'
  },
  'lucide:square-parking': {
    'material-symbols': 'material-symbols:local-parking',
    'material-symbols:sharp': 'material-symbols:local-parking-sharp',
    'material-symbols:rounded': 'material-symbols:local-parking',
    'mdi': 'mdi:parking',
    'mdi:outline': 'mdi:parking-outline'
  },
  'lucide:square-parking-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:parking',
    'mdi:outline': 'mdi:parking-outline'
  },
  'lucide:square-pause': {
    'material-symbols': 'material-symbols:pause',
    'material-symbols:sharp': 'material-symbols:pause-sharp',
    'material-symbols:rounded': 'material-symbols:pause',
    'mdi': 'mdi:pause',
    'mdi:outline': 'mdi:pause-outline'
  },
  'lucide:square-pen': {
    'material-symbols': 'material-symbols:edit',
    'material-symbols:sharp': 'material-symbols:edit-sharp',
    'material-symbols:rounded': 'material-symbols:edit',
    'mdi': 'mdi:square-edit-outline',
    'mdi:outline': 'mdi:square-edit-outline-outline'
  },
  'lucide:square-percent': {
    'material-symbols': 'material-symbols:percent',
    'material-symbols:sharp': 'material-symbols:percent-sharp',
    'material-symbols:rounded': 'material-symbols:percent',
    'mdi': 'mdi:percent-box',
    'mdi:outline': 'mdi:percent-box-outline'
  },
  'lucide:square-pi': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pi-box',
    'mdi:outline': 'mdi:pi-box-outline'
  },
  'lucide:square-pilcrow': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-pilcrow',
    'mdi:outline': 'mdi:format-pilcrow'
  },
  'lucide:square-play': {
    'material-symbols': 'material-symbols:play-arrow',
    'material-symbols:sharp': 'material-symbols:play-arrow-sharp',
    'material-symbols:rounded': 'material-symbols:play-arrow',
    'mdi': 'mdi:play-box',
    'mdi:outline': 'mdi:play-box-outline'
  },
  'lucide:square-plus': {
    'material-symbols': 'material-symbols:add-box',
    'material-symbols:sharp': 'material-symbols:add-box-sharp',
    'material-symbols:rounded': 'material-symbols:add-box',
    'mdi': 'mdi:plus-box',
    'mdi:outline': 'mdi:plus-box-outline'
  },
  'lucide:square-power': {
    'material-symbols': 'material-symbols:power-settings-new',
    'material-symbols:sharp': 'material-symbols:power-settings-new-sharp',
    'material-symbols:rounded': 'material-symbols:power-settings-new',
    'mdi': 'mdi:power',
    'mdi:outline': 'mdi:power-outline'
  },
  'lucide:square-radical': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:square-root-box',
    'mdi:outline': 'mdi:square-root-box-outline'
  },
  'lucide:square-round-corner': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:square-rounded',
    'mdi:outline': 'mdi:square-rounded-outline'
  },
  'lucide:square-scissors': {
    'material-symbols': 'material-symbols:content-cut',
    'material-symbols:sharp': 'material-symbols:content-cut-sharp',
    'material-symbols:rounded': 'material-symbols:content-cut',
    'mdi': 'mdi:content-cut',
    'mdi:outline': 'mdi:content-cut-outline'
  },
  'lucide:square-sigma': {
    'material-symbols': 'material-symbols:functions',
    'material-symbols:sharp': 'material-symbols:functions-sharp',
    'material-symbols:rounded': 'material-symbols:functions',
    'mdi': 'mdi:sigma',
    'mdi:outline': 'mdi:sigma-outline'
  },
  'lucide:square-slash': {
    'material-symbols': 'material-symbols:do-not-disturb-on',
    'material-symbols:sharp': 'material-symbols:do-not-disturb-on-sharp',
    'material-symbols:rounded': 'material-symbols:do-not-disturb-on',
    'mdi': 'mdi:square-outline',
    'mdi:outline': 'mdi:square-outline-outline'
  },
  'lucide:square-split-horizontal': {
    'material-symbols': 'material-symbols:horizontal-split',
    'material-symbols:sharp': 'material-symbols:horizontal-split-sharp',
    'material-symbols:rounded': 'material-symbols:horizontal-split',
    'mdi': 'mdi:arrow-split-horizontal',
    'mdi:outline': 'mdi:arrow-split-horizontal-outline'
  },
  'lucide:square-split-vertical': {
    'material-symbols': 'material-symbols:vertical-split',
    'material-symbols:sharp': 'material-symbols:vertical-split-sharp',
    'material-symbols:rounded': 'material-symbols:vertical-split',
    'mdi': 'mdi:arrow-split-vertical',
    'mdi:outline': 'mdi:arrow-split-vertical-outline'
  },
  'lucide:square-square': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:square',
    'mdi:outline': 'mdi:square-outline'
  },
  'lucide:square-stack': {
    'material-symbols': 'material-symbols:layers',
    'material-symbols:sharp': 'material-symbols:layers-sharp',
    'material-symbols:rounded': 'material-symbols:layers',
    'mdi': 'mdi:layers',
    'mdi:outline': 'mdi:layers-outline'
  },
  'lucide:square-star': {
    'material-symbols': 'material-symbols:star',
    'material-symbols:sharp': 'material-symbols:star-sharp',
    'material-symbols:rounded': 'material-symbols:star',
    'mdi': 'mdi:star-box',
    'mdi:outline': 'mdi:star-box-outline'
  },
  'lucide:square-stop': {
    'material-symbols': 'material-symbols:stop',
    'material-symbols:sharp': 'material-symbols:stop-sharp',
    'material-symbols:rounded': 'material-symbols:stop',
    'mdi': 'mdi:stop',
    'mdi:outline': 'mdi:stop-outline'
  },
  'lucide:square-terminal': {
    'material-symbols': 'material-symbols:terminal',
    'material-symbols:sharp': 'material-symbols:terminal-sharp',
    'material-symbols:rounded': 'material-symbols:terminal',
    'mdi': 'mdi:console',
    'mdi:outline': 'mdi:console-outline'
  },
  'lucide:square-user': {
    'material-symbols': 'material-symbols:person',
    'material-symbols:sharp': 'material-symbols:person-sharp',
    'material-symbols:rounded': 'material-symbols:person',
    'mdi': 'mdi:account-box',
    'mdi:outline': 'mdi:account-box-outline'
  },
  'lucide:square-user-round': {
    'material-symbols': 'material-symbols:account-circle',
    'material-symbols:sharp': 'material-symbols:account-circle-sharp',
    'material-symbols:rounded': 'material-symbols:account-circle',
    'mdi': 'mdi:account-circle',
    'mdi:outline': 'mdi:account-circle-outline'
  },
  'lucide:square-x': {
    'material-symbols': 'material-symbols:disabled-by-default',
    'material-symbols:sharp': 'material-symbols:disabled-by-default-sharp',
    'material-symbols:rounded': 'material-symbols:disabled-by-default',
    'mdi': 'mdi:close-box',
    'mdi:outline': 'mdi:close-box-outline'
  },
  'lucide:squares-exclude': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:set-left',
    'mdi:outline': 'mdi:set-left-outline'
  },
  'lucide:squares-intersect': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:set-center',
    'mdi:outline': 'mdi:set-center-outline'
  },
  'lucide:squares-subtract': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:set-left',
    'mdi:outline': 'mdi:set-left-outline'
  },
  'lucide:squares-unite': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:set-all',
    'mdi:outline': 'mdi:set-all-outline'
  },
  'lucide:squircle': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:square-rounded',
    'mdi:outline': 'mdi:square-rounded-outline'
  },
  'lucide:squircle-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:square-rounded-outline',
    'mdi:outline': 'mdi:square-rounded-outline-outline'
  },
  'lucide:squirrel': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:distribute-horizontal-left',
    'mdi:outline': 'mdi:distribute-horizontal-left'
  },
  'lucide:stamp': {
    'material-symbols': 'material-symbols:approval',
    'material-symbols:sharp': 'material-symbols:approval-sharp',
    'material-symbols:rounded': 'material-symbols:approval',
    'mdi': 'mdi:stamper',
    'mdi:outline': 'mdi:stamper-outline'
  },
  'lucide:star': {
    'material-symbols': 'material-symbols:star',
    'material-symbols:sharp': 'material-symbols:star-sharp',
    'material-symbols:rounded': 'material-symbols:star',
    'mdi': 'mdi:star',
    'mdi:outline': 'mdi:star-outline'
  },
  'lucide:star-half': {
    'material-symbols': 'material-symbols:star-half',
    'material-symbols:sharp': 'material-symbols:star-half-sharp',
    'material-symbols:rounded': 'material-symbols:star-half',
    'mdi': 'mdi:star-half-full',
    'mdi:outline': 'mdi:star-half-full-outline'
  },
  'lucide:star-off': {
    'material-symbols': 'material-symbols:star-outline',
    'material-symbols:sharp': 'material-symbols:star-outline-sharp',
    'material-symbols:rounded': 'material-symbols:star-outline',
    'mdi': 'mdi:star-off',
    'mdi:outline': 'mdi:star-off-outline'
  },
  'lucide:step-back': {
    'material-symbols': 'material-symbols:skip-previous',
    'material-symbols:sharp': 'material-symbols:skip-previous-sharp',
    'material-symbols:rounded': 'material-symbols:skip-previous',
    'mdi': 'mdi:step-backward',
    'mdi:outline': 'mdi:step-backward-outline'
  },
  'lucide:step-forward': {
    'material-symbols': 'material-symbols:skip-next',
    'material-symbols:sharp': 'material-symbols:skip-next-sharp',
    'material-symbols:rounded': 'material-symbols:skip-next',
    'mdi': 'mdi:step-forward',
    'mdi:outline': 'mdi:step-forward-outline'
  },
  'lucide:stethoscope': {
    'material-symbols': 'material-symbols:stethoscope',
    'material-symbols:sharp': 'material-symbols:stethoscope-sharp',
    'material-symbols:rounded': 'material-symbols:stethoscope',
    'mdi': 'mdi:stethoscope',
    'mdi:outline': 'mdi:stethoscope-outline'
  },
  'lucide:sticker': {
    'material-symbols': 'material-symbols:note',
    'material-symbols:sharp': 'material-symbols:note-sharp',
    'material-symbols:rounded': 'material-symbols:note',
    'mdi': 'mdi:sticker',
    'mdi:outline': 'mdi:sticker-outline'
  },
  'lucide:sticky-note': {
    'material-symbols': 'material-symbols:sticky-note-2',
    'material-symbols:sharp': 'material-symbols:sticky-note-2-sharp',
    'material-symbols:rounded': 'material-symbols:sticky-note-2',
    'mdi': 'mdi:note',
    'mdi:outline': 'mdi:note-outline'
  },
  'lucide:store': {
    'material-symbols': 'material-symbols:store',
    'material-symbols:sharp': 'material-symbols:store-sharp',
    'material-symbols:rounded': 'material-symbols:store',
    'mdi': 'mdi:store',
    'mdi:outline': 'mdi:store-outline'
  },
  'lucide:stretch-horizontal': {
    'material-symbols': 'material-symbols:unfold-more-horizontal',
    'material-symbols:sharp': 'material-symbols:unfold-more-horizontal-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-more-horizontal',
    'mdi': 'mdi:arrow-expand-horizontal',
    'mdi:outline': 'mdi:arrow-expand-horizontal-outline'
  },
  'lucide:stretch-vertical': {
    'material-symbols': 'material-symbols:unfold-more',
    'material-symbols:sharp': 'material-symbols:unfold-more-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-more',
    'mdi': 'mdi:arrow-expand-vertical',
    'mdi:outline': 'mdi:arrow-expand-vertical-outline'
  },
  'lucide:strikethrough': {
    'material-symbols': 'material-symbols:format-strikethrough',
    'material-symbols:sharp': 'material-symbols:format-strikethrough-sharp',
    'material-symbols:rounded': 'material-symbols:format-strikethrough',
    'mdi': 'mdi:format-strikethrough',
    'mdi:outline': 'mdi:format-strikethrough'
  },
  'lucide:subscript': {
    'material-symbols': 'material-symbols:subscript',
    'material-symbols:sharp': 'material-symbols:subscript-sharp',
    'material-symbols:rounded': 'material-symbols:subscript',
    'mdi': 'mdi:format-subscript',
    'mdi:outline': 'mdi:format-subscript'
  },
  'lucide:sun': {
    'material-symbols': 'material-symbols:sun',
    'material-symbols:sharp': 'material-symbols:sun',
    'material-symbols:rounded': 'material-symbols:sun-rounded',
    'mdi': 'mdi:white-balance-sunny',
    'mdi:outline': 'mdi:white-balance-sunny'
  },
  'lucide:sun-dim': {
    'material-symbols': 'material-symbols:wb-twilight',
    'material-symbols:sharp': 'material-symbols:wb-twilight-sharp',
    'material-symbols:rounded': 'material-symbols:wb-twilight',
    'mdi': 'mdi:weather-partly-cloudy',
    'mdi:outline': 'mdi:weather-partly-cloudy-outline'
  },
  'lucide:sun-medium': {
    'material-symbols': 'material-symbols:wb-sunny',
    'material-symbols:sharp': 'material-symbols:wb-sunny-sharp',
    'material-symbols:rounded': 'material-symbols:wb-sunny',
    'mdi': 'mdi:weather-sunny',
    'mdi:outline': 'mdi:weather-sunny-outline'
  },
  'lucide:sun-moon': {
    'material-symbols': 'material-symbols:brightness-auto',
    'material-symbols:sharp': 'material-symbols:brightness-auto-sharp',
    'material-symbols:rounded': 'material-symbols:brightness-auto',
    'mdi': 'mdi:theme-light-dark',
    'mdi:outline': 'mdi:theme-light-dark-outline'
  },
  'lucide:sun-snow': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:weather-snowy',
    'mdi:outline': 'mdi:weather-snowy-outline'
  },
  'lucide:sunrise': {
    'material-symbols': 'material-symbols:wb-sunny',
    'material-symbols:sharp': 'material-symbols:wb-sunny-sharp',
    'material-symbols:rounded': 'material-symbols:wb-sunny',
    'mdi': 'mdi:weather-sunset-up',
    'mdi:outline': 'mdi:weather-sunset-up-outline'
  },
  'lucide:sunset': {
    'material-symbols': 'material-symbols:wb-twilight',
    'material-symbols:sharp': 'material-symbols:wb-twilight-sharp',
    'material-symbols:rounded': 'material-symbols:wb-twilight',
    'mdi': 'mdi:weather-sunset-down',
    'mdi:outline': 'mdi:weather-sunset-down-outline'
  },
  'lucide:superscript': {
    'material-symbols': 'material-symbols:superscript',
    'material-symbols:sharp': 'material-symbols:superscript-sharp',
    'material-symbols:rounded': 'material-symbols:superscript',
    'mdi': 'mdi:format-superscript',
    'mdi:outline': 'mdi:format-superscript'
  },
  'lucide:swatch-book': {
    'material-symbols': 'material-symbols:palette',
    'material-symbols:sharp': 'material-symbols:palette-sharp',
    'material-symbols:rounded': 'material-symbols:palette',
    'mdi': 'mdi:palette-swatch',
    'mdi:outline': 'mdi:palette-swatch-outline'
  },
  'lucide:swiss-franc': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:currency-chf',
    'mdi:outline': 'mdi:currency-chf-outline'
  },
  'lucide:switch-camera': {
    'material-symbols': 'material-symbols:switch-camera',
    'material-symbols:sharp': 'material-symbols:switch-camera-sharp',
    'material-symbols:rounded': 'material-symbols:switch-camera',
    'mdi': 'mdi:camera-switch',
    'mdi:outline': 'mdi:camera-switch-outline'
  },
  'lucide:sword': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:sword',
    'mdi:outline': 'mdi:sword-outline'
  },
  'lucide:swords': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:sword-cross',
    'mdi:outline': 'mdi:sword-cross-outline'
  },
  'lucide:syringe': {
    'material-symbols': 'material-symbols:vaccines',
    'material-symbols:sharp': 'material-symbols:vaccines-sharp',
    'material-symbols:rounded': 'material-symbols:vaccines',
    'mdi': 'mdi:needle',
    'mdi:outline': 'mdi:needle-outline'
  },
  'lucide:table': {
    'material-symbols': 'material-symbols:table-chart',
    'material-symbols:sharp': 'material-symbols:table-chart-sharp',
    'material-symbols:rounded': 'material-symbols:table-chart',
    'mdi': 'mdi:table',
    'mdi:outline': 'mdi:table-outline'
  },
  'lucide:table-2': {
    'material-symbols': 'material-symbols:table-view',
    'material-symbols:sharp': 'material-symbols:table-view-sharp',
    'material-symbols:rounded': 'material-symbols:table-view',
    'mdi': 'mdi:table-large',
    'mdi:outline': 'mdi:table-large-outline'
  },
  'lucide:table-cells-merge': {
    'material-symbols': 'material-symbols:merge-cells',
    'material-symbols:sharp': 'material-symbols:merge-cells-sharp',
    'material-symbols:rounded': 'material-symbols:merge-cells',
    'mdi': 'mdi:table-merge-cells',
    'mdi:outline': 'mdi:table-merge-cells-outline'
  },
  'lucide:table-cells-split': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:table-split-cell',
    'mdi:outline': 'mdi:table-split-cell-outline'
  },
  'lucide:table-columns-split': {
    'material-symbols': 'material-symbols:view-column',
    'material-symbols:sharp': 'material-symbols:view-column-sharp',
    'material-symbols:rounded': 'material-symbols:view-column',
    'mdi': 'mdi:table-column-plus-after',
    'mdi:outline': 'mdi:table-column-plus-after-outline'
  },
  'lucide:table-of-contents': {
    'material-symbols': 'material-symbols:toc',
    'material-symbols:sharp': 'material-symbols:toc-sharp',
    'material-symbols:rounded': 'material-symbols:toc',
    'mdi': 'mdi:table-of-contents',
    'mdi:outline': 'mdi:table-of-contents-outline'
  },
  'lucide:table-properties': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:table-cog',
    'mdi:outline': 'mdi:table-cog-outline'
  },
  'lucide:table-rows-split': {
    'material-symbols': 'material-symbols:table-rows',
    'material-symbols:sharp': 'material-symbols:table-rows-sharp',
    'material-symbols:rounded': 'material-symbols:table-rows',
    'mdi': 'mdi:table-row-plus-after',
    'mdi:outline': 'mdi:table-row-plus-after-outline'
  },
  'lucide:tablet': {
    'material-symbols': 'material-symbols:tablet',
    'material-symbols:sharp': 'material-symbols:tablet-sharp',
    'material-symbols:rounded': 'material-symbols:tablet',
    'mdi': 'mdi:tablet',
    'mdi:outline': 'mdi:tablet-outline'
  },
  'lucide:tablet-smartphone': {
    'material-symbols': 'material-symbols:devices',
    'material-symbols:sharp': 'material-symbols:devices-sharp',
    'material-symbols:rounded': 'material-symbols:devices',
    'mdi': 'mdi:responsive',
    'mdi:outline': 'mdi:responsive-outline'
  },
  'lucide:tablets': {
    'material-symbols': 'material-symbols:medication',
    'material-symbols:sharp': 'material-symbols:medication-sharp',
    'material-symbols:rounded': 'material-symbols:medication',
    'mdi': 'mdi:pill',
    'mdi:outline': 'mdi:pill-outline'
  },
  'lucide:tag': {
    'material-symbols': 'material-symbols:label',
    'material-symbols:sharp': 'material-symbols:label-sharp',
    'material-symbols:rounded': 'material-symbols:label',
    'mdi': 'mdi:tag',
    'mdi:outline': 'mdi:tag-outline'
  },
  'lucide:tags': {
    'material-symbols': 'material-symbols:local-offer',
    'material-symbols:sharp': 'material-symbols:local-offer-sharp',
    'material-symbols:rounded': 'material-symbols:local-offer',
    'mdi': 'mdi:tag-multiple',
    'mdi:outline': 'mdi:tag-multiple-outline'
  },
  'lucide:tally-1': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:numeric-1',
    'mdi:outline': 'mdi:numeric-1-outline'
  },
  'lucide:tally-2': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:numeric-2',
    'mdi:outline': 'mdi:numeric-2-outline'
  },
  'lucide:tally-3': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:numeric-3',
    'mdi:outline': 'mdi:numeric-3-outline'
  },
  'lucide:tally-4': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:numeric-4',
    'mdi:outline': 'mdi:numeric-4-outline'
  },
  'lucide:tally-5': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:numeric-5',
    'mdi:outline': 'mdi:numeric-5-outline'
  },
  'lucide:tangent': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:tangent',
    'mdi:outline': 'mdi:tangent-outline'
  },
  'lucide:target': {
    'material-symbols': 'material-symbols:trip-origin',
    'material-symbols:sharp': 'material-symbols:trip-origin-sharp',
    'material-symbols:rounded': 'material-symbols:trip-origin',
    'mdi': 'mdi:target',
    'mdi:outline': 'mdi:target-outline'
  },
  'lucide:telescope': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:telescope',
    'mdi:outline': 'mdi:telescope-outline'
  },
  'lucide:tent': {
    'material-symbols': 'material-symbols:camping',
    'material-symbols:sharp': 'material-symbols:camping-sharp',
    'material-symbols:rounded': 'material-symbols:camping',
    'mdi': 'mdi:tent',
    'mdi:outline': 'mdi:tent-outline'
  },
  'lucide:tent-tree': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:pine-tree',
    'mdi:outline': 'mdi:pine-tree-outline'
  },
  'lucide:terminal': {
    'material-symbols': 'material-symbols:terminal',
    'material-symbols:sharp': 'material-symbols:terminal-sharp',
    'material-symbols:rounded': 'material-symbols:terminal',
    'mdi': 'mdi:console',
    'mdi:outline': 'mdi:console-outline'
  },
  'lucide:test-tube': {
    'material-symbols': 'material-symbols:science',
    'material-symbols:sharp': 'material-symbols:science-sharp',
    'material-symbols:rounded': 'material-symbols:science',
    'mdi': 'mdi:test-tube',
    'mdi:outline': 'mdi:test-tube-outline'
  },
  'lucide:test-tube-diagonal': {
    'material-symbols': 'material-symbols:biotech',
    'material-symbols:sharp': 'material-symbols:biotech-sharp',
    'material-symbols:rounded': 'material-symbols:biotech',
    'mdi': 'mdi:test-tube',
    'mdi:outline': 'mdi:test-tube-outline'
  },
  'lucide:test-tubes': {
    'material-symbols': 'material-symbols:science',
    'material-symbols:sharp': 'material-symbols:science-sharp',
    'material-symbols:rounded': 'material-symbols:science',
    'mdi': 'mdi:test-tube',
    'mdi:outline': 'mdi:test-tube-outline'
  },
  'lucide:text-align-center': {
    'material-symbols': 'material-symbols:format-align-center',
    'material-symbols:sharp': 'material-symbols:format-align-center-sharp',
    'material-symbols:rounded': 'material-symbols:format-align-center',
    'mdi': 'mdi:format-align-center',
    'mdi:outline': 'mdi:format-align-center'
  },
  'lucide:text-align-end': {
    'material-symbols': 'material-symbols:format-align-right',
    'material-symbols:sharp': 'material-symbols:format-align-right-sharp',
    'material-symbols:rounded': 'material-symbols:format-align-right',
    'mdi': 'mdi:format-align-right',
    'mdi:outline': 'mdi:format-align-right'
  },
  'lucide:text-align-justify': {
    'material-symbols': 'material-symbols:format-align-justify',
    'material-symbols:sharp': 'material-symbols:format-align-justify-sharp',
    'material-symbols:rounded': 'material-symbols:format-align-justify',
    'mdi': 'mdi:format-align-justify',
    'mdi:outline': 'mdi:format-align-justify'
  },
  'lucide:text-align-start': {
    'material-symbols': 'material-symbols:format-align-left',
    'material-symbols:sharp': 'material-symbols:format-align-left-sharp',
    'material-symbols:rounded': 'material-symbols:format-align-left',
    'mdi': 'mdi:format-align-left',
    'mdi:outline': 'mdi:format-align-left'
  },
  'lucide:text-cursor': {
    'material-symbols': 'material-symbols:text-fields',
    'material-symbols:sharp': 'material-symbols:text-fields-sharp',
    'material-symbols:rounded': 'material-symbols:text-fields',
    'mdi': 'mdi:cursor-text',
    'mdi:outline': 'mdi:cursor-text-outline'
  },
  'lucide:text-cursor-input': {
    'material-symbols': 'material-symbols:text-fields',
    'material-symbols:sharp': 'material-symbols:text-fields-sharp',
    'material-symbols:rounded': 'material-symbols:text-fields',
    'mdi': 'mdi:format-text',
    'mdi:outline': 'mdi:format-text'
  },
  'lucide:text-initial': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-letter-starts-with',
    'mdi:outline': 'mdi:format-letter-starts-with-outline'
  },
  'lucide:text-quote': {
    'material-symbols': 'material-symbols:format-quote',
    'material-symbols:sharp': 'material-symbols:format-quote-sharp',
    'material-symbols:rounded': 'material-symbols:format-quote',
    'mdi': 'mdi:format-quote-close',
    'mdi:outline': 'mdi:format-quote-close'
  },
  'lucide:text-search': {
    'material-symbols': 'material-symbols:search',
    'material-symbols:sharp': 'material-symbols:search-sharp',
    'material-symbols:rounded': 'material-symbols:search',
    'mdi': 'mdi:text-search',
    'mdi:outline': 'mdi:text-search-outline'
  },
  'lucide:text-select': {
    'material-symbols': 'material-symbols:select-all',
    'material-symbols:sharp': 'material-symbols:select-all-sharp',
    'material-symbols:rounded': 'material-symbols:select-all',
    'mdi': 'mdi:select',
    'mdi:outline': 'mdi:select-outline'
  },
  'lucide:text-wrap': {
    'material-symbols': 'material-symbols:wrap-text',
    'material-symbols:sharp': 'material-symbols:wrap-text-sharp',
    'material-symbols:rounded': 'material-symbols:wrap-text',
    'mdi': 'mdi:wrap',
    'mdi:outline': 'mdi:wrap-outline'
  },
  'lucide:theater': {
    'material-symbols': 'material-symbols:theaters',
    'material-symbols:sharp': 'material-symbols:theaters-sharp',
    'material-symbols:rounded': 'material-symbols:theaters',
    'mdi': 'mdi:theater',
    'mdi:outline': 'mdi:theater-outline'
  },
  'lucide:thermometer': {
    'material-symbols': 'material-symbols:thermostat',
    'material-symbols:sharp': 'material-symbols:thermostat-sharp',
    'material-symbols:rounded': 'material-symbols:thermostat',
    'mdi': 'mdi:thermometer',
    'mdi:outline': 'mdi:thermometer-outline'
  },
  'lucide:thermometer-snowflake': {
    'material-symbols': 'material-symbols:ac-unit',
    'material-symbols:sharp': 'material-symbols:ac-unit-sharp',
    'material-symbols:rounded': 'material-symbols:ac-unit',
    'mdi': 'mdi:snowflake',
    'mdi:outline': 'mdi:snowflake-outline'
  },
  'lucide:thermometer-sun': {
    'material-symbols': 'material-symbols:wb-sunny',
    'material-symbols:sharp': 'material-symbols:wb-sunny-sharp',
    'material-symbols:rounded': 'material-symbols:wb-sunny',
    'mdi': 'mdi:thermometer',
    'mdi:outline': 'mdi:thermometer-outline'
  },
  'lucide:thumbs-down': {
    'material-symbols': 'material-symbols:thumb-down',
    'material-symbols:sharp': 'material-symbols:thumb-down-sharp',
    'material-symbols:rounded': 'material-symbols:thumb-down',
    'mdi': 'mdi:thumb-down',
    'mdi:outline': 'mdi:thumb-down-outline'
  },
  'lucide:thumbs-up': {
    'material-symbols': 'material-symbols:thumb-up',
    'material-symbols:sharp': 'material-symbols:thumb-up-sharp',
    'material-symbols:rounded': 'material-symbols:thumb-up',
    'mdi': 'mdi:thumb-up',
    'mdi:outline': 'mdi:thumb-up-outline'
  },
  'lucide:ticket': {
    'material-symbols': 'material-symbols:confirmation-number',
    'material-symbols:sharp': 'material-symbols:confirmation-number-sharp',
    'material-symbols:rounded': 'material-symbols:confirmation-number',
    'mdi': 'mdi:ticket',
    'mdi:outline': 'mdi:ticket-outline'
  },
  'lucide:ticket-check': {
    'material-symbols': 'material-symbols:check',
    'material-symbols:sharp': 'material-symbols:check-sharp',
    'material-symbols:rounded': 'material-symbols:check',
    'mdi': 'mdi:ticket-confirmation',
    'mdi:outline': 'mdi:ticket-confirmation-outline'
  },
  'lucide:ticket-minus': {
    'material-symbols': 'material-symbols:remove',
    'material-symbols:sharp': 'material-symbols:remove-sharp',
    'material-symbols:rounded': 'material-symbols:remove',
    'mdi': 'mdi:format-align-center',
    'mdi:outline': 'mdi:format-align-center'
  },
  'lucide:ticket-percent': {
    'material-symbols': 'material-symbols:percent',
    'material-symbols:sharp': 'material-symbols:percent-sharp',
    'material-symbols:rounded': 'material-symbols:percent',
    'mdi': 'mdi:ticket-percent',
    'mdi:outline': 'mdi:ticket-percent-outline'
  },
  'lucide:ticket-plus': {
    'material-symbols': 'material-symbols:add',
    'material-symbols:sharp': 'material-symbols:add-sharp',
    'material-symbols:rounded': 'material-symbols:add',
    'mdi': 'mdi:format-align-right',
    'mdi:outline': 'mdi:format-align-right'
  },
  'lucide:ticket-slash': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:ticket',
    'mdi:outline': 'mdi:ticket-outline'
  },
  'lucide:ticket-x': {
    'material-symbols': 'material-symbols:close',
    'material-symbols:sharp': 'material-symbols:close-sharp',
    'material-symbols:rounded': 'material-symbols:close',
    'mdi': 'mdi:format-align-left',
    'mdi:outline': 'mdi:format-align-left'
  },
  'lucide:tickets': {
    'material-symbols': 'material-symbols:local-activity',
    'material-symbols:sharp': 'material-symbols:local-activity-sharp',
    'material-symbols:rounded': 'material-symbols:local-activity',
    'mdi': 'mdi:ticket-account',
    'mdi:outline': 'mdi:ticket-account-outline'
  },
  'lucide:tickets-plane': {
    'material-symbols': 'material-symbols:flight',
    'material-symbols:sharp': 'material-symbols:flight-sharp',
    'material-symbols:rounded': 'material-symbols:flight',
    'mdi': 'mdi:airplane-ticket',
    'mdi:outline': 'mdi:airplane-ticket-outline'
  },
  'lucide:timer': {
    'material-symbols': 'material-symbols:timer',
    'material-symbols:sharp': 'material-symbols:timer-sharp',
    'material-symbols:rounded': 'material-symbols:timer',
    'mdi': 'mdi:timer',
    'mdi:outline': 'mdi:timer-outline'
  },
  'lucide:timer-off': {
    'material-symbols': 'material-symbols:timer-off',
    'material-symbols:sharp': 'material-symbols:timer-off-sharp',
    'material-symbols:rounded': 'material-symbols:timer-off',
    'mdi': 'mdi:timer-off',
    'mdi:outline': 'mdi:timer-off-outline'
  },
  'lucide:timer-reset': {
    'material-symbols': 'material-symbols:restore',
    'material-symbols:sharp': 'material-symbols:restore-sharp',
    'material-symbols:rounded': 'material-symbols:restore',
    'mdi': 'mdi:timer-refresh',
    'mdi:outline': 'mdi:timer-refresh-outline'
  },
  'lucide:toggle-left': {
    'material-symbols': 'material-symbols:toggle-off',
    'material-symbols:sharp': 'material-symbols:toggle-off-sharp',
    'material-symbols:rounded': 'material-symbols:toggle-off',
    'mdi': 'mdi:toggle-switch-off',
    'mdi:outline': 'mdi:toggle-switch-off-outline'
  },
  'lucide:toggle-right': {
    'material-symbols': 'material-symbols:toggle-on',
    'material-symbols:sharp': 'material-symbols:toggle-on-sharp',
    'material-symbols:rounded': 'material-symbols:toggle-on',
    'mdi': 'mdi:toggle-switch',
    'mdi:outline': 'mdi:toggle-switch-outline'
  },
  'lucide:toilet': {
    'material-symbols': 'material-symbols:wc',
    'material-symbols:sharp': 'material-symbols:wc-sharp',
    'material-symbols:rounded': 'material-symbols:wc',
    'mdi': 'mdi:toilet',
    'mdi:outline': 'mdi:toilet-outline'
  },
  'lucide:tool-case': {
    'material-symbols': 'material-symbols:handyman',
    'material-symbols:sharp': 'material-symbols:handyman-sharp',
    'material-symbols:rounded': 'material-symbols:handyman',
    'mdi': 'mdi:toolbox',
    'mdi:outline': 'mdi:toolbox-outline'
  },
  'lucide:tornado': {
    'material-symbols': 'material-symbols:tornado',
    'material-symbols:sharp': 'material-symbols:tornado-sharp',
    'material-symbols:rounded': 'material-symbols:tornado',
    'mdi': 'mdi:tornado',
    'mdi:outline': 'mdi:tornado-outline'
  },
  'lucide:torus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:circle-double',
    'mdi:outline': 'mdi:circle-double-outline'
  },
  'lucide:touchpad': {
    'material-symbols': 'material-symbols:touchpad',
    'material-symbols:sharp': 'material-symbols:touchpad-sharp',
    'material-symbols:rounded': 'material-symbols:touchpad',
    'mdi': 'mdi:gesture-tap',
    'mdi:outline': 'mdi:gesture-tap-outline'
  },
  'lucide:touchpad-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-align-left',
    'mdi:outline': 'mdi:format-align-left'
  },
  'lucide:tower-control': {
    'material-symbols': 'material-symbols:control-camera',
    'material-symbols:sharp': 'material-symbols:control-camera-sharp',
    'material-symbols:rounded': 'material-symbols:control-camera',
    'mdi': 'mdi:airport',
    'mdi:outline': 'mdi:airport-outline'
  },
  'lucide:toy-brick': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:toy-brick',
    'mdi:outline': 'mdi:toy-brick-outline'
  },
  'lucide:tractor': {
    'material-symbols': 'material-symbols:agriculture',
    'material-symbols:sharp': 'material-symbols:agriculture-sharp',
    'material-symbols:rounded': 'material-symbols:agriculture',
    'mdi': 'mdi:tractor',
    'mdi:outline': 'mdi:tractor-outline'
  },
  'lucide:traffic-cone': {
    'material-symbols': 'material-symbols:traffic',
    'material-symbols:sharp': 'material-symbols:traffic-sharp',
    'material-symbols:rounded': 'material-symbols:traffic',
    'mdi': 'mdi:traffic-cone',
    'mdi:outline': 'mdi:traffic-cone-outline'
  },
  'lucide:train-front': {
    'material-symbols': 'material-symbols:train',
    'material-symbols:sharp': 'material-symbols:train-sharp',
    'material-symbols:rounded': 'material-symbols:train',
    'mdi': 'mdi:train',
    'mdi:outline': 'mdi:train-outline'
  },
  'lucide:train-front-tunnel': {
    'material-symbols': 'material-symbols:subway',
    'material-symbols:sharp': 'material-symbols:subway-sharp',
    'material-symbols:rounded': 'material-symbols:subway',
    'mdi': 'mdi:tunnel',
    'mdi:outline': 'mdi:tunnel-outline'
  },
  'lucide:train-track': {
    'material-symbols': 'material-symbols:train',
    'material-symbols:sharp': 'material-symbols:train-sharp',
    'material-symbols:rounded': 'material-symbols:train',
    'mdi': 'mdi:train',
    'mdi:outline': 'mdi:train-outline'
  },
  'lucide:tram-front': {
    'material-symbols': 'material-symbols:tram',
    'material-symbols:sharp': 'material-symbols:tram-sharp',
    'material-symbols:rounded': 'material-symbols:tram',
    'mdi': 'mdi:tram',
    'mdi:outline': 'mdi:tram-outline'
  },
  'lucide:transgender': {
    'material-symbols': 'material-symbols:transgender',
    'material-symbols:sharp': 'material-symbols:transgender-sharp',
    'material-symbols:rounded': 'material-symbols:transgender',
    'mdi': 'mdi:gender-transgender',
    'mdi:outline': 'mdi:gender-transgender-outline'
  },
  'lucide:trash': {
    'material-symbols': 'material-symbols:delete',
    'material-symbols:sharp': 'material-symbols:delete-sharp',
    'material-symbols:rounded': 'material-symbols:delete',
    'mdi': 'mdi:delete',
    'mdi:outline': 'mdi:delete-outline'
  },
  'lucide:trash-2': {
    'material-symbols': 'material-symbols:delete-forever',
    'material-symbols:sharp': 'material-symbols:delete-forever-sharp',
    'material-symbols:rounded': 'material-symbols:delete-forever',
    'mdi': 'mdi:trash-can',
    'mdi:outline': 'mdi:trash-can-outline'
  },
  'lucide:tree-deciduous': {
    'material-symbols': 'material-symbols:forest',
    'material-symbols:sharp': 'material-symbols:forest-sharp',
    'material-symbols:rounded': 'material-symbols:forest',
    'mdi': 'mdi:tree',
    'mdi:outline': 'mdi:tree-outline'
  },
  'lucide:tree-palm': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:palm-tree',
    'mdi:outline': 'mdi:palm-tree-outline'
  },
  'lucide:tree-pine': {
    'material-symbols': 'material-symbols:park',
    'material-symbols:sharp': 'material-symbols:park-sharp',
    'material-symbols:rounded': 'material-symbols:park',
    'mdi': 'mdi:pine-tree',
    'mdi:outline': 'mdi:pine-tree-outline'
  },
  'lucide:trees': {
    'material-symbols': 'material-symbols:forest',
    'material-symbols:sharp': 'material-symbols:forest-sharp',
    'material-symbols:rounded': 'material-symbols:forest',
    'mdi': 'mdi:tree',
    'mdi:outline': 'mdi:tree-outline'
  },
  'lucide:trello': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:trello',
    'mdi:outline': 'mdi:trello-outline'
  },
  'lucide:trending-down': {
    'material-symbols': 'material-symbols:trending-down',
    'material-symbols:sharp': 'material-symbols:trending-down-sharp',
    'material-symbols:rounded': 'material-symbols:trending-down',
    'mdi': 'mdi:trending-down',
    'mdi:outline': 'mdi:trending-down-outline'
  },
  'lucide:trending-up': {
    'material-symbols': 'material-symbols:trending-up',
    'material-symbols:sharp': 'material-symbols:trending-up-sharp',
    'material-symbols:rounded': 'material-symbols:trending-up',
    'mdi': 'mdi:trending-up',
    'mdi:outline': 'mdi:trending-up-outline'
  },
  'lucide:trending-up-down': {
    'material-symbols': 'material-symbols:trending-flat',
    'material-symbols:sharp': 'material-symbols:trending-flat-sharp',
    'material-symbols:rounded': 'material-symbols:trending-flat',
    'mdi': 'mdi:trending-neutral',
    'mdi:outline': 'mdi:trending-neutral-outline'
  },
  'lucide:triangle': {
    'material-symbols': 'material-symbols:change-history',
    'material-symbols:sharp': 'material-symbols:change-history-sharp',
    'material-symbols:rounded': 'material-symbols:change-history',
    'mdi': 'mdi:triangle',
    'mdi:outline': 'mdi:triangle-outline'
  },
  'lucide:triangle-alert': {
    'material-symbols': 'material-symbols:warning',
    'material-symbols:sharp': 'material-symbols:warning-sharp',
    'material-symbols:rounded': 'material-symbols:warning',
    'mdi': 'mdi:alert-triangle',
    'mdi:outline': 'mdi:alert-triangle-outline'
  },
  'lucide:triangle-dashed': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:triangle-outline',
    'mdi:outline': 'mdi:triangle-outline-outline'
  },
  'lucide:triangle-right': {
    'material-symbols': 'material-symbols:play-arrow',
    'material-symbols:sharp': 'material-symbols:play-arrow-sharp',
    'material-symbols:rounded': 'material-symbols:play-arrow',
    'mdi': 'mdi:triangle',
    'mdi:outline': 'mdi:triangle-outline'
  },
  'lucide:trophy': {
    'material-symbols': 'material-symbols:emoji-events',
    'material-symbols:sharp': 'material-symbols:emoji-events-sharp',
    'material-symbols:rounded': 'material-symbols:emoji-events',
    'mdi': 'mdi:trophy',
    'mdi:outline': 'mdi:trophy-outline'
  },
  'lucide:truck': {
    'material-symbols': 'material-symbols:local-shipping',
    'material-symbols:sharp': 'material-symbols:local-shipping-sharp',
    'material-symbols:rounded': 'material-symbols:local-shipping',
    'mdi': 'mdi:truck',
    'mdi:outline': 'mdi:truck-outline'
  },
  'lucide:truck-electric': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:truck-cargo-container',
    'mdi:outline': 'mdi:truck-cargo-container-outline'
  },
  'lucide:turkish-lira': {
    'material-symbols': 'material-symbols:currency-lira',
    'material-symbols:sharp': 'material-symbols:currency-lira-sharp',
    'material-symbols:rounded': 'material-symbols:currency-lira',
    'mdi': 'mdi:currency-try',
    'mdi:outline': 'mdi:currency-try-outline'
  },
  'lucide:turntable': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:album',
    'mdi:outline': 'mdi:album-outline'
  },
  'lucide:turtle': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:turtle',
    'mdi:outline': 'mdi:turtle-outline'
  },
  'lucide:tv': {
    'material-symbols': 'material-symbols:tv',
    'material-symbols:sharp': 'material-symbols:tv-sharp',
    'material-symbols:rounded': 'material-symbols:tv',
    'mdi': 'mdi:television',
    'mdi:outline': 'mdi:television-outline'
  },
  'lucide:tv-minimal': {
    'material-symbols': 'material-symbols:tv',
    'material-symbols:sharp': 'material-symbols:tv-sharp',
    'material-symbols:rounded': 'material-symbols:tv',
    'mdi': 'mdi:television-classic',
    'mdi:outline': 'mdi:television-classic-outline'
  },
  'lucide:tv-minimal-play': {
    'material-symbols': 'material-symbols:play-arrow',
    'material-symbols:sharp': 'material-symbols:play-arrow-sharp',
    'material-symbols:rounded': 'material-symbols:play-arrow',
    'mdi': 'mdi:television-play',
    'mdi:outline': 'mdi:television-play-outline'
  },
  'lucide:twitch': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:twitch',
    'mdi:outline': 'mdi:twitch-outline'
  },
  'lucide:twitter': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:twitter',
    'mdi:outline': 'mdi:twitter-outline'
  },
  'lucide:type': {
    'material-symbols': 'material-symbols:text-fields',
    'material-symbols:sharp': 'material-symbols:text-fields-sharp',
    'material-symbols:rounded': 'material-symbols:text-fields',
    'mdi': 'mdi:format-text',
    'mdi:outline': 'mdi:format-text'
  },
  'lucide:type-outline': {
    'material-symbols': 'material-symbols:text-format',
    'material-symbols:sharp': 'material-symbols:text-format-sharp',
    'material-symbols:rounded': 'material-symbols:text-format',
    'mdi': 'mdi:format-text-variant',
    'mdi:outline': 'mdi:format-text-variant-outline'
  },
  'lucide:umbrella': {
    'material-symbols': 'material-symbols:umbrella',
    'material-symbols:sharp': 'material-symbols:umbrella-sharp',
    'material-symbols:rounded': 'material-symbols:umbrella',
    'mdi': 'mdi:umbrella',
    'mdi:outline': 'mdi:umbrella-outline'
  },
  'lucide:umbrella-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:umbrella-outline',
    'mdi:outline': 'mdi:umbrella-outline-outline'
  },
  'lucide:underline': {
    'material-symbols': 'material-symbols:format-underlined',
    'material-symbols:sharp': 'material-symbols:format-underlined-sharp',
    'material-symbols:rounded': 'material-symbols:format-underlined',
    'mdi': 'mdi:format-underline',
    'mdi:outline': 'mdi:format-underline'
  },
  'lucide:undo': {
    'material-symbols': 'material-symbols:undo',
    'material-symbols:sharp': 'material-symbols:undo-sharp',
    'material-symbols:rounded': 'material-symbols:undo',
    'mdi': 'mdi:undo',
    'mdi:outline': 'mdi:undo-outline'
  },
  'lucide:undo-2': {
    'material-symbols': 'material-symbols:undo',
    'material-symbols:sharp': 'material-symbols:undo-sharp',
    'material-symbols:rounded': 'material-symbols:undo',
    'mdi': 'mdi:undo-variant',
    'mdi:outline': 'mdi:undo-variant-outline'
  },
  'lucide:undo-dot': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:undo',
    'mdi:outline': 'mdi:undo-outline'
  },
  'lucide:unfold-horizontal': {
    'material-symbols': 'material-symbols:unfold-more-horizontal',
    'material-symbols:sharp': 'material-symbols:unfold-more-horizontal-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-more-horizontal',
    'mdi': 'mdi:unfold-more-horizontal',
    'mdi:outline': 'mdi:unfold-more-horizontal-outline'
  },
  'lucide:unfold-vertical': {
    'material-symbols': 'material-symbols:unfold-more',
    'material-symbols:sharp': 'material-symbols:unfold-more-sharp',
    'material-symbols:rounded': 'material-symbols:unfold-more',
    'mdi': 'mdi:unfold-more-vertical',
    'mdi:outline': 'mdi:unfold-more-vertical-outline'
  },
  'lucide:ungroup': {
    'material-symbols': 'material-symbols:ungroup',
    'material-symbols:sharp': 'material-symbols:ungroup-sharp',
    'material-symbols:rounded': 'material-symbols:ungroup',
    'mdi': 'mdi:ungroup',
    'mdi:outline': 'mdi:ungroup-outline'
  },
  'lucide:university': {
    'material-symbols': 'material-symbols:school',
    'material-symbols:sharp': 'material-symbols:school-sharp',
    'material-symbols:rounded': 'material-symbols:school',
    'mdi': 'mdi:school',
    'mdi:outline': 'mdi:school-outline'
  },
  'lucide:unlink': {
    'material-symbols': 'material-symbols:link-off',
    'material-symbols:sharp': 'material-symbols:link-off-sharp',
    'material-symbols:rounded': 'material-symbols:link-off',
    'mdi': 'mdi:link-off',
    'mdi:outline': 'mdi:link-off-outline'
  },
  'lucide:unlink-2': {
    'material-symbols': 'material-symbols:link-off',
    'material-symbols:sharp': 'material-symbols:link-off-sharp',
    'material-symbols:rounded': 'material-symbols:link-off',
    'mdi': 'mdi:link-variant-off',
    'mdi:outline': 'mdi:link-variant-off-outline'
  },
  'lucide:unplug': {
    'material-symbols': 'material-symbols:power-off',
    'material-symbols:sharp': 'material-symbols:power-off-sharp',
    'material-symbols:rounded': 'material-symbols:power-off',
    'mdi': 'mdi:power-plug-off',
    'mdi:outline': 'mdi:power-plug-off-outline'
  },
  'lucide:upload': {
    'material-symbols': 'material-symbols:upload',
    'material-symbols:sharp': 'material-symbols:upload-sharp',
    'material-symbols:rounded': 'material-symbols:upload',
    'mdi': 'mdi:upload',
    'mdi:outline': 'mdi:upload-outline'
  },
  'lucide:usb': {
    'material-symbols': 'material-symbols:usb',
    'material-symbols:sharp': 'material-symbols:usb-sharp',
    'material-symbols:rounded': 'material-symbols:usb',
    'mdi': 'mdi:usb',
    'mdi:outline': 'mdi:usb-outline'
  },
  'lucide:user': {
    'material-symbols': 'material-symbols:person',
    'material-symbols:sharp': 'material-symbols:person-sharp',
    'material-symbols:rounded': 'material-symbols:person',
    'mdi': 'mdi:account',
    'mdi:outline': 'mdi:account-outline'
  },
  'lucide:user-check': {
    'material-symbols': 'material-symbols:verified-user',
    'material-symbols:sharp': 'material-symbols:verified-user-sharp',
    'material-symbols:rounded': 'material-symbols:verified-user',
    'mdi': 'mdi:account-check',
    'mdi:outline': 'mdi:account-check-outline'
  },
  'lucide:user-cog': {
    'material-symbols': 'material-symbols:manage-accounts',
    'material-symbols:sharp': 'material-symbols:manage-accounts-sharp',
    'material-symbols:rounded': 'material-symbols:manage-accounts',
    'mdi': 'mdi:account-cog',
    'mdi:outline': 'mdi:account-cog-outline'
  },
  'lucide:user-lock': {
    'material-symbols': 'material-symbols:lock-person',
    'material-symbols:sharp': 'material-symbols:lock-person-sharp',
    'material-symbols:rounded': 'material-symbols:lock-person',
    'mdi': 'mdi:account-lock',
    'mdi:outline': 'mdi:account-lock-outline'
  },
  'lucide:user-minus': {
    'material-symbols': 'material-symbols:person-remove',
    'material-symbols:sharp': 'material-symbols:person-remove-sharp',
    'material-symbols:rounded': 'material-symbols:person-remove',
    'mdi': 'mdi:account-minus',
    'mdi:outline': 'mdi:account-minus-outline'
  },
  'lucide:user-pen': {
    'material-symbols': 'material-symbols:edit',
    'material-symbols:sharp': 'material-symbols:edit-sharp',
    'material-symbols:rounded': 'material-symbols:edit',
    'mdi': 'mdi:account-edit',
    'mdi:outline': 'mdi:account-edit-outline'
  },
  'lucide:user-plus': {
    'material-symbols': 'material-symbols:person-add',
    'material-symbols:sharp': 'material-symbols:person-add-sharp',
    'material-symbols:rounded': 'material-symbols:person-add',
    'mdi': 'mdi:account-plus',
    'mdi:outline': 'mdi:account-plus-outline'
  },
  'lucide:user-round': {
    'material-symbols': 'material-symbols:account-circle',
    'material-symbols:sharp': 'material-symbols:account-circle-sharp',
    'material-symbols:rounded': 'material-symbols:account-circle',
    'mdi': 'mdi:account-circle',
    'mdi:outline': 'mdi:account-circle-outline'
  },
  'lucide:user-round-check': {
    'material-symbols': 'material-symbols:verified-user',
    'material-symbols:sharp': 'material-symbols:verified-user-sharp',
    'material-symbols:rounded': 'material-symbols:verified-user',
    'mdi': 'mdi:account-check-circle',
    'mdi:outline': 'mdi:account-check-circle-outline'
  },
  'lucide:user-round-cog': {
    'material-symbols': 'material-symbols:manage-accounts',
    'material-symbols:sharp': 'material-symbols:manage-accounts-sharp',
    'material-symbols:rounded': 'material-symbols:manage-accounts',
    'mdi': 'mdi:account-cog',
    'mdi:outline': 'mdi:account-cog-outline'
  },
  'lucide:user-round-minus': {
    'material-symbols': 'material-symbols:person-remove',
    'material-symbols:sharp': 'material-symbols:person-remove-sharp',
    'material-symbols:rounded': 'material-symbols:person-remove',
    'mdi': 'mdi:account-minus-circle',
    'mdi:outline': 'mdi:account-minus-circle-outline'
  },
  'lucide:user-round-pen': {
    'material-symbols': 'material-symbols:edit',
    'material-symbols:sharp': 'material-symbols:edit-sharp',
    'material-symbols:rounded': 'material-symbols:edit',
    'mdi': 'mdi:account-edit-circle',
    'mdi:outline': 'mdi:account-edit-circle-outline'
  },
  'lucide:user-round-plus': {
    'material-symbols': 'material-symbols:person-add',
    'material-symbols:sharp': 'material-symbols:person-add-sharp',
    'material-symbols:rounded': 'material-symbols:person-add',
    'mdi': 'mdi:account-plus-circle',
    'mdi:outline': 'mdi:account-plus-circle-outline'
  },
  'lucide:user-round-search': {
    'material-symbols': 'material-symbols:person-search',
    'material-symbols:sharp': 'material-symbols:person-search-sharp',
    'material-symbols:rounded': 'material-symbols:person-search',
    'mdi': 'mdi:account-search-circle',
    'mdi:outline': 'mdi:account-search-circle-outline'
  },
  'lucide:user-round-x': {
    'material-symbols': 'material-symbols:person-off',
    'material-symbols:sharp': 'material-symbols:person-off-sharp',
    'material-symbols:rounded': 'material-symbols:person-off',
    'mdi': 'mdi:account-remove-circle',
    'mdi:outline': 'mdi:account-remove-circle-outline'
  },
  'lucide:user-search': {
    'material-symbols': 'material-symbols:person-search',
    'material-symbols:sharp': 'material-symbols:person-search-sharp',
    'material-symbols:rounded': 'material-symbols:person-search',
    'mdi': 'mdi:account-search',
    'mdi:outline': 'mdi:account-search-outline'
  },
  'lucide:user-star': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:account-star',
    'mdi:outline': 'mdi:account-star-outline'
  },
  'lucide:user-x': {
    'material-symbols': 'material-symbols:person-off',
    'material-symbols:sharp': 'material-symbols:person-off-sharp',
    'material-symbols:rounded': 'material-symbols:person-off',
    'mdi': 'mdi:account-remove',
    'mdi:outline': 'mdi:account-remove-outline'
  },
  'lucide:users': {
    'material-symbols': 'material-symbols:group',
    'material-symbols:sharp': 'material-symbols:group-sharp',
    'material-symbols:rounded': 'material-symbols:group',
    'mdi': 'mdi:account-multiple',
    'mdi:outline': 'mdi:account-multiple-outline'
  },
  'lucide:users-round': {
    'material-symbols': 'material-symbols:groups',
    'material-symbols:sharp': 'material-symbols:groups-sharp',
    'material-symbols:rounded': 'material-symbols:groups',
    'mdi': 'mdi:account-group',
    'mdi:outline': 'mdi:account-group-outline'
  },
  'lucide:utensils': {
    'material-symbols': 'material-symbols:restaurant',
    'material-symbols:sharp': 'material-symbols:restaurant-sharp',
    'material-symbols:rounded': 'material-symbols:restaurant',
    'mdi': 'mdi:silverware-fork-knife',
    'mdi:outline': 'mdi:silverware-fork-knife-outline'
  },
  'lucide:utensils-crossed': {
    'material-symbols': 'material-symbols:no-meals',
    'material-symbols:sharp': 'material-symbols:no-meals-sharp',
    'material-symbols:rounded': 'material-symbols:no-meals',
    'mdi': 'mdi:silverware',
    'mdi:outline': 'mdi:silverware-outline'
  },
  'lucide:utility-pole': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:transmission-tower',
    'mdi:outline': 'mdi:transmission-tower-outline'
  },
  'lucide:variable': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:variable',
    'mdi:outline': 'mdi:variable-outline'
  },
  'lucide:vault': {
    'material-symbols': 'material-symbols:lock',
    'material-symbols:sharp': 'material-symbols:lock-sharp',
    'material-symbols:rounded': 'material-symbols:lock',
    'mdi': 'mdi:safe',
    'mdi:outline': 'mdi:safe-outline'
  },
  'lucide:vector-square': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:vector-square',
    'mdi:outline': 'mdi:vector-square-outline'
  },
  'lucide:vegan': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:food-variant',
    'mdi:outline': 'mdi:food-variant-outline'
  },
  'lucide:venetian-mask': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:drama-masks',
    'mdi:outline': 'mdi:drama-masks-outline'
  },
  'lucide:venus': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:gender-female',
    'mdi:outline': 'mdi:gender-female-outline'
  },
  'lucide:venus-and-mars': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:gender-male-female',
    'mdi:outline': 'mdi:gender-male-female-outline'
  },
  'lucide:vibrate': {
    'material-symbols': 'material-symbols:vibration',
    'material-symbols:sharp': 'material-symbols:vibration-sharp',
    'material-symbols:rounded': 'material-symbols:vibration',
    'mdi': 'mdi:vibrate',
    'mdi:outline': 'mdi:vibrate-outline'
  },
  'lucide:vibrate-off': {
    'material-symbols': 'material-symbols:mobile-off',
    'material-symbols:sharp': 'material-symbols:mobile-off-sharp',
    'material-symbols:rounded': 'material-symbols:mobile-off',
    'mdi': 'mdi:vibrate-off',
    'mdi:outline': 'mdi:vibrate-off-outline'
  },
  'lucide:video': {
    'material-symbols': 'material-symbols:videocam',
    'material-symbols:sharp': 'material-symbols:videocam-sharp',
    'material-symbols:rounded': 'material-symbols:videocam',
    'mdi': 'mdi:video',
    'mdi:outline': 'mdi:video-outline'
  },
  'lucide:video-off': {
    'material-symbols': 'material-symbols:videocam-off',
    'material-symbols:sharp': 'material-symbols:videocam-off-sharp',
    'material-symbols:rounded': 'material-symbols:videocam-off',
    'mdi': 'mdi:video-off',
    'mdi:outline': 'mdi:video-off-outline'
  },
  'lucide:videotape': {
    'material-symbols': 'material-symbols:video-library',
    'material-symbols:sharp': 'material-symbols:video-library-sharp',
    'material-symbols:rounded': 'material-symbols:video-library',
    'mdi': 'mdi:filmstrip',
    'mdi:outline': 'mdi:filmstrip-outline'
  },
  'lucide:view': {
    'material-symbols': 'material-symbols:visibility',
    'material-symbols:sharp': 'material-symbols:visibility-sharp',
    'material-symbols:rounded': 'material-symbols:visibility',
    'mdi': 'mdi:eye',
    'mdi:outline': 'mdi:eye-outline'
  },
  'lucide:voicemail': {
    'material-symbols': 'material-symbols:voicemail',
    'material-symbols:sharp': 'material-symbols:voicemail-sharp',
    'material-symbols:rounded': 'material-symbols:voicemail',
    'mdi': 'mdi:voicemail',
    'mdi:outline': 'mdi:voicemail-outline'
  },
  'lucide:volleyball': {
    'material-symbols': 'material-symbols:sports-volleyball',
    'material-symbols:sharp': 'material-symbols:sports-volleyball-sharp',
    'material-symbols:rounded': 'material-symbols:sports-volleyball',
    'mdi': 'mdi:volleyball',
    'mdi:outline': 'mdi:volleyball-outline'
  },
  'lucide:volume': {
    'material-symbols': 'material-symbols:volume-up',
    'material-symbols:sharp': 'material-symbols:volume-up-sharp',
    'material-symbols:rounded': 'material-symbols:volume-up',
    'mdi': 'mdi:volume-high',
    'mdi:outline': 'mdi:volume-high-outline'
  },
  'lucide:volume-1': {
    'material-symbols': 'material-symbols:volume-down',
    'material-symbols:sharp': 'material-symbols:volume-down-sharp',
    'material-symbols:rounded': 'material-symbols:volume-down',
    'mdi': 'mdi:volume-low',
    'mdi:outline': 'mdi:volume-low-outline'
  },
  'lucide:volume-2': {
    'material-symbols': 'material-symbols:volume-up',
    'material-symbols:sharp': 'material-symbols:volume-up-sharp',
    'material-symbols:rounded': 'material-symbols:volume-up',
    'mdi': 'mdi:volume-medium',
    'mdi:outline': 'mdi:volume-medium-outline'
  },
  'lucide:volume-off': {
    'material-symbols': 'material-symbols:volume-mute',
    'material-symbols:sharp': 'material-symbols:volume-mute-sharp',
    'material-symbols:rounded': 'material-symbols:volume-mute',
    'mdi': 'mdi:volume-mute',
    'mdi:outline': 'mdi:volume-mute-outline'
  },
  'lucide:volume-x': {
    'material-symbols': 'material-symbols:volume-off',
    'material-symbols:sharp': 'material-symbols:volume-off-sharp',
    'material-symbols:rounded': 'material-symbols:volume-off',
    'mdi': 'mdi:volume-off',
    'mdi:outline': 'mdi:volume-off-outline'
  },
  'lucide:vote': {
    'material-symbols': 'material-symbols:how-to-vote',
    'material-symbols:sharp': 'material-symbols:how-to-vote-sharp',
    'material-symbols:rounded': 'material-symbols:how-to-vote',
    'mdi': 'mdi:vote',
    'mdi:outline': 'mdi:vote-outline'
  },
  'lucide:wallet': {
    'material-symbols': 'material-symbols:account-balance-wallet',
    'material-symbols:sharp': 'material-symbols:account-balance-wallet-sharp',
    'material-symbols:rounded': 'material-symbols:account-balance-wallet',
    'mdi': 'mdi:wallet',
    'mdi:outline': 'mdi:wallet-outline'
  },
  'lucide:wallet-cards': {
    'material-symbols': 'material-symbols:credit-card',
    'material-symbols:sharp': 'material-symbols:credit-card-sharp',
    'material-symbols:rounded': 'material-symbols:credit-card',
    'mdi': 'mdi:wallet',
    'mdi:outline': 'mdi:wallet-outline'
  },
  'lucide:wallet-minimal': {
    'material-symbols': 'material-symbols:wallet',
    'material-symbols:sharp': 'material-symbols:wallet-sharp',
    'material-symbols:rounded': 'material-symbols:wallet',
    'mdi': 'mdi:wallet-outline',
    'mdi:outline': 'mdi:wallet-outline-outline'
  },
  'lucide:wallpaper': {
    'material-symbols': 'material-symbols:wallpaper',
    'material-symbols:sharp': 'material-symbols:wallpaper-sharp',
    'material-symbols:rounded': 'material-symbols:wallpaper',
    'mdi': 'mdi:wallpaper',
    'mdi:outline': 'mdi:wallpaper-outline'
  },
  'lucide:wand': {
    'material-symbols': 'material-symbols:auto-fix',
    'material-symbols:sharp': 'material-symbols:auto-fix-sharp',
    'material-symbols:rounded': 'material-symbols:auto-fix',
    'mdi': 'mdi:auto-fix',
    'mdi:outline': 'mdi:auto-fix-outline'
  },
  'lucide:wand-sparkles': {
    'material-symbols': 'material-symbols:auto-awesome',
    'material-symbols:sharp': 'material-symbols:auto-awesome-sharp',
    'material-symbols:rounded': 'material-symbols:auto-awesome',
    'mdi': 'mdi:magic-staff',
    'mdi:outline': 'mdi:magic-staff-outline'
  },
  'lucide:warehouse': {
    'material-symbols': 'material-symbols:warehouse',
    'material-symbols:sharp': 'material-symbols:warehouse-sharp',
    'material-symbols:rounded': 'material-symbols:warehouse',
    'mdi': 'mdi:warehouse',
    'mdi:outline': 'mdi:warehouse-outline'
  },
  'lucide:washing-machine': {
    'material-symbols': 'material-symbols:local-laundry-service',
    'material-symbols:sharp': 'material-symbols:local-laundry-service-sharp',
    'material-symbols:rounded': 'material-symbols:local-laundry-service',
    'mdi': 'mdi:washing-machine',
    'mdi:outline': 'mdi:washing-machine-outline'
  },
  'lucide:watch': {
    'material-symbols': 'material-symbols:watch',
    'material-symbols:sharp': 'material-symbols:watch-sharp',
    'material-symbols:rounded': 'material-symbols:watch',
    'mdi': 'mdi:watch',
    'mdi:outline': 'mdi:watch-outline'
  },
  'lucide:waves': {
    'material-symbols': 'material-symbols:water',
    'material-symbols:sharp': 'material-symbols:water-sharp',
    'material-symbols:rounded': 'material-symbols:water',
    'mdi': 'mdi:waves',
    'mdi:outline': 'mdi:waves-outline'
  },
  'lucide:waves-arrow-down': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-down',
    'mdi:outline': 'mdi:arrow-down'
  },
  'lucide:waves-arrow-up': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:arrow-up',
    'mdi:outline': 'mdi:arrow-up'
  },
  'lucide:waves-ladder': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:ladder',
    'mdi:outline': 'mdi:ladder-outline'
  },
  'lucide:waypoints': {
    'material-symbols': 'material-symbols:route',
    'material-symbols:sharp': 'material-symbols:route-sharp',
    'material-symbols:rounded': 'material-symbols:route',
    'mdi': 'mdi:routes',
    'mdi:outline': 'mdi:routes-outline'
  },
  'lucide:webcam': {
    'material-symbols': 'material-symbols:videocam',
    'material-symbols:sharp': 'material-symbols:videocam-sharp',
    'material-symbols:rounded': 'material-symbols:videocam',
    'mdi': 'mdi:webcam',
    'mdi:outline': 'mdi:webcam-outline'
  },
  'lucide:webhook': {
    'material-symbols': 'material-symbols:webhook',
    'material-symbols:sharp': 'material-symbols:webhook-sharp',
    'material-symbols:rounded': 'material-symbols:webhook',
    'mdi': 'mdi:webhook',
    'mdi:outline': 'mdi:webhook-outline'
  },
  'lucide:webhook-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:webhook',
    'mdi:outline': 'mdi:webhook-outline'
  },
  'lucide:weight': {
    'material-symbols': 'material-symbols:fitness-center',
    'material-symbols:sharp': 'material-symbols:fitness-center-sharp',
    'material-symbols:rounded': 'material-symbols:fitness-center',
    'mdi': 'mdi:weight',
    'mdi:outline': 'mdi:weight-outline'
  },
  'lucide:wheat': {
    'material-symbols': 'material-symbols:agriculture',
    'material-symbols:sharp': 'material-symbols:agriculture-sharp',
    'material-symbols:rounded': 'material-symbols:agriculture',
    'mdi': 'mdi:barley',
    'mdi:outline': 'mdi:barley-outline'
  },
  'lucide:wheat-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:barley-off',
    'mdi:outline': 'mdi:barley-off-outline'
  },
  'lucide:whole-word': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-text',
    'mdi:outline': 'mdi:format-text'
  },
  'lucide:wifi': {
    'material-symbols': 'material-symbols:wifi',
    'material-symbols:sharp': 'material-symbols:wifi-sharp',
    'material-symbols:rounded': 'material-symbols:wifi',
    'mdi': 'mdi:wifi',
    'mdi:outline': 'mdi:wifi-outline'
  },
  'lucide:wifi-cog': {
    'material-symbols': 'material-symbols:settings',
    'material-symbols:sharp': 'material-symbols:settings-sharp',
    'material-symbols:rounded': 'material-symbols:settings',
    'mdi': 'mdi:wifi-cog',
    'mdi:outline': 'mdi:wifi-cog-outline'
  },
  'lucide:wifi-high': {
    'material-symbols': 'material-symbols:wifi',
    'material-symbols:sharp': 'material-symbols:wifi-sharp',
    'material-symbols:rounded': 'material-symbols:wifi',
    'mdi': 'mdi:wifi',
    'mdi:outline': 'mdi:wifi-outline'
  },
  'lucide:wifi-low': {
    'material-symbols': 'material-symbols:network-wifi-1-bar',
    'material-symbols:sharp': 'material-symbols:network-wifi-1-bar-sharp',
    'material-symbols:rounded': 'material-symbols:network-wifi-1-bar',
    'mdi': 'mdi:wifi-strength-1',
    'mdi:outline': 'mdi:wifi-strength-1-outline'
  },
  'lucide:wifi-off': {
    'material-symbols': 'material-symbols:wifi-off',
    'material-symbols:sharp': 'material-symbols:wifi-off-sharp',
    'material-symbols:rounded': 'material-symbols:wifi-off',
    'mdi': 'mdi:wifi-off',
    'mdi:outline': 'mdi:wifi-off-outline'
  },
  'lucide:wifi-pen': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:wifi-cog',
    'mdi:outline': 'mdi:wifi-cog-outline'
  },
  'lucide:wifi-sync': {
    'material-symbols': 'material-symbols:sync',
    'material-symbols:sharp': 'material-symbols:sync-sharp',
    'material-symbols:rounded': 'material-symbols:sync',
    'mdi': 'mdi:wifi-sync',
    'mdi:outline': 'mdi:wifi-sync-outline'
  },
  'lucide:wifi-zero': {
    'material-symbols': 'material-symbols:wifi-off',
    'material-symbols:sharp': 'material-symbols:wifi-off-sharp',
    'material-symbols:rounded': 'material-symbols:wifi-off',
    'mdi': 'mdi:wifi-strength-off',
    'mdi:outline': 'mdi:wifi-strength-off-outline'
  },
  'lucide:wind': {
    'material-symbols': 'material-symbols:air',
    'material-symbols:sharp': 'material-symbols:air-sharp',
    'material-symbols:rounded': 'material-symbols:air',
    'mdi': 'mdi:weather-windy',
    'mdi:outline': 'mdi:weather-windy-outline'
  },
  'lucide:wind-arrow-down': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:weather-windy',
    'mdi:outline': 'mdi:weather-windy-outline'
  },
  'lucide:wine': {
    'material-symbols': 'material-symbols:wine-bar',
    'material-symbols:sharp': 'material-symbols:wine-bar-sharp',
    'material-symbols:rounded': 'material-symbols:wine-bar',
    'mdi': 'mdi:glass-wine',
    'mdi:outline': 'mdi:glass-wine-outline'
  },
  'lucide:wine-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:glass-wine',
    'mdi:outline': 'mdi:glass-wine-outline'
  },
  'lucide:workflow': {
    'material-symbols': 'material-symbols:account-tree',
    'material-symbols:sharp': 'material-symbols:account-tree-sharp',
    'material-symbols:rounded': 'material-symbols:account-tree',
    'mdi': 'mdi:source-branch',
    'mdi:outline': 'mdi:source-branch-outline'
  },
  'lucide:worm': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:format-vertical-align-top',
    'mdi:outline': 'mdi:format-vertical-align-top'
  },
  'lucide:wrench': {
    'material-symbols': 'material-symbols:build',
    'material-symbols:sharp': 'material-symbols:build-sharp',
    'material-symbols:rounded': 'material-symbols:build',
    'mdi': 'mdi:wrench',
    'mdi:outline': 'mdi:wrench-outline'
  },
  'lucide:x': {
    'material-symbols': 'material-symbols:close',
    'material-symbols:sharp': 'material-symbols:close-sharp',
    'material-symbols:rounded': 'material-symbols:close',
    'mdi': 'mdi:close',
    'mdi:outline': 'mdi:close-outline'
  },
  'lucide:youtube': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:youtube',
    'mdi:outline': 'mdi:youtube-outline'
  },
  'lucide:zap': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:lightning-bolt',
    'mdi:outline': 'mdi:lightning-bolt-outline'
  },
  'lucide:zap-off': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:lightning-bolt-outline',
    'mdi:outline': 'mdi:lightning-bolt-outline-outline'
  },
  'lucide:zoom-in': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:magnify-plus',
    'mdi:outline': 'mdi:magnify-plus-outline'
  },
  'lucide:zoom-out': {
    'material-symbols': 'TBA',
    'material-symbols:sharp': 'TBA',
    'material-symbols:rounded': 'TBA',
    'mdi': 'mdi:magnify-minus',
    'mdi:outline': 'mdi:magnify-minus-outline'
  },
  'lucide:filter': {
    'material-symbols': 'material-symbols:filter-alt',
    'material-symbols:sharp': 'material-symbols:filter-alt-sharp',
    'material-symbols:rounded': 'material-symbols:filter-alt',
    'mdi': 'mdi:filter',
    'mdi:outline': 'mdi:filter-outline'
  }
}

/**
 * Get mapped icon name for target library
 * Falls back to original icon if no mapping exists or mapping is 'TBA'
 */
export function getMappedIcon(lucidenIcon: string, targetLibrary: IconLibrary): string {
  if (targetLibrary === 'lucide') {
    return lucidenIcon
  }
  
  const mapped = iconMapping[lucidenIcon]?.[targetLibrary]
  // If no mapping exists or mapping is 'TBA', fallback to the original lucide icon
  return (mapped && mapped !== 'TBA') ? mapped : lucidenIcon
}

export const themeIconLibrary = new Map<ThemeStyle, IconLibrary>()

export const registerThemeIconLibrary = (style: ThemeStyle, icon: IconLibrary) => {
  themeIconLibrary.set(style, icon)
}

