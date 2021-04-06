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
                status: 'sent'
            },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
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
                status: 'sent'
            },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
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
                status: 'received'
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
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
                status: 'sent'
            },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
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
                status: 'received'
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
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
                status: 'received'
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'al centro dove?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'non eri tu?',
                    status: 'received'
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
                status: 'received'
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'sicurissimo!',
                    status: 'received'
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
                status: 'received'
            },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicura di star bene?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'non lo so!',
                    status: 'received'
                }
            ],
        },
    ],
    newmess: "",
    indexcont: 0,
    ricerca: "",
    contattifiltrati: "",
    visibile: "",
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

    // filtraContatti: function () {
    //   this.contacts.filter(this.ricerca);
    // },

    seleziona: function (i) {
      this.indexcont = i;
    },

    cerca: function () {
      this.contacts.forEach((item, i) => {
        console.log(item.name,i);
        if (this.ricerca != "") {

          if (item.name.includes(this.ricerca)) {
            console.log("ce l'ho fatta");
            this.visible = "true";
            console.log(this.visible);

          }else {
            this.visible = "false";
            console.log(this.visible);

          }
        }
      });
    },
  }
})
