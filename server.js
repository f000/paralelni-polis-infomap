/*
 * Simple node.js webserver
 * @author Lukas Vorlicek <lukas.vorlicek@codeart.cz>
 * @licence CC BY-NC-ND 3.0 CZ
 */

/*global require:false*/

const ROOT = '.';
const SERVER = process.argv[2] ? process.argv[2] : 'localhost';
const PORT =  process.argv[3] ? process.argv[3] : 8078;

var connect = require('connect'),
    serveStatic = require('serve-static'),
    util = require('util');
    
connect().use(serveStatic(ROOT)).listen(PORT, SERVER);

util.puts('> server running at http://' + SERVER + ':' + PORT + ' from ' + ROOT + '/');
