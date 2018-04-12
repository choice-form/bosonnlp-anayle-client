import Service from '@ember/service';

const tagResult = [{ "word": ["所以", "最后", "问题", "就", "是", "怎么", "把", "matplotlib", "生成", "的", "图", "上传", "到", "页面", "上", "。"], "tag": ["c", "f", "n", "d", "vshi", "r", "pba", "nx", "v", "ude", "n", "v", "v", "n", "f", "wj"] }]

export default Service.extend({
  text: '',
  // body: null,
  setText() {

  },
  clearText() {

  },
  tag() {
    return tagResult
    // return Promise.resolve(tagResult[0])
  },
  ner() {

  }
});
