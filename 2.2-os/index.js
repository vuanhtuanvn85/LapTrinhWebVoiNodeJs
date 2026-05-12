import os from 'node:os'

console.log('Platform: ', os.platform());
console.log('Architecture: ', os.arch());
console.log('Hostname: ', os.hostname());
console.log('Hom Directory: ', os.homedir());

console.log("Number of CPU cores: ", os.cpus().length);

console.log("Total memory: ", os.totalmem() / 1024 / 1024 / 1024, " GB");

console.log("Nework details: ", os.networkInterfaces());