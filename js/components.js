let app1=new Vue({
  el:'#app-1',
  data:{
    yourProgress: 100,
    monsterProgress: 100,
    gameScreen: true,
    logs:[],
  },
  methods:{
    newGame:function(){
      this.yourProgress = 100;
      this.monsterProgress = 100;
      this.gameScreen = false;
      this.logs =[];
    },
    attack: function(){
      let randomA = Math.floor(Math.random() * 15);
      let randomB = Math.floor(Math.random() * 15);
      this.yourProgress = this.yourProgress - randomA;
      this.monsterProgress = this.monsterProgress - randomB;
      this.logs.push({turn: 'p', text: "YOU HIT MONSTER: " + randomB + " DAMAGE!"});
      this.logs.push({turn: 'm', text: "MONSTER HIT YOU: " + randomA + " DAMAGE!"});

    },
    specialAttack: function(){
      let randomA = Math.floor(Math.random() * 20);
      let randomB = Math.floor(Math.random() * 20);
      this.yourProgress = this.yourProgress - randomA;
      this.monsterProgress = this.monsterProgress - randomB;
      this.logs.push({turn: 'p', text: "SPECIAL ATTACK: " + randomB + " DAMAGE!"});
      this.logs.push({turn: 'm', text: "MONSTER HIT YOU: " + randomA + " DAMAGE!"});
    },
    heal: function(){
      let randomA = Math.floor(Math.random() * 16);
      let randomB = Math.floor(Math.random() * 15);
      this.yourProgress = this.yourProgress + randomA - randomB;
      this.logs.push({turn: 'p', text: "FIRST AID: " + randomA + " DAMAGE!"});
      this.logs.push({turn: 'm', text: "MONSTER HIT YOU: " + randomB + " DAMAGE!"});
    },
    giveUp: function(){
      this.yourProgress = 0;
      let r = confirm('You lose :( New game?');
      if(r){
        this.yourProgress = 100;
        this.monsterProgress = 100;
      }
    },

  },
  watch:{
    yourProgress: function(){
      if(this.yourProgress <= 0){
        this.yourProgress = 0;
        let r = confirm('You lose :( New game?');
        if(r){
          this.yourProgress = 100;
          this.monsterProgress = 100;
          this.logs=[];
        }
              this.gameScreen = true;

      }


    },
    monsterProgress: function(){
      if(this.monsterProgress <= 0){
        this.monsterProgress = 0;
          let r = confirm('Congratulations! You win! :( New Game?');
          if(r){
            this.yourProgress = 100;
            this.monsterProgress = 100;
            this.logs=[];
          }
          this.gameScreen = true;

      }

    },
  },
});
