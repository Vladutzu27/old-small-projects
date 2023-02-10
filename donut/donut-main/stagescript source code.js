stage{
                     backdrop Planets
            ("gallery:Planets_Universe/Planets");
         default backdrop b("gallery:General/Black");
  actor Acorn {costume Acorn_Idle("gallery:Nature/Acorn Idle"
);when stage.started{this.opacity=1;this.y=120;pen.down();for(let j;
j <= 90; j++){/*i cannot write anything here except for a comment. */
for(let i=1;i<=45;i++){this.move(5);this.turnRight(8); }this.move(7);
this.turnRight( 4 );pen.hue                  += 1;}    this.say("FYI");
this.wait(2);this.say("");                    this.say("the src code")
this.wait(2); this.say(                          "is dount shaped!");
  this.wait(2); this.say(                      "this is a clone of");
    this.wait(2); this.say(                  "donut.c, a C script");
          this.wait(2); this.say("that's donut-shaped and makes");
            this.wait(2);     this.say("a spinning donut");
                this.x=0;this.wait(2);   this.say("made")
                 this.wait(2);this.say("out of text")}}

    //code made speciffically for the thumbnail
    
    actor Acorn_1 {
        costume donut("user:medintu.vlad/donut")
        when stage.started{
            this.hide();
        }
        when stage.keyPressed("space"){
            this.show();
            this.wait(2);
            this.hide();
        }
    }
}
