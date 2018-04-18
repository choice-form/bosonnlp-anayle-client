import Component from '@ember/component';

export default Component.extend({
  tagName: 'dl',
  classNames: ['news-dl'],
  isShow: false,
  actions: {
    showChange() {
      this.set('isShow',!this.isShow)
      console.log(this.isShow);
    }
  }
});
