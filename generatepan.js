/**
 * A predictable pan generator for given number.
 * 
 * generatePan(0) = AAAAA0000A
 * generatePan(1) = AAAAA0000B
 * generatePan(25) = AAAAA0000Z
 * generatePan(26) = AAAAA0001A
 */
const fs=require('fs');
console.log('Hello World!');
const  generatePan =(id)=> {
    const denomination = [26, 10, 10, 10, 10, 26, 26, 26, 26, 26];
    var current = id;
    var final = '';
    for (var i = 0; i < 10; i++) {
      var part = current % denomination[i];
      var char = denomination[i] === 26 ? String.fromCharCode(65 + part) : part;
      final = `${char}${final}`;
      current = parseInt(current / denomination[i]);
    }
    console.log(final);
    return final;
  }
  const generateRandomPan= ()=> {
    return generatePan(Math.random() * 100000000000000 % 3089157760000);
  }
  const generateSerialPan= (times)=> {
    const array = [];
    for (var i = 0; i < times; i++) {
      array.push(generatePan(i));
    }
    return array;
  }
  
  const dobGenerator= ()=> {

    let date = new Date();
    let year = Math.floor(date.getFullYear() - Math.random() * 50)
    let month = Math.random() * 12;
    let day = Math.random() * 28;
    if(month === 2 && day > 28){
        day = 28;
    }
    if(year % 4 === 0 && month === 2 && day > 29){
        day = 29;
    }
    year = year<2003?year:2003;
    return `${day < 10 ? '0' : ''}${parseInt(day)}-${month < 10 ? '0' : ''}${parseInt(month)}-${year}`;
  }


  const nameGenerator= ()=> {
    const index = Math.random() * 100 % 2;
    const names = ['Rahul', 'Rajesh', 'Ramesh', 'Raj', 'Ravi', 'Rajiv', 'Rohan', 'Rakesh', 'Rajendra', 'Rajkumar', 'Rajnish', 'Rajat', 'Rajnish', 'Rajni', 'Rajeshwari', 'Rajni', 'RajniKant', 'Rajnandini', 'Rajnath', 'Arbaj', 'Arbaz', 'Arbaaz','Bipul', 'Bipin', 'Bipasha','Vicky', 'Vikas', 'Vikram', 'Vikrant', 'Vikramaditya', 'Vikramarka', 'Vikramjeet', 'Vikramjit', 'Vikramaditya', 'Vikramendra', 'Vikramaditya', 'Vikramajit', 'Vikraman', 'Vikramarjuna', 'Vikramendra', 'Vikramin', 'Vikramjit', 'Vikramjot','Gyasuddin','Gyandev','Gyaneshwar','Gyanoba','Gyanprakash','Gyanu','Gyatri','Gyatry','Gyayak','Gyayatri','Gyayatry']
    return names[0];
  }

  const fatherNameGenerator= ()=> {
    const index = Math.random() *100 % 2;
    const names = ['Rahul', 'Rajesh', 'Ramesh', 'Raj', 'Ravi', 'Rajiv', 'Rohan', 'Rakesh', 'Rajendra', 'Rajkumar', 'Rajnish', 'Rajat', 'Rajnish', 'Rajni', 'Rajeshwari', 'Rajni', 'RajniKant', 'Rajnandini', 'Rajnath', 'Arbaj', 'Arbaz', 'Arbaaz','Bipul', 'Bipin', 'Bipasha','Vicky', 'Vikas', 'Vikram', 'Vikrant', 'Vikramaditya', 'Vikramarka', 'Vikramjeet', 'Vikramjit', 'Vikramaditya', 'Vikramendra', 'Vikramaditya', 'Vikramajit', 'Vikraman', 'Vikramarjuna', 'Vikramendra', 'Vikramin', 'Vikramjit', 'Vikramjot','Gyasuddin','Gyandev','Gyaneshwar','Gyanoba','Gyanprakash','Gyanu','Gyatri','Gyatry','Gyayak','Gyayatri','Gyayatry']
    return names[1];
  }

  const generateCity= ()=> {
    // generate city    
    const city = ['Mumbai','Delhi']
    return city[0];
  }
  const file = fs.createWriteStream('panJSON.js');
    file.on('error', function(err) { /* error handling */ });
    generateSerialPan(100).forEach(function(v) { file.write(`{pan: '${v}', name: '${nameGenerator()}', dob: '${dobGenerator()}', fatherName: '${fatherNameGenerator()}', address: '${generateCity()}'},\n`); });
    file.end();