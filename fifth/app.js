/// Use `npm install formidable mv` to install dependency

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = '/Users/subhrendu/GIT/node-course/temp/' + files.filetoupload.originalFilename;
      const mv = require('mv');
      mv(oldpath, newpath, function (err) {
          if (err) {
              console.log('> FileServer.jsx | route: "/files/upload" | err:', err);
              throw err;
          }
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080); 