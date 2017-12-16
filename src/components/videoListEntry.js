angular.module('video-player')
  .component('videoListEntry', {
    controller: function() {
      // this.video = '';
      console.log(this);
    },
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
