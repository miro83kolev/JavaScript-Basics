function readingWords(input){

    let index = 0;
    while (true) {
      let str = input[index];
      index++;
      if (str == "Stop") {
        break;
      }
      console.log(str);
    }
}

readingWords(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
