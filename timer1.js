let time = process.argv.slice(2)

for (let i = 0; i < time.length; i++){

  let timeTime = Number(time[i] * 1000)

  if (timeTime === ""){
    //
  } else if (timeTime < 0) {
    //
  } else if(typeof(time) !== "number"){
    //
  } else {
    setTimeout(() => {
    process.stdout.write("\x07");
  }, timeTime);
}

}