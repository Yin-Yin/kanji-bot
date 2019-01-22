var expect = require('chai').expect;
const kanjiModule = require('../kanji_module/kanji_module.js');

describe('getKanjiData()', function () {
  it('should return the Kanji informatino', function () {
    
    
    // 1. ARRANGE
    /*var x = 5;
    var y = 1;
    var sum1 = x + y;
    */
    var moonDataAsItShouldBe = kanjiModule.getKanjiData("月");

    // 2. ACT
    // var sum2 = addTwoNumbers(x, y);
    var moonDataKanjiModule = kanjiModule.getKanjiData("月");

    // 3. ASSERT
    expect(moonDataAsItShouldBe).to.be.equal(moonDataKanjiModule);

  });
});