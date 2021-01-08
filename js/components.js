let app1=new Vue({
  el:'#app-1',
  data:{
    seninIlerleme: 100,
    canavarIlerleme: 100,
    oyunEkranı: true,
    playerSira: 'p',
    logs:[],
  },
  methods:{
    newGame:function(){
      this.seninIlerleme = 100;
      this.canavarIlerleme = 100;
      this.oyunEkranı = false;
      this.logs =[];
    },
    attack: function(){
      let randomA = Math.floor(Math.random() * 15);
      let randomB = Math.floor(Math.random() * 15);
      this.seninIlerleme = this.seninIlerleme - randomA;
      this.canavarIlerleme = this.canavarIlerleme - randomB;
      this.logs.push({turn: 'p', text: "CANAVARIN CANINI AZALTTTIN: (" + randomB + ")"});
      this.logs.push({turn: 'm', text: "CANAVAR SALDIRISI: (" + randomA + ")"});

    },
    specialAttack: function(){
      let randomA = Math.floor(Math.random() * 20);
      let randomB = Math.floor(Math.random() * 20);
      this.seninIlerleme = this.seninIlerleme - randomA;
      this.canavarIlerleme = this.canavarIlerleme - randomB;
      this.logs.push({turn: 'p', text: "ÖZEL SALDIRI: (" + randomB + ")"});
      this.logs.push({turn: 'm', text: "CANAVAR SALDIRISI: (" + randomA + ")"});
    },
    heal: function(){
      let randomA = Math.floor(Math.random() * 16);
      let randomB = Math.floor(Math.random() * 15);
      this.seninIlerleme = this.seninIlerleme + randomA - randomB;
      this.logs.push({turn: 'p', text: "İLK YARDIM: (" + randomA + ")"});
      this.logs.push({turn: 'm', text: "CANAVAR SALDIRISI: (" + randomB + ")"});
    },
    giveUp: function(){
      this.seninIlerleme = 0;
      let r = confirm('Kaybettiniz :( yeni oyun?');
      if(r){
        this.seninIlerleme = 100;
        this.canavarIlerleme = 100;
      }
    },

  },
  watch:{
    seninIlerleme: function(){
      if(this.seninIlerleme < 0){
        this.seninIlerleme = 0;
        let r = confirm('Kaybettiniz :( yeni oyun?');
        if(r){
          this.seninIlerleme = 100;
          this.canavarIlerleme = 100;
          this.logs=[];
        }
              this.oyunEkranı = true;

      }


    },
    canavarIlerleme: function(){
      if(this.canavarIlerleme < 0){
        this.canavarIlerleme = 0;
          let r = confirm('Tebrikler kazandınız!!! :) yeni oyun?');
          if(r){
            this.seninIlerleme = 100;
            this.canavarIlerleme = 100;
            this.logs=[];
          }
          this.oyunEkranı = true;

      }

    },
  },
});
