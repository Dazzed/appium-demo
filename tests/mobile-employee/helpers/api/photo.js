import wait from './wait';
import getPlatform from './platform';
import txt, { $txt } from '../text';
import {
  pdfSearch,
  pdfName,
  searchTextbox,
  pdfSelect,
  imageTab,
  imageFinalTab
} from '../../../data/claims.data';
/**
 * Input to open image native gallery
 * @param  {string}    action
 * @param  {Object}    options
 * @return {undefined}
 */
export default function photo(action, options) {
  options = {
    permit: false,
    ...options
  };

  const platform = getPlatform();

  if (action === 'select') {
    if (platform === 'ios') {
      wait('~Choose from Library');
      $('~Choose from Library').click();

      if (options.permit) {
        try {
          driver.execute('mobile:alert', { action: 'accept' });
        } catch (error) {
          console.log('Accept pop up is not available!');
        }
      }

      wait('~Moments');
      $('~Moments').click();
    } else if (platform === 'android') {
      wait(txt('Choose from Library'));
      $txt('Choose from Library').click();

      if (options.permit) {
        if ($txt('ALLOW', 'android.widget.Button').isExisting()) {
          $txt('ALLOW', 'android.widget.Button').click();
          $txt('ALLOW', 'android.widget.Button').click();
        }
      }

      $(imageTab[platform]).click();
      browser.pause(1000);

      $(imageFinalTab[platform]).click();

      // $(selectPhoto[platform]).click();

      // tap(500, 900);
      // browser.pause(1000);
      // wait(txt('Pictures'));
      //  $txt('Pictures').click();
    }
    if (platform === 'ios') {
      $(options.photo).click();
    }
    //  else {
    //   $(selectFinalPhoto[platform]).click();
    // }
  } else if (action === 'take') {
    if (platform === 'ios') {
      // not support
    } else if (platform === 'android') {
      wait(txt('Take a Photo'));
      $txt('Take a Photo').click();

      if (options.permit) {
        if ($txt('ALLOW', 'android.widget.Button').isExisting()) {
          $txt('ALLOW', 'android.widget.Button').click();
          $txt('ALLOW', 'android.widget.Button').click();
        }
      }

      $('~Shutter').click();
      $('~Done').click();
    }
  } else if (action === 'remove') {
    if (platform === 'ios') {
      $('~').click();
      driver.execute('mobile:alert', { action: 'accept' });
    } else if (platform == 'android') {
      $txt('', 'android.widget.TextView').click();
      $txt('DELETE', 'android.widget.Button').click();
    }
  }
  driver.pause(3000);
}

export function pdf(action, options) {
  options = {
    permit: false,
    ...options
  };

  const platform = getPlatform();

  if (action === 'select') {
    if (platform === 'ios') {
      $(pdfSearch[platform]).click();
      $(pdfSelect[platform]).click();
      if (options.permit) {
        try {
          driver.execute('mobile:alert', { action: 'accept' });
        } catch (error) {
          console.log('Accept pop up is not available!');
        }
      }
    } else if (platform === 'android') {
      wait(txt('Add Documents'));
      $txt('Add Documents').click();

      $(pdfSearch[platform]).click();
      $(searchTextbox[platform]).setValue(pdfName);
      browser.pause(1000);
      $(pdfSelect[platform]).click();
      browser.pause(1000);

      if (options.permit) {
        if ($txt('ALLOW', 'android.widget.Button').isExisting()) {
          $txt('ALLOW', 'android.widget.Button').click();
          $txt('ALLOW', 'android.widget.Button').click();
        }
      }
    }
  } else if (action === 'take') {
    if (platform === 'ios') {
      // not support
    } else if (platform === 'android') {
      wait(txt('Take a Photo'));
      $txt('Take a Photo').click();

      if (options.permit) {
        if ($txt('ALLOW', 'android.widget.Button').isExisting()) {
          $txt('ALLOW', 'android.widget.Button').click();
          $txt('ALLOW', 'android.widget.Button').click();
        }
      }

      $('~Shutter').click();
      $('~Done').click();
    }
  } else if (action === 'remove') {
    if (platform === 'ios') {
      $('~').click();
      driver.execute('mobile:alert', { action: 'accept' });
    } else if (platform == 'android') {
      $txt('', 'android.widget.TextView').click();
      $txt('DELETE', 'android.widget.Button').click();
    }
  }
  driver.pause(3000);
}
