import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: ['circle-chart'],
  init() {
    this._super(...arguments)
    this.du = 0;

    this.circleSize = 50
    this.circleWidth = this.circleSize
    this.circleHeight = this.circleSize
    this.borderSize = this.circleSize / 8

    this.ring = document.createElement('div')
    this.track = document.createElement('div')
    this.left = document.createElement('div')
    this.right = document.createElement('div')
    this.cover = document.createElement('div')
    this.span = document.createElement('span')
    this.ring.appendChild(this.track)
    this.ring.appendChild(this.left)
    this.ring.appendChild(this.right)
    this.ring.appendChild(this.cover)
    this.ring.appendChild(this.span)

    this.ring.style.position = 'relative';
    this.ring.style.top = 0;
    this.ring.style.left = 0;
    this.ring.style.width = this.circleWidth + 'px';
    this.ring.style.height = this.circleHeight + 'px';

    this.list = [this.track, this.left, this.right, this.cover]

    for (let i = 0; i < this.list.length; i++) {
      this.list[i].style.position = 'absolute'
      this.list[i].style.top = 0;
      this.list[i].style.left = 0;
      this.list[i].style.width = this.circleWidth + 'px'
      this.list[i].style.height = this.circleHeight + 'px'
      this.list[i].style.border = `${this.borderSize}px solid #31ae48`
      this.list[i].style.borderRadius = '50%'
      this.list[i].style.boxSizing = 'border-box'
    }
    this.span.style.display = 'block'
    this.span.style.position = 'absolute'
    this.span.style.width = this.circleSize + 'px'
    this.span.style.height = this.circleSize + 'px'
    this.span.style.textAlign = 'center'
    this.span.style.top = 0
    this.span.style.left = 0
    this.span.style.transform = `translateY(${this.circleSize / 2 - 7}px)`

    for (let i = 1; i < this.list.length; i++) {
      this.list[i].style.clip = `rect(0 ${this.circleSize / 2}px ${this.circleSize}px 0)`
    }

    this.left.style.borderColor = '#ffaa05'
    this.right.style.borderColor = '#ffaa05'

    // this.appendChild(this.ring)
  },
  setDeg(du = 0) {
    this.du = 3.6 * du
    if (this.du <= 180) {
      this.right.style.transform = `rotate(${this.du}deg)`
      this.cover.style.opacity = null;
    }
    if (this.du > 180) {
      this.right.style.transform = `rotate(${this.du}deg)`
      this.left.style.transform = `rotate(${180}deg)`
      this.cover.style.opacity = 0
    }
  },
  didRender() {
    this._super(...arguments);
    this.element.appendChild(this.ring)
    this.setDeg(this.get('data') * 100)
    this.span.innerText = parseInt(this.get('data') * 100) + '%'
  }
});
