const buffer = Buffer.from('Hello, World! Good morning!'); // from is used when the data is pre defined and we want to create a buffer from that data. It can be a string, array, or another buffer.
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.length);

const buffer2 = Buffer.alloc(20);
console.log(buffer2);
console.log(String.fromCharCode(buffer[3]));
console.log(buffer2[0]);