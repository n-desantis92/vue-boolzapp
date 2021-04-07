var app = new Vue ({
  el: "#app",

  data: {
    contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                showOption: false,
            },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    showOption: false,
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    showOption: false,
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [{
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                showOption: false,
            },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    showOption: false,
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received',
                    showOption: false,
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [{
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                showOption: false,
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    showOption: false,
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received',
                    showOption: false,
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                showOption: false,
            },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    showOption: false,
                },

            ],
        },
        {
            name: 'gianny',
            avatar: '_5',
            visible: true,
            messages: [{
                date: '28/03/2020 10:10:40',
                message: 'hey ci sei?',
                status: 'received',
                showOption: false,
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    showOption: false,
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received',
                    showOption: false,
                }
            ],
        },
        {
            name: 'Ivan',
            avatar: '_6',
            visible: true,
            messages: [{
                date: '28/03/2020 10:10:40',
                message: 'che facevi oggi al centro?',
                status: 'received',
                showOption: false,
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'al centro dove?',
                    status: 'sent',
                    showOption: false,
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'non eri tu?',
                    status: 'received',
                    showOption: false,
                }
            ],
        },
        {
            name: 'Mark',
            avatar: '_7',
            visible: true,
            messages: [{
                date: '28/03/2020 10:10:40',
                message: 'Ho perso tutto!',
                status: 'received',
                showOption: false,
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro?',
                    status: 'sent',
                    showOption: false,
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'sicurissimo!',
                    status: 'received',
                    showOption: false,
                }
            ],
        },
        {
            name: 'Jennifer',
            avatar: '_8',
            visible: true,
            messages: [{
                date: '28/03/2020 10:10:40',
                message: 'La gallina fa le uova',
                status: 'received',
                showOption: false,
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicura di star bene?',
                    status: 'sent',
                    showOption: false,
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'non lo so!',
                    status: 'received',
                    showOption: false,
                }
            ],
        },
    ],
    newmess: "",
    indexcont: 0,
    ricerca: "",
  },



  methods: {

    inviomess: function () {
      if (this.newmess !== "") {

        const nuovomess = {
              date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
              message: this.newmess,
              status: 'sent'
          };

        this.contacts[this.indexcont].messages.push(nuovomess);
        this.newmess = "";

        setTimeout(()=> {
          const nuovomess = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: "ok",
                status: 'received'
            };

          this.contacts[this.indexcont].messages.push(nuovomess);
        },1000);
      }

    },

    seleziona: function (i) {
      this.indexcont = i;
    },

    cerca: function () {
      this.contacts.forEach((item, i) => {
        console.log(item.name,i);
        if (this.ricerca != "") {

          if (item.name.toLowerCase().includes(this.ricerca.toLowerCase())) {
            item.visible = true;

          }else {
            item.visible = false;
          }
        }else {
          item.visible = true;
        }
      });
    },

    openOption: function(item,i) {
      if (item.showOption == false) {
        item.showOption = true;
      }else {
        item.showOption = false;
      }

    },
    deletMess:function (ind) {
          this.contacts[this.indexcont].messages.splice(ind,1);
    }
  }
})
