angular.module('video-player')
  .component('videoListEntry', {
    controller: function() {
      // this.video = '';
      this.addToPlayer = () => {
        console.log('clicked');
      };
    },
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
