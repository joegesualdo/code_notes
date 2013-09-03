//////////////////////////////////////////////////////////////////////////////////// 
/////////////////////***INTRODUCTION TO FUNCTIONS****///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////// 
$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});
// HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Magic!</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <div id="red"></div>
        <div id="blue"></div>
        <div id="yellow"></div>
        <div id="green"></div>
    </body>
</html>
// CSS
div {
    height:100px;
    width:100px;
    display: inline-block;
}

#red {
    background-color:#FF0000;
}

#blue {
    background-color:#0000FF;
}

#yellow {
    background-color:#E2BE22;
}

#green {
    background-color:#008800;
}

// --------------------------------------------------------------------------------
$(document).ready(function() {
    $('div').fadeOut(1000);
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title></title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
        <div></div>   
  </body>
</html>
// CSS
div {
    height:100px;
    width:100px;
    background-color:#FF0000;
    border-radius:5px;
}

// --------------------------------------------------------------------------------
$(document).ready(function() {
    $('#green').fadeOut(1000);
});
// HTML
<!DOCTYPE html>
<html>
    <head>
      <title></title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
        <div></div>
        <div id="green"></div>
  </body>
</html>
// CSS
div {
    height:200px;
    width:100px;
    background-color:#FF0000;
    border-radius:5px;
    margin-bottom:5px;
}

#green {
    background-color:#008800;
}

// --------------------------------------------------------------------------------
$(document).ready(function() {
    $('#notready').fadeOut(1000);
});
 // HTML
 <!DOCTYPE html>
<html>
    <head>
    <title>What Say You?</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
        <div id="ready">I'm ready!</div>
        <div id="notready">You'll never take me alive, jQuery!</div>
  </body>
</html>
// CSS
div {
    height:100px;
    width:100px;
    border-radius:5px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-family: Verdana, Arial, Sans-Serif;
    margin-right:5px;
}

#ready {
    background-color:#008800;
    color:#FFFFFF;
}

#notready {
    background-color:#FF0000;
    color:#FFFFFF;
}

// --------------------------------------------------------------------------------
var paragraph = $('p');
// HTML
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <p></p>
    </body>
</html>

// --------------------------------------------------------------------------------
$(document).ready(function(){});

// --------------------------------------------------------------------------------
$(document).ready(function() {
    $('div').slideDown('slow');
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Ta Daaa!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div><br/><strong>Im the Header!</strong></div>   
  </body>
</html>
// CSS
div {
    position: absolute;
    margin: -10px 0 0 -8px;
    height: 60px;
    width: 100%;
    background-color: #008800;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    display:none;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').mouseenter(function(){
        $('div').fadeTo('fast', 1);
    });
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Button Magic</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script src='script.js' type='text/javascript'></script>
  </head>
  <body>
     <div><br/><strong>Click Me!</strong></div>   
  </body>
</html>
// CSS
div {
    height: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: #69D2E7;
    text-align: center;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    opacity: 0.5;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').mouseenter(function(){
        $('div').fadeTo('fast', 1);
    }).mouseleave(function(){
        $('div').fadeTo('fast', .5)
    });
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Button Magic</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script src='script.js' type='text/javascript'></script>
  </head>
  <body>
     <div><br/><strong>Click Me!</strong></div>   
  </body>
</html>
// CSS
div {
    height: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: #69D2E7;
    text-align: center;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    opacity: 0.5;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    function buttonenter(speed, opacity) {
        $('div').fadeTo(speed, opacity);}
     
    $('div').mouseenter(function(){
        $('div').fadeTo('fast', 1);
    }).mouseleave(function(){
        $('div').fadeTo('fast', .5);
    });
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Button Magic</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script src='script.js' type='text/javascript'></script>
  </head>
  <body>
     <div><br/><strong>Click Me!</strong></div>   
  </body>
</html>
// CSS
div {
    height: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: red;
    text-align: center;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    opacity: 0.5;
}

//////////////////////////////////////////////////////////////////////////////////// 
/////////////////////**jQuery Functions and Selectors****///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////// 

$(document).ready(function(){
    $('div').fadeIn('slow');
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Fade In!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div></div>   
  </body>
</html>
// CSS
div {
    height: 100px;
    width: 100px;
    background-color: #F38630;
    display: none;
    border-radius: 5px;
}

// --------------------------------------------------------------------------------
$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeToggle('slow');    
    });
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Vanishing Act</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div class="vanish"></div>
        <div class="vanish"></div>
        <div class="vanish"></div>
        <div class="vanish"></div>
        <br/><button>Click Me!</button>
  </body>
</html>
// CSS
.vanish {
    height: 100px;
    width: 100px;
    display: inline-block;
    background-color: #F38630;
    border-radius: 5px;
}

// --------------------------------------------------------------------------------
$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Vanishing Act</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div id="blue"></div>
        <div></div>
        <div></div>
        <div></div>
        <br/><button>Click Me!</button>
  </body>
</html>
// CSS
div {
    height: 100px;
    width: 100px;
    display: inline-block;
    background-color: #F38630;
    border-radius: 5px;
}

#blue {
    background-color: #A7DBD8;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('.pink, .red').fadeTo('slow', 0);
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Result</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div class='red'></div>
        <div></div>
        <div class='pink'></div>
        <div></div>
        <div class='pink'></div>
        <div></div>
        <div class='red'></div>
        <div></div>
        <div class='red'></div>
        <div></div>
        <div class='pink'></div>
        <div class='pink'></div>
        <div class='pink'></div>
        <div></div>
        <div class='red'></div>
        <div></div>
        <div class='red'></div>
        <div></div>
        <div class='red'></div>
        <div></div>
        <div class='pink'></div>
        <div class='red'></div>
        <div class='red'></div>
        <div class='red'></div>
        <div></div>
        <div class='pink'></div>
        <div></div>
        <div></div>
        <div></div>
        <div class='pink'></div>
        <div></div>
        <div class='red'></div>
        <div class='red'></div>
        <div class='pink'></div>
        <div class='red'></div>
        <div></div>
        <div class='red'></div>
        <div></div>
        <div class='red'></div>
        <div></div>
        <div class='pink'></div>
        <div></div>
        <div class='pink'></div>
        <div class='pink'></div>
  </body>
</html>
// CSS
div {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: #FF9C5B;
    display: inline-block;
}

.red {
    background-color: #E84A5F;
}

.pink {
    background-color: #FF847C;
}

// --------------------------------------------------------------------------------
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Check 'this' Out!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
  </body>
</html>
// CSS
div {
    height: 100px;
    width: 100px;
    background-color: #4ECDC4;
    border-radius: 5px;
    display: inline-block;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('.slide').click(function(){
        $('.panel').slideDown();
    })
});
// HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Slide Panel</title>
        <script type="text/javascript" src="script.js"></script>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"></link>
    </head>
    <body>
        <div class="panel">
        <br />
        <br />
        <p>Now you see me!</p>
        </div>
        <p class="slide"><a href="#" class="pull-me">Slide Up/Down</a></p>
    </body>
</html>
// CSS
body {
    margin:0 auto;
    padding:0;
  width:200px;
    text-align:center;
}
a:hover{
    -webkit-box-shadow: 0 0 8px #FFD700;
    -moz-box-shadow: 0 0 8px #FFD700;
    box-shadow: 0 0 8px #FFD700;
    cursor:pointer;
}
.panel {
  background: #ffffbd;
    background-size:90% 90%;
    height:300px;
  display:none;
    font-family:garamond,times-new-roman,serif;
}
.panel p{
    text-align:center;
}
.slide {
  margin:0;
  padding:0;
  border-top:solid 2px #cc0000;
}
.pull-me {
  display:block;
    position:relative;
    right:-25px;
    width:150px;
    height:20px;
  font-family:arial,sans-serif;
    font-size:14px;
  color:#ffffff;
    background:#cc0000;
  text-decoration:none;
    -moz-border-bottom-left-radius:5px;
    -moz-border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
}
.pull-me p {
    text-align:center;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('.pull-me').click();
});
// HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Slide Panel</title>
        <script type="text/javascript" src="script.js"></script>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"></link>
    </head>
    <body>
        <div class="panel">
        <br />
        <br />
        <p>Now you see me!</p>
        </div>
        <p class="slide"><a href="#" class="pull-me">Slide Up/Down</a></p>
    </body>
</html>
// CSS
body {
    margin:0 auto;
    padding:0;
  width:200px;
    text-align:center;
}
a:hover{
    -webkit-box-shadow: 0 0 8px #FFD700;
    -moz-box-shadow: 0 0 8px #FFD700;
    box-shadow: 0 0 8px #FFD700;
    cursor:pointer;
}
.panel {
  background: #ffffbd;
    background-size:90% 90%;
    height:300px;
  display:none;
    font-family:garamond,times-new-roman,serif;
}
.panel p{
    text-align:center;
}
.slide {
  margin:0;
  padding:0;
  border-top:solid 2px #cc0000;
}
.pull-me {
  display:block;
    position:relative;
    right:-25px;
    width:150px;
    height:20px;
  font-family:arial,sans-serif;
    font-size:14px;
  color:#ffffff;
    background:#cc0000;
  text-decoration:none;
    -moz-border-bottom-left-radius:5px;
    -moz-border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
}
.pull-me p {
    text-align:center;
}

//////////////////////////////////////////////////////////////////////////////////// 
/////////////////////**Modifying HTML Elements****///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////// 

var $h1 = $('<h1>Hello</h1>');
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body></body>
</html>

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('body').append('<p>I\'m a paragraph!</p>');
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body></body>
</html>

// --------------------------------------------------------------------------------
$(document).ready(function(){
   $('#one').after('<p>woop</p>')
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div class="container">
            <h2>Greetings</h2>
            <div id="one">Div #1</div>
            <div id="two">Div #2</div>
        </div>   
  </body>
</html>

// --------------------------------------------------------------------------------
$(document).ready(function(){
   $('#two').after('<p>woop</p>');
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div class="container">
            <h2>Greetings</h2>
            <div id="one">Div #1</div>
            <div id="two">Div #2</div>
        </div>   
  </body>
</html>

// --------------------------------------------------------------------------------
$(document).ready(function(){
   $('#two').after('<p>woop</p>');
   $('p').remove()
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div class="container">
            <h2>Greetings</h2>
            <div id="one">Div #1</div>
            <div id="two">Div #2</div>
        </div>   
  </body>
</html>

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('#text').click(function(){
        $(this).addClass('highlighted');
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Highlights</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div id="title" class="highlighted">Im highlighted!</div>
        <div id="text">Highlight me, too!</div>
  </body>
</html>
// CSS
#title {
    background-color: #C02942;
    border-radius: 5px;
    text-align: center;
    font-family: Verdana, Arial, Sans-Serif;
    color: #FFFFFF;
    width: 200px;
    height: 25px;
}

#text {
    background-color: #0B486B;
    border-radius: 5px;
    text-align: center;
    font-family: Vivaldi, Cursive;
    color: #FFFFFF;
    width: 200px;
    height: 25px;
}

.highlighted {
    -webkit-box-shadow: 0 0 8px #FFD700;
    -moz-box-shadow: 0 0 8px #FFD700;
    box-shadow: 0 0 8px #FFD700;
    cursor:pointer;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('#text').click(function(){
        $(this).toggleClass('highlighted');
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Highlights</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div id="title" class="highlighted">Im highlighted!</div>
        <div id="text">Highlight me, too!</div>
  </body>
</html>
// CSS
#title {
    background-color: #C02942;
    border-radius: 5px;
    text-align: center;
    font-family: Verdana, Arial, Sans-Serif;
    color: #FFFFFF;
    width: 200px;
    height: 25px;
}

#text {
    background-color: #0B486B;
    border-radius: 5px;
    text-align: center;
    font-family: Vivaldi, Cursive;
    color: #FFFFFF;
    width: 200px;
    height: 25px;
}

.highlighted {
    -webkit-box-shadow: 0 0 8px #FFD700;
    -moz-box-shadow: 0 0 8px #FFD700;
    box-shadow: 0 0 8px #FFD700;
    cursor:pointer;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').height('200px').width('200px').css({'border-radius':'10px'})
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Result</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div></div>   
  </body>
</html>
// CSS
div {
    height: 50px;
    width: 300px;
    border-radius:0;
    background-color: #2C7CC3;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('p').html('jQuery magic in action!');
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <p>Im about to change!</p>   
  </body>
</html>

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
    });
    
});
// HTML
<!DOCTYPE html>
<html>
    <head>
      <title>To Do</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
    <h2>To Do</h2>
    <form name="checkListForm">
      <input type="text" name="checkListItem"/>
    </form>
    <div id="button">Add!</div>
    <br/>
    <div class="list"></div>
  </body>
</html>
// CSS
h2 {
    font-family:arial;
}

form {
    display: inline-block;
}

#button{
    display: inline-block;
    height:20px;
  width:70px;
  background-color:#cc0000;
  font-family:arial;
  font-weight:bold;
  color:#ffffff;
  border-radius: 5px;
  text-align:center;
  margin-top:2px;
}

.list {
  font-family:garamond;
  color:#cc0000;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">'+toAdd+'</div>');
    });
    
});
// HTML
<!DOCTYPE html>
<html>
    <head>
      <title>To Do</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
    <h2>To Do</h2>
    <form name="checkListForm">
      <input type="text" name="checkListItem"/>
    </form>
    <div id="button">Add!</div>
    <br/>
    <div class="list"></div>
  </body>
</html>
// CSS
h2 {
    font-family:arial;
}

form {
    display: inline-block;
}

#button{
    display: inline-block;
    height:20px;
  width:70px;
  background-color:#cc0000;
  font-family:arial;
  font-weight:bold;
  color:#ffffff;
  border-radius: 5px;
  text-align:center;
  margin-top:2px;
}

.list {
  font-family:garamond;
  color:#cc0000;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">'+toAdd+'</div>');
    });
    $(document).on('click', '.item', function(){
        $(this).remove();
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
      <title>To Do</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
    <h2>To Do</h2>
    <form name="checkListForm">
      <input type="text" name="checkListItem"/>
    </form>
    <div id="button">Add!</div>
    <br/>
    <div class="list"></div>
  </body>
</html>
// CSS
h2 {
    font-family:arial;
}

form {
    display: inline-block;
}

#button{
    display: inline-block;
    height:20px;
  width:70px;
  background-color:#cc0000;
  font-family:arial;
  font-weight:bold;
  color:#ffffff;
  border-radius: 5px;
  text-align:center;
  margin-top:2px;
}

.list {
  font-family:garamond;
  color:#cc0000;
}


//////////////////////////////////////////////////////////////////////////////////// 
/////////////////////**jQuery Events****///////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    $('button').click(function() {
      var toAdd = $("input[name=message]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
      <title>Result</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <form>
        MESSAGE: <input type="text" name="message" value="Type your text here!">
        </form>
        <button>Add!</button><br/>
        <div id="messages"></div>
  </body>
</html>
// CSS
form {
    font-size: 12px;
    font-family: Verdana, Arial, Sans-Serif;
    display: inline-block;
}
#messages {
    font-size: 14px;
  font-family: Garamond, Times, Serif;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').fadeOut('fast');
})
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Kapow!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div></div>   
  </body>
</html>
// CSS
body {
    background-image: url('http://bit.ly/UpQgJ6');
    repeat: no-repeat;
}

div {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #008800;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#003500), to(#008800));
    background-image: -webkit-linear-gradient(left, #003500, #008800); 
    background-image:    -moz-linear-gradient(left, #003500, #008800);
    background-image:     -ms-linear-gradient(left, #003500, #008800);
    background-image:      -o-linear-gradient(left, #003500, #008800);
}

.red {
    background-color: #CC0000;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#330000), to(#CC0000));
    background-image: -webkit-linear-gradient(left, #330000, #CC0000); 
    background-image:    -moz-linear-gradient(left, #330000, #CC0000);
    background-image:     -ms-linear-gradient(left, #330000, #CC0000);
    background-image:      -o-linear-gradient(left, #330000, #CC0000);
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').on('click', function(){
        $(this).fadeOut('fast');
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Kapow!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div></div>   
  </body>
</html>
// CSS
body {
    background-image: url('http://bit.ly/UpQgJ6');
    repeat: no-repeat;
}

div {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #008800;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#003500), to(#008800));
    background-image: -webkit-linear-gradient(left, #003500, #008800); 
    background-image:    -moz-linear-gradient(left, #003500, #008800);
    background-image:     -ms-linear-gradient(left, #003500, #008800);
    background-image:      -o-linear-gradient(left, #003500, #008800);
}

.red {
    background-color: #CC0000;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#330000), to(#CC0000));
    background-image: -webkit-linear-gradient(left, #330000, #CC0000); 
    background-image:    -moz-linear-gradient(left, #330000, #CC0000);
    background-image:     -ms-linear-gradient(left, #330000, #CC0000);
    background-image:      -o-linear-gradient(left, #330000, #CC0000);
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').on('click', function(){
        $(this).fadeOut('fast');
    }).on('hover', function(){
        $(this).addClass('red');
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Kapow!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div></div>   
  </body>
</html>
// CSS
body {
    background-image: url('http://bit.ly/UpQgJ6');
    repeat: no-repeat;
}

div {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #008800;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#003500), to(#008800));
    background-image: -webkit-linear-gradient(left, #003500, #008800); 
    background-image:    -moz-linear-gradient(left, #003500, #008800);
    background-image:     -ms-linear-gradient(left, #003500, #008800);
    background-image:      -o-linear-gradient(left, #003500, #008800);
}

.red {
    background-color: #CC0000;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#330000), to(#CC0000));
    background-image: -webkit-linear-gradient(left, #330000, #CC0000); 
    background-image:    -moz-linear-gradient(left, #330000, #CC0000);
    background-image:     -ms-linear-gradient(left, #330000, #CC0000);
    background-image:      -o-linear-gradient(left, #330000, #CC0000);
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').dblclick(function(){
        $(this).fadeOut('fast');
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Dubba Click</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div></div>   
  </body>
</html>
// CSS
div {
    height: 100px;
    width: 100px;
    border-radius: 5px;
    background-color: #ABCDEF;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').on('mouseenter', function(){
        $(this).fadeTo('fast', 1);
    }).on('mouseleave', function(){
        $(this).fadeTo('fast', .25);
    });
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Ghostly Divs</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div></div>   
  </body>
</html>
// CSS
div {
    height: 100px;
    width: 100px;
    border-radius: 5px;
    background-color: #ABCDEF;
    opacity: 0.25;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('input').on('focus', function(){
        $(this).css({'outline-color':'#FF0000'});
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Time to Focus!</title>
    <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
    <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
    <form>
      Name: <input type='text' name='name'></input>
    </form>
  </body>
</html>
// CSS
input {
    font-family: Verdana, Arial, Sans-Serif;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $(this).on('keydown', function(){
        $('div').animate({'left':'+=10px'}, 500);
    });
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Div Racer</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div></div>   
  </body>
</html>
// CSS
div {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    background-color: #FF0000;
    position: relative;
}

// --------------------------------------------------------------------------------
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
      case 65:
        $('img').animate({left: "-=10px"}, 'fast');
        break;
      case 83:
        $('img').animate({top: "+=10px"}, 'fast');
        break;
      case 87:
        $('img').animate({top: "-=10px"}, 'fast');
          break;
      case 68:
        $('img').animate({left: "+=10px"}, 'fast');
            break;
      default:
        break;
    }
  });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
      <title>Super Mario!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
    <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <img src="http://i1061.photobucket.com/albums/t480/ericqweinstein/mario.jpg"/>
  </body>
</html>
// CSS
img {
    position: relative;
    left: 0;
    top: 0;
}

//////////////////////////////////////////////////////////////////////////////////// 
/////////////////////**jQuery Effects****///////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
    $('div').hide();
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Vanishing Act</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <div></div>   
  </body>
</html>
// CSS
div {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #ABCDEF;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('img').animate({top:'100px'}, 1000)
});
// HTML
<!DOCTYPE html>
<html>
    <head>
    <title>Going Down</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
  </head>
  <body>
        <img src="http://i1061.photobucket.com/albums/t480/ericqweinstein/elevator.png"/>   
  </body>
</html>
// CSS
body {
    margin: 0;
    padding: 0;
}
img {
    position: absolute;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').on('click', function(){
        $(this).effect('explode'); // THIS IS JQuery UI
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Krypton Redux</title>
    <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
// CSS
body {
    background-image: url('http://bit.ly/UpQgJ6');
    repeat: no-repeat;
}

div {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #008800;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#003500), to(#008800));
    background-image: -webkit-linear-gradient(left, #003500, #008800); 
    background-image:    -moz-linear-gradient(left, #003500, #008800);
    background-image:     -ms-linear-gradient(left, #003500, #008800);
    background-image:      -o-linear-gradient(left, #003500, #008800);
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').on('click', function(){
        $(this).effect('bounce', {times:3}, 500);
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Krypton Redux</title>
    <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
// CSS
body {
    background-image: url('http://bit.ly/UpQgJ6');
    repeat: no-repeat;
}

div {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #008800;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#003500), to(#008800));
    background-image: -webkit-linear-gradient(left, #003500, #008800); 
    background-image:    -moz-linear-gradient(left, #003500, #008800);
    background-image:     -ms-linear-gradient(left, #003500, #008800);
    background-image:      -o-linear-gradient(left, #003500, #008800);
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').on('click', function(){
        $(this).effect('slide');
    });
});
// HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Krypton Redux</title>
    <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
// CSS
body {
    background-image: url('http://bit.ly/UpQgJ6');
    repeat: no-repeat;
}

div {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #008800;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#003500), to(#008800));
    background-image: -webkit-linear-gradient(left, #003500, #008800); 
    background-image:    -moz-linear-gradient(left, #003500, #008800);
    background-image:     -ms-linear-gradient(left, #003500, #008800);
    background-image:      -o-linear-gradient(left, #003500, #008800);
}

// --------------------------------------------------------------------------------
$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});
// HTML
<!DOCTYPE html>
<html>
    <head>
      <title>Behold!</title>
        <link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  </head>
  <body>
        <div id="menu">
            <h3>jQuery</h3>
            <div>
                <p>jQuery is a JavaScript library that makes your websites look absolutely stunning.</p>
            </div>
            <h3>jQuery UI</h3>
            <div>
                <p>jQuery UI includes even more jQuery goodness!</p>
            </div>
            <h3>JavaScript</h3>
            <div>
                <p>JavaScript is a programming language used in web browsers, and its what powers jQuery and jQuery UI. You can learn about JavaScript in the <a href="http://www.codecademy.com/tracks/javascript" target="blank" style="text-decoration:none; color:#F39814">JavaScript track</a> here on Codecademy.</a></p>
            </div>
        </div>
  </body>
</html>

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('#car').draggable();
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title></title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  </head>
  <body>
        <div id="car">
            <div id="top"></div>
            <div id="bottom"></div>
            <div id="fwheel"></div>
            <div id="bwheel"></div>
        </div>   
  </body>
</html>
// CSS
#top {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 5px;
    background-color: #cc0000;
    left: 25px;
}
#bottom {
  position: relative;
  height:25px;
  width: 100px;
  background-color: #cc0000;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  top: -25px;
}
#fwheel {
  position: relative;
  height:20px;
  width:20px;
  border-radius: 100%;
  background-color: black;
  top: -35px;
  left: 5px;
}
#bwheel {
  position: relative;
  height:20px;
  width:20px;
  border-radius: 100%;
  background-color: black;
  top: -55px;
  left: 75px;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('div').resizable();
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title></title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  </head>
  <body>
        <div>Resize Me!</div>   
  </body>
</html>
// CSS
div {
    height: 100px;
    background-color: #ABCDEF;
    font-family: Verdana, Arial, Sans-Serif;
    font-size: 1em;
    text-align: center;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('ol').selectable();
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Select Ye Favorite</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  </head>
  <body>
        <ol>
            <li>Super Mario Bros.</li>
            <li>Tetris</li>
            <li>Legend of Zelda: Link's Awakening</li>
            <li>Kirby's Dream World</li>
            <li>Burger Time</li>
            <li>Pokémon Red</li>
            <li>Pokémon Blue</li>
        </ol>   
  </body>
</html>
// CSS
ol {
    list-style-type: none;
  position: relative;
  left: -20px;
}

ol li {
  background: #eeeeee;
  border-radius: 5px;
  border: 1px solid black;
  margin: 3px;
  padding: 0.4em;
  font-size: 1em;
  height: 16px;
  font-family: Verdana, Arial, Sans-Serif;
}

ol .ui-selected {
  background: #F39814; color: white;
}

// --------------------------------------------------------------------------------
$(document).ready(function(){
    $('ol').sortable();
});
// HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Select Ye Favorite</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  </head>
  <body>
        <ol>
            <li>Super Mario Bros.</li>
            <li>Tetris</li>
            <li>Legend of Zelda: Link's Awakening</li>
            <li>Kirby's Dream World</li>
            <li>Burger Time</li>
            <li>Pokémon Red</li>
            <li>Pokémon Blue</li>
        </ol>   
  </body>
</html>
// CSS
ol {
    list-style-type: none;
  position: relative;
  left: -20px;
}

ol li {
  background: #eeeeee;
  border-radius: 5px;
  border: 1px solid black;
  margin: 3px;
  padding: 0.4em;
  font-size: 1em;
  height: 16px;
  font-family: Verdana, Arial, Sans-Serif;
}

ol .ui-selected {
  background: #F39814; color: white;
}

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

