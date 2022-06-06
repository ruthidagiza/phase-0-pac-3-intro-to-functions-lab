function shout(string) {
    // todo
    return string.toUpperCase();

  }
  function whisper (string) {
    return string.toLowerCase( );
  }

  function logShout (string) {
    console.log(string.toUpperCase( ));
  }

  function logWhisper (string) {
    console.log(string.toLowerCase( ));
  }

  function sayHiToHeadphonedRoommate (string) {
    var cantanswer = "I can't hear you!";
    var  yesanswer= "YES INDEED!";
    var lovetoanswer = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return cantanswer;
    }

    else if (string.toUpperCase(string) === string) {
      return yesanswer;
    }
    else if ("Let's have dinner together!" === string) {
      return lovetoanswer
    }
  }

