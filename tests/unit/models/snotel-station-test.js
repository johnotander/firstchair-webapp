import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('snotel-station', 'SnotelStation', {
  needs: ['model:weather']
});

test('it exists', function() {
  var model = this.subject();
  ok(!!model);
});
