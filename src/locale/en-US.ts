import localeMessageBox from '@/components/message-box/locale/en-US';
import localeLogin from '@/views/login/locale/en-US';

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';

import localeMonitor from '@/views/dashboard/monitor/locale/en-US';

import localeSearchTable from '@/views/list/search-table/locale/en-US';
import localeCardList from '@/views/list/card/locale/en-US';

import localeStepForm from '@/views/form/step/locale/en-US';
import localeGroupForm from '@/views/form/group/locale/en-US';

import localeBasicProfile from '@/views/profile/basic/locale/en-US';

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/en-US';
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/en-US';

import localeSuccess from '@/views/result/success/locale/en-US';
import localeError from '@/views/result/error/locale/en-US';

import locale403 from '@/views/exception/403/locale/en-US';
import locale404 from '@/views/exception/404/locale/en-US';
import locale500 from '@/views/exception/500/locale/en-US';

import localeUserInfo from '@/views/user/info/locale/en-US';
import localeUserSetting from '@/views/user/setting/locale/en-US';

import localeSettings from './en-US/settings';

export default {
  'On': 'On',
  'Off': 'Off',
  'menu.dashboard': 'CPS',
  'menu.cps.channel': 'Channel',
  'menu.cps.settings': 'Settings',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.list': 'Tools',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': 'FAQ',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
  'navbar.author': 'Author: BD8DFN',
  'navbar.connect': 'Connect',
  'navbar.disconnect': 'Disconnect',
  'navbar.qa': 'Feedback',
  'global.8kb': '8KB (64Kbit)',
  'global.128kb': '128KB (1Mbit)',
  'global.256kb': '256KB (2Mbit)',
  'global.384kb': '384KB (3Mbit)',
  'global.512kb': '512KB (4Mbit)',
  'menu.rb': 'Backup/Restore',
  'menu.flash': 'Flasher',
  'menu.image': 'Startup Image',
  'menu.font': 'Set Patch',
  'menu.satellite': 'Satcom',
  'global.onStart': ' (Put the UV-K5 into normral mode)',
  'global.onBoot': ' (Put the UV-K5 into programming mode)',
  'cps.onDeviceRead': 'Read from device',
  'cps.onDeviceWrite': 'Write to device',
  'cps.downloadImportTemplate': 'Download Import Templates',
  'cps.import': 'Import',
  'cps.export': 'Export',
  'cps.save': 'Save',
  'cps.load': 'Load',
  'cps.line1': 'First line of text on startup screen',
  'cps.line2': 'Second line of text on startup screen',
  'cps.mdclocplay': 'Local MDC Play (Only support my firmware)',
  'cps.sort': 'Sort',
  'cps.name': 'Name',
  'cps.bandwidth': 'Bandwidth',
  'cps.tx': 'TX Frequency',
  'cps.rx': 'RX Frequency',
  'cps.power': 'Power',
  'cps.rxToneType': 'RX Tone Type',
  'cps.rxToneCTCSS': 'RX CTCSS（Hz）',
  'cps.rxToneDCS': 'RX DCS',
  'cps.txToneType': 'TX Tone Type',
  'cps.txToneCTCSS': 'TX CTCSS（Hz）',
  'cps.txToneDCS': 'TX DCS',
  'cps.step': 'Frequency Step',
  'cps.reverse': 'Reverse',
  'cps.scramb': 'Scramb',
  'cps.busy': 'Busy',
  'cps.pttid': 'PTTID',
  'cps.mode': 'Mode',
  'cps.dtmf': 'DTMF Decode',
  'cps.scanlist': 'Scanlist',
  'cps.operate': 'Operate',
  'cps.clear': 'Clear',
  'tool.quickbackup': 'Quick Backup',
  'tool.fullbackup': 'Full Backup',
  'tool.cleardata': 'Clear EEPROM',
  'tool.backupConfig': 'Backup Config',
  'tool.restoreConfig': 'Restore Config',
  'tool.backupCalibration': 'Backup Calibration',
  'tool.restoreCalibration': 'Restore Calibration',
  'tool.backup': 'Backup',
  'tool.restore': 'Restore',
  'tool.autocheck': 'AUTO',
  'tool.selectSize': 'Select EEPROM size',
  'tool.first': 'Warning ',
  'tool.firstTitle': '',
  'tool.last': '（LAST WARNING）',
  'tool.clearMessage': 'This will clear the EEPROM of all contents, including configuration and calibration data!!!!',
  'tool.selectFirmware': 'Select Firmware',
  'tool.flash': 'FLASH',
  'tool.selectImage': 'Select Image',
  'tool.write': 'Write to device',
  'tool.fontwrite': 'LOSEHU Chinese Character Set Write',
  'tool.pinyinwrite': 'LOSEHU H Chinese Pinyin Set Write',
  'tool.writefontwrite': 'Character Set Write',
  'tool.Simplified_Chinese': 'CHS',
  'tool.Traditional_Chinese': 'CHT',
  'tool.writepinyin': 'Pinyin Set Write',
  'tool.brtime': 'Browser Time',
  'tool.selectSatellite': 'Select satellite',
  'tool.longitude': 'Longitude',
  'tool.latitude': 'Latitude',
  'tool.altitude': 'Altitude',
  'tool.brlonlat': 'Get browser location',
  'tool.phonelonlat': 'Get phone location',
  'tool.satpasstime': 'Get satellite pass time',
  'tool.selectPassTime': 'Select pass time',
  'tool.txFreq': 'TX Frequency',
  'tool.txTone': 'TX Tone',
  'tool.rxFreq': 'RX Frequency',
  'tool.rxTone': 'RX Tone',
  'tool.writeData': 'Write to device',
  'tool.off': 'Off',
  'tool.scanqr': 'Scan QR Code',
  'tool.scannotice': 'Uploaded location information will be cached by the server for 10 minutes',
  'tool.scaned': 'Scanned and uploaded',
  'global.nosupport': 'Current browser does not support WebSerial function, please use Chrome, Edge, Opera browser.',
  'global.connectFail': 'Connect Failure',
  'global.handshakeFail': 'Handshake Failure',
  'menu.workshop': 'Workshop',
  'menu.firmware': 'Firmware Store',
  'menu.channel': 'Channel Share',
  'global.use': 'Use',
  'global.download': 'Download',
  'tool.ssbpatch': 'LOSEHU S Firmware SI4732 SSB Patch',
  'tool.writessbpatch': 'SSB Patch Write',
  'global.login': 'Login',
  'global.register': 'Register',
  'global.motto': 'Motto',
  'global.logout': 'Logout',
  'global.username': 'Username',
  'global.nickname': 'Nickname',
  'global.password': 'Password',
  'global.password2': 'Retype password ',
  'image.negative': 'Negative',
  'workplace.clickNotice': ' (Official firmware can only detect 8KB/64Kbit)',
  'menu.cps.radio': 'Radio',
  'menu.cps.mdc': 'MDC Contact',
  'menu.cps.dtmf': 'DTMF Contact',
  'cps.contact': 'Name',
  'cps.mdcid': 'MDC ID',
  'cps.dtmf.up': 'DTMF Up Code',
  'cps.dtmf.down': 'DTMF Down Code',
  'idea.diy': 'LOSEHU DIY',
  'diy.generate': 'Generate',
  'cps.dtmfid': 'DTMF ID',
  'global.upload': 'Upload',
  'global.loginUpload': '(Login to upload and share)',
  'bl': 'Multi-booting',
  'cs': 'Coming Soon',
  'oi': 'Operating Instructions: ',
  'bl.warning': '⚠: Experimental feature Use may damage radio station',
  'bl.readme': 'Readme: ',
  'bl.clear': 'Clear',
  'bl.onlyEnglish': 'Firmware names are supported in English only',
  'bl.drag': 'Select the firmware and drag the firmware card to the EEPROM grid',
  'bl.bootloader': 'Bootloader Use',
  'sat.selfSatInfo': 'My satellite parameters',
  'sat.addSelfSat': 'Add my satellite',
  'chat': 'Radio Chat',
  'menu.cps.writeNoticeTitle': 'Confirm',
  'menu.cps.writeNoticeContent': "Confirmation to write the channel shown on the web page to the device? (will override the device's current channel configuration)",
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,

  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,
  ...localeStepForm,
  ...localeGroupForm,
  ...localeBasicProfile,
  ...localeDataAnalysis,
  ...localeMultiDAnalysis,
  ...localeSuccess,
  ...localeError,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeUserInfo,
  ...localeUserSetting,
};
