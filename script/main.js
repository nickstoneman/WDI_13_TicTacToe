soundManager.setup({
  url: 'audiofiles/',
  onready: function() {
    var mySound = soundManager.createSound({
      id: 'aSound',
      url: '/audiofiles'
    });
    mySound.play();
  },
//   ontimeout: function() {
//     // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
//   }
// });