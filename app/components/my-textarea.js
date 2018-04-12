import Component from '@ember/component';

export default Component.extend({
  text: '',
  actions: {
    submit() {
      console.log(this.get('text'))
    }
  }
});
