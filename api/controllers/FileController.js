/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function (req,res){

    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
    '<form action="http://localhost:1337/file/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="avatar" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '<img src="/images/19cf3c21-6ce9-4bdb-8ab2-4c04f33d1f9c.png">'+
    '</form>'
    )
  },
  upload: function  (req, res) {
    req.file('avatar').upload({
      dirname: require('path').resolve(sails.config.appPath, 'assets/images')
    },function (err, uploadedFiles) {
      if (err) return res.negotiate(err);

      return res.json({
        message: uploadedFiles.length + ' file(s) uploaded successfully!'
      });
    });
  }

};

