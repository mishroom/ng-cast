angular.module('video-player')
  .component('videoList', {
    // TODO
    templateUrl: 'src/templates/videoList.html',
    controller: function () {
      this.data = window.exampleVideoData;
      
    }
  });
