angular.module('video-player')
  .component('videoListEntry', {
    controller: function() {
      // this.video = '';
      this.addToPlayer = (video) => {
        console.log(video);
      };
    },
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
