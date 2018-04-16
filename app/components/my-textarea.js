import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  singleText: inject('single-text'),
  text: '',
  actions: {
    submit() {
      this.get('submit')(this.text)
    }
  }
});
