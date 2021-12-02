var library = [
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    },
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Alisher Navoiy',
        title: 'Xamsa',
        libraryID: 6354
    },
    {
        author: 'Ahmad Lutfiy Qozonchi',
        title: 'Saodat asr qissalari',
        libraryID: 9328
    },
    {
        author: 'J.K.Rowling',
        title: 'Harry Potter',
        libraryID: 3982
    },
    {
        author: 'Malala Yusufzoy',
        title: 'Men Malalaman',
        libraryID: 1754
    },
    {
        author: 'Javlon Jovliev',
        title: "Qo'rqma",
        libraryID: 4374
    },
    {
        author: 'K.Tolno',
        title: 'The Wolf',
        libraryID: 9458
    },
    {
        author: 'Vikas Svarup',
        title: 'Xarobadan chiqqan millioner',
        libraryID: 8756
    }
];

var choose = prompt('Choose your interest : ' + '' + '\n' + '' + 1 + '.Author' + '' + '\n' + 2 + '.Library ID')

if (choose == 1) {
    var resultAuthor = library.sort((a,b) => {
        if (a.author > b.author) {
           return 1
        } else if (a.author < b.author) {
            return -1
        } else {
            return 0
        }
    })
    console.log(resultAuthor)

} else if (choose == 2) {
    var resultID = library.sort((a,b) => {
        return a.libraryID - b.libraryID
    })
    console.log(resultID)
}